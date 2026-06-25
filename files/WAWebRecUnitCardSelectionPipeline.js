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
    function s(e) {
      var t = e.alreadySelected,
        n = e.candidates,
        r = e.maxTotal,
        a = e.passIndex,
        i = e.strategy,
        l = "selection.pass" + a,
        s = new Set(
          t.map(function (e) {
            return e.model.promotion.id;
          }),
        ),
        u = new Set();
      for (var c of t)
        c.recUnitInfo.ignoreProductDedup ||
          u.add(c.recUnitInfo.productTeamName);
      var d = [];
      for (var m of n) {
        var p = m.model.promotion.id,
          _ = m.recUnitInfo;
        if (s.has(p)) {
          o("WAWebQuickPromotionDebugLogger").qpLog(
            l + ".skip.already_selected",
            { promotionId: p, productTeamName: _.productTeamName },
          );
          continue;
        }
        if (
          !i.ignoreCooldown &&
          !_.ignoreProductLevelCooldown &&
          o("WAWebRecUnitProductCooldownManager").isProductOnCooldown(
            _.productTeamName,
            _.productLevelCooldownSeconds,
          )
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(l + ".skip.cooldown", {
            promotionId: p,
            productTeamName: _.productTeamName,
            productLevelCooldownSeconds: _.productLevelCooldownSeconds,
          });
          continue;
        }
        if (
          !i.ignoreDedup &&
          !_.ignoreProductDedup &&
          u.has(_.productTeamName)
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(l + ".skip.dedup", {
            promotionId: p,
            productTeamName: _.productTeamName,
          });
          continue;
        }
        if (
          (_.ignoreProductDedup || u.add(_.productTeamName),
          d.push(m),
          o("WAWebQuickPromotionDebugLogger").qpLog(l + ".admitted", {
            promotionId: p,
            productTeamName: _.productTeamName,
            position: t.length + d.length,
          }),
          t.length + d.length >= r)
        ) {
          o("WAWebQuickPromotionDebugLogger").qpLog(l + ".cap_reached", {
            addedThisPass: d.length,
            totalNow: t.length + d.length,
          });
          break;
        }
      }
      return d;
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
          m = s({
            alreadySelected: u,
            candidates: r,
            maxTotal: n,
            passIndex: c + 1,
            strategy: d,
          });
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
