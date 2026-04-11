__d(
  "WAWebNotifyForUtils",
  [
    "fbt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebNotifyForTypes",
    "WAWebQuotedMsgModelUtils",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = new Set();
    function u() {
      e.clear();
    }
    function c(e) {
      return "notifyFor_" + e;
    }
    function d(e) {
      var t = c(e),
        n = r("WAWebUserPrefsStore").getUser(t);
      if (typeof n == "string") {
        var a;
        return (a = o("WAWebNotifyForTypes").NotifyForType.cast(n)) != null
          ? a
          : o("WAWebNotifyForTypes").NotifyForType.ALL;
      }
      return o("WAWebNotifyForTypes").NotifyForType.ALL;
    }
    function m(e, t) {
      var n = c(e);
      r("WAWebUserPrefsStore").setUser(n, t);
    }
    function p(e) {
      return (
        o("WAWebMsgGetters").getHasMentionOfMe(e) ||
        o("WAWebMsgGetters").getHasMentionAll(e)
      );
    }
    function _(e) {
      return o("WAWebQuotedMsgModelUtils").isMyQuotedMsg(e);
    }
    function f(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (t == null) return !1;
      if (o("WAWebMsgGetters").getIsGroupMsg(e)) {
        var n = o("WAWebMsgGetters").getSender(e);
        if (n == null) return !1;
        var r = o("WAWebContactCollection").ContactCollection.get(n);
        return r != null && o("WAWebFrontendContactGetters").getIsMyContact(r);
      }
      return !1;
    }
    function g(e) {
      var t = o("WATimeUtils").unixTime(),
        n = e.lastChatEntryTimestamp;
      return n != null ? t - n <= o("WATimeUtils").WEEK_SECONDS : !1;
    }
    function h(e) {
      if (p(e) || _(e) || f(e)) return !0;
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return !!(t != null && g(t));
    }
    function y(t) {
      var n, a;
      if (
        !o("WAWebChatGetters").getIsGroup(t) ||
        !o("WAWebABProps").getABPropConfigValue("wa_web_notify_for")
      )
        return !1;
      var i = t.id.toString();
      if (e.has(i)) return !1;
      e.add(i);
      var l = c(i),
        s = r("WAWebUserPrefsStore").getUser(l);
      if (s != null) return !1;
      var u =
          (n =
            (a = t.groupMetadata) == null || (a = a.participants) == null
              ? void 0
              : a.length) != null
            ? n
            : 0,
        d = o("WAWebABProps").getABPropConfigValue(
          "notification_highlight_group_size_threshold",
        );
      return u < d
        ? !1
        : (m(i, o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS), !0);
    }
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      if (
        t == null ||
        !o("WAWebChatGetters").getIsGroup(t) ||
        !o("WAWebABProps").getABPropConfigValue("wa_web_notify_for")
      )
        return !1;
      y(t);
      var n = d(t.id.toString());
      return n === o("WAWebNotifyForTypes").NotifyForType.ALL
        ? !1
        : n === o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS
          ? !h(e)
          : !1;
    }
    function b(e) {
      return e === o("WAWebNotifyForTypes").NotifyForType.ALL
        ? s._(/*BTDS*/ "All")
        : e === o("WAWebNotifyForTypes").NotifyForType.HIGHLIGHTS
          ? s._(/*BTDS*/ "Highlights")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.clearAutoDefaultedChatsCache = u),
      (l.getNotifyForSetting = d),
      (l.saveNotifyForSetting = m),
      (l.maybeAutoDefaultToHighlightsForLargeGroup = y),
      (l.shouldMuteForNotifyForSetting = C),
      (l.getNotifyForLabel = b));
  },
  226,
);
