__d(
  "AdsTargetingDMAToComscoreMigrationUtils",
  [
    "fbt",
    "$InternalEnum",
    "AdsGeoLocationMetaInfoDataSource",
    "AdsLearnMore.react",
    "AdsTargetingDMAToComscoreMapping",
    "DateTime",
    "LocationConstants",
    "ODS",
    "Promise",
    "Timezone",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = "DMA",
      p = 1782086400,
      _ = function () {
        var e = o("Timezone").getEnvironmentTimezoneID();
        return r("DateTime").create(p, e).format("M d, Y");
      },
      f = n("$InternalEnum").Mirrored(["SOFT", "HARD"]),
      g = function () {
        return r("gkx")("14621");
      },
      h = function () {
        return r("gkx")("15203");
      },
      y = function () {
        return r("gkx")("22015");
      },
      C = function () {
        return r("gkx")("2881");
      },
      b = "709868688063859",
      v = s._(/*BTDS*/ "About Comscore Markets\u00ae"),
      S = function () {
        return d.jsx(r("AdsLearnMore.react"), {
          cmsID: b,
          isStandalone: !1,
          label: v,
        });
      },
      R = s._(
        /*BTDS*/ "Designated Market Areas\u00ae (DMAs) are being replaced with Comscore Markets\u00ae",
      ),
      L = function () {
        return s._(
          /*BTDS*/ "Starting {date}, ad sets using DMAs will stop delivering. Please edit your audience to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("date", _()), s._param("Learn more link", S())],
        );
      };
    function E(e) {
      return s._(
        /*BTDS*/ "To publish {single or bulk}, you need to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
        [
          s._param(
            "single or bulk",
            e ? s._(/*BTDS*/ "these ad sets") : s._(/*BTDS*/ "this ad set"),
          ),
          s._param("Learn more link", S()),
        ],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    var k = s._(
        /*BTDS*/ "Designated Market Areas\u00ae (DMAs) are no longer available",
      ),
      I = function () {
        return s._(
          /*BTDS*/ "DMAs have been replaced with Comscore Markets\u00ae. Please edit your audience to remove any DMAs or replace them with the equivalent Comscore Markets. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      T = function () {
        return s._(
          /*BTDS*/ "Starting {date}, ad sets using DMAs will stop delivering. Please edit this saved audience to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("date", _()), s._param("Learn more link", S())],
        );
      },
      D = function () {
        return s._(
          /*BTDS*/ "This saved audience includes one or more DMAs. To publish your ad set, you need to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      x = function () {
        return s._(
          /*BTDS*/ "This saved audience includes one or more DMAs. Please edit your audience to remove these DMAs or replace them with the equivalent Comscore Markets. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      $ = function () {
        return s._(
          /*BTDS*/ "This saved audience includes one or more DMAs. To use this audience, you need to remove these DMAs or replace them with the equivalent Comscore Markets. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      P = s._(/*BTDS*/ "See affected audiences"),
      N = function () {
        return s._(
          /*BTDS*/ "Starting {date}, ad sets using DMAs will stop delivering. Please edit your saved audiences to remove any DMAs or replace them with the equivalent Comscore Markets. You may see some changes to estimated audience sizes. {Learn more link}",
          [s._param("date", _()), s._param("Learn more link", S())],
        );
      },
      M = function () {
        return s._(
          /*BTDS*/ "Ad sets using DMAs have stopped delivering. Please edit your saved audiences to remove any DMAs or replace them with the equivalent Comscore Markets. You may see some changes to estimated audience sizes. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      w = function () {
        var e = r("DateTime")
          .now(o("Timezone").getEnvironmentTimezoneID())
          .getUnixTimestampSeconds();
        return e > p ? f.HARD : f.SOFT;
      },
      A = function (t) {
        return t == null || typeof t != "string" ? !1 : t.startsWith(m);
      },
      F = function (t, n) {
        var e,
          r,
          o = (e = t == null ? void 0 : t.geo_markets) != null ? e : [],
          a = (r = n == null ? void 0 : n.geo_markets) != null ? r : [],
          i = [].concat(o, a);
        return i.some(function (e) {
          return A(e.key);
        });
      },
      O = function (t) {
        return t == null || t.length === 0
          ? !1
          : t.some(function (e) {
              var t, n;
              return F(
                (t = e.targeting) == null ? void 0 : t.geo_locations,
                (n = e.targeting) == null ? void 0 : n.excluded_geo_locations,
              );
            });
      },
      B = function (t) {
        return !t || t.size === 0
          ? !1
          : t.every(function (e) {
              return !(e.isNew || e.hasDraft);
            });
      },
      W = function () {
        return s._(
          /*BTDS*/ "Please update your ad sets to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("Learn more link", S())],
        );
      },
      q = function () {
        return s._(
          /*BTDS*/ "Starting {date}, ad sets using DMAs will stop delivering. Please update your ad sets to replace any DMAs with the equivalent Comscore markets or remove them. You may see some changes to your estimated audience size. {Learn more link}",
          [s._param("date", _()), s._param("Learn more link", S())],
        );
      },
      U = function (t, n, r, o, a, i, l) {
        return l
          ? i
            ? q()
            : W()
          : i
            ? r
              ? T()
              : L()
            : o
              ? $()
              : t === f.SOFT
                ? n
                  ? r
                    ? T()
                    : L()
                  : r
                    ? D()
                    : E(a)
                : r
                  ? x()
                  : I();
      },
      V = function (t) {
        return t === f.SOFT ? R : k;
      },
      H = function (t, n, r, o, a) {
        var e = h(),
          i = w(),
          l = V(i),
          s = U(i, t, n, r, o, e, a != null ? a : !1),
          u = "error";
        if (e) u = "warning";
        else if (g())
          if (r) u = "error";
          else
            switch (i) {
              case f.SOFT:
                u = t ? "warning" : "error";
                break;
              default:
                u = "error";
                break;
            }
        return { heading: l, content: s, status: u };
      };
    function G(e) {
      return e.startsWith("COMSCORE_MARKET:") ? "COMSCORE_MARKET" : "DMA";
    }
    function z(e) {
      var t = e.replace(/^DMA:/, ""),
        n = r("AdsTargetingDMAToComscoreMapping"),
        o = n[t];
      return o == null ? null : "COMSCORE_MARKET:" + o;
    }
    var j = null;
    function K() {
      if (j == null) {
        var e = r("AdsTargetingDMAToComscoreMapping"),
          t = {};
        for (var n in e) t[e[n]] = n;
        j = t;
      }
      return j;
    }
    function Q(e) {
      var t = e.replace(/^COMSCORE_MARKET:/, ""),
        n = K()[t];
      return n == null ? null : "DMA:" + n;
    }
    function X(e, t) {
      var n,
        r,
        o = (n = e == null ? void 0 : e.geo_markets) != null ? n : [],
        a = (r = t == null ? void 0 : t.geo_markets) != null ? r : [],
        i = new Set();
      for (var l of o) A(l.key) || i.add(l.key);
      var s = new Set();
      for (var u of a) A(u.key) || s.add(u.key);
      for (var c of o)
        if (A(c.key)) {
          var d = z(c.key);
          if (d != null && s.has(d)) return !0;
        }
      for (var m of a)
        if (A(m.key)) {
          var p = z(m.key);
          if (p != null && i.has(p)) return !0;
        }
      return !1;
    }
    function Y(t, r) {
      var a,
        i,
        l,
        s = (a = t == null ? void 0 : t.geo_markets) != null ? a : [],
        c = (i = r == null ? void 0 : r.geo_markets) != null ? i : [],
        d = [],
        m = {},
        p = function (t) {
          for (var e of t)
            if (A(e.key)) {
              var n = z(e.key);
              n != null && ((m[e.key] = n), d.push(n));
            }
        };
      if ((p(s), p(c), d.length === 0))
        return (e || (e = n("Promise"))).resolve({
          includedGeoLocations: t,
          excludedGeoLocations: r,
        });
      var _ = Array.from(new Set(d)),
        f =
          ((l = {}),
          (l[o("LocationConstants").GEO_MARKETS] = _.map(function (e) {
            return { key: e };
          })),
          l);
      return o("AdsGeoLocationMetaInfoDataSource")
        .getMetaInfo(f)
        .then(function (e) {
          var n,
            a =
              (n =
                e == null ? void 0 : e[o("LocationConstants").GEO_MARKETS]) !=
              null
                ? n
                : {},
            i = function (t) {
              var e = [],
                n = new Set(
                  t
                    .filter(function (e) {
                      return !A(e.key);
                    })
                    .map(function (e) {
                      return e.key;
                    }),
                );
              for (var r of t) {
                var i = m[r.key];
                if (i != null) {
                  var l;
                  if (n.has(i)) {
                    (u || (u = o("ODS"))).bumpEntityKey(
                      68,
                      "obc.www.all",
                      "dma_comscore_replace.same_list_dedup",
                    );
                    continue;
                  }
                  n.add(i);
                  var s = a[i];
                  e.push({
                    key: i,
                    name: s == null ? void 0 : s.name,
                    country:
                      (l = s == null ? void 0 : s.country_code) != null
                        ? l
                        : s == null
                          ? void 0
                          : s.country,
                    market_type: "COMSCORE_MARKET",
                  });
                } else
                  (A(r.key) &&
                    (u || (u = o("ODS"))).bumpEntityKey(
                      68,
                      "obc.www.all",
                      "dma_comscore_replace.unmapped_dma",
                    ),
                    e.push(r));
              }
              return e;
            },
            l = i(s),
            d = new Set(
              l.map(function (e) {
                return e.key;
              }),
            ),
            p = i(c),
            _ = p.filter(function (e) {
              return !d.has(e.key);
            }),
            f = p.length - _.length;
          f > 0 &&
            (u || (u = o("ODS"))).bumpEntityKey(
              68,
              "obc.www.all",
              "dma_comscore_replace.cross_list_conflict",
              f,
            );
          var g = babelHelpers.extends({}, t, { geo_markets: l }),
            h = babelHelpers.extends({}, r, { geo_markets: _ });
          return (
            (u || (u = o("ODS"))).bumpEntityKey(
              68,
              "obc.www.all",
              "dma_comscore_replace.success",
            ),
            { includedGeoLocations: g, excludedGeoLocations: h }
          );
        })
        .catch(function (e) {
          throw (
            (u || (u = o("ODS"))).bumpEntityKey(
              68,
              "obc.www.all",
              "dma_comscore_replace.failure",
            ),
            e
          );
        });
    }
    ((l.DeprecationType = f),
      (l.checkDMADeprecationAdvertiserGKEnabled = g),
      (l.checkNonBlockingDMADeprecationAdvertiserGKEnabled = h),
      (l.checkDMAToComscoreReplaceButtonEnabled = y),
      (l.checkDMADeprecationUIEnabled = C),
      (l.DMA_SOFT_DEPRECATION_GUIDANCE_HEADING = R),
      (l.DMA_HARD_DEPRECATION_GUIDANCE_HEADING = k),
      (l.TARGETING_DMA_DEPRECATION_AUIDENCE_MANAGER_GLOBAL_NOTIFICATION_BANNER_BUTTON_LABEL =
        P),
      (l.TARGETING_DMA_DEPRECATION_AUIDENCE_MANAGER_GLOBAL_NOTIFICATION_BANNER_SOFT_DEPRECATION_CONTENT =
        N),
      (l.TARGETING_DMA_DEPRECATION_AUIDENCE_MANAGER_GLOBAL_NOTIFICATION_BANNER_HARD_DEPRECATION_CONTENT =
        M),
      (l.getDMADeprecationType = w),
      (l.isGeoMarketTypeDMA = A),
      (l.containsDMAGeoMarket = F),
      (l.hasAnyDMAGeoMarketInCampaign = O),
      (l.isCampaignStatusPublished = B),
      (l.getDeprecationGuidance = H),
      (l.getMarketType = G),
      (l.convertDMAKeyToComscoreKey = z),
      (l.convertComscoreKeyToDMAKey = Q),
      (l.hasDMAComscoreConflicts = X),
      (l.replaceDMAsWithComscoreMarkets = Y));
  },
  226,
);
