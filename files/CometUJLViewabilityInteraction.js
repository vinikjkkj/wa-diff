__d(
  "CometUJLViewabilityInteraction",
  ["CometUserJourneyLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("CometUserJourneyLogger").journeyPublishPoint("unit_focused");
    }
    function s() {
      r("CometUserJourneyLogger").journeyPublishPoint("scrolled_away");
    }
    var u = { notifyScrolledAway: s, notifyUnitFocused: e };
    l.default = u;
  },
  98,
);
