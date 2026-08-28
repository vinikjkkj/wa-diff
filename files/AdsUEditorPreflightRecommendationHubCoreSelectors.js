__d(
  "AdsUEditorPreflightRecommendationHubCoreSelectors",
  [
    "invariant",
    "AdsBuyingTypes",
    "AdsObjectTypeUtils",
    "AdsPECrepeEditorStructureTypes",
    "AdsSelectionLevelSelectors",
    "AdsUEditorPreflightRecommendationHubLargeCampaignChannelGatingUtils",
    "AdsUEditorPreflightRecommendationHubMaxAdObjectSize",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsPECrepeEditorStepsSelector",
    "computeIsInEditing",
    "gkx",
    "isMessageMarketingPackage",
    "selectedAdObjectIDsDynamicSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(e);
    }
    var u = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.buying_type;
        }),
        null,
      ),
      c = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          return e.objective;
        }),
      ),
      d = r("adsCreateSelector")(
        [
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
          r("selectedAdObjectIDsDynamicSelector"),
        ],
        function (n, r) {
          var t = e(n);
          return r(t);
        },
        { name: i.id + ".selectedAdObjectIDSelector" },
      );
    function m(e) {
      var t = e.children,
        n = [];
      return (
        t == null ||
          t.forEach(function (e) {
            e.children.forEach(function (e) {
              return n.push(e);
            });
          }),
        {
          selectedCampaignGroup: [e],
          selectedCampaigns: t,
          selectedAdgroups: n,
        }
      );
    }
    function p(e) {
      return (
        e.status == null ||
        ![
          "PAUSED",
          "AD_PAUSED",
          "ADSET_PAUSED",
          "CAMPAIGN_PAUSED",
          "ARCHIVED",
          "ARCHIVED_IN_DRAFT",
          "DELETED",
          "DISAPPROVED",
        ].includes(e.status)
      );
    }
    function _(e) {
      return e == null ? { outcome: "ineligible", reason: "bulk_edit" } : null;
    }
    function f(e, t) {
      return (
        t === void 0 && (t = !1),
        e && !t
          ? { outcome: "ineligible", reason: "regulated_category" }
          : r("gkx")("21293") && !r("gkx")("1943")
            ? { outcome: "ineligible", reason: "pharma_advertiser" }
            : null
      );
    }
    function g(e) {
      return e ===
        o("AdsPECrepeEditorStructureTypes").EditorAppearance.UNMERGED ||
        e == null
        ? null
        : { outcome: "ineligible", reason: "merged_ad_objects" };
    }
    function h(e) {
      var t,
        n = p(e) ? e : null,
        o = ((t = n == null ? void 0 : n.children) != null ? t : []).filter(p),
        a = o
          .flatMap(function (e) {
            return e.children;
          })
          .filter(p);
      return (
        r("gkx")("147") ||
          ((o = o.sort(function (e, t) {
            return e.id < t.id ? -1 : 1;
          })),
          (a = a.sort(function (e, t) {
            return e.id < t.id ? -1 : 1;
          }))),
        { activeCampaigns: o, activeAdgroups: a }
      );
    }
    function y(e, t, n) {
      n === void 0 && (n = !1);
      var r = e + t;
      if (
        r <=
        o("AdsUEditorPreflightRecommendationHubMaxAdObjectSize")
          .MAX_AD_OBJECT_SIZE
      )
        return !1;
      var a =
          n &&
          o(
            "AdsUEditorPreflightRecommendationHubLargeCampaignChannelGatingUtils",
          ).isPassingAdsPFRLCCFullyOptimizedQE(!0)
            ? o("AdsUEditorPreflightRecommendationHubMaxAdObjectSize")
                .MAX_AD_OBJECT_SIZE_FOR_LARGE_CAMPAIGN
            : o("AdsUEditorPreflightRecommendationHubMaxAdObjectSize")
                .MAX_AD_OBJECT_SIZE,
        i =
          r >
            o("AdsUEditorPreflightRecommendationHubMaxAdObjectSize")
              .MAX_AD_OBJECT_SIZE &&
          r <=
            o("AdsUEditorPreflightRecommendationHubMaxAdObjectSize")
              .MAX_AD_OBJECT_SIZE_FOR_LARGE_CAMPAIGN;
      return (
        i &&
          n &&
          o(
            "AdsUEditorPreflightRecommendationHubLargeCampaignChannelGatingUtils",
          ).isPassingAdsPFRLCCFullyOptimizedQE(),
        r > a
      );
    }
    function C(e, t, n, o) {
      return (
        o === void 0 && (o = !1),
        e && !y(t.length, n.length, o) && r("gkx")("16728")
      );
    }
    function b(e, t, n, o, a) {
      var i = e,
        l = t,
        s = a;
      return (
        r("gkx")("147") ||
          ((i = [].concat(i).sort(function (e, t) {
            return e.id < t.id ? -1 : 1;
          })),
          (l = [].concat(l).sort(function (e, t) {
            return e.id < t.id ? -1 : 1;
          }))),
        C(a, n, o) && ((i = n), (l = o), (s = !1)),
        {
          selectedCampaigns: i,
          selectedAdgroups: l,
          hasExceededMaxAdObjectSize: s,
        }
      );
    }
    var v = {
      shouldShowPFRHub: !1,
      selectedCampaignGroupID: null,
      selectedCampaignGroup: [],
      selectedCampaigns: [],
      selectedAdgroups: [],
      isInEditing: !1,
      editorAppearance: null,
      packageConfigID: null,
    };
    function S(e, t, n, a, i, l, s) {
      if ((i === void 0 && (i = !1), l === void 0 && (l = !1), l))
        return { outcome: "ineligible", reason: "ctv_campaign" };
      if (t === r("AdsBuyingTypes").RESERVED)
        return { outcome: "ineligible", reason: "reserved_buying_type" };
      if (r("isMessageMarketingPackage")(n))
        return { outcome: "ineligible", reason: "marketing_messages" };
      var u = o(
          "adsPECrepeEditorStepsSelector",
        ).getEditorAppearanceFromEditorSteps(a),
        c = g(u);
      if (c != null) return c;
      var d = _(s);
      if (d != null) return d;
      var m = f(e, i);
      return m != null ? m : null;
    }
    function R(e, t, n, a, i, l, u, c, d) {
      var m;
      (u === void 0 && (u = !1),
        c === void 0 && (c = !1),
        d === void 0 && (d = !1));
      var p = n.at(0),
        _ = p == null ? void 0 : p.packageConfigID,
        f = S(a, i, _, t, c, d, p);
      if (f != null)
        return babelHelpers.extends({}, v, { eligibilityResult: f });
      p != null || s(0, 136892);
      var g = o(
          "adsPECrepeEditorStepsSelector",
        ).getEditorAppearanceFromEditorSteps(t),
        C = p.children,
        R = [];
      C == null ||
        C.forEach(function (e) {
          e.children.forEach(function (e) {
            return R.push(e);
          });
        });
      var L = h(p),
        E = L.activeAdgroups,
        k = L.activeCampaigns,
        I = p.id,
        T = r("computeIsInEditing")(n),
        D = (m = C == null ? void 0 : C.length) != null ? m : 0,
        x = R.length,
        $ = y(D, x, T),
        P = b(C, R, k, E, $),
        N = P.hasExceededMaxAdObjectSize,
        M = P.selectedAdgroups,
        w = P.selectedCampaigns,
        A =
          w.length === 0
            ? "no_campaigns"
            : M.length === 0
              ? "no_adgroups"
              : N
                ? "ad_object_count"
                : null;
      return A != null
        ? babelHelpers.extends({}, v, {
            isInEditing: T,
            eligibilityResult: { outcome: "ineligible", reason: A },
          })
        : {
            shouldShowPFRHub: !0,
            selectedCampaignGroupID: I,
            selectedCampaignGroup: [p],
            selectedCampaigns: w,
            selectedAdgroups: M,
            isInEditing: T,
            editorAppearance: g,
            packageConfigID: _,
            eligibilityResult: {
              outcome: "eligible",
              campaigns: D,
              adgroups: x,
              activeCampaigns: k.length,
              activeAdgroups: E.length,
            },
          };
    }
    ((l.selectedAdObjectIDHelper = e),
      (l.buyingTypeSelector = u),
      (l.objectiveSelector = c),
      (l.selectedAdObjectIDSelector = d),
      (l.getTreeByLevelState = m),
      (l.isAdObjectActive = p),
      (l.checkBulkEditEligibility = _),
      (l.checkBasicValidations = f),
      (l.checkEditorAppearanceEligibility = g),
      (l.getActiveAdObjects = h),
      (l.checkIfExceededMaxAdObjectSize = y),
      (l.shouldUseActiveObjectsOnly = C),
      (l.buildTreeByLevel = b),
      (l.DEFAULT = v),
      (l.getPFRHubState = R));
  },
  98,
);
