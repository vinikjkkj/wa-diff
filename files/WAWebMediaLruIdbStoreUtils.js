__d(
  "WAWebMediaLruIdbStoreUtils",
  ["WAWebAbstractStore"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.$IdbStore$p_1 = t),
          (r.$IdbStore$p_2 = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.doGet = async function (t) {
          return (await this.$IdbStore$p_1(), this.$IdbStore$p_2.get(t));
        }),
        (n.doQueryByIndex = async function (t, n) {
          return (
            await this.$IdbStore$p_1(),
            this.$IdbStore$p_2.all({ limit: n.limit, index: [t] })
          );
        }),
        (n.doGetAll = async function () {
          return (await this.$IdbStore$p_1(), this.$IdbStore$p_2.all());
        }),
        (n.doPut = async function (t, n) {
          var e = this;
          return (
            await this.$IdbStore$p_1().then(function () {
              return e.$IdbStore$p_2.createOrReplace(n);
            }),
            n
          );
        }),
        (n.doDel = async function (t) {
          return (await this.$IdbStore$p_1(), this.$IdbStore$p_2.remove(t));
        }),
        (n.doCount = async function () {
          return (await this.$IdbStore$p_1(), this.$IdbStore$p_2.count());
        }),
        (n.doClear = async function () {
          return (await this.$IdbStore$p_1(), this.$IdbStore$p_2.clear(!0));
        }),
        (n.doOpen = function () {
          return this.$IdbStore$p_1();
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
