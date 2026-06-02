__d(
  "WAWebFtsManifestWriter",
  [
    "WALogger",
    "WAWebFtsBaseManifestReaderWriter",
    "WAWebFtsStorage",
    "WAWebSchemaManifest",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { 3.1: ["3"] },
      p = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$WaWcManifestWriter$p_1 = function (t) {
            return this.__performReadWriteOperation(function () {
              return o("WAWebFtsStorage")
                .getManifestTable()
                .createOrMerge(t, {
                  key: t,
                  isCurrent:
                    t === o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
                  isFullIndexingComplete: !0,
                });
            });
          }),
          (r.$WaWcManifestWriter$p_2 = function (t, n) {
            return this.__performReadWriteOperation(function () {
              return o("WAWebFtsStorage")
                .getManifestTable()
                .createOrMerge(t, {
                  key: t,
                  isCurrent:
                    t === o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
                  lastMsgKeyViaFullIndexer: n,
                });
            });
          }),
          (r.setLatestVersion = function (n, r) {
            return this.__performReadWriteOperation(async function () {
              var t,
                a = await o("WAWebFtsStorage")
                  .getManifestTable()
                  .get(o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION);
              if (a == null)
                (await o("WAWebFtsStorage")
                  .getManifestTable()
                  .createOrReplace({
                    isCurrent: !0,
                    key: o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
                    schemaVersion: n,
                    tokenizerVersion: r,
                    isFullIndexingComplete: !1,
                  }),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[fts][manifest-writer] set current version to [",
                        ", ",
                        "]",
                      ])),
                    n,
                    r,
                  ));
              else if (
                (a.schemaVersion !== n &&
                  !((t = m[n]) != null && t.includes(a.schemaVersion))) ||
                a.tokenizerVersion !== r
              ) {
                var i = await o("WAWebFtsStorage")
                  .getManifestTable()
                  .get(o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION);
                i == null || i.schemaVersion !== n || i.tokenizerVersion !== r
                  ? (await o("WAWebFtsStorage")
                      .getManifestTable()
                      .createOrReplace({
                        isCurrent: !1,
                        key: o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
                        schemaVersion: n,
                        tokenizerVersion: r,
                        isFullIndexingComplete: !1,
                      }),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][manifest-writer] set next version to [",
                          ", ",
                          "]",
                        ])),
                      n,
                      r,
                    ))
                  : o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][manifest-writer] no change, next version=[",
                          ", ",
                          "]",
                        ])),
                      n,
                      r,
                    );
              } else
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][manifest-writer] no change, curr:[",
                      ", ",
                      "] latest:[",
                      ", ",
                      "]",
                    ])),
                  a.schemaVersion,
                  a.tokenizerVersion,
                  n,
                  r,
                );
            });
          }),
          (r.upgradeVersion = function () {
            return this.__performReadWriteOperation(async function () {
              var e,
                t,
                n = await (e = o("WAWebFtsStorage"))
                  .getManifestTable()
                  .get(
                    (t = o("WAWebSchemaManifest")).ManifestKeys.CURR_VERSION,
                  ),
                r = await e.getManifestTable().get(t.ManifestKeys.NEXT_VERSION);
              (e
                .getManifestTable()
                .bulkCreateOrReplace([
                  babelHelpers.extends({}, n, {
                    isCurrent: !1,
                    key: t.ManifestKeys.PREV_VERSION,
                  }),
                  babelHelpers.extends({}, r, {
                    isCurrent: !0,
                    key: t.ManifestKeys.CURR_VERSION,
                  }),
                ]),
                await e.getManifestTable().remove(t.ManifestKeys.NEXT_VERSION),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts][manifest-writer] upgraded version [",
                      ", ",
                      "] -> [",
                      ", ",
                      "]",
                    ])),
                  n == null ? void 0 : n.schemaVersion,
                  n == null ? void 0 : n.tokenizerVersion,
                  r == null ? void 0 : r.schemaVersion,
                  r == null ? void 0 : r.tokenizerVersion,
                ));
            });
          }),
          (r.markFullIndexingComplete = function (t) {
            return (
              t === void 0 && (t = !0),
              this.$WaWcManifestWriter$p_1(
                t
                  ? o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION
                  : o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
              )
            );
          }),
          (r.updateLastFullIndexBatch = function (t, n) {
            return (
              t === void 0 && (t = !0),
              this.$WaWcManifestWriter$p_2(
                t
                  ? o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION
                  : o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
                n,
              )
            );
          }),
          n
        );
      })(r("WAWebFtsBaseManifestReaderWriter"));
    l.default = p;
  },
  98,
);
