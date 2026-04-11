__d(
  "QPLUserTimingPlugin",
  [
    "QPLEvent",
    "QuickLogActionType",
    "QuickLogEvents",
    "UserTimingUtils",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = [];
      if ((e == null ? void 0 : e.string) != null)
        for (var n of Object.entries(e.string)) {
          var r = n[0],
            o = n[1];
          o != null && t.push([r, o]);
        }
      if ((e == null ? void 0 : e.int) != null)
        for (var a of Object.entries(e.int)) {
          var i = a[0],
            l = a[1];
          l != null && t.push([i, l.toString()]);
        }
      if ((e == null ? void 0 : e.double) != null)
        for (var s of Object.entries(e.double)) {
          var u = s[0],
            c = s[1];
          c != null && t.push([u, c.toString()]);
        }
      if ((e == null ? void 0 : e.bool) != null)
        for (var d of Object.entries(e.bool)) {
          var m = d[0],
            p = d[1];
          p != null && t.push([m, p.toString()]);
        }
      if ((e == null ? void 0 : e.string_array) != null)
        for (var _ of Object.entries(e.string_array)) {
          var f = _[0],
            g = _[1];
          g != null && t.push([f, g.toString()]);
        }
      if ((e == null ? void 0 : e.int_array) != null)
        for (var h of Object.entries(e.int_array)) {
          var y = h[0],
            C = h[1];
          C != null && t.push([y, C.toString()]);
        }
      if ((e == null ? void 0 : e.double_array) != null)
        for (var b of Object.entries(e.double_array)) {
          var v = b[0],
            S = b[1];
          S != null && t.push([v, S.toString()]);
        }
      if ((e == null ? void 0 : e.bool_array) != null)
        for (var R of Object.entries(e.bool_array)) {
          var L = R[0],
            E = R[1];
          E != null && t.push([L, E.toString()]);
        }
      return t.sort(function (e, t) {
        return e[0].localeCompare(t[0]);
      });
    }
    function u(t) {
      var n = (e || (e = o("QPLEvent"))).getMarkerId(t),
        a = r("QuickLogEvents")[n];
      return a == null ? n.toString() : a.moduleName + "/" + a.name;
    }
    function c(e) {
      var t = Object.keys(r("QuickLogActionType")).find(function (t) {
        return r("QuickLogActionType")[t] === e;
      });
      return t != null ? t : e.toString();
    }
    function d(e, t, n) {
      var r = u(e),
        o = c(n);
      return r + "/" + o + "#id=" + t;
    }
    function m(e) {
      if (e == null) return e;
      var t = {};
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        t[r] = Number(o);
      }
      return t;
    }
    function p(e) {
      if (e == null) return e;
      var t = {};
      for (var n in e) t[n] = e[n].map(Number);
      return t;
    }
    function _() {
      return {
        onMarkerEnd: function (t, n, a, i, l) {
          var e = u(n),
            c = d(n, a, t),
            _ = l.durationMs,
            f = i - r("performanceNavigationStart")();
          if (_ > 0) {
            var g = f - _,
              h = l.logData,
              y = {
                string: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations,
                ),
                int: babelHelpers.extends(
                  {},
                  m(h == null ? void 0 : h.annotations_int),
                ),
                double: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations_double,
                ),
                bool: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations_bool,
                ),
                string_array: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations_string_array,
                ),
                int_array: babelHelpers.extends(
                  {},
                  p(h == null ? void 0 : h.annotations_int_array),
                ),
                double_array: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations_double_array,
                ),
                bool_array: babelHelpers.extends(
                  {},
                  h == null ? void 0 : h.annotations_bool_array,
                ),
              },
              C = s(y);
            if (
              (o("UserTimingUtils").measureModern(c, {
                detail: {
                  devtools: {
                    dataType: "track-entry",
                    properties: C,
                    track: e,
                    trackGroup: "QPL",
                  },
                },
                end: f,
                start: g,
              }),
              o("UserTimingUtils").markModern(c + "/Start", {
                startTime: g,
                detail: {
                  devtools: {
                    dataType: "track-entry",
                    track: e,
                    trackGroup: "QPL",
                  },
                },
              }),
              o("UserTimingUtils").markModern(c + "/End", {
                startTime: f,
                detail: {
                  devtools: {
                    dataType: "track-entry",
                    track: e,
                    trackGroup: "QPL",
                  },
                },
              }),
              h)
            ) {
              var b,
                v = (b = h.points) != null ? b : [],
                S = new Map();
              (v.forEach(function (t) {
                var n,
                  r,
                  a,
                  i,
                  l,
                  u,
                  d,
                  _,
                  f = {
                    string: babelHelpers.extends(
                      {},
                      (n = t.data) == null ? void 0 : n.string,
                    ),
                    int: babelHelpers.extends(
                      {},
                      m((r = t.data) == null ? void 0 : r.int),
                    ),
                    double: babelHelpers.extends(
                      {},
                      (a = t.data) == null ? void 0 : a.double,
                    ),
                    bool: babelHelpers.extends(
                      {},
                      (i = t.data) == null ? void 0 : i.bool,
                    ),
                    string_array: babelHelpers.extends(
                      {},
                      (l = t.data) == null ? void 0 : l.string_array,
                    ),
                    int_array: babelHelpers.extends(
                      {},
                      p((u = t.data) == null ? void 0 : u.int_array),
                    ),
                    double_array: babelHelpers.extends(
                      {},
                      (d = t.data) == null ? void 0 : d.double_array,
                    ),
                    bool_array: babelHelpers.extends(
                      {},
                      (_ = t.data) == null ? void 0 : _.bool_array,
                    ),
                  };
                if (t.name.endsWith("_start")) {
                  var h;
                  o("UserTimingUtils").markModern(c + "/" + t.name, {
                    startTime: g + Number(t.timeSinceStart),
                    detail: {
                      devtools: {
                        dataType: "track-entry",
                        properties: s(f),
                        track: e,
                        trackGroup: "QPL",
                      },
                    },
                  });
                  var y = t.name.slice(0, t.name.length - 6);
                  S.set(y, (h = S.get(y)) != null ? h : { properties: [] });
                  var C = S.get(y);
                  C &&
                    ((C.start = Number(t.timeSinceStart)),
                    (C.properties = C.properties.concat(s(f))));
                } else if (t.name.endsWith("_end")) {
                  var b;
                  o("UserTimingUtils").markModern(c + "/" + t.name, {
                    startTime: g + Number(t.timeSinceStart),
                    detail: {
                      devtools: {
                        dataType: "track-entry",
                        properties: s(f),
                        track: e,
                        trackGroup: "QPL",
                      },
                    },
                  });
                  var v = t.name.slice(0, t.name.length - 4);
                  S.set(v, (b = S.get(v)) != null ? b : { properties: [] });
                  var R = S.get(v);
                  R &&
                    ((R.end = Number(t.timeSinceStart)),
                    (R.properties = R.properties.concat(s(f))));
                } else
                  o("UserTimingUtils").measureModern(c + "/" + t.name, {
                    start: g,
                    duration: Number(t.timeSinceStart),
                    detail: {
                      devtools: {
                        dataType: "track-entry",
                        properties: s(f),
                        track: e,
                        trackGroup: "QPL",
                      },
                    },
                  });
              }),
                S.forEach(function (t, n) {
                  t.start != null &&
                    t.end != null &&
                    t.end >= t.start &&
                    o("UserTimingUtils").measureModern(c + "/" + n, {
                      detail: {
                        devtools: {
                          dataType: "track-entry",
                          properties: t.properties,
                          track: e,
                          trackGroup: "QPL",
                        },
                      },
                      start: g + t.start,
                      end: g + t.end,
                    });
                }));
            }
          }
        },
      };
    }
    var f = { getQplUserTimingListener: _ };
    l.default = f;
  },
  98,
);
