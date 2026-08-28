__d(
  "ZenonMediaModeManager",
  [
    "EventEmitter",
    "UserAgent",
    "ZenonAuditedCheckpointLogId",
    "ZenonIGMediaUtil",
    "ZenonInfraActionsLogger",
    "ZenonSignalingProtocol",
    "shouldUseSFUMediaPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$ZenonMediaModeManager$p_1 = "sfu"),
          (t.$ZenonMediaModeManager$p_2 = !1),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onJoin = function (t, n, o) {
          if (
            (r("shouldUseSFUMediaPath")(t) && !o) ||
            r("ZenonIGMediaUtil").shouldUseSFUOnly()
          ) {
            this.$ZenonMediaModeManager$p_3("sfu");
            return;
          }
          var e = this.$ZenonMediaModeManager$p_4(t, n, o);
          switch (e) {
            case r("ZenonSignalingProtocol").MWPP:
              this.$ZenonMediaModeManager$p_3("p2p");
              return;
            case r("ZenonSignalingProtocol").MW:
              this.$ZenonMediaModeManager$p_3("sfu");
              return;
            case r("ZenonSignalingProtocol").ULLC:
              this.$ZenonMediaModeManager$p_3("p2p");
              return;
          }
        }),
        (n.onInitiatePeerConnectionRestarting = function () {
          this.$ZenonMediaModeManager$p_2 = !0;
        }),
        (n.onPeerConnectionEstablished = function () {
          this.$ZenonMediaModeManager$p_2 = !1;
        }),
        (n.isMediaModeChangeInProgress = function () {
          return this.$ZenonMediaModeManager$p_2;
        }),
        (n.onDeescalated = function () {
          this.$ZenonMediaModeManager$p_3("p2p");
        }),
        (n.onSfuEscalated = function () {
          this.$ZenonMediaModeManager$p_3("sfu");
        }),
        (n.getMediaMode = function () {
          return this.$ZenonMediaModeManager$p_1;
        }),
        (n.$ZenonMediaModeManager$p_3 = function (t) {
          ((this.$ZenonMediaModeManager$p_1 = t),
            r("ZenonInfraActionsLogger").updateCachedValues({ mediaPath: t }),
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__PLATFORM,
              checkpoint: "Media mode updated to " + t,
              mediaPath: t,
            }),
            this.emit("mediaMode", this.$ZenonMediaModeManager$p_1));
        }),
        (n.$ZenonMediaModeManager$p_4 = function (t, n, o) {
          return t
            ? !r("UserAgent").isBrowser("Firefox") && n === 1
              ? r("ZenonSignalingProtocol").MWPP
              : r("ZenonSignalingProtocol").MW
            : o
              ? r("ZenonSignalingProtocol").MWPP
              : r("ZenonSignalingProtocol").MW;
        }),
        t
      );
    })(r("EventEmitter"));
    l.ZenonMediaModeManager = e;
  },
  98,
);
