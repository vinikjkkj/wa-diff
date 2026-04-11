__d(
  "WAWebCrosspostingGatingUtils",
  ["WAWebABProps", "WAWebCrosspostingBackendGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "rasterize_text_status_pixel_width",
      );
    }
    ((l.statusCrosspostingEnabled = o(
      "WAWebCrosspostingBackendGatingUtils",
    ).statusCrosspostingEnabled),
      (l.textStatusRasterizationWidth = e));
  },
  98,
);
