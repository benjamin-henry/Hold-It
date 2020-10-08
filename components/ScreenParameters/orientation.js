import * as ScreenOrientation from 'expo-screen-orientation';


export const setScreenOrientation = async (orientation) => {
    // const res = await ScreenOrientation.getOrientationAsync()
    // console.log(res)
    // ScreenOrientation.getOrientationAsync()
    switch (orientation) {
        case "LL":
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
            break;

        case "LR":
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
            break;

        case "PU":
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            break;
    
        case "PD":
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
            break;
    
        default:
            break;
    }
}