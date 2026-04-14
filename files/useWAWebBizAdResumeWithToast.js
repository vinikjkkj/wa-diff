__d(
  "useWAWebBizAdResumeWithToast",
  [
    "fbt",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBizAdResumeMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e, t) {
      var a = r("useWAWebBizAdResumeMutation")(),
        i = a[0],
        l = a[1],
        d = c(
          function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield i(e);
              n.success && (t == null || t());
              var r = o("WAWebToast.react").genId();
              n.success
                ? o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      id: r,
                      msg: s._(/*BTDS*/ "Ad resumed"),
                    }),
                  )
                : o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      id: r,
                      msg: s._(
                        /*BTDS*/ "Failed to resume ad. Please try again.",
                      ),
                    }),
                  );
            })();
          },
          [e, t, i],
        );
      return [d, l];
    }
    l.default = d;
  },
  226,
);
