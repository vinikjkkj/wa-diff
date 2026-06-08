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
      return o("WAWebABProps").getABPropConfigValue("hide_auto_quotes_on_web");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_follow_up_reply_icon",
      );
    }
    function d(e) {
      return !o("WAWebChatGetters").getIsUser(e) &&
        !o("WAWebChatGetters").getIsGroup(e)
        ? !1
        : !o("WAWebChatGetters").getIsBot(e);
    }
    function m(t) {
      if (!d(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_ONLY || n === e.LABEL_AND_CONTEXT_MENU;
    }
    function p(t) {
      if (!d(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_AND_CONTEXT_MENU || n === e.CONTEXT_MENU_ONLY;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_is_composer_enabled",
      );
    }
    function f() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "view_replies_with_threadid_enabled",
        )
      );
    }
    ((l.ViewRepliesEntryPoint = e),
      (l.isViewRepliesInfraEnabled = s),
      (l.shouldHideAutoQuote = u),
      (l.isFollowUpReplyEnabled = c),
      (l.isViewRepliesSupportedChat = d),
      (l.isViewRepliesEntryPointEnabled = m),
      (l.isViewRepliesContextMenuEnabled = p),
      (l.isViewRepliesComposerEnabled = _),
      (l.isViewRepliesThreadIdEnabled = f));
  },
  98,
);
