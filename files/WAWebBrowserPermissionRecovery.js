__d(
  "WAWebBrowserPermissionRecovery",
  ["WALogger", "WAWebBrowserPermissionSupport", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = !1,
        a = !1;
      function i(i, s) {
        if (
          s == null ||
          !o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
            t.device,
          )
        ) {
          (u(i), t.openGuide());
          return;
        }
        if (n || a) {
          u(i);
          return;
        }
        ((n = !0),
          l(i, s)
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
              n = !1;
            }));
      }
      async function l(e, n) {
        var r = n.cancelSignal,
          o = n.onAllowed,
          i = await t.reportRefusal(e),
          l = await c(i, r);
        if (!a) {
          if (l == null) {
            t.openGuide();
            return;
          }
          t.openDialog(l, {
            cancelSignal: r,
            onAllowed: function () {
              r.aborted || o();
            },
            onOpenChange: function (t) {
              a = t;
            },
          });
        }
      }
      function u(e) {
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
      async function c(e, n) {
        if (
          (e !== "blocked" && e !== "dismissed") ||
          n.aborted ||
          !t.isButtonEnabled()
        )
          return null;
        var r = await t.loadDialog();
        return n.aborted ? null : r;
      }
      return i;
    }
    l.createBrowserPermissionRecovery = u;
  },
  98,
);
