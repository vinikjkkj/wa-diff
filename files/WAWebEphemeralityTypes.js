__d(
  "WAWebEphemeralityTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        ChangedInChat: "chat",
        InitiatedByMe: "me",
        InitiatedByOther: "other",
        BizUpgradeFbHosting: "biz_upgrade_fb_hosting",
      }),
      l = n("$InternalEnum")({
        Unknown: "unknown",
        ChatSettings: "chat_settings",
        AccountSettings: "account_settings",
        BulkChange: "bulk_change",
        BizSupportFbHosting: "biz_supports_fb_hosting",
        UnknownGroups: "unknown_groups",
      });
    ((i.DisappearingModeInitiator = e), (i.DisappearingModeTrigger = l));
  },
  66,
);
