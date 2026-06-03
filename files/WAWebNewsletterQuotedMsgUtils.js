__d(
  "WAWebNewsletterQuotedMsgUtils",
  [
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e);
          if (t != null) return !0;
          var n = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.toString(), !1);
          return n != null;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebMsgGetters").getIsNewsletterMsg(t))
            return {
              quotedMsgKey: t.id,
              msgInStore: o("WAWebMsgCollection").MsgCollection.get(t.id),
            };
          var n = t.id,
            a = n.id,
            i = n.remote,
            l = new (r("WAWebMsgKey"))({ id: a, remote: i, fromMe: !0 }),
            s = yield e(l);
          if (s)
            return {
              quotedMsgKey: l,
              msgInStore: o("WAWebMsgCollection").MsgCollection.get(l),
            };
          var u = new (r("WAWebMsgKey"))({ id: a, remote: i, fromMe: !1 });
          return {
            quotedMsgKey: u,
            msgInStore: o("WAWebMsgCollection").MsgCollection.get(u),
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.getMsgDetailsForSearch = u;
  },
  98,
);
