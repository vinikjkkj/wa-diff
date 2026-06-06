__d(
  "WAWebNewsletterMessageDeliveryUpdateAction",
  [
    "WAJids",
    "WAWebNewsletterMetadataJob",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (yield o(
            "WAWebNewsletterMetadataJob",
          ).updateNewsletterMessageDeliveryUpdates(
            o("WAJids").toNewsletterJid(e.id.toString()),
            [],
            r("compactMap")(t, function (e) {
              return e.serverId;
            }),
          ),
            (n = e.newsletterMetadata) == null ||
              n.messageDeliveryUpdates.remove(
                t.map(function (e) {
                  return e.id;
                }),
              ));
        })),
        s.apply(this, arguments)
      );
    }
    l.removeMessageDeliveryUpdates = e;
  },
  98,
);
