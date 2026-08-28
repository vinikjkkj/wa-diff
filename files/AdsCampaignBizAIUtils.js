__d(
  "AdsCampaignBizAIUtils",
  [
    "AdsAPIObjectives",
    "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation.graphql",
    "AdsManagerRelayEnvironment",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "ODS",
    "QE2Logger",
    "getMessageMarketingCampaignType",
    "gkx",
    "justknobx",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new Set(),
      d = [
        (u = o("AdsAPIObjectives")).OUTCOME_ENGAGEMENT,
        u.LINK_CLICKS,
        u.OUTCOME_SALES,
        u.CONVERSIONS,
      ],
      m = [
        u.OUTCOME_ENGAGEMENT,
        u.LINK_CLICKS,
        u.OUTCOME_SALES,
        u.CONVERSIONS,
        u.OUTCOME_LEADS,
      ];
    function p(e, t) {
      var n =
          e === o("AdsAPIObjectives").OUTCOME_SALES &&
          t === r("AdsPromotedObjectTypes").PIXEL,
        a =
          e === o("AdsAPIObjectives").LINK_CLICKS &&
          t === r("AdsPromotedObjectTypes").WEBSITE,
        i =
          e === o("AdsAPIObjectives").OUTCOME_LEADS &&
          t === r("AdsPromotedObjectTypes").PIXEL;
      return n || a || i;
    }
    function _() {
      return r("gkx")("11742");
    }
    function f() {
      return r("gkx")("23528");
    }
    function g() {
      return r("gkx")("24695") || r("gkx")("22975") || r("justknobx")._("616");
    }
    function h() {
      return r("justknobx")._("5160");
    }
    function y() {
      return r("gkx")("12130");
    }
    function C(e, t) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).destinationIncludesMessenger(e.destination_type) &&
        o("AdsUEditorMessagingDestinationUtils").isSingleDestination(
          e.destination_type,
        )
        ? d.includes(t.objective) && g()
        : o("AdsUEditorMessagingDestinationUtils").isSingleDestination(
              e.destination_type,
            ) &&
            o(
              "AdsUEditorMessagingDestinationUtils",
            ).destinationIncludesWhatsApp(e.destination_type)
          ? m.includes(t.objective) && _()
          : !1;
    }
    function b(e) {
      return (
        y() &&
        o("getMessageMarketingCampaignType").getMessageMarketingCampaignType(
          e,
        ) !==
          o("getMessageMarketingCampaignType").MessageMarketingCampaignType.NONE
      );
    }
    function v(e, t, n) {
      var r;
      n === void 0 && (n = !1);
      var a = e != null && g() && d.includes(e);
      return a
        ? (n &&
            o("QE2Logger").logExposureForPage(
              "biz_ai_ctm_default_on_ads_manager",
              t.id,
            ),
          ((r = t.biz_ai_smb_data) == null || (r = r.ads_data) == null
            ? void 0
            : r.experiment_state) != null)
        : !1;
    }
    function S(t, a, i) {
      var l;
      if ((i === void 0 && (i = !1), r("justknobx")._("118"))) return !1;
      var u = t != null && _() && m.includes(t);
      if (!u)
        return (
          i &&
            (s || (s = o("ODS"))).bumpEntityKey(
              1967,
              "ctwa",
              "bizai_default_on.gk_or_objective.fail",
            ),
          !1
        );
      i && !c.has(a.id)
        ? ((s || (s = o("ODS"))).bumpEntityKey(
            1967,
            "ctwa",
            "bizai_default_on.exposure_mutation.attempt",
          ),
          o("react-relay").commitMutation(r("AdsManagerRelayEnvironment"), {
            mutation:
              e !== void 0
                ? e
                : (e = n(
                    "AdsCampaignBizAIUtilsCTWADefaultOnLogExposureMutation.graphql",
                  )),
            variables: { page_id: a.id },
            onCompleted: function () {
              (c.add(a.id),
                (s || (s = o("ODS"))).bumpEntityKey(
                  1967,
                  "ctwa",
                  "bizai_default_on.exposure_mutation.success",
                ));
            },
            onError: function () {
              (s || (s = o("ODS"))).bumpEntityKey(
                1967,
                "ctwa",
                "bizai_default_on.exposure_mutation.error",
              );
            },
          }))
        : i &&
          (s || (s = o("ODS"))).bumpEntityKey(
            1967,
            "ctwa",
            "bizai_default_on.dedup_blocked",
          );
      var d =
        ((l = a.biz_ai_smb_data) == null || (l = l.ads_data) == null
          ? void 0
          : l.wa_default_on_eligible) === !0;
      return (
        i &&
          (s || (s = o("ODS"))).bumpEntityKey(
            1967,
            "ctwa",
            d
              ? "bizai_default_on.eligible.true"
              : "bizai_default_on.eligible.false",
          ),
        d
      );
    }
    function R(e, t, n) {
      return f() && e != null && t != null && p(e, t) && n != null;
    }
    ((l.BIZ_AI_MESSENGER_SUPPORTED_OBJECTIVES = d),
      (l.BIZ_AI_WHATSAPP_SUPPORTED_OBJECTIVES = m),
      (l.isBizAIWhatsAppGateEnabled = _),
      (l.isWTWABizAIGateEnabled = f),
      (l.isBizAIMessengerGateEnabled = g),
      (l.isAuthScreenSkippedInOnboarding = h),
      (l.isMarketingMsgBizAIGateEnabled = y),
      (l.isBizAISectionEnabledForCampaign = C),
      (l.isBizAIMarketingMessageSectionEnabledForCampaign = b),
      (l.shouldDefaultToMessengerForBizAI = v),
      (l.shouldDefaultToWhatsAppForBizAI = S),
      (l.isWTWABizAIEnabled = R));
  },
  98,
);
