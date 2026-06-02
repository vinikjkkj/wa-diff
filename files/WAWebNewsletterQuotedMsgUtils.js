__d(
  "WAWebNewsletterQuotedMsgUtils",
  [
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      if (t != null) return !0;
      var n = await o("WAWebSchemaMessage")
        .getMessageTable()
        .get(e.toString(), !1);
      return n != null;
    }
    async function s(t) {
      if (!o("WAWebMsgGetters").getIsNewsletterMsg(t))
        return {
          quotedMsgKey: t.id,
          msgInStore: o("WAWebMsgCollection").MsgCollection.get(t.id),
        };
      var n = t.id,
        a = n.id,
        i = n.remote,
        l = new (r("WAWebMsgKey"))({ id: a, remote: i, fromMe: !0 }),
        s = await e(l);
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
    }
    l.getMsgDetailsForSearch = s;
  },
  98,
);
