import React from "react";

export default function Iq() {
  return (
    <div>
      <h5>Class and Class name</h5>
      <p>
        Class is a reserved keyword in JS. React code will be compiled to Js and
        it will give an error inorder to overcome that we use ClassName Under
        the hood bable when its doing the translation
      </p>
      <h5>Data flow in React</h5>
      <p>
        Data flow is unidirectional in React. We are passing data down in
        unidirectional ex parent to child using props. Data sharing Context,
        Global state and redux
      </p>
      <h5>DOM</h5>
      <p>
        Document object modal. Is is the structural represntation of all nodes
        in HTML document. It represents UI of the aplicaiton. DOM manipulation
        is used to dynamically change the content of web action_page
      </p>
      <p>
        For every DOM update there will be re rendering of all nodes hence it is
        slow
      </p>
      <h5>Virtual DOM</h5>
      <p> It is the virtual representaion of Real Dom.</p>
      <p>
        {" "}
        React updates the state changes first in Virtual DOM and then it sync
        with Real Dom
      </p>
      <h5>Diffing</h5>
      <p>
        Diffing:- React compares the virtual copy of✨ Real DOM to an updated
        Copy of Virtual DOM, compares or picks out the changes, and finally
        renders it to real Dom. This process is called Diffing and the algorithm
        used is called Diffing Algorithm
      </p>
      <p>Frequent Dom manipulation is slow</p>
      <p>Virtual DOM is virtual representaion of DOM in memory</p>
      <h5>Reconciliation</h5>
      <p>
        Virtual DOM is synced with Real DOM with ReactDOM library and this
        process is called Reconciliation
      </p>
      <h5>Keys</h5>
      <p>React uses keys to avoid unneecessary rerendering</p>
      <h5>Class Components life cycle hooks</h5>
      <p>
        In React JS class components, there are several lifecycle hooks that
        allow you to run code at specific points in the component's lifecycle.
        These hooks include:
      </p>
      <p className="listElements">
        <h6>constructor():</h6> Called before the component is mounted. This is
        the only lifecycle hook called on the server rendering.
      </p>
      <p className="listElements">
        <h6>componentWillMount():</h6> Called before the component is mounted.
        This is deprecated and will be removed in the future.
      </p>
      <p className="listElements">
        <h6> componentDidMount():</h6> Called after the component is mounted.
        This is a good place to make API calls or set up any subscriptions.
      </p>
      <p className="listElements">
        <h6> componentWillReceiveProps(nextProps):</h6> Called before the
        component receives new props.
      </p>
      <p className="listElements">
        <h6> shouldComponentUpdate(nextProps, nextState): </h6>Called before the
        component updates. You can use this to optimize performance by returning
        false if you know the component does not need to update.
      </p>
      <p className="listElements">
        <h6> componentWillUpdate(nextProps, nextState): </h6>Called before the
        component updates. This is deprecated and will be removed in the future.
      </p>
      <p className="listElements">
        <h6> componentDidUpdate(prevProps, prevState): </h6>Called after the
        component updates.
      </p>
      <p className="listElements">
        <h6> componentWillUnmount(): </h6>Called before the component is
        unmounted. Use this to clean up any resources or subscriptions.
      </p>
      <p>
        The first lifecycle hook that is called is the constructor() method,
        followed by componentWillMount() and render() and then
        componentDidMount()
      </p>
      <h5>Life cycle hooks Functional Components</h5>
      In React JS functional components, there are several lifecycle hooks that
      allow you to run code at specific points in the component's lifecycle.
      These hooks include:
      <p className="listElements">
        <h6>useState(): </h6>Allows you to add state to a functional component.
      </p>
      <p className="listElements">
        <h6>useEffect():</h6> Allows you to run code after the component has
        rendered. This is equivalent to the componentDidMount(),
        componentDidUpdate() and componentWillUnmount() hooks in class
        components.
      </p>
      <p className="listElements">
        <h6>useContext(): </h6>Allows you to access context in functional
        components.
      </p>
      <p className="listElements">
        <h6>useReducer(): </h6>Allows you to manage state using a reducer.
      </p>
      <p className="listElements">
        <h6>useCallback():</h6> Allows you to create a callback that only
        updates when its dependencies change.
      </p>
      <p className="listElements">
        <h6>useMemo(): </h6>Allows you to only re-compute a value when its
        dependencies change.
      </p>
      <p className="listElements">
        <h6>useRef(): </h6>Allows you to create a reference to a DOM node or a
        value.
      </p>
      <p className="listElements">
        <h6>useImperativeHandle(): </h6>Allows you to customize the instance
        value that is exposed to parent components when using ref.
      </p>
      <p className="listElements">
        <h6>useLayoutEffect(): </h6>Allows you to synchronously apply layout and
        paint changes.
      </p>
     <p> The first lifecycle hook that is called is the useState() method, followed
      by useEffect() and then useContext(), useReducer(), useCallback(),
      useMemo(), useRef(), useImperativeHandle() and useLayoutEffect() Note that
      functional components don't have componentWillReceiveProps() or
      shouldComponentUpdate() hooks, instead you can use useEffect() with proper
      dependencies to handle those cases.</p>

      <div>
        <h5>Component interactions</h5>
        In React, components can interact with each other in a few different ways:

        <p className="listElements">
        <h6>Props: </h6> Components can pass data down to their children via props. This allows parent components to control the state of their children.</p>

        <p className="listElements">
        <h6>Context: </h6>Components can share data across the component tree without passing props down through every level. This can be useful for data that is used by many components, such as the current user or theme.</p>

        <p className="listElements">
        <h6>State: </h6>Components can manage their own state using the useState() hook. This allows them to update their own behavior and render based on internal changes.</p>

        <p className="listElements">
        <h6>Event handling: </h6>Components can communicate with each other by passing event handlers down via props. For example, a child component could call a function passed down from its parent when a button is clicked.</p>

        <p className="listElements">
        <h6>Refs:</h6> Components can create and access references to other components or DOM nodes using the useRef() hook. This can be useful for accessing the DOM directly or for communicating between components.</p>

        <p className="listElements">
        <h6>Render Props:</h6> Components can share behavior and logic with other components using a technique called render props. This allows a component to render its children with a specific set of props.</p>

        <p className="listElements">
        <h6>Higher-order components: </h6>Similar to render props, higher-order components are a way to reuse component logic. A higher-order component is a function that takes a component as an argument and returns a new component.</p>

        <p className="listElements">
        <h6>Hooks: </h6> Components can share state and behavior with other components by using hooks. Hooks can be used to create state, manage side effects and context, and handle other logic that would otherwise have to be handled by a class component.</p>

All of these methods can be used in combination to create complex interactions between components. But, it's important to keep in mind that with more complex interactions, it's harder to understand what's happening in the app and also harder to debug.
      </div>

      <div>
        <h5>ES6 new features</h5>
        ES6 (ECMAScript 6) is the latest version of the JavaScript programming language. Some of the new features introduced in ES6 include:

        <p className="listElements">
        <h6>Arrow Functions:</h6> A shorthand syntax for defining anonymous functions that can be more concise and easier to read.
</p>
<p className="listElements">
        <h6>Template Literals: </h6>A way to include expressions and variables within string literals, using backticks (`) instead of single or double quotes.
</p>
<p className="listElements">
        <h6>Destructuring:
        </h6>A way to extract values from arrays or objects and assign them to variables in a single line of code.
</p>
<p className="listElements">
        <h6>let and const: </h6>New ways to declare variables that have different scoping rules than the traditional var keyword.
</p>
<p className="listElements">
        <h6>Classes: </h6>A way to define object-oriented classes, similar to those in other programming languages.
</p>
<p className="listElements">
        <h6>Modules:</h6> A way to organize and reuse code across multiple files.
</p>
<p className="listElements">
        <h6>Promises: </h6>A way to handle asynchronous code that is easier to work with than traditional callbacks.
</p>
<p className="listElements">
        <h6>Spread and Rest Operators:</h6> Operators that allow you to easily spread out an array or object into individual elements, or gather multiple elements into an array or object.
</p>
<p className="listElements">
        <h6>New collection classes: </h6>Set, Map and WeakSet, WeakMap
</p>
These are some of the new features added to ES6, there are many more new features added.
      </div>
    </div>
  );
}
