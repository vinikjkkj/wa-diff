__d(
  "WAWebNuxBanner",
  ["WALogger", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).Component,
      c = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.getElement = function () {
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "NuxBanner: getElement is not implemented",
                      ])),
                  )
                  .sendLogs("nux-banner-get-element-not-implemented"),
                null
              );
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        return (
          babelHelpers.inheritsLoose(n, t),
          (n.shouldShow = function () {
            return !1;
          }),
          n
        );
      })(u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c);
    ((l.ExtendableNuxBanner = c), (l.NuxBanner = d));
  },
  98,
);
