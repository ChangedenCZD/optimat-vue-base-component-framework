<template>
    <section class="component-layout ui-base-component-framework-layout">
    </section>
</template>

<script>
    const Component = require('./component');
    export default new Component();
</script>

<style lang="scss" scoped="true">
    /*根字体*/
    @media (min-width: 1025px) {
        html {
            font-size: 28px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        html {
            font-size: 24px;
        }
    }

    @media (min-width: 376px) and (max-width: 768px) {
        html {
            font-size: 22px;
        }
    }

    @media (min-width: 321px) and (max-width: 375px) {
        html {
            font-size: 20px;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 18px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        position: relative;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .over-scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
    }

    .over-hidden {
        overflow: hidden;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
        background-color: #ededed;
    }

    input,
    button {
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border: none;
    }

    input {
        -webkit-appearance: none;
    }

    textarea {
        resize: none;
    }

    input, select, textarea, button {
        height: auto;
    }

    input:focus, select:focus, textarea:focus {
        border-color: #999;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        text-shadow: none;
        outline: none;
    }

    input::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    img {
        border: 0;
    }

    a {
        text-decoration: none;
        color: #4b4b57;
        padding: 0;
        margin: 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a:focus, a:active {
        outline: none;
        text-decoration: none;
        color: #4b4b57;
        border: none;
    }

    /**禁用文本选择*/
    li, ul, a, button, p, i {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /**阴影*/

    .shadow {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }

    .shadow:focus {
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }

    .global-layout {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.25);
    }

    /**限制单行文本*/
    .one-line {
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /**Android 样式*/

    .clickable {
        background-color: white;
        transition: all 0.3s ease-out;
    }

    .clickable:active {
        background-color: gainsboro;
        transition: all 0.3s ease-out;
    }

    .clickable-transparent {
        background-color: transparent;
        transition: all 0.3s ease-out;
    }

    .clickable-transparent:active {
        background-color: #bfbfbf;
        transition: all 0.3s ease-out;
    }

    /**尺寸*/

    .h100 {
        height: 100%;
    }

    .w100 {
        width: 100%;
    }

    /**位置*/
    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .abs {
        position: absolute;
    }

    .rel {
        position: relative;
    }

    .fix {
        position: fixed;
    }

    .lt0 {
        left: 0;
        top: 0;
    }

    .lb0 {
        left: 0;
        bottom: 0;
    }

    .rt0 {
        right: 0;
        top: 0;
    }

    .rb0 {
        right: 0;
        bottom: 0;
    }

    /**旋转*/
    .t0 {
        transform: rotate(0deg);
    }

    .t15 {
        transform: rotate(15deg);
    }

    .t30 {
        transform: rotate(30deg);
    }

    .t45 {
        transform: rotate(45deg);
    }

    .t60 {
        transform: rotate(60deg);
    }

    .t75 {
        transform: rotate(75deg);
    }

    .t90 {
        transform: rotate(90deg);
    }

    .t105 {
        transform: rotate(105deg);
    }

    .t120 {
        transform: rotate(120deg);
    }

    .t135 {
        transform: rotate(135deg);
    }

    .t150 {
        transform: rotate(150deg);
    }

    .t165 {
        transform: rotate(165deg);
    }

    .t180 {
        transform: rotate(180deg);
    }

    .t195 {
        transform: rotate(195deg);
    }

    .t210 {
        transform: rotate(210deg);
    }

    .t225 {
        transform: rotate(225deg);
    }

    .t240 {
        transform: rotate(240deg);
    }

    .t255 {
        transform: rotate(255deg);
    }

    .t270 {
        transform: rotate(270deg);
    }

    .t285 {
        transform: rotate(285deg);
    }

    .t300 {
        transform: rotate(300deg);
    }

    .t315 {
        transform: rotate(315deg);
    }

    .t330 {
        transform: rotate(330deg);
    }

    .t345 {
        transform: rotate(345deg);
    }

    /**px转rem*/
    $fontbase: 32px;
    @function rem($px) {
        @return $px / $fontbase * 1rem;
    }

    /**字体大小*/
    $fontSizeNano: rem(18px);
    $fontSizeMini: rem(19px);
    $fontSizeSmall: rem(20px);
    $fontSizeNormal: rem(22px);
    $fontSizeMiddle: rem(24px);
    $fontSizeLarge: rem(26px);
    .font-size-nano {
        font-size: $fontSizeNano;
    }

    .font-size-mini {
        font-size: $fontSizeMini;
    }

    .font-size-small {
        font-size: $fontSizeSmall;
    }

    .font-size-normal {
        font-size: $fontSizeNormal;
    }

    .font-size-middle {
        font-size: $fontSizeMiddle;
    }

    .font-size-large {
        font-size: $fontSizeLarge;
    }

    /**颜色*/
    $black: #222222;
    $blackLight: #4b4b57;
    $gray: #989898;
    $default: #ededed;
    $white: #FFFFFF;
    $color-unizone: #F04055;
    $color-hdyx: #EE8A1F;
    $color-gdyx: #00AAEE;
    $color-zjyx: #06a0f3;
    $color-hzzd: #EE8A1F;
    $blue: #00BFFF;

    * {
        font-size: $fontSizeNormal;
    }

    body {
        color: $blackLight;
    }

    /**文字颜色*/

    .text-color-black {
        color: $black;
    }

    .text-color-black-light {
        color: $blackLight;
    }

    .text-color-gray {
        color: $gray;
    }

    .text-color-default {
        color: $default;
    }

    .text-color-white {
        color: $white;
    }

    .text-color-unizone {
        color: $color-unizone;
    }

    .text-color-hdyx {
        color: $color-hdyx;
    }

    .text-color-gdyx {
        color: $color-gdyx;
    }

    .text-color-zjyx {
        color: $color-zjyx;
    }

    .text-color-hzzd {
        color: $color-hzzd;
    }

    /**背景颜色*/

    .background-black {
        background-color: $black;
    }

    .background-black-light {
        background-color: $blackLight;
    }

    .background-gray {
        background-color: $gray;
    }

    .background-default {
        background-color: $default;
    }

    .background-white {
        background-color: $white;
    }

    .background-color-unizone {
        background-color: $color-unizone;
    }

    .background-color-hdyx {
        background-color: $color-hdyx;
    }

    .background-color-gdyx {
        background-color: $color-gdyx;
    }

    .background-color-zjyx {
        background-color: $color-zjyx;
    }

    .background-color-hzzd {
        background-color: $color-hzzd;
    }

    /*border*/
    .border-color-unizone {
        border-color: $color-unizone;
    }

    .border-color-hdyx {
        border-color: $color-hdyx;
    }

    .border-color-gdyx {
        border-color: $color-gdyx;
    }

    .border-color-zjyx {
        border-color: $color-zjyx;
    }

    .border-color-hzzd {
        border-color: $color-hzzd;
    }

    /**button*/

    button[type="unizone"] {
        color: white;
        background-color: $color-unizone;
        border-color: $color-unizone;
    }

    button[type="black"] {
        color: white;
        background-color: $black;
        border-color: $black;
    }

    button[type="gray"] {
        color: white;
        background-color: $gray;
        border-color: $gray;
    }

    button[type="hdyx"] {
        color: white;
        background-color: $color-hdyx;
        border-color: $color-hdyx;
    }

    button[type="gdyx"] {
        color: white;
        background-color: $color-gdyx;
        border-color: $color-gdyx;
    }

    button[type="white"] {
        color: #EE8A1F;
        background-color: white;
        border-color: white;
    }

    button[type="zjyx"] {
        color: white;
        background-color: $color-zjyx;
        border-color: $color-zjyx;
    }

    button[type="hzzd"] {
        color: white;
        background-color: $color-hzzd;
        border-color: $color-hzzd;
    }

    button {
        transition: all 0.2s ease-out;
        cursor: pointer;
        display: block;
        text-align: center;
        -webkit-transition: -webkit-box-shadow 0.2s ease-out;
        -moz-transition: -moz-box-shadow 0.2s ease-out;
        -o-transition: box-shadow 0.2s ease-out;
    }

    button[type="black"]:active {
        background-color: rgba(39, 38, 54, 0.8);
    }

    button[type="unizone"]:active {
        background-color: rgba(240, 66, 88, 0.8);
    }

    button[type="gray"]:active {
        background-color: rgba(204, 204, 204, 0.8);
    }

    button[type="hdyx"]:active {
        background-color: rgba(238, 138, 31, 0.8);
    }

    button[type="gdyx"]:active {
        background-color: rgba(0, 170, 238, 0.8);
    }

    button[type="white"]:active {
        background-color: rgba(255, 255, 255, 0.8);
    }

    button[type="zjyx"]:active {
        background-color: rgba(6, 160, 243, 0.8);
    }

    button[type="hzzd"]:active {
        background-color: rgba(238, 138, 31, 0.8);
    }

    /**尺寸*/
    $s5: rem(5px);
    $s10: rem(10px);
    $s15: rem(15px);
    $s20: rem(20px);
    $s30: rem(30px);
    $s40: rem(40px);
    $s50: rem(50px);
    $s60: rem(60px);
    $s70: rem(70px);
    $s80: rem(80px);
    $s90: rem(90px);
    $s100: rem(100px);
    $s110: rem(110px);
    $s120: rem(120px);

    /*padding*/

    .pd5 {
        padding: $s5;
    }

    .pdt5 {
        padding-top: $s5;
    }

    .pdb5 {
        padding-bottom: $s5;
    }

    .pdl5 {
        padding-left: $s5;
    }

    .pdr5 {
        padding-right: $s5;
    }

    .pd10 {
        padding: $s10;
    }

    .pdt10 {
        padding-top: $s10;
    }

    .pdb10 {
        padding-bottom: $s10;
    }

    .pdl10 {
        padding-left: $s10;
    }

    .pdr10 {
        padding-right: $s10;
    }

    .pd15 {
        padding: $s15;
    }

    .pdt15 {
        padding-top: $s15;
    }

    .pdb15 {
        padding-bottom: $s15;
    }

    .pdl15 {
        padding-left: $s15;
    }

    .pdr15 {
        padding-right: $s15;
    }

    .pd20 {
        padding: $s20;
    }

    .pdt20 {
        padding-top: $s20;
    }

    .pdb20 {
        padding-bottom: $s20;
    }

    .pdl20 {
        padding-left: $s20;
    }

    .pdr20 {
        padding-right: $s20;
    }

    /*margin*/

    .mg5 {
        margin: $s5;
    }

    .mgt5 {
        margin-top: $s5;
    }

    .mgb5 {
        margin-bottom: $s5;
    }

    .mgl5 {
        margin-left: $s5;
    }

    .mgr5 {
        margin-right: $s5;
    }

    .mg10 {
        margin: $s10;
    }

    .mgt10 {
        margin-top: $s10;
    }

    .mgb10 {
        margin-bottom: $s10;
    }

    .mgl10 {
        margin-left: $s10;
    }

    .mgr10 {
        margin-right: $s10;
    }

    .mg15 {
        margin: $s15;
    }

    .mgt15 {
        margin-top: $s15;
    }

    .mgb15 {
        margin-bottom: $s15;
    }

    .mgl15 {
        margin-left: $s15;
    }

    .mgr15 {
        margin-right: $s15;
    }

    .mg20 {
        margin: $s20;
    }

    .mgt20 {
        margin-top: $s20;
    }

    .mgb20 {
        margin-bottom: $s20;
    }

    .mgl20 {
        margin-left: $s20;
    }

    .mgr20 {
        margin-right: $s20;
    }

    $borderStyle: 1px solid #d9d9d9;

    .ui-base-component-framework-layout {
        * {
            z-index: inherit;
            font-size: 12px;
        }
    }
</style>
