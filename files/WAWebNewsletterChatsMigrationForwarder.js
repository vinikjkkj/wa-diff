__d(
  "WAWebNewsletterChatsMigrationForwarder",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterDBUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = Promise.resolve();
    function c(t) {
      var n = o(
        "WAWebNewsletterChatsMigrationCapability",
      ).getNewsletterChatsMigrationFromCapabilities(t);
      return (
        (u = u
          .then(async function () {
            var e = await d(n);
            o("WAWebBackendApi").frontendFireAndForget(
              "updatePrimaryNewsletterChatsMigration",
              { hasFollowedChannels: e, migration: n },
            );
          })
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
        u
      );
    }
    async function d(e) {
      if (e.effectiveMigrated !== !0) return !1;
      try {
        return await o(
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
    }
    l.forwardPrimaryNewsletterChatsMigration = c;
  },
  98,
);
