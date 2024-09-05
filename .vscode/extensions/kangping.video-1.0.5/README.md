
# Video
1. author:kangping  
2. 由作者自己的一个小心愿而做的,可以在编写代码的同时看看视频,多数时间也就听个声音.本插件不提供播放源. 需要用户自行填写播放地址.
1. 播放原理是利用h5 进行播放 播放源可用 youtube 腾讯视频 aiqiyi bilibili 等支持h5 视频播放的网站
1. **修改为免费插件了,请支持我的 LuaIde**



# 安装

1. **由于vscode 暂时没有放开vscode界面扩展的功能,本插件采用了一些js添加html的方式达到扩展vscode界面,所以在vscode检查时会出现警告,vscode损坏 和 提示不受支持  如果你介意请删除本插件 F1  输入videouninstall 然后再插件面板中删除本插件就行了**
2. 由于vscode 本身是不支持**mp4** 播放的所以 需要替换一个**ffmpeg** 视频解析库. 这里采用**github**的开源库
2. [ffmpeg github 下载地址](https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases)  
2.  [ffmpeg 备份 windows 下载地址](http://139.199.156.200/video/0.22.3-win-ia32.zip)  这里注意windows 32 和64 为 都下载32 位的就行了 
2. [ffmpeg 备份 mac下载地址](http://139.199.156.200/video/0.22.3-osx-x64.zip)  
3. [windows安装视频](https://v.qq.com/x/page/e0509tjr5z0.html)
4. [mac安装视频](https://v.qq.com/x/page/l0509cbswwj.html)
5. 命令: F1 
	1.   安装:`VideoInstall`
	2.   卸载:`VideoUninstall`
5.  每次vscode版本更新后请重新安装一次 **videoinstall** 



[===演示地址点击查看=====](http://www.jianshu.com/p/b2505c00969b)
