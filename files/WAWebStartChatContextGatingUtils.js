__d(
  "WAWebStartChatContextGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_start_chat_context_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_start_chat_context_ui_enabled",
      );
    }
    ((l.isStartChatContextEnabled = e), (l.isStartChatContextUiEnabled = s));
  },
  98,
);
