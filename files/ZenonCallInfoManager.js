__d(
  "ZenonCallInfoManager",
  ["ZenonDeviceId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.callTrigger,
          n = e.conferenceName,
          r = e.isCaller,
          a = e.isVideo,
          i = e.localCallID,
          l = e.peerID,
          s = e.protocol,
          u = e.serverInfoData,
          c = e.signalingID,
          d = o("ZenonDeviceId").getZenonLocalStorageDeviceIdWithFallback(),
          m = {
            callTrigger: t != null ? t : "",
            conferenceName: n != null ? n : "",
            deviceID: d,
            isCaller: r,
            isVideo: a,
            localCallID: i,
            peerID: l,
            protocol: s,
            signalingID: c,
          };
        this.$1 = babelHelpers.extends({}, m, { serverInfoData: u });
      }
      var t = e.prototype;
      return (
        (t.setDeviceID = function (t) {
          this.$1.deviceID = t;
        }),
        (t.setLocalCallID = function (t) {
          this.$1.localCallID = t;
        }),
        (t.setSharedCallId = function (t) {
          this.$1.serverInfoData = t;
        }),
        (t.setSignalingID = function (t) {
          this.$1.signalingID = t;
        }),
        (t.getCallInfo = function () {
          return this.$1;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
