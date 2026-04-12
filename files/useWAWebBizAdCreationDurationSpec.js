__d(
  "useWAWebBizAdCreationDurationSpec",
  [
    "CometRelay",
    "useWAWebBizAdCreationDurationSpec_boostedComponentWrapper.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationDurationSpec_boostedComponentWrapper.graphql",
            )),
      u = -1;
    function c(e) {
      var t,
        n,
        r = o("CometRelay").useFragment(s, e),
        a =
          (t = (n = r.spec) == null ? void 0 : n.durationInDays) != null
            ? t
            : u;
      return { durationInDays: a, initialDurationInDays: a };
    }
    l.default = c;
  },
  98,
);
