__d(
  "WAWebChatLockUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatLockCrypto",
    "WAWebChatLockSettings",
    "WAWebChatLockWAMUtils",
    "WAWebCmd",
    "WAWebFlexBox.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "locked-toast",
      d = "unlocked-toast",
      m = !0;
    function p() {
      return m === !1;
    }
    function _() {
      var e = o("WAWebChatLockSettings").getChatLockSettings();
      return (e == null ? void 0 : e.secretCode) != null;
    }
    function f(e) {
      return e.isLocked ? p() : !0;
    }
    function g() {
      m = !0;
      var e = r("WDSIconWdsIcChatlockOutline.react");
      (o("WAWebToastManager").ToastManager.close(d),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            id: c,
            msg: s._(/*BTDS*/ "{=m0}", [
              s._implicitParam(
                "=m0",
                u.jsx(o("WAWebFlexBox.react").FlexRow, {
                  gap: 8,
                  align: "center",
                  children: s._(
                    /*BTDS*/ "{=m1} Chats are now locked and hidden",
                    [
                      s._implicitParam(
                        "=m1",
                        u.jsx(e, {
                          width: 20,
                          height: 20,
                          children: s._(/*BTDS*/ ""),
                        }),
                      ),
                    ],
                  ),
                }),
              ),
            ]),
          }),
        ),
        o("WAWebCmd").Cmd.trigger("chatlock:lock"));
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebChatLockSettings").getChatLockSettings();
          return t.secretCode == null
            ? !1
            : o("WAWebChatLockCrypto").validateChatLockSecretCode(
                e,
                t.secretCode,
              );
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
          var n = r("WDSIconWdsIcChatlockUnlockedOutline.react");
          return (yield h(e))
            ? (t.unlockAppOnSuccess &&
                ((m = !1),
                o("WAWebChatLockWAMUtils").chatLockUnlockedWAMEvent({
                  unlockEntryPoint: t.unlockEntryPoint,
                  landingSurface: t.landingSurface,
                }),
                o("WAWebToastManager").ToastManager.close(c),
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: d,
                    msg: s._(/*BTDS*/ "{=m0}", [
                      s._implicitParam(
                        "=m0",
                        u.jsx(o("WAWebFlexBox.react").FlexRow, {
                          gap: 8,
                          align: "center",
                          children: s._(
                            /*BTDS*/ "{=m1} Chats are now unlocked",
                            [
                              s._implicitParam(
                                "=m1",
                                u.jsx(n, {
                                  width: 20,
                                  height: 20,
                                  children: s._(/*BTDS*/ ""),
                                }),
                              ),
                            ],
                          ),
                        }),
                      ),
                    ]),
                  }),
                ),
                o("WAWebCmd").Cmd.trigger("chatlock:unlock")),
              !0)
            : !1;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return o("WAWebChatCollection").ChatCollection.filter(function (e) {
        return e.isLocked;
      });
    }
    function S() {
      return v().length > 0;
    }
    ((l.lockedChatsAreAccessible = p),
      (l.hasChatlockSecretCode = _),
      (l.chatIsAccessible = f),
      (l.lockChats = g),
      (l.validateSecretCode = C),
      (l.getLockedChats = v),
      (l.shouldShowChatLockEntryPoints = S));
  },
  226,
);
