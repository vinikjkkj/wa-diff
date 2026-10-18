__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebMuseDefaultAssistantVariantSource",
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
      return T({ abProp: "ai_hatch_approval_notification_enabled" });
    }
    function u() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        T({
          abProp: "ai_hatch_connectors_enabled",
          primaryFeature: "ai_hatch_connectors_enabled",
        })
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
      return T({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    function p() {
      return T({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function _() {
      return T({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function f(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        T({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function g(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        T({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function h(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        T({
          abProp: "ai_hatch_theme_colors_enabled",
          primaryFeature: "ai_hatch_theme_colors_enabled",
        })
      );
    }
    function y(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        T({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function C() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        T({
          abProp: "ai_hatch_secure_credentials_enabled",
          primaryFeature: "ai_hatch_secure_credentials_enabled",
        })
      );
    }
    function b() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        T({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function v() {
      return T({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function S() {
      return T({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function R() {
      return (
        e() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_manage_subscription_enabled",
        ) &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    function L() {
      return T({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function E() {
      return T({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function k() {
      var e = o(
        "WAWebMuseDefaultAssistantVariant",
      ).MuseDefaultAssistantVariant.cast(
        o(
          "WAWebMuseDefaultAssistantVariantSource",
        ).readMuseDefaultAssistantVariantSource(),
      );
      return e !==
        o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
          .MuseAfterLinking &&
        e !==
          o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
            .MuseAlways
        ? !1
        : r("WAWebHatchLinkedStatusManager").isLinked() &&
            o("WAWebABProps").getABPropConfigValue("ai_hatch_fab_enabled");
    }
    function I(e) {
      return e || !E()
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    function T(t) {
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
      (l.isHatchThemeEnabled = g),
      (l.isHatchThemeColorsEnabled = h),
      (l.isHatchAvatarWorkingVideoEnabled = y),
      (l.isHatchSecureCredentialsEnabled = C),
      (l.isHatchSpaceEnabled = b),
      (l.isHatchMediaEnabled = v),
      (l.isHatchRevokeEnabled = S),
      (l.isHatchManageSubscriptionEnabled = R),
      (l.isHatchActivityEnabled = L),
      (l.isHatchVideoAvatarsEnabled = E),
      (l.isMuseNavBarEntryPointSelected = k),
      (l.getHatchNavBarAnimationMode = I));
  },
  98,
);
