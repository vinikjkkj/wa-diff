__d(
  "WAWebVoipGridPageSize",
  ["WAWebABProps", "WAWebBrowserApi", "WAWebVoipDeviceClassUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 9,
      u = 520,
      c = 540,
      d = 6;
    function m() {
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
        (a == null && t != null && t >= d)
        ? s
        : e;
    }
    function p(t, n, r) {
      return t <= e
        ? e
        : n <= 0
          ? t
          : r === e
            ? n >= c
              ? t
              : e
            : n < u
              ? e
              : t;
    }
    ((l.GRID_PAGE_SIZE_DEFAULT = e),
      (l.GRID_PAGE_SIZE_3X3 = s),
      (l.GRID_3X3_MIN_CONTAINER_WIDTH = u),
      (l.GRID_3X3_RESTORE_CONTAINER_WIDTH = c),
      (l.getGridParticipantsPerPage = m),
      (l.getResponsiveGridPageSize = p));
  },
  98,
);
