__d(
  "WAWebAuthAgentConsumerJourneyLogger",
  [
    "WAWebConsumerBizInteractionJourneyWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumConsumerBizActionTargetEnum",
    "WAWebWamEnumConsumerBizActionTypeEnum",
    "WAWebWamEnumConsumerBizEntryPointEnum",
    "WAWebWamEnumConsumerBizFeatureEnum",
    "WAWebWamEnumConsumerBizSurfaceEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "",
      s = 0;
    function u() {
      ((e = r("WAWebPonyfillsCryptoRandomUUID")()), (s = 0));
    }
    function c() {
      return ++s;
    }
    function d(t, n, r, a, i, l) {
      (e === "" && u(),
        new (o(
          "WAWebConsumerBizInteractionJourneyWamEvent",
        ).ConsumerBizInteractionJourneyWamEvent)({
          consumerBizSessionId: e,
          consumerBizSeqId: c(),
          consumerBizFeature: o("WAWebWamEnumConsumerBizFeatureEnum")
            .CONSUMER_BIZ_FEATURE_ENUM.AUTHORIZED_AGENT,
          consumerBizEntryPoint: a,
          consumerBizSurface: n,
          consumerBizActionType: t,
          consumerBizActionTarget: r,
          businessJid: i,
          consumerBizExtraAttributes: JSON.stringify(l),
        }).commit());
    }
    function m(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .VIEW,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .CHAT_HEADER,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.HEADER_SUBTITLE,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CHAT_LIST,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    function p(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .CLICK,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .CHAT_HEADER,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.HEADER_SUBTITLE,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CHAT_LIST,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    function _(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .VIEW,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .FMX_CARD,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.FMX_AFFILIATION_ROW,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CHAT_THREAD,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    function f(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .CLICK,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .FMX_CARD,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.FMX_AFFILIATION_ROW,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CHAT_THREAD,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    function g(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .VIEW,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .BUSINESS_PROFILE,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.AFFILIATION_SECTION,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CONTACT_INFO,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    function h(e, t, n) {
      d(
        o("WAWebWamEnumConsumerBizActionTypeEnum").CONSUMER_BIZ_ACTION_TYPE_ENUM
          .CLICK,
        o("WAWebWamEnumConsumerBizSurfaceEnum").CONSUMER_BIZ_SURFACE_ENUM
          .BUSINESS_PROFILE,
        o("WAWebWamEnumConsumerBizActionTargetEnum")
          .CONSUMER_BIZ_ACTION_TARGET_ENUM.AFFILIATION_SECTION,
        o("WAWebWamEnumConsumerBizEntryPointEnum").CONSUMER_BIZ_ENTRY_POINT_ENUM
          .CONTACT_INFO,
        e,
        {
          is_authorized_agent: !0,
          parent_company_name: t,
          parent_company_jid: n,
        },
      );
    }
    ((l.startAuthAgentConsumerSession = u),
      (l.logChatHeaderSubtitleImpression = m),
      (l.logChatHeaderSubtitleTap = p),
      (l.logFmxCardAffiliationImpression = _),
      (l.logFmxCardAffiliationTap = f),
      (l.logProfileAffiliationImpression = g),
      (l.logProfileAffiliationTap = h));
  },
  98,
);
