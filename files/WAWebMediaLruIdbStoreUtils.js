__d(
  "WAWebMediaLruIdbStoreUtils",
  ["Promise", "WAWebAbstractStore", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function r(e, n) {
          var r;
          return (
            (r = t.call(this) || this),
            (r.$IdbStore$p_1 = e),
            (r.$IdbStore$p_2 = n),
            r
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.doGet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (yield this.$IdbStore$p_1(), this.$IdbStore$p_2.get(e));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doQueryByIndex = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return (
                  yield this.$IdbStore$p_1(),
                  this.$IdbStore$p_2.all({ limit: t.limit, index: [e] })
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doGetAll = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield this.$IdbStore$p_1(), this.$IdbStore$p_2.all());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doPut = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this;
                return (
                  yield this.$IdbStore$p_1().then(function () {
                    return n.$IdbStore$p_2.createOrReplace(t);
                  }),
                  t
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doDel = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  yield this.$IdbStore$p_1(),
                  this.$IdbStore$p_2.remove(e)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doCount = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield this.$IdbStore$p_1(), this.$IdbStore$p_2.count());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doClear = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield this.$IdbStore$p_1(), this.$IdbStore$p_2.clear(!0));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.doOpen = function () {
            return this.$IdbStore$p_1();
          }),
          (o.doClose = function () {
            return (e || (e = n("Promise"))).resolve();
          }),
          r
        );
      })(r("WAWebAbstractStore"));
    l.default = s;
  },
  98,
);
