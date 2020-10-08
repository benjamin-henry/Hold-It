import {Dimensions} from 'react-native'

export default () => {
    return {
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
    }
}