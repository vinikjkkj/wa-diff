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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
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
                    id: t,
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
                (p == null ||
                  p.isSyntheticFromMetadata === !0 ||
                  p.isExpired()) &&
                  (r("WAWebNewsletterMetadataCollection") == null ||
                    r("WAWebNewsletterMetadataCollection").add(
                      { id: t, lastFilledStatusServerId: c },
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
        })),
        u.apply(this, arguments)
      );
    }
    l.syncNewsletterStatusMetadata = s;
  },
  98,
);
