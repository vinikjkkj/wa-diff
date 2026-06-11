__d(
  "WAWebHandleUsernameSync",
  [
    "WALogger",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "asyncToGeneratorRuntime",
  ],
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
            a = r.flatMap(function (e) {
              var t;
              return ((t = e.contact) == null ? void 0 : t.type) === "out"
                ? []
                : e.id == null
                  ? []
                  : "username" in e
                    ? e.username == null || e.username === ""
                      ? [{ userId: e.id, deleteUsername: !0 }]
                      : [{ userId: e.id, username: e.username }]
                    : [];
            });
          if (a.length !== 0) {
            var i = yield o("WAWebSetUsernameJob").setUsernamesJob(a);
            yield o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).maybeInsertUsernameChangeSystemMsgs(a, i, "handleUsernameSync");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.handleUsernameSync = s;
  },
  98,
);
