__d(
  "AdsPEDropdownMenuExpansionLocalStorageUtil",
  ["AdsManagerCampaignTableLocalStorageUtils", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ads_manager_menu_expansion_popular",
      s = "ads_manager_menu_expansion_misc",
      u = "ads_manager_menu_expansion_recent",
      c = function (t) {
        try {
          if (t.length === 0) return !1;
          var e = JSON.parse(t);
          return e === !0;
        } catch (e) {
          var n = r("err")(String(e));
          return (
            r("FBLogger")("AdsSettingsMetricsGuidanceCardLocalStorage")
              .catching(n)
              .warn(
                "Failed to get local storage for AdsSettingsMetricsGuidanceCardLocalStorage",
              ),
            !1
          );
        }
      },
      d = function () {
        var t = o("AdsManagerCampaignTableLocalStorageUtils").getLocalStorage(
          e,
        );
        return c(t);
      },
      m = function () {
        var e = o("AdsManagerCampaignTableLocalStorageUtils").getLocalStorage(
          u,
        );
        return c(e);
      },
      p = function () {
        var e = o("AdsManagerCampaignTableLocalStorageUtils").getLocalStorage(
          s,
        );
        return c(e);
      },
      _ = function (n) {
        h(n, e);
      },
      f = function (t) {
        h(t, u);
      },
      g = function (t) {
        h(t, s);
      },
      h = function (t, n) {
        try {
          o("AdsManagerCampaignTableLocalStorageUtils").setLocalStorage(
            n,
            JSON.stringify(t),
          );
        } catch (t) {
          var e = r("err")(String(t));
          r("FBLogger")("AdsSettingsMetricsGuidanceCardLocalStorage")
            .catching(e)
            .warn("Failed to update guidance card visibility preference");
        }
      },
      y = {
        setShouldExpandPopularMenuSection: _,
        shouldExpandPopularMenuSection: d,
        setShouldExpandRecentMenuSection: f,
        shouldExpandRecentMenuSection: m,
        setShouldExpandMiscMenuSection: g,
        shouldExpandMiscMenuSection: p,
      };
    l.default = y;
  },
  98,
);
