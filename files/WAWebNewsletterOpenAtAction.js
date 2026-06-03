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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatEntryPoint,
            n = e.newsletterJid,
            a = e.onMessageDeleted,
            i = e.onMessageNotFound,
            l = e.serverId,
            u = r("WAWebNewsletterCollection").get(n);
          if (u == null) return !1;
          var c = p(u, l);
          if (c != null)
            return d({
              chat: u,
              msg: c,
              chatEntryPoint: t,
              onMessageDeleted: a,
            });
          var m = yield o("WAWebNewsletterDBUtils").getMessageByServerId(l, n);
          if (m == null) {
            var _ = yield o(
              "WAWebNewsletterGetMessagesJob",
            ).getNewsletterMessages(n, 1, { after: l - 1 });
            m = _.msgs[0];
          }
          if (m == null) {
            var f = yield o("WAWebCmd").Cmd.openChatBottom({
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
          var g = o("WAWebMsgCollection").MsgCollection.gadd(m);
          return d({ chat: u, msg: g, chatEntryPoint: t, onMessageDeleted: a });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.chatEntryPoint,
            r = e.msg,
            a = e.onMessageDeleted;
          if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED && a != null) {
            var i = yield o("WAWebCmd").Cmd.openChatBottom({
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = e.getAllMsgs();
      return n.find(function (e) {
        return e.serverId === t;
      });
    }
    l.openNewsletterAt = u;
  },
  98,
);
