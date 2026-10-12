__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebAIHatchIdentityStore",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebPrimaryFeaturesModel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
        primaryAiHatchIntegrationEnabled: o("WAWebPrimaryFeaturesModel")
          .PrimaryFeatures.aiHatchIntegrationEnabled,
      });
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_approval_notification_enabled",
        )
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_connectors_enabled")
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!u()) return !1;
          var e = yield r(
            "WAWebHatchLinkedStatusManager",
          ).fetchConfirmedLinkedStatusStateIfUnknown();
          return e === "linked";
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return (
        e() && o("WAWebABProps").getABPropConfigValue("ai_hatch_ideas_enabled")
      );
    }
    function p(t) {
      return (
        t != null &&
        o("WAWebBotUtils").isHatchBot(t) &&
        e() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_browser_enabled")
      );
    }
    function _() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_secure_credentials_enabled",
        )
      );
    }
    function f() {
      return (
        e() && o("WAWebABProps").getABPropConfigValue("ai_hatch_space_enabled")
      );
    }
    function g() {
      return (
        e() &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    function h() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_activity_enabled")
      );
    }
    function y() {
      return e()
        ? (function (e) {
            if (
              e ===
              o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
                .MuseAfterLinking
            )
              return r("WAWebHatchLinkedStatusManager").isLinked();
            if (
              e ===
              o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
                .MuseAlways
            )
              return (
                o("WAWebAIHatchIdentityStore").getHatchInitialIdentity()
                  .name !== ""
              );
            if (
              e ===
              o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
                .MetaAI
            )
              return !1;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(
            o(
              "WAWebMuseDefaultAssistantVariant",
            ).getMuseDefaultAssistantVariant(),
          )
        : !1;
    }
    function C(e) {
      return e ||
        !o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_video_avatars_enabled",
        )
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchApprovalNotificationEnabled = s),
      (l.isHatchConnectorsEnabled = u),
      (l.isHatchConnectorsEnabledForLoad = c),
      (l.isHatchIdeasEnabled = m),
      (l.isHatchBrowserEnabled = p),
      (l.isHatchSecureCredentialsEnabled = _),
      (l.isHatchSpaceEnabled = f),
      (l.isHatchManageSubscriptionEnabled = g),
      (l.isHatchActivityEnabled = h),
      (l.isMuseNavBarEntryPointSelected = y),
      (l.getHatchNavBarAnimationMode = C));
  },
  98,
);
