// for (let i of [1, 2, 3]) {
//     console.log(i);
// }

import { createElement, Component, render } from "./toy-react.js"

class MyComponent extends Component{
    render () {
        return (
            <div>
                <h1>My Component</h1>
                { this.children }
            </div>
        )
    }
}


// window.a = <div id="log" class="do">
//     <div>abc</div>
//     <div></div>
//     <div></div>
// </div>

render(<MyComponent id="log" class="do">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);