__d(
  "WAWebMessageEditFlow.react",
  [
    "$InternalEnum",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMessageEditModal.react",
    "WAWebSendMessageEditAction",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Edit"]);
    function c(e) {
      var t = e.msg,
        n = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        a = o("useWAWebFlow").useFlow(u.Edit),
        i = a[0],
        l = a[1];
      if (l.step == null) return null;
      var c = function () {
          (o("WAWebCmd").Cmd.openChatAt({
            chat: n,
            msgContext: o("WAWebChatMessageSearch").getSearchContext({
              chat: n,
              msgKey: t.unsafe().id,
            }),
          }),
            l.end());
        },
        d;
      switch (l.step) {
        case u.Edit: {
          var m = function (n, r) {
            (o("WAWebSendMessageEditAction").sendMessageEdit(t.unsafe(), n, r),
              c());
          };
          d = s.jsx(r("WAWebMessageEditModal.react"), {
            msg: t,
            onConfirm: m,
            onCancel: function () {
              return l.end();
            },
          });
          break;
        }
      }
      return s.jsx(i, { flow: l, children: d });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
