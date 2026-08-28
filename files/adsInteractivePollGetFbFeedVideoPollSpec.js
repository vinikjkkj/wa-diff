__d(
  "adsInteractivePollGetFbFeedVideoPollSpec",
  ["AdsPlacementAPISpecReaderUtils", "adsInteractivePollGetVideoPollSpec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsPlacementAPISpecReaderUtils").isActiveFacebookFeedPosition(
        t,
      );
      return n ? r("adsInteractivePollGetVideoPollSpec")(e) : null;
    }
    l.default = e;
  },
  98,
);
