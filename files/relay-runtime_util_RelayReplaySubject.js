__d(
  "relay-runtime/util/RelayReplaySubject",
  ["invariant", "relay-runtime/network/RelayObservable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        var e = this;
        ((this.$1 = !1),
          (this.$2 = []),
          (this.$3 = new Set()),
          (this.$5 = []),
          (this.$4 = n("relay-runtime/network/RelayObservable").create(
            function (t) {
              e.$3.add(t);
              for (var n = e.$2, r = 0; r < n.length && !t.closed; r++) {
                var o = n[r];
                switch (o.kind) {
                  case "complete":
                    t.complete();
                    break;
                  case "error":
                    t.error(o.error);
                    break;
                  case "next":
                    t.next(o.data);
                    break;
                  default:
                    (o.kind, l(0, 14990, o.kind));
                }
              }
              return function () {
                e.$3.delete(t);
              };
            },
          )));
      }
      var t = e.prototype;
      return (
        (t.complete = function () {
          this.$1 !== !0 &&
            ((this.$1 = !0),
            this.$2.push({ kind: "complete" }),
            this.$3.forEach(function (e) {
              return e.complete();
            }));
        }),
        (t.error = function (t) {
          this.$1 !== !0 &&
            ((this.$1 = !0),
            this.$2.push({ error: t, kind: "error" }),
            this.$3.forEach(function (e) {
              return e.error(t);
            }));
        }),
        (t.next = function (t) {
          this.$1 !== !0 &&
            (this.$2.push({ data: t, kind: "next" }),
            this.$3.forEach(function (e) {
              return e.next(t);
            }));
        }),
        (t.subscribe = function (t) {
          var e = this.$4.subscribe(t);
          return (this.$5.push(e), e);
        }),
        (t.unsubscribe = function () {
          for (var e of this.$5) e.unsubscribe();
          this.$5 = [];
        }),
        (t.getObserverCount = function () {
          return this.$3.size;
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
