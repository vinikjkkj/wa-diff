__d(
  "WAWebFtsManifestReader",
  [
    "WANullthrows",
    "WAWebFtsBaseManifestReaderWriter",
    "WAWebFtsStorage",
    "WAWebSchemaManifest",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$WaWcManifestReader$p_1 = function (t) {
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
        (n.$WaWcManifestReader$p_2 = async function (t) {
          var e = await o("WAWebFtsStorage").getManifestTable().get(t);
          return this.$WaWcManifestReader$p_1(e);
        }),
        (n.$WaWcManifestReader$p_3 = function () {
          return this.$WaWcManifestReader$p_2(
            o("WAWebSchemaManifest").ManifestKeys.PREV_VERSION,
          );
        }),
        (n.$WaWcManifestReader$p_4 = async function () {
          var e = await this.$WaWcManifestReader$p_2(
            o("WAWebSchemaManifest").ManifestKeys.CURR_VERSION,
          );
          return r("WANullthrows")(e);
        }),
        (n.$WaWcManifestReader$p_5 = function () {
          return this.$WaWcManifestReader$p_2(
            o("WAWebSchemaManifest").ManifestKeys.NEXT_VERSION,
          );
        }),
        (n.versions = function () {
          var e = this;
          return this.__performReadWriteOperation(async function () {
            var t = await Promise.all([
                e.$WaWcManifestReader$p_4(),
                e.$WaWcManifestReader$p_5(),
                e.$WaWcManifestReader$p_3(),
              ]),
              n = t[0],
              r = t[1],
              o = t[2];
            return { current: n, next: r, previous: o };
          });
        }),
        (n.previousVersion = function () {
          var e = this;
          return this.__performReadWriteOperation(function () {
            return e.$WaWcManifestReader$p_3();
          });
        }),
        (n.currentVersion = function () {
          var e = this;
          return this.__performReadWriteOperation(function () {
            return e.$WaWcManifestReader$p_4();
          });
        }),
        (n.nextVersion = function () {
          var e = this;
          return this.__performReadWriteOperation(function () {
            return e.$WaWcManifestReader$p_5();
          });
        }),
        t
      );
    })(r("WAWebFtsBaseManifestReaderWriter"));
    l.default = e;
  },
  98,
);
