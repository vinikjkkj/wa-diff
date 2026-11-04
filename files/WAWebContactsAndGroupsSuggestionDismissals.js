__d(
  "WAWebContactsAndGroupsSuggestionDismissals",
  [
    "WAWebContactsAndGroupsThisWeek",
    "WAWebEventEmitter",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "WAContactsAndGroupsDismissedSuggestions",
      s = new (r("WAWebEventEmitter"))();
    function u(e, t, n) {
      return p(h(e, t), n);
    }
    function c(e, t, n) {
      _(h(e, t), n);
    }
    function d(e, t, n) {
      return p(e + ":" + t, n);
    }
    function m(e, t, n) {
      _(e + ":" + t, n);
    }
    function p(e, t) {
      var n = f()[e];
      return n != null && g(n, t);
    }
    function _(t, n) {
      var o = {};
      (Object.entries(f()).forEach(function (e) {
        var t = e[0],
          r = e[1];
        g(r, n) && (o[t] = r);
      }),
        (o[t] = n),
        r("WAWebUserPrefsStore").setUser(e, o),
        s.trigger("change"));
    }
    function f() {
      var t = r("WAWebUserPrefsStore").getUser(e),
        n = {};
      return (
        t == null ||
          typeof t != "object" ||
          Object.entries(t).forEach(function (e) {
            var t = e[0],
              r = e[1];
            typeof r == "number" && (n[t] = r);
          }),
        n
      );
    }
    function g(e, t) {
      return t - e < o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS;
    }
    function h(e, t) {
      return e.id.toString() + ":" + t;
    }
    ((l.groupSuggestionDismissals = s),
      (l.isGroupSuggestionDismissed = u),
      (l.dismissGroupSuggestion = c),
      (l.isAttentionItemDismissed = d),
      (l.dismissAttentionItem = m));
  },
  98,
);
