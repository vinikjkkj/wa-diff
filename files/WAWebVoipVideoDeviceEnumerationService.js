__d(
  "WAWebVoipVideoDeviceEnumerationService",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebMediaPermissionsUtils",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipGatingUtils",
    "WAWebVoipMediaPermissionChecks",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 200,
      p = new WeakMap();
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = {});
          try {
            var t,
              n,
              r = g(e.isInActiveCall),
              a = r
                ? navigator.mediaDevices
                : (t =
                      (n = e.targetWindow) == null || (n = n.navigator) == null
                        ? void 0
                        : n.mediaDevices) != null
                  ? t
                  : navigator.mediaDevices;
            if (!(a != null && a.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var i = h(a, e, r);
            i != null && (yield i);
            var l = yield o(
                "WAWebAudioDeviceManager",
              ).coalescedEnumerateDevices(a),
              d = l
                .filter(function (e) {
                  return e.kind === "videoinput";
                })
                .map(function (e) {
                  return {
                    deviceId: e.deviceId,
                    label: e.label || "Camera " + e.deviceId.slice(0, 8),
                  };
                });
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] loaded ",
                    "\n      video devices",
                  ])),
                d.length,
              ),
              d
            );
          } catch (e) {
            return (
              (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
      return (
        e === !0 &&
        ((!o("WAWebUA").UA.isFirefox && !o("WAWebUA").UA.isSafari) || t)
      );
    }
    function h(e, t, n) {
      var r = t.isInActiveCall,
        a = t.skipPermissionRequest,
        i = t.targetWindow,
        l = a === !0 || (o("WAWebUA").UA.isSafari && r === !0),
        s = o("WAWebUA").UA.isFirefox && i != null;
      return n ||
        l ||
        o("WAWebVoipMediaPermissionChecks").isVirtualVideoCaptureEnabled()
        ? null
        : y(e, t, s);
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.isInActiveCall,
            a = t.targetWindow,
            i = n
              ? { granted: !1 }
              : yield o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
                  "camera",
                  a == null ? void 0 : a.navigator,
                ),
            l = i.granted;
          if (!l)
            try {
              yield b(e);
            } catch (e) {
              if (r !== !0) throw e;
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      var r = p.get(t);
      if (r != null) return r;
      var a = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var n = Date.now(),
            r = yield v(t),
            a = Date.now() - n;
          r.getTracks().forEach(function (t) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableVideoDevices] permission track ",
                  ": readyState=",
                  ", stopping (took ",
                  "ms)",
                ])),
              t.kind,
              t.readyState,
              a,
            ),
              t.stop());
          });
        })()
        .finally(function () {
          window.setTimeout(function () {
            p.get(t) === a && p.delete(t);
          }, m);
        });
      return (p.set(t, a), a);
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (!r("isStringNullOrEmpty")(t))
            try {
              return yield e.getUserMedia({
                video: { deviceId: { exact: t } },
              });
            } catch (e) {
              if (
                !o(
                  "WAWebVoipMediaPermissionChecks",
                ).isSelectedVideoDeviceUnavailableError(e)
              )
                throw e;
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                e,
              );
            }
          return e.getUserMedia({ video: !0 });
        })),
        S.apply(this, arguments)
      );
    }
    l.enumerateVideoDevices = _;
  },
  98,
);
