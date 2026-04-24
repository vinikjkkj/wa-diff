__d(
  "relay-runtime/store/NormalizationEngine",
  [
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/defaultGetDataID",
    "warning",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      l = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      s = (function () {
        function t(t) {
          var r, o, a, i, l;
          ((this.$1 = t.normalizeResponse),
            (this.$3 = {
              dataID: e,
              node: t.operation,
              variables: t.variables,
            }),
            (this.$2 = {
              deferDeduplicatedFields: !1,
              getDataID:
                (r = t.getDataID) != null
                  ? r
                  : n("relay-runtime/store/defaultGetDataID"),
              log: null,
              path: [],
              treatMissingFieldsAsNull:
                (o = t.treatMissingFieldsAsNull) != null ? o : !1,
            }),
            (this.$4 =
              (a =
                (i = t.operation.use_exec_time_resolvers) != null
                  ? i
                  : ((l = t.operation.exec_time_resolvers_enabled_provider) ==
                    null
                      ? void 0
                      : l.get()) === !0) != null
                ? a
                : !1));
        }
        var r = t.prototype;
        return (
          (r.processResponse = function (t) {
            var e = this.$1(t, this.$3, l, this.$2, this.$4);
            return babelHelpers.extends({}, e, {
              followupPayloads: null,
              incrementalPlaceholders: null,
              isPreNormalized: !0,
            });
          }),
          t
        );
      })();
    a.exports = s;
  },
  null,
);
