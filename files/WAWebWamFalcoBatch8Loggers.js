__d(
  "WAWebWamFalcoBatch8Loggers",
  [
    "WamCatalogBizFalcoEvent",
    "WamChatFilterEventFalcoEvent",
    "WamChatLockDailyFalcoEvent",
    "WamChatPsaActionFalcoEvent",
    "WamCommunityTabActionFalcoEvent",
    "WamListUpdateUserJourneyFalcoEvent",
    "WamMdCriticalEventFalcoEvent",
    "WamMdLinkedDevicesWindowsXdrFalcoEvent",
    "WamMediaEngagementReceiveDailyFalcoEvent",
    "WamMediaPickerFalcoEvent",
    "WamMessageContextMenuActionsFalcoEvent",
    "WamMetaVerifiedUserActionFalcoEvent",
    "WamReactionActionsFalcoEvent",
    "WamSearchActionEventFalcoEvent",
    "WamSignCredentialFalcoEvent",
    "WamSmbDataSharingConsentSettingFalcoEvent",
    "WamSmbQpCallHealthFalcoEvent",
    "WamThreadInteractionDataAiFalcoEvent",
    "WamThreadInteractionDataBizFalcoEvent",
    "WamTsBitArrayFalcoEvent",
    "WamTsExternalFalcoEvent",
    "WamUsernameUnknownUserDisplayedFalcoEvent",
    "WamWaffleAclinkLinkedEventFalcoEvent",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = function () {
        return r("unsafeCast")(t);
      };
      if (n) {
        e.logCritical(o);
        return;
      }
      e.log(o);
    }
    function s(e) {
      switch (e) {
        case 1038:
        case 1616:
        case 1722:
        case 2242:
        case 2746:
        case 3184:
        case 3496:
        case 3572:
        case 3694:
        case 3974:
        case 4214:
        case 4272:
        case 4332:
        case 4574:
        case 4986:
        case 5308:
        case 5772:
        case 5958:
        case 6410:
        case 6464:
        case 6746:
        case 7804:
        case 8524:
          return !0;
        default:
          return !1;
      }
    }
    function u(t, n, o) {
      switch (t) {
        case 1038:
          return (e(r("WamMediaPickerFalcoEvent"), n, o), !0);
        case 1616:
          return (e(r("WamChatFilterEventFalcoEvent"), n, o), !0);
        case 1722:
          return (e(r("WamCatalogBizFalcoEvent"), n, o), !0);
        case 2242:
          return (e(r("WamSignCredentialFalcoEvent"), n, o), !0);
        case 2746:
          return (e(r("WamMdCriticalEventFalcoEvent"), n, o), !0);
        case 3184:
          return (e(r("WamReactionActionsFalcoEvent"), n, o), !0);
        case 3496:
          return (e(r("WamCommunityTabActionFalcoEvent"), n, o), !0);
        case 3572:
          return (e(r("WamChatPsaActionFalcoEvent"), n, o), !0);
        case 3694:
          return (e(r("WamMessageContextMenuActionsFalcoEvent"), n, o), !0);
        case 3974:
          return (e(r("WamSmbDataSharingConsentSettingFalcoEvent"), n, o), !0);
        case 4214:
          return (e(r("WamChatLockDailyFalcoEvent"), n, o), !0);
        case 4272:
          return (e(r("WamMediaEngagementReceiveDailyFalcoEvent"), n, o), !0);
        case 4332:
          return (e(r("WamTsBitArrayFalcoEvent"), n, o), !0);
        case 4574:
          return (e(r("WamTsExternalFalcoEvent"), n, o), !0);
        case 4986:
          return (e(r("WamMetaVerifiedUserActionFalcoEvent"), n, o), !0);
        case 5308:
          return (e(r("WamSearchActionEventFalcoEvent"), n, o), !0);
        case 5772:
          return (e(r("WamWaffleAclinkLinkedEventFalcoEvent"), n, o), !0);
        case 5958:
          return (e(r("WamListUpdateUserJourneyFalcoEvent"), n, o), !0);
        case 6410:
          return (e(r("WamThreadInteractionDataAiFalcoEvent"), n, o), !0);
        case 6464:
          return (e(r("WamThreadInteractionDataBizFalcoEvent"), n, o), !0);
        case 6746:
          return (e(r("WamSmbQpCallHealthFalcoEvent"), n, o), !0);
        case 7804:
          return (e(r("WamMdLinkedDevicesWindowsXdrFalcoEvent"), n, o), !0);
        case 8524:
          return (e(r("WamUsernameUnknownUserDisplayedFalcoEvent"), n, o), !0);
        default:
          return !1;
      }
    }
    ((l.hasLogger = s), (l.log = u));
  },
  98,
);
