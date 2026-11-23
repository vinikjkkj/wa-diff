__d(
  "adsMessengerDataModelSetInThreadCarouselIsEnabled",
  ["AdsMessengerJSONPaths", "adsMessengerDataModelClone", "setByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelClone")(e);
      return (
        r("setByPath")(
          n,
          r("AdsMessengerJSONPaths").TEXT_FORMAT.IN_THREAD_CAROUSEL.IS_ENABLED,
          t,
        ),
        n
      );
    }
    l.default = e;
  },
  98,
);
