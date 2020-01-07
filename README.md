## Environment[https://facebook.github.io/react-native/docs/getting-started]
```
brew install node
brew install watchman
```
### iOS
```
sudo gem install cocoapods
```
### Android
```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```
Download and install Android Studio
Start AS and accept lisence

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Init project
```
npx react-native init simple
cd simple
npx react-native run-ios
npx react-native run-android
```
## React navigation[https://reactnavigation.org/docs/en/getting-started.html]
```
yarn add react-navigation
yarn add react-navigation-stack
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```
To complete the linking on iOS, make sure you have Cocoapods installed. Then run:
```
cd ios
pod install
cd ..
```
To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:
```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```
To finalize installation of react-native-gesture-handler for Android, make the following modifications to MainActivity.java:
```
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```
Then add the following at the top of your entry file, such as index.js or App.js:
```
import 'react-native-gesture-handler';
```
