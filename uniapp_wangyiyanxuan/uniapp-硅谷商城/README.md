## Vuex
### 作用
1. 集中管理状态数据
2. 用于多个组件共享数据
### 核心概念
1. store： 核心对象
2. state： 状态数据
3. mutation: 同步修改state的状态数据
4. action: 获取异步数据，触发mutation同时将异步数据交给mutation
5. dispatch: 分发action
6. getter: 等同于Vue中的computed，用于根据已有的state状态数据计算得到新的状态数据