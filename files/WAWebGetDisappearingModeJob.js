__d(
  "WAWebGetDisappearingModeJob",
  [
    "Promise",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (!r("WAWebWid").isWid(t) || !t.isUser())
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[getDisappearingMode] expected user wid, got: ",
                    "",
                  ])),
                t,
              ),
              (c || (c = n("Promise"))).resolve({ id: t })
            );
          var i = new (o("WAWebUsync").USyncQuery)()
              .withContext("interactive")
              .withMode("query")
              .withDisappearingModeProtocol()
              .withUser(new (o("WAWebUsyncUser").USyncUser)().withId(t)),
            l = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin:
                a != null
                  ? a
                  : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
              requestedCount: 1,
              protocols: i.protocols,
            }),
            d = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(l, function () {
              return i.execute();
            });
          if (d.error.all || d.error.status) {
            var m = d.error.all || d.error.status;
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getDisappearingMode: failed ",
                    " : ",
                    "",
                  ])),
                m.errorCode,
                m.errorText,
              ),
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                l,
                m.errorCode,
                d,
              ),
              { id: t, error: m }
            );
          }
          var p = d.list;
          if (p.length === 0 || p[0].disappearing_mode == null)
            return (
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, d),
              (c || (c = n("Promise"))).reject(
                r("err")("no disappearing_mode data returned for user"),
              )
            );
          var _ = p[0].disappearing_mode,
            f = _.duration,
            g = _.ephemeralityDisabled,
            h = _.t;
          if (g) {
            var y = o("WAWebUserPrefsMeUser").isMeAccount(t);
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleDisappearingMode] ephemeralityDisabled=true isMeWid=",
                    "",
                  ])),
                y,
              )
              .sendLogs("handleDisappearingMode-ephemeralityDisabled-true");
          }
          return (
            o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
              l,
              d,
              o("WAWebContactSyncLogger").createUpdateCounterWith({
                disappearingModeChange: 1,
              }),
            ),
            {
              id: t,
              disappearingModeDuration: f,
              disappearingModeSettingTimestamp: h,
            }
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.getDisappearingMode = d;
  },
  98,
);
