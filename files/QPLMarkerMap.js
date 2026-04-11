__d(
  "QPLMarkerMap",
  ["DoublyLinkedListMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e === void 0 ? {} : e,
          n = t.perMarkerLimit,
          o = n === void 0 ? null : n,
          a = t.totalLimit,
          i = a === void 0 ? null : a;
        ((this.size = 0),
          (this.$1 = {}),
          (this.$4 = i),
          (this.$5 = o),
          (this.$3 = new Map()),
          (this.$2 = new (r("DoublyLinkedListMap"))()));
      }
      var t = e.prototype;
      return (
        (t.set = function (t, n, r) {
          var e = this.$1[t];
          if (e === void 0) {
            var o = {};
            ((e = o), (this.$1[t] = e));
          }
          var a = Object.prototype.hasOwnProperty.call(e, n);
          (a || (this.$6(t), this.$7()),
            this.$8(t, n),
            a || this.size++,
            (e[n] = r));
        }),
        (t.delete = function (t, n) {
          var e = this.$1[t];
          e === void 0 ||
            !Object.prototype.hasOwnProperty.call(e, n) ||
            (this.$9(t, n),
            delete e[n],
            this.size--,
            Object.keys(e).length === 0 && delete this.$1[t]);
        }),
        (t.get = function (t, n) {
          var e = this.$1[t];
          if (e !== void 0) return e[n];
        }),
        (t.has = function (t, n) {
          var e = this.$1[t];
          return e === void 0 ? !1 : Object.prototype.hasOwnProperty.call(e, n);
        }),
        (t.forEach = function (t) {
          var e = 0;
          for (var n in this.$1) {
            var r = Number(n),
              o = this.$1[r];
            for (var a in o) {
              var i = Number(a);
              t(o[i], r, i, e++);
            }
          }
        }),
        (t.toString = function () {
          try {
            return JSON.stringify(this.$1);
          } catch (e) {
            return "{}";
          }
        }),
        (t.$8 = function (t, n) {
          var e = { markerId: t, instanceKey: n },
            r = this.$10(t, n),
            o = this.$4 != null,
            a = this.$5 != null;
          o && (this.$2.remove(r), this.$2.append(r, e));
          var i = this.$11(t);
          a && (i.remove(r), i.append(r, e));
        }),
        (t.$9 = function (t, n) {
          var e = this.$10(t, n),
            r = this.$4 != null,
            o = this.$5 != null;
          if ((r && this.$2.remove(e), o)) {
            var a = this.$3.get(t);
            a && (a.remove(e), a.isEmpty() && this.$3.delete(t));
          }
        }),
        (t.$6 = function (t) {
          var e = this.$5;
          if (e != null) {
            var n = this.$11(t);
            n.getCount() >= e && this.$12(n);
          }
        }),
        (t.$7 = function () {
          var e = this.$4;
          e != null && this.size >= e && this.$12(this.$2);
        }),
        (t.$12 = function (t) {
          var e = t.getHeadKey();
          if (e != null) {
            var n = t.get(e);
            n && this.delete(n.markerId, n.instanceKey);
          }
        }),
        (t.$10 = function (t, n) {
          return t + ":" + n;
        }),
        (t.$11 = function (t) {
          var e = this.$3.get(t);
          return (
            e || ((e = new (r("DoublyLinkedListMap"))()), this.$3.set(t, e)),
            e
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
