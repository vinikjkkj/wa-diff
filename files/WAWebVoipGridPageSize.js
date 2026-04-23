__d(
  "WAWebVoipGridPageSize",
  ["WAWebABProps", "WAWebBrowserApi", "WAWebVoipDeviceClassUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 9,
      u = 6;
    function c() {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_voip_adaptive_grid_page_size",
        ) !== !0
      )
        return e;
      var t = o("WAWebBrowserApi").getNumCpu(),
        n = o("WAWebBrowserApi").getMemClass(),
        r = n != null ? Math.round(n / 1e3) : null,
        a = o("WAWebVoipDeviceClassUtils").computeDeviceClass(t, r);
      return a === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.MOD_HIGH ||
        a === o("WAWebVoipDeviceClassUtils").DEVICE_CLASS.HIGH ||
        (a == null && t != null && t >= u)
        ? s
        : e;
    }
    ((l.GRID_PAGE_SIZE_DEFAULT = e),
      (l.GRID_PAGE_SIZE_3X3 = s),
      (l.getGridParticipantsPerPage = c));
  },
  98,
);
