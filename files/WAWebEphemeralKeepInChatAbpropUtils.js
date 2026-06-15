__d(
  "WAWebEphemeralKeepInChatAbpropUtils",
  ["WAWebABProps", "WAWebRevokeMsgConstants"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "keep_in_chat_undo_duration_limit",
        ) || o("WAWebRevokeMsgConstants").REVOKE_WINDOW
      );
    }
    l.getUndoKeepInChatExpiration = e;
  },
  98,
);
