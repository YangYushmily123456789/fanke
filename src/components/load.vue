<template lang="html">
    <div id="box">
        <div id="test1"></div>
        <div id="test2"></div>
        <div id="test3"></div>
        <div id="test4"></div>
        <div id="test5"></div>
        <div id="test6"></div>
        <div id="test7"></div>
        <div id="test8"></div>
    </div>

</template>

<script>
    export default {
    }
</script>
 
<style lang="css" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    #box{
        width:1rem;
        height: 1rem;
        position: fixed;
        box-sizing: border-box;
        top: 40%;
        left: 40%;
        transform:translate(-100%,-120%);
    }
    div:not(#box){ 
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        font-size: 15px;
        line-height: 30px;
        text-align: center;
        left: 150px;top: 150px;
        transform-origin: 0px 40px;
        background: white; 
        border:1px solid;
    }
    @keyframes play{
        12.5%{
            width: 3px;height: 3px;background: #eee;/*transform: scale(2);transform-origin: ;*/
        }

        25%,50%{
            width: 10px;height: 10px;
        }
        50%,70%{
            width: 13px;height: 13px;
        }
        70%,100%{
            width: 15px;height: 15px;background:#000;
        }
    }
    #test1{
        
        transform:  rotate(45deg);animation: play 0.8s linear infinite;
    }
    #test2{
        transform:  rotate(90deg);animation: play 0.8s linear 0.1s infinite;
    }
    #test3{
        transform:  rotate(135deg);animation: play 0.8s linear 0.2s infinite;
    }
    #test4{
        transform:  rotate(180deg);animation: play 0.8s linear 0.3s infinite;
    }
    #test5{
        transform:  rotate(225deg);animation: play 0.8s linear 0.4s infinite;
    }
    #test6{
        transform:  rotate(270deg);animation: play 0.8s linear 0.5s infinite;
    }
    #test7{
        transform:  rotate(315deg);animation: play 0.8s linear 0.6s infinite;
    }
    #test8{
        transform:  rotate(360deg);animation: play 0.8s linear 0.7s infinite;
    }
</style>
