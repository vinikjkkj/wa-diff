__d(
  "WAWebJobUpdateQPSurfaces",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebJobLoadQuickPromotions",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
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
    function d(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = e.tracking,
        s = (n = t.qpConfigPacing) == null ? void 0 : n.userInfo,
        u = c(t),
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
      (d > 0 && (u.dismisses += d),
        m > 0 && (u.primaryClicks += m),
        p > 0 && (u.secondaryClicks += p),
        _ > 0 && (u.impressions += _));
      var f = l.lastDismissTs,
        g = l.lastImpressionTs,
        h = l.lastPrimaryClickTs,
        y = l.lastSecondaryClickTs;
      return (
        g != null && (u.lastImpressionTs = g),
        h != null && (u.lastPrimaryClickTs = h),
        y != null && (u.lastSecondaryClickTs = y),
        f != null && (u.lastDismissTs = f),
        u
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (t.length === 0)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updateQPSurfaces: no surfaces",
                  ])),
              ),
              (u || (u = n("Promise"))).resolve()
            );
          var i = t.map(function (e) {
              return e.id;
            }),
            l = new Set(i);
          if (l.size !== i.length)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateQPSurfaces: found duplicated surface",
                  ])),
              ),
              (u || (u = n("Promise"))).resolve()
            );
          var m = new Map();
          (t.forEach(function (e) {
            o("WAWebCTWAConstants").KNOWN_QP_SURFACES.has(e.id) &&
              e.promotions.forEach(function (t) {
                m.set(t.id, { promotion: t, surfaceId: e.id });
              });
          }),
            yield o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob("updateQPSurfaces", function () {
                return o("WAWebModelStorageUtils")
                  .getStorage()
                  .lock(
                    ["quick-promotions"],
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t = e[0],
                            o = yield t.anyOf(["surfaceId"], i),
                            l = a == null ? void 0 : a.locale,
                            s = o.map(function (e) {
                              var n = e.id,
                                o = m.get(n);
                              if (o == null) return t.remove(n);
                              var a = d(e, o.promotion),
                                i = { data: o.promotion, ts: r, tracking: a };
                              return (
                                l != null && (i.locale = l),
                                m.delete(n),
                                t.merge(n, i)
                              );
                            });
                          yield (u || (u = n("Promise"))).all(s);
                          var p = Array.from(m.values()),
                            _ = p.map(function (e) {
                              var t = e.promotion,
                                n = e.surfaceId,
                                o = {
                                  id: t.id,
                                  surfaceId: n,
                                  data: t,
                                  ts: r,
                                  tracking: c(t),
                                };
                              return (
                                l != null &&
                                  (o = babelHelpers.extends({}, o, {
                                    locale: l,
                                  })),
                                o
                              );
                            });
                          yield t.bulkCreate(_);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  );
              })
              .waitUntilCompleted(),
            yield o("WAWebJobLoadQuickPromotions").loadQuickPromotions(
              "fetch-success",
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return m(e, t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WATimeUtils").unixTime();
          return m(e, n, { locale: t });
        })),
        h.apply(this, arguments)
      );
    }
    ((l.updateQPSurfacesFromNotification = _),
      (l.updateQPSurfacesFromGraphQLFetch = g));
  },
  98,
);
