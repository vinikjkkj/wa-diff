__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchMinPrimaryVersions",
    "WAWebHatchUrl",
    "WAWebMuseCtaLinkOverride",
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
      return O({
        abProp: "ai_hatch_approval_history_enabled",
        primaryFeature: "ai_hatch_approval_history_enabled",
      });
    }
    function c() {
      return O({
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
        O({
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
      return (
        d() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_connectors_new_ui_enabled",
        )
      );
    }
    function f() {
      return O({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    function g() {
      return O({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function h() {
      return O({ abProp: "ai_hatch_cvm_enabled" });
    }
    function y() {
      return O({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function C() {
      return O({
        abProp: "ai_hatch_identity_enabled",
        primaryFeature: "ai_hatch_identity_enabled",
      });
    }
    function b(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        O({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function v(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        O({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function S(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        O({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function R() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        O({
          abProp: "ai_hatch_secure_credentials_enabled",
          primaryFeature: "ai_hatch_secure_credentials_enabled",
        })
      );
    }
    function L() {
      return (
        R() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_custom_connectors_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_custom_connectors_enabled",
        )
      );
    }
    function E() {
      return O({
        abProp: "ai_hatch_permission_enable",
        primaryFeature: "ai_hatch_permission_enable",
      });
    }
    function k() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        O({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function I() {
      return O({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function T() {
      return O({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function D() {
      return O({
        abProp: "ai_hatch_data_controls_enabled",
        primaryFeature: "ai_hatch_data_controls_enabled",
      });
    }
    function x() {
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
    function $() {
      return (
        x() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_additional_tokens_enabled",
        )
      );
    }
    function P() {
      return O({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function N() {
      return O({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function M() {
      return N() && r("gkx")("16539");
    }
    function w() {
      return O({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function A() {
      var e = o(
        "WAWebMuseDefaultAssistantVariant",
      ).MuseDefaultAssistantVariant.cast(
        o(
          "WAWebMuseDefaultAssistantVariantSource",
        ).readMuseDefaultAssistantVariantSource(),
      );
      if (
        e !==
          o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
            .MuseAfterLinking &&
        e !==
          o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
            .MuseAlways
      )
        return !1;
      var t = r("WAWebHatchLinkedStatusManager").isLinked();
      return !t &&
        e !==
          o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
            .MuseAlways
        ? !1
        : o("WAWebBotGating").isBotShortcutEntryPointEnabled() &&
            (t ||
              (o("WAWebHatchUrl").getHatchJoinUrl() != null &&
                !o("WAWebMuseCtaLinkOverride").isTryMuseKillSwitchOn())) &&
            o("WAWebABProps").getABPropConfigValue("ai_hatch_fab_enabled");
    }
    function F(e) {
      return e || !w()
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    function O(t) {
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
      (l.isHatchConnectorsNewUiEnabled = _),
      (l.isHatchJarvisRendererEnabled = f),
      (l.isHatchVmCapabilitySyncEnabled = g),
      (l.isHatchCvmEnabled = h),
      (l.isHatchIdeasEnabled = y),
      (l.isHatchIdentityEnabled = C),
      (l.isHatchBrowserEnabled = b),
      (l.isHatchThemeEnabled = v),
      (l.isHatchAvatarWorkingVideoEnabled = S),
      (l.isHatchSecureCredentialsEnabled = R),
      (l.isHatchCustomConnectorsEnabled = L),
      (l.isHatchPermissionsEnabled = E),
      (l.isHatchSpaceEnabled = k),
      (l.isHatchMediaEnabled = I),
      (l.isHatchRevokeEnabled = T),
      (l.isHatchDataControlsEnabled = D),
      (l.isHatchManageSubscriptionEnabled = x),
      (l.isHatchAdditionalTokensEnabled = $),
      (l.isHatchScheduledTasksEnabled = P),
      (l.isHatchActivityEnabled = N),
      (l.isHatchGoalsEnabled = M),
      (l.isHatchVideoAvatarsEnabled = w),
      (l.isMuseNavBarEntryPointSelected = A),
      (l.getHatchNavBarAnimationMode = F));
  },
  98,
);
