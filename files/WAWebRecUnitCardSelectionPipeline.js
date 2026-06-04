__d(
  "WAWebRecUnitCardSelectionPipeline",
  [
    "WAWebQuickPromotionDebugLogger",
    "WAWebRecUnitInfoParser",
    "WAWebRecUnitProductCooldownManager",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      { ignoreCooldown: !1, ignoreDedup: !1 },
      { ignoreCooldown: !0, ignoreDedup: !1 },
      { ignoreCooldown: !0, ignoreDedup: !0 },
    ];
    function s(e, t, n, r, a) {
      var i = "selection.pass" + a,
        l = new Set(
          n.map(function (e) {
            return e.model.promotion.id;
          }),
        ),
        s = new Set();
      for (var u of n)
        u.recUnitInfo.ignoreProductDedup ||
          s.add(u.recUnitInfo.productTeamName);
      var c = [];
      for (var d of e) {
        var m = d.model.promotion.id,
          p = d.recUnitInfo;
        if (l.has(m)) {
          o("WAWebQuickPromotionDebugLogger").qpLog(
            i + ".skip.already_selected",
            { promotionId: m, productTeamName: p.productTeamName },
          );
          continue;
        }
        if (
          !t.ignoreCooldown &&
          !p.ignoreProductLevelCooldown &&
          o("WAWebRecUnitProductCooldownManager").isProductOnCooldown(
            p.productTeamName,
            p.productLevelCooldownSeconds,
          )
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(i + ".skip.cooldown", {
            promotionId: m,
            productTeamName: p.productTeamName,
            productLevelCooldownSeconds: p.productLevelCooldownSeconds,
          });
          continue;
        }
        if (
          !t.ignoreDedup &&
          !p.ignoreProductDedup &&
          s.has(p.productTeamName)
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(i + ".skip.dedup", {
            promotionId: m,
            productTeamName: p.productTeamName,
          });
          continue;
        }
        if (
          (p.ignoreProductDedup || s.add(p.productTeamName),
          c.push(d),
          o("WAWebQuickPromotionDebugLogger").qpLog(i + ".admitted", {
            promotionId: m,
            productTeamName: p.productTeamName,
            position: n.length + c.length,
          }),
          n.length + c.length >= r)
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(i + ".cap_reached", {
            addedThisPass: c.length,
            totalNow: n.length + c.length,
          });
          break;
        }
      }
      return c;
    }
    function u(t, n) {
      if (n <= 0) return [];
      var r = [];
      for (var a of t) {
        var i = a.promotion.id,
          l = o("WAWebRecUnitInfoParser").parseRecUnitInfo(
            a.promotion.data.contentAttributes,
          );
        l != null
          ? (o("WAWebQuickPromotionDebugLogger").qpLog(
              "selection.stage1.parse.success",
              {
                promotionId: i,
                productTeamName: l.productTeamName,
                productLevelCooldownSeconds: l.productLevelCooldownSeconds,
                ignoreProductDedup: l.ignoreProductDedup,
                ignoreProductLevelCooldown: l.ignoreProductLevelCooldown,
              },
            ),
            r.push({ model: a, recUnitInfo: l }))
          : o("WAWebQuickPromotionDebugLogger").qpLog(
              "selection.stage1.parse.dropped",
              {
                promotionId: i,
                reason: "missing_or_malformed_wa_smb_biz_home_recunit_info",
              },
            );
      }
      if (r.length === 0)
        return (
          o("WAWebQuickPromotionDebugLogger").qpLog("selection.start.empty", {
            reason: "all_dropped_in_stage1_or_no_eligible_qps",
          }),
          []
        );
      o("WAWebQuickPromotionDebugLogger").qpLog("selection.start", {
        maxCards: n,
        candidateCount: r.length,
        candidates: r.map(function (e) {
          return {
            promotionId: e.model.promotion.id,
            priority: e.model.promotion.data.qpConfigPriority,
            productTeamName: e.recUnitInfo.productTeamName,
          };
        }),
      });
      for (var u = [], c = 0; c < e.length; c++) {
        var d = e[c],
          m = s(r, d, u, n, c + 1);
        if (((u = u.concat(m)), u.length >= n)) break;
      }
      return (
        o("WAWebQuickPromotionDebugLogger").qpLog("selection.final", {
          selectedIds: u.map(function (e) {
            return e.model.promotion.id;
          }),
          finalCount: u.length,
          capReached: u.length >= n,
        }),
        u.map(function (e) {
          return e.model;
        })
      );
    }
    l.selectCards = u;
  },
  98,
);
