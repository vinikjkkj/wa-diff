__d(
  "useWAWebConfirmationActions",
  [
    "Promise",
    "WAPromiseLoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState;
    function _(t, r, a) {
      var i = p(!1),
        l = i[0],
        s = i[1],
        c = p(!1),
        _ = c[0],
        f = c[1],
        g = m(t),
        h = p(null),
        y = h[0],
        C = h[1],
        b = d(
          function () {
            var e = o("WAWebToast.react").genId();
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: a, id: e }),
            );
          },
          [a],
        ),
        v = d(
          function () {
            s(!0);
            var t = g.current;
            o("WAPromiseLoop")
              .promiseLoop(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (r) {
                      var o = t[0],
                        a = o.action,
                        i = o.errorMessage,
                        l = o.onError,
                        s = o.onSuccess;
                      try {
                        (yield a(),
                          s == null || s(),
                          t.shift(),
                          t.length === 0 && r());
                      } catch (t) {
                        return (e || (e = n("Promise"))).reject({
                          error: t,
                          errorMessage: i,
                          onError: l,
                        });
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              )
              .then(function () {
                (f(!1), b(), r());
              })
              .catch(function (e) {
                var t = e.error,
                  n = e.errorMessage,
                  r = e.onError;
                (f(!0), C(n), r == null || r(t));
              })
              .finally(function () {
                s(!1);
              });
          },
          [r, b],
        );
      return {
        actionFailure: _,
        failureText: y,
        isRunningAction: l,
        runActions: v,
      };
    }
    l.default = _;
  },
  98,
);
