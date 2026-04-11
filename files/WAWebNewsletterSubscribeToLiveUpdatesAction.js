__d(
  "WAWebNewsletterSubscribeToLiveUpdatesAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterSubscribeToLiveUpdatesJob",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield o(
              "WAWebNewsletterSubscribeToLiveUpdatesJob",
            ).subscribeToLiveUpdatesJob(
              o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.toJid(),
              ),
            );
          } catch (l) {
            var n =
              l != null && typeof l == "object" && "status" in l
                ? l.status
                : null;
            if (n === 423)
              try {
                (yield o("WAWebNewsletterMetadataJob").suspendNewsletter(
                  o("WAJids").toNewsletterJid(t.toJid()),
                ),
                  o(
                    "WAWebNewsletterBridgeApi",
                  ).NewsletterBridgeApi.suspendNewsletter({ id: t }));
              } catch (n) {
                var a = r("getErrorSafe")(n);
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[subscribeToLiveUpdatesJob] suspend failed (423) ",
                        "",
                      ])),
                    t.toString(),
                  )
                  .catching(a)
                  .tags("newsletter")
                  .sendLogs(
                    "newsletter-subscribe-to-live-updates-suspend-error",
                  );
                return;
              }
            else if (n === 451)
              try {
                (yield o("WAWebNewsletterMetadataJob").geosuspendNewsletter(
                  o("WAJids").toNewsletterJid(t.toJid()),
                ),
                  o(
                    "WAWebNewsletterBridgeApi",
                  ).NewsletterBridgeApi.geosuspendNewsletter({ id: t }));
              } catch (e) {
                var i = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[subscribeToLiveUpdatesJob] geosuspend failed (451) ",
                        "",
                      ])),
                    t.toString(),
                  )
                  .catching(i)
                  .tags("newsletter")
                  .sendLogs(
                    "newsletter-subscribe-to-live-updates-geosuspend-error",
                  );
                return;
              }
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[subscribeToLiveUpdatesJob] subscribe failed",
                ])),
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.subscribeToLiveUpdates = c;
  },
  98,
);
