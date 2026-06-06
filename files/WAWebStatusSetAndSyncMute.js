__d(
  "WAWebStatusSetAndSyncMute",
  [
    "WATimeUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSyncdCoreApi",
    "WAWebUserStatusMuteSync",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await r("WAWebUserStatusMuteSync").getMutationForStatusMute(
        e,
        t,
        o("WATimeUtils").unixTimeMs(),
      );
      e.isGroup()
        ? await o("WAWebSyncdCoreApi").lockForSync(
            ["group-metadata"],
            [n],
            function () {
              return o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .merge(e.toString(), { statusMute: t });
            },
          )
        : e.isNewsletter()
          ? await o("WAWebSyncdCoreApi").lockForSync(
              ["newsletter-metadata"],
              [n],
              function () {
                return o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .merge(e.toString(), { statusMute: t });
              },
            )
          : await o("WAWebSyncdCoreApi").lockForSync(
              ["contact"],
              [n],
              function () {
                return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                  .getContactTable()
                  .merge(e.toString({ legacy: !0 }), { statusMute: t });
              },
            );
    }
    l.setAndSyncStatusMute = e;
  },
  98,
);
