__d(
  "WAWebNewsletterMexNotificationHandlers",
  [
    "WAWebMexNewsletterAIContentNotificationHandler",
    "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
    "WAWebMexNewsletterAdminNotificationHandler",
    "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
    "WAWebMexNewsletterJoinHandler",
    "WAWebMexNewsletterLeaveHandler",
    "WAWebMexNewsletterMetadataUpdateNotificationHandler",
    "WAWebMexNewsletterMilestoneNotificationHandler",
    "WAWebMexNewsletterOwnerNotificationHandler",
    "WAWebMexNewsletterPaidPartnershipNotificationHandler",
    "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
    "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
    "WAWebMexNewsletterRoleChangeNotificationHandler",
    "WAWebMexNewsletterStateChangeHandler",
    "WAWebMexNewsletterUserSettingChangeHandler",
    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      NotificationNewsletterUserSettingChange: o(
        "WAWebMexNewsletterUserSettingChangeHandler",
      ).mexHandleNewsletterUserSettingChange,
      NotificationNewsletterJoin: o("WAWebMexNewsletterJoinHandler")
        .mexHandleNewsletterJoin,
      NotificationNewsletterLeave: o("WAWebMexNewsletterLeaveHandler")
        .mexHandleNewsletterLeave,
      NotificationNewsletterStateChange: o(
        "WAWebMexNewsletterStateChangeHandler",
      ).mexHandleNewsletterStateChange,
      NotificationNewsletterAdminProfileUpdate: o(
        "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
      ).mexHandleNewsletterAdminProfileUpdateNotification,
      NotificationNewsletterAdminMetadataUpdate: o(
        "WAWebMexNewsletterAdminNotificationHandler",
      ).mexHandleNewsletterAdminNotification,
      NotificationNewsletterOwnerUpdate: o(
        "WAWebMexNewsletterOwnerNotificationHandler",
      ).mexHandleNewsletterOwnerNotification,
      NotificationNewsletterUpdate: o(
        "WAWebMexNewsletterMetadataUpdateNotificationHandler",
      ).mexHandleNewsletterMetadataUpdate,
      NotificationNewsletterAdminPromote: o(
        "WAWebMexNewsletterRoleChangeNotificationHandler",
      ).mexHandleNewsletterRoleChange,
      NotificationNewsletterAdminDemote: o(
        "WAWebMexNewsletterRoleChangeNotificationHandler",
      ).mexHandleNewsletterRoleChange,
      NotificationNewsletterAdminInviteRevoke: o(
        "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
      ).handleNewsletterAdminInviteRevoke,
      NotificationNewsletterWamoSubStatusChange: o(
        "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
      ).mexHandleNewsletterWamoSubStatusChange,
      NewsletterResponseStateUpdate: o(
        "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
      ).mexHandleNewsletterQuestionsResponseStateChange,
      NotificationNewsletterBlockUser: o(
        "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
      ).mexHandleNewsletterQuestionsResponseBlocked,
      NotificationNewsletterPaidPartnershipUpdate: o(
        "WAWebMexNewsletterPaidPartnershipNotificationHandler",
      ).mexHandleNewsletterPaidPartnership,
      NotificationNewsletterAIContentUpdate: o(
        "WAWebMexNewsletterAIContentNotificationHandler",
      ).mexHandleNewsletterAIContent,
      NotificationNewsletterMilestone: o(
        "WAWebMexNewsletterMilestoneNotificationHandler",
      ).mexHandleNewsletterMilestone,
    };
    l.default = e;
  },
  98,
);
