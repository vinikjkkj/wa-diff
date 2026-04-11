__d(
  "hyperionChannel",
  ["hyperionHook"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = new (e || (e = o("hyperionHook"))).Hook();
        }
        var n = t.prototype;
        return (
          (n.pipe = function (t, n) {
            var e = this.$1.add(
              n
                ? function (e) {
                    for (
                      var r = arguments.length,
                        o = new Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      o[a - 1] = arguments[a];
                    n(function () {
                      t.emit.apply(t, [e].concat(o));
                    });
                  }
                : function (e) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    t.emit.apply(t, [e].concat(r));
                  },
            );
            return ((e.$2 = t), t);
          }),
          (n.unpipe = function (t) {
            return this.$1.removeIf(function (e) {
              return e.$2 === t;
            });
          }),
          (n.emit = function (t) {
            for (
              var e,
                n = arguments.length,
                r = new Array(n > 1 ? n - 1 : 0),
                o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            (e = this.$1).call.apply(e, [t].concat(r));
          }),
          t
        );
      })(),
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$Channel1 = Object.create(null)),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$Channel2 = function (n) {
            var t = this.$Channel1[n];
            return (
              t ||
                (t = this.$Channel1[n] =
                  new (e || (e = o("hyperionHook"))).Hook()),
              t
            );
          }),
          (r.on = function (t) {
            return this.$Channel2(t);
          }),
          (r.addListener = function (t, n) {
            return this.on(t).add(n);
          }),
          (r.removeListener = function (t, n) {
            return (this.on(t).remove(n), n);
          }),
          (r.emit = function (n) {
            for (
              var e,
                r,
                o = arguments.length,
                a = new Array(o > 1 ? o - 1 : 0),
                i = 1;
              i < o;
              i++
            )
              a[i - 1] = arguments[i];
            ((e = this.$Channel2(n)).call.apply(e, a),
              (r = t.prototype.emit).call.apply(r, [this, n].concat(a)));
          }),
          n
        );
      })(s),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$PausableChannel1 = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.pause = function () {
            this.$PausableChannel1 = !0;
          }),
          (n.unpause = function () {
            this.$PausableChannel1 = !1;
          }),
          (n.isPaused = function () {
            return this.$PausableChannel1;
          }),
          (n.emit = function (n) {
            var t;
            if (!this.$PausableChannel1) {
              for (
                var r = arguments.length,
                  o = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              (t = e.prototype.emit).call.apply(t, [this, n].concat(o));
            }
          }),
          t
        );
      })(u);
    ((l.Channel = u), (l.PausableChannel = c), (l.PipeableEmitter = s));
  },
  98,
);
