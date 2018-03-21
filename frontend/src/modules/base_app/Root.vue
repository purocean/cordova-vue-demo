<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
  </div>
</template>

<script>
import 'babel-polyfill'

import Vue from 'vue'
import FastClick from 'fastclick'
import YIcon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

import {
  Actionsheet,
  AlertPlugin,
  Badge,
  Blur,
  ButtonTab,
  ButtonTabItem,
  Calendar,
  Card,
  CellBox,
  CellFormPreview,
  Cell,
  CheckIcon,
  Checker,
  CheckerItem,
  Checklist,
  Clocker,
  ColorPicker,
  Confirm,
  ConfirmPlugin,
  Countdown,
  Countup,
  DatetimeRange,
  DatetimeView,
  Datetime,
  Divider,
  Drawer,
  Flexbox,
  FlexboxItem,
  Flow,
  FormPreview,
  Grid,
  GridItem,
  Group,
  GroupTitle,
  Icon,
  InlineCalendar,
  InlineLoading,
  InlineXNumber,
  LoadMore,
  Loading,
  LoadingPlugin,
  Marquee,
  MarqueeItem,
  Masker,
  Msg,
  Panel,
  Picker,
  Popover,
  PopupHeader,
  PopupPicker,
  PopupRadio,
  Popup,
  Previewer,
  Qrcode,
  Radio,
  Range,
  Rater,
  Search,
  Selector,
  Spinner,
  Step,
  Sticky,
  Swipeout,
  SwipeoutItem,
  SwipeoutButton,
  Swiper,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Timeline,
  Toast,
  ToastPlugin,
  ViewBox,
  WechatEmotion,
  XAddress,
  XButton,
  XCircle,
  XDialog,
  XHeader,
  XImg,
  XInput,
  XNumber,
  XProgress,
  XSwitch,
  XTable,
  XTextarea
} from 'vux'

FastClick.attach(window.document.body)
Vue.component('y-icon', YIcon)

Vue.component('actionsheet', Actionsheet)
Vue.component('badge', Badge)
Vue.component('blur', Blur)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.component('calendar', Calendar)
Vue.component('card', Card)
Vue.component('cell-box', CellBox)
Vue.component('cell-form-preview', CellFormPreview)
Vue.component('cell', Cell)
Vue.component('check-icon', CheckIcon)
Vue.component('checker', Checker)
Vue.component('checker-item', CheckerItem)
Vue.component('checklist', Checklist)
Vue.component('clocker', Clocker)
Vue.component('color-picker', ColorPicker)
Vue.component('confirm', Confirm)
Vue.component('countdown', Countdown)
Vue.component('countup', Countup)
Vue.component('datetime-range', DatetimeRange)
Vue.component('datetime-view', DatetimeView)
Vue.component('datetime', Datetime)
Vue.component('divider', Divider)
Vue.component('drawer', Drawer)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('flow', Flow)
Vue.component('form-preview', FormPreview)
Vue.component('grid', Grid)
Vue.component('gridItem', GridItem)
Vue.component('group', Group)
Vue.component('group-title', GroupTitle)
Vue.component('icon', Icon)
Vue.component('inline-calendar', InlineCalendar)
Vue.component('inline-loading', InlineLoading)
Vue.component('inline-x-number', InlineXNumber)
Vue.component('load-more', LoadMore)
Vue.component('loading', Loading)
Vue.component('marquee', Marquee)
Vue.component('marquee-item', MarqueeItem)
Vue.component('masker', Masker)
Vue.component('msg', Msg)
Vue.component('panel', Panel)
Vue.component('picker', Picker)
Vue.component('popover', Popover)
Vue.component('popup-header', PopupHeader)
Vue.component('popup-picker', PopupPicker)
Vue.component('popup-radio', PopupRadio)
Vue.component('popup', Popup)
Vue.component('previewer', Previewer)
Vue.component('qrcode', Qrcode)
Vue.component('radio', Radio)
Vue.component('range', Range)
Vue.component('rater', Rater)
Vue.component('search', Search)
Vue.component('selector', Selector)
Vue.component('spinner', Spinner)
Vue.component('step', Step)
Vue.component('sticky', Sticky)
Vue.component('swipeout', Swipeout)
Vue.component('swiperItem', SwipeoutItem)
Vue.component('swipeoutItem', SwipeoutItem)
Vue.component('swipeoutButton', SwipeoutButton)
Vue.component('swiper', Swiper)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('timeline', Timeline)
Vue.component('toast', Toast)
Vue.component('view-box', ViewBox)
Vue.component('wechat-emotion', WechatEmotion)
Vue.component('x-address', XAddress)
Vue.component('x-button', XButton)
Vue.component('x-circle', XCircle)
Vue.component('x-dialog', XDialog)
Vue.component('x-header', XHeader)
Vue.component('x-img', XImg)
Vue.component('x-input', XInput)
Vue.component('x-number', XNumber)
Vue.component('x-progress', XProgress)
Vue.component('x-switch', XSwitch)
Vue.component('x-table', XTable)
Vue.component('x-textarea', XTextarea)

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

export default {
  name: 'app',
}
</script>

<style>
body {
  background-color:#fbf9fe !important;
}
</style>
