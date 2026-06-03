__d(
  "WAWebClearAppStatesExp",
  [
    "Promise",
    "WAWebClearAppStates",
    "WAWebClearAppStatesAsync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 50;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          return (
            t === void 0 && (t = !1),
            o === void 0 && (o = !1),
            t
              ? yield r("WAWebClearAppStatesAsync")(s, o)
              : new (e || (e = n("Promise")))(function (e) {
                  (r("WAWebClearAppStates")(o), e());
                })
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
