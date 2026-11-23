__d(
  "CometAdPrefsWAISTConnectionURL",
  [
    "XCometEventPermalinkControllerRouteBuilder",
    "XCometPageVanityControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e === "EVENT"
        ? r("XCometEventPermalinkControllerRouteBuilder").buildURL({
            event_id: t,
          })
        : r("XCometPageVanityControllerRouteBuilder").buildURL({ vanity: t });
    }
    l.openConnectionPageURL = e;
  },
  98,
);
