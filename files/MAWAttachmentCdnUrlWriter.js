__d(
  "MAWAttachmentCdnUrlWriter",
  ["MAWAttachmentCdnUrlDb", "MpsErrors", "WmiErrorReport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      if (e.length !== 0) {
        var t = Array.from(
            new Map(
              e.map(function (e) {
                return [e.objectId, e];
              }),
            ).values(),
          ),
          n = await o("MAWAttachmentCdnUrlDb").getAttachmentCdnUrlDbPromise();
        try {
          await n.runInTransaction(
            ["attachmentCdnUrls"],
            "readwrite",
            function (e) {
              return e.stores.attachmentCdnUrls.bulkPut(t);
            },
            "MAWAttachmentCdnUrlWriteRows",
          );
        } catch (e) {
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(
              e,
              "attachment_cdn_url_write",
              "infra",
            ),
            { loggerTags: ["maw_attachment_cdn_url_write"] },
          );
        }
      }
    }
    l.writeAttachmentCdnUrls = e;
  },
  98,
);
