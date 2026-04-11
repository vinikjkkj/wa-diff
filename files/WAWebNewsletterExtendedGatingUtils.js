__d(
  "WAWebNewsletterExtendedGatingUtils",
  [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebGetEnumValuesFromConfig",
    "WAWebLogNewsletterExposuresAction",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterValidationUtils",
    "WAWebPrimaryFeatures",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
          .CHANNEL_UNFOLLOW,
        "1",
      ],
      [
        o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
          .CHANNEL_FOLLOW,
        "1",
      ],
    ]);
    function s() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled("newsletter") ||
        r("gkx")("26256")
      );
    }
    function u() {
      var e = o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.cast(
        o("WAWebABProps").getABPropConfigValue("channels_enabled"),
      );
      if (e == null || !s())
        return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Disabled;
      switch (e) {
        case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.Disabled:
          return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .AvailableOnPhone;
        case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.Enabled:
          return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .Enabled;
        case o("WAWebNewsletterGatingUtils").NewsletterABPropConfig
          .NeedsUpgrade:
          return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .NeedsUpgrade;
      }
    }
    function c(e, t) {
      var n;
      return (
        o("WAWebNewsletterGatingUtils").shouldFetchAndLogCapabilities() &&
          o("WAWebLogNewsletterExposuresAction").logNewsletterExposuresAction([
            {
              newsletterJid: o(
                "WAWebNewsletterValidationUtils",
              ).toNewsletterJidOrThrow(e.id.toJid()),
              capability: t,
            },
          ]),
        ((n = e.capabilities) == null ? void 0 : n.has(t)) &&
          o("WAWebABProps").getABPropConfigValue(
            "channels_capabilities_enabled",
          )
      );
    }
    function d() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_reactions_enabled",
        ) &&
        o("WAWebNewsletterFutureProofUtils").isMsgTypeSupported(
          o("WAWebMsgType").MSG_TYPE.REACTION,
        )
      );
    }
    function m(e, t) {
      return (
        d() &&
        !t &&
        o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          e == null ? void 0 : e.newsletterMetadata,
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_reactions_sender_list_enabled",
        )
      );
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "channels_directory_v2_filter_types",
      );
      return o("WAWebGetEnumValuesFromConfig").getEnumValuesFromConfig({
        config: e,
        enumCastFunction: function (t) {
          return o(
            "WAWebNewsletterDirectoryFilterUtils",
          ).NewsletterDirectoryFilterType.cast(t);
        },
      });
    }
    function _() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "channels_directory_category_types",
      );
      return o("WAWebGetEnumValuesFromConfig").getEnumValuesFromConfig({
        config: e,
        enumCastFunction: function (t) {
          return o(
            "WAWebNewsletterDirectoryCategoryUtils",
          ).NewsletterDirectoryCategoryType.cast(t);
        },
      });
    }
    function f(e) {
      if (e == null || !o("WAWebChatGetters").getIsNewsletter(e)) return !1;
      var t = o(
        "WAWebNewsletterGatingUtils",
      ).isNewsletterForwardCounterUIEnabled();
      return t === 2
        ? !0
        : t === 1
          ? o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              e.newsletterMetadata,
            )
          : !1;
    }
    function g(e) {
      return o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
        e == null ? void 0 : e.newsletterMetadata,
      )
        ? o("WAWebNewsletterGatingUtils").isNewsletterPollsVotersEnabled()
        : !1;
    }
    function h(e) {
      return e == null || e.isSuspendedOrTerminated
        ? !1
        : !r("gkx")("26258") &&
            o("WAWebABProps").getABPropConfigValue(
              "channels_admin_insights_gizmos_enabled",
            )
          ? !0
          : o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)
            ? o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
                "channels_producer_insights_enabled",
              )
              ? !0
              : c(
                  e,
                  o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights,
                )
            : !1;
    }
    function y(e) {
      return e == null || !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
              "channels_admin_notifications_enabled",
            )
          ? !0
          : c(
              e,
              o("WAWebCommonNewsletterEnums").NewsletterCapability
                .ADMIN_NOTIFICATIONS,
            );
    }
    function C(e) {
      var t = e.newsletterMetadata;
      return t == null
        ? !1
        : c(t, o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls);
    }
    function b(e) {
      var t = e.newsletterMetadata;
      return t == null
        ? !1
        : c(t, o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS);
    }
    function v(e) {
      return e == null || !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
              "channels_admin_profiles_sender_enabled",
            )
          ? !0
          : c(
              e,
              o("WAWebCommonNewsletterEnums").NewsletterCapability
                .ADMIN_PROFILE,
            );
    }
    function S(t) {
      if (!o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled())
        return !1;
      var n = e.get(t);
      if (n == null) return !1;
      var r = o("WAWebABProps").getABPropConfigValue(
          "channels_qpl_improvements_supported_types",
        ),
        a = new Set(r.split(","));
      return a.has(n);
    }
    ((l.isNewsletterEnabledOnPrimary = s),
      (l.getNewsletterDeeplinkGating = u),
      (l.isNewsletterReactionEnabled = d),
      (l.isNewsletterReactionSenderListEnabled = m),
      (l.getNewsletterDirectoryV2FilterTypes = p),
      (l.getNewsletterDirectoryCategoryTypes = _),
      (l.shouldShowNewsletterForwardCounterBubble = f),
      (l.isNewsletterPollsVotersEnabledForChat = g),
      (l.isNewsletterProducerInsightsEnabled = h),
      (l.isNewsletterAdminNotificationsEnabled = y),
      (l.isNewsletterPhotoPollCapabilityEnabled = C),
      (l.isNewsletterQuestionsCapabilityEnabled = b),
      (l.isNewsletterAdminProfilesSenderEnabled = v),
      (l.isNewsletterQplLoggingEnabledForMarkerId = S));
  },
  98,
);
