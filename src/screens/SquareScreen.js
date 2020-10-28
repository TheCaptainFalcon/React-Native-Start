import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// syntax for special variable that is constant like a configuration
const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount };
            // { red: 0, green: o, blue: 0, red: state.red + action.amount}

            // redefining a proprerty replaces the existing to the new one
            // { green: 0, blue: 0 , red: state.red + action.amount}

        case 'green':
            return {...state, green: state.green + action.amount };
        case 'blue':
            return {...state, blue: state.blue + action.amount };
        default:
            // in case an action results in an error or is incorrect
            // default syntax 
            return state;
    }
}

const SquareScreen = () => {

    // dispatch = runMyReducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue" 
            />
            <ColorCounter 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green" 
            
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green}, ${blue})` }} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;