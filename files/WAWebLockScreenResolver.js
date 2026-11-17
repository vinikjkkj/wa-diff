__d(
  "WAWebLockScreenResolver",
  [
    "JSResourceForInteraction",
    "WAComms",
    "WALogger",
    "WAResolvable",
    "WAWebAppCommsCloseReason",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebPathfinderHeldBackSurface",
    "WAWebReloadCrashAnnotations",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("JSResourceForInteraction")(
        "WAWebLockScreenActiveCallDialog.react",
      ).__setRef("WAWebLockScreenResolver"),
      _ = null,
      f = null,
      g = (function () {
        function e() {
          this.deferred = new (o("WAResolvable").Resolvable)();
        }
        var t = e.prototype;
        return (
          (t.waitForPasscode = function () {
            var e;
            return (
              o("WAWebCmd").Cmd.openLockScreenModal(),
              (e = this.deferred) == null ? void 0 : e.promise
            );
          }),
          (t.waitForPasscodeAfterIncorrectAttempt = function () {
            var e;
            return (
              (this.deferred = new (o("WAResolvable").Resolvable)()),
              o("WAWebCmd").Cmd.incorrectPasscodeLockScreen(),
              (e = this.deferred) == null ? void 0 : e.promise
            );
          }),
          (t.enterPasscode = function (t) {
            this.deferred.resolve(t);
          }),
          (t.correctPasscodeEntered = function (t) {
            (o("WAWebPathfinderHeldBackSurface").noteScreenUnlocked(),
              _ == null || _(),
              (_ = null),
              (this.deferred = new (o("WAResolvable").Resolvable)()),
              o("WAWebCmd").Cmd.correctPasscodeLockScreen(t),
              o("WAWebPathfinderHeldBackSurface").openHeldBack(
                o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK,
                function () {
                  return o("WAWebModalManager").ModalManager.close();
                },
              ));
          }),
          e
        );
      })(),
      h = new g();
    function y() {
      return (
        f != null ||
          (f = C().finally(function () {
            f = null;
          })),
        f
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebCallCollection").activeCall != null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[screen-lock] blocked: active call in progress",
                ])),
            );
            try {
              var t = yield p.load(),
                n = t.openLockScreenActiveCallDialog;
              if (r("WAWebCallCollection").activeCall == null) return;
              o("WAWebPathfinderHeldBackSurface").openHeldBack(
                o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                  .SCREEN_LOCK_ACTIVE_CALL_BLOCKER,
                n,
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[screen-lock] active-call blocker dialog failed to load",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("screen-lock-active-call-blocker-load-failed");
            }
            return;
          }
          _ == null || _();
          var a = o("WAWebPathfinderHeldBackSurface").enterHeldBackSurface(
            o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK,
          );
          _ = a;
          try {
            yield v();
          } catch (e) {
            throw (a(), _ === a && (_ = null), e);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey ==
            null
          ) {
            (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[screeen-lock] passcode derived key null",
                  ])),
              )
              .sendLogs("[screeen-lock] passcode derived key null"),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] lockScreenAndTriggerUnlockFlow: no passcode key",
                  ])),
              ),
              o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
                "lockScreenAndTriggerUnlockFlow: no passcode key",
              ),
              location.reload());
            return;
          }
          var e = o("WAComms").getComms();
          if (e == null) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] lockScreenAndTriggerUnlockFlow: no comms",
                ])),
            ),
              o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
                "lockScreenAndTriggerUnlockFlow: no comms",
              ),
              location.reload());
            return;
          }
          var t = o("WAWebChatCollection").ChatCollection.getActive();
          if (
            (t && o("WAWebCmd").Cmd.closeChat(t),
            yield o("WAWebMsgCollection").MsgCollection.encryptAndClearModels(),
            o(
              "WAWebUserPrefsInfoStore",
            ).waNoiseInfo.resetCachedPasscodeDerivedKey(),
            o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeyCache(),
            o("WAWebDbEncryptionKey").DbEncKeyStore.resetDB(),
            !(yield e.trySoftCloseSocket(
              o("WAWebAppCommsCloseReason").AppCommsCloseReason.AppLock,
            )))
          ) {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] lockScreenAndTriggerUnlockFlow",
                ])),
            ),
              o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
                "lockScreenAndTriggerUnlockFlow",
              ),
              location.reload());
            return;
          }
          (yield o("WAWebCryptoEncKeyHelper").initEncSalt(),
            e.openSocketLoop());
        })),
        S.apply(this, arguments)
      );
    }
    ((l.LockScreenResolvable = h), (l.lockScreenAndTriggerUnlockFlow = y));
  },
  98,
);
