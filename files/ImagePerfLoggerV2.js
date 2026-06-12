__d(
  "ImagePerfLoggerV2",
  [
    "ImageMutationTracker",
    "OneTraceCore",
    "VisibilityState",
    "WebAPIs",
    "addAnnotations",
    "clearTimeout",
    "getSanitizedUrl",
    "performanceNow",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e4,
      u,
      c = null,
      d,
      m = !1;
    function p() {
      m ||
        (typeof WeakMap == "function" &&
          ((d = new WeakMap()), (u = new WeakSet())),
        o("WebAPIs").IntersectionObserver &&
          (c = new (o("WebAPIs").IntersectionObserver)(y)),
        o("ImageMutationTracker").init(_, I),
        (m = !0));
    }
    function _(e, t, n) {
      var r, o, a;
      if (
        !(!d || !c) &&
        D(e) &&
        !(((r = u) != null && r.has(e)) || ((o = d) != null && o.has(e)))
      ) {
        if (((a = u) == null || a.add(e), f(e))) {
          C(e, t, n);
          return;
        }
        if (g(e)) {
          var i;
          (i = u) == null || i.delete(e);
          return;
        }
        if (!f(e)) {
          T(e, t, n);
          return;
        }
      }
    }
    function f(e) {
      return e.complete;
    }
    function g(e) {
      return e.getAttribute("loading") === "lazy";
    }
    function h() {
      var t,
        n = (e || (e = r("performanceNow")))(),
        a =
          (t = o("VisibilityState").getHiddenSpans(n - 1, n)) != null ? t : [];
      return a.length > 0;
    }
    function y(e) {
      e.forEach(function (e) {
        var t,
          n = (t = d) == null ? void 0 : t.get(e.target);
        if (n != null && e.target) {
          var o = n.imageOnLoadTime,
            a = n.mutationTime,
            i = n.mutationType,
            l = n.startPaintingTime,
            s = n.traceID;
          (L({
            element: e.target,
            traceID: s,
            mutationTime: a,
            mutationType: i,
            startPaintingTime: l,
            endPainingTime: e.time,
            imageOnLoadTime: o,
          }),
            r("OneTraceCore").endTrace(s, e.time, "SUCCESS"),
            k(e.target));
        }
      });
    }
    function C(t, n, a, i, l) {
      if (!(!d || !c)) {
        var u = l != null ? l : r("uuidv4")(),
          m = (e || (e = r("performanceNow")))(),
          p = {
            element: t,
            traceID: u,
            mutationTime: a,
            mutationType: n,
            startPaintingTime: m,
            imageOnLoadTime: i,
          };
        if (h())
          (L(babelHelpers.extends({}, p, { endPainingTime: m })),
            r("OneTraceCore").endTrace(u, m, "SUCCESS"));
        else {
          var _,
            f,
            g = setTimeout(function () {
              var n = (e || (e = r("performanceNow")))();
              (L(babelHelpers.extends({}, p, { endPainingTime: n })),
                r("OneTraceCore").endTrace(u, n, "TIMEOUT"),
                k(t));
            }, s),
            y = function (o, a) {
              if (a) {
                var n = (e || (e = r("performanceNow")))();
                (L(babelHelpers.extends({}, p, { endPainingTime: n })),
                  r("OneTraceCore").endTrace(u, n, "SUCCESS"),
                  k(t));
              }
            };
          (o("VisibilityState").subscribe(y),
            (_ = d) == null ||
              _.set(t, {
                timer: g,
                traceID: u,
                visibilityChangeCallaback: y,
                mutationType: n,
                mutationTime: a,
                startPaintingTime: m,
                imageOnLoadTime: i,
              }),
            (f = c) == null || f.observe(t));
        }
      }
    }
    function b(e) {
      var t = e.match(/\.(\w+)(\?|$)/);
      return t && t.length > 1 ? t[1] : "";
    }
    function v(e) {
      return e.getAttribute("data-imgperflogname");
    }
    function S(e) {
      if (typeof window == "undefined") return null;
      var t = window.getComputedStyle(e);
      return t.objectFit;
    }
    function R(e) {
      var t =
        performance &&
        performance.getEntriesByName &&
        performance.getEntriesByName(e);
      return t && t[0];
    }
    function L(e) {
      var t = e.element,
        n = e.endPainingTime,
        a = e.imageOnLoadTime,
        i = e.mutationTime,
        l = e.mutationType,
        s = e.startPaintingTime,
        u = e.traceID;
      if (t instanceof HTMLImageElement) {
        var c,
          d = t.src,
          m = { mutationType: l },
          p = {},
          _ = d != null ? R(d) : null,
          f = d != null ? b(d) : null,
          g = v(t),
          h = r("OneTraceCore").startTrace(
            u,
            (c = r("OneTraceCore").getCurrentTracePolicy()) != null ? c : "",
            "IMAGE",
            i,
          );
        if (
          ((p.hidden = Number(o("VisibilityState").wasHidden(i, n))),
          a != null && (h.markerPoints.imageOnLoad = { timeSinceStart: a }),
          (h.markerPoints.startPainting = { timeSinceStart: s }),
          (h.markerPoints.mutationTime = { timeSinceStart: i }),
          ["naturalHeight", "naturalWidth", "width", "height"].forEach(
            function (e) {
              p[e] = t[e];
            },
          ),
          _ != null)
        ) {
          ([
            "connectEnd",
            "connectStart",
            "domainLookupEnd",
            "domainLookupStart",
            "fetchStart",
            "redirectEnd",
            "redirectStart",
            "requestStart",
            "responseEnd",
            "responseStart",
            "secureConnectionStart",
            "startTime",
            "workerStart",
          ].forEach(function (e) {
            _ != null &&
              typeof _[e] == "number" &&
              (h.markerPoints[e] = { timeSinceStart: _[e] });
          }),
            ["decodedBodySize", "encodedBodySize", "transferSize"].forEach(
              function (e) {
                _ != null && typeof _[e] == "number" && (p[e] = _[e]);
              },
            ),
            _ != null &&
              typeof _.nextHopProtocol == "string" &&
              (m.nextHopProtocol = _.nextHopProtocol),
            f != null && f !== "" && (m.fileExt = f),
            g != null && (m.logName = g));
          var y = S(t);
          y != null && (m.objectFit = y);
          var C = d != null ? r("getSanitizedUrl")(d) : null;
          C != null && C !== "" && (m.url = C);
        }
        r("addAnnotations")(h.annotations, { string: m, int: p });
      }
    }
    function E(t, n, o, a, i) {
      var l = function () {
          (C(t, n, o, a, i),
            t.removeEventListener("load", l),
            t.removeEventListener("error", s));
        },
        s = function () {
          var u = (e || (e = r("performanceNow")))();
          (L({
            element: t,
            mutationTime: o,
            mutationType: n,
            startPaintingTime: a,
            endPainingTime: u,
            traceID: i,
            imageOnLoadTime: a,
          }),
            r("OneTraceCore").endTrace(i, u, "FAIL"),
            k(t),
            t.removeEventListener("load", l),
            t.removeEventListener("error", s));
        };
      return { errorHandler: s, loadHandler: l };
    }
    function k(e) {
      var t,
        n,
        a = (t = d) == null ? void 0 : t.get(e);
      if (((n = c) == null || n.unobserve(e), a)) {
        var i,
          l = a.timer,
          s = a.visibilityChangeCallaback;
        (r("clearTimeout")(l),
          (i = d) == null || i.delete(e),
          o("VisibilityState").unsubscribe(s));
      }
    }
    function I(t) {
      var n,
        o = (n = d) == null ? void 0 : n.get(t);
      if (o != null) {
        var a = (e || (e = r("performanceNow")))(),
          i = o.imageOnLoadTime,
          l = o.mutationTime,
          s = o.mutationType,
          u = o.startPaintingTime,
          c = o.traceID;
        (L({
          element: t,
          traceID: c,
          mutationType: s,
          mutationTime: l,
          startPaintingTime: u,
          endPainingTime: a,
          imageOnLoadTime: i,
        }),
          r("OneTraceCore").endTrace(c, a, "CANCEL"),
          k(t));
      }
    }
    function T(t, n, o) {
      var a = (e || (e = r("performanceNow")))(),
        i = r("uuidv4")(),
        l = E(t, n, o, a, i),
        s = l.errorHandler,
        u = l.loadHandler;
      (t.addEventListener("load", u), t.addEventListener("error", s));
    }
    function D(e) {
      return x(e) === "IMG";
    }
    function x(e) {
      var t;
      return (t = e.tagName) != null ? t : "";
    }
    ((l.init = p), (l.logImagePerfV2 = _));
  },
  98,
);
