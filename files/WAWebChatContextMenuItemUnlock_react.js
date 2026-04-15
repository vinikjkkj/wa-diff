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
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        a = e.chat,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["isLocked"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(a, i),
        c = l.isLocked,
        d;
      t[1] !== a
        ? ((d = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WAWebChatLockCodeModal.react").promptAndUnlockChat(a, {
                entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                  .CHAT_CONTEXT_MENU,
              });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var m = d;
      if (!c) return null;
      var p, _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSIconWdsIcChatlockUnlockedOutline.react"), {})),
          (_ = s._(/*BTDS*/ "Unlock chat")),
          (t[3] = p),
          (t[4] = _))
        : ((p = t[3]), (_ = t[4]));
      var f;
      return (
        t[5] !== m
          ? ((f = u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              { testid: void 0, action: m, icon: p, children: _ },
              "ChatUnlockMenuItem",
            )),
            (t[5] = m),
            (t[6] = f))
          : (f = t[6]),
        f
      );
    }
    l.default = c;
  },
  226,
);
