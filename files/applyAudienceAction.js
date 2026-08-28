__d(
  "applyAudienceAction",
  [
    "AdsAccountStore",
    "AdsMgmtDrawerActions",
    "AdsPerfInteractionsController",
    "AdsToggleSource",
    "AdsUEditorCampaignAutoScrollKey",
    "AdsUEditorCampaignSetTargetingSpecAction",
    "AdsUEditorHostIDs",
    "MAIBACopilotGatingUtil",
    "MAIBACreationStepsSection",
    "MAIBASectionHighlightDataAction",
    "MAIBAToolSignalReactivity",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "immutable",
    "targetingBulkSpecTransformSpecToAdsBulkValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3,
      s = { 1: [1], 2: [2], female: [2], male: [1], men: [1], women: [2] },
      u = new Set(["", "unknown"]);
    function c(e) {
      return e == null ? !1 : !u.has(e.toLowerCase().trim());
    }
    function d(e) {
      if (!c(e) || e == null) return null;
      var t = s[e.toLowerCase().trim()];
      return t != null && t.length > 0 ? t[0] : null;
    }
    function m(e) {
      if (e == null || e === "") return [];
      try {
        var t = JSON.parse(e);
        return Array.isArray(t) ? t : [];
      } catch (e) {
        return [];
      }
    }
    function p(e, t, n) {
      var o = babelHelpers.extends({}, t);
      if ((t == null ? void 0 : t.geo_locations) == null) {
        var a = r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(
          n,
        );
        o.geo_locations = {
          countries: [a],
          location_types: ["home", "recent"],
        };
      }
      var i =
          e.age_min != null && e.age_min !== ""
            ? parseInt(e.age_min, 10)
            : null,
        l =
          e.age_max != null && e.age_max !== ""
            ? parseInt(e.age_max, 10)
            : null;
      if (i != null || l != null) {
        var u,
          d,
          m = t == null ? void 0 : t.age_range,
          p =
            (u = i != null ? i : t == null ? void 0 : t.age_min) != null
              ? u
              : m == null
                ? void 0
                : m[0],
          _ =
            (d = l != null ? l : t == null ? void 0 : t.age_max) != null
              ? d
              : m == null
                ? void 0
                : m[1];
        ((o.age_min = p), (o.age_max = _), (o.age_range = [p, _]));
      }
      var f = e.gender;
      if (f != null && c(f)) {
        var g = s[f.toLowerCase().trim()];
        g != null && (o.genders = [].concat(g));
      }
      if (e.interests != null && e.interests.length > 0) {
        var h,
          y = (h = t == null ? void 0 : t.flexible_spec) != null ? h : [],
          C = y.filter(function (e) {
            return e.interests == null;
          });
        o.flexible_spec = [].concat(C, [{ interests: e.interests }]);
      }
      return o;
    }
    function _(e, t, n, r) {
      var o,
        a = {
          ad_object_ids: e.ad_object_ids,
          age_max: e.age_max,
          age_min: e.age_min,
          gender: e.gender,
          interests: (o = e.interests) != null ? o : [],
        };
      t(
        {
          entrypointContext: {
            additional_info: "[System: ApplyAudience] " + JSON.stringify(a),
          },
          externalConversationId: n,
          isSentFromOutOfChat: !1,
          message: "Adopting suggested audience",
          originComponent: "applyAudienceAction",
        },
        r,
      );
    }
    function f(t, n, a, l, s) {
      var u = t.ad_object_ids;
      if (u.length !== 0) {
        if (
          (o("AdsMgmtDrawerActions").openTarget(
            "EDITOR_DRAWER",
            u,
            "ad_set",
            r("AdsToggleSource").maiba_cta,
            !1,
            r("immutable").List([
              r("AdsUEditorCampaignAutoScrollKey")
                .CAMPAIGN_TARGETING_SECTION_COMPONENT,
            ]),
          ),
          o("MAIBACopilotGatingUtil").isEntrypointExpansionEnabled()
            ? (o("MAIBAToolSignalReactivity").startOptimisticSectionShimmer(
                r("MAIBACreationStepsSection").AUDIENCE,
              ),
              r("AdsPerfInteractionsController").startInteraction(
                "am.maiba.actionability",
                i.id,
              ),
              r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
                "am.maiba.actionability",
                { section: "audience" },
              ))
            : r("MAIBASectionHighlightDataAction").dispatch(
                { sectionTypes: [r("MAIBACreationStepsSection").AUDIENCE] },
                {
                  line: "238",
                  module: "applyAudienceAction.web.js",
                  moduleID: i.id,
                },
              ),
          o("MAIBACopilotGatingUtil").isEntrypointExpansionEnabled() &&
            l != null)
        ) {
          _(t, a, l, s);
          return;
        }
        window.setTimeout(function () {
          var e = r("AdsAccountStore").getSelectedAccount().getValue(),
            o = n(u[0], { targeting: null }).getValue(),
            a = p(
              t,
              o == null ? void 0 : o.targeting,
              e == null ? void 0 : e.business_country_code,
            );
          if (Object.keys(a).length > 0) {
            var l = r("targetingBulkSpecTransformSpecToAdsBulkValue")(a);
            r("AdsUEditorCampaignSetTargetingSpecAction").dispatch(
              {
                campaignIDs: u,
                hostID: r("AdsUEditorHostIDs").EDITING,
                targetingBulkSpec: l,
              },
              {
                line: "273",
                module: "applyAudienceAction.web.js",
                moduleID: i.id,
              },
            );
          }
          s == null || s();
        }, e);
      }
    }
    ((l.isGenderSpecified = c),
      (l.getNormalizedGenderId = d),
      (l.parseInterests = m),
      (l.applyAudienceAction = f));
  },
  98,
);
