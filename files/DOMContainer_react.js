__d(
  "DOMContainer.react",
  ["invariant", "isNode", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e = ["display"],
      u,
      c = u || (u = o("react")),
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.containerNode = null),
            (e.setContainerNode = function (t) {
              e.containerNode = t;
              var n = e.props.containerRef;
              typeof n == "function" && n(t);
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getDOMChild = function () {
            var e = this.props.children;
            return (r("isNode")(e) || s(0, 1533), e);
          }),
          (o.shouldComponentUpdate = function (t) {
            return t.children !== this.props.children;
          }),
          (o.componentDidMount = function () {
            var e = this.containerNode;
            e != null && e.appendChild(this.getDOMChild());
          }),
          (o.componentDidUpdate = function (t) {
            var e = this.containerNode;
            if (e != null) {
              for (; e.lastChild; ) e.removeChild(e.lastChild);
              e.appendChild(this.getDOMChild());
            }
          }),
          (o.render = function () {
            var t = this.props,
              n = t.display,
              r = babelHelpers.objectWithoutPropertiesLoose(t, e),
              o = n === "block" ? "div" : "span";
            return c.jsx(
              o,
              babelHelpers.extends({}, r, {
                ref: this.setContainerNode,
                children: void 0,
              }),
            );
          }),
          n
        );
      })(c.Component);
    ((d.defaultProps = { display: "inline" }), (l.default = d));
  },
  98,
);
