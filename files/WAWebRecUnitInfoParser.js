__d(
  "WAWebRecUnitInfoParser",
  [],
  function (t, n, r, o, a, i) {
    var e = "wa_smb_biz_home_recunit_info",
      l = "product_team_name",
      s = "product_level_cooldown_seconds",
      u = "ignore_product_dedup",
      c = "ignore_product_level_cooldown",
      d = 86400;
    function m(t) {
      if (t == null) return null;
      var n = t.attribute.find(function (t) {
        return t.key === e;
      });
      if (n == null) return null;
      try {
        var r = JSON.parse(n.value),
          o = r[l];
        if (o == null || o === "") return null;
        var a = String(o);
        return {
          productTeamName: a,
          productLevelCooldownSeconds: typeof r[s] == "number" ? r[s] : d,
          ignoreProductDedup: r[u] === !0,
          ignoreProductLevelCooldown: r[c] === !0,
        };
      } catch (e) {
        return null;
      }
    }
    i.parseRecUnitInfo = m;
  },
  66,
);
