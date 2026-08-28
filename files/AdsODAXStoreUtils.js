__d(
  "AdsODAXStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsBusinessWhatsAppBusinessAccountProvider",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsCampaignRecordAccessors",
    "AdsDaisyChainWhatsAppFromInstagramStore",
    "AdsDefaultPageDataProvider",
    "AdsLeadGenConversionValueExpressionUtils",
    "AdsManagerIGLoginUtils",
    "AdsMessagesDefaultDestinationUtils",
    "AdsMutators",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "ValueAdjustmentRuleAdjustmentSignType",
    "adsCFGetPageStoreState_HACK",
    "immutable",
    "isCampaignEligibleForVAR",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsPromotedObjectTypes")).IG_PROFILE_AND_FB_PAGE,
        e.PAGE,
        e.ON_AD,
        e.PHONE_CALL,
        e.MESSENGER,
        e.WEBSITE_AND_MESSAGES,
        e.LEAD_FORM_MESSENGER,
        e.LEAD_FROM_IG_DIRECT,
        e.WHATSAPP,
      ]);
    function u(e, t, n) {
      var o;
      if (
        !s.has(e) ||
        (t == null || (o = t.promoted_object) == null ? void 0 : o.page_id) !=
          null
      )
        return t;
      var a = p(n);
      return a == null || r("isFalsey")(a.id)
        ? t
        : r("AdsCampaignRecordAccessors").promoted_object.page_id.set(a.id, t);
    }
    function c(e, t, n, a, i, l, s, u) {
      var c;
      if (
        !o("isCampaignEligibleForVAR").isCampaignEligibleForVAR(
          e,
          t,
          n,
          a,
          i,
          !1,
          l == null ||
            (c = l.targeting) == null ||
            (c = c.device_platforms) == null
            ? void 0
            : c.toArray(),
          s,
          u,
        )
      ) {
        var d;
        return o("AdsMutators").chain(
          (d = r("AdsCampaignRecordAccessors")).value_rule_set_id.delete,
          d.value_adjustment_rule_collection_id.delete,
          d.value_rules_entry_point.delete,
          d.value_rules_spec.delete,
        )(l);
      }
      return l;
    }
    function d(e, t, n) {
      var o = p(n);
      if (o == null || r("isFalsey")(o.id)) return e;
      var a = e;
      return (
        r("AdsAdgroupSemanticFields").linkURL.isSupported(t, a) &&
          (a = r("AdsAdgroupSemanticFields").linkURL.set(t, a, o.link)),
        a
      );
    }
    function m(e, t) {
      var n = r("AdsAdgroupSemanticFields").pageID.get(t, e);
      if (n != null) return e;
      var o = p();
      return o == null || r("isFalsey")(o.id)
        ? e
        : r("AdsAdgroupSemanticFields").pageID.set(t, e, o.id);
    }
    function p(e) {
      var t = r("adsCFGetPageStoreState_HACK")();
      return o("AdsCFFindEligiblePageStoreUtils").findEligiblePage(t, e, !0);
    }
    function _(e, t, n, a, i, l) {
      var s, u, c;
      if (o("AdsManagerIGLoginUtils").getIsIGLogin(e))
        return r("AdCampaignDestination").INSTAGRAM_DIRECT;
      var d = e.account_id,
        m = e.capabilities,
        p = e.segment,
        _ =
          (s = r("AdsDefaultPageDataProvider")().get(d).getValue()) == null
            ? void 0
            : s.pageID;
      a != null && a !== _ && (_ = a);
      var f = r("adsCFGetPageStoreState_HACK")();
      if (_ == null)
        return t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          n === r("AdsPromotedObjectTypes").MESSENGER &&
          (!f || f.size === 0)
          ? r("AdCampaignDestination").INSTAGRAM_DIRECT
          : r("AdCampaignDestination").MESSENGER;
      var g = r("AdsPageStore").getLoadObject(_).getValue();
      if (g == null) return r("AdCampaignDestination").UNDEFINED;
      var h = r("AdsPageInstagramAccountStore_RELAY").get(_),
        y = o("AdsMessagesDefaultDestinationUtils").pageHasIGAccountConnected(
          _,
          h,
        ),
        C = y.getValue() || !1,
        b = null,
        v = (u = e.business) == null ? void 0 : u.id;
      (v != null &&
        (b = r("AdsBusinessWhatsAppBusinessAccountProvider")()
          .get(v)
          .getValue()),
        (b =
          (c = b) == null
            ? void 0
            : c.filter(function (e) {
                return (
                  e.whatsAppNumberConnectionStatus === "linked".toUpperCase()
                );
              })));
      var S = r("AdsDaisyChainWhatsAppFromInstagramStore").get(_);
      return o(
        "AdsMessagesDefaultDestinationUtils",
      ).getDefaultMessageDestinationResult(
        { segment: p, capabilities: m },
        g,
        C,
        t,
        n,
        i,
        l,
        b,
        S,
      ).defaultDestination;
    }
    function f(e, t, n, a) {
      if (
        e &&
        t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        n === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL &&
        o(
          "AdsLeadGenConversionValueExpressionUtils",
        ).isAccountEligibleForLeadGenConversionValueExpression()
      ) {
        var i = g(a);
        return i;
      }
      return r(
        "AdsCampaignRecordAccessors",
      ).conversion_value_expression_spec.delete(a);
    }
    function g(e) {
      var t = [];
      return (
        t.push({
          adjustment_sign: r("ValueAdjustmentRuleAdjustmentSignType").INCREASE,
          adjustment_weight: o("AdsLeadGenConversionValueExpressionUtils")
            .DEFAULT_WEBSITE_CONVERSION_ADJUSTMENT_WEIGHT,
          destination_type: r("AdCampaignDestination").WEBSITE,
        }),
        t.push({
          adjustment_sign: r("ValueAdjustmentRuleAdjustmentSignType").DECREASE,
          adjustment_weight: o("AdsLeadGenConversionValueExpressionUtils")
            .DEFAULT_PHONE_CALL_CONVERSION_ADJUSTMENT_WEIGHT,
          destination_type: r("AdCampaignDestination").PHONE_CALL,
        }),
        r("AdsCampaignRecordAccessors").conversion_value_expression_spec.set(
          r("immutable").fromJS(t),
          e,
        )
      );
    }
    ((l.maybeRetainOrDefaultPageID = u),
      (l.maybeClearValueAdjustmentRuleCollectionID = c),
      (l.maybeSetDefaultPageLink = d),
      (l.maybeSetDefaultPageIDOnAdgroup = m),
      (l.getDefaultPage = p),
      (l.getMessagesMultiDestination = _),
      (l.maybeSetConversionValueExpressionSpec = f),
      (l.setCampaignConversionValueExpressionSpec = g));
  },
  98,
);
