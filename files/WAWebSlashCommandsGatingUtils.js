__d(
  "WAWebSlashCommandsGatingUtils",
  ["WAWebFrontendChatGetters", "WAWebSelfReminderGating"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(e) && o("WAWebSelfReminderGating").isSelfReminderEnabled();
    }
    function s(e) {
      return e.id.isGroup()
        ? !o("WAWebFrontendChatGetters").getIsCAG(e)
        : e.id.isRegularUser();
    }
    l.isSlashCommandsAvailableForChat = e;
  },
  98,
);
