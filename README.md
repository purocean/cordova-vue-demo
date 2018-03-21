# cordova-vue-demo
> 使用 Cordova Vue Vux 构建移动应用

## 安装
```bash
# 安装前端依赖
cd frontend # 切换到前端代码目录
yarn
yarn run dev # 运行前端开发服务器，入口 app.html

# 安装 Cordove 依赖
cd ../ # 切换到项目根目录
yarn
sudo yarn globale add cordova # 安装 Cordove 命令行工具
sudo yarn global add cordova-hot-code-push-cli # 安装热更新插件命令行工具

# 安装安卓依赖参考
# sudo apt install openjdk-8-jdk # 安装 jdk8

# 安装安卓 sdk 参考
# ANDROID_HOME=~/android-sdk
# PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools/bin
# wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip -O /tmp/temp.zip && unzip /tmp/temp.zip -d $ANDROID_HOME && rm /tmp/temp.zip
# yes | sdkmanager --licenses && sdkmanager "build-tools;26.0.0" "platforms;android-16" "platforms;android-26" "platforms;android-25"

# 安装 Gradle 参考
# SOFTWARE_PATH=~/software
# PATH=$PATH:$SOFTWARE_PATH/gradle-4.3.1/bin
# wget https://services.gradle.org/distributions/gradle-4.3.1-bin.zip -O /tmp/temp.zip && unzip /tmp/temp.zip -d $SOFTWARE_PATH && rm /tmp/temp.zip

```

## 安卓打包
```bash
yarn run build-android # 打包安卓
yarn run release-android # 打包安卓，注意配置签名文件 build.json
```
