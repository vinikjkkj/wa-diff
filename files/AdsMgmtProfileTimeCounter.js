__d(
  "AdsMgmtProfileTimeCounter",
  ["AdsManagerWwwQuickLogModule", "AdsMgmtQPLLogger", "ODS", "QPLEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {},
      c = {},
      d = {},
      m = 0,
      p = "/";
    function _(t, n) {
      n === void 0 && (n = m);
      var r = !1,
        a = (e || (e = o("QPLEvent"))).getMarkerId(t);
      o("AdsMgmtQPLLogger").isMarkerActive(t, n) &&
        (u[a] || ((u[a] = {}), (c[a] = {}), (d[a] = {})),
        u[a][n] || ((r = !0), (u[a][n] = {}), (c[a][n] = {}), (d[a][n] = {})),
        r &&
          o("AdsMgmtQPLLogger").onMarkerEnd(
            t,
            function (e) {
              h(e, n);
            },
            n,
          ));
    }
    function f(e, t, n, r, o) {
      (r === void 0 && (r = m), o === void 0 && (o = "QPL"));
      var a = t;
      if (/^(\/[^\/]+)+$/.test(a))
        for (; a != ""; ) {
          g(e, a, n, r, o);
          var i = a.lastIndexOf(p);
          a = a.substring(0, i);
        }
      else return g(e, a, n, r, o);
    }
    function g(t, n, r, a, i) {
      var l;
      (a === void 0 && (a = m), i === void 0 && (i = "QPL"));
      var s = (e || (e = o("QPLEvent"))).getMarkerId(t);
      (l = u[s]) != null &&
        l[a] &&
        (u[s][a][n] ||
          ((u[s][a][n] = 0), (d[s][a][n] = i), r != null && (c[s][a][n] = 0)),
        (u[s][a][n] += 1),
        r != null && (c[s][a][n] += r));
    }
    function h(t, n) {
      var a = (e || (e = o("QPLEvent"))).getMarkerId(t),
        i = u[a][n],
        l = c[a][n],
        m = d[a][n];
      for (var p in i) {
        var _ = i[p],
          f = l[p],
          g = m[p];
        if (g === "ODS") {
          var h = Object.keys(r("AdsManagerWwwQuickLogModule")).find(
            function (e) {
              return r("AdsManagerWwwQuickLogModule")[e] === a;
            },
          );
          (s || (s = o("ODS"))).bumpEntityKey(
            4201,
            "FGS",
            p + (h ? "-" + h : ""),
            _,
          );
        } else if (g === "QPL") {
          var y;
          if (
            (o("AdsMgmtQPLLogger").markerAnnotate(
              t,
              { int: ((y = {}), (y[p + "_count"] = _), y) },
              { instanceKey: n },
            ),
            f != null)
          ) {
            var C;
            o("AdsMgmtQPLLogger").markerAnnotate(
              t,
              { int: ((C = {}), (C[p + "_duration"] = f), C) },
              { instanceKey: n },
            );
          }
        }
      }
      (delete u[a][n], delete c[a][n], delete d[a][n]);
    }
    ((l.__activeCounters = u),
      (l.__activeDurations = c),
      (l.__activeLoggers = d),
      (l.init = _),
      (l.addDuration = f));
  },
  98,
);
