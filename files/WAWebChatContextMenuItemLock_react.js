__d(
  "WAWebChatContextMenuItemLock.react",
  [
    "fbt",
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "WAWebStateUtils",
    "WAWebWamEnumActionEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["isLocked"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l = i.isLocked,
        c;
      t[1] !== n
        ? ((c = function () {
            o("WAWebChatLockCodeModal.react").promptAndLockChat(
              o("WAWebStateUtils").unproxy(n),
              {
                entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
                  .CHAT_CONTEXT_MENU,
              },
            );
          }),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Lock chat")), (t[3] = m))
        : (m = t[3]);
      var p = m;
      if (
        o("WAWebChatLockUtils").hasChatlockSecretCode() &&
        n.supportsChatLock() &&
        !l
      ) {
        var _;
        return (
          t[4] !== d
            ? ((_ = u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconWdsIcChatlockOutline.react"),
                  title: p,
                  onPress: d,
                  testid: void 0,
                },
                "ChatLockMenuItem",
              )),
              (t[4] = d),
              (t[5] = _))
            : (_ = t[5]),
          _
        );
      }
      return null;
    }
    l.default = c;
  },
  226,
);
