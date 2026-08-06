__d(
  "WAWebPrefetchHatchDetailsOnLogin",
  [
    "WAWebCmd",
    "WAWebHatchChannelBootstrap",
    "WAWebHatchFrontendGating",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = !1,
      u = !1;
    function c() {
      e ||
        ((e = !0),
        (s = o("WAWebCmd").Cmd.isMainStreamReadyMd === !0),
        s ||
          o("WAWebCmd").Cmd.on(
            "main_stream_mode_ready_from_bridge",
            function () {
              ((s = !0), d());
            },
          ),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
          "change:aiBotIntegrationEnabled",
          function () {
            d();
          },
        ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function () {
          d();
        }),
        d());
    }
    function d() {
      u ||
        !s ||
        !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() ||
        ((u = !0), o("WAWebHatchChannelBootstrap").bootstrapHatchWhenLinked());
    }
    l.initHatchDetailsPrefetchOnLogin = c;
  },
  98,
);
