__d(
  "WAWebGetAboutQueryJob",
  [
    "Promise",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebMexFetchAboutStatusJob",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.wid;
          if (!t.isLid()) {
            var n = yield o("WAWebMexFetchAboutStatusJob").mexGetAbout(e);
            return n;
          }
          return p(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.tcToken,
            i = t.wid;
          if (!r("WAWebWid").isWid(i) || !i.isUser())
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getAbout: expected user wid, got: ",
                    "",
                  ])),
                i,
              ),
              (c || (c = n("Promise"))).resolve({ id: i })
            );
          var l = new (o("WAWebUsyncUser").USyncUser)().withId(i);
          a != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getAbout: adding tcToken to usync query",
                ])),
            ),
            l.withTcToken(a));
          var d = new (o("WAWebUsync").USyncQuery)()
              .withContext("interactive")
              .withMode("query")
              .withStatusProtocol()
              .withUser(l),
            m = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .STATUS_FORCE_REFRESH,
              requestedCount: 1,
              protocols: d.protocols,
            }),
            p = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(m, function () {
              return d.execute();
            });
          if (p.error.all || p.error.status) {
            var _ = p.error.all || p.error.status;
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getAbout: failed ",
                    " : ",
                    "",
                  ])),
                _.errorCode,
                _.errorText,
              ),
              o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                m,
                _.errorCode,
                p,
              ),
              { id: i, error: _ }
            );
          }
          var f = p.list;
          return f.length
            ? (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
                m,
                p,
                o("WAWebContactSyncLogger").createUpdateCounterWith({
                  statusChange: 1,
                }),
              ),
              { id: i, status: f[0].status })
            : (o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(m, p),
              { id: i, status: "" });
        })),
        _.apply(this, arguments)
      );
    }
    l.getAbout = d;
  },
  98,
);
