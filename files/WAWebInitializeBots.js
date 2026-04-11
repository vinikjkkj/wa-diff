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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] skipping bot initialization in worker",
                ])),
            );
            return;
          }
          if (!o("WAWebBotBaseGating").isBotEnabled()) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] not initializing bots due to feature being disabled",
                ])),
            );
            return;
          }
          var t = m(),
            r = o("WATimeUtils").unixTime(),
            a = o("WAWebABProps").getABPropConfigValue(
              "bonsai_update_interval",
            ),
            i;
          (t + a < r
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requesting bots from server",
                  ])),
              ),
              yield f(),
              (i = a))
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] restoring bots from DB",
                  ])),
              ),
              yield o(
                "WAWebRestoreBotProfilesFromDb",
              ).restoreBotProfilesFromDb(),
              (i = t + a - r)),
            self.setTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield p();
              }),
              i * 1e3,
            ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              r + i,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRequestBotList").requestBotList(),
            t = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
          (yield o("WAWebPersistBotProfiles").persistBotProfiles(t), h());
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    l.initializeBots = p;
  },
  98,
);
