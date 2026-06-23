__d(
  "Queue",
  [],
  function (t, n, r, o, a, i) {
    var e = {},
      l = (function () {
        function t(e) {
          ((this.$3 = null),
            (this.$5 = (e == null ? void 0 : e.interval) || 0),
            (this.$4 = e == null ? void 0 : e.processor),
            (this.$1 = []),
            (this.$2 = !0));
        }
        var n = t.prototype;
        return (
          (n.$6 = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = !1), !(this.$2 || this.$1.length === 0))
            ) {
              var n = this.$4;
              if (n == null) {
                this.$2 = !0;
                var r = new Error("No processor available");
                throw (r.stack, r);
              }
              var o = this.$5;
              if (o != null)
                (n.call(this, this.$1.shift()),
                  (this.$3 = window.setTimeout(function () {
                    return e.$6();
                  }, o)));
              else for (; this.$1.length; ) n.call(this, this.$1.shift());
            }
          }),
          (n.enqueue = function (t) {
            return (this.$4 && !this.$2 ? this.$4(t) : this.$1.push(t), this);
          }),
          (n.start = function (t) {
            return (t && (this.$4 = t), (this.$2 = !1), this.$6(), this);
          }),
          (n.isStarted = function () {
            return !this.$2;
          }),
          (n.dispatch = function () {
            this.$6(!0);
          }),
          (n.stop = function (t) {
            return (
              (this.$2 = !0),
              t && this.$3 != null && window.clearTimeout(this.$3),
              this
            );
          }),
          (n.merge = function (t, n) {
            if (n) {
              var e;
              (e = this.$1).unshift.apply(e, t.$1);
            } else {
              var r;
              (r = this.$1).push.apply(r, t.$1);
            }
            return ((t.$1 = []), this.$6(), this);
          }),
          (n.getLength = function () {
            return this.$1.length;
          }),
          (t.get = function (r, o) {
            var n;
            return (r in e ? (n = e[r]) : (n = e[r] = new t(o)), n);
          }),
          (t.exists = function (n) {
            return n in e;
          }),
          (t.remove = function (n) {
            return delete e[n];
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
