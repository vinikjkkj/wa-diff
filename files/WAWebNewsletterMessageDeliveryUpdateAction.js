__d(
  "WAWebNewsletterMessageDeliveryUpdateAction",
  ["WAJids", "WAWebNewsletterMetadataJob", "compactMap"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n;
      (await o(
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
    }
    l.removeMessageDeliveryUpdates = e;
  },
  98,
);
