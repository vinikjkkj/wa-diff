__d(
  "HeroBootloadPerfStore",
  [
    "BootloaderEvents",
    "InteractionTracingMetrics",
    "ResourceTimingStore",
    "filterMap",
    "gkx",
    "performanceNavigationStart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["encodedBodySize", "transferSize", "totalCount", "cacheCount"],
      s = ["t1", "t2", "t3"],
      u = ["untiered"],
      c = ["js", "css"],
      d = new Map();
    o("BootloaderEvents").onBootload(function (e) {
      e.components.forEach(function (t) {
        d.set(t, e);
      });
    });
    function m(e, t) {
      if (t == null) {
        e.missingData++;
        return;
      }
      (e.urls && e.urls.add(t.name),
        (e.encodedBodySize += t.encodedBodySize),
        (e.decodedBodySize += t.decodedBodySize),
        (e.transferSize += t.transferSize),
        (e.totalCount += 1),
        t.transferSize === 0 && (e.cacheCount += 1));
    }
    function p(e) {
      return e.src.indexOf("data") === 0;
    }
    function _(e, t, n) {
      var r = new Map();
      function a(e) {
        var t,
          n =
            (t = r.get(e)) != null
              ? t
              : {
                  cacheCount: 0,
                  decodedBodySize: 0,
                  encodedBodySize: 0,
                  missingData: 0,
                  totalCount: 0,
                  transferSize: 0,
                  urls: null,
                };
        return (r.set(e, n), n);
      }
      function i(e, r) {
        var i = o("ResourceTimingStore").getEntryForURL(r.src);
        (m(a("used_" + r.type), i),
          m(a("used_" + e), i),
          m(a("used_" + e + "_" + r.type), i),
          i != null &&
            i.responseEnd >= t &&
            i.responseEnd <= n &&
            (m(a("downloaded_" + e), i),
            m(a("downloaded_" + r.type), i),
            m(a("downloaded_" + e + "_" + r.type), i)));
      }
      function l(e, t) {
        ((e.decodedBodySize += t.length), (e.totalCount += 1));
      }
      function s(e, t) {
        (l(a("inline_" + e), t.src),
          l(a("inline_" + t.type), t.src),
          l(a("inline_" + e + "_" + t.type), t.src));
      }
      var u = function () {
        var e = c[0],
          t = c[1];
        t.forEach(function (t, n) {
          (t.type === "css" || t.type === "js") && (p(t) ? s(e, t) : i(e, t));
        });
      };
      for (var c of e) u();
      return r;
    }
    function f(e, t, n) {
      var r,
        o = (r = e.get(t)) != null ? r : new Map();
      e.set(t, o);
      for (var a of n) (a.type === "css" || a.type === "js") && o.set(a.src, a);
    }
    function g(t, n, o, a) {
      if (r("gkx")("19041") && !r("gkx")("19047")) return {};
      var i = _(o, t, n),
        l = {};
      for (var s of a)
        for (var u of c) {
          var d,
            m,
            p = "downloaded_" + s + "_" + u;
          for (var f of e) {
            var g, h;
            l[p + "_" + f] =
              (g = (h = i.get(p)) == null ? void 0 : h[f]) != null ? g : 0;
          }
          var y = "inline_" + s + "_" + u;
          l[y + "_decodedBodySize"] =
            (d = (m = i.get(y)) == null ? void 0 : m.decodedBodySize) != null
              ? d
              : 0;
        }
      return l;
    }
    function h(t, n, o, a) {
      var i, l;
      if (
        ((i = t.annotations.int) == null
          ? void 0
          : i.hasExtraResourceMetadata) === 1
      ) {
        var s = _(n, t.start, (l = t.completed) != null ? l : t.start);
        [].concat(c, a).forEach(function (n) {
          var a,
            i = s.get("downloaded_" + n);
          for (var l of e) {
            var u;
            r("InteractionTracingMetrics").addMetadata(
              t.traceId,
              o + "_downloaded_" + n + "_" + l,
              (u = i == null ? void 0 : i[l]) != null ? u : 0,
            );
          }
          var c = s.get("inline_" + n);
          r("InteractionTracingMetrics").addMetadata(
            t.traceId,
            o + "_inline_" + n + "_decodedBodySize",
            (a = c == null ? void 0 : c.decodedBodySize) != null ? a : 0,
          );
        });
      }
    }
    function y(e) {
      var t = new Map();
      (e.heroRelay.forEach(function (n) {
        var a = n.pageletStack,
          i = n.queries;
        for (var l of i) {
          var s = l.hasteResponseLogEvents;
          for (var c of s) {
            var d,
              m,
              p = c.startTime - r("performanceNavigationStart")(),
              _ = c.logTime - r("performanceNavigationStart")();
            if (_ < e.start || p > ((d = e.completed) != null ? d : 1 / 0))
              return;
            var h = o("BootloaderEvents").flattenResourceMapSet(c.rsrcs),
              y = new Map();
            (f(t, "untiered", h.values()), f(y, "untiered", h.values()));
            var C = g(p, _, y, u);
            r("InteractionTracingMetrics").addSubspan(
              e.traceId,
              "Relay3D: " + l.name,
              "HeroTracing",
              Math.max(e.start, p),
              Math.min((m = e.completed) != null ? m : 1 / 0, _),
              babelHelpers.extends(
                {},
                {
                  pagelet: a[a.length - 1],
                  pageletStack: a,
                  spanType: "Relay3D",
                },
                C,
                {
                  full_duration: (_ - p) / 1e3,
                  is_preloaded: l.isPreloaded === !0,
                },
              ),
            );
          }
        }
      }),
        h(e, t, "relay3d", u));
    }
    function C(e) {
      var t,
        n = Array.from(
          new Set(
            (t = []).concat.apply(
              t,
              e.heroBootloads.map(function (e) {
                return e.moduleIDs;
              }),
            ),
          ),
        ),
        a = new Map(),
        i = new Map();
      n.forEach(function (e) {
        var t = d.get(e);
        t && i.set(e, t);
      });
      for (var l of i.values())
        (f(
          a,
          "t1",
          o("BootloaderEvents").flattenResourceMapSet(l.tierOne).values(),
        ),
          f(
            a,
            "t2",
            o("BootloaderEvents").flattenResourceMapSet(l.tierTwo).values(),
          ),
          f(
            a,
            "t3",
            o("BootloaderEvents").flattenResourceMapSet(l.tierThree).values(),
          ));
      if (
        (h(e, a, "bootload", s),
        e.heroBootloads.forEach(function (t) {
          var n = t.moduleIDs,
            r = t.pageletStack,
            o = new Set(
              n
                .map(function (e) {
                  return d.get(e);
                })
                .filter(Boolean),
            );
          b(e, o, r, "Bootload");
        }),
        r("gkx")("23414"))
      ) {
        var u = !r("gkx")("19041") || r("gkx")("19047");
        if (u) {
          var c = e.heroBootloads
              .map(function (e) {
                var t = e.moduleIDs;
                return t;
              })
              .flat(),
            m = r("filterMap")(d, function (e, t) {
              return !c.includes(t);
            });
          b(e, m, [], "BootloadOutside");
        }
      }
    }
    function b(e, t, n, a) {
      t.forEach(function (t) {
        var i;
        if (!(t.callbackEnd - r("performanceNavigationStart")() < e.start)) {
          var l = new Map();
          (f(
            l,
            "t1",
            o("BootloaderEvents").flattenResourceMapSet(t.tierOne).values(),
          ),
            f(
              l,
              "t2",
              o("BootloaderEvents").flattenResourceMapSet(t.tierTwo).values(),
            ),
            f(
              l,
              "t3",
              o("BootloaderEvents").flattenResourceMapSet(t.tierThree).values(),
            ));
          var u = g(
              t.startTime - r("performanceNavigationStart")(),
              t.callbackEnd - r("performanceNavigationStart")(),
              l,
              s,
            ),
            c = a + ": " + t.components.join(),
            d = a === "Bootload" ? "HeroTracing" : "BootloadOutside";
          r("InteractionTracingMetrics").addSubspan(
            e.traceId,
            c,
            d,
            Math.max(e.start, t.startTime - r("performanceNavigationStart")()),
            Math.min(
              (i = e.completed) != null ? i : 1 / 0,
              t.callbackStart - r("performanceNavigationStart")(),
            ),
            babelHelpers.extends(
              {},
              {
                bootloadComponents: t.components,
                bootloadRef: t.ref,
                pagelet: n[n.length - 1],
                pageletStack: n,
                spanType: a,
              },
              u,
            ),
          );
        }
      });
    }
    function v(e) {
      (o("ResourceTimingStore").init(), C(e), y(e));
    }
    l.addStaticResourcesStats = v;
  },
  98,
);
