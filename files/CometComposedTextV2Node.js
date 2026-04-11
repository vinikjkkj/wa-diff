__d(
  "CometComposedTextV2Node",
  ["cometComposedTextV2RendererRef", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react")),
      u = (function () {
        function e(e, t) {
          var n = this;
          if (
            ((this.$1 = e),
            (this.$2 = null),
            typeof t == "object" && t !== null)
          ) {
            var r = t.Renderer,
              a = t.renderHostRef;
            this.$2 = function (e) {
              return a !== e
                ? null
                : function (e) {
                    var t = e;
                    return s.jsx(r, babelHelpers.extends({}, t, { node: n }));
                  };
            };
          } else if (t !== null) {
            var i = t;
            this.$2 = function (e) {
              return o("cometComposedTextV2RendererRef")
                .cometComposedTextCometV2RenderHostRef !== e
                ? null
                : function (e) {
                    var t = e;
                    return s.jsx(i, babelHelpers.extends({}, t, { node: n }));
                  };
            };
          }
        }
        var t = e.prototype;
        return (
          (t.getState = function () {
            return this.$1;
          }),
          (t.render = function (t) {
            if (this.$2 == null) return null;
            var e = this.$2(t);
            return e === null ? null : { withHostProps: e };
          }),
          (t.getParent = function () {
            return this.getState().__parent;
          }),
          (t.getNearestNodeOfType = function (t) {
            var e = this.getParent();
            if (e instanceof t) return e;
            if (e != null) return e.getNearestNodeOfType(t);
          }),
          (t.getKey = function () {
            return this.getState().key;
          }),
          (t.setKey = function (t) {
            this.$1.key = t;
          }),
          e
        );
      })();
    l.default = u;
  },
  98,
);
