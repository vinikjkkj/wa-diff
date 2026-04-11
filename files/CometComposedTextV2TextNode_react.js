__d(
  "CometComposedTextV2TextNode.react",
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
        (n.setFormat = function (t) {
          return ((this.getState().format |= t), this);
        }),
        t
      );
    })(r("CometComposedTextV2Node"));
    l.CometComposedTextV2TextNode = e;
  },
  98,
);
