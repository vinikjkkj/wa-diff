__d(
  "WAWebVoipPlaceholderUnreadRows",
  ["WAWebABProps", "WAWebAck", "WAWebMsgGetters", "WAWebMsgKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_init_chat_max_unread_message_count",
      );
      return t !== 0 && e >= t;
    }
    async function s(e, t, n, r) {
      if (r <= 0) return !1;
      var a = 0,
        i = !1;
      return (
        await c(e, t, function (e) {
          return o("WAWebMsgGetters").getIsUnreadType(e)
            ? e.id === n
              ? ((i = !0), !0)
              : d(e)
                ? !1
                : ((a += 1), a >= r)
            : !1;
        }),
        i
      );
    }
    async function u(e, t, n, r) {
      var a = 0,
        i = !1,
        l = !1;
      return (
        await c(e, t, function (e) {
          return e.id === n
            ? ((l = !0), !0)
            : o("WAWebMsgGetters").getIsUnreadType(e)
              ? d(e)
                ? ((i = !0), !0)
                : ((a += 1), a > r)
              : !1;
        }),
        l && !i
      );
    }
    function c(e, t, n) {
      return e.between(
        ["internalId"],
        t + "_/",
        t + "_g",
        { reverse: !0, shouldDecrypt: !1 },
        n,
      );
    }
    function d(e) {
      return (
        r("WAWebMsgKey").fromString(e.id).fromMe ||
        e.ack === o("WAWebAck").ACK.READ
      );
    }
    ((l.hasTooManyUnreadToWalk = e),
      (l.isAmongLastUnreadRows = s),
      (l.isUnreadSinceRow = u));
  },
  98,
);
