__d(
  "WAWebHandleUsernameSync",
  ["WALogger", "WAWebInsertUsernameChangeSystemMsg", "WAWebSetUsernameJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
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
              : e.username == null
                ? [{ userId: e.id, deleteUsername: !0 }]
                : [{ userId: e.id, username: e.username }];
        });
      if (a.length !== 0) {
        var i = await o("WAWebSetUsernameJob").setUsernamesJob(a);
        await o(
          "WAWebInsertUsernameChangeSystemMsg",
        ).maybeInsertUsernameChangeSystemMsgs(a, i, "handleUsernameSync");
      }
    }
    l.handleUsernameSync = s;
  },
  98,
);
