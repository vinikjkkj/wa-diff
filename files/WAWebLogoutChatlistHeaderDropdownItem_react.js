__d(
  "WAWebLogoutChatlistHeaderDropdownItem.react",
  [
    "fbt",
    "WAWebChatlistHeaderDropdownLogEvents",
    "WAWebConfirmLogoutModal.react",
    "WAWebModalManager",
    "WAWebWamEnumWebcMenuItemLabel",
    "WAWebWamUtils",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function (t) {
          (t == null || t.stopPropagation(),
            o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(
              o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.LOG_OUT,
            ),
            o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 }),
            ));
        },
        t = s._(/*BTDS*/ "Log out"),
        n = "mi-logout menu-item";
      return u.jsx(r("WDSMenuItem.react"), {
        Icon: r("WDSIconIcLogout.react"),
        title: t,
        onPress: e,
        testid: void 0,
        destructive: !0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
