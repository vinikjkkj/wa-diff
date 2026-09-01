__d(
  "WormPersistedQueue",
  [
    "FBLogger",
    "WAPubSub",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return r("FBLogger")("wmi").tags(["worm-persisted-queue"]);
      },
      s = 36e5;
    function u(e, t) {
      return new c(e, t);
    }
    var c = (function () {
      function t(e, t) {
        ((this.$1 = 0),
          (this.$2 = o("WAPubSub").simplePubSub()),
          (this.name = e),
          (this.store = t));
      }
      var a = t.prototype;
      return (
        (a.attachStoreRunner = function (t) {
          this.$3 = t;
        }),
        (a.isReady = function () {
          return this.$3 != null;
        }),
        (a.subscribe = function (t) {
          return this.$2.subscribe(t);
        }),
        (a.add = function (t) {
          return this.put(t);
        }),
        (a.put = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            e.length !== 0 &&
              (yield this.$4("put").write(this.$5("put"), function (t) {
                return t.bulkPut(e);
              }),
              this.$2.publish({ type: "new_entities" }));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.ack = function (t) {
          return this.delete(t);
        }),
        (a.delete = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            e.length !== 0 &&
              (yield this.$4("delete").write(this.$5("delete"), function (t) {
                return t.bulkDelete(e);
              }),
              yield this.$6());
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.read = function (t) {
          return this.$4("read").read(this.$5("read"), function (e) {
            return e.readAll(t);
          });
        }),
        (a.readFromIndex = function (t, n) {
          return this.$4("readFromIndex").read(
            this.$5("readIndex"),
            function (e) {
              return e.readIndex(t, void 0, n);
            },
          );
        }),
        (a.readFromIndexRange = function (t, n, r) {
          return this.$4("readFromIndexRange").read(
            this.$5("readIndexRange"),
            function (e) {
              return e.readIndexRange(t, n, r);
            },
          );
        }),
        (a.getFromIndex = function (t, n) {
          return this.$4("getFromIndex").read(
            this.$5("getByIndex"),
            function (e) {
              return e.getByIndex(t, n);
            },
          );
        }),
        (a.count = function () {
          return this.$4("count").read(this.$5("count"), function (e) {
            return e.count();
          });
        }),
        (a.$4 = function (t) {
          var e = this.$3;
          if (e == null)
            throw r("err")(
              "WormPersistedQueue " +
                this.name +
                " is not attached to a database (" +
                t +
                ")",
            );
          return e;
        }),
        (a.$5 = function (t) {
          return "WormPersistedQueue:" + this.name + ":" + t;
        }),
        (a.$6 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!(o("WATimeUtils").unixTimeMs() - this.$1 <= s))
              try {
                (yield this.$4("clearIfEmpty").write(
                  this.$5("clearIfEmpty"),
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield e.readAll({ limit: 1 });
                        t.length === 0 && (yield e.clear());
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
                  (this.$1 = o("WATimeUtils").unixTimeMs()));
              } catch (t) {
                e()
                  .catching(r("getErrorSafe")(t))
                  .mustfix("Error during WormPersistedQueue cleanup");
              }
          });
          function a() {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        t
      );
    })();
    ((l.defineWormPersistedQueue = u), (l.WormPersistedQueue = c));
  },
  98,
);
