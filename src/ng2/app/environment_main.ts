//environment_main.ts 文件告诉Angular加载组件。
//要启动应用程序，我们需要导入Angular的浏览器引导函数和应用程序的根组件。
//导入后，通过传递根组件类型(即 AppComponent )来调用 bootstrap 。
import {bootstrap} from "angular2/platform/browser"
import {AppComponent} from "./environment_app.component"

bootstrap(AppComponent);