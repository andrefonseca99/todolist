import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

type Props = {
    desc: string,
    complete: boolean,
    onRemove: () => void,
    onUpdate: () => void
}

export function Task({desc, complete, onRemove, onUpdate }: Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.checkButton, {
                backgroundColor: complete ? '#5E60CE' : 'transparent',
                borderColor: complete ? '#5E60CE' : '#4EA8DE'
                }]} 
                onPress={onUpdate}
            >
                <Text style={[styles.checkIcon, {
                    color: complete ? '#F2F2F2' : 'transparent'
                }]}
                >
                    ✓
                </Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={[styles.taskText, { 
                    color : complete ? '#808080' : '#F2F2F2',
                    textDecorationLine: complete  === true ? 'line-through' : 'none'
                    }]}
                >
                    {desc}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
                <Image source={require('../../../assets/Vector.png')} style={styles.trashImage}></Image>
            </TouchableOpacity>
        </View>
    );
}