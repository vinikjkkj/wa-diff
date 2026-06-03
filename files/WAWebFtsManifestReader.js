__d(
  "WAWebFtsManifestReader",
  [
    "Promise",
    "WANullthrows",
    "WAWebFtsBaseManifestReaderWriter",
    "WAWebFtsStorage",
    "WAWebSchemaManifest",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$WaWcManifestReader$p_1 = function (t) {
            if (t != null) {
              var e = t.isFullIndexingComplete,
                n = t.key,
                r = t.lastMsgKeyViaFullIndexer,
                a = t.schemaVersion,
                i = t.tokenizerVersion;
              return {
                tokenizerVersion: i,
                schemaVersion: a,
                isCurrent:
                  n === o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
                lastMsgKeyViaFullIndexer: r,
                isFullIndexingComplete: e,
              };
            }
            return null;
          }),
          (i.$WaWcManifestReader$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebFtsStorage").getManifestTable().get(e);
                return this.$WaWcManifestReader$p_1(t);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WaWcManifestReader$p_3 = function () {
            return this.$WaWcManifestReader$p_2(
              o("WAWebSchemaManifest").ManifestKeys.PREV_VERSION,
            );
          }),
          (i.$WaWcManifestReader$p_4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield this.$WaWcManifestReader$p_2(
                o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
              );
              return r("WANullthrows")(e);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$WaWcManifestReader$p_5 = function () {
            return this.$WaWcManifestReader$p_2(
              o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
            );
          }),
          (i.versions = function () {
            var t = this;
            return this.__performReadWriteOperation(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var r = yield (e || (e = n("Promise"))).all([
                    t.$WaWcManifestReader$p_4(),
                    t.$WaWcManifestReader$p_5(),
                    t.$WaWcManifestReader$p_3(),
                  ]),
                  o = r[0],
                  a = r[1],
                  i = r[2];
                return { current: o, next: a, previous: i };
              }),
            );
          }),
          (i.previousVersion = function () {
            var e = this;
            return this.__performReadWriteOperation(function () {
              return e.$WaWcManifestReader$p_3();
            });
          }),
          (i.currentVersion = function () {
            var e = this;
            return this.__performReadWriteOperation(function () {
              return e.$WaWcManifestReader$p_4();
            });
          }),
          (i.nextVersion = function () {
            var e = this;
            return this.__performReadWriteOperation(function () {
              return e.$WaWcManifestReader$p_5();
            });
          }),
          a
        );
      })(r("WAWebFtsBaseManifestReaderWriter"));
    l.default = s;
  },
  98,
);
