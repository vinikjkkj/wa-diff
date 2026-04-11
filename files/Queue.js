__d(
  "Queue",
  [],
  function (t, n, r, o, a, i) {
    var e = {},
      l = (function () {
        function t(e) {
          ((this._timeout = null),
            (this._interval = (e == null ? void 0 : e.interval) || 0),
            (this._processor = e == null ? void 0 : e.processor),
            (this._queue = []),
            (this._stopped = !0));
        }
        var n = t.prototype;
        return (
          (n._dispatch = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = !1),
              !(this._stopped || this._queue.length === 0))
            ) {
              var n = this._processor;
              if (n == null) {
                this._stopped = !0;
                var r = new Error("No processor available");
                throw (r.stack, r);
              }
              var o = this._interval;
              if (o != null)
                (n.call(this, this._queue.shift()),
                  (this._timeout = setTimeout(function () {
                    return e._dispatch();
                  }, o)));
              else
                for (; this._queue.length; ) n.call(this, this._queue.shift());
            }
          }),
          (n.enqueue = function (t) {
            return (
              this._processor && !this._stopped
                ? this._processor(t)
                : this._queue.push(t),
              this
            );
          }),
          (n.start = function (t) {
            return (
              t && (this._processor = t),
              (this._stopped = !1),
              this._dispatch(),
              this
            );
          }),
          (n.isStarted = function () {
            return !this._stopped;
          }),
          (n.dispatch = function () {
            this._dispatch(!0);
          }),
          (n.stop = function (t) {
            return (
              (this._stopped = !0),
              t && this._timeout != null && clearTimeout(this._timeout),
              this
            );
          }),
          (n.merge = function (t, n) {
            if (n) {
              var e;
              (e = this._queue).unshift.apply(e, t._queue);
            } else {
              var r;
              (r = this._queue).push.apply(r, t._queue);
            }
            return ((t._queue = []), this._dispatch(), this);
          }),
          (n.getLength = function () {
            return this._queue.length;
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
