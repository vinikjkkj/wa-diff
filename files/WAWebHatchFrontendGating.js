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
      return U({
        abProp: "ai_hatch_approval_history_enabled",
        primaryFeature: "ai_hatch_approval_history_enabled",
      });
    }
    function c() {
      return U({
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
        U({
          abProp: "ai_hatch_connectors_enabled",
          primaryFeature: "ai_hatch_connectors_enabled",
        })
      );
    }
    async function m() {
      if (!d()) return !1;
      var e = await r(
        "WAWebHatchLinkedStatusManager",
      ).fetchConfirmedLinkedStatusStateIfUnknown();
      return e === "linked";
    }
    function p() {
      return (
        d() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_connectors_new_ui_enabled",
        )
      );
    }
    function _() {
      return U({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    var f = "hatch-peer-invite-in-chat";
    function g() {
      return (
        _() &&
        !y() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_peer_pairing_card_enabled",
        )
      );
    }
    function h() {
      return (
        g() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_peer_connections_send_enabled",
        )
      );
    }
    function y() {
      try {
        return (
          (r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(f)) === "off"
        );
      } catch (e) {
        return !1;
      }
    }
    function C() {
      return U({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function b() {
      return U({ abProp: "ai_hatch_cvm_enabled" });
    }
    function v() {
      return U({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function S() {
      return U({
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
        U({
          abProp: "ai_hatch_browser_enabled",
          primaryFeature: "ai_hatch_browser_enabled",
        })
      );
    }
    function L(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        U({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function E(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        U({
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
        U({
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
      return U({
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
        U({
          abProp: "ai_hatch_space_enabled",
          primaryFeature: "ai_hatch_space_enabled",
        })
      );
    }
    function x() {
      return U({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function $() {
      return U({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function P() {
      return U({
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
      return U({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function A() {
      return U({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function F() {
      return A() && r("gkx")("16539");
    }
    function O() {
      return U({
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
    function W() {
      if (
        o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant.cast(
          o(
            "WAWebMuseDefaultAssistantVariantSource",
          ).readMuseDefaultAssistantVariantSource(),
        ) !==
        o("WAWebMuseDefaultAssistantVariant").MuseDefaultAssistantVariant
          .MuseSeparate
      )
        return !1;
      var e =
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked";
      return (
        o("WAWebBotGating").isBotShortcutEntryPointEnabled() &&
        (e ||
          (o("WAWebHatchUrl").getHatchJoinUrl() != null &&
            !o("WAWebMuseCtaLinkOverride").isTryMuseKillSwitchOn())) &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_fab_enabled") &&
        (e ||
          o("WAWebABProps").getABPropConfigValue(
            "ai_hatch_web_fab_sign_up_enabled",
          ))
      );
    }
    function q(e) {
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
    function U(t) {
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
      (l.isHatchConnectorsNewUiEnabled = p),
      (l.isHatchJarvisRendererEnabled = _),
      (l.isHatchPeerPairingCardEnabled = g),
      (l.isHatchPeerConnectionsSendEnabled = h),
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
      (l.isMuseDualNavBarEntryPointSelected = W),
      (l.getHatchNavBarAnimationMode = q));
  },
  98,
);
