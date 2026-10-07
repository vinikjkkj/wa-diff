__d(
  "WAWebPrefetchIdentityKeysContactAction",
  [
    "WALogger",
    "WAWebManageE2ESessionsJob",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              a = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob(
                t != null ? [t, n] : [n],
              );
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: a,
            });
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[security-code] identity key prefetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("security-code-identity-key-prefetch-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.prefetchIdentityKeysForSecurityCode = s;
  },
  98,
);
