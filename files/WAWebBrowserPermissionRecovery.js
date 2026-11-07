__d(
  "WAWebBrowserPermissionRecovery",
  [
    "WALogger",
    "WAWebBrowserPermissionSupport",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var a = !1,
        i = !1;
      function l(n, l) {
        if (
          l == null ||
          !o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
            t.device,
          )
        ) {
          (d(n), t.openGuide());
          return;
        }
        if (a || i) {
          d(n);
          return;
        }
        ((a = !0),
          u(n, l)
            .catch(function (n) {
              (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": could not offer the ",
                      " button",
                    ])),
                  t.logPrefix,
                  t.device,
                )
                .catching(r("getErrorSafe")(n)),
                t.openGuide());
            })
            .finally(function () {
              a = !1;
            }));
      }
      function u(e, t) {
        return c.apply(this, arguments);
      }
      function c() {
        return (
          (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
            var r = n.cancelSignal,
              o = n.onAllowed,
              a = yield t.reportRefusal(e),
              l = yield m(a, r);
            if (!i) {
              if (l == null) {
                t.openGuide();
                return;
              }
              t.openDialog(l, {
                cancelSignal: r,
                isBlocked: a === "blocked",
                onAllowed: function () {
                  r.aborted || o();
                },
                onOpenChange: function (t) {
                  i = t;
                },
              });
            }
          })),
          c.apply(this, arguments)
        );
      }
      function d(e) {
        t.reportRefusal(e).catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  ": could not tell why the ",
                  " was refused",
                ])),
              t.logPrefix,
              t.device,
            )
            .catching(r("getErrorSafe")(e));
        });
      }
      function m(e, t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (
          (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
            if (
              (e !== "blocked" && e !== "dismissed") ||
              n.aborted ||
              !t.isButtonEnabled()
            )
              return null;
            var r = yield t.loadDialog();
            return n.aborted ? null : r;
          })),
          p.apply(this, arguments)
        );
      }
      return l;
    }
    l.createBrowserPermissionRecovery = u;
  },
  98,
);
