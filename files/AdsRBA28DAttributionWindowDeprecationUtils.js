__d(
  "AdsRBA28DAttributionWindowDeprecationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.attr_window_deprecation_group;
      return t === "c28_only_headsup"
        ? "c28_only_headsup"
        : t === "c28_only"
          ? "c28_only"
          : t === "c28_7d_default"
            ? "c28_7d_default"
            : t === "vt_only"
              ? "vt_only"
              : t === "c28_and_vt"
                ? "c28_and_vt"
                : t === "web_launch"
                  ? "web_launch"
                  : t === "app_launch"
                    ? "app_launch"
                    : "no_dep";
    }
    i.getExperimentGroup = e;
  },
  66,
);
