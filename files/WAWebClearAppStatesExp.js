__d(
  "WAWebClearAppStatesExp",
  ["WAWebClearAppStates", "WAWebClearAppStatesAsync"],
  function (t, n, r, o, a, i, l) {
    var e = 50;
    async function s(t, n) {
      return (
        t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        t
          ? await r("WAWebClearAppStatesAsync")(e, n)
          : new Promise(function (e) {
              (r("WAWebClearAppStates")(n), e());
            })
      );
    }
    l.default = s;
  },
  98,
);
