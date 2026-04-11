__d(
  "WAWebNewsletterMetadataUpdateUtils",
  [
    "WAWebBackendApi",
    "WAWebContactProfilePicThumbBridge",
    "WAWebDBBulkPersistProfilePic",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
              o(
                "WAWebNewsletterStorageUtils",
              ).createNewsletterMetadataObjectForStorage(t),
            ),
            Object.prototype.hasOwnProperty.call(n, "eurl"))
          ) {
            var r,
              a,
              i,
              l,
              s = o("WAWebWidFactory").createWid(n.id.toString());
            yield o(
              "WAWebDBBulkPersistProfilePic",
            ).bulkPersistProfilePicChanges([
              o(
                "WAWebContactProfilePicThumbBridge",
              ).mapProfilePictureToProfilePicThumbRowType(s, {
                id: s,
                tag: (r = n.tag) != null ? r : void 0,
                eurl: (a = n.eurl) != null ? a : void 0,
                previewEurl: (i = n.previewEurl) != null ? i : void 0,
                stale: n.stale,
                eurlStale: !1,
                timestamp: (l = n.timestamp) != null ? l : Date.now(),
              }),
            ]);
          }
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "updateNewsletterMetadata",
            { metadata: t, newsletter: e, pic: n },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.updateNewsletterMetadataAndPic = e;
  },
  98,
);
