__d(
  "WAWebRecoverUnknownUsernamesBatchJob",
  [
    "WALogger",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n;
      try {
        n = await o("WAWebMexUsersGetUsername").getMexUsersUsername(t);
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebRecoverUnknownUsernamesBatchJob: username lookup threw",
                ])),
            )
            .sendLogs("username-mex-query-failed")
            .catching(r("getErrorSafe")(n)),
          t.map(function () {
            return { errored: !0 };
          })
        );
      }
      if (n == null)
        return (
          d(t.length),
          t.map(function () {
            return { errored: !0 };
          })
        );
      var a = n,
        i = [],
        l = [],
        u = 0,
        c = t.map(function (e, t) {
          var n = a[t];
          return n == null || n.error === !0
            ? (u++, { errored: !0 })
            : n.noChange === !0
              ? { errored: !1 }
              : (l.push(t),
                i.push(
                  n.username != null
                    ? { userId: e, username: n.username }
                    : { userId: e, deleteUsername: !0 },
                ),
                { errored: !1 });
        });
      if ((u > 0 && d(u), i.length > 0))
        try {
          await o("WAWebSetUsernameJob").setUsernamesJob(i);
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebRecoverUnknownUsernamesBatchJob: username write failed",
                ])),
            )
            .sendLogs("unknown-user-recovery-username-write-failed")
            .catching(r("getErrorSafe")(e));
          for (var m of l) c[m] = { errored: !0 };
        }
      return c;
    }
    function d(e) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebRecoverUnknownUsernamesBatchJob: ",
              " username lookup(s) failed",
            ])),
          e,
        )
        .sendLogs("username-mex-query-failed");
    }
    l.recoverUsernamesForLids = c;
  },
  98,
);
