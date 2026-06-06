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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.wid;
      if (o("WAWebABProps").getABPropConfigValue("mex_usync_about_status")) {
        var r = await o("WAWebMexUsersGetAboutStatus").getMexUsersAboutStatus(
            t,
          ),
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
    }
    function u(e) {
      return o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .waitUntilCompleted(
          o("WAWebPersistedJobDefinitions").jobSerializers.setAbout(e),
        );
    }
    function c() {
      return o("WAWebApiStatus").getAllStatuses();
    }
    async function d(e, t, n) {
      try {
        return (
          await o("WAWebSendReadReceiptJob").markStatusRead(e, t, n),
          (e.ack = o("WAWebAck").ACK.READ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    ((l.getStatus = s),
      (l.setMyStatus = u),
      (l.queryStatusAll = c),
      (l.sendReadStatus = d));
  },
  98,
);
