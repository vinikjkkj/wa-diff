__d(
  "WAWebCanUseGroupFromGroup",
  ["WAWebABProps", "WAWebGroupGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e <= o("WAWebGroupGatingUtils").GFG_GROUP_SIZE_THRESHOLD) return !0;
      if (!t) return !1;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "group_from_group_ban_risk_mitigation_enabled",
        )
      )
        return !0;
      var n = o("WAWebABProps").getABPropConfigValue(
        "group_from_group_admin_max_size",
      );
      return n <= 0 || e <= n;
    }
    l.default = e;
  },
  98,
);
