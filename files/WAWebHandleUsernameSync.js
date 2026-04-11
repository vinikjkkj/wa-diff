__d(
  "WAWebHandleUsernameSync",
  ["WALogger", "WAWebSetUsernameJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.error.username;
          if (n) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleUsernameUsync: error ",
                  ": ",
                  "",
                ])),
              n.errorCode,
              n.errorText,
            );
            return;
          }
          var r = t.list,
            a = r.reduce(function (e, t) {
              var n;
              if (t.username != null)
                return (e.push({ userId: t.id, username: t.username }), e);
              var r = ((n = t.contact) == null ? void 0 : n.type) === "out";
              return (r || e.push({ userId: t.id, deleteUsername: !0 }), e);
            }, []);
          yield o("WAWebSetUsernameJob").setUsernamesJob(a);
        })),
        u.apply(this, arguments)
      );
    }
    l.handleUsernameSync = s;
  },
  98,
);
