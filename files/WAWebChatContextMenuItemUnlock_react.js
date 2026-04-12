__d(
  "WAWebChatContextMenuItemUnlock.react",
  [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebDropdownItem.react",
    "WAWebWamEnumActionEntryPoint",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        a = o("useWAWebModelValues").useModelValues(t, ["isLocked"]),
        i = a.isLocked,
        l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebChatLockCodeModal.react").promptAndUnlockChat(t, {
              entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                .CHAT_CONTEXT_MENU,
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return i
        ? u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: l,
              icon: u.jsx(r("WDSIconWdsIcChatlockUnlockedOutline.react"), {}),
              children: s._(/*BTDS*/ "Unlock chat"),
            },
            "ChatUnlockMenuItem",
          )
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
