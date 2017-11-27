//上述代码将从 angular2 / core 导入组件和 View
//@Component 是一个Angular 2装饰器，允许您将元数据与组件类相关联。
//my-app 可以用作HTML标记来注入，并且可以用作组件。
//@view 包含一个模板，用于告诉Angular如何渲染视图。
//export 指定，此组件将在文件外部可用。
import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>My First Angular 2 App</h2>'
})

export class AppComponent {

}