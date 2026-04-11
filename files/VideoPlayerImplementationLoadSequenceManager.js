__d(
  "VideoPlayerImplementationLoadSequenceManager",
  ["setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = []));
        }
        var t = e.prototype;
        return (
          (t.schedule = function (t, n, o) {
            var e = this,
              a = {
                load: o,
                maximumBlockTimeMs: t.getNumber(
                  "load_sequence_max_delay_ms",
                  0,
                ),
                sequence: n,
              },
              i = !1,
              l = t.getNumber("load_sequence_only_prioritize_first_count", 0);
            return (
              l > 0
                ? (i = !this.$2.find(function (e) {
                    return e.sequence < l;
                  }))
                : (i = !this.$2.find(function (e) {
                    return e.sequence < n;
                  })),
              i
                ? this.$3(a)
                : (this.$1.push(a),
                  r("setTimeout")(function () {
                    return e.$4(a);
                  }, a.maximumBlockTimeMs)),
              function () {
                return e.$5(a);
              }
            );
          }),
          (t.$4 = function (t) {
            var e = this.$1.find(function (e) {
              return e === t;
            });
            e &&
              ((this.$1 = this.$1.filter(function (e) {
                return e !== t;
              })),
              this.$3(e));
          }),
          (t.$3 = function (t) {
            var e = this;
            (this.$2.push(t),
              t
                .load()
                .then(function () {
                  return e.$6(t);
                })
                .catch(function (n) {
                  throw (e.$6(t), n);
                }),
              r("setTimeout")(function () {
                return e.$6(t);
              }, t.maximumBlockTimeMs));
          }),
          (t.$7 = function () {
            var e = this,
              t = Math.min.apply(
                Math,
                this.$1.map(function (e) {
                  return e.sequence;
                }),
              ),
              n = this.$1.filter(function (e) {
                return e.sequence === t;
              });
            n.forEach(function (t) {
              return e.$4(t);
            });
          }),
          (t.$5 = function (t) {
            this.$1 = this.$1.filter(function (e) {
              return e !== t;
            });
          }),
          (t.$6 = function (t) {
            if (
              this.$2.find(function (e) {
                return e === t;
              })
            ) {
              this.$2 = this.$2.filter(function (e) {
                return e !== t;
              });
              var e = !!this.$2.find(function (e) {
                return e.sequence === t.sequence;
              });
              e && this.$7();
            }
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
