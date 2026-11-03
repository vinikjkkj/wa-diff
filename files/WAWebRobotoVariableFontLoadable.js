__d(
  "WAWebRobotoVariableFontLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WDSLoadRobotoVariableFont")
          .__setRef("WAWebRobotoVariableFontLoadable")
          .load();
        return e;
      }, "WDSLoadRobotoVariableFont");
    function c() {
      u();
    }
    function d() {
      s(function () {
        c();
      }, []);
    }
    ((l.requireRobotoVariableFont = u),
      (l.applyRobotoFont = c),
      (l.useApplyRobotoFont = d));
  },
  98,
);
