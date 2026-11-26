__d(
  "WAWebGroupAdminHubOpenGroupChatAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminChats",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = n == null ? void 0 : n.drawerId,
        i = function () {
          return (
            o("WAWebChatCollection").ChatCollection.get(t.id) !== t ||
            !o("WAWebGroupAdminChats").isAdminGroupChat(t)
          );
        },
        l = function () {
          return (
            (a != null && (n == null ? void 0 : n.isCurrentDrawer(a)) !== !0) ||
            i()
          );
        };
      if (!l())
        try {
          var s =
            o("WAWebFrontendChatGetters").getActive(t) ||
            (await o("WAWebCmd").Cmd.openChatFromUnread({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .InfoDrawer,
              isSuperseded: l,
            }));
          if (
            !s ||
            a == null ||
            n == null ||
            (n.isCurrentDrawer(a) && !i() && !(await n.closeDrawer(a)))
          )
            return;
          n.getCurrentDrawerId() == null &&
            o("WAWebFrontendChatGetters").getActive(t) &&
            !i() &&
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-admin-hub] Failed to open the group chat",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("group-admin-hub-open-chat-failed");
        }
    }
    l.openGroupAdminHubChat = s;
  },
  98,
);
