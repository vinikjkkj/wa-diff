__d(
  "CometAdPrefsWAIST30ManageLocationRow",
  [
    "fbt",
    "CometAdPrefsWAISTLogHooks",
    "CometListCellStrict_DEPRECATED.react",
    "XCometLocationInfoControllerRouteBuilder",
    "meta-brand-map-dropper-filled-20",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.update_profile_uri,
        n = s._(/*BTDS*/ ""),
        a =
          t != null
            ? t
            : r("XCometLocationInfoControllerRouteBuilder").buildURL({}),
        i = o("CometAdPrefsWAISTLogHooks").useLogCallback({
          entity: "open_manage_location_button",
          event: "click",
          parentEntity: "detail_page",
          targetingType: 2,
        });
      return u.jsx(r("CometListCellStrict_DEPRECATED.react"), {
        addOnEnd: { type: "disclosure" },
        addOnStart: {
          color: "gray",
          icon: o("meta-brand-map-dropper-filled-20")
            .metaBrandMapDropperPinLocationFilled20,
          size: 40,
          type: "contained-icon",
        },
        headline: n,
        level: 4,
        linkProps: { target: "_blank", url: a },
        onPress: function () {
          return i();
        },
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
