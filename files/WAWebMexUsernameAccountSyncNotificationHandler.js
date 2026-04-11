__d(
  "WAWebMexUsernameAccountSyncNotificationHandler",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebGetUsernameQueryJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
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
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          if (!i.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())) {
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
          var p = l.pin,
            _ = l.state,
            f = l.username;
          (yield (d || (d = n("Promise"))).all([
            o("WAWebSetUsernameJob").setUsernamesJob([
              f == null
                ? { userId: i, deleteUsername: !0 }
                : { userId: i, username: f },
            ]),
            m(p),
          ]),
            o("WAWebUserPrefsUsername").setUsernameState(_),
            o("WAWebBackendApi").frontendFireAndForget(
              "setUsernameStateUpdated",
              { usernameState: _ },
            ));
        })),
        f.apply(this, arguments)
      );
    }
    l.mexHandleUsernameAccountSync = _;
  },
  98,
);
