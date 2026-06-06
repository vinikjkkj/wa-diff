__d(
  "WAWebStickerDownloadCollection",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebIdleTaskRunner",
    "WAWebSchemaStickerDownload",
    "WAWebStickerPackCollectionMd",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.addAndPersist = function (n) {
            if (this.get(n.id) != null) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Sticker Download: sticker pack already exists in collection",
                  ])),
              );
              return;
            }
            (this.add(n), this.$StickerDownloadCollectionImpl$p_2());
          }),
          (r.$StickerDownloadCollectionImpl$p_2 = function () {
            var e = this;
            (!this.$StickerDownloadCollectionImpl$p_1 ||
              !o("WAWebIdleTaskRunner").IdleCallbackTasks.isInQueue(
                this.$StickerDownloadCollectionImpl$p_1,
              )) &&
              (this.$StickerDownloadCollectionImpl$p_1 = o(
                "WAWebIdleTaskRunner",
              ).IdleCallbackTasks.enqueue(function () {
                e.$StickerDownloadCollectionImpl$p_3();
              }));
          }),
          (r.$StickerDownloadCollectionImpl$p_3 = async function () {
            var e = this.toArray().map(function (e) {
              return { id: e.id, timestamp: o("WATimeUtils").unixTime() };
            });
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[StickerDownload] saving to DB, count=",
                  "",
                ])),
              e.length,
            );
            try {
              var t = o("WAWebSchemaStickerDownload").getStickerDownloadTable(),
                n = await t.count();
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[StickerDownload] before save, DB count=",
                    "",
                  ])),
                n,
              ),
                await t.clear(),
                await t.bulkCreateOrReplace(e),
                (n = await t.count()),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[StickerDownload] after save, DB count=",
                      "",
                    ])),
                  n,
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "StickerDownloadCollection attempt to save to database failed",
                    ])),
                )
                .sendLogs(String(e));
            }
          }),
          n
        );
      })(o("WAWebStickerPackCollectionMd").StickerPackCollection),
      p = new m();
    l.StickerDownloadCollection = p;
  },
  98,
);
