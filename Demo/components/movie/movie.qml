<!-- 第二步：components/movie/index.wxml -->
<!--<view>movie:{电影名称:{{ name }},类型：{{ type }}}</view>-->
<button bind:tap="onTap" data-name="{{ name }}" data-type="{{ type }}">
    组件获取数据详情
</button>