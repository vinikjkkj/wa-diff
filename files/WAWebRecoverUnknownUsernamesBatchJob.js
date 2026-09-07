__d(
  "WAWebRecoverUnknownUsernamesBatchJob",
  [
    "WALogger",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield o("WAWebMexUsersGetUsername").getMexUsersUsername(e);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebRecoverUnknownUsernamesBatchJob: username lookup threw",
                    ])),
                )
                .sendLogs("username-mex-query-failed")
                .catching(r("getErrorSafe")(t)),
              e.map(function () {
                return { errored: !0 };
              })
            );
          }
          if (t == null)
            return (
              m(e.length),
              e.map(function () {
                return { errored: !0 };
              })
            );
          var n = t,
            a = [],
            i = [],
            l = 0,
            c = e.map(function (e, t) {
              var r = n[t];
              return r == null || r.error === !0
                ? (l++, { errored: !0 })
                : (i.push(t),
                  a.push(
                    r.username != null
                      ? { userId: e, username: r.username }
                      : { userId: e, deleteUsername: !0 },
                  ),
                  { errored: !1 });
            });
          if ((l > 0 && m(l), a.length > 0))
            try {
              yield o("WAWebSetUsernameJob").setUsernamesJob(a);
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebRecoverUnknownUsernamesBatchJob: username write failed",
                    ])),
                )
                .sendLogs("unknown-user-recovery-username-write-failed")
                .catching(r("getErrorSafe")(e));
              for (var d of i) c[d] = { errored: !0 };
            }
          return c;
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebRecoverUnknownUsernamesBatchJob: ",
              " username lookup(s) failed",
            ])),
          t,
        )
        .sendLogs("username-mex-query-failed");
    }
    l.recoverUsernamesForLids = c;
  },
  98,
);
