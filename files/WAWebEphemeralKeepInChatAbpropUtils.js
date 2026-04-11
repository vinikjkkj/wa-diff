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
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "supports_keep_in_chat_in_cag",
      );
    }
    ((l.getUndoKeepInChatExpiration = e), (l.isKeepInChatInCAGEnabled = s));
  },
  98,
);
