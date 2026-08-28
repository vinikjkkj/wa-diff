__d(
  "ZenonLocalMediaSDK",
  [
    "FBLogger",
    "ZenonLocalMediaManager",
    "ZenonMediaDevicesUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    function s() {
      return e.filter(function (e) {
        return e.webrtcTrack.readyState === "live";
      });
    }
    function u(t) {
      e = e.concat(t);
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("ZenonLocalMediaManager").getDisplayMedia(e, t, n);
          return (u(r), r);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("ZenonLocalMediaManager").getDevices(e);
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("ZenonMediaDevicesUtils").enumerateDevices();
          return { canUseAudio: b(e), canUseVideo: C(e) };
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e;
            if (
              typeof ((e = navigator.permissions) == null ? void 0 : e.query) ==
              "function"
            ) {
              var t = yield navigator.permissions.query({ name: "microphone" }),
                n = t.state;
              return n === "granted";
            }
          } catch (e) {
            r("FBLogger")("rtc_www")
              .catching(r("getErrorSafe")(e))
              .warn("isMicrophoneAccessGranted");
          }
          var o = yield p(),
            a = o.canUseAudio;
          return a;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e;
            if (
              typeof ((e = navigator.permissions) == null ? void 0 : e.query) ==
              "function"
            ) {
              var t = yield navigator.permissions.query({ name: "microphone" }),
                n = t.state,
                o = yield navigator.permissions.query({ name: "camera" }),
                a = o.state;
              return { cameraState: a, microphoneState: n };
            }
          } catch (e) {
            r("FBLogger")("rtc_www")
              .catching(r("getErrorSafe")(e))
              .warn("getCurrentPermissions");
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return e.some(function (e) {
        return e.kind === "videoinput" && e.label.length > 0 && e.id.length > 0;
      });
    }
    function b(e) {
      return e.some(function (e) {
        return e.kind === "audioinput" && e.label.length > 0 && e.id.length > 0;
      });
    }
    ((l.getActiveLocalMediaTracks = s),
      (l.getDisplayMedia = c),
      (l.getDevices = m),
      (l.getAvailableMediaPermission = p),
      (l.isMicrophoneAccessGranted = f),
      (l.getCurrentPermissions = h),
      (l.hasVideoDevicePermission = C),
      (l.hasAudioDevicePermission = b));
  },
  98,
);
