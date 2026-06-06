__d(
  "WAWebMexUsernameAccountSyncNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGetUsernameQueryJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      t != null
        ? o("WAWebUsernameTypes").isUsernameKey(t)
          ? await o("WAWebSetUsernameKeyQueryJob").setUsernameKeyJob(t)
          : o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username-sync] invalid key",
                  ])),
              )
              .sendLogs("username-account-sync-invalid-key")
        : await o("WAWebSetUsernameKeyQueryJob").deleteUsernameKeyJob();
    }
    async function m(e, t) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[mex][username-sync] received",
          ])),
      );
      var n = t.xwa2_notify_wa_user,
        r = n.lid_jid;
      if (r == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username-sync] lid null",
            ])),
        );
        return;
      }
      var a = o("WAWebWidFactory").createUserWidOrThrow(r);
      if (!a.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())) {
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][username-sync] wrong LID for self",
            ])),
        );
        return;
      }
      var i = n.username_info;
      if (i == null) {
        await o("WAWebGetUsernameQueryJob").getUsernameJob();
        return;
      }
      var l = i.pin,
        m = i.state,
        p = i.username;
      (await Promise.all([
        o("WAWebSetUsernameJob").setUsernamesJob([
          p == null
            ? { userId: a, deleteUsername: !0 }
            : { userId: a, username: o("WAWebUsernameTypes").asUsername(p) },
        ]),
        d(l),
      ]),
        o("WAWebUserPrefsUsername").setUsernameState(m),
        o("WAWebBackendApi").frontendFireAndForget("setUsernameStateUpdated", {
          usernameState: m,
        }));
    }
    l.mexHandleUsernameAccountSync = m;
  },
  98,
);
