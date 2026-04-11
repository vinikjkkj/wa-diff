__d(
  "WAWebThreadsGating",
  ["WAWebABProps", "WAWebChatGetters", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_threads_infra_enabled",
      );
    }
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
      if (
        (!o("WAWebChatGetters").getIsUser(e) &&
          !o("WAWebChatGetters").getIsGroup(e)) ||
        o("WAWebChatGetters").getIsBot(e)
      )
        return !1;
      var t = o("WAWebABProps").getABPropConfigValue(
        "view_replies_entry_point",
      );
      return t === 1 || t === 2;
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
    ((l.isThreadsInfraEnabled = e),
      (l.isViewRepliesInfraEnabled = s),
      (l.shouldHideAutoQuote = u),
      (l.isThreadLoadingInfraEnabled = c),
      (l.isFollowUpReplyEnabled = d),
      (l.isViewRepliesEntryPointEnabled = m),
      (l.isViewRepliesComposerEnabled = p),
      (l.isViewRepliesThreadIdEnabled = _));
  },
  98,
);
