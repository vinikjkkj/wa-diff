__d(
  "WAWebGroupsMexNotificationHandlers",
  [
    "WAWebMexCommunityOwnerUpdateNotificationHandler",
    "WAWebMexGroupPropertyUpdateNotificationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        NotificationGroupPropertyUpdate: (e = o(
          "WAWebMexGroupPropertyUpdateNotificationHandler",
        )).mexHandleGroupPropertyUpdate,
        NotificationGroupHiddenPropertyUpdate: e.mexHandleGroupPropertyUpdate,
        NotificationGroupSafetyCheckPropertyUpdate:
          e.mexHandleGroupPropertyUpdate,
        NotificationGroupMemberLinkPropertyUpdate:
          e.mexHandleGroupPropertyUpdate,
        NotificationGroupMemberShareGroupHistoryModePropertyUpdate:
          e.mexHandleGroupPropertyUpdate,
        NotificationGroupCustomReactionsPropertyUpdate:
          e.mexHandleGroupPropertyUpdate,
        NotificationGroupMembershipFormPropertyUpdate:
          e.mexHandleGroupPropertyUpdate,
        NotificationGroupAppealStatusUpdate: e.mexHandleGroupPropertyUpdate,
        NotificationCommunityOwnerUpdate: o(
          "WAWebMexCommunityOwnerUpdateNotificationHandler",
        ).mexHandleCommunityOwnerUpdate,
        NotificationGroupEncryptionKeysPropertyUpdate: u,
      };
    async function u() {}
    l.default = s;
  },
  98,
);
