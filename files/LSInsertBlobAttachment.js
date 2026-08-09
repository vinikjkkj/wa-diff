__d(
  "LSInsertBlobAttachment",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.sequence([
            function (n) {
              return t.forEach(
                t.filter(
                  t.db.table(16).fetch([[[e[27], e[32], e[34]]]]),
                  function (n) {
                    return (
                      t.i64.eq(n.threadKey, e[27]) &&
                      t.i64.eq(t.i64.cast([0, 0]), e[28]) &&
                      n.messageId === e[32] &&
                      n.attachmentFbid === e[34] &&
                      t.i64.lt(n.authorityLevel, e[48]) &&
                      (t.i64.eq(n.attachmentType, t.i64.cast([0, 2])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 3])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 4])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 5])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 6])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 10])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 14])) ||
                        t.i64.eq(n.attachmentType, t.i64.cast([0, 15]))) &&
                      t.i64.eq(n.ephemeralMediaState, void 0) &&
                      n.isSharable === !1
                    );
                  },
                ),
                function (e) {
                  return e.delete();
                },
              );
            },
            function (n) {
              return t.db
                .table(16)
                .add({
                  threadKey: e[27],
                  messageId: e[32],
                  attachmentFbid: e[34],
                  filename: e[0],
                  filesize: e[1],
                  hasMedia: e[2],
                  isSharable: !1,
                  playableUrl: e[3],
                  playableUrlFallback: e[4],
                  playableUrlExpirationTimestampMs: e[5],
                  playableUrlMimeType: e[6],
                  dashManifest: e[7],
                  previewUrl: e[8],
                  previewUrlFallback: e[9],
                  previewUrlExpirationTimestampMs: e[10],
                  previewUrlMimeType: e[11],
                  miniPreview: e[13],
                  previewWidth: e[14],
                  previewHeight: e[15],
                  attributionAppId: e[16],
                  attributionAppName: e[17],
                  attributionAppIcon: e[18],
                  attributionAppIconFallback: e[19],
                  attributionAppIconUrlExpirationTimestampMs: e[20],
                  localPlayableUrl: e[21],
                  playableDurationMs: e[22],
                  attachmentIndex: e[23],
                  accessibilitySummaryText: e[24],
                  isPreviewImage: e[25],
                  originalFileHash: e[26],
                  attachmentType: e[29],
                  timestampMs: e[31],
                  offlineAttachmentId: e[33],
                  hasXma: e[35],
                  xmaLayoutType: e[36],
                  xmasTemplateType: e[37],
                  titleText: e[38],
                  subtitleText: e[39],
                  descriptionText: e[40],
                  sourceText: e[41],
                  faviconUrlExpirationTimestampMs: e[42],
                  isBorderless: e[44],
                  previewUrlLarge: e[45],
                  samplingFrequencyHz: e[46],
                  waveformData: e[47],
                  authorityLevel: e[48],
                });
            },
          ]);
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxInsertBlobAttachmentStoredProcedure"),
      (e.__tables__ = ["attachments"]),
      (a.exports = e));
  },
  null,
);
