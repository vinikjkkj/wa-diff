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
        },
      );
    }
    function p() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            n &&
              (o("WAWebSideNavButtonsActivityModel").setLastActiveChat(
                t.id.toString(),
              ),
              p(),
              o("WAWebComposeBoxActions").ComposeBoxActions.focus(t)),
            n
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return (
            n &&
              (o("WAWebSideNavButtonsActivityModel").setLastActiveChat(
                e.id.toString(),
              ),
              p()),
            n
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        C.apply(this, arguments)
      );
    }
    ((l.openContactsAndGroups = m),
      (l.closeContactsAndGroups = p),
      (l.openChatFromContactsAndGroups = _),
      (l.openChatAtMsgFromContactsAndGroups = g),
      (l.closeAfterNewGroupFromContactsAndGroups = y));
  },
  98,
);
