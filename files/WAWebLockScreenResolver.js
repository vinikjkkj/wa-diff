__d(
  "WAWebLockScreenResolver",
  [
    "WAComms",
    "WALogger",
    "WAResolvable",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCryptoEncKeyHelper",
    "WAWebDbEncryptionKey",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function () {
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
      m = new d();
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey ==
            null
          ) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[screeen-lock] passcode derived key null",
                  ])),
              )
              .sendLogs("[screeen-lock] passcode derived key null"),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] lockScreenAndTriggerUnlockFlow: no passcode key",
                  ])),
              ),
              location.reload());
            return;
          }
          var t = o("WAComms").getComms();
          if (t == null) {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] lockScreenAndTriggerUnlockFlow",
                ])),
            ),
              location.reload());
            return;
          }
          (yield o("WAWebCryptoEncKeyHelper").initEncSalt(),
            t.socketLoop.start());
        })),
        _.apply(this, arguments)
      );
    }
    ((l.LockScreenResolvable = m), (l.lockScreenAndTriggerUnlockFlow = p));
  },
  98,
);
