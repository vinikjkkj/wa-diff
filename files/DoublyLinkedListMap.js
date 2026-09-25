__d(
  "DoublyLinkedListMap",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e() {
        ((this.$1 = null), (this.$2 = null), (this.$3 = {}), (this.$4 = 0));
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          var e,
            n = (e = this.$3[t]) == null ? void 0 : e.data;
          return n != null ? n : null;
        }),
        (t.getIndex = function (t) {
          for (var e = this.$1, n = 0; e; e = e.next, n++)
            if (e.key === t) return n;
          return null;
        }),
        (t.$5 = function (t, n, r, o) {
          var e = r;
          e != null && !this.$3[e] && (e = null);
          var a;
          e != null && this.$3[e]
            ? (a = this.$3[e])
            : (a = o ? this.$1 : this.$2);
          var i = { data: n, key: t, next: null, prev: null };
          return (
            a &&
              (this.remove(t),
              o
                ? ((i.prev = a.prev),
                  a.prev && (a.prev.next = i),
                  (a.prev = i),
                  (i.next = a))
                : ((i.next = a.next),
                  a.next && (a.next.prev = i),
                  (a.next = i),
                  (i.prev = a))),
            i.prev === null && (this.$1 = i),
            i.next === null && (this.$2 = i),
            (this.$3[t] = i),
            this.$4++,
            this
          );
        }),
        (t.insertBefore = function (t, n, r) {
          return this.$5(t, n, r, !0);
        }),
        (t.insertAfter = function (t, n, r) {
          return this.$5(t, n, r, !1);
        }),
        (t.prepend = function (t, n) {
          return this.insertBefore(t, n, this.$1 && this.$1.key);
        }),
        (t.append = function (t, n) {
          return this.insertAfter(t, n, this.$2 && this.$2.key);
        }),
        (t.remove = function (t) {
          var e = this.$3[t];
          if (e) {
            var n = e.next,
              r = e.prev;
            (n && (n.prev = r),
              r && (r.next = n),
              this.$1 === e && (this.$1 = n),
              this.$2 === e && (this.$2 = r),
              delete this.$3[t],
              this.$4--);
          }
          return this;
        }),
        (t.find = function (t) {
          for (var e = this.$1; e; e = e.next) if (t(e.data)) return e.key;
          return null;
        }),
        (t.reduce = function (t, n) {
          for (var e = n, r = this.$1; r; r = r.next) e = t(r.data, e);
          return e;
        }),
        (t.exists = function (t) {
          return !!this.$3[t];
        }),
        (t.isEmpty = function () {
          return !this.$1;
        }),
        (t.reset = function () {
          ((this.$1 = null), (this.$2 = null), (this.$3 = {}), (this.$4 = 0));
        }),
        (t.map = function (t) {
          for (var e = this.$1; e; e = e.next) t(e.data);
        }),
        (t.getCount = function () {
          return this.$4;
        }),
        (t.getHead = function () {
          var e;
          return (e = this.$1) == null ? void 0 : e.data;
        }),
        (t.getTail = function () {
          var e;
          return (e = this.$2) == null ? void 0 : e.data;
        }),
        (t.getNext = function (t) {
          var e;
          return (e = this.$3[t]) == null || (e = e.next) == null
            ? void 0
            : e.data;
        }),
        (t.getPrev = function (t) {
          var e;
          return (e = this.$3[t]) == null || (e = e.prev) == null
            ? void 0
            : e.data;
        }),
        (t.getHeadKey = function () {
          var e;
          return (e = this.$1) == null ? void 0 : e.key;
        }),
        (t.getTailKey = function () {
          var e;
          return (e = this.$2) == null ? void 0 : e.key;
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
