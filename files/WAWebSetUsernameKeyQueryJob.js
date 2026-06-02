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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setUsernameKeyQueryJob",
          async function () {
            var t = await o(
              "WAWebMexSetUsernameKeyJob",
            ).mexSetUsernameKeyQueryJob(e);
            return t ? (e != null ? await s(e) : await u(), !0) : !1;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function s(e) {
      var t = o("WAWebUserPrefsMeUser").getMeUser(),
        n = t.toJid(),
        a = { id: n, usernameKey: e != null ? e : void 0 };
      (await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], async function () {
          return r("WAWebLidAwareContactsDB").createOrMerge(
            n,
            babelHelpers.extends({}, a),
          );
        }),
        await o("WAWebBackendApi").frontendSendAndReceive("updateUsernameKey", {
          id: n,
          usernameKey: e,
        }));
    }
    async function u() {
      await s(null);
    }
    ((l.setUsernameKeyQueryJob = e),
      (l.setUsernameKeyJob = s),
      (l.deleteUsernameKeyJob = u));
  },
  98,
);
