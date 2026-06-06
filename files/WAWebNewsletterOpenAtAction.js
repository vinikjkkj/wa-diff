__d(
  "WAWebNewsletterOpenAtAction",
  [
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterErrorPopups.react",
    "WAWebNewsletterGetMessagesJob",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t = e.chatEntryPoint,
        n = e.newsletterJid,
        a = e.onMessageDeleted,
        i = e.onMessageNotFound,
        l = e.serverId,
        u = r("WAWebNewsletterCollection").get(n);
      if (u == null) return !1;
      var m = d(u, l);
      if (m != null)
        return c({ chat: u, msg: m, chatEntryPoint: t, onMessageDeleted: a });
      var p = await o("WAWebNewsletterDBUtils").getMessageByServerId(l, n);
      if (p == null) {
        var _ = await o("WAWebNewsletterGetMessagesJob").getNewsletterMessages(
          n,
          1,
          { after: l - 1 },
        );
        p = _.msgs[0];
      }
      if (p == null) {
        var f = await o("WAWebCmd").Cmd.openChatBottom({
          chat: u,
          chatEntryPoint: t,
        });
        return (
          i == null
            ? o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebNewsletterErrorPopups.react")
                    .NewsletterMessageNotFoundPopup,
                  { chat: u },
                ),
              )
            : i(),
          f
        );
      }
      var g = o("WAWebMsgCollection").MsgCollection.gadd(p);
      return c({ chat: u, msg: g, chatEntryPoint: t, onMessageDeleted: a });
    }
    async function c(e) {
      var t = e.chat,
        n = e.chatEntryPoint,
        r = e.msg,
        a = e.onMessageDeleted;
      if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED && a != null) {
        var i = await o("WAWebCmd").Cmd.openChatBottom({
          chat: t,
          chatEntryPoint: n,
        });
        return (a(), i);
      }
      return o("WAWebCmd").Cmd.openChatAt({
        chat: t,
        msgContext: o("WAWebChatMessageSearch").getSearchContext({
          chat: t,
          msgKey: r.id,
        }),
        chatEntryPoint: n,
      });
    }
    function d(e, t) {
      var n = e.getAllMsgs();
      return n.find(function (e) {
        return e.serverId === t;
      });
    }
    l.openNewsletterAt = u;
  },
  98,
);
