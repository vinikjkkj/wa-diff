__d(
  "cloneWithProps_DEPRECATED",
  ["ReactPropTransferer", "react", "warning"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "children",
      c = !1;
    function d(e, t) {
      var n = r("ReactPropTransferer").mergeProps(t, e.props);
      return (
        !Object.prototype.hasOwnProperty.call(n, u) &&
          Object.prototype.hasOwnProperty.call(e.props, u) &&
          (n.children = e.props.children),
        s.createElement(e.type, n)
      );
    }
    l.default = d;
  },
  98,
);
