__d(
  "WAWebGuestMessagingSwInitDb",
  ["WALogger", "WAWebDbRolloutUtil", "WAWebWorkerStorage"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          await o("WAWebWorkerStorage").initialize());
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[guest][push-notification] db init failed: ",
                "",
              ])),
            t,
          )
          .sendLogs("guest-push-notification-db-init-error");
      }
    }
    l.initDb = s;
  },
  98,
);
