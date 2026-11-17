__d(
  "WAWebMexUsernameAccountSyncNotificationHandler",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t != null
            ? o("WAWebUsernameTypes").isUsernameKey(t)
              ? yield o("WAWebSetUsernameKeyQueryJob").setUsernameKeyJob(t)
              : o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username-sync] invalid key",
                      ])),
                  )
                  .sendLogs("username-account-sync-invalid-key")
            : yield o("WAWebSetUsernameKeyQueryJob").deleteUsernameKeyJob();
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username-sync] received",
              ])),
          );
          var r = t.xwa2_notify_wa_user,
            a = r.lid_jid;
          if (a == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username-sync] lid null",
                ])),
            );
            return;
          }
          var i = o("WAWebWidFactory").createUserWidOrThrow(a);
          if (!i.equals(o("WAWebUserUtils").getMeLidUserOrThrow())) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][username-sync] wrong LID for self",
                ])),
            );
            return;
          }
          var l = r.username_info;
          if (l == null) {
            yield o("WAWebGetUsernameQueryJob").getUsernameJob();
            return;
          }
          var p = l.context,
            f = l.pin,
            g = l.state,
            h = l.username;
          (yield (d || (d = n("Promise"))).all([
            o("WAWebSetUsernameJob").setUsernamesJob([
              h == null
                ? { userId: i, deleteUsername: !0 }
                : {
                    userId: i,
                    username: o("WAWebUsernameTypes").asUsername(h),
                  },
            ]),
            m(f),
          ]),
            o("WAWebUserPrefsUsername").setUsernameState(g),
            _(h, p),
            o("WAWebBackendApi").frontendFireAndForget(
              "setUsernameStateUpdated",
              { usernameState: g },
            ));
        })),
        g.apply(this, arguments)
      );
    }
    l.mexHandleUsernameAccountSync = f;
  },
  98,
);
