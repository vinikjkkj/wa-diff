__d(
  "LSInsertAttachmentCta",
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
            .table(19)
            .add({
              ctaId: e[0],
              attachmentFbid: e[1],
              attachmentIndex: e[2],
              threadKey: e[3],
              messageId: e[5],
              title: e[6],
              type_: e[7],
              platformToken: e[8],
              actionUrl: e[9],
              nativeUrl: e[10],
              urlWebviewType: e[11],
              actionContentBlob: e[12],
              enableExtensions: e[13],
              extensionHeightType: e[14],
              targetId: e[15],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSMailboxInsertAttachmentCtaStoredProcedure"),
      (e.__tables__ = ["attachment_ctas"]),
      (a.exports = e));
  },
  null,
);
