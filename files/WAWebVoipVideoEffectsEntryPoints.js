__d(
  "WAWebVoipVideoEffectsEntryPoints",
  ["WAWebABProps", "WAWebVoipVideoEffectsAvailability"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebVoipVideoEffectsAvailability").isVideoEffectsAvailable()
        ? (function (t) {
            return t === "menu_and_self_view"
              ? !0
              : t === "self_view"
                ? e === "self_view"
                : e === "menu";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "web_voip_video_effects_entry_points",
            ),
          )
        : !1;
    }
    l.isVideoEffectsOfferedFrom = e;
  },
  98,
);
