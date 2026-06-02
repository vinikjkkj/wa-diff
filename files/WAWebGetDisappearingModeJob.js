__d(
  "WAWebGetDisappearingModeJob",
  [
    "WALogger",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
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
          Promise.resolve({ id: t })
        );
      var a = new (o("WAWebUsync").USyncQuery)()
          .withContext("interactive")
          .withMode("query")
          .withDisappearingModeProtocol()
          .withUser(new (o("WAWebUsyncUser").USyncUser)().withId(t)),
        i = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin:
            n != null
              ? n
              : o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.UNKNOWN,
          requestedCount: 1,
          protocols: a.protocols,
        }),
        l = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          i,
          function () {
            return a.execute();
          },
          o("WAWebContactSyncErrorCodes").GET_DISAPPEARING_MODE,
        );
      if (l.error.all || l.error.status) {
        var c = l.error.all || l.error.status;
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getDisappearingMode: failed ",
                " : ",
                "",
              ])),
            c.errorCode,
            c.errorText,
          ),
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            i,
            c.errorCode,
            l,
            o("WAWebContactSyncErrorCodes").GET_DISAPPEARING_MODE,
          ),
          { id: t, error: c }
        );
      }
      var d = l.list;
      if (d.length === 0 || d[0].disappearing_mode == null)
        return (
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(i, l),
          Promise.reject(
            r("err")("no disappearing_mode data returned for user"),
          )
        );
      var m = d[0].disappearing_mode,
        p = m.duration,
        _ = m.ephemeralityDisabled,
        f = m.t;
      if (_) {
        var g = o("WAWebUserPrefsMeUser").isMeAccount(t);
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[handleDisappearingMode] ephemeralityDisabled=true isMeWid=",
                "",
              ])),
            g,
          )
          .sendLogs("handleDisappearingMode-ephemeralityDisabled-true");
      }
      return (
        o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
          i,
          l,
          o("WAWebContactSyncLogger").createUpdateCounterWith({
            disappearingModeChange: 1,
          }),
        ),
        {
          id: t,
          disappearingModeDuration: p,
          disappearingModeSettingTimestamp: f,
        }
      );
    }
    l.getDisappearingMode = c;
  },
  98,
);
