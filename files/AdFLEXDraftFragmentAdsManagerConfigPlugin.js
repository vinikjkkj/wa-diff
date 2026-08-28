__d(
  "AdFLEXDraftFragmentAdsManagerConfigPlugin",
  ["isAuto2Eligible"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexDraftFragmentConfig",
        key: "adsManager",
        tool: "MANAGE_ADS",
        isFragmentAvailableInTool: function (t, n, o, a) {
          if (r("isAuto2Eligible")()) {
            var e,
              i,
              l = (e = t.getValue()) == null ? void 0 : e.parentAdObjectID,
              s = null;
            if (n === "campaign") s = t;
            else if (n === "ad_set" && l != null)
              s = a == null ? void 0 : a.get(l);
            else if (n === "ad" && l != null) {
              var u,
                c = o == null ? void 0 : o.get(l),
                d =
                  c == null || (u = c.getValue()) == null
                    ? void 0
                    : u.parentAdObjectID;
              d != null && (s = a == null ? void 0 : a.get(d));
            }
            var m =
              (i = s) == null ||
              (i = i.getValue()) == null ||
              (i = i.values) == null
                ? void 0
                : i.get("automation2_brief_group_id");
            if ((m == null ? void 0 : m.newValue) != null) return !1;
          }
          return !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
