__d(
  "useWAWebTextStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebContactValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        a = e.contact,
        i = s(null),
        l = i[0],
        u = i[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime]),
          (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebContactValues").useContactValues(a.id, c),
        m = d[0],
        p;
      t[1] !== a.id || t[2] !== m
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (u(null),
                !!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                  m === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED)
              )
                try {
                  yield o("WAWebTextStatusAction").getTextStatus(a.id);
                } catch (t) {
                  var e = t;
                  u(r("getErrorSafe")(e));
                }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[1] = a.id),
          (t[2] = m),
          (t[3] = p))
        : (p = t[3]);
      var _ = r("useWAWebStableCallback")(p),
        f;
      (t[4] !== a.id || t[5] !== m
        ? ((f = [a.id, m]), (t[4] = a.id), (t[5] = m), (t[6] = f))
        : (f = t[6]),
        r("useWAWebAsync")(_, f));
      var g;
      return (
        t[7] !== l ? ((g = { error: l }), (t[7] = l), (t[8] = g)) : (g = t[8]),
        g
      );
    }
    l.default = u;
  },
  98,
);
