__d(
  "adsPlacementAPISpecReaderIsActiveFacebookPosition",
  ["adsPlacementAPISpecReaderIsActivePublisherPlatform"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
        !!e.facebook_positions &&
        e.facebook_positions.includes(t)
      );
    }
    l.default = e;
  },
  98,
);
