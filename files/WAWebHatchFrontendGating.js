__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebMuseDefaultAssistantVariant",
    "WAWebMuseDefaultAssistantVariantSource",
    "WAWebPrimaryFeaturesModel",
    "WAWebPrimaryVersionGating",
    "WAWebTPPdfViewerGatingUtils",
    "asyncToGeneratorRuntime",
    "gkx",
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
        o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(
          "application/pdf",
        ) && r("gkx")("5244")
      );
    }
    function u() {
      return N({
        abProp: "ai_hatch_approval_notification_enabled",
        primaryFeature: "ai_hatch_approval_notification_enabled",
      });
    }
    function c() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        N({
          abProp: "ai_hatch_connectors_enabled",
          primaryFeature: "ai_hatch_connectors_enabled",
        })
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!c()) return !1;
          var e = yield r(
            "WAWebHatchLinkedStatusManager",
          ).fetchConfirmedLinkedStatusStateIfUnknown();
          return e === "linked";
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return N({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    function _() {
      return N({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function f() {
      return N({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function g() {
      return N({
        abProp: "ai_hatch_identity_enabled",
        primaryFeature: "ai_hatch_identity_enabled",
      });
    }
    function h(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        N({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function y(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        N({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function C(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        N({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function b() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        N({
          abProp: "ai_hatch_secure_credentials_enabled",
          primaryFeature: "ai_hatch_secure_credentials_enabled",
        })
      );
    }
    function v() {
      return N({ abProp: "ai_hatch_permission_enable" });
    }
    function S() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        N({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function R() {
      return N({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function L() {
      return N({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function E() {
      return N({
        abProp: "ai_hatch_data_controls_enabled",
        primaryFeature: "ai_hatch_data_controls_enabled",
      });
    }
    function k() {
      return (
        e() &&
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_in_app_subscriptions_enabled",
        ) ||
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
            "ai_hatch_manage_subscription_enabled",
          )) &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_subscriptions_enabled",
        )
      );
    }
    function I() {
      return (
        k() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_additional_tokens_enabled",
        )
      );
    }
    function T() {
      return N({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function D() {
      return N({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function x() {
      return N({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function $() {
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
    function P(e) {
      return e || !x()
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    function N(t) {
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
      (l.isHatchPdfViewerEnabled = s),
      (l.isHatchApprovalNotificationEnabled = u),
      (l.isHatchConnectorsEnabled = c),
      (l.isHatchConnectorsEnabledForLoad = d),
      (l.isHatchJarvisRendererEnabled = p),
      (l.isHatchVmCapabilitySyncEnabled = _),
      (l.isHatchIdeasEnabled = f),
      (l.isHatchIdentityEnabled = g),
      (l.isHatchBrowserEnabled = h),
      (l.isHatchThemeEnabled = y),
      (l.isHatchAvatarWorkingVideoEnabled = C),
      (l.isHatchSecureCredentialsEnabled = b),
      (l.isHatchPermissionsEnabled = v),
      (l.isHatchSpaceEnabled = S),
      (l.isHatchMediaEnabled = R),
      (l.isHatchRevokeEnabled = L),
      (l.isHatchDataControlsEnabled = E),
      (l.isHatchManageSubscriptionEnabled = k),
      (l.isHatchAdditionalTokensEnabled = I),
      (l.isHatchScheduledTasksEnabled = T),
      (l.isHatchActivityEnabled = D),
      (l.isHatchVideoAvatarsEnabled = x),
      (l.isMuseNavBarEntryPointSelected = $),
      (l.getHatchNavBarAnimationMode = P));
  },
  98,
);
