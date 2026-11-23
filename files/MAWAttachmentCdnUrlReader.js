__d(
  "MAWAttachmentCdnUrlReader",
  [
    "MAWAttachmentCdnUrlDb",
    "MpsErrors",
    "WADirectPath",
    "WATimeUtils",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30 * o("WATimeUtils").DAY_MILLISECONDS;
    async function s(t) {
      var n = await o("MAWAttachmentCdnUrlDb").getAttachmentCdnUrlDbPromise();
      try {
        var r = await n.runInTransaction(
          ["attachmentCdnUrls"],
          "readonly",
          function (e) {
            return e.stores.attachmentCdnUrls.get(t);
          },
          "MAWAttachmentCdnUrlReadRow",
        );
        return r == null || o("WATimeUtils").millisTime() - r.timestampMs > e
          ? null
          : o("WADirectPath").validateDirectPath(r.cdnUrl).value;
      } catch (e) {
        return (
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(
              e,
              "attachment_cdn_url_read",
              "infra",
            ),
            { loggerTags: ["maw_attachment_cdn_url_read"] },
          ),
          null
        );
      }
    }
    l.getAttachmentCdnUrlDirectPath = s;
  },
  98,
);
