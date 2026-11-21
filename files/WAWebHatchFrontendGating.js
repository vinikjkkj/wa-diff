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
      return U({
        abProp: "ai_hatch_response_ux_parity_enabled",
        primaryFeature: "ai_hatch_response_ux_parity_enabled",
      });
    }
    var g = "hatch-peer-invite-in-chat";
    function h() {
      return (
        f() &&
        !C() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_peer_pairing_card_enabled",
        )
      );
    }
    function y() {
      return (
        h() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_peer_connections_send_enabled",
        )
      );
    }
    function C() {
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
    function b() {
      return U({
        abProp: "ai_hatch_vm_capability_sync_enabled",
        primaryFeature: "ai_hatch_vm_capability_sync_enabled",
      });
    }
    function v() {
      return U({ abProp: "ai_hatch_cvm_enabled" });
    }
    function S() {
      return U({
        abProp: "ai_hatch_ideas_enabled",
        primaryFeature: "ai_hatch_ideas_enabled",
      });
    }
    function R() {
      return U({
        abProp: "ai_hatch_identity_enabled",
        primaryFeature: "ai_hatch_identity_enabled",
      });
    }
    function L(e) {
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
    function E(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        U({
          abProp: "ai_hatch_theme_enabled",
          primaryFeature: "ai_hatch_theme_enabled",
        })
      );
    }
    function k(e) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        U({
          abProp: "ai_hatch_avatar_working_video_enabled",
          primaryFeature: "ai_hatch_avatar_working_video_enabled",
        })
      );
    }
    function I() {
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
    function T() {
      return (
        I() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
          "ai_hatch_custom_connectors_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_custom_connectors_enabled",
        )
      );
    }
    function D() {
      return U({
        abProp: "ai_hatch_permission_enable",
        primaryFeature: "ai_hatch_permission_enable",
      });
    }
    function x() {
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
    function $() {
      return U({
        abProp: "ai_hatch_media_enabled",
        primaryFeature: "ai_hatch_media_enabled",
      });
    }
    function P() {
      return U({
        abProp: "ai_hatch_revoke_enabled",
        primaryFeature: "ai_hatch_revoke_enabled",
      });
    }
    function N() {
      return U({
        abProp: "ai_hatch_data_controls_enabled",
        primaryFeature: "ai_hatch_data_controls_enabled",
      });
    }
    function M() {
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
    function w() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_in_app_additional_tokens_enabled",
        )
      );
    }
    function A() {
      return U({
        abProp: "ai_hatch_scheduled_tasks_enabled",
        primaryFeature: "ai_hatch_scheduled_tasks_enabled",
      });
    }
    function F() {
      return U({
        abProp: "ai_hatch_activity_enabled",
        primaryFeature: "ai_hatch_activity_enabled",
      });
    }
    function O() {
      return F() && r("gkx")("16539");
    }
    function B() {
      return U({
        abProp: "ai_hatch_video_avatars_enabled",
        primaryFeature: "ai_hatch_video_avatars_enabled",
      });
    }
    function W() {
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
    function q(e) {
      return e || !B()
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
      (l.isHatchConnectorsNewUiEnabled = _),
      (l.isHatchJarvisRendererEnabled = f),
      (l.isHatchPeerPairingCardEnabled = h),
      (l.isHatchPeerConnectionsSendEnabled = y),
      (l.isHatchVmCapabilitySyncEnabled = b),
      (l.isHatchCvmEnabled = v),
      (l.isHatchIdeasEnabled = S),
      (l.isHatchIdentityEnabled = R),
      (l.isHatchBrowserEnabled = L),
      (l.isHatchThemeEnabled = E),
      (l.isHatchAvatarWorkingVideoEnabled = k),
      (l.isHatchSecureCredentialsEnabled = I),
      (l.isHatchCustomConnectorsEnabled = T),
      (l.isHatchPermissionsEnabled = D),
      (l.isHatchSpaceEnabled = x),
      (l.isHatchMediaEnabled = $),
      (l.isHatchRevokeEnabled = P),
      (l.isHatchDataControlsEnabled = N),
      (l.isHatchManageSubscriptionEnabled = M),
      (l.isHatchAdditionalTokensEnabled = w),
      (l.isHatchScheduledTasksEnabled = A),
      (l.isHatchActivityEnabled = F),
      (l.isHatchGoalsEnabled = O),
      (l.isHatchVideoAvatarsEnabled = B),
      (l.isMuseNavBarEntryPointSelected = W),
      (l.getHatchNavBarAnimationMode = q));
  },
  98,
);
