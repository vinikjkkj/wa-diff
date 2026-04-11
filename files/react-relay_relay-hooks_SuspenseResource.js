__d(
  "react-relay/relay-hooks/SuspenseResource",
  ["warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 3e5,
      l = (function () {
        function t(e) {
          var t = this;
          ((this.$1 = 0),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = function (r) {
              return (
                t.$1++,
                t.$1 === 1 && (t.$2 = e(r)),
                {
                  dispose: function () {
                    ((t.$1 = Math.max(0, t.$1 - 1)),
                      t.$1 === 0 &&
                        (t.$2 != null
                          ? (t.$2.dispose(), (t.$2 = null))
                          : n("warning")(
                              !1,
                              "Relay: Expected disposable to release query to be defined.If you're seeing this, this is likely a bug in Relay.",
                            )));
                  },
                }
              );
            }));
        }
        var r = t.prototype;
        return (
          (r.temporaryRetain = function (n) {
            var t = this,
              r;
            if (n.isServer()) return { dispose: function () {} };
            var o = this.$4(n),
              a = null,
              i = function () {
                (clearTimeout(a), (a = null), (t.$3 = null), o.dispose());
              };
            return (
              (a = setTimeout(i, e)),
              (r = this.$3) == null || r.call(this),
              (this.$3 = i),
              {
                dispose: function () {
                  t.$3 == null || t.$3();
                },
              }
            );
          }),
          (r.permanentRetain = function (t) {
            var e = this.$4(t);
            return (this.releaseTemporaryRetain(), e);
          }),
          (r.releaseTemporaryRetain = function () {
            var e;
            ((e = this.$3) == null || e.call(this), (this.$3 = null));
          }),
          (r.getRetainCount = function () {
            return this.$1;
          }),
          t
        );
      })();
    a.exports = l;
  },
  null,
);
