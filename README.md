#projinit

生成默认的项目或应用。

##使用

	$ projinit options fullname

* options：
	* [-ex/--example] 生成例子（兼容0.1.x），fullname可以是helloworld和hellomix
	* [-p/--project] 在当前目录生成mix项目，fullname为带命名空间的项目全称，例如：itaobao/webapp
	* [-a/--app] 在当前目录生成mix应用，fullname为带命名空间的项目全称，例如：itaobao/apps/index
	* [-v/--version] 显示spmbatch版本