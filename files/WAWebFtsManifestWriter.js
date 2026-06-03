__d(
  "WAWebFtsManifestWriter",
  [
    "WALogger",
    "WAWebFtsBaseManifestReaderWriter",
    "WAWebFtsStorage",
    "WAWebSchemaManifest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = { 3.1: ["3"] },
      p = (function (t) {
        function r() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.$WaWcManifestWriter$p_1 = function (t) {
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
          (a.$WaWcManifestWriter$p_2 = function (t, n) {
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
          (a.setLatestVersion = function (r, a) {
            return this.__performReadWriteOperation(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t,
                  n = yield o("WAWebFtsStorage")
                    .getManifestTable()
                    .get(o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION);
                if (n == null)
                  (yield o("WAWebFtsStorage")
                    .getManifestTable()
                    .createOrReplace({
                      isCurrent: !0,
                      key: o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
                      schemaVersion: r,
                      tokenizerVersion: a,
                      isFullIndexingComplete: !1,
                    }),
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[fts][manifest-writer] set current version to [",
                          ", ",
                          "]",
                        ])),
                      r,
                      a,
                    ));
                else if (
                  (n.schemaVersion !== r &&
                    !((t = m[r]) != null && t.includes(n.schemaVersion))) ||
                  n.tokenizerVersion !== a
                ) {
                  var i = yield o("WAWebFtsStorage")
                    .getManifestTable()
                    .get(o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION);
                  i == null || i.schemaVersion !== r || i.tokenizerVersion !== a
                    ? (yield o("WAWebFtsStorage")
                        .getManifestTable()
                        .createOrReplace({
                          isCurrent: !1,
                          key: o("WAWebSchemaManifest").ManifestKeys
                            .NEXT_VERSION,
                          schemaVersion: r,
                          tokenizerVersion: a,
                          isFullIndexingComplete: !1,
                        }),
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts][manifest-writer] set next version to [",
                            ", ",
                            "]",
                          ])),
                        r,
                        a,
                      ))
                    : o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[fts][manifest-writer] no change, next version=[",
                            ", ",
                            "]",
                          ])),
                        r,
                        a,
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
                    n.schemaVersion,
                    n.tokenizerVersion,
                    r,
                    a,
                  );
              }),
            );
          }),
          (a.upgradeVersion = function () {
            return this.__performReadWriteOperation(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e,
                  t,
                  n = yield (e = o("WAWebFtsStorage"))
                    .getManifestTable()
                    .get(
                      (t = o("WAWebSchemaManifest")).ManifestKeys.CURR_VERSION,
                    ),
                  r = yield e
                    .getManifestTable()
                    .get(t.ManifestKeys.NEXT_VERSION);
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
                  yield e
                    .getManifestTable()
                    .remove(t.ManifestKeys.NEXT_VERSION),
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
              }),
            );
          }),
          (a.markFullIndexingComplete = function (t) {
            return (
              t === void 0 && (t = !0),
              this.$WaWcManifestWriter$p_1(
                t
                  ? o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION
                  : o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
              )
            );
          }),
          (a.updateLastFullIndexBatch = function (t, n) {
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
          r
        );
      })(r("WAWebFtsBaseManifestReaderWriter"));
    l.default = p;
  },
  98,
);
