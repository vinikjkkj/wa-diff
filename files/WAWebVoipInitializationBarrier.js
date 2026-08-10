__d(
  "WAWebVoipInitializationBarrier",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return (
        e.selfJid === t.selfJid &&
        e.selfUserJid === t.selfUserJid &&
        e.selfLid === t.selfLid
      );
    }
    var u = (function () {
      function t() {
        this.$1 = null;
      }
      var o = t.prototype;
      return (
        (o.run = function (o, a) {
          var t = this,
            i = this.$1;
          if (i != null) {
            if (s(i.key, o)) return i.promise;
            if (i.pending)
              return (e || (e = n("Promise"))).reject(
                r("err")("voip: identity changed while voipInit was in flight"),
              );
          }
          var l = (e || (e = n("Promise"))).resolve().then(a),
            u = { key: o, pending: !0, promise: l };
          return (
            (this.$1 = u),
            l.then(
              function () {
                t.$1 === u && (u.pending = !1);
              },
              function () {
                t.$1 === u && (t.$1 = null);
              },
            ),
            l
          );
        }),
        (o.wait = function () {
          var t = this.$1;
          return t == null
            ? (e || (e = n("Promise"))).reject(
                r("err")("voip: RPC attempted without successful voipInit"),
              )
            : t.promise;
        }),
        (o.reset = function () {
          this.$1 = null;
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
