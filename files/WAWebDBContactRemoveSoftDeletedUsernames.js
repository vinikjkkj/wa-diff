__d(
  "WAWebDBContactRemoveSoftDeletedUsernames",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebLidAwareContactsDB",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield r("WAWebLidAwareContactsDB").bulkGet(
              t.map(function (e) {
                return e.toJid();
              }),
            ),
            i = 0,
            l = a.reduce(function (e, n, r) {
              return n == null
                ? (i++, e)
                : (n.username != null &&
                    n.usernameSoftDeleted === !0 &&
                    e.push({ lid: t[r], oldUsername: n.username }),
                  e);
            }, []);
          if (
            (i > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: ",
                    " missing contacts",
                  ])),
                i,
              ),
            l.length !== 0)
          ) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "removeSoftDeletedUsernames: removing usernames for ",
                  " LIDs",
                ])),
              l.length,
            ),
              yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                l.map(function (e) {
                  var t = e.lid;
                  return {
                    id: t.toJid(),
                    username: void 0,
                    usernameSoftDeleted: void 0,
                  };
                }),
                "DBContactRemoveSoftDeletedUsernames.removeSoftDeletedUsernames",
              ),
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "bulkUpdateUsernames",
                {
                  usernameUpdates: l.map(function (e) {
                    var t = e.lid;
                    return {
                      id: t.toJid(),
                      username: void 0,
                      usernameSoftDeleted: void 0,
                    };
                  }),
                },
              ));
            var d = yield (c || (c = n("Promise"))).allSettled(
              l.map(function (e) {
                var t = e.lid,
                  n = e.oldUsername;
                return o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).generateUsernameChangeNotificationSystemMsg({
                  wid: t,
                  oldUsername: n,
                  newUsername: void 0,
                });
              }),
            );
            for (var m of d)
              m.status === "rejected" &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "removeSoftDeletedUsernames: failed to insert username delete system msg",
                      ])),
                  )
                  .catching(r("getErrorSafe")(m.reason))
                  .sendLogs("username-soft-delete-system-msg-insert-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.removeSoftDeletedUsernames = d;
  },
  98,
);
