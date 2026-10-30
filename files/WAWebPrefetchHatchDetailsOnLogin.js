__d(
  "WAWebPrefetchHatchDetailsOnLogin",
  [
    "WAWebCmd",
    "WAWebHatchChannelBootstrap",
    "WAWebHatchCvmReadOnlyCanSend",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebPrimaryFeaturesModel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = !1,
      u = !1,
      c = !1;
    function d() {
      e ||
        ((e = !0),
        (s = o("WAWebCmd").Cmd.isMainStreamReadyMd === !0),
        s
          ? m()
          : o("WAWebCmd").Cmd.on(
              "main_stream_mode_ready_from_bridge",
              function () {
                ((s = !0), m(), p());
              },
            ),
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on(
          "change:aiHatchIntegrationEnabled",
          function () {
            p();
          },
        ),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", function () {
          p();
        }),
        p());
    }
    function m() {
      c ||
        ((c = !0),
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "unlinked" &&
          o("WAWebHatchCvmSecretPref").clearHatchCvmState(),
        o("WAWebHatchCvmReadOnlyCanSend").watchHatchCvmReadOnlyCanSend());
    }
    function p() {
      u ||
        !s ||
        !o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() ||
        ((u = !0), o("WAWebHatchChannelBootstrap").bootstrapHatchWhenLinked());
    }
    l.initHatchDetailsPrefetchOnLogin = d;
  },
  98,
);
