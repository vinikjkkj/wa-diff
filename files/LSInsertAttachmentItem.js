__d(
  "LSInsertAttachmentItem",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db
            .table(18)
            .add({
              attachmentFbid: e[0],
              attachmentIndex: e[1],
              threadKey: e[2],
              messageId: e[4],
              defaultActionEnableExtensions: e[31],
              originalPageSenderId: e[7],
              titleText: e[8],
              subtitleText: e[9],
              bodyText: e[12],
              playableUrl: e[13],
              playableUrlFallback: e[14],
              playableUrlExpirationTimestampMs: e[15],
              playableUrlMimeType: e[16],
              dashManifest: e[17],
              previewUrl: e[18],
              previewUrlFallback: e[19],
              previewUrlExpirationTimestampMs: e[20],
              previewUrlMimeType: e[21],
              previewWidth: e[22],
              previewHeight: e[23],
              imageUrl: e[24],
              defaultCtaId: e[25],
              defaultCtaTitle: e[26],
              defaultCtaType: e[27],
              defaultButtonType: e[29],
              defaultActionUrl: e[30],
              defaultWebviewHeightRatio: e[33],
              attachmentCta1Id: e[35],
              cta1Title: e[36],
              cta1IconType: e[37],
              cta1Type: e[38],
              attachmentCta2Id: e[40],
              cta2Title: e[41],
              cta2IconType: e[42],
              cta2Type: e[43],
              attachmentCta3Id: e[45],
              cta3Title: e[46],
              cta3IconType: e[47],
              cta3Type: e[48],
              faviconUrl: e[49],
              faviconUrlFallback: e[50],
              faviconUrlExpirationTimestampMs: e[51],
              previewUrlLarge: e[52],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxInsertAttachmentItemStoredProcedure"),
      (e.__tables__ = ["attachment_items"]),
      (a.exports = e));
  },
  null,
);
