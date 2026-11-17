__d(
  "WAWebVoipNoConnectionDialogLoader",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseDelays",
    "WDSDialogBridge",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = 2e3,
      p = !1;
    function _(t) {
      var n = g(),
        a = n.getModuleIfRequired();
      if (a != null) {
        o("WDSDialogBridge").openWDSDialog(d.jsx(a, {}));
        return;
      }
      if (p) {
        t();
        return;
      }
      o("WAPromiseDelays")
        .withTimeout(n.load(), m, function () {
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [NoConnectionDialog] loading timed out",
                ])),
            ),
            null
          );
        })
        .then(function (e) {
          if (e == null) {
            ((p = !0), t());
            return;
          }
          o("WDSDialogBridge").openWDSDialog(d.jsx(e, {}));
        })
        .catch(function (e) {
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [NoConnectionDialog] loading failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
            (p = !0),
            t());
        });
    }
    function f() {
      try {
        g().preload();
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [NoConnectionDialog] preloading failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function g() {
      return r("JSResourceForInteraction")(
        "WAWebVoipNoConnectionDialog.react",
      ).__setRef("WAWebVoipNoConnectionDialogLoader");
    }
    ((l.showNoConnectionDialog = _), (l.preloadNoConnectionDialog = f));
  },
  98,
);
