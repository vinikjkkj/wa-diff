__d(
  "WAWebMediaArrayBufferIdbStore",
  [
    "WAWebAbstractStore",
    "WAWebLruMediaStorage",
    "WAWebMediaLruIdbStoreUtils",
    "WAWebSchemaLruMediaArrayBuffer",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$ArrayBufferIdbStore$p_1 = new (r("WAWebMediaLruIdbStoreUtils"))(
            o("WAWebLruMediaStorage").initialize,
            o("WAWebSchemaLruMediaArrayBuffer").IdbArrayBufferTable,
          )),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.doGet = async function (t) {
          var e = await this.$ArrayBufferIdbStore$p_1.get(t);
          return e ? e.data : null;
        }),
        (n.doQueryByIndex = function (t, n) {
          throw r("err")(
            "Not implemented. Actual Arraybuffer store does not need it.",
          );
        }),
        (n.doGetAll = function () {
          throw r("err")(
            "Not implemented. Actual Arraybuffer store does not need it.",
          );
        }),
        (n.doPut = async function (t, n) {
          var e = await this.$ArrayBufferIdbStore$p_1.put(t, {
            id: t,
            data: n,
          });
          return e.data;
        }),
        (n.doDel = function (t) {
          return this.$ArrayBufferIdbStore$p_1.del(t);
        }),
        (n.doCount = function () {
          return this.$ArrayBufferIdbStore$p_1.count();
        }),
        (n.clear = function () {
          return this.$ArrayBufferIdbStore$p_1.clear();
        }),
        (n.doOpen = function () {
          return Promise.resolve();
        }),
        (n.doClose = function () {
          return Promise.resolve();
        }),
        t
      );
    })(r("WAWebAbstractStore"));
    l.default = e;
  },
  98,
);
