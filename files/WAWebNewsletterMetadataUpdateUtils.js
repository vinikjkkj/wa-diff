__d(
  "WAWebNewsletterMetadataUpdateUtils",
  [
    "WAWebBackendApi",
    "WAWebContactProfilePicThumbBridge",
    "WAWebDBBulkPersistProfilePic",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (
        (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(
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
        await o("WAWebDBBulkPersistProfilePic").bulkPersistProfilePicChanges([
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
      await o("WAWebBackendApi").frontendSendAndReceive(
        "updateNewsletterMetadata",
        { metadata: t, newsletter: e, pic: n },
      );
    }
    l.updateNewsletterMetadataAndPic = e;
  },
  98,
);
