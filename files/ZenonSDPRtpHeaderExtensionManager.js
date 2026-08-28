__d(
  "ZenonSDPRtpHeaderExtensionManager",
  [
    "ZenonAppProvider",
    "ZenonBrowsers",
    "ZenonInfraActionsLogger",
    "ZenonODSLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      s =
        "http://www.webrtc.org/experiments/rtp-hdrext/video-layers-allocation00",
      u =
        "http://www.webrtc.org/experiments/rtp-hdrext/generic-frame-descriptor-00",
      c = "http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time",
      d = 0,
      m = (function () {
        function t(e) {
          ((this.$1 = []), (this.$2 = e), this.$3());
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            if (o("ZenonBrowsers").isVideoLayersAllocationSupported()) {
              var e = {
                existingId: d,
                isRemoteSupported: !0,
                mediaType: "video",
                notFoundCounterName: "no_unused_extension_id_found_for_vla",
                uri: s,
              };
              this.$1.push(e);
            }
            if (this.$2) {
              var t = {
                existingId: d,
                isRemoteSupported: !0,
                mediaType: "video",
                notFoundCounterName: "no_unused_extension_id_found_for_gfd",
                uri: u,
              };
              this.$1.push(t);
            }
            if (o("ZenonAppProvider").shouldSupportRTPSession()) {
              var n = {
                existingId: d,
                isRemoteSupported: !0,
                mediaType: "audio",
                notFoundCounterName:
                  "no_unused_extension_id_found_for_abs_capture_time",
                uri: c,
              };
              this.$1.push(n);
            }
          }),
          (n.resetRtpHeaderExtensionStatus = function () {
            ((this.$1 = []), this.$3());
          }),
          (n.setExtensionsSupportedByRemote = function (t) {
            var e = this;
            this.$1.forEach(function (n) {
              var r = e.$4(t, n.uri);
              r === d
                ? (n.isRemoteSupported = !1)
                : n.existingId === d && (n.existingId = r);
            });
          }),
          (n.enableRegisteredExtensions = function (t) {
            var e = this,
              n = t.getMedia();
            n != null &&
              this.$1.forEach(function (o) {
                if (o.isRemoteSupported) {
                  var a = o.existingId !== d ? o.existingId : e.$5(n, o);
                  if (a === d) return;
                  ((o.existingId = a),
                    r(
                      "ZenonInfraActionsLogger",
                    ).logCheckpointEmployeesTestUsersOnly({
                      checkpoint:
                        "[ZP] enabling header extension for <uri: " +
                        o.uri +
                        ", id: " +
                        a +
                        ", media type: " +
                        o.mediaType +
                        ", >",
                    }),
                    t.enableExtension(o.uri, o.mediaType, a));
                }
              });
          }),
          (n.$5 = function (n, o) {
            var t = new Set(e),
              a = 0;
            return (
              n.forEach(function (e) {
                if (e.ext != null)
                  for (var n of e.ext) {
                    if (n.uri === o.uri) {
                      a = n.value;
                      return;
                    }
                    t.delete(n.value);
                  }
              }),
              a === d && t.size === 0
                ? (o.notFoundCounterName !== "" &&
                    r("ZenonODSLogger").logCounter(o.notFoundCounterName),
                  d)
                : a === d
                  ? Array.from(t)[0]
                  : a
            );
          }),
          (n.$4 = function (t, n) {
            var e = d,
              r = t.getMedia();
            if (r != null)
              for (var o of r) {
                var a;
                (a = o.ext) == null ||
                  a.forEach(function (t) {
                    t.uri === n && (e = t.value);
                  });
              }
            return e;
          }),
          (n.getRegisteredRtpHeaderExtensions = function () {
            return this.$1;
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
