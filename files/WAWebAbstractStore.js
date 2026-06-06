__d(
  "WAWebAbstractStore",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.open = function () {
          var e = this;
          return this.$2
            ? this.$2
            : this.$1
              ? ((this.$2 = this.$1
                  .catch(function (t) {
                    throw ((e.$2 = null), t);
                  })
                  .then(function () {
                    return ((e.$2 = null), e.open());
                  })),
                this.$2)
              : ((this.$2 = this.doOpen()
                  .catch(function (t) {
                    throw ((e.$2 = null), t);
                  })
                  .then(function () {
                    e.$2 = null;
                  })),
                this.$2);
        }),
        (t.close = function () {
          var e = this;
          return this.$1
            ? this.$1
            : this.$2
              ? ((this.$1 = this.$2
                  .catch(function (t) {
                    throw ((e.$1 = null), t);
                  })
                  .then(function () {
                    return ((e.$1 = null), e.close());
                  })),
                this.$1)
              : ((this.$1 = this.doClose()
                  .catch(function (t) {
                    throw ((e.$1 = null), t);
                  })
                  .then(function () {
                    e.$1 = null;
                  })),
                this.$1);
        }),
        (t.get = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (yield this.open(), this.doGet(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.queryByIndex = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return (yield this.open(), this.doQueryByIndex(e, t));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getAll = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (yield this.open(), this.doGetAll());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.put = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              return (yield this.open(), this.doPut(e, t));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.del = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            return (yield this.open(), this.doDel(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.count = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (yield this.open(), this.doCount());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.clear = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (yield this.open(), this.doClear());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.doGet = function (t) {
          throw r("err")("Not implemented");
        }),
        (t.doQueryByIndex = function (t, n) {
          throw r("err")("Not implemented");
        }),
        (t.doGetAll = function () {
          throw r("err")("Not implemented");
        }),
        (t.doPut = function (t, n) {
          throw r("err")("Not implemented");
        }),
        (t.doDel = function (t) {
          throw r("err")("Not implemented");
        }),
        (t.doCount = function () {
          throw r("err")("Not implemented");
        }),
        (t.doClear = function () {
          throw r("err")("Not implemented");
        }),
        (t.doOpen = function () {
          throw r("err")("Not implemented");
        }),
        (t.doClose = function () {
          throw r("err")("Not implemented");
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
