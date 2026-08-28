__d(
  "AdsTargetingSignalReducerUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsCopySource",
    "AdsDetailedTargetingRelaxationUtils",
    "AdsHECAdvantageAudienceUtils",
    "AdsMutators",
    "AdsTargetingAsSignalUtils",
    "AdsTargetingLookalikeAsASignalUtils",
    "AdsTargetingLookalikeUtils",
    "AdsTargetingRelaxationDTEService",
    "AdsTargetingRelaxationFactory",
    "AdsUEditorMessagingDestinationUtils",
    "gkx",
    "mergeCampaignTargetingRelatationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = 0,
        a = o("AdsTargetingAsSignalUtils").isTargetingAsSignalBitSetForType(
          e.targeting_as_signal,
          0,
        );
      t
        ? (r = o("AdsTargetingAsSignalUtils").setTargetingAsSignalBitForType(
            r,
            0,
          ))
        : a &&
          (r = o("AdsTargetingAsSignalUtils").unsetTargetingAsSignalBitForType(
            r,
            0,
          ));
      var i = o("AdsTargetingAsSignalUtils").isTargetingAsSignalBitSetForType(
        e.targeting_as_signal,
        1,
      );
      return (
        n
          ? (r = o("AdsTargetingAsSignalUtils").setTargetingAsSignalBitForType(
              r,
              1,
            ))
          : i &&
            (r = o(
              "AdsTargetingAsSignalUtils",
            ).unsetTargetingAsSignalBitForType(r, 1)),
        r
      );
    }
    function s(t) {
      var n,
        a = t.buyingType,
        i = t.campaign,
        l = t.duplicationSource,
        s = t.enableAutomationForPharmaAdvertiser,
        u = t.objective,
        c = t.optimizationGoal,
        d = t.regulatedCategories,
        m = t.shouldSkipTargetingExpansionDefaultOn,
        p = t.shouldTurnOffLookalikeRelaxation,
        _ = !1;
      (u === o("AdsAPIObjectives").MESSAGES ||
        u === o("AdsAPIObjectives").OUTCOME_ENGAGEMENT) &&
        (_ =
          o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
            i.destination_type,
          ) ||
          i.destination_type === r("AdCampaignDestination").MESSENGER ||
          i.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT);
      var f = o("AdsTargetingLookalikeAsASignalUtils").isCampaignLALaaS(i, d),
        g =
          ((n = i.targeting) == null || (n = n.targeting_automation) == null
            ? void 0
            : n.advantage_audience) === 1,
        h = o("AdsDetailedTargetingRelaxationUtils").getEffectiveObjective(
          i,
          u,
        ),
        y = o(
          "AdsHECAdvantageAudienceUtils",
        ).isCampaignGroupRegulatedAndEligibleForAdvantageAudience(d),
        C = o("AdsTargetingRelaxationFactory").AdsTargetingRelaxationFactory({
          objective: h,
          optimizationGoal: c,
          regulatedCategories: d,
          isAdvantageAudienceSetForCampaign: g,
          originalObjective: u,
        }),
        b = !g && s,
        v = m || (C.isDTE() && C.isDTEDefaultOptedOut());
      (C instanceof r("AdsTargetingRelaxationDTEService") && m && (v = !1),
        (v = v || b));
      var S = C.isDTaaS(),
        R = o(
          "AdsTargetingLookalikeAsASignalUtils",
        ).isCampaignLALaaSForTargetingSignalAction(h, d, c),
        L = e(i, S, R),
        E = a === r("AdsBuyingTypes").RESERVED;
      (E || b) && (L = 0);
      var k =
          f &&
          !o("AdsTargetingAsSignalUtils").isTargetingAsSignalBitSetForType(
            L,
            1,
          ),
        I = o("AdsTargetingLookalikeUtils").campaignHasLookalikeAudiences(i);
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting_as_signal.set(L),
        function (e) {
          var t;
          if (e.saved_audience_id != null) return e;
          if (S || C.getMessageTypeToShow() === "unsupported") {
            var n;
            return (n = r("AdsCampaignRecordAccessors").targeting) == null ||
              (n = n.targeting_optimization) == null
              ? void 0
              : n.delete(e);
          } else {
            if (
              (o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(d) &&
                !y) ||
              E
            )
              return r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_optimization.set("none", e);
            if (
              C.isDTEDefaultOptedOut() &&
              l === r("AdsCopySource").UPGRADE_DUPLICATE
            )
              return e;
            if (
              C.isDTEDefaultOptedOut() &&
              (l === r("AdsCopySource").COPY_ACTION_REDUCER ||
                l === r("AdsCopySource").QUICK_DUPLICATE_ACTION_REDUCER ||
                l === r("AdsCopySource").UPGRADE_PACKAGE_DUPLICATE) &&
              !R &&
              ((t = r("AdsCampaignRecordAccessors").targeting
                .targeting_optimization) == null
                ? void 0
                : t.get(e)) === "expansion_all"
            )
              return e;
            if (!_ && C.isDTEDefaultOptedOut() && !g)
              return r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_optimization.set("none", e);
          }
          return v && !g
            ? e
            : r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_optimization.set("expansion_all", e);
        },
        function (e) {
          var t, n;
          if (e.saved_audience_id != null) return e;
          var a =
              (t = r("AdsCampaignRecordAccessors").targeting) == null ||
              (t = t.targeting_relaxation_types) == null
                ? void 0
                : t.get(e),
            i =
              (a == null || (n = a.toJS()) == null ? void 0 : n.lookalike) ===
              1,
            s = p || b;
          if (
            i &&
            ((R && l === r("AdsCopySource").UPGRADE_DUPLICATE) || (!R && s))
          ) {
            var u;
            return (u = r("AdsCampaignRecordAccessors").targeting) == null ||
              (u = u.targeting_relaxation_types) == null ||
              (u = u.lookalike) == null
              ? void 0
              : u.set(0, e);
          }
          if (R || s) {
            var c;
            return (c = r("AdsCampaignRecordAccessors").targeting) == null ||
              (c = c.targeting_relaxation_types) == null ||
              (c = c.lookalike) == null
              ? void 0
              : c.delete(e);
          }
          var m = !r("gkx")("21293"),
            _ =
              o(
                "AdsTargetingLookalikeAsASignalUtils",
              ).isMidFunnelLaLaaSOptOutGKEnabled() &&
              m &&
              k &&
              I &&
              !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(d) &&
              !E;
          if (_) {
            var f, g, h;
            return r("mergeCampaignTargetingRelatationTypes")(
              e,
              ((h = {}),
              (h.lookalike = 1),
              (h.custom_audience =
                (f =
                  (g = e.targeting.targeting_relaxation_types) == null
                    ? void 0
                    : g.custom_audience) != null
                  ? f
                  : 0),
              h),
            );
          }
          return e;
        },
      )(i);
    }
    l.setTargetingSignal = s;
  },
  98,
);
