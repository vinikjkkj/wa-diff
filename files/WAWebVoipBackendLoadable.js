__d(
  "WAWebVoipBackendLoadable",
  ["JSResourceForInteraction", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield (e || (e = n("Promise"))).all([
              r("JSResourceForInteraction")("WAWebVoipInit")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
              r("JSResourceForInteraction")("WAWebHandleVoipCallOffer")
                .__setRef("WAWebVoipBackendLoadable")
                .load(),
            ]),
            o = t[0],
            a = t[1];
          return { WAWebVoipInit: o, WAWebHandleVoipCallOffer: a };
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.requireVoipJsBackend = s;
  },
  98,
);
