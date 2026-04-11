__d(
  "useWAWebConversationPanelActionListeners",
  ["WAWebConversationPanelActions", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("useWAWebListener").useListener(
        o("WAWebConversationPanelActions").ConversationPanelActions,
        "conversation_panel_focus",
        e.onFocus,
      );
    }
    l.default = e;
  },
  98,
);
