__d(
  "MAIBALocalConversationStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l() {
      e.clear();
    }
    function s(t, n) {
      var r;
      if (t != null) {
        var o = (r = e.get(t)) != null ? r : new Set();
        (o.add(n), e.set(t, o));
      }
    }
    function u(t, n) {
      var r;
      return t == null || n == null
        ? !1
        : ((r = e.get(t)) == null ? void 0 : r.has(n)) === !0;
    }
    function c(t, n) {
      if (t != null) {
        var r = e.get(t);
        (r == null || r.delete(n),
          (r == null ? void 0 : r.size) === 0 && e.delete(t));
      }
    }
    ((i.clearAllMAIBALocalConversations = l),
      (i.registerMAIBALocalConversation = s),
      (i.hasMAIBALocalConversation = u),
      (i.unregisterMAIBALocalConversation = c));
  },
  66,
);
