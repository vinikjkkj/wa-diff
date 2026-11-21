__d(
  "WAWebInboundMsgChatKey",
  ["WAJids"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAJids").interpretAndValidateJid(e.toJid());
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          (e.jidType === "phoneUser" ||
            e.jidType === "lidUser" ||
            e.jidType === "msgrUser" ||
            e.jidType === "interopUser")
        ) {
          var t = e;
          return t.userJid;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.jidType === "bot"
        ) {
          var n = e;
          return n.botJid;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.jidType === "group"
        ) {
          var r = e;
          return r.groupJid;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.jidType === "status"
        ) {
          var o = e;
          return o.statusJid;
        }
        return null;
      })(t);
    }
    l.toInboundMsgChatKey = e;
  },
  98,
);
