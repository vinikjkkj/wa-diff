__d(
  "MWChatMessagesOnChatTabLoadTracker",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = {};
    function c(t) {
      return function (n) {
        var r = (e || (e = o("I64"))).to_string(n);
        (r in t || (t[(e || (e = o("I64"))).to_string(n)] = 0),
          t[e.to_string(n)]++);
      };
    }
    var d = c(s),
      m = c(u);
    function p(e) {
      return s[e] || 0;
    }
    function _(e) {
      return u[e] || 0;
    }
    function f(e) {
      (delete s[e], delete u[e]);
    }
    ((l.trackSendFor = d),
      (l.trackReceivedFor = m),
      (l.getMessageSendsCountFor = p),
      (l.getMessageReceivesCountFor = _),
      (l.clearMessageCountsFor = f));
  },
  98,
);
