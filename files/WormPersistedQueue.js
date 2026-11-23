__d(
  "WormPersistedQueue",
  ["FBLogger", "WAPubSub", "WATimeUtils", "err", "getErrorSafe"],
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
      var n = t.prototype;
      return (
        (n.attachStoreRunner = function (t) {
          this.$3 = t;
        }),
        (n.isReady = function () {
          return this.$3 != null;
        }),
        (n.subscribe = function (t) {
          return this.$2.subscribe(t);
        }),
        (n.add = function (t) {
          return this.put(t);
        }),
        (n.put = async function (t) {
          t.length !== 0 &&
            (await this.$4("put").write(this.$5("put"), function (e) {
              return e.bulkPut(t);
            }),
            this.$2.publish({ type: "new_entities" }));
        }),
        (n.ack = function (t) {
          return this.delete(t);
        }),
        (n.delete = async function (t) {
          t.length !== 0 &&
            (await this.$4("delete").write(this.$5("delete"), function (e) {
              return e.bulkDelete(t);
            }),
            await this.$6());
        }),
        (n.read = function (t) {
          return this.$4("read").read(this.$5("read"), function (e) {
            return e.readAll(t);
          });
        }),
        (n.readFromIndex = function (t, n) {
          return this.$4("readFromIndex").read(
            this.$5("readIndex"),
            function (e) {
              return e.readIndex(t, void 0, n);
            },
          );
        }),
        (n.readFromIndexRange = function (t, n, r) {
          return this.$4("readFromIndexRange").read(
            this.$5("readIndexRange"),
            function (e) {
              return e.readIndexRange(t, n, r);
            },
          );
        }),
        (n.getAllFromIndexRange = function (t, n, r) {
          return this.$4("getAllFromIndexRange").read(
            this.$5("getAllIndexRange"),
            function (e) {
              return e.getAllByIndexRange(t, n, r);
            },
          );
        }),
        (n.getFromIndex = function (t, n) {
          return this.$4("getFromIndex").read(
            this.$5("getByIndex"),
            function (e) {
              return e.getByIndex(t, n);
            },
          );
        }),
        (n.count = function () {
          return this.$4("count").read(this.$5("count"), function (e) {
            return e.count();
          });
        }),
        (n.$4 = function (t) {
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
        (n.$5 = function (t) {
          return "WormPersistedQueue:" + this.name + ":" + t;
        }),
        (n.$6 = async function () {
          if (!(o("WATimeUtils").unixTimeMs() - this.$1 <= s))
            try {
              (await this.$4("clearIfEmpty").write(
                this.$5("clearIfEmpty"),
                async function (e) {
                  var t = await e.readAll({ limit: 1 });
                  t.length === 0 && (await e.clear());
                },
              ),
                (this.$1 = o("WATimeUtils").unixTimeMs()));
            } catch (t) {
              e()
                .catching(r("getErrorSafe")(t))
                .mustfix("Error during WormPersistedQueue cleanup");
            }
        }),
        t
      );
    })();
    ((l.defineWormPersistedQueue = u), (l.WormPersistedQueue = c));
  },
  98,
);
