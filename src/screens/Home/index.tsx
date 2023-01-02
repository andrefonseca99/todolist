import React, { useState } from 'react';
import { FlatList, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';

interface TaskProps {
    id: string,
    name: string,
    completed: boolean
}


export default function Home(){

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [taskName, setTaskName] = useState('');
    const [createdTasks, setCreatedTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [taskId, setTaskId] = useState('1');

    function handleTaskAdd(taskName: string){
        setTaskId(prevState => (parseInt(prevState)+1).toString());
        setTasks(prevState => [...prevState, {id: taskId, name: taskName, completed: false}]);
        setTaskName('');
        setCreatedTasks(prevState => prevState+1);
    }

    function handleTaskRemove(item: TaskProps){ 
        item.completed === false ? setCompletedTasks(prevState => prevState) : setCompletedTasks(prevState => prevState-1);
        setTasks(prevState => prevState.filter(task => task.name !== item.name));
        setCreatedTasks(prevState => prevState-1);
    }

    function handleUpdateTaskStatus(updatedTask: TaskProps){
        updatedTask.completed === false ? setCompletedTasks(prevState => prevState+1) : setCompletedTasks(prevState => prevState-1);
        updatedTask.completed === false ? updatedTask.completed = true : updatedTask.completed = false;
        setTasks(prevState => prevState.map(item => {
            if(item.id === updatedTask.id) {
                return updatedTask;
            }
            return item;
        }));
    }

    return(
        <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Image 
                source={require('../../../assets/Logo.png')}
                style={styles.logoImage}
            />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#808080'
                    onChangeText={setTaskName}
                    value={taskName}
                />
                <TouchableOpacity style={styles.button} onPress={() => {handleTaskAdd(`${taskName}`)}}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
                
        </View>

            <View style={styles.categories}>

                <View style={styles.category}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{createdTasks}</Text>
                    </View>
                </View>

                <View style={styles.category}>
                    <Text style={styles.completedText}>Concluídas</Text>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{completedTasks}</Text>
                    </View>
                </View>

            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Task
                        key={item.id}
                        desc={item.name}
                        complete={item.completed}
                        onRemove={() => handleTaskRemove(item)}
                        onUpdate={() => handleUpdateTaskStatus(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyContainer}>
                        <Image 
                            source={require('../../../assets/Clipboard.png')}
                            style={styles.clipboardImage}
                        />
                        <Text style={styles.boldEmptyText}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text  style={styles.emptyText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}