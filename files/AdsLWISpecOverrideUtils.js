__d(
  "AdsLWISpecOverrideUtils",
  ["Base64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("Base64").encode(JSON.stringify(e));
    }
    function s(e) {
      return r("Base64").encode(
        JSON.stringify(e, function (e, t) {
          if (t != null) return t;
        }),
      );
    }
    ((l.encodeLWIClientSpecOverride = e),
      (l.encodeLWIClientSpecOverrideDropNullish = s));
  },
  98,
);
