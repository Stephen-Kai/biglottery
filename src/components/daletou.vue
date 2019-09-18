<template>
  <div class="yt-lottery">
    <el-button @click="testRandom">生成彩票号码</el-button>
    <div v-if="redNumArr.length">
      <br>
      <table border="1" style="border-spacing: 0;" align="center">
        <tr>
          <th>红区号码</th>
          <th style="padding: 5px 10px">蓝区号码</th>
        </tr>
        <tr>
          <td style="padding: 5px 10px;">
            <span v-for="(redNum,index) in redNumArr"
                  :key="redNum"
                  class="lottery-ball"
                  :style="{'margin-left':index === 0 ? '0' : ''}"
                  style="color: red;">
              {{redNum}}
            </span>
          </td>
          <td>
            <span v-for="(blueNum,index) in blueNumArr"
                  :key="blueNum"
                  class="lottery-ball"
                  :style="{'margin-left':index === 0 ? '0' : ''}"
                  style="color: blue;">
              {{blueNum}}
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ytLottery',
    data() {
      return {
        // 红区号码最大值
        redNumMax: 35,
        // 红区号码数目
        redNumSize: 5,
        // 红区生成号码数组
        redNumArr: [],
        // 蓝区号码最大值
        blueNumMax: 12,
        // 蓝区号码数目
        blueNumSize: 2,
        // 蓝区生成号码数组
        blueNumArr: []
      }
    },
    mounted() {

    },
    computed: {},
    methods: {
      // 生成随机数
      getRandom(max) {
        return Math.floor(Math.random() * max) + 1;
      },
      // 生成号码数组
      createNumArr(numArr,numSize,numMax) {
        // 清空已有数组
        numArr.splice(0, numArr.length)
        while (numArr.length < numSize) {
          let num = this.getRandom(numMax)
          // 仅当生成的号码与原有号码不重复时，才加入到数组中
          if (numArr.indexOf(num) === -1) {
            numArr.push(num)
          }
        }
        return this.sortNum(numArr)
      },
      // 生成红区号码
      createRedNumArr() {
        this.createNumArr(this.redNumArr,this.redNumSize,this.redNumMax)
      },
      // 生成蓝区号码
      createBlueNumArr() {
        this.createNumArr(this.blueNumArr,this.blueNumSize,this.blueNumMax)
      },
      // 对数组号码进行排序
      sortNum(arr) {
        // 使用冒泡排序
        for (let i = 0; i < arr.length; i++) {
          for (let j = 1; j < arr.length - i; j++) {
            if (arr[i] > arr[i + j]) {
              let temp = arr[i]
              arr[i] = arr[i + j]
              arr[i + j] = temp
            }
          }
        }
        return arr
      },
      // 测试彩票号码生成
      testRandom() {
        this.createRedNumArr()
        this.createBlueNumArr()
        console.log(this.redNumArr)
      }
    }
  }
</script>

<style scoped>
  .lottery-ball {
    padding: 5px;
    margin-left: 10px;
    background: #e9e9e9;
    width: 20px;
    height: 20px;
    line-height: 22px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
  }
</style>