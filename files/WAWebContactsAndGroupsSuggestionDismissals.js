__d(
  "WAWebContactsAndGroupsSuggestionDismissals",
  [
    "WAHashStringToNumber",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebEventEmitter",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "WAContactsAndGroupsDismissedSuggestions",
      s = "h:",
      u = new (r("WAWebEventEmitter"))();
    function c(e, t, n) {
      return d(e.id, t, n);
    }
    function d(e, t, n) {
      return h(R(e, t), n);
    }
    function m(e, t, n) {
      p(e.id, t, n);
    }
    function p(e, t, n) {
      y(R(e, t), n);
    }
    function _(e, t, n) {
      return h(e + ":" + t, n);
    }
    function f(e, t, n) {
      y(e + ":" + t, n);
    }
    function g(t) {
      var n = r("WAWebUserPrefsStore").getUser(e);
      if (!(n == null || typeof n != "object")) {
        var o = Object.entries(n).some(function (e) {
          var n = e[0],
            r = e[1];
          return !n.startsWith(s) || typeof r != "number" || !S(r, t);
        });
        o && r("WAWebUserPrefsStore").setUser(e, C(t));
      }
    }
    function h(e, t) {
      var n = b()[v(e)];
      return n != null && S(n, t);
    }
    function y(t, n) {
      var o = C(n);
      ((o[v(t)] = n),
        r("WAWebUserPrefsStore").setUser(e, o),
        u.trigger("change"));
    }
    function C(e) {
      var t = {};
      return (
        Object.entries(b()).forEach(function (n) {
          var r = n[0],
            o = n[1];
          S(o, e) && (t[r] = o);
        }),
        t
      );
    }
    function b() {
      var t = r("WAWebUserPrefsStore").getUser(e),
        n = {};
      return (
        t == null ||
          typeof t != "object" ||
          Object.entries(t).forEach(function (e) {
            var t = e[0],
              r = e[1];
            typeof r == "number" && (n[t.startsWith(s) ? t : v(t)] = r);
          }),
        n
      );
    }
    function v(e) {
      return "" + s + o("WAHashStringToNumber").hashStringToNumber(e);
    }
    function S(e, t) {
      return t - e < o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS;
    }
    function R(e, t) {
      return e.toString() + ":" + t;
    }
    ((l.groupSuggestionDismissals = u),
      (l.isGroupSuggestionDismissed = c),
      (l.isGroupSuggestionDismissedForChatId = d),
      (l.dismissGroupSuggestion = m),
      (l.dismissGroupSuggestionForChatId = p),
      (l.isAttentionItemDismissed = _),
      (l.dismissAttentionItem = f),
      (l.rewriteStoredDismissals = g));
  },
  98,
);
