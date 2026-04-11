__d(
  "ServerHTML.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["blob"],
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.elementRef = u.createRef()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.render = function () {
            var t = this.props,
              n = t.blob,
              r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return typeof n == "string"
              ? u.jsx(
                  "div",
                  babelHelpers.extends({}, r, {
                    ref: this.elementRef,
                    children: n,
                  }),
                )
              : u.jsx(
                  "div",
                  babelHelpers.extends({}, r, {
                    dangerouslySetInnerHTML: n,
                    ref: this.elementRef,
                  }),
                );
          }),
          n
        );
      })(u.Component);
    l.default = c;
  },
  98,
);
