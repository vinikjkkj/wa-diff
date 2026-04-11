__d(
  "WAWebHocComponent_DEPRECATED.react",
  ["WANullthrows", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).Component;
    function u(e) {
      if (typeof e == "string") return e;
      if (!e) return "Component";
      var t = e.displayName;
      if (t != null && t !== "") return t;
      var n = e.name;
      return n != null && n !== "" ? n : "Component";
    }
    var c = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.setComponent = function (e) {
            n.component = e;
          }),
          (n.state = babelHelpers.extends({}, n.state)),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getComponent = function () {
          return this.component instanceof t
            ? this.component.getComponent()
            : r("WANullthrows")(this.component);
        }),
        t
      );
    })(s);
    ((l.getHocComponentDisplayName = u), (l.WrappedComponent = c));
  },
  98,
);
