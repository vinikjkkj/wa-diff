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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    async function g() {
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
      var t = f(),
        n = o("WATimeUtils").unixTime(),
        r = o("WAWebABProps").getABPropConfigValue("bonsai_update_interval"),
        a;
      (t + r < n
        ? (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] requesting bots from server",
              ])),
          ),
          await h(),
          (a = r))
        : (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] restoring bots from DB",
              ])),
          ),
          await o("WAWebRestoreBotProfilesFromDb").restoreBotProfilesFromDb(),
          (a = t + r - n)),
        self.setTimeout(async function () {
          await g();
        }, a * 1e3),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] initializing bots complete, next fetch at ",
              "",
            ])),
          n + a,
        ));
    }
    async function h() {
      var e;
      try {
        e = await o("WAWebRequestBotList").requestBotList();
      } catch (e) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] requestBotList error",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bot-request-bot-list-error");
        return;
      }
      var t;
      try {
        t = await o("WAWebRequestBotProfiles").requestBotProfiles(e);
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] requestBotProfiles error",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bot-request-bot-profiles-error");
        return;
      }
      try {
        await o("WAWebPersistBotProfiles").persistBotProfiles(t);
      } catch (e) {
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] persistBotProfiles error",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bot-persist-bot-profiles-error");
        return;
      }
      y();
    }
    function y() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = g), (l.getBotProfilesFromServer = h));
  },
  98,
);
