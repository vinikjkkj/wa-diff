__d(
  "WAWebHatchAttestationLoader",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebHatchAttestationApi")
        .__setRef("WAWebHatchAttestationLoader")
        .load();
    }, "HatchAttestationApi");
    l.loadHatchAttestationApi = e;
  },
  98,
);
