__d(
  "WAWebRecUnitCardSelectionPipeline",
  ["WAWebRecUnitInfoParser", "WAWebRecUnitProductCooldownManager"],
  function (t, n, r, o, a, i, l) {
    var e = [
      { ignoreCooldown: !1, ignoreDedup: !1 },
      { ignoreCooldown: !0, ignoreDedup: !1 },
      { ignoreCooldown: !0, ignoreDedup: !0 },
    ];
    function s(e, t, n, r) {
      var a = new Set(
          n.map(function (e) {
            return e.model.promotion.id;
          }),
        ),
        i = new Set();
      for (var l of n)
        l.recUnitInfo.ignoreProductDedup ||
          i.add(l.recUnitInfo.productTeamName);
      var s = [];
      for (var u of e)
        if (!a.has(u.model.promotion.id)) {
          var c = u.recUnitInfo;
          if (
            !(
              !t.ignoreCooldown &&
              !c.ignoreProductLevelCooldown &&
              o("WAWebRecUnitProductCooldownManager").isProductOnCooldown(
                c.productTeamName,
                c.productLevelCooldownSeconds,
              )
            ) &&
            !(
              !t.ignoreDedup &&
              !c.ignoreProductDedup &&
              i.has(c.productTeamName)
            ) &&
            (c.ignoreProductDedup || i.add(c.productTeamName),
            s.push(u),
            n.length + s.length >= r)
          )
            break;
        }
      return s;
    }
    function u(t, n) {
      if (n <= 0) return [];
      var r = [];
      for (var a of t) {
        var i = o("WAWebRecUnitInfoParser").parseRecUnitInfo(
          a.promotion.data.contentAttributes,
        );
        i != null && r.push({ model: a, recUnitInfo: i });
      }
      if (r.length === 0) return [];
      var l = [];
      for (var u of e) {
        var c = s(r, u, l, n);
        if (((l = l.concat(c)), l.length >= n)) break;
      }
      return l.map(function (e) {
        return e.model;
      });
    }
    l.selectCards = u;
  },
  98,
);
