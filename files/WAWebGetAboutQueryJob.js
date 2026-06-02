__d(
  "WAWebGetAboutQueryJob",
  [
    "WALogger",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebMexFetchAboutStatusJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      var t = e.wid;
      if (!t.isLid()) {
        var n = await o("WAWebMexFetchAboutStatusJob").mexGetAbout(e);
        return n;
      }
      return d(e);
    }
    async function d(t) {
      var n = t.tcToken,
        a = t.wid;
      if (!r("WAWebWid").isWid(a) || !a.isUser())
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getAbout: expected user wid, got: ",
                "",
              ])),
            a,
          ),
          Promise.resolve({ id: a })
        );
      var i = new (o("WAWebUsyncUser").USyncUser)().withId(a);
      n != null &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "getAbout: adding tcToken to usync query",
            ])),
        ),
        i.withTcToken(n));
      var l = new (o("WAWebUsync").USyncQuery)()
          .withContext("interactive")
          .withMode("query")
          .withStatusProtocol()
          .withUser(i),
        c = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .STATUS_FORCE_REFRESH,
          requestedCount: 1,
          protocols: l.protocols,
        }),
        d = await o(
          "WAWebContactSyncLogger",
        ).contactSyncLogger.executeWithLogging(
          c,
          function () {
            return l.execute();
          },
          o("WAWebContactSyncErrorCodes").GET_ABOUT_STATUS,
        );
      if (d.error.all || d.error.status) {
        var m = d.error.all || d.error.status;
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getAbout: failed ",
                " : ",
                "",
              ])),
            m.errorCode,
            m.errorText,
          ),
          o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
            c,
            m.errorCode,
            d,
            o("WAWebContactSyncErrorCodes").GET_ABOUT_STATUS,
          ),
          { id: a, error: m }
        );
      }
      var p = d.list;
      return p.length
        ? (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
            c,
            d,
            o("WAWebContactSyncLogger").createUpdateCounterWith({
              statusChange: 1,
            }),
          ),
          { id: a, status: p[0].status })
        : (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(c, d),
          { id: a, status: "" });
    }
    l.getAbout = c;
  },
  98,
);
