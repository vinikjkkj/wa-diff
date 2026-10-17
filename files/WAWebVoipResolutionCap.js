__d(
  "WAWebVoipResolutionCap",
  [
    "WAWebABProps",
    "WAWebBrowserApi",
    "WAWebVoipCaptureCap",
    "WAWebVoipDeviceClassUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6;
    function s() {
      var t,
        n,
        r,
        a,
        i = o("WAWebBrowserApi").getNumCpu(),
        l = o("WAWebBrowserApi").getMemClass(),
        s = l != null ? Math.round(l / 1e3) : null,
        u = o("WAWebVoipDeviceClassUtils").computeDeviceClass(i, s),
        c =
          (t = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_low_cap_width",
          )) != null
            ? t
            : 480,
        d =
          (n = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_low_cap_height",
          )) != null
            ? n
            : 270,
        m =
          (r = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_mid_cap_width",
          )) != null
            ? r
            : 640,
        p =
          (a = o("WAWebABProps").getABPropConfigValue(
            "web_voip_video_mid_cap_height",
          )) != null
            ? a
            : 360;
      if (u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.LOW)
        return { width: c, height: d };
      var _ =
        u != null
          ? u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MOD_LOW ||
            u === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MID
          : i != null && i > 0 && i < e;
      return _ ? { width: m, height: p } : null;
    }
    function u(e) {
      return o("WAWebVoipCaptureCap").applyCaptureCap(e, s());
    }
    ((l.getLowEndCaptureCap = s), (l.applyLowEndResolutionCap = u));
  },
  98,
);
