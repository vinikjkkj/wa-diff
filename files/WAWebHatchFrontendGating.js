__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebAIHatchIdentityStore",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebPrimaryFeaturesModel",
    "WAWebPrimaryVersionGating",
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
      return R({ abProp: "ai_hatch_approval_notification_enabled" });
    }
    function u() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) && R({ abProp: "ai_hatch_connectors_enabled" })
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
      return R({ abProp: "ai_hatch_response_ux_parity_enabled" });
    }
    function p() {
      return R({ abProp: "ai_hatch_vm_capability_sync_enabled" });
    }
    function _() {
      return R({ abProp: "ai_hatch_ideas_enabled" });
    }
    function f(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        R({ abProp: "ai_hatch_browser_enabled" })
      );
    }
    function g() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) && R({ abProp: "ai_hatch_secure_credentials_enabled" })
      );
    }
    function h() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) && R({ abProp: "ai_hatch_space_enabled" })
      );
    }
    function y() {
      return R({ abProp: "ai_hatch_media_enabled" });
    }
    function C() {
      return (
        e() &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    function b() {
      return R({ abProp: "ai_hatch_activity_enabled" });
    }
    function v() {
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
    function S(e) {
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
    function R(t) {
      var n = t.abProp,
        r = t.primaryFeature;
      return (
        e() &&
        (r == null ||
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(r)) &&
        o("WAWebABProps").getABPropConfigValue(n)
      );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchApprovalNotificationEnabled = s),
      (l.isHatchConnectorsEnabled = u),
      (l.isHatchConnectorsEnabledForLoad = c),
      (l.isHatchJarvisRendererEnabled = m),
      (l.isHatchVmCapabilitySyncEnabled = p),
      (l.isHatchIdeasEnabled = _),
      (l.isHatchBrowserEnabled = f),
      (l.isHatchSecureCredentialsEnabled = g),
      (l.isHatchSpaceEnabled = h),
      (l.isHatchMediaEnabled = y),
      (l.isHatchManageSubscriptionEnabled = C),
      (l.isHatchActivityEnabled = b),
      (l.isMuseNavBarEntryPointSelected = v),
      (l.getHatchNavBarAnimationMode = S));
  },
  98,
);
