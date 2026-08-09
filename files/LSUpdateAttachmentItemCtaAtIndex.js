__d(
  "LSUpdateAttachmentItemCtaAtIndex",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.i64.eq(e[5], t.i64.cast([0, 0]))
            ? t.forEach(t.db.table(18).fetch([[[e[0], e[1]]]]), function (t) {
                var n = t.update,
                  r = t.item;
                return n({
                  defaultCtaId: e[2],
                  defaultCtaTitle: e[3],
                  defaultCtaType: e[4],
                });
              })
            : t.i64.eq(e[5], t.i64.cast([0, 1]))
              ? t.forEach(t.db.table(18).fetch([[[e[0], e[1]]]]), function (t) {
                  var n = t.update,
                    r = t.item;
                  return n({
                    attachmentCta1Id: e[2],
                    cta1Title: e[3],
                    cta1Type: e[4],
                    cta1IconType: void 0,
                  });
                })
              : t.i64.eq(e[5], t.i64.cast([0, 2]))
                ? t.forEach(
                    t.db.table(18).fetch([[[e[0], e[1]]]]),
                    function (t) {
                      var n = t.update,
                        r = t.item;
                      return n({
                        attachmentCta2Id: e[2],
                        cta2Title: e[3],
                        cta2Type: e[4],
                        cta2IconType: void 0,
                      });
                    },
                  )
                : t.i64.eq(e[5], t.i64.cast([0, 3]))
                  ? t.forEach(
                      t.db.table(18).fetch([[[e[0], e[1]]]]),
                      function (t) {
                        var n = t.update,
                          r = t.item;
                        return n({
                          attachmentCta3Id: e[2],
                          cta3Title: e[3],
                          cta3Type: e[4],
                          cta3IconType: void 0,
                        });
                      },
                    )
                  : t.resolve(
                      (function (e) {
                        t.logger(e).warn(e);
                      })("Unexpected CTA index"),
                    );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxUpdateAttachmentItemCtaAtIndexStoredProcedure"),
      (e.__tables__ = ["attachment_items"]),
      (a.exports = e));
  },
  null,
);
