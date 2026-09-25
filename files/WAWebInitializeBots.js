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
      g,
      h = 2e3;
    function y() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var C = null;
    function b(e) {
      (C != null && self.clearTimeout(C),
        (C = self.setTimeout(function () {
          ((C = null), R());
        }, e * 1e3)));
    }
    function v(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= h ||
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
    var S = null;
    function R() {
      return (
        S != null ||
          (S = L().finally(function () {
            S = null;
          })),
        S
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            t = y(),
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
              yield k(),
              (i = a))
            : (i = t + a - n),
            v({
              didFetchFromServer: l,
              durationMs: self.performance.now() - e,
            }),
            b(i),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              n + i,
            ));
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield o("WAWebRequestBotList").requestBotList();
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
          var t;
          try {
            t = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
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
            yield o("WAWebPersistBotProfiles").persistBotProfiles(t);
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
          T();
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = R), (l.getBotProfilesFromServer = k));
  },
  98,
);
