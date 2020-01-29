/* eslint-disable no-undef */
import React from 'react'
import { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import Button from './src/components/Button'
import ButtonSelected from './src/components/ButtonSelected'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  displayValue2: '0=0=0',
  displayValue3: '0=0=0',
  displayValue4: '0=0=0',
  displayValue5: '0=0=0',
  displayValue6: '0=0=0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

// const App: () => React$Node = () => {
export default class App extends Component {
  state = { ...initialState }

  moreOrLess = () => {
    if (this.state.displayValue == 0){
      return
    } else if (this.state.values[0] == this.state.displayValue && this.state.values[0] != this.state.values[1]) {
      let values = [...this.state.values]
      let displayValue = [this.state.displayValue]
      values[0] = this.state.displayValue *-1
      displayValue = this.state.displayValue *-1
      this.setState({ 
        displayValue,
        values
      })} else if (this.state.values[1] == this.state.displayValue) {
        let values = [...this.state.values]
        let displayValue = [this.state.displayValue]
        values[1] = this.state.displayValue *-1
        displayValue = this.state.displayValue *-1
        this.setState({ 
          displayValue,
          values
        })}
      }
      
      percentual = () => {
        if (this.state.displayValue == 0){
          return
        } else if (this.state.values[0] == this.state.displayValue) {
          let values = [...this.state.values]
          let displayValue = [this.state.displayValue]
          values[0] = this.state.displayValue / 100
          displayValue = this.state.displayValue / 100
          this.setState({ 
            displayValue,
            values
          })} else if (this.state.values[1] == this.state.displayValue) {
            let values = [...this.state.values]
            let displayValue = [this.state.displayValue]
            values[0] = this.state.displayValue / 100
            displayValue = this.state.displayValue / 100
            this.setState({ 
              displayValue,
              values
            })}
          }
          
          addDigit = n => {
            const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
            
            if (n === '.' && !clearDisplay
            && this.state.displayValue.includes('.')) {
              return
            }
            
            const currentValue = clearDisplay ? '' : this.state.displayValue
            const displayValue = currentValue + n
            this.setState({ displayValue, clearDisplay: false })
            
            if (n !== '.') {
              const newValue = parseFloat(displayValue)
              const values = [...this.state.values]
              values[this.state.current] = newValue
              this.setState({ values })
            }
          }
          
          clearMemory = () => {
            this.setState({ ...initialState })
          }
          
          setOperation = operation => {
            console.log(this.state.operation)
            if (this.state.current === 0) {
              this.setState({ operation, current: 1, clearDisplay: true })
            } else {
              if (this.state.values[0] != 0 && this.state.values[1] === 0){
                this.setState({ operation, current: 1, clearDisplay: true })
              } else {
              const equals = operation === '='
              const values = [...this.state.values]
              try {
                values[0] = 
                eval(`${values[0]} ${this.state.operation} ${values[1]}`)
              } catch (e) {
                values[0] = this.state.values[0]
              }
              
              values[1] = 0
              this.setState({
                displayValue: `${values[0]}`,
                displayValue2: `${this.state.values[0]} ${this.state.operation} ${this.state.values[1]} = ${values[0]}`,
                displayValue3: this.state.displayValue2,
                displayValue4: this.state.displayValue3,
                displayValue5: this.state.displayValue4,
                displayValue6: this.state.displayValue5,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,
              })
            }
            }
            // console.log(this.state.operation)
            // console.log(`displayValue: ${this.state.displayValue}`)
            // console.log(`clearDisplay: ${this.state.clearDisplay}`)
            // console.log(`operation: ${this.state.operation}`)
            // console.log(`values: ${this.state.values}`)
            // console.log(`current: ${this.state.current}`)
            // console.log(`índice 0: ${this.state.displayValue == parseFloat(this.state.values[0])}`)
            // console.log(`índice 1: ${this.state.displayValue == parseFloat(this.state.values[1])}`)
            // console.log(`índice 0 vs 1: ${parseFloat(this.state.values[0]) == parseFloat(this.state.values[1])}\n\n\n`)
          }
          
          render() {
            return (
              <View style={styles.contanier}>
                <Display value={this.state.displayValue} value2={this.state.displayValue2} value3={this.state.displayValue3}
                  value4={this.state.displayValue4} value5={this.state.displayValue5} value6={this.state.displayValue6} />
                <View style={styles.buttons}>
                  <Button label="AC" onClick={this.clearMemory} />
                  <Button label="+/-" onClick={this.moreOrLess} />
                  <Button label="%" onClick={this.percentual} />
                  { this.state.operation === "/" ? <ButtonSelected label="/" operation onClick={this.setOperation}/> : 
                    <Button label="/" operation onClick={this.setOperation}/> }
                  <Button label="7" onClick={this.addDigit} />
                  <Button label="8" onClick={this.addDigit} />
                  <Button label="9" onClick={this.addDigit} />
                  { this.state.operation === "*" ? <ButtonSelected label="*" operation onClick={this.setOperation}/> : 
                    <Button label="*" operation onClick={this.setOperation}/> }
                  <Button label="4" onClick={this.addDigit} />
                  <Button label="5" onClick={this.addDigit} />
                  <Button label="6" onClick={this.addDigit} />
                  { this.state.operation === "-" ? <ButtonSelected label="-" operation onClick={this.setOperation}/> : 
                    <Button label="-" operation onClick={this.setOperation}/> }
                  <Button label="1" onClick={this.addDigit} />
                  <Button label="2" onClick={this.addDigit} />
                  <Button label="3" onClick={this.addDigit} />
                  { this.state.operation === "+" ? <ButtonSelected label="+" operation onClick={this.setOperation}/> : 
                    <Button label="+" operation onClick={this.setOperation}/> }
                  <Button label="0" double onClick={this.addDigit} />
                  <Button label="." onClick={this.addDigit}/>
                  <Button label="=" operation onClick={this.setOperation} />
                </View>
              </View>
  )}
}

// export default App


const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})