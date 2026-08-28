__d(
  "AdsAIActionabilityViewChangesModalDataProviderPlugin",
  ["AdsAIVisibilityUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.location,
      s = e.href,
      u = {
        initialState: {
          shouldShowViewChangesModal: o(
            "AdsAIVisibilityUtils",
          ).shouldShowViewChangesModalOnLoad(s != null ? s : ""),
          adObjectIDs: o("AdsAIVisibilityUtils").getAdObjectsFromURI(s),
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
