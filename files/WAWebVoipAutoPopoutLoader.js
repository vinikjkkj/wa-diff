__d(
  "WAWebVoipAutoPopoutLoader",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebVoipAutoPopout")
          .__setRef("WAWebVoipAutoPopoutLoader")
          .load();
      }, "WAWebVoipAutoPopout"),
      s = null;
    function u() {
      return s;
    }
    async function c() {
      s = await e();
    }
    ((l.getAutoPopout = u), (l.loadAutoPopout = c));
  },
  98,
);
