__d(
  "WAWebBackendClients",
  [
    "WAWebAddonServiceClient",
    "WAWebBlocklistServiceClient",
    "WAWebChatDeleteServiceClient",
    "WAWebChatPinServiceClient",
    "WAWebChatReadServiceClient",
    "WAWebChatSettingsServiceClient",
    "WAWebChatStateServiceClient",
    "WAWebChatStoreServiceClient",
    "WAWebCommunityServiceClient",
    "WAWebContactQueryServiceClient",
    "WAWebContactStoreServiceClient",
    "WAWebDisappearingModeServiceClient",
    "WAWebGroupInviteServiceClient",
    "WAWebGroupLifecycleServiceClient",
    "WAWebGroupMembershipRequestsServiceClient",
    "WAWebGroupParticipantsServiceClient",
    "WAWebGroupQueryServiceClient",
    "WAWebGroupSettingsServiceClient",
    "WAWebGroupStoreServiceClient",
    "WAWebLidMappingServiceClient",
    "WAWebMediaDownloadServiceClient",
    "WAWebMediaUploadServiceClient",
    "WAWebMessageDeleteServiceClient",
    "WAWebMessageQueryServiceClient",
    "WAWebMessageSendServiceClient",
    "WAWebMessageStarServiceClient",
    "WAWebMessageStoreServiceClient",
    "WAWebPeerDataServiceClient",
    "WAWebPollServiceClient",
    "WAWebPresenceServiceClient",
    "WAWebPrivacyServiceClient",
    "WAWebProfilePictureServiceClient",
    "WAWebProfileServiceClient",
    "WAWebReactionServiceClient",
    "WAWebReceiptServiceClient",
    "WAWebRevokeServiceClient",
    "WAWebScheduledMessageServiceClient",
    "WAWebSpamServiceClient",
    "WAWebStatusUpdatesServiceClient",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("WAWebBackendRuntimeWebDi").__setRef(
        "WAWebBackendClients",
      ),
      s = {
        WAAddonService: d(function () {
          return o("WAWebAddonServiceClient").addonServiceClient(c);
        }),
        WABlocklistService: d(function () {
          return o("WAWebBlocklistServiceClient").blocklistServiceClient(c);
        }),
        WAChatDeleteService: d(function () {
          return o("WAWebChatDeleteServiceClient").chatDeleteServiceClient(c);
        }),
        WAChatPinService: d(function () {
          return o("WAWebChatPinServiceClient").chatPinServiceClient(c);
        }),
        WAChatReadService: d(function () {
          return o("WAWebChatReadServiceClient").chatReadServiceClient(c);
        }),
        WAChatSettingsService: d(function () {
          return o("WAWebChatSettingsServiceClient").chatSettingsServiceClient(
            c,
          );
        }),
        WAChatStateService: d(function () {
          return o("WAWebChatStateServiceClient").chatStateServiceClient(c);
        }),
        WAChatStoreService: d(function () {
          return o("WAWebChatStoreServiceClient").chatStoreServiceClient(c);
        }),
        WACommunityService: d(function () {
          return o("WAWebCommunityServiceClient").communityServiceClient(c);
        }),
        WAContactQueryService: d(function () {
          return o("WAWebContactQueryServiceClient").contactQueryServiceClient(
            c,
          );
        }),
        WAContactStoreService: d(function () {
          return o("WAWebContactStoreServiceClient").contactStoreServiceClient(
            c,
          );
        }),
        WADisappearingModeService: d(function () {
          return o(
            "WAWebDisappearingModeServiceClient",
          ).disappearingModeServiceClient(c);
        }),
        WAGroupInviteService: d(function () {
          return o("WAWebGroupInviteServiceClient").groupInviteServiceClient(c);
        }),
        WAGroupLifecycleService: d(function () {
          return o(
            "WAWebGroupLifecycleServiceClient",
          ).groupLifecycleServiceClient(c);
        }),
        WAGroupMembershipRequestsService: d(function () {
          return o(
            "WAWebGroupMembershipRequestsServiceClient",
          ).groupMembershipRequestsServiceClient(c);
        }),
        WAGroupParticipantsService: d(function () {
          return o(
            "WAWebGroupParticipantsServiceClient",
          ).groupParticipantsServiceClient(c);
        }),
        WAGroupQueryService: d(function () {
          return o("WAWebGroupQueryServiceClient").groupQueryServiceClient(c);
        }),
        WAGroupSettingsService: d(function () {
          return o(
            "WAWebGroupSettingsServiceClient",
          ).groupSettingsServiceClient(c);
        }),
        WAGroupStoreService: d(function () {
          return o("WAWebGroupStoreServiceClient").groupStoreServiceClient(c);
        }),
        WALidMappingService: d(function () {
          return o("WAWebLidMappingServiceClient").lidMappingServiceClient(c);
        }),
        WAMediaDownloadService: d(function () {
          return o(
            "WAWebMediaDownloadServiceClient",
          ).mediaDownloadServiceClient(c);
        }),
        WAMediaUploadService: d(function () {
          return o("WAWebMediaUploadServiceClient").mediaUploadServiceClient(c);
        }),
        WAMessageDeleteService: d(function () {
          return o(
            "WAWebMessageDeleteServiceClient",
          ).messageDeleteServiceClient(c);
        }),
        WAMessageQueryService: d(function () {
          return o("WAWebMessageQueryServiceClient").messageQueryServiceClient(
            c,
          );
        }),
        WAMessageSendService: d(function () {
          return o("WAWebMessageSendServiceClient").messageSendServiceClient(c);
        }),
        WAMessageStarService: d(function () {
          return o("WAWebMessageStarServiceClient").messageStarServiceClient(c);
        }),
        WAMessageStoreService: d(function () {
          return o("WAWebMessageStoreServiceClient").messageStoreServiceClient(
            c,
          );
        }),
        WAPeerDataService: d(function () {
          return o("WAWebPeerDataServiceClient").peerDataServiceClient(c);
        }),
        WAPollService: d(function () {
          return o("WAWebPollServiceClient").pollServiceClient(c);
        }),
        WAPresenceService: d(function () {
          return o("WAWebPresenceServiceClient").presenceServiceClient(c);
        }),
        WAPrivacyService: d(function () {
          return o("WAWebPrivacyServiceClient").privacyServiceClient(c);
        }),
        WAProfilePictureService: d(function () {
          return o(
            "WAWebProfilePictureServiceClient",
          ).profilePictureServiceClient(c);
        }),
        WAProfileService: d(function () {
          return o("WAWebProfileServiceClient").profileServiceClient(c);
        }),
        WAReactionService: d(function () {
          return o("WAWebReactionServiceClient").reactionServiceClient(c);
        }),
        WAReceiptService: d(function () {
          return o("WAWebReceiptServiceClient").receiptServiceClient(c);
        }),
        WARevokeService: d(function () {
          return o("WAWebRevokeServiceClient").revokeServiceClient(c);
        }),
        WAScheduledMessageService: d(function () {
          return o(
            "WAWebScheduledMessageServiceClient",
          ).scheduledMessageServiceClient(c);
        }),
        WASpamService: d(function () {
          return o("WAWebSpamServiceClient").spamServiceClient(c);
        }),
        WAStatusUpdatesService: d(function () {
          return o(
            "WAWebStatusUpdatesServiceClient",
          ).statusUpdatesServiceClient(c);
        }),
      };
    function u(e) {
      return s[e.id]();
    }
    async function c(t, n) {
      var r,
        o = (r = e.getModuleIfRequired()) != null ? r : await e.load();
      return o.run(t, n);
    }
    function d(e) {
      var t = null;
      return function () {
        return (t == null && (t = e()), t);
      };
    }
    l.client = u;
  },
  98,
);
