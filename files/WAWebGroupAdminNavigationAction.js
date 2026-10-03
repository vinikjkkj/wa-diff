__d(
  "WAWebGroupAdminNavigationAction",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebGroupAdminAddMemberPicker.react",
    "WAWebGroupAdminConsoleLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNewGroupFlowLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
        c.jsx(r("WAWebGroupAdminConsoleLoadable"), { onClose: m }),
        {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          focusOnUnMount: !0,
        },
      );
    }
    function m() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebCmd")
            .Cmd.openChatFromUnread({
              chat: t,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist,
            })
            .catch(function (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "openChatFromGroupAdminConsole: opening the chat failed",
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
              m(),
              o("WAWebComposeBoxActions").ComposeBoxActions.focus(t)),
            n
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(
            o("WAWebReachoutTimelockRestrictedModalLoadable")
              .ReachoutTimelockRestrictedModalLoadable,
            {},
          ),
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebGroupAdminAddMemberPicker.react"), {
          onClose: o("WAWebModalManager").closeModalManager,
          onPick: function (n) {
            (o("WAWebModalManager").closeModalManager(), e(n));
          },
        }),
      );
    }
    function g() {
      if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(
            o("WAWebReachoutTimelockRestrictedModalLoadable")
              .ReachoutTimelockRestrictedModalLoadable,
            {},
          ),
        );
        return;
      }
      (m(),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          c.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
            isSubFlow: !1,
            onCreateGroup: C,
            onEnd: function () {
              h();
            },
          }),
        ));
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o(
            "WAWebDrawerManager",
          ).DrawerManager.closeDrawerLeftAsync()) &&
            (d(),
            o("WAWebCmd").Cmd.setActiveNavBarItem(
              o("WAWebNavBarTypes").NavBarItems.GroupAdmin,
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "openGroupAdminNewGroupFlow: creating the group failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          });
          t != null && (yield h());
        })),
        b.apply(this, arguments)
      );
    }
    ((l.openGroupAdminConsole = d),
      (l.openChatFromGroupAdminConsole = p),
      (l.openGroupAdminAddMemberPicker = f),
      (l.openGroupAdminNewGroupFlow = g));
  },
  98,
);
