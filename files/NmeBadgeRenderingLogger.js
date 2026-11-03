__d(
  "NmeBadgeRenderingLogger",
  ["getNMEBadgeClientSideSamplingResult", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("NmeBadgeRenderingFalcoEvent").__setRef(
        "NmeBadgeRenderingLogger",
      ),
      s = function (n) {
        var t = n.entity_owner_id,
          o = n.event_type,
          a = n.is_badge_visible,
          i = n.surface,
          l = r("getNMEBadgeClientSideSamplingResult")(i);
        l &&
          e.onReady(function (e) {
            return e.log(function () {
              return {
                entity_owner_id: t,
                event_type: o,
                is_badge_visible: a,
                surface: i,
              };
            });
          });
      };
    l.logNmeBadgeRenderingFalcoEventDeferred = s;
  },
  98,
);
