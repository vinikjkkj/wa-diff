__d(
  "WAWebMediaArrayBufferIdbStore",
  [
    "Promise",
    "WAWebAbstractStore",
    "WAWebLruMediaStorage",
    "WAWebMediaLruIdbStoreUtils",
    "WAWebSchemaLruMediaArrayBuffer",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function a(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$ArrayBufferIdbStore$p_1 = new (r("WAWebMediaLruIdbStoreUtils"))(
              o("WAWebLruMediaStorage").initialize,
              o("WAWebSchemaLruMediaArrayBuffer").IdbArrayBufferTable,
            )),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.doGet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$ArrayBufferIdbStore$p_1.get(e);
                return t ? t.data : null;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doQueryByIndex = function (t, n) {
            throw r("err")(
              "Not implemented. Actual Arraybuffer store does not need it.",
            );
          }),
          (i.doGetAll = function () {
            throw r("err")(
              "Not implemented. Actual Arraybuffer store does not need it.",
            );
          }),
          (i.doPut = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$ArrayBufferIdbStore$p_1.put(e, {
                  id: e,
                  data: t,
                });
                return n.data;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.doDel = function (t) {
            return this.$ArrayBufferIdbStore$p_1.del(t);
          }),
          (i.doCount = function () {
            return this.$ArrayBufferIdbStore$p_1.count();
          }),
          (i.clear = function () {
            return this.$ArrayBufferIdbStore$p_1.clear();
          }),
          (i.doOpen = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          (i.doClose = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          a
        );
      })(r("WAWebAbstractStore"));
    l.default = s;
  },
  98,
);
