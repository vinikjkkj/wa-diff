__d(
  "WAWebBaseMirror",
  ["lodash"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {},
        n = 0,
        r = function (r) {
          t["change:" + r] = n++;
        };
      return (
        e.props && Object.keys(e.props).forEach(r),
        e.session && Object.keys(e.session).forEach(r),
        e.derived && Object.keys(e.derived).forEach(r),
        t
      );
    }
    var s = "change",
      u = 32;
    function c(e, t) {
      for (var n = [], r = 0; r < t.length; r++) {
        var o = e["change:" + t[r]],
          a = Math.floor(o / u),
          i = o % u;
        (p(n, a + 1), (n[a] |= 1 << i));
      }
      return n;
    }
    var d = (function () {
      function e(e) {
        this.state = e;
      }
      var t = e.prototype;
      return (
        (t.destructor = function () {
          this.state.off("all", this.onGatherEvent, this);
        }),
        (t.initListener = function () {
          (this.state.on("all", this.onGatherEvent, this),
            (this.masks = []),
            (this.listeners = []),
            (this.changeEvents = []));
        }),
        (t.onGatherEvent = function (t) {
          if (t === s) {
            var e = this.changeEvents;
            if (!e.some(Boolean)) return;
            (this.onChange(), (this.changeEvents = []));
          } else {
            var n = this.state.mirrorMask[t];
            if (n === void 0) return;
            var r = (n / u) | 0,
              o = (n % u) | 0;
            (p(this.changeEvents, r + 1), (this.changeEvents[r] |= 1 << o));
          }
        }),
        (t.onChange = function () {
          if (this.listeners != null) {
            var e = this.state,
              t = this.changeEvents;
            r("lodash")
              .zip(this.masks, this.listeners)
              .forEach(function (n) {
                for (
                  var r = n[0],
                    o = n[1],
                    a = Math.min(t.length, r.length),
                    i = 0;
                  i < a;
                  i++
                )
                  if (t[i] & r[i]) {
                    var l = o[0],
                      s = o[1];
                    l != null && s != null && l(s, e);
                    break;
                  }
              });
          }
        }),
        (t.addListener = function (t, n, r) {
          var e;
          (this.listeners || this.initListener(),
            this.masks.push(n),
            (e = this.listeners) == null || e.push([t, r]));
        }),
        (t.removeListener = function (t) {
          var e = this.listeners;
          if (e != null)
            for (var n = 0; n < e.length; n++)
              e[n][0] === t &&
                ((e[n][0] = null), (e[n][1] = null), m(this.masks, n), m(e, n));
        }),
        e
      );
    })();
    function m(e, t) {
      ((e[t] = e[e.length - 1]), e.pop());
    }
    function p(e, t) {
      if (!(t <= e.length))
        for (var n = t - e.length, r = 0; r < n; r++) e.push(0);
    }
    ((l.genMirrorMask = e), (l.genBitMask = c), (l.BaseMirror = d));
  },
  98,
);
