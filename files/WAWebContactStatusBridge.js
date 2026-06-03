__d(
  "WAWebContactStatusBridge",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebApiStatus",
    "WAWebGetAboutQueryJob",
    "WAWebMexUsersGetAboutStatus",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.wid;
          if (
            o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")
          ) {
            var r = yield o(
                "WAWebMexUsersGetAboutStatus",
              ).getMexUsersAboutStatus(t),
              a = r.state,
              i = r.status;
            return a == null
              ? { id: n, status: i }
              : { id: n, stale: !0, status: null };
          }
          return o("WAWebGetAboutQueryJob")
            .getAbout(t)
            .then(function (t) {
              return t.error
                ? (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getStatus: failed ",
                        " : ",
                        "",
                      ])),
                    t.error.errorCode,
                    t.error.errorText,
                  ),
                  { id: t.id, stale: !0, status: "" })
                : { id: t.id, status: t.status };
            });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .waitUntilCompleted(
          o("WAWebPersistedJobDefinitions").jobSerializers.setAbout(e),
        );
    }
    function d() {
      return o("WAWebApiStatus").getAllStatuses();
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            return (
              yield o("WAWebSendReadReceiptJob").markStatusRead(e, t, n),
              (e.ack = o("WAWebAck").ACK.READ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.getStatus = s),
      (l.setMyStatus = c),
      (l.queryStatusAll = d),
      (l.sendReadStatus = m));
  },
  98,
);
