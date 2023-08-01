import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Calculater = () => {
  const [input, setInput] = useState(0);

  const remhenler = input => {
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = '';
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }
      if (!operator) {
        setInput(input);
        return;
      }
      const [operand1, operand2] = input.split(operator).map(parseInt);
      let Result = [];
      switch (operator) {
        case '+': {
          Result = operand1 + operand2;
          setInput(Result);
          alert(typeof(Result))
          break;
        }

        case '-': {
          Result = operand1 - operand2;
          setInput(Result.toString());
          break;
        }

        case '*': {
          Result = operand1 * operand2;
          setInput(Result.toString());
          break;
        }

        case '/': {
          Result = operand1 / operand2;
          setInput(Result.toString());
          break;
        }
      }
    } catch (error) {
      setInput('Error', error);
    }
  };
  const hendleButtonClick = value => {
    if (value === 'C') {
      setInput('');
    } else if (value === '<') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      remhenler(input);
    } else {
      setInput(e => e + value);
    }
  };

  return (
    <View style={Styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 30, fontWeight: '500', color: '#0e0f0d'}}>
          Calculator
        </Text>
      </View>

      <View style={Styles.InnerContainer}></View>
      <View style={{flex: 2, alignItems: 'flex-end'}}>
        <Text style={{fontSize: 40, marginHorizontal: 20, color: '#272927'}}>
          {input}
        </Text>
      </View>
      <View style={{backgroundColor: '#cfcbca', height: 1}}></View>
      <View style={Styles.BottomContainer}>
        <View style={[Styles.bottominner, {}]}>
          <TouchableOpacity onPress={() => hendleButtonClick('C')}>
            <Text style={Styles.Bottomtxt}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('7')}>
            <Text style={Styles.Bottomtxt}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('4')}>
            <Text style={Styles.Bottomtxt}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('1')}>
            <Text style={Styles.Bottomtxt}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => hendleButtonClick('0')}>
            <Text style={Styles.Bottomtxt}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottominner}>
          <TouchableOpacity onPress={() => hendleButtonClick('<')}>
            <Text style={Styles.Bottomtxt}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('8')}>
            <Text style={Styles.Bottomtxt}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('5')}>
            <Text style={Styles.Bottomtxt}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('2')}>
            <Text style={Styles.Bottomtxt}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('00')}>
            <Text style={Styles.Bottomtxt}>00</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.bottominner}>
          <TouchableOpacity onPress={() => hendleButtonClick('%')}>
            <Text style={Styles.Bottomtxt}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('9')}>
            <Text style={Styles.Bottomtxt}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('6')}>
            <Text style={Styles.Bottomtxt}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('3')}>
            <Text style={Styles.Bottomtxt}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('.')}>
            <Text style={Styles.Bottomtxt}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.bottominner, {}]}>
          <TouchableOpacity onPress={() => hendleButtonClick('/')}>
            <Text style={Styles.Bottomtxt}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('*')}>
            <Text style={Styles.Bottomtxt}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('-')}>
            <Text style={Styles.Bottomtxt}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('+')}>
            <Text style={Styles.Bottomtxt}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hendleButtonClick('=')}>
            <Text style={Styles.Bottomtxt}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  InnerContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  BottomContainer: {
    flex: 3.6,
    flexDirection: 'row',
  },
  bottominner: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#edebeb',
  },
  Bottomtxt: {
    fontSize: 25,
    fontWeight: '600',
    color: '#373e40',
  },
});
export default Calculater;
