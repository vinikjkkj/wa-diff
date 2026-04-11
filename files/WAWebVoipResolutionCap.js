__d(
  "WAWebVoipResolutionCap",
  ["WAWebABProps", "WAWebBrowserApi", "WAWebVoipDeviceClassUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6;
    function s(t) {
      var n, r, a, i;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_video_resolution_cap",
        ) !== !0
      )
        return t;
      var l = o("WAWebBrowserApi").getNumCpu(),
        s = o("WAWebBrowserApi").getMemClass(),
        u = s != null ? Math.round(s / 1e3) : null,
        c = o("WAWebVoipDeviceClassUtils").computeDeviceClass(l, u),
        d =
          (n = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_low_cap_width",
          )) != null
            ? n
            : 480,
        m =
          (r = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_low_cap_height",
          )) != null
            ? r
            : 270,
        p =
          (a = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_mid_cap_width",
          )) != null
            ? a
            : 640,
        _ =
          (i = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_mid_cap_height",
          )) != null
            ? i
            : 360;
      if (c === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.LOW)
        return {
          width: Math.min(t.width, d),
          height: Math.min(t.height, m),
          maxFps: t.maxFps,
        };
      var f =
        c != null
          ? c === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MOD_LOW ||
            c === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MID
          : l != null && l > 0 && l < e;
      return f
        ? {
            width: Math.min(t.width, p),
            height: Math.min(t.height, _),
            maxFps: t.maxFps,
          }
        : t;
    }
    l.applyLowEndResolutionCap = s;
  },
  98,
);
