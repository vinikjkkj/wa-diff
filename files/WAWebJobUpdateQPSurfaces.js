__d(
  "WAWebJobUpdateQPSurfaces",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebJobLoadQuickPromotions",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n,
        r,
        o,
        a,
        i = (t = e.qpConfigPacing) == null ? void 0 : t.userInfo;
      return {
        impressions:
          (n = i == null ? void 0 : i.impressionCount) != null ? n : 0,
        primaryClicks:
          (r = i == null ? void 0 : i.primaryClickCount) != null ? r : 0,
        secondaryClicks:
          (o = i == null ? void 0 : i.secondaryClickCount) != null ? o : 0,
        dismisses:
          (a = i == null ? void 0 : i.dismissClickCount) != null ? a : 0,
      };
    }
    function c(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = e.tracking,
        s = (n = t.qpConfigPacing) == null ? void 0 : n.userInfo,
        c = u(t),
        d =
          l.dismisses -
          ((r = s == null ? void 0 : s.dismissClickCount) != null ? r : 0),
        m =
          l.primaryClicks -
          ((o = s == null ? void 0 : s.primaryClickCount) != null ? o : 0),
        p =
          l.secondaryClicks -
          ((a = s == null ? void 0 : s.secondaryClickCount) != null ? a : 0),
        _ =
          l.impressions -
          ((i = s == null ? void 0 : s.impressionCount) != null ? i : 0);
      (d > 0 && (c.dismisses += d),
        m > 0 && (c.primaryClicks += m),
        p > 0 && (c.secondaryClicks += p),
        _ > 0 && (c.impressions += _));
      var f = l.lastDismissTs,
        g = l.lastImpressionTs,
        h = l.lastPrimaryClickTs,
        y = l.lastSecondaryClickTs;
      return (
        g != null && (c.lastImpressionTs = g),
        h != null && (c.lastPrimaryClickTs = h),
        y != null && (c.lastSecondaryClickTs = y),
        f != null && (c.lastDismissTs = f),
        c
      );
    }
    async function d(t, n, r) {
      if (t.length === 0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateQPSurfaces: no surfaces",
              ])),
          ),
          Promise.resolve()
        );
      var a = t.map(function (e) {
          return e.id;
        }),
        i = new Set(a);
      if (i.size !== a.length)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "updateQPSurfaces: found duplicated surface",
              ])),
          ),
          Promise.resolve()
        );
      var l = new Map();
      (t.forEach(function (e) {
        o("WAWebCTWAConstants").KNOWN_QP_SURFACES.has(e.id) &&
          e.promotions.forEach(function (t) {
            l.set(t.id, { promotion: t, surfaceId: e.id });
          });
      }),
        await o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob("updateQPSurfaces", function () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["quick-promotions"], async function (e) {
                var t = e[0],
                  o = await t.anyOf(["surfaceId"], a),
                  i = r == null ? void 0 : r.locale,
                  s = o.map(function (e) {
                    var r = e.id,
                      o = l.get(r);
                    if (o == null) return t.remove(r);
                    var a = c(e, o.promotion),
                      s = { data: o.promotion, ts: n, tracking: a };
                    return (
                      i != null && (s.locale = i),
                      l.delete(r),
                      t.merge(r, s)
                    );
                  });
                await Promise.all(s);
                var d = Array.from(l.values()),
                  m = d.map(function (e) {
                    var t = e.promotion,
                      r = e.surfaceId,
                      o = {
                        id: t.id,
                        surfaceId: r,
                        data: t,
                        ts: n,
                        tracking: u(t),
                      };
                    return (
                      i != null &&
                        (o = babelHelpers.extends({}, o, { locale: i })),
                      o
                    );
                  });
                await t.bulkCreate(m);
              });
          })
          .waitUntilCompleted(),
        await o("WAWebJobLoadQuickPromotions").loadQuickPromotions(
          "fetch-success",
        ));
    }
    async function m(e, t) {
      return d(e, t);
    }
    async function p(e, t) {
      var n = o("WATimeUtils").unixTime();
      return d(e, n, { locale: t });
    }
    ((l.updateQPSurfacesFromNotification = m),
      (l.updateQPSurfacesFromGraphQLFetch = p));
  },
  98,
);
