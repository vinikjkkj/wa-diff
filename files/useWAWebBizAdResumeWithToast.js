__d(
  "useWAWebBizAdResumeWithToast",
  [
    "fbt",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdResumeMutation",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e, t) {
      var a = o("react-compiler-runtime").c(7),
        i = r("useWAWebBizAdResumeMutation")(),
        l = i[0],
        c = i[1],
        d;
      a[0] !== e || a[1] !== t || a[2] !== l
        ? ((d = function () {
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield l(e);
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
          }),
          (a[0] = e),
          (a[1] = t),
          (a[2] = l),
          (a[3] = d))
        : (d = a[3]);
      var m = d,
        p;
      return (
        a[4] !== m || a[5] !== c
          ? ((p = [m, c]), (a[4] = m), (a[5] = c), (a[6] = p))
          : (p = a[6]),
        p
      );
    }
    l.default = d;
  },
  226,
);
