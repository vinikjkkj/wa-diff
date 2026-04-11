__d(
  "WAWebStickerDownloadCollection",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebIdleTaskRunner",
    "WAWebSchemaStickerDownload",
    "WAWebStickerPackCollectionMd",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.addAndPersist = function (n) {
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
          (a.$StickerDownloadCollectionImpl$p_2 = function () {
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
          (a.$StickerDownloadCollectionImpl$p_3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                var t = o(
                    "WAWebSchemaStickerDownload",
                  ).getStickerDownloadTable(),
                  n = yield t.count();
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[StickerDownload] before save, DB count=",
                      "",
                    ])),
                  n,
                ),
                  yield t.clear(),
                  yield t.bulkCreateOrReplace(e),
                  (n = yield t.count()),
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
                  .sendLogs(e);
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebStickerPackCollectionMd").StickerPackCollection),
      p = new m();
    l.StickerDownloadCollection = p;
  },
  98,
);
