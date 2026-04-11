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
            return this._multiEvent.apply(
              this,
              [this.on].concat(Array.prototype.slice.call(arguments)),
            )
              ? this
              : (this._getOrCreateEvents(t).push({
                  callback: n,
                  context: o,
                  ctx: o != null ? o : this,
                }),
                this);
          }),
          (n.once = function (t, n, r) {
            if (n == null) return this;
            if (
              this._multiEvent.apply(
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
            var e = this._events;
            if (!e) return this;
            if (
              this._multiEvent.apply(
                this,
                [this.off].concat(Array.prototype.slice.call(arguments)),
              )
            )
              return this;
            if (!t && n == null && r == null)
              return ((this._events = void 0), this);
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
            if (!this._events) return this;
            if (
              this._multiEvent.apply(
                this,
                [this.trigger].concat(Array.prototype.slice.call(arguments)),
              )
            )
              return this;
            var o = this._getEvents(t),
              a = this._getEvents("all");
            return (
              o && this._triggerEvents(o, n),
              a && this._triggerEvents(a, arguments),
              this
            );
          }),
          (n.stopListening = function (t, n, o) {
            var e,
              a = this._listeningTo;
            if (!a) return this;
            var i = t == null ? void 0 : t._listenId,
              l = i ? ((e = {}), (e[i] = t), e) : a,
              s = !n && !o;
            for (var u in l) {
              var c = l[u];
              c.off(n, o, this);
              var d = c._events;
              (s || !d || r("isEmptyObject")(d)) && delete a[u];
            }
            return (
              (!this._listeningTo || r("isEmptyObject")(this._listeningTo)) &&
                delete this._listeningTo,
              this
            );
          }),
          (n.listenTo = function (t, n, r) {
            return r == null
              ? this
              : (this._addListeningTo(t), t.on(n, r, this), this);
          }),
          (n.listenToOnce = function (t, n, r) {
            return (this._addListeningTo(t), t.once(n, r, this), this);
          }),
          (n.listenToAndRun = function (t, n, r) {
            return (this.listenTo.apply(this, arguments), r.apply(this), this);
          }),
          (n.isListening = function (t) {
            var e = this._events;
            return e
              ? typeof t == "string"
                ? !!e[t]
                : r("isEmptyObject")(e)
              : !1;
          }),
          (n._addListeningTo = function (t) {
            var e = this._listeningTo || (this._listeningTo = {}),
              n = t._listenId || (t._listenId = "l" + ++s);
            e[n] = t;
          }),
          (n._getOrCreateEvents = function (t) {
            var e = this._events || (this._events = {});
            return e[t] || (e[t] = []);
          }),
          (n._getEvents = function (t) {
            if (t) {
              var e = this._events;
              if (e) return e[t];
            }
          }),
          (n._multiEvent = function (n, r) {
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
          (n._triggerEvents = function (t, n) {
            var e,
              r = -1,
              o = t.length,
              a = n[0],
              i = n[1],
              l = n[2];
            e: {
              if (n.length === 0) {
                for (; ++r < o; ) (e = t[r]).callback.call(e.ctx);
                break e;
              }
              if (n.length === 1) {
                for (; ++r < o; ) (e = t[r]).callback.call(e.ctx, a);
                break e;
              }
              if (n.length === 2) {
                for (; ++r < o; ) (e = t[r]).callback.call(e.ctx, a, i);
                break e;
              }
              if (n.length === 3) {
                for (; ++r < o; ) (e = t[r]).callback.call(e.ctx, a, i, l);
                break e;
              }
              {
                for (; ++r < o; ) (e = t[r]).callback.apply(e.ctx, n);
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
