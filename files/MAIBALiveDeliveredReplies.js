__d(
  "MAIBALiveDeliveredReplies",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 500,
      l = new Map();
    function s(e, t) {
      return e == null || e === "" || t == null || t === ""
        ? null
        : e + "\0" + t;
    }
    function u(t, n) {
      var r = s(t, n);
      if (!(r == null || l.has(r))) {
        if (l.size >= e) {
          var o = l.keys().next();
          o.done !== !0 && l.delete(o.value);
        }
        l.set(r, new Set());
      }
    }
    function c(e, t) {
      var n = s(e, t);
      return n != null && l.has(n);
    }
    function d(e, t, n) {
      var r = s(e, t),
        o = r == null ? null : l.get(r);
      return o == null || o.has(n) ? !1 : (o.add(n), !0);
    }
    function m() {
      l.clear();
    }
    ((i.markMAIBAReplyDeliveredLive = u),
      (i.isMAIBAReplyDeliveredLive = c),
      (i.claimMAIBALiveReplyToolCall = d),
      (i.resetMAIBALiveDeliveredRepliesForTesting = m));
  },
  66,
);
