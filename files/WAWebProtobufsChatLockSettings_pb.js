__d(
  "WAWebProtobufsChatLockSettings.pb",
  ["WAProtoConst", "WAWebProtobufsUserPassword.pb"],
  function (t, n, r, o, a, i, l) {
    var e = {};
    ((e.name = "ChatLockSettings"),
      (e.internalSpec = {
        hideLockedChats: [1, o("WAProtoConst").TYPES.BOOL],
        secretCode: [
          2,
          o("WAProtoConst").TYPES.MESSAGE,
          o("WAWebProtobufsUserPassword.pb").UserPasswordSpec,
        ],
      }),
      (l.ChatLockSettingsSpec = e));
  },
  98,
);
