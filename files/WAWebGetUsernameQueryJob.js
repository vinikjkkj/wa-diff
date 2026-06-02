__d(
  "WAWebGetUsernameQueryJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebMexGetUsernameJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getUsernameQueryJob",
          async function () {
            var t,
              n =
                (t = await o(
                  "WAWebMexGetUsernameJob",
                ).mexGetUsernameQueryJob()) != null
                  ? t
                  : {},
              r = n.pin,
              a = n.state,
              i = n.username;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getUsernameQueryJob] user=",
                  " state=",
                  " key=",
                  "",
                ])),
              i,
              a,
              r,
            ),
              o("WAWebUserPrefsUsername").setUsernameState(a),
              o("WAWebBackendApi").frontendFireAndForget(
                "setUsernameStateUpdated",
                { usernameState: a },
              ));
            var l;
            r != null &&
              (o("WAWebUsernameTypes").isUsernameKey(r)
                ? (l = r)
                : o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "getUsernameJob: invalid username key received from MEX",
                        ])),
                    )
                    .sendLogs("getUsernameJob-invalid-username-key"));
            var u = o("WAWebUserPrefsMeUser").getMeUser();
            return (
              await o("WAWebSetUsernameJob").setUsernamesJob([
                i != null
                  ? { userId: u, username: i }
                  : { userId: u, deleteUsername: !0 },
              ]),
              l != null
                ? await o("WAWebSetUsernameKeyQueryJob").setUsernameKeyJob(l)
                : await o("WAWebSetUsernameKeyQueryJob").deleteUsernameKeyJob(),
              i
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getUsernameJob = u;
  },
  98,
);
