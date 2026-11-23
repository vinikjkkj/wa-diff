__d(
  "WAWebBackendClients",
  [
    "JSResourceForInteraction",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebBackendRuntimeWebDi").__setRef(
        "WAWebBackendClients",
      ),
      s = {
        WAAddonService: m(function () {
          return o("WAWebAddonServiceClient").addonServiceClient(d);
        }),
        WABlocklistService: m(function () {
          return o("WAWebBlocklistServiceClient").blocklistServiceClient(d);
        }),
        WAChatDeleteService: m(function () {
          return o("WAWebChatDeleteServiceClient").chatDeleteServiceClient(d);
        }),
        WAChatPinService: m(function () {
          return o("WAWebChatPinServiceClient").chatPinServiceClient(d);
        }),
        WAChatReadService: m(function () {
          return o("WAWebChatReadServiceClient").chatReadServiceClient(d);
        }),
        WAChatSettingsService: m(function () {
          return o("WAWebChatSettingsServiceClient").chatSettingsServiceClient(
            d,
          );
        }),
        WAChatStateService: m(function () {
          return o("WAWebChatStateServiceClient").chatStateServiceClient(d);
        }),
        WAChatStoreService: m(function () {
          return o("WAWebChatStoreServiceClient").chatStoreServiceClient(d);
        }),
        WACommunityService: m(function () {
          return o("WAWebCommunityServiceClient").communityServiceClient(d);
        }),
        WAContactQueryService: m(function () {
          return o("WAWebContactQueryServiceClient").contactQueryServiceClient(
            d,
          );
        }),
        WAContactStoreService: m(function () {
          return o("WAWebContactStoreServiceClient").contactStoreServiceClient(
            d,
          );
        }),
        WADisappearingModeService: m(function () {
          return o(
            "WAWebDisappearingModeServiceClient",
          ).disappearingModeServiceClient(d);
        }),
        WAGroupInviteService: m(function () {
          return o("WAWebGroupInviteServiceClient").groupInviteServiceClient(d);
        }),
        WAGroupLifecycleService: m(function () {
          return o(
            "WAWebGroupLifecycleServiceClient",
          ).groupLifecycleServiceClient(d);
        }),
        WAGroupMembershipRequestsService: m(function () {
          return o(
            "WAWebGroupMembershipRequestsServiceClient",
          ).groupMembershipRequestsServiceClient(d);
        }),
        WAGroupParticipantsService: m(function () {
          return o(
            "WAWebGroupParticipantsServiceClient",
          ).groupParticipantsServiceClient(d);
        }),
        WAGroupQueryService: m(function () {
          return o("WAWebGroupQueryServiceClient").groupQueryServiceClient(d);
        }),
        WAGroupSettingsService: m(function () {
          return o(
            "WAWebGroupSettingsServiceClient",
          ).groupSettingsServiceClient(d);
        }),
        WAGroupStoreService: m(function () {
          return o("WAWebGroupStoreServiceClient").groupStoreServiceClient(d);
        }),
        WALidMappingService: m(function () {
          return o("WAWebLidMappingServiceClient").lidMappingServiceClient(d);
        }),
        WAMediaDownloadService: m(function () {
          return o(
            "WAWebMediaDownloadServiceClient",
          ).mediaDownloadServiceClient(d);
        }),
        WAMediaUploadService: m(function () {
          return o("WAWebMediaUploadServiceClient").mediaUploadServiceClient(d);
        }),
        WAMessageDeleteService: m(function () {
          return o(
            "WAWebMessageDeleteServiceClient",
          ).messageDeleteServiceClient(d);
        }),
        WAMessageQueryService: m(function () {
          return o("WAWebMessageQueryServiceClient").messageQueryServiceClient(
            d,
          );
        }),
        WAMessageSendService: m(function () {
          return o("WAWebMessageSendServiceClient").messageSendServiceClient(d);
        }),
        WAMessageStarService: m(function () {
          return o("WAWebMessageStarServiceClient").messageStarServiceClient(d);
        }),
        WAMessageStoreService: m(function () {
          return o("WAWebMessageStoreServiceClient").messageStoreServiceClient(
            d,
          );
        }),
        WAPeerDataService: m(function () {
          return o("WAWebPeerDataServiceClient").peerDataServiceClient(d);
        }),
        WAPollService: m(function () {
          return o("WAWebPollServiceClient").pollServiceClient(d);
        }),
        WAPresenceService: m(function () {
          return o("WAWebPresenceServiceClient").presenceServiceClient(d);
        }),
        WAPrivacyService: m(function () {
          return o("WAWebPrivacyServiceClient").privacyServiceClient(d);
        }),
        WAProfilePictureService: m(function () {
          return o(
            "WAWebProfilePictureServiceClient",
          ).profilePictureServiceClient(d);
        }),
        WAProfileService: m(function () {
          return o("WAWebProfileServiceClient").profileServiceClient(d);
        }),
        WAReactionService: m(function () {
          return o("WAWebReactionServiceClient").reactionServiceClient(d);
        }),
        WAReceiptService: m(function () {
          return o("WAWebReceiptServiceClient").receiptServiceClient(d);
        }),
        WARevokeService: m(function () {
          return o("WAWebRevokeServiceClient").revokeServiceClient(d);
        }),
        WAScheduledMessageService: m(function () {
          return o(
            "WAWebScheduledMessageServiceClient",
          ).scheduledMessageServiceClient(d);
        }),
        WASpamService: m(function () {
          return o("WAWebSpamServiceClient").spamServiceClient(d);
        }),
        WAStatusUpdatesService: m(function () {
          return o(
            "WAWebStatusUpdatesServiceClient",
          ).statusUpdatesServiceClient(d);
        }),
      };
    function u(e) {
      return s[e.id]();
    }
    function c() {
      e.preload();
    }
    async function d(t, n) {
      var r,
        o = (r = e.getModuleIfRequired()) != null ? r : await e.load();
      return o.run(t, n);
    }
    function m(e) {
      var t = null;
      return function () {
        return (t == null && (t = e()), t);
      };
    }
    ((l.client = u), (l.preloadRuntime = c));
  },
  98,
);
