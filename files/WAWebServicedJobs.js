__d(
  "WAWebServicedJobs",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebJobsMigrationGating",
    "WAWebNoop",
    "WAWebPersistedJobInitializers",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebScheduledOperations",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = d(t.type);
      if (n == null || !m()) {
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .fireAndForget(t);
        return;
      }
      o("WAWebScheduledOperations")
        .scheduleOperation(n, function () {
          return p(t);
        })
        .catch(function (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[serviced-job] ",
                  " failed",
                ])),
              t.type,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("serviced-job-failed");
        });
    }
    function u(e) {
      var t = d(e.type);
      return t == null || !m()
        ? o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilCompleted(e)
            .then(r("WAWebNoop"))
        : o("WAWebScheduledOperations").scheduleOperation(t, function () {
            return p(e);
          });
    }
    var c = new Set([
      "deleteAddOns",
      "resendGroupMsg",
      "resendUserMsg",
      "sendRequestedKeyShare",
      "incrementNewsletterForwardCounter",
      "queryAndUpdateGroupsMetadataByJids",
      "queryProductList",
      "setAbout",
      "setTextStatus",
    ]);
    function d(e) {
      return c.has(e)
        ? null
        : o("WAWebScheduledOperations").ScheduledOperation.cast(e);
    }
    function m() {
      return o("WAWebJobsMigrationGating").isServicedJobsEnabled();
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebPersistedJobInitializers")[e.type](),
            n = {
              afterCrash: !1,
              interruptJob: function () {
                throw r("err")(
                  "serviced job " + e.type + " tried to interrupt",
                );
              },
              jobStartTime: o("WATimeUtils").unixTime(),
            };
          yield t.reduce(function (t, r) {
            return t.then(function (t) {
              var o = r.info(t, e.args, n),
                a = o.code;
              return a(t, e.args, n);
            });
          }, Promise.resolve(e.args));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.runServicedJob = s), (l.runServicedJobToCompletion = u));
  },
  98,
);
