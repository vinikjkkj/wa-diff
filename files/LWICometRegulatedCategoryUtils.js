__d(
  "LWICometRegulatedCategoryUtils",
  [
    "fbt",
    "ix",
    "CometRelay",
    "FBLogger",
    "LWICometDefaultTargetingSpec",
    "LWICometRegulatedCategoryConstantMap",
    "LWICometRegulatedCategoryUtilsAustraliaFinservQuery.graphql",
    "LWICometRegulatedCategoryUtilsDSAQuery.graphql",
    "LWICometRegulatedCategoryUtilsIndiaFinservQuery.graphql",
    "LWICometRegulatedCategoryUtilsSingaporeUniversalQuery.graphql",
    "LWICometRegulatedCategoryUtilsTaiwanFinservQuery.graphql",
    "LWICometRegulatedCategoryUtilsTuningQuery.graphql",
    "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery.graphql",
    "LWICometRegulatedCategoryUtils_options.graphql",
    "areEqual",
    "fbicon",
    "jsonParseSafe",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = [],
      C = [],
      b = "ISSUES_ELECTIONS_POLITICS",
      v = 65,
      S = 18,
      R = 0,
      L = o("fbicon")._(u("506962"), 12),
      E = new Set([
        "CREDIT",
        "EDUCATION",
        "EMPLOYMENT",
        "HOUSING",
        "FINANCIAL_PRODUCTS_SERVICES",
      ]),
      k = {
        isMaxAgeFixed: !0,
        isMinAgeFixed: !0,
        maxAgeRange: new Set([v]),
        maxTargetingAge: v,
        minAgeRange: new Set([S]),
        minTargetingAge: S,
      },
      I = { isGenderFixed: !0 },
      T = {
        CITY: {
          kilometer: { defaultVal: 25, max: 80, min: 25 },
          mile: { defaultVal: 15, max: 50, min: 15 },
        },
        CUSTOM_LOCATION: {
          kilometer: { defaultVal: 25, max: 80, min: 25 },
          mile: { defaultVal: 15, max: 50, min: 15 },
        },
        PLACE: {
          kilometer: { defaultVal: 24, max: 80, min: 25 },
          mile: { defaultVal: 15, max: 50, min: 15 },
        },
      },
      D =
        e !== void 0
          ? e
          : (e = n("LWICometRegulatedCategoryUtils_options.graphql")),
      x =
        c !== void 0
          ? c
          : (c = n("LWICometRegulatedCategoryUtilsDSAQuery.graphql")),
      $ =
        d !== void 0
          ? d
          : (d = n("LWICometRegulatedCategoryUtilsTaiwanFinservQuery.graphql")),
      P =
        m !== void 0
          ? m
          : (m = n(
              "LWICometRegulatedCategoryUtilsAustraliaFinservQuery.graphql",
            )),
      N =
        p !== void 0
          ? p
          : (p = n("LWICometRegulatedCategoryUtilsIndiaFinservQuery.graphql")),
      M =
        _ !== void 0
          ? _
          : (_ = n(
              "LWICometRegulatedCategoryUtilsSingaporeUniversalQuery.graphql",
            ));
    function w(e) {
      switch (e) {
        case "CREDIT":
          return s._(/*BTDS*/ "Credit");
        case "EMPLOYMENT":
          return s._(/*BTDS*/ "Employment");
        case "HOUSING":
          return s._(/*BTDS*/ "Housing");
        case "NONE":
          return s._(/*BTDS*/ "No category selected");
        default:
          return null;
      }
    }
    function A(e, t, a, i, l) {
      var s = o("CometRelay").readInlineData(D, l),
        u = s.regulated_category_audience,
        c = JSON.stringify(t.targetSpec);
      return o("CometRelay")
        .fetchQuery(
          a,
          f !== void 0
            ? f
            : (f = n("LWICometRegulatedCategoryUtilsTuningQuery.graphql")),
          {
            legacyAccount: e,
            regulatedCategory: i,
            targetSpec: c,
            tuningOptions: { clear_custom_audiences: !0 },
          },
        )
        .toPromise()
        .then(function (e) {
          var n,
            a,
            i,
            l,
            s =
              e == null ||
              (n = e.hec) == null ||
              (n = n.tune_target_spec_for_category) == null
                ? void 0
                : n.target_spec_string;
          if (s == null)
            return (
              r("FBLogger")("pages_lwi").mustfix(
                "Encountered unexpected null sanitized targetSpec",
              ),
              null
            );
          var c =
              (a = u == null ? void 0 : u.audience_key) != null
                ? a
                : "HEC_AUDIENCE",
            d =
              (i = u == null ? void 0 : u.audience_option) != null
                ? i
                : "HEC_AUDIENCE",
            m = (l = u == null ? void 0 : u.name) != null ? l : "";
          return {
            audienceID: c,
            audienceOption: d,
            clientEditable: t.audienceOption !== "PRIVACY_GATING_AUDIENCE",
            name: m,
            subjectToAustraliaFinServ: !!(
              u != null && u.subject_to_australia_finserv
            ),
            subjectToDSA: !!(u != null && u.subject_to_dsa),
            subjectToIndiaFinServ: !!(u != null && u.subject_to_india_finserv),
            subjectToSaveRegulation: !!(
              u != null && u.subject_to_save_regulation
            ),
            subjectToSingaporeUniversal: !!(
              u != null && u.subject_to_singapore_universal
            ),
            subjectToSingaporeUniversalEnforcementPhase: !!(
              u != null && u.subject_to_singapore_universal_enforcement_phase
            ),
            subjectToTaiwanFinServ: !!(
              u != null && u.subject_to_taiwan_finserv
            ),
            targetSpec: r("jsonParseSafe")(
              s,
              o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC,
            ),
          };
        });
    }
    function F(e, t, a, i, l, s) {
      var u = o("CometRelay").readInlineData(D, l),
        c = u.regulated_category_audience,
        d = JSON.stringify(t.targetSpec);
      return o("CometRelay")
        .fetchQuery(
          a,
          g !== void 0
            ? g
            : (g = n(
                "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery.graphql",
              )),
          {
            legacyAccount: e,
            regulatedCategories: i,
            specialAdCategoryCountries: s,
            targetSpec: d,
            tuningOptions: { clear_custom_audiences: !0 },
          },
        )
        .toPromise()
        .then(function (e) {
          var n,
            a,
            i,
            l,
            s =
              e == null ||
              (n = e.hec) == null ||
              (n = n.tune_target_spec_for_categories) == null
                ? void 0
                : n.target_spec_string;
          if (s == null)
            return (
              r("FBLogger")("pages_lwi").mustfix(
                "Encountered unexpected null sanitized targetSpec",
              ),
              null
            );
          var u =
              (a = c == null ? void 0 : c.audience_key) != null
                ? a
                : "HEC_AUDIENCE",
            d =
              (i = c == null ? void 0 : c.audience_option) != null
                ? i
                : "HEC_AUDIENCE",
            m = (l = c == null ? void 0 : c.name) != null ? l : "";
          return {
            audienceID: u,
            audienceOption: d,
            clientEditable: t.audienceOption !== "PRIVACY_GATING_AUDIENCE",
            name: m,
            subjectToAustraliaFinServ: !!(
              c != null && c.subject_to_australia_finserv
            ),
            subjectToDSA: !!(c != null && c.subject_to_dsa),
            subjectToIndiaFinServ: !!(c != null && c.subject_to_india_finserv),
            subjectToSaveRegulation: !!(
              c != null && c.subject_to_save_regulation
            ),
            subjectToSingaporeUniversal: !!(
              c != null && c.subject_to_singapore_universal
            ),
            subjectToSingaporeUniversalEnforcementPhase: !!(
              c != null && c.subject_to_singapore_universal_enforcement_phase
            ),
            subjectToTaiwanFinServ: !!(
              c != null && c.subject_to_taiwan_finserv
            ),
            targetSpec: r("jsonParseSafe")(
              s,
              o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC,
            ),
          };
        });
    }
    function O(e, t, n) {
      return o("CometRelay")
        .fetchQuery(t, x, { adAccountID: e, targetSpecString: n })
        .toPromise()
        .then(function (e) {
          var t;
          return e == null || (t = e.lwi) == null
            ? void 0
            : t.target_spec_subject_to_dsa;
        });
    }
    function B(e, t, n) {
      return o("CometRelay")
        .fetchQuery(t, $, { adAccountID: e, targetSpecString: n })
        .toPromise()
        .then(function (e) {
          var t;
          return e == null || (t = e.lwi) == null
            ? void 0
            : t.target_spec_subject_to_taiwan_finserv;
        });
    }
    function W(e, t, n) {
      return o("CometRelay")
        .fetchQuery(t, P, { adAccountID: e, targetSpecString: n })
        .toPromise()
        .then(function (e) {
          var t;
          return e == null || (t = e.lwi) == null
            ? void 0
            : t.target_spec_subject_to_australia_finserv;
        });
    }
    function q(e, t, n) {
      return o("CometRelay")
        .fetchQuery(t, N, { adAccountID: e, targetSpecString: n })
        .toPromise()
        .then(function (e) {
          var t;
          return e == null || (t = e.lwi) == null
            ? void 0
            : t.target_spec_subject_to_india_finserv;
        });
    }
    function U(e, t, n) {
      return o("CometRelay")
        .fetchQuery(t, M, { adAccountID: e, targetSpecString: n })
        .toPromise()
        .then(function (e) {
          var t;
          return e == null || (t = e.lwi) == null
            ? void 0
            : t.target_spec_subject_to_singapore_universal;
        });
    }
    function V(e) {
      return e.filter(function (e) {
        return E.has(e);
      });
    }
    function H(e) {
      return V(e).length !== 0;
    }
    function G(e, t) {
      var n = V(e),
        o = V(t);
      return (h || (h = r("areEqual")))(n, o)
        ? "NONE"
        : o.length === 0
          ? "RESET_AUDIENCE"
          : n.length === 0
            ? "SANITIZE_AUDIENCE_AND_SAVE_PREVIOUS_AUDIENCE_DATA"
            : "SANITIZE_AUDIENCE";
    }
    function z(e) {
      var t = e.length;
      switch (t) {
        case 0:
          return s._(/*BTDS*/ "Select a category");
        case 1:
          return o("LWICometRegulatedCategoryConstantMap")
            .ADS_REGULATED_CATEGORY_CONSTANT_MAP[e[0]].name;
        default:
          return s._(
            /*BTDS*/ '_j{"*":"{number} options selected","_1":"1 option selected"}',
            [s._plural(t, "number")],
          );
      }
    }
    ((l.EMPTY_REGULATED_CATEGORIES = y),
      (l.EMPTY_SPECIAL_AD_CATEGORY_COUNTRIES = C),
      (l.ISSUES_ELECTIONS_POLITICS_CATEGORY = b),
      (l.REGULATED_CATEGORY_GENDER_OPTION = R),
      (l.REGULATED_CATEGORY_ICON = L),
      (l.REGULATED_CATEGORY_AGE_CONFIG = k),
      (l.REGULATED_CATEGORY_GENDER_CONFIG = I),
      (l.REGULATED_CATEGORY_RADIUS_CONFIG_MAP = T),
      (l.getNameFromRegulatedCategory = w),
      (l.genAsyncSanitizedTargetSpec = A),
      (l.genAsyncSanitizedTargetSpecForRegulatedCategories = F),
      (l.refetchDSAInfo = O),
      (l.refetchTaiwanFinservInfo = B),
      (l.refetchAustraliaFinservInfo = W),
      (l.refetchIndiaFinservInfo = q),
      (l.refetchSingaporeUniversalInfo = U),
      (l.getRestrictedCategories = V),
      (l.hasRestrictedRegulatedCategories = H),
      (l.getActionAfterUpdateRegulatedCategories = G),
      (l.getRegulatedCategoriesSelectedLabel = z));
  },
  226,
);
