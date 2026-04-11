__d(
  "useLWISAFRData",
  [
    "CometRelay",
    "LWICometRadiusUtils",
    "LWICometRegulatedCategoryUtils",
    "LWICometSAFRUtils",
    "LWICometTargetingModalConstraints",
    "react",
    "react-compiler-runtime",
    "useLWISAFRData_safrPolicy.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo;
    function c(t, r, a) {
      var i,
        l,
        s,
        u,
        c,
        _,
        f,
        g = o("react-compiler-runtime").c(32),
        h = o("CometRelay").useFragment(
          e !== void 0 ? e : (e = n("useLWISAFRData_safrPolicy.graphql")),
          t,
        ),
        y = h.restrictions,
        C;
      g[0] !== r || g[1] !== a
        ? ((C =
            !a &&
            o(
              "LWICometRegulatedCategoryUtils",
            ).hasRestrictedRegulatedCategories(r)),
          (g[0] = r),
          (g[1] = a),
          (g[2] = C))
        : (C = g[2]);
      var b = C,
        v = b
          ? o("LWICometRegulatedCategoryUtils").REGULATED_CATEGORY_AGE_CONFIG
          : o("LWICometTargetingModalConstraints").DEFAULT_AGE_CONFIG,
        S;
      g[3] !== y || g[4] !== v
        ? ((S = o("LWICometSAFRUtils").getAgeConfig(v, y)),
          (g[3] = y),
          (g[4] = v),
          (g[5] = S))
        : (S = g[5]);
      var R = S,
        L = b
          ? o("LWICometRegulatedCategoryUtils").REGULATED_CATEGORY_GENDER_CONFIG
          : o("LWICometTargetingModalConstraints").DEFAULT_GENDER_CONFIG,
        E;
      g[6] !== y || g[7] !== L
        ? ((E = o("LWICometSAFRUtils").getGenderConfig(L, y)),
          (g[6] = y),
          (g[7] = L),
          (g[8] = E))
        : (E = g[8]);
      var k = E,
        I;
      g[9] !== y || g[10] !== b
        ? ((I = o("LWICometSAFRUtils").getRadiusConfig(
            b
              ? o("LWICometRegulatedCategoryUtils")
                  .REGULATED_CATEGORY_RADIUS_CONFIG_MAP
              : o("LWICometRadiusUtils").getRadiusConfigMap(),
            y,
          )),
          (g[9] = y),
          (g[10] = b),
          (g[11] = I))
        : (I = g[11]);
      var T = I,
        D = (i = y.objective) == null ? void 0 : i.objective_blacklist;
      (l = y.placements) == null || l.platform_blacklist;
      var x = (s = y.placements) == null ? void 0 : s.platform_blacklist,
        $;
      g[12] !== x
        ? (($ = x && x.filter(p)), (g[12] = x), (g[13] = $))
        : ($ = g[13]);
      var P = $,
        N;
      if (g[14] !== ((u = y.format) == null ? void 0 : u.format_blacklist)) {
        var M;
        ((N = function () {
          var e,
            t = (e = y.format) == null ? void 0 : e.format_blacklist;
          return t != null ? t.some(m) : !1;
        }),
          (g[14] = (M = y.format) == null ? void 0 : M.format_blacklist),
          (g[15] = N));
      } else N = g[15];
      (c = y.format) == null || c.format_blacklist;
      var w = N();
      (_ = y.conversion) == null || _.promoted_object_blacklist;
      var A = (f = y.conversion) == null ? void 0 : f.promoted_object_blacklist,
        F;
      g[16] !== A
        ? ((F = A != null ? A.some(d) : !1), (g[16] = A), (g[17] = F))
        : (F = g[17]);
      var O = F,
        B;
      g[18] !== D
        ? ((B = D && new Set(D)), (g[18] = D), (g[19] = B))
        : (B = g[19]);
      var W;
      g[20] !== P
        ? ((W = P && new Set(P)), (g[20] = P), (g[21] = W))
        : (W = g[21]);
      var q;
      g[22] !== R || g[23] !== k || g[24] !== T
        ? ((q = { ageConfig: R, genderConfig: k, radiusConfig: T }),
          (g[22] = R),
          (g[23] = k),
          (g[24] = T),
          (g[25] = q))
        : (q = g[25]);
      var U;
      return (
        g[26] !== w || g[27] !== O || g[28] !== W || g[29] !== q || g[30] !== B
          ? ((U = {
              disableCarousel: w,
              disablePixel: O,
              objectiveBlocklistConfig: B,
              placementBlocklistConfig: W,
              targetingConfig: q,
            }),
            (g[26] = w),
            (g[27] = O),
            (g[28] = W),
            (g[29] = q),
            (g[30] = B),
            (g[31] = U))
          : (U = g[31]),
        U
      );
    }
    function d(e) {
      return e === "PIXEL";
    }
    function m(e) {
      return o("LWICometSAFRUtils").AD_FORMAT_CAROUSEL_RESTRICTION_MAP.has(e);
    }
    function p(e) {
      return e !== "FACEBOOK";
    }
    l.default = c;
  },
  98,
);
