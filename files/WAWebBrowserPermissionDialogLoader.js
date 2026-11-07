__d(
  "WAWebBrowserPermissionDialogLoader",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebBrowserPermissionModalOptions",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 5e3;
    function c(t) {
      var a = t.getResource,
        i = t.logPrefix,
        l = t.onLoadFailed,
        c = !1;
      function d() {
        c || ((c = !0), l());
      }
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var t = a(),
          n = t.getModuleIfRequired();
        if (n != null) return n;
        if (c) return null;
        try {
          return yield o("WAPromiseDelays").withTimeout(
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
                  i,
                ),
                d(),
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
                i,
              )
              .catching(r("getErrorSafe")(e)),
            d(),
            null
          );
        }
      });
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
