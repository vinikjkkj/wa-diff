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
    "WAWebNewsletterPinGatingUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebPrimaryFeatures",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebPrimaryFeatures").primaryFeatureEnabled("newsletter") ||
        r("gkx")("26256")
      );
    }
    function s() {
      var t = o("WAWebNewsletterGatingUtils").NewsletterABPropConfig.cast(
        o("WAWebABProps").getABPropConfigValue("channels_enabled"),
      );
      if (t == null || !e())
        return o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
          .Disabled;
      switch (t) {
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
    function u(e, t) {
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
    function c() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_reactions_enabled",
        ) &&
        o("WAWebNewsletterFutureProofUtils").isMsgTypeSupported(
          o("WAWebMsgType").MSG_TYPE.REACTION,
        )
      );
    }
    function d(e, t) {
      var n, r;
      return (
        c() &&
        !t &&
        ((n =
          (r = e.newsletterMetadata) == null ? void 0 : r.iAmAdminOrOwner()) !=
        null
          ? n
          : !1)
      );
    }
    function m() {
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
    function p() {
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
    function _(e) {
      if (e == null || !o("WAWebChatGetters").getIsNewsletter(e)) return !1;
      var t = o(
        "WAWebNewsletterGatingUtils",
      ).isNewsletterForwardCounterUIEnabled();
      if (t === 2) return !0;
      if (t === 1) {
        var n, r;
        return (n =
          (r = e.newsletterMetadata) == null ? void 0 : r.iAmAdminOrOwner()) !=
          null
          ? n
          : !1;
      }
      return !1;
    }
    function f(e) {
      var t;
      return (t = e.newsletterMetadata) != null && t.iAmAdminOrOwner()
        ? o("WAWebNewsletterGatingUtils").isNewsletterPollsVotersEnabled()
        : !1;
    }
    function g(e) {
      return e == null || e.isSuspendedOrTerminated
        ? !1
        : !r("gkx")("26258") &&
            o("WAWebABProps").getABPropConfigValue(
              "channels_admin_insights_gizmos_enabled",
            )
          ? !0
          : e.iAmAdminOrOwner()
            ? o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
                "channels_producer_insights_enabled",
              )
              ? !0
              : u(
                  e,
                  o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights,
                )
            : !1;
    }
    function h(e) {
      return e == null || !e.iAmAdminOrOwner()
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
              "channels_admin_notifications_enabled",
            )
          ? !0
          : u(
              e,
              o("WAWebCommonNewsletterEnums").NewsletterCapability
                .ADMIN_NOTIFICATIONS,
            );
    }
    function y(e) {
      return e == null || !e.iAmAdminOrOwner()
        ? !1
        : o("WAWebNewsletterPinGatingUtils").isChannelMessagePinAdminEnabled()
          ? !0
          : u(
              e,
              o("WAWebCommonNewsletterEnums").NewsletterCapability
                .PINNED_MESSAGES,
            );
    }
    function C(e) {
      var t = e.newsletterMetadata;
      return t == null
        ? !1
        : u(t, o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls);
    }
    function b(e) {
      return e == null
        ? !1
        : u(
            e,
            o("WAWebCommonNewsletterEnums").NewsletterCapability
              .CHANNEL_STATUS_PRODUCER,
          );
    }
    function v(e) {
      var t = e.newsletterMetadata;
      return t == null
        ? !1
        : u(t, o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS);
    }
    function S(e) {
      var t = e.newsletterMetadata;
      return t == null
        ? !1
        : u(
            t,
            o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_M2,
          );
    }
    function R(e) {
      return e == null || !e.iAmAdminOrOwner()
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
              "channels_admin_profiles_sender_enabled",
            )
          ? !0
          : u(
              e,
              o("WAWebCommonNewsletterEnums").NewsletterCapability
                .ADMIN_PROFILE,
            );
    }
    function L(e) {
      return R(e) && e.adminProfilesSettingEnabled;
    }
    function E(e) {
      return (
        L(e) &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_admin_profiles_list_enabled",
        )
      );
    }
    function k(e) {
      return (
        L(e) &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_admin_profiles_update_enabled",
        )
      );
    }
    function I(e) {
      return (
        R(e) &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_admin_profiles_settings_enabled",
        )
      );
    }
    ((l.isNewsletterEnabledOnPrimary = e),
      (l.getNewsletterDeeplinkGating = s),
      (l.isNewsletterReactionEnabled = c),
      (l.isNewsletterReactionSenderListEnabled = d),
      (l.getNewsletterDirectoryV2FilterTypes = m),
      (l.getNewsletterDirectoryCategoryTypes = p),
      (l.shouldShowNewsletterForwardCounterBubble = _),
      (l.isNewsletterPollsVotersEnabledForChat = f),
      (l.isNewsletterProducerInsightsEnabled = g),
      (l.isNewsletterAdminNotificationsEnabled = h),
      (l.canPinNewsletterMessages = y),
      (l.isNewsletterPhotoPollCapabilityEnabled = C),
      (l.isNewsletterStatusCapabilityEnabled = b),
      (l.isNewsletterQuestionsCapabilityEnabled = v),
      (l.isNewsletterQuestionsM2CapabilityEnabled = S),
      (l.isNewsletterAdminProfilesSenderEnabled = L),
      (l.isNewsletterAdminProfilesListEnabled = E),
      (l.isNewsletterAdminProfilesUpdateEnabled = k),
      (l.isNewsletterAdminProfilesSettingEnabled = I));
  },
  98,
);
