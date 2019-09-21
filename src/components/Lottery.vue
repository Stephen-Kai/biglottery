<template>
  <div class="yt-lottery">
    <el-col :span="23" class="cond-section">
      <el-col :span="8" :offset="4">
        <span>彩票类型：</span>
        <el-select v-model="value" placeholder="请选择" @change="changeType">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <span>机选注数：</span>
        <el-select v-model="count" placeholder="请选择">
          <el-option
            v-for="item in numberops"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-col>
    <el-button type="success"  @click="testRandom" round>生成彩票</el-button>
    <div v-if="nums.length" class="num-section">
      <br>
      <table border="1" style="border-spacing: 0;" align="center">
        <tr>
          <th>红区号码</th>
          <th style="padding: 5px 10px">蓝区号码</th>
        </tr>
        <tr v-for="(num, objIndex) in nums" :key="objIndex">
          <td style="padding: 5px 10px;" >
            <span v-for="(redNum, redIndex) in num.redNumArr"
                  :key="redIndex"
                  class="lottery-ball"
                  :style="{'margin-left':redIndex === 0 ? '0' : ''}"
                  style="color: red;">
              {{redNum}}
            </span>
          </td>
          <td>
            <span v-for="(blueNum, blueIndex) in num.blueNumArr"
                  :key="blueIndex"
                  class="lottery-ball"
                  :style="{'margin-left':blueIndex === 0 ? '0' : ''}"
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
        redNumMax: 33,
        // 红区号码数目
        redNumSize: 6,
        // 蓝区号码最大值
        blueNumMax: 16,
        // 蓝区号码数目
        blueNumSize: 1,
        options: [{
          value: 1,
          label: '双色球'
        }, {
          value: 2,
          label: '大乐透'
        }],
        value: 1,
        numberops: [{
          value: '1',
          label: '1'
        }, {
          value: '5',
          label: '5'
        }, {
          value: '10',
          label: '10'
        }, {
          value: '20',
          label: '20'
        }],
        count: 1,
        nums: []
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
      createNumArr(numSize, numMax) {
        // 清空已有数组
        const numArr = []
        while (numArr.length < numSize) {
          let num = this.getRandom(numMax)
          // 仅当生成的号码与原有号码不重复时，才加入到数组中
          if (numArr.indexOf(num) === -1) {
            numArr.push(num)
          }
        }
        return this.sortNum(numArr)
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
        this.nums = []
        for (let i = 0; i < this.count; i ++) {
          const redNumArr = this.createNumArr(this.redNumSize, this.redNumMax)
          const blueNumArr = this.createNumArr(this.blueNumSize, this.blueNumMax)
          this.nums.push({redNumArr:redNumArr, blueNumArr:blueNumArr})
        }
      },
      changeType(val) {
        if (val == 1) {
          this.redNumMax = 33
          this.blueNumMax = 16
          this.redNumSize = 6
          this.blueNumSize = 1
        } else if (val == 2) {
          this.redNumMax = 35
          this.blueNumMax = 12
          this.redNumSize = 5
          this.blueNumSize = 2
        }
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

  .cond-section {
    text-align: center;
    margin: 10px auto;
  }

  .num-section {
    margin-top: 20px;
    height: calc(100vh - 240px);
    overflow: auto;
  }
</style>