__d(
  "WAWebSetUsernameKeyQueryJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebMexSetUsernameKeyJob",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setUsernameKeyQueryJob",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
              "WAWebMexSetUsernameKeyJob",
            ).mexSetUsernameKeyQueryJob(e);
            return t ? (e != null ? yield s(e) : yield c(), !0) : !1;
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMeUser(),
            a = t.toJid(),
            i = { id: a, usernameKey: e != null ? e : void 0 };
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["contact"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return r("WAWebLidAwareContactsDB").createOrMerge(
                  a,
                  babelHelpers.extends({}, i),
                );
              }),
            ),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateUsernameKey",
              { id: a, usernameKey: e },
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield s(null);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.setUsernameKeyQueryJob = e),
      (l.setUsernameKeyJob = s),
      (l.deleteUsernameKeyJob = c));
  },
  98,
);
