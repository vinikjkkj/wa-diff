__d(
  "WAWebLockScreenResolver",
  [
    "fbt",
    "WAComms",
    "WALogger",
    "WAResolvable",
    "WAWebAppCommsCloseReason",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebPathfinderHeldBackScope.react",
    "WAWebPathfinderHeldBackSurface",
    "WAWebReloadCrashAnnotations",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = null,
      g = null,
      h = (function () {
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
              f == null || f(),
              (f = null),
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
      y = new h();
    function C() {
      return (
        g != null ||
          (g = b().finally(function () {
            g = null;
          })),
        g
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebCallCollection").activeCall != null) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[screen-lock] blocked: active call in progress",
                ])),
            );
            var t = _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "screen-lock-active-call-blocker",
              },
              title: s._(/*BTDS*/ "You can't lock the app during a call"),
              onOK: o("WAWebModalManager").closeModalManager,
              okText: s._(/*BTDS*/ "OK"),
              children: s._(/*BTDS*/ "End your call before locking the app."),
            });
            o("WAWebPathfinderHeldBackSurface").openHeldBack(
              o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                .SCREEN_LOCK_ACTIVE_CALL_BLOCKER,
              function () {
                return o("WAWebModalManager").ModalManager.open(
                  _.jsx(r("WAWebPathfinderHeldBackScope.react"), {
                    name: o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                      .SCREEN_LOCK_ACTIVE_CALL_BLOCKER,
                    children: t,
                  }),
                );
              },
            );
            return;
          }
          f == null || f();
          var n = o("WAWebPathfinderHeldBackSurface").enterHeldBackSurface(
            o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK,
          );
          f = n;
          try {
            yield S();
          } catch (e) {
            throw (n(), f === n && (f = null), e);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        R.apply(this, arguments)
      );
    }
    ((l.LockScreenResolvable = y), (l.lockScreenAndTriggerUnlockFlow = C));
  },
  226,
);
