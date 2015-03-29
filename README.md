Defines a react-loader component under the global name Loader.

# How to use

Install the package:

```
meteor add dgellow:react-loader
```
In your client code:

```
var App = React.createClass({

  /* ... */

  render: function() {
    return (
       <Loader loaded={this.state.loaded}>
         <ChildrenComponents />
       </Loader>
    );
  }
});
```
