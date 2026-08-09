__d(
  "MAWJids",
  ["I64", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WAJids").createJidUtils({ platform: "msgr" }),
      u = s.toUserJid,
      c = function (n, r) {
        var t = (e || (e = o("I64"))).to_string(n);
        return r ? o("WAJids").toGroupJid(t) : u(t);
      };
    function d(e) {
      return c(e, !1);
    }
    function m(e) {
      return c(e, !0);
    }
    var p = function (n) {
      var t = o("WAJids").threadIdForChatJid(n);
      return (e || (e = o("I64"))).of_string(t);
    };
    function _(e) {
      return o("WAJids").unsafeCoerceToChatJid(e);
    }
    ((l.jidUtils = s),
      (l.toUserJid = u),
      (l.convertIntJidToChatJid = c),
      (l.convertIntJidToOneToOneChatJid = d),
      (l.convertIntJidToGroupJid = m),
      (l.convertChatJidToIntJid = p),
      (l.threadIdToChatJid = _));
  },
  98,
);
