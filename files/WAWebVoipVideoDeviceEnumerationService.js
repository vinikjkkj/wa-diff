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
    async function _(t) {
      t === void 0 && (t = {});
      try {
        var n,
          r,
          a = f(t.isInActiveCall),
          i = a
            ? navigator.mediaDevices
            : (n =
                  (r = t.targetWindow) == null || (r = r.navigator) == null
                    ? void 0
                    : r.mediaDevices) != null
              ? n
              : navigator.mediaDevices;
        if (!(i != null && i.enumerateDevices))
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                ])),
            ),
            []
          );
        var l = g(i, t, a);
        l != null && (await l);
        var c = await o("WAWebAudioDeviceManager").coalescedEnumerateDevices(i),
          d = c
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
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableVideoDevices] loaded ",
                `
      video devices`,
              ])),
            d.length,
          ),
          d
        );
      } catch (e) {
        return (
          (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                  "",
                ])),
              e,
            ),
          []
        );
      }
    }
    function f(e) {
      var t = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled();
      return (
        e === !0 &&
        ((!o("WAWebUA").UA.isFirefox && !o("WAWebUA").UA.isSafari) || t)
      );
    }
    function g(e, t, n) {
      var r = t.isInActiveCall,
        a = t.skipPermissionRequest,
        i = t.targetWindow,
        l = a === !0 || (o("WAWebUA").UA.isSafari && r === !0),
        s = o("WAWebUA").UA.isFirefox && i != null;
      return n ||
        l ||
        o("WAWebVoipMediaPermissionChecks").isVirtualVideoCaptureEnabled()
        ? null
        : h(e, t, s);
    }
    async function h(e, t, n) {
      var r = t.isInActiveCall,
        a = t.targetWindow,
        i = n
          ? { granted: !1 }
          : await o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
              "camera",
              a == null ? void 0 : a.navigator,
            ),
        l = i.granted;
      if (!l)
        try {
          await y(e);
        } catch (e) {
          if (r !== !0) throw e;
        }
    }
    function y(e) {
      var t = p.get(e);
      if (t != null) return t;
      var n = (async function () {
        var t = Date.now(),
          n = await C(e),
          r = Date.now() - t;
        n.getTracks().forEach(function (e) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableVideoDevices] permission track ",
                ": readyState=",
                ", stopping (took ",
                "ms)",
              ])),
            e.kind,
            e.readyState,
            r,
          ),
            e.stop());
        });
      })().finally(function () {
        window.setTimeout(function () {
          p.get(e) === n && p.delete(e);
        }, m);
      });
      return (p.set(e, n), n);
    }
    async function C(e) {
      var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      if (!r("isStringNullOrEmpty")(t))
        try {
          return await e.getUserMedia({ video: { deviceId: { exact: t } } });
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
    }
    l.enumerateVideoDevices = _;
  },
  98,
);
