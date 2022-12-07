// 第一步：创建behavior.js，里面的properties，data，methods里面的方法，可以共享给movie、music等等组件使用
let SmallFourBeh = Behavior({
    // 共享属性
    properties: {
        name: String,
        type: String
    },
    // 共享数据
    data: {
        selectedName: '',
        selectedType: ''
    },
    // 共享方法
    methods: {
        behaviorTap (name, type) {
            console.log("behaviors1111111111")
          console.log(this)

            this.setData({
                selectedName: name,
                selectedType: type
            })
        }
    }
})
export { SmallFourBeh } // 导出