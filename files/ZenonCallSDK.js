__d(
  "ZenonCallSDK",
  [
    "EventEmitter",
    "ZenonCallInstanceSDK",
    "ZenonCallsManager",
    "ZenonCallsModelEmitter",
    "ZenonOverlayConfigManager",
    "ZenonSignalingIDType",
    "ZenonTransportEventEmitter",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        n = e.call(this) || this;
        var a = new (r("ZenonOverlayConfigManager"))(t);
        return (
          (n.$ZenonCallSDK$p_1 = new (r("ZenonCallsManager"))(a)),
          o("ZenonCallsModelEmitter").CallsModelEmitterInstance.addListener(
            "callsModelUpdate",
            function (e) {
              n.emit("callsModelUpdate", e);
            },
          ),
          r("ZenonTransportEventEmitter").addListener(
            "transportPlatformEvent",
            function (e) {
              n.emit("signalingEvent", e);
            },
          ),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initSignaling = function (t, n, o, a) {
          r("promiseDone")(
            this.$ZenonCallSDK$p_1.initializeSignaling(t, n, o, a),
          );
        }),
        (n.createCall = function () {
          var e = String(o("ZenonSignalingIDType").generateZenonSignalingID());
          return new (r("ZenonCallInstanceSDK"))(e, this.$ZenonCallSDK$p_1);
        }),
        (n.getCallInstance = function (t) {
          return new (r("ZenonCallInstanceSDK"))(t, this.$ZenonCallSDK$p_1);
        }),
        (n.getCurrentCallsModel = function () {
          return o(
            "ZenonCallsModelEmitter",
          ).CallsModelEmitterInstance.getCallsModel();
        }),
        (n.updateRenderedResolutionMap = function (t) {
          this.$ZenonCallSDK$p_1.updateRenderedResolutionMap(t);
        }),
        t
      );
    })(r("EventEmitter"));
    l.default = e;
  },
  98,
);
