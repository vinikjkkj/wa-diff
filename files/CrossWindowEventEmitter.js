__d(
  "CrossWindowEventEmitter",
  ["CacheStorage", "EventEmitter", "cr:8958"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var o;
        return (
          (o = e.call(this) || this),
          (o.$CrossWindowEventEmitter$p_2 = t),
          (o.$CrossWindowEventEmitter$p_1 = new (r("CacheStorage"))(
            "localstorage",
            t + ":",
          )),
          o.$CrossWindowEventEmitter$p_1.addValueChangeCallback(
            function (t, r, a) {
              var i = t.split(":")[1],
                l;
              try {
                l = n("cr:8958").parse(a);
              } catch (e) {
                l = void 0;
              }
              if (l && l.__v) {
                var s;
                (s = e.prototype.emit).call.apply(s, [o, i].concat(l.__v));
              }
            },
          ),
          o
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var o = t.prototype;
      return (
        (o.emit = function (n) {
          for (
            var t,
              r = arguments.length,
              o = new Array(r > 1 ? r - 1 : 0),
              a = 1;
            a < r;
            a++
          )
            o[a - 1] = arguments[a];
          (this.emitRemote.apply(this, [n].concat(o)),
            (t = e.prototype.emit).call.apply(t, [this, n].concat(o)));
        }),
        (o.emitRemote = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          this.$CrossWindowEventEmitter$p_1.set(t, n);
        }),
        t
      );
    })(r("EventEmitter"));
    l.default = e;
  },
  98,
);
