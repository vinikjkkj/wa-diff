__d(
  "WAWebSyncNewsletterStatusMetadataAction",
  [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l;
          a === void 0 && (a = !0);
          var s = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(
            t,
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest,
            { verification: !0 },
          );
          if (s != null) {
            var u = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(s),
              c = u.statusMetadata;
            if (c != null) {
              var d = (i = c.lastStatusServerId) != null ? i : null,
                m = (l = c.lastStatusSentTime) != null ? l : null;
              (r("WAWebNewsletterMetadataCollection") == null ||
                r("WAWebNewsletterMetadataCollection").add(
                  {
                    id: n,
                    statusMetadata: {
                      lastStatusServerId: d,
                      lastStatusSentTime: m,
                    },
                  },
                  { merge: !0 },
                ),
                a &&
                  o(
                    "WAWebNewsletterSyntheticStatusUtils",
                  ).maybeCreateOrCleanupSynthetic(n, d, m),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status][guest] refreshed metadata for ",
                      "",
                    ])),
                  t,
                ));
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
