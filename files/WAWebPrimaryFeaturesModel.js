__d(
  "WAWebPrimaryFeaturesModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.features = o("WAWebBaseModel").prop()),
          (t.ddmSettings = o("WAWebBaseModel").prop(!1)),
          (t.clearAndDeleteChatSync = o("WAWebBaseModel").prop(!1)),
          (t.viewOnceSpReceiver = o("WAWebBaseModel").prop(!1)),
          (t.recentSticker = o("WAWebBaseModel").prop(!1)),
          (t.favoriteSticker = o("WAWebBaseModel").prop(!1)),
          (t.linkPreview = o("WAWebBaseModel").prop(!1)),
          (t.hqLinkPreview = o("WAWebBaseModel").prop(!1)),
          (t.pollCreationInCags = o("WAWebBaseModel").prop(!1)),
          (t.newsletter = o("WAWebBaseModel").prop(!1)),
          (t.externalWebBetaOptIn = o("WAWebBaseModel").prop(!1)),
          (t.historySyncOnDemand = o("WAWebBaseModel").prop(!1)),
          (t.extendedHistorySyncOnDemand = o("WAWebBaseModel").prop(!1)),
          (t.completeHistorySyncOnDemand = o("WAWebBaseModel").prop(!1)),
          (t.webLinkPreviewNseSupport = o("WAWebBaseModel").prop(!1)),
          (t.messagePlaceholderResendNseSupport = o("WAWebBaseModel").prop(!1)),
          (t.isPrimaryBetaBuild = o("WAWebBaseModel").prop(!1)),
          (t.primaryCampaignIdInHistorySyncSupport =
            o("WAWebBaseModel").prop(!1)),
          (t.contactManagement = o("WAWebBaseModel").prop(!1)),
          (t.paymentInfoSyncSupport = o("WAWebBaseModel").prop(!1)),
          (t.customPaymentMethodsSyncSupport = o("WAWebBaseModel").prop(!1)),
          (t.merchantPaymentPartnerSyncSupport = o("WAWebBaseModel").prop(!1)),
          (t.paymentTosSyncSupport = o("WAWebBaseModel").prop(!1)),
          (t.companionLidContactChangeEnabled = o("WAWebBaseModel").prop(!1)),
          (t.aiBotIntegrationEnabled = o("WAWebBaseModel").prop(!1)),
          (t.isContactsBackupOn = o("WAWebBaseModel").prop(!1)),
          (t.primaryHasAddressbookPermission = o("WAWebBaseModel").prop(!1)),
          (t.primaryHasAgreedToNativeContactsNux =
            o("WAWebBaseModel").prop(!1)),
          (t.isAccountIntegrityStatePending = o("WAWebBaseModel").prop(!1)),
          (t.isAccountIntegrityStateTimelock = o("WAWebBaseModel").prop(!1)),
          (t.isGalaxyFlowCompanionSyncSupported = o("WAWebBaseModel").prop(!1)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setPrimaryFeatures = function (t) {
          this.features = t;
          var e = new Set(t);
          ((this.ddmSettings = e.has("ddm_settings")),
            (this.clearAndDeleteChatSync = e.has("clear_and_delete_chat_sync")),
            (this.viewOnceSpReceiver = e.has("vo_sp_receiver")),
            (this.recentSticker = e.has("recent_sticker")),
            (this.favoriteSticker = e.has("favorite_sticker")),
            (this.linkPreview = e.has("link_preview")),
            (this.hqLinkPreview = e.has("link_preview_hq_thumbnail")),
            (this.pollCreationInCags = e.has("poll_creation_cag")),
            (this.newsletter = e.has("newsletter")),
            (this.externalWebBetaOptIn = e.has("external_web_beta_opt_in")),
            (this.historySyncOnDemand = e.has("history_sync_on_demand")),
            (this.extendedHistorySyncOnDemand = e.has(
              "is_extended_history_sync_on_demand_enabled",
            )),
            (this.completeHistorySyncOnDemand = e.has(
              "is_complete_history_sync_on_demand_enabled",
            )),
            (this.webLinkPreviewNseSupport = e.has(
              "web_link_preview_nse_support",
            )),
            (this.messagePlaceholderResendNseSupport = e.has(
              "message_placeholder_resend_nse_support",
            )),
            (this.isPrimaryBetaBuild = e.has("is_primary_beta_build")),
            (this.primaryCampaignIdInHistorySyncSupport = e.has(
              "primary_campaign_id_in_history_sync_support",
            )),
            (this.contactManagement = e.has("contact_management")),
            (this.paymentInfoSyncSupport = e.has("payment_info_sync_support")),
            (this.customPaymentMethodsSyncSupport = e.has(
              "custom_payment_methods_sync_support",
            )),
            (this.isContactsBackupOn = e.has("is_contacts_backup_on")),
            (this.primaryHasAddressbookPermission = e.has(
              "primary_has_addressbook_permission",
            )),
            (this.primaryHasAgreedToNativeContactsNux = e.has(
              "primary_has_agreed_to_native_contacts_nux",
            )),
            (this.isAccountIntegrityStatePending = e.has(
              "is_account_integrity_state_pending",
            )),
            (this.isAccountIntegrityStateTimelock = e.has(
              "is_account_integrity_state_timelock",
            )),
            (this.merchantPaymentPartnerSyncSupport = e.has(
              "merchant_payment_partner_sync_support",
            )),
            (this.paymentTosSyncSupport = e.has("payment_tos_sync_support")),
            (this.isGalaxyFlowCompanionSyncSupported = e.has(
              "is_galaxy_flow_companion_sync_supported",
            )),
            (this.companionLidContactChangeEnabled = e.has(
              "companion_lid_contact_change_enabled",
            )),
            (this.aiBotIntegrationEnabled = e.has(
              "ai_bot_integration_enabled",
            )));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "primaryFeatures";
    var s = o("WAWebBaseModel").defineModel(e),
      u = new s({ id: "1" });
    l.PrimaryFeatures = u;
  },
  98,
);
