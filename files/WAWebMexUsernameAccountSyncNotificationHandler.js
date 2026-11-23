__d(
  "WAWebMexUsernameAccountSyncNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebGetUsernameQueryJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsUsername",
    "WAWebUserUtils",
    "WAWebUsernameRevocationUserPrefs",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
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
    function m(e, t) {
      if (t === "REVOKED") {
        o(
          "WAWebUsernameWorkerCompatibleGatingUtils",
        ).isUsernameRevocationEnabled() &&
          o("WAWebUsernameRevocationUserPrefs").markUsernameRevoked(e);
        return;
      }
      var n = o("WAWebUsernameRevocationUserPrefs").getUsernameRevocation();
      n != null &&
        (e != null ? e : null) !== n.assignedUsername &&
        o("WAWebUsernameRevocationUserPrefs").clearUsernameRevoked();
    }
    async function p(e, t) {
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
      if (!a.equals(o("WAWebUserUtils").getMeLidUserOrThrow())) {
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
      var l = i.context,
        p = i.pin,
        _ = i.state,
        f = i.username;
      (await Promise.all([
        o("WAWebSetUsernameJob").setUsernamesJob([
          f == null
            ? { userId: a, deleteUsername: !0 }
            : { userId: a, username: o("WAWebUsernameTypes").asUsername(f) },
        ]),
        d(p),
      ]),
        o("WAWebUserPrefsUsername").setUsernameState(_),
        m(f, l),
        o("WAWebBackendApi").frontendFireAndForget("setUsernameStateUpdated", {
          usernameState: _,
        }));
    }
    l.mexHandleUsernameAccountSync = p;
  },
  98,
);
