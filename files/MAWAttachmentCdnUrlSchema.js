__d(
  "MAWAttachmentCdnUrlSchema",
  [
    "MAWWormOdsLogger",
    "MpsErrors",
    "Promise",
    "WAHex",
    "WmiErrorReport",
    "WmiReportIfFails",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        autoIncrement: !1,
        indexes: {},
        primaryKey: "objectId",
        secure: !0,
      },
      u = { attachmentCdnUrls: s };
    function c(t) {
      var r = t.blockingErrorThreshold,
        a = t.dbName,
        i = t.onBlockingError,
        l = t.qplEvent,
        s = t.strEncKey,
        c = o("WAHex").parseHex(s),
        d = "maw_attachment_cdn_urls",
        m = new (o("WormEarAsync").WormEarAsync)(u, d, c),
        p = null,
        _ = new (o("Worm").WormDatabase)(
          new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
            a,
            d,
            u,
            m,
            o("MAWWormOdsLogger").wormOdsWorkerLogger,
            {
              blockingErrorThreshold: r,
              onBlockingError: i,
              onTransactionError: function (r) {
                if (
                  r instanceof o("WormEarAsync").DecryptionError &&
                  (o("WmiErrorReport").reportWmiError(
                    o("MpsErrors").MpsErrors.error(
                      "entity_decryption_failed",
                      "EAR decryption error in store: %s. Dropping corrupted entity %s (%s)",
                      r.store,
                      r.maybeHashedPk,
                      r.message,
                    ),
                  ),
                  r.store === "attachmentCdnUrls")
                ) {
                  var t = r.maybeHashedPk;
                  o("WmiReportIfFails").wmiReportIfFails(
                    function () {
                      var r, o;
                      return (r =
                        (o = p) == null
                          ? void 0
                          : o.runInTransaction(
                              ["attachmentCdnUrls"],
                              "readwrite",
                              function (e) {
                                return t != null
                                  ? e.stores.attachmentCdnUrls.delete(t)
                                  : e.stores.attachmentCdnUrls.clear();
                              },
                              "delete-corrupted-entity",
                            )) != null
                        ? r
                        : (e || (e = n("Promise"))).resolve();
                    },
                    function (e, t) {
                      return o("MpsErrors").MpsErrors.classify(e, t, "infra");
                    },
                    "delete_corrupted_cdn_url",
                    { loggerTags: ["maw_attachment_cdn_url_write"] },
                  );
                }
              },
            },
          ),
          l,
        );
      return ((p = _), _);
    }
    l.makeSchema = c;
  },
  98,
);
