__d(
  "WAWebInitializeBots",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebPersistBotProfiles",
    "WAWebRequestBotProfiles",
    "WAWebRestoreBotProfilesFromDb",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = r("requireDeferred")("WAWebRequestBotList").__setRef(
        "WAWebInitializeBots",
      ),
      y = 2e3;
    function C() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var b = null;
    function v(e) {
      (b != null && self.clearTimeout(b),
        (b = self.setTimeout(function () {
          ((b = null), L());
        }, e * 1e3)));
    }
    function S(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= y ||
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] initializeBots slow ms=",
                " fetchedFromServer=",
                "",
              ])),
            Math.round(r),
            n,
          )
          .sendLogs("bot-initialize-slow", { sampling: 0.01 });
    }
    var R = null;
    function L() {
      return (
        R != null ||
          (R = E().finally(function () {
            R = null;
          })),
        R
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] skipping bot initialization in worker",
                ])),
            );
            return;
          }
          if (!o("WAWebBotBaseGating").isBotEnabled()) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] not initializing bots due to feature being disabled",
                ])),
            );
            return;
          }
          var e = self.performance.now(),
            t = C(),
            n = o("WATimeUtils").unixTime(),
            a = o("WAWebABProps").getABPropConfigValue(
              "bonsai_update_interval",
            ),
            i,
            l = !1;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] restoring bots from DB",
              ])),
          );
          try {
            yield o("WAWebRestoreBotProfilesFromDb").restoreBotProfilesFromDb();
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] restoreBotProfilesFromDb error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-restore-bot-profiles-error");
          }
          (t + a < n
            ? ((l = !0),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requesting bots from server",
                  ])),
              ),
              yield I(),
              (i = a))
            : (i = t + a - n),
            S({
              didFetchFromServer: l,
              durationMs: self.performance.now() - e,
            }),
            v(i),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              n + i,
            ));
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            var t = yield h.load(),
              n = t.requestBotList;
            e = yield n();
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotList error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-request-bot-list-error");
            return;
          }
          var a;
          try {
            a = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-request-bot-profiles-error");
            return;
          }
          try {
            yield o("WAWebPersistBotProfiles").persistBotProfiles(a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-persist-bot-profiles-error");
            return;
          }
          D();
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = L), (l.getBotProfilesFromServer = I));
  },
  98,
);
