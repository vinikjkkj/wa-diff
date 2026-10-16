__d(
  "WAWebNewsletterChatsMigrationForwarder",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterDBUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u || (u = n("Promise"))).resolve();
    function d(t) {
      var a = o(
        "WAWebNewsletterChatsMigrationCapability",
      ).getNewsletterChatsMigrationFromCapabilities(t);
      return (
        (c = c
          .then(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield m(a);
              o("WAWebBackendApi").frontendFireAndForget(
                "updatePrimaryNewsletterChatsMigration",
                { hasFollowedChannels: e, migration: a },
              );
            }),
          )
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[forwardPrimaryNewsletterChatsMigration] forward failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          })),
        c
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.effectiveMigrated !== !0) return !1;
          try {
            return yield o(
              "WAWebNewsletterDBUtils",
            ).hasSubscribedNewsletterInStorage();
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[forwardPrimaryNewsletterChatsMigration] channel read failed, assuming followed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !0
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.forwardPrimaryNewsletterChatsMigration = d;
  },
  98,
);
