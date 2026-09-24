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
        "view_replies_infra_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_follow_up_reply_icon",
      );
    }
    function c(e) {
      return !o("WAWebChatGetters").getIsUser(e) &&
        !o("WAWebChatGetters").getIsGroup(e)
        ? !1
        : !o("WAWebChatGetters").getIsBot(e);
    }
    function d(t) {
      if (!c(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_ONLY || n === e.LABEL_AND_CONTEXT_MENU;
    }
    function m(t) {
      if (!c(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_AND_CONTEXT_MENU || n === e.CONTEXT_MENU_ONLY;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_is_composer_enabled",
      );
    }
    function _() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "view_replies_with_threadid_enabled",
        )
      );
    }
    ((l.ViewRepliesEntryPoint = e),
      (l.isViewRepliesInfraEnabled = s),
      (l.isFollowUpReplyEnabled = u),
      (l.isViewRepliesSupportedChat = c),
      (l.isViewRepliesEntryPointEnabled = d),
      (l.isViewRepliesContextMenuEnabled = m),
      (l.isViewRepliesComposerEnabled = p),
      (l.isViewRepliesThreadIdEnabled = _));
  },
  98,
);
