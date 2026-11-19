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
    "WAWebLocalStorage",
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
      return q({
        abProp: "ai_hatch_approval_history_enabled",
        primaryFeature: "ai_hatch_approval_history_enabled",
      });
    }
    function c() {
      return q({
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
        q({
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
      return q({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    var g = "hatch-peer-invite-in-chat";
    function h() {
      return (
        f() &&
        !y() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_peer_pairing_card_enabled",
        )
      );
    }
    function y() {
      try {
        return (
          (r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(g)) === "off"
        );
      } catch (e) {
        return !1;
      }
    }
    function C() {
      return q({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function b() {
      return q({ abProp: "ai_hatch_cvm_enabled" });
    }
    function v() {
      return q({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function S() {
      return q({
        abProp: "ai_hatch_identity_enabled",
        primaryFeature: "ai_hatch_identity_enabled",
      });
    }
    function R(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        q({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function L(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        q({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function E(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        q({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function k() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        q({
          abProp: "ai_hatch_secure_credentials_enabled",
          primaryFeature: "ai_hatch_secure_credentials_enabled",
        })
      );
    }
    function I() {
      return (
        k() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_custom_connectors_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_custom_connectors_enabled",
        )
      );
    }
    function T() {
      return q({
        abProp: "ai_hatch_permission_enable",
        primaryFeature: "ai_hatch_permission_enable",
      });
    }
    function D() {
      return (
        o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(
          o("WAWebHatchMinPrimaryVersions")
            .HATCH_OCT_12_BUNDLE_MIN_PRIMARY_VERSION,
        ) &&
        q({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function x() {
      return q({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function $() {
      return q({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function P() {
      return q({
        abProp: "ai_hatch_data_controls_enabled",
        primaryFeature: "ai_hatch_data_controls_enabled",
      });
    }
    function N() {
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
    function M() {
      return (
        N() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_additional_tokens_enabled",
        )
      );
    }
    function w() {
      return q({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function A() {
      return q({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function F() {
      return A() && r("gkx")("16539");
    }
    function O() {
      return q({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function B() {
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
      var t =
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked";
      return !t &&
        e !==
          o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
            .MuseAlways
        ? !1
        : o("WAWebBotGating").isBotShortcutEntryPointEnabled() &&
            (t ||
              (o("WAWebHatchUrl").getHatchJoinUrl() != null &&
                !o("WAWebMuseCtaLinkOverride").isTryMuseKillSwitchOn())) &&
            o("WAWebABProps").getABPropConfigValue("ai_hatch_fab_enabled") &&
            (t ||
              o("WAWebABProps").getABPropConfigValue(
                "ai_hatch_web_fab_sign_up_enabled",
              ));
    }
    function W(e) {
      return e || !O()
        ? "static"
        : (function (e) {
            return e === 1 ? "loop" : e === 2 ? "once" : "static";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_fab_animation_variant",
            ),
          );
    }
    function q(t) {
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
      (l.isHatchPeerPairingCardEnabled = h),
      (l.isHatchVmCapabilitySyncEnabled = C),
      (l.isHatchCvmEnabled = b),
      (l.isHatchIdeasEnabled = v),
      (l.isHatchIdentityEnabled = S),
      (l.isHatchBrowserEnabled = R),
      (l.isHatchThemeEnabled = L),
      (l.isHatchAvatarWorkingVideoEnabled = E),
      (l.isHatchSecureCredentialsEnabled = k),
      (l.isHatchCustomConnectorsEnabled = I),
      (l.isHatchPermissionsEnabled = T),
      (l.isHatchSpaceEnabled = D),
      (l.isHatchMediaEnabled = x),
      (l.isHatchRevokeEnabled = $),
      (l.isHatchDataControlsEnabled = P),
      (l.isHatchManageSubscriptionEnabled = N),
      (l.isHatchAdditionalTokensEnabled = M),
      (l.isHatchScheduledTasksEnabled = w),
      (l.isHatchActivityEnabled = A),
      (l.isHatchGoalsEnabled = F),
      (l.isHatchVideoAvatarsEnabled = O),
      (l.isMuseNavBarEntryPointSelected = B),
      (l.getHatchNavBarAnimationMode = W));
  },
  98,
);
