<!-- 第三步：components/music/index.wxml -->
<!--<view style='margin-top:36px'>music:{歌曲名称:{{ name }},类型：{{ type }}}</view>-->
<button bind:tap="onTap" data-name="{{ name }}" data-type="{{ type }}">
    组件获取数据详情
</button>