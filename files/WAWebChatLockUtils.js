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
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderHeldBackToast",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
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
    function g(e) {
      if (((m = !0), (e == null ? void 0 : e.showToast) !== !1)) {
        var t = r("WDSIconWdsIcChatlockOutline.react");
        (o("WAWebToastManager").ToastManager.close(d),
          o("WAWebPathfinderHeldBackToast").openHeldBackToast(
            o("WAWebPathfinderHeldBackSurface").HeldBackSurface
              .CHAT_LOCK_SECRET_CODE,
            function () {
              return o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  id: c,
                  msg: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m0",
                      u.jsx(o("WAWebFlexBox.react").FlexRow, {
                        gap: 8,
                        align: "center",
                        children: s._(/*BTDS*/ "", [
                          s._implicitParam(
                            "=m1",
                            u.jsx(t, {
                              width: 20,
                              height: 20,
                              children: s._(/*BTDS*/ ""),
                            }),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              );
            },
          ));
      }
      o("WAWebCmd").Cmd.trigger("chatlock:lock");
    }
    function h() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e != null && e.isLocked && o("WAWebCmd").Cmd.closeActiveChat();
    }
    function y() {
      (h(), p() && g());
    }
    async function C(e) {
      var t = o("WAWebChatLockSettings").getChatLockSettings();
      return t.secretCode == null
        ? !1
        : o("WAWebChatLockCrypto").validateChatLockSecretCode(e, t.secretCode);
    }
    async function b(e, t) {
      var n = r("WDSIconWdsIcChatlockUnlockedOutline.react");
      return (await C(e))
        ? (t.unlockAppOnSuccess &&
            ((m = !1),
            o("WAWebChatLockWAMUtils").chatLockUnlockedWAMEvent({
              unlockEntryPoint: t.unlockEntryPoint,
              landingSurface: t.landingSurface,
            }),
            o("WAWebToastManager").ToastManager.close(c),
            o("WAWebPathfinderHeldBackToast").openHeldBackToast(
              o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                .CHAT_LOCK_SECRET_CODE,
              function () {
                return o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    id: d,
                    msg: s._(/*BTDS*/ "", [
                      s._implicitParam(
                        "=m0",
                        u.jsx(o("WAWebFlexBox.react").FlexRow, {
                          gap: 8,
                          align: "center",
                          children: s._(/*BTDS*/ "", [
                            s._implicitParam(
                              "=m1",
                              u.jsx(n, {
                                width: 20,
                                height: 20,
                                children: s._(/*BTDS*/ ""),
                              }),
                            ),
                          ]),
                        }),
                      ),
                    ]),
                  }),
                );
              },
            ),
            o("WAWebCmd").Cmd.trigger("chatlock:unlock")),
          !0)
        : !1;
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
      (l.closeActiveChatIfLocked = h),
      (l.leaveLockedChats = y),
      (l.validateSecretCode = b),
      (l.getLockedChats = v),
      (l.shouldShowChatLockEntryPoints = S));
  },
  226,
);
