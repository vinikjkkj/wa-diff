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
        "web_threads_infra_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_infra_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("hide_auto_quotes_on_web");
    }
    function d() {
      return (
        r("justknobx")._("3927") &&
        o("WAWebABProps").getABPropConfigValue(
          "web_thread_loading_infra_enabled",
        )
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_follow_up_reply_icon",
      );
    }
    function p(e) {
      return !o("WAWebChatGetters").getIsUser(e) &&
        !o("WAWebChatGetters").getIsGroup(e)
        ? !1
        : !o("WAWebChatGetters").getIsBot(e);
    }
    function _(t) {
      if (!p(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_ONLY || n === e.LABEL_AND_CONTEXT_MENU;
    }
    function f(t) {
      if (!p(t)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return n === e.LABEL_AND_CONTEXT_MENU || n === e.CONTEXT_MENU_ONLY;
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "view_replies_is_composer_enabled",
      );
    }
    function h() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "view_replies_with_threadid_enabled",
        )
      );
    }
    ((l.ViewRepliesEntryPoint = e),
      (l.isThreadsInfraEnabled = s),
      (l.isViewRepliesInfraEnabled = u),
      (l.shouldHideAutoQuote = c),
      (l.isThreadLoadingInfraEnabled = d),
      (l.isFollowUpReplyEnabled = m),
      (l.isViewRepliesSupportedChat = p),
      (l.isViewRepliesEntryPointEnabled = _),
      (l.isViewRepliesContextMenuEnabled = f),
      (l.isViewRepliesComposerEnabled = g),
      (l.isViewRepliesThreadIdEnabled = h));
  },
  98,
);
