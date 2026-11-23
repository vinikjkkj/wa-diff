__d(
  "WAWebContactsAndGroupsNavigationAction",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactsAndGroupsLoadable",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebSideNavButtonsActivityModel",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react"));
    function m() {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        d.jsx(
          o("WAWebContactsAndGroupsLoadable").WAWebContactsAndGroupsLoadable,
          {},
        ),
        {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          focusOnUnMount: !0,
          transition: "pop-drawer-fast",
        },
      );
    }
    function p() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function _(e) {
      (o("WAWebSideNavButtonsActivityModel").setLastActiveChat(null),
        p(),
        o("WAWebSideNavButtonsActivityModel").setLastActiveChat(
          e.id.toString(),
        ));
    }
    async function f(t) {
      var n = await o("WAWebCmd")
        .Cmd.openChatFromUnread({
          chat: t,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab,
        })
        .catch(function (t) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "openChatFromContactsAndGroups: opening the chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
            !1
          );
        });
      return (
        n && (_(t), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t)),
        n
      );
    }
    async function g(e, t) {
      var n = await o("WAWebCmd")
        .Cmd.openChatAt({
          chat: e,
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab,
          msgContext: o("WAWebChatMessageSearch").getSearchContext({
            chat: e,
            msgKey: t,
          }),
        })
        .catch(function (e) {
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "openChatAtMsgFromContactsAndGroups: opening the chat failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            !1
          );
        });
      return (n && _(e), n);
    }
    async function h(e, t) {
      var n = await e.catch(function (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "closeAfterNewGroupFromContactsAndGroups: creating the group failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      });
      n != null &&
        (t(n),
        o("WAWebSideNavButtonsActivityModel").setLastActiveChat(n.toString()),
        p());
    }
    ((l.openContactsAndGroups = m),
      (l.closeContactsAndGroups = p),
      (l.closeContactsAndGroupsOnOpenedChat = _),
      (l.openChatFromContactsAndGroups = f),
      (l.openChatAtMsgFromContactsAndGroups = g),
      (l.closeAfterNewGroupFromContactsAndGroups = h));
  },
  98,
);
