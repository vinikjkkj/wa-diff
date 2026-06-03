__d(
  "WAWebThreadsGating",
  ["WAWebABProps", "WAWebChatGetters", "justknobx"],
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
      return (
        r("justknobx")._("3927") &&
        o("WAWebABProps").getABPropConfigValue(
          "web_thread_loading_infra_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_follow_up_reply_icon",
      );
    }
    function m(e) {
      return !o("WAWebChatGetters").getIsUser(e) &&
        !o("WAWebChatGetters").getIsGroup(e)
        ? !1
        : !o("WAWebChatGetters").getIsBot(e);
    }
    function p(t) {
      if (!m(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_ONLY || n === e.LABEL_AND_CONTEXT_MENU;
    }
    function _(t) {
      if (!m(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_AND_CONTEXT_MENU || n === e.CONTEXT_MENU_ONLY;
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_is_composer_enabled",
      );
    }
    function g() {
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
      (l.isThreadLoadingInfraEnabled = c),
      (l.isFollowUpReplyEnabled = d),
      (l.isViewRepliesSupportedChat = m),
      (l.isViewRepliesEntryPointEnabled = p),
      (l.isViewRepliesContextMenuEnabled = _),
      (l.isViewRepliesComposerEnabled = f),
      (l.isViewRepliesThreadIdEnabled = g));
  },
  98,
);
