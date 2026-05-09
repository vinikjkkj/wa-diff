__d(
  "WAWebEventEmitter",
  ["err", "isEmptyObject"],
  function (t, n, r, o, a, i, l) {
    var e = /\s+/,
      s = 0,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.on = function (t, n, o) {
            if (n == null) return this;
            if (typeof n != "function")
              throw r("err")("Callback parameter passed is not a function");
            return this.$2.apply(
              this,
              [this.on].concat(Array.prototype.slice.call(arguments)),
            )
              ? this
              : (this.$3(t).push({ callback: n, context: o }), this);
          }),
          (n.once = function (t, n, r) {
            if (n == null) return this;
            if (
              this.$2.apply(
                this,
                [this.once].concat(Array.prototype.slice.call(arguments)),
              )
            )
              return this;
            var e = this,
              o = !1,
              a = function () {
                o || ((o = !0), e.off(t, a), n.apply(this, arguments));
              };
            return ((a._callback = n), this.on(t, a, r));
          }),
          (n.off = function (t, n, r) {
            var e = this.eventMap;
            if (!e) return this;
            if (
              this.$2.apply(
                this,
                [this.off].concat(Array.prototype.slice.call(arguments)),
              )
            )
              return this;
            if (!t && n == null && r == null)
              return ((this.eventMap = void 0), this);
            for (var o = t ? [t] : Object.keys(e), a = 0; a < o.length; a++) {
              var i = o[a],
                l = e[i];
              if (l) {
                if (((e[i] = []), n != null || r != null))
                  for (var s = 0; s < l.length; s++) {
                    var u = l[s];
                    ((n && n !== u.callback && n !== u.callback._callback) ||
                      (r != null && u.context !== r)) &&
                      e[i].push(u);
                  }
                e[i].length || delete e[i];
              }
            }
            return this;
          }),
          (n.trigger = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            if (!this.eventMap) return this;
            if (
              this.$2.apply(
                this,
                [this.trigger].concat(Array.prototype.slice.call(arguments)),
              )
            )
              return this;
            var o = this.$4(t),
              a = this.$4("all");
            return (o && this.$5(o, n), a && this.$5(a, arguments), this);
          }),
          (n.stopListening = function (t, n, o) {
            var e,
              a = this.$1;
            if (!a) return this;
            var i = t == null ? void 0 : t.listenId,
              l = i ? ((e = {}), (e[i] = t), e) : a,
              s = !n && !o;
            for (var u in l) {
              var c = l[u];
              c.off(n, o, this);
              var d = c.eventMap;
              (s || !d || r("isEmptyObject")(d)) && delete a[u];
            }
            return (
              (!this.$1 || r("isEmptyObject")(this.$1)) && (this.$1 = void 0),
              this
            );
          }),
          (n.listenTo = function (t, n, r) {
            return r == null ? this : (this.$6(t), t.on(n, r, this), this);
          }),
          (n.listenToOnce = function (t, n, r) {
            return (this.$6(t), t.once(n, r, this), this);
          }),
          (n.listenToAndRun = function (t, n, r) {
            return (this.listenTo.apply(this, arguments), r.apply(this), this);
          }),
          (n.isListening = function (t) {
            var e = this.eventMap;
            return e
              ? typeof t == "string"
                ? !!e[t]
                : r("isEmptyObject")(e)
              : !1;
          }),
          (n.$6 = function (t) {
            var e = this.$1 || (this.$1 = {}),
              n = t.listenId || (t.listenId = "l" + ++s);
            e[n] = t;
          }),
          (n.$3 = function (t) {
            var e = this.eventMap || (this.eventMap = {});
            return e[t] || (e[t] = []);
          }),
          (n.$4 = function (t) {
            if (t) {
              var e = this.eventMap;
              if (e) return e[t];
            }
          }),
          (n.$2 = function (n, r) {
            if (e.test(r)) {
              for (
                var t = r.split(e),
                  o = arguments.length,
                  a = new Array(o > 2 ? o - 2 : 0),
                  i = 2;
                i < o;
                i++
              )
                a[i - 2] = arguments[i];
              for (var l = 0; l < t.length; l++)
                n.call.apply(n, [this, t[l]].concat(a));
              return !0;
            }
            return !1;
          }),
          (n.$5 = function (t, n) {
            var e,
              r,
              o = -1,
              a = t.length,
              i = n[0],
              l = n[1],
              s = n[2];
            e: {
              if (n.length === 0) {
                for (; ++o < a; ) {
                  var u;
                  ((e = t[o]),
                    (r = (u = e.context) != null ? u : this),
                    e.callback.call(r));
                }
                break e;
              }
              if (n.length === 1) {
                for (; ++o < a; ) {
                  var c;
                  ((e = t[o]),
                    (r = (c = e.context) != null ? c : this),
                    e.callback.call(r, i));
                }
                break e;
              }
              if (n.length === 2) {
                for (; ++o < a; ) {
                  var d;
                  ((e = t[o]),
                    (r = (d = e.context) != null ? d : this),
                    e.callback.call(r, i, l));
                }
                break e;
              }
              if (n.length === 3) {
                for (; ++o < a; ) {
                  var m;
                  ((e = t[o]),
                    (r = (m = e.context) != null ? m : this),
                    e.callback.call(r, i, l, s));
                }
                break e;
              }
              {
                for (; ++o < a; ) {
                  var p;
                  ((e = t[o]),
                    (r = (p = e.context) != null ? p : this),
                    e.callback.apply(r, n));
                }
                break e;
              }
            }
          }),
          (n.bind = function (t, n, r) {
            return this.on.apply(this, arguments);
          }),
          (n.unbind = function (t, n, r) {
            return this.off.apply(this, arguments);
          }),
          (n.removeListener = function (t, n, r) {
            return this.off.apply(this, arguments);
          }),
          (n.removeAllListeners = function () {
            return this.off();
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
