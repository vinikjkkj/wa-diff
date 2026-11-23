__d(
  "WAWebVoipWaitingRoomToggleLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebVoipWaitingRoomToggleJob",
      )
        .__setRef("WAWebVoipWaitingRoomToggleLoadable")
        .load();
      return e.toggleWaitingRoomForCallLink;
    }, "WAWebVoipWaitingRoomToggle");
    async function s(t) {
      var n = await e();
      return n(t);
    }
    l.toggleWaitingRoomLoadable = s;
  },
  98,
);
