__d(
  "WAWebThreadsGating",
  ["WAWebABProps", "WAWebChatGetters"],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
      DISABLED: 0,
      LABEL_ONLY: 1,
      LABEL_AND_CONTEXT_MENU: 2,
      CONTEXT_MENU_ONLY: 3,
    });
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_follow_up_reply_icon",
      );
    }
    function u(e) {
      return !o("WAWebChatGetters").getIsUser(e) &&
        !o("WAWebChatGetters").getIsGroup(e)
        ? !1
        : !o("WAWebChatGetters").getIsBot(e);
    }
    function c(t) {
      if (!u(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_ONLY || n === e.LABEL_AND_CONTEXT_MENU;
    }
    function d(t) {
      if (!u(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_AND_CONTEXT_MENU || n === e.CONTEXT_MENU_ONLY;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_is_composer_enabled",
      );
    }
    ((l.ViewRepliesEntryPoint = e),
      (l.isFollowUpReplyEnabled = s),
      (l.isViewRepliesSupportedChat = u),
      (l.isViewRepliesEntryPointEnabled = c),
      (l.isViewRepliesContextMenuEnabled = d),
      (l.isViewRepliesComposerEnabled = m));
  },
  98,
);
