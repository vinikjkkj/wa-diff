__d(
  "WAWebSyncNewsletterStatusMetadataAction",
  [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "WAWebStatusCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a,
        i,
        l = await o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
          t,
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
          { verification: !0 },
        );
      if (l != null) {
        var s = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(l),
          u = s.statusMetadata;
        if (u != null) {
          var c = (a = u.lastStatusServerId) != null ? a : null,
            d = (i = u.lastStatusSentTime) != null ? i : null;
          r("WAWebNewsletterMetadataCollection") == null ||
            r("WAWebNewsletterMetadataCollection").add(
              {
                id: n,
                statusMetadata: {
                  lastStatusServerId: c,
                  lastStatusSentTime: d,
                },
              },
              { merge: !0 },
            );
          var m = o(
            "WAWebNewsletterSyntheticStatusUtils",
          ).maybeCreateOrCleanupSynthetic(n, c, d, t);
          if (!m && c != null) {
            var p = o("WAWebStatusCollection").StatusCollection.get(n);
            (p == null || p.isSyntheticFromMetadata === !0 || p.isExpired()) &&
              (r("WAWebNewsletterMetadataCollection") == null ||
                r("WAWebNewsletterMetadataCollection").add(
                  { id: n, lastFilledStatusServerId: c },
                  { merge: !0 },
                ));
          }
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][status][guest] refreshed metadata for ",
                "",
              ])),
            t,
          );
        }
      }
    }
    l.syncNewsletterStatusMetadata = s;
  },
  98,
);
