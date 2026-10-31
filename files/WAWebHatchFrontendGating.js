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
      return F({
        abProp: "ai_hatch_approval_history_enabled",
        primaryFeature: "ai_hatch_approval_history_enabled",
      });
    }
    function c() {
      return F({
        abProp: "ai_hatch_approval_notification_enabled",
        primaryFeature: "ai_hatch_approval_notification_enabled",
      });
    }
    function d() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        F({
          abProp: "ai_hatch_connectors_enabled",
          primaryFeature: "ai_hatch_connectors_enabled",
        })
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!d()) return !1;
          var e = yield r(
            "WAWebHatchLinkedStatusManager",
          ).fetchConfirmedLinkedStatusStateIfUnknown();
          return e === "linked";
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return F({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    function f() {
      return F({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function g() {
      return F({ abProp: "ai_hatch_cvm_enabled" });
    }
    function h() {
      return F({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function y() {
      return F({
        abProp: "ai_hatch_identity_enabled",
        primaryFeature: "ai_hatch_identity_enabled",
      });
    }
    function C(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        F({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function b(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        F({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function v(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        F({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function S() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        F({
          abProp: "ai_hatch_secure_credentials_enabled",
          primaryFeature: "ai_hatch_secure_credentials_enabled",
        })
      );
    }
    function R() {
      return (
        S() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_custom_connectors_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_custom_connectors_enabled",
        )
      );
    }
    function L() {
      return F({
        abProp: "ai_hatch_permission_enable",
        primaryFeature: "ai_hatch_permission_enable",
      });
    }
    function E() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        F({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function k() {
      return F({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function I() {
      return F({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function T() {
      return F({
        abProp: "ai_hatch_data_controls_enabled",
        primaryFeature: "ai_hatch_data_controls_enabled",
      });
    }
    function D() {
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
    function x() {
      return (
        D() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_additional_tokens_enabled",
        )
      );
    }
    function $() {
      return F({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function P() {
      return F({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function N() {
      return P() && r("gkx")("16539");
    }
    function M() {
      return F({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function w() {
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
    function A(e) {
      return e || !M()
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    function F(t) {
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
      (l.isHatchApprovalHistoryEnabled = u),
      (l.isHatchApprovalNotificationEnabled = c),
      (l.isHatchConnectorsEnabled = d),
      (l.isHatchConnectorsEnabledForLoad = m),
      (l.isHatchJarvisRendererEnabled = _),
      (l.isHatchVmCapabilitySyncEnabled = f),
      (l.isHatchCvmEnabled = g),
      (l.isHatchIdeasEnabled = h),
      (l.isHatchIdentityEnabled = y),
      (l.isHatchBrowserEnabled = C),
      (l.isHatchThemeEnabled = b),
      (l.isHatchAvatarWorkingVideoEnabled = v),
      (l.isHatchSecureCredentialsEnabled = S),
      (l.isHatchCustomConnectorsEnabled = R),
      (l.isHatchPermissionsEnabled = L),
      (l.isHatchSpaceEnabled = E),
      (l.isHatchMediaEnabled = k),
      (l.isHatchRevokeEnabled = I),
      (l.isHatchDataControlsEnabled = T),
      (l.isHatchManageSubscriptionEnabled = D),
      (l.isHatchAdditionalTokensEnabled = x),
      (l.isHatchScheduledTasksEnabled = $),
      (l.isHatchActivityEnabled = P),
      (l.isHatchGoalsEnabled = N),
      (l.isHatchVideoAvatarsEnabled = M),
      (l.isMuseNavBarEntryPointSelected = w),
      (l.getHatchNavBarAnimationMode = A));
  },
  98,
);
