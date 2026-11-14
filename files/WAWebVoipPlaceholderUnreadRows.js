__d(
  "WAWebVoipPlaceholderUnreadRows",
  [
    "WAWebABProps",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_init_chat_max_unread_message_count",
      );
      return t !== 0 && e >= t;
    }
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (r <= 0) return !1;
            var a = 0,
              i = !1;
            return (
              yield m(e, t, function (e) {
                return o("WAWebMsgGetters").getIsUnreadType(e)
                  ? e.id === n
                    ? ((i = !0), !0)
                    : p(e)
                      ? !1
                      : ((a += 1), a >= r)
                  : !1;
              }),
              i
            );
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = 0,
              i = !1,
              l = !1;
            return (
              yield m(e, t, function (e) {
                return e.id === n
                  ? ((l = !0), !0)
                  : o("WAWebMsgGetters").getIsUnreadType(e)
                    ? p(e)
                      ? ((i = !0), !0)
                      : ((a += 1), a > r)
                    : !1;
              }),
              l && !i
            );
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return e.between(
        ["internalId"],
        t + "_/",
        t + "_g",
        { reverse: !0, shouldDecrypt: !1 },
        n,
      );
    }
    function p(e) {
      return (
        r("WAWebMsgKey").fromString(e.id).fromMe ||
        e.ack === o("WAWebAck").ACK.READ
      );
    }
    ((l.hasTooManyUnreadToWalk = e),
      (l.isAmongLastUnreadRows = s),
      (l.isUnreadSinceRow = c));
  },
  98,
);
