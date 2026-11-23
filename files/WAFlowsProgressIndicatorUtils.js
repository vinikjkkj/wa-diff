__d(
  "WAFlowsProgressIndicatorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n, r) {
        var e = 0,
          o = c(t, r),
          a = {};
        for (var i of Object.entries(n)) {
          var l = i[0],
            s = i[1];
          a[l] = s.filter(function (e) {
            return !u(e, r);
          });
        }
        var d = o[o.length - 1];
        if (d) {
          var p = o.length,
            _ = m(d, a),
            f = _.reduce(function (e, t) {
              return e + t;
            }, 0),
            g = f / _.length,
            h = p + g;
          e = Math.round((p / h) * 100);
        } else t.length && !o.length && (e = 100);
        return e;
      },
      l = function (t, n, r) {
        return n && !t && !r;
      },
      s = function (t, n, r) {
        return t === 100 && c(n, r).length <= 1;
      },
      u = function (t, n) {
        var e,
          r,
          o,
          a = (e = n.get(t)) == null ? void 0 : e.hasFooter,
          i =
            (r = (o = n.get(t)) == null ? void 0 : o.isNavListScreen) != null
              ? r
              : !1;
        return a === !1 && i === !1;
      },
      c = function (t, n) {
        var e = t[t.length - 1];
        return u(e, n) ? t.slice(0, -1) : t;
      },
      d = function (t, n, r, o) {
        return t || n || o != null || r === "INITIALIZING";
      };
    function m(e, t) {
      var n = [],
        r = function (o, a) {
          var e;
          if (o !== void 0) {
            if (!((e = t[o]) != null && e.length)) {
              n.push(a);
              return;
            }
            for (var i = 0; i < t[o].length; i++) {
              var l = t[o][i];
              a.includes(l) || r(l, a.concat(l));
            }
          }
        };
      return (
        r(e, []),
        n.map(function (e) {
          return e.length;
        })
      );
    }
    var p = function (t, n) {
        return (t - n) / 100;
      },
      _ = function (t, n, r) {
        return (100 - t + n - r) / 100;
      };
    ((i.getProgress = e),
      (i.isProgressIndicatorSupported = l),
      (i.isProgressPermanentlyHidden = s),
      (i.isProgressTemporarilyHidden = d),
      (i.getProgressDoneScale = p),
      (i.getProgressRemainingScale = _));
  },
  66,
);
