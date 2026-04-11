__d(
  "DoublyLinkedListMap",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e() {
        ((this._head = null),
          (this._tail = null),
          (this._nodes = {}),
          (this._nodeCount = 0));
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          var e,
            n = (e = this._nodes[t]) == null ? void 0 : e.data;
          return n != null ? n : null;
        }),
        (t.getIndex = function (t) {
          for (var e = this._head, n = 0; e; e = e.next, n++)
            if (e.key === t) return n;
          return null;
        }),
        (t._insert = function (t, n, r, o) {
          r != null && !this._nodes[r] && (r = null);
          var e;
          r != null && this._nodes[r]
            ? (e = this._nodes[r])
            : (e = o ? this._head : this._tail);
          var a = { data: n, key: t, next: null, prev: null };
          return (
            e &&
              (this.remove(t),
              o
                ? ((a.prev = e.prev),
                  e.prev && (e.prev.next = a),
                  (e.prev = a),
                  (a.next = e))
                : ((a.next = e.next),
                  e.next && (e.next.prev = a),
                  (e.next = a),
                  (a.prev = e))),
            a.prev === null && (this._head = a),
            a.next === null && (this._tail = a),
            (this._nodes[t] = a),
            this._nodeCount++,
            this
          );
        }),
        (t.insertBefore = function (t, n, r) {
          return this._insert(t, n, r, !0);
        }),
        (t.insertAfter = function (t, n, r) {
          return this._insert(t, n, r, !1);
        }),
        (t.prepend = function (t, n) {
          return this.insertBefore(t, n, this._head && this._head.key);
        }),
        (t.append = function (t, n) {
          return this.insertAfter(t, n, this._tail && this._tail.key);
        }),
        (t.remove = function (t) {
          var e = this._nodes[t];
          if (e) {
            var n = e.next,
              r = e.prev;
            (n && (n.prev = r),
              r && (r.next = n),
              this._head === e && (this._head = n),
              this._tail === e && (this._tail = r),
              delete this._nodes[t],
              this._nodeCount--);
          }
          return this;
        }),
        (t.find = function (t) {
          for (var e = this._head; e; e = e.next) if (t(e.data)) return e.key;
          return null;
        }),
        (t.reduce = function (t, n) {
          for (var e = this._head; e; e = e.next) n = t(e.data, n);
          return n;
        }),
        (t.exists = function (t) {
          return !!this._nodes[t];
        }),
        (t.isEmpty = function () {
          return !this._head;
        }),
        (t.reset = function () {
          ((this._head = null),
            (this._tail = null),
            (this._nodes = {}),
            (this._nodeCount = 0));
        }),
        (t.map = function (t) {
          for (var e = this._head; e; e = e.next) t(e.data);
        }),
        (t.getCount = function () {
          return this._nodeCount;
        }),
        (t.getHead = function () {
          var e;
          return (e = this._head) == null ? void 0 : e.data;
        }),
        (t.getTail = function () {
          var e;
          return (e = this._tail) == null ? void 0 : e.data;
        }),
        (t.getNext = function (t) {
          var e;
          return (e = this._nodes[t]) == null || (e = e.next) == null
            ? void 0
            : e.data;
        }),
        (t.getPrev = function (t) {
          var e;
          return (e = this._nodes[t]) == null || (e = e.prev) == null
            ? void 0
            : e.data;
        }),
        (t.getHeadKey = function () {
          var e;
          return (e = this._head) == null ? void 0 : e.key;
        }),
        (t.getTailKey = function () {
          var e;
          return (e = this._tail) == null ? void 0 : e.key;
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
