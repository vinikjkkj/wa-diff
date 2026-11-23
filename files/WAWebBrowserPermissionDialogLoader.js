__d(
  "WAWebBrowserPermissionDialogLoader",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBrowserPermissionModalOptions",
    "WAWebModalManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 5e3;
    function c(t) {
      var n = t.getResource,
        a = t.logPrefix,
        i = t.onLoadFailed,
        l = !1;
      function c() {
        l || ((l = !0), i());
      }
      return async function () {
        var t = n(),
          i = t.getModuleIfRequired();
        if (i != null) return i;
        if (l) return null;
        try {
          return await o("WAPromiseDelays").withTimeout(
            t.load(),
            u,
            function () {
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ": [PermissionDialog] loading timed out",
                    ])),
                  a,
                ),
                c(),
                null
              );
            },
          );
        } catch (e) {
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": [PermissionDialog] loading failed",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(e)),
            c(),
            null
          );
        }
      };
    }
    function d(e) {
      var t = !1;
      o("WAWebModalManager").ModalManager.exists(function (e) {
        t = e;
      });
      var n = t
        ? function () {
            return o("WAWebModalManager").ModalManager.closeSupportOrModal();
          }
        : o("WAWebModalManager").closeModalManager;
      o("WAWebModalManager").ModalManager.openSupportModal(
        e(n),
        o(
          "WAWebBrowserPermissionModalOptions",
        ).getBrowserPermissionModalOptions(),
      );
    }
    ((l.createBrowserPermissionDialogLoader = c),
      (l.openBrowserPermissionDialog = d));
  },
  98,
);
