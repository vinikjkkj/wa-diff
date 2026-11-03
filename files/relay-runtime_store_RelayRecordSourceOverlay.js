__d(
  "relay-runtime/store/RelayRecordSourceOverlay",
  [
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("relay-runtime/store/RelayRecordState").EXISTENT,
      s = n("relay-runtime/store/RelayRecordState").NONEXISTENT,
      u = n("relay-runtime/store/RelayRecordState").UNKNOWN,
      c = (function () {
        function t(e, t) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = new Map()));
        }
        var r = t.prototype;
        return (
          (r.get = function (r) {
            if (this.$3.has(r)) return this.$3.get(r);
            for (
              var t = this.$1.get(r), o = this.$2, a = 0;
              a < o.length;
              a++
            ) {
              var i = o[a].get(r);
              i !== void 0 &&
                (t =
                  i === null || t == null
                    ? i
                    : (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).update(t, i));
            }
            return (this.$3.set(r, t), t);
          }),
          (r.getRecordIDs = function () {
            for (
              var e = new Set(this.$1.getRecordIDs()), t = this.$2, n = 0;
              n < t.length;
              n++
            )
              for (var r = t[n].getRecordIDs(), o = 0; o < r.length; o++)
                e.add(r[o]);
            return Array.from(e);
          }),
          (r.getStatus = function (t) {
            return this.has(t) ? (this.get(t) == null ? s : l) : u;
          }),
          (r.has = function (t) {
            if (this.$1.has(t)) return !0;
            for (var e = this.$2, n = 0; n < e.length; n++)
              if (e[n].has(t)) return !0;
            return !1;
          }),
          (r.size = function () {
            return this.getRecordIDs().length;
          }),
          (r.toJSON = function () {
            for (var t = {}, r = this.getRecordIDs(), o = 0; o < r.length; o++)
              t[r[o]] = (
                e || (e = n("relay-runtime/store/RelayModernRecord"))
              ).toJSON(this.get(r[o]));
            return t;
          }),
          t
        );
      })();
    a.exports = c;
  },
  null,
);
