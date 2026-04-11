__d(
  "WALruCache",
  ["WALogger", "WAShiftTimer", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t, n) {
        ((this.key = t),
          (this.value = n),
          (this.prev = null),
          (this.next = null));
      },
      u = (function () {
        function t(e) {
          var t = this,
            n;
          ((this.$2 = new Map()),
            (this.purgeNow = function () {
              for (
                var e = t.$6.prev;
                t.$4 > t.$3 && e !== t.$5;
                e = e ? e.prev : null
              ) {
                if (e == null)
                  throw r("err")(
                    "The linked list is not constructed properly.",
                  );
                var n = e,
                  o = n.key,
                  a = n.value;
                t.$9(o, a) && (t.delete(o), t.$10 && t.$10(o, a));
              }
              t.$8 && t.$8(t.$2);
            }),
            (this.$3 = e.sizeLimit),
            (this.$7 = e.getSize),
            (this.$8 = e.onPurge),
            (this.$9 =
              (n = e.shouldEvict) != null
                ? n
                : function () {
                    return !0;
                  }),
            (this.$10 = e.onEvict),
            (this.$11 = e.onAdd),
            (this.$12 = e.onDelete),
            (this.$4 = 0),
            (this.$5 = new s("placeholder-head", null)),
            (this.$6 = new s("placeholder-tail", null)),
            (this.$5.next = this.$6),
            (this.$6.prev = this.$5),
            (this.$1 = new (o("WAShiftTimer").ShiftTimer)(function () {
              return t.purgeNow();
            })));
        }
        var n = t.prototype;
        return (
          (n.get = function (t) {
            if (!this.$2.has(t)) return null;
            var e = this.$2.get(t);
            if (e == null) return null;
            var n = e.prev,
              o = e.next;
            (n && (n.next = o), o && (o.prev = n));
            var a = this.$5.next;
            if (a == null)
              throw r("err")("The linked list is not constructed properly.");
            return (
              (this.$5.next = e),
              (a.prev = e),
              (e.prev = this.$5),
              (e.next = a),
              e.value
            );
          }),
          (n.has = function (t) {
            return this.$2.has(t);
          }),
          (n.touch = function (t) {
            this.get(t);
          }),
          (n.put = function (n, r) {
            if (this.$3 !== 0) {
              if (this.$7(r) > this.$3) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Blob size is larger than the limit of the whole store.",
                    ])),
                );
                return;
              }
              (this.delete(n), this.$14(n, r), this.schedulePurge());
            }
          }),
          (n.$14 = function (t, n) {
            var e = new s(t, n);
            this.$2.set(t, e);
            var o = this.$5.next;
            if (o == null)
              throw r("err")("The linked list is not constructed properly.");
            ((this.$5.next = e),
              (o.prev = e),
              (e.prev = this.$5),
              (e.next = o),
              (this.$4 += this.$7(n)),
              this.$11 && this.$11(t, n));
          }),
          (n.delete = function (t) {
            if (this.$2.has(t)) {
              var e = this.$2.get(t);
              if (e != null) {
                this.$4 -= this.$7(e.value);
                var n = e.prev,
                  r = e.next;
                (n && (n.next = r),
                  r && (r.prev = n),
                  this.$2.delete(t),
                  this.$12 && this.$12(t, e.value));
              }
            }
          }),
          (n.clear = function () {
            (this.$2.clear(),
              (this.$4 = 0),
              (this.$5.next = this.$6),
              (this.$6.prev = this.$5),
              this.$13 && this.$13());
          }),
          (n.schedulePurge = function () {
            this.$1.onOrBefore(1e3);
          }),
          (n.getCurrentSize = function () {
            return this.$4;
          }),
          (n.getSizeLimit = function () {
            return this.$3;
          }),
          (n.getPlaceholderHead = function () {
            return this.$5;
          }),
          (n.forEach = function (t) {
            if (this.$4 !== 0) {
              var e = this.$6.prev;
              if (e == null)
                throw r("err")("The linked list is not constructed properly.");
              for (; e != null && e !== this.$5; ) (t(e.value), (e = e.prev));
            }
          }),
          t
        );
      })();
    l.LruCache = u;
  },
  98,
);
