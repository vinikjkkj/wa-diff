__d(
  "WAWebLockScreenResolver",
  [
    "fbt",
    "WAComms",
    "WALogger",
    "WAResolvable",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebModalManager",
    "WAWebMsgCollection",
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
      f = (function () {
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
            ((this.deferred = new (o("WAResolvable").Resolvable)()),
              o("WAWebCmd").Cmd.correctPasscodeLockScreen(t),
              o("WAWebModalManager").ModalManager.close());
          }),
          e
        );
      })(),
      g = new f();
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebCallCollection").activeCall != null) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[screen-lock] blocked: active call in progress",
                ])),
            ),
              o("WAWebModalManager").ModalManager.open(
                _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "screen-lock-active-call-blocker",
                  },
                  title: s._(/*BTDS*/ "You can't lock the app during a call"),
                  onOK: o("WAWebModalManager").closeModalManager,
                  okText: s._(/*BTDS*/ "OK"),
                  children: s._(
                    /*BTDS*/ "End your call before locking the app.",
                  ),
                }),
              ));
            return;
          }
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
              location.reload());
            return;
          }
          var t = o("WAComms").getComms();
          if (t == null) {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] lockScreenAndTriggerUnlockFlow: no comms",
                ])),
            ),
              location.reload());
            return;
          }
          var n = o("WAWebChatCollection").ChatCollection.getActive();
          if (
            (n && o("WAWebCmd").Cmd.closeChat(n),
            yield o("WAWebMsgCollection").MsgCollection.encryptAndClearModels(),
            o(
              "WAWebUserPrefsInfoStore",
            ).waNoiseInfo.resetCachedPasscodeDerivedKey(),
            o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeyCache(),
            o("WAWebDbEncryptionKey").DbEncKeyStore.resetDB(),
            t.softCloseSocket)
          )
            t.softCloseSocket();
          else {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] lockScreenAndTriggerUnlockFlow",
                ])),
            ),
              location.reload());
            return;
          }
          (yield o("WAWebCryptoEncKeyHelper").initEncSalt(),
            t.socketLoop.start());
        })),
        y.apply(this, arguments)
      );
    }
    ((l.LockScreenResolvable = g), (l.lockScreenAndTriggerUnlockFlow = h));
  },
  226,
);
