__d(
  "CometComposedTextV2ElementNode.react",
  ["CometComposedTextV2Node"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getChildren = function () {
          var e = this.getState().__children;
          return (e == null && ((e = []), (this.getState().__children = e)), e);
        }),
        (n.append = function (t) {
          return (
            (t.getState().__parent = this),
            this.getChildren().push(t),
            this
          );
        }),
        (n.appendMany = function (t) {
          var e = this;
          return (
            t.forEach(function (t) {
              return e.append(t);
            }),
            this
          );
        }),
        t
      );
    })(r("CometComposedTextV2Node"));
    l.default = e;
  },
  98,
);
