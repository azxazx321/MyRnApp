/**
* 全局样式变量
* 全局样式定义
*/
import { StyleSheet } from "react-native";
//全局样式变量
export let themeColor = '#009900' //智慧社区项目的主题色
export let themeColorLight = '#6EDA0C' //主题色的浅色
export let themeColorLighter = '#7AC67A' //主题色的更浅色
export let themeColorInverse = '#CCCC99' //主题色的反色
export let themeGrey = '#363636' //主题灰
export let themeGreyLight = '#8A8A8A' //主题灰的浅色
export let themeGreyLighter = '#F2F2F2' //主题灰的更浅色
export let themeGreyDark = '#000000' //主题灰的深色
export let textColor = themeGrey
export let textColorInverse = '#ffffff'
export let textColorGrey = themeGreyLight
export let textColorPlaceholder = themeGreyLight
export let textColorDisable = '#c0c0c0'
export let bgColor = '#ffffff'
export let bgColorGrey = themeGreyLighter
export let bgColorHover = '#f1f1f1'
export let bgColorMask = 'rgba(0,0,0,0.4)'
export let borderColor = '#c8c7cc'
export let borderWidth = 1
export let borderStyle = 'solid'
export let fontSizeSm = 12;
export let fontSizeBase = 14;
export let fontSizeLg = 16;
export let borderRadiusSm = 2;
export let borderRadiusBase = 3;
export let borderRadiusLg = 6;
export let borderRadiusCircle = '50%';
export let spacingRowSm = 5;
export let spacingRowBase = 10;
export let spacingRowLg = 15;
export let spacingColSm = 4;
export let spacingColBase = 8;
export let spacingColLg = 12;
//全局样式定义
let gss = StyleSheet.create({
//增加边框 border: 1px solid '#c8c7cc'
bordered:{
borderWidth,
borderStyle,
borderColor
}
})
export default gss;