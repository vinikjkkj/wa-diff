__d(
  "WAWebProtobufsProtocol.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        UNKNOWN: 0,
        CHAT_SETTING: 1,
        BIZ_SUPPORTS_FB_HOSTING: 2,
        UNKNOWN_GROUP: 3,
      }),
      u = {},
      c = {};
    ((u.name = "MessageKey"),
      (u.internalSpec = {
        remoteJid: [1, (e = o("WAProtoConst")).TYPES.STRING],
        fromMe: [2, e.TYPES.BOOL],
        id: [3, e.TYPES.STRING],
        participant: [4, e.TYPES.STRING],
      }),
      (c.internalDefaults = { trigger: s.UNKNOWN }),
      (c.name = "LimitSharing"),
      (c.internalSpec = {
        sharingLimited: [1, e.TYPES.BOOL],
        trigger: [2, e.TYPES.ENUM, s],
        limitSharingSettingTimestamp: [3, e.TYPES.INT64],
        initiatedByMe: [4, e.TYPES.BOOL],
      }),
      (l.LimitSharing$Trigger = s),
      (l.MessageKeySpec = u),
      (l.LimitSharingSpec = c));
  },
  98,
);
