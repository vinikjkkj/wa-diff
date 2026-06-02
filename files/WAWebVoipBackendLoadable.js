__d(
  "WAWebVoipBackendLoadable",
  ["JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    var e = async function () {
      var e = await Promise.all([
          r("JSResourceForInteraction")("WAWebVoipInit")
            .__setRef("WAWebVoipBackendLoadable")
            .load(),
          r("JSResourceForInteraction")("WAWebHandleVoipCallOffer")
            .__setRef("WAWebVoipBackendLoadable")
            .load(),
        ]),
        t = e[0],
        n = e[1];
      return { WAWebVoipInit: t, WAWebHandleVoipCallOffer: n };
    };
    l.requireVoipJsBackend = e;
  },
  98,
);
