__d(
  "WAWebClearAppStatesExp",
  [
    "Promise",
    "WAWebClearAppStates",
    "WAWebClearAppStatesAsync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return (
            t === void 0 && (t = !1),
            t
              ? yield r("WAWebClearAppStatesAsync")()
              : new (e || (e = n("Promise")))(function (e) {
                  (r("WAWebClearAppStates")(), e());
                })
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
