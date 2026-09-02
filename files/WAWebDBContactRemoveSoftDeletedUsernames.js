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
          var n = yield r("WAWebLidAwareContactsDB").bulkGet(
              t.map(function (e) {
                return e.toJid();
              }),
            ),
            a = 0,
            i = n.reduce(function (e, n, r) {
              return n == null
                ? (a++, e)
                : (n.username != null &&
                    n.usernameSoftDeleted === !0 &&
                    e.push({ lid: t[r], oldUsername: n.username }),
                  e);
            }, []);
          return (
            a > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: ",
                    " missing contacts",
                  ])),
                a,
              ),
            i.length === 0 ||
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "removeSoftDeletedUsernames: removing usernames for ",
                    " LIDs",
                  ])),
                i.length,
              ),
              yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
                i.map(function (e) {
                  var t = e.lid;
                  return {
                    id: t.toJid(),
                    username: void 0,
                    usernameSoftDeleted: void 0,
                  };
                }),
                "DBContactRemoveSoftDeletedUsernames.removeSoftDeletedUsernames",
              )),
            i
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "bulkUpdateUsernames",
              {
                usernameUpdates: e.map(function (e) {
                  var t = e.lid;
                  return {
                    id: t.toJid(),
                    username: void 0,
                    usernameSoftDeleted: void 0,
                  };
                }),
              },
            );
            var t = yield (c || (c = n("Promise"))).allSettled(
              e.map(function (e) {
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
            for (var a of t)
              a.status === "rejected" &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "removeSoftDeletedUsernames: failed to insert username delete system msg",
                      ])),
                  )
                  .catching(r("getErrorSafe")(a.reason))
                  .sendLogs("username-soft-delete-system-msg-insert-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.removeSoftDeletedUsernames = d),
      (l.applySoftDeletedUsernameClearsToFrontend = p));
  },
  98,
);
