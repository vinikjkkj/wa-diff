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
    "asyncToGeneratorRuntime",
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebCmd")
            .Cmd.openChatFromUnread({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .ContactsTab,
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebCmd")
            .Cmd.openChatAt({
              chat: e,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .ContactsTab,
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.catch(function (e) {
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
            o("WAWebSideNavButtonsActivityModel").setLastActiveChat(
              n.toString(),
            ),
            p());
        })),
        b.apply(this, arguments)
      );
    }
    ((l.openContactsAndGroups = m),
      (l.closeContactsAndGroups = p),
      (l.closeContactsAndGroupsOnOpenedChat = _),
      (l.openChatFromContactsAndGroups = f),
      (l.openChatAtMsgFromContactsAndGroups = h),
      (l.closeAfterNewGroupFromContactsAndGroups = C));
  },
  98,
);
