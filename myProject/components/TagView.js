import React, { Component } from 'react'
import { 
    View,
    StyleSheet, 
} from 'react-native';
import TagButton from '../common/TagButton';

const onBackgroundColor  = '#ef6b00'
const offBackgroundColor = 'white'
const onText             = 'white'
const offText            = '#ef6b00'
const onBorder           = 'white'
const offBorder          = '#ef6b00'

class TagView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
        }
    }

    onPress = (tag) => {
        let selected
        console.log('Here')
        if (this.props.isExclusive) {
            selected = [tag]
        } else {
            selected = addOrRemove(this.state.selected, tag)
        }

        this.setState({
            selected: selected
        })
    }

    addOrRemove = (array, item) => {
        const exists = array.includes(item)
        if (exists) {
            return array.filter((c) => { return c !== item })
        } else {
            const result = array
            result.push(item)
            return result
        }
    }

    makeButtons() {
        return this.props.all.map((tag, i) => {
            const on              = this.state.selected.includes(tag)
            const backgroundColor = on ? onBackgroundColor: offBackgroundColor
            const textColor       = on ? onText           : offText
            const borderColor     = on ? onBorder         : offBorder
            return (
                <TagButton
                    backgroundColor = {backgroundColor}
                    textColor       = {textColor}
                    borderColor     = {borderColor}
                    onPress         = {() => { this.onPress(tag) }}
                    key             = {i}
                    title           = {tag} 
                />
            )
        })
    }


    render() {
        return (
            <View style = {styles.container}>
                {this.makeButtons()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20
    }
})

export default TagView;