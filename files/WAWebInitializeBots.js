__d(
  "WAWebInitializeBots",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebPersistBotProfiles",
    "WAWebRequestBotList",
    "WAWebRequestBotProfiles",
    "WAWebRestoreBotProfilesFromDb",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBot",
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
      p,
      _,
      f,
      g = 2e3;
    function h() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var y = null;
    function C(e) {
      (y != null && self.clearTimeout(y),
        (y = self.setTimeout(function () {
          ((y = null), S());
        }, e * 1e3)));
    }
    function b(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= g ||
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
    var v = null;
    function S() {
      return (
        v != null ||
          (v = R().finally(function () {
            v = null;
          })),
        v
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            t = h(),
            n = o("WATimeUtils").unixTime(),
            r = o("WAWebABProps").getABPropConfigValue(
              "bonsai_update_interval",
            ),
            a,
            i = !1;
          (t + r < n
            ? ((i = !0),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requesting bots from server",
                  ])),
              ),
              yield E(),
              (a = r))
            : (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] restoring bots from DB",
                  ])),
              ),
              yield o(
                "WAWebRestoreBotProfilesFromDb",
              ).restoreBotProfilesFromDb(),
              (a = t + r - n)),
            b({
              didFetchFromServer: i,
              durationMs: self.performance.now() - e,
            }),
            C(a),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              n + a,
            ));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o("WAWebRequestBotList").requestBotList();
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotList error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-request-bot-list-error");
            return;
          }
          var t;
          try {
            t = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-request-bot-profiles-error");
            return;
          }
          try {
            yield o("WAWebPersistBotProfiles").persistBotProfiles(t);
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-persist-bot-profiles-error");
            return;
          }
          I();
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = S), (l.getBotProfilesFromServer = E));
  },
  98,
);
