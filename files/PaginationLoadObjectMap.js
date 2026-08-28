__d(
  "PaginationLoadObjectMap",
  [
    "FBLogger",
    "LoadObject",
    "LoadObjectMap",
    "promiseDone",
    "promiseLoadObjectsFromKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, o) {
        var a = this;
        ((this.$1 = e),
          (this.$4 = t),
          (this.$3 = n),
          (this.$2 = o || function (e, t) {}),
          (this.$5 = r("LoadObjectMap").create(
            function (e) {
              r("promiseDone")(
                r("promiseLoadObjectsFromKeys")(e, t),
                function (e) {
                  return e.forEach(function (e, t) {
                    var n = e.getError();
                    n ? a.$2(t, n) : a.$3(t, e.getValueEnforcing());
                  });
                },
              );
            },
            function (e) {
              return e.isDone() && !e.hasValue();
            },
          )));
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          var e = this.$5.get(t);
          return (
            e.isDone() &&
              !e.hasValue() &&
              ((e = this.$6(
                r("LoadObject").loading({ creatorModuleID: i.id }),
              )),
              (this.$5 = this.$5.set(t, e))),
            e
          );
        }),
        (t.getMore = function (t) {
          var e = this,
            n = this.getData().get(t);
          if (n == null || !n.hasValue())
            return (
              r("FBLogger")("ads").warn(
                "should not call getMore() before calling get() in PaginationLoadObejctMap",
              ),
              this.get(t)
            );
          var o = n.getValueEnforcing().after;
          return !n.isDone() || o == null
            ? n
            : ((this.$5 = this.$5.set(t, n.updating())),
              r("promiseDone")(
                this.$4(t, o),
                function (n) {
                  e.$3(t, n);
                },
                function (n) {
                  e.$2(t, n);
                },
              ),
              n.updating());
        }),
        (t.getData = function () {
          return this.$5.getData();
        }),
        (t.clear = function () {
          var e = this;
          return this.$7(function () {
            return e.$5.withMutations(function (e) {
              e.clear();
            });
          });
        }),
        (t.delete = function (t) {
          var e = this;
          return this.$7(function () {
            return e.$5.delete(t);
          });
        }),
        (t.merge = function (t) {
          var e = this;
          return this.$7(function () {
            return e.$5.merge(t);
          });
        }),
        (t.set = function (t, n) {
          var e = this;
          return this.$7(function () {
            return e.$5.set(t, n);
          });
        }),
        (t.update = function (t, n) {
          return this.set(t, n(this.get(t)));
        }),
        (t.withMutations = function (t) {
          var e = this;
          return this.$7(function () {
            return e.$5.withMutations(t);
          });
        }),
        (t.$7 = function (n) {
          var t = n();
          if (t === this.$5) return this;
          var r = new e(this.$1, this.$4, this.$3, this.$2);
          return ((r.$5 = t), r);
        }),
        (t.$6 = function (t) {
          return t.hasValue() ? t : t.setValue(this.$1);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
