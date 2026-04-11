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
        o("ImageMutationTracker").init(_),
        (m = !0));
    }
    function _(e, t, n) {
      var r, o, a;
      if (
        !(!d || !c) &&
        T(e) &&
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
          I(e, t, n);
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
    function C(t, n, a, i) {
      if (!(!d || !c)) {
        var l = r("uuidv4")(),
          u = (e || (e = r("performanceNow")))(),
          m = {
            element: t,
            traceID: l,
            mutationTime: a,
            mutationType: n,
            startPaintingTime: u,
            imageOnLoadTime: i,
          };
        if (h())
          (L(babelHelpers.extends({}, m, { endPainingTime: u })),
            r("OneTraceCore").endTrace(l, u, "SUCCESS"));
        else {
          var p,
            _,
            f = setTimeout(function () {
              var n = (e || (e = r("performanceNow")))();
              (L(babelHelpers.extends({}, m, { endPainingTime: n })),
                r("OneTraceCore").endTrace(l, n, "TIMEOUT"),
                k(t));
            }, s),
            g = function (o, a) {
              if (a) {
                var n = (e || (e = r("performanceNow")))();
                (L(babelHelpers.extends({}, m, { endPainingTime: n })),
                  r("OneTraceCore").endTrace(l, n, "SUCCESS"),
                  k(t));
              }
            };
          (o("VisibilityState").subscribe(g),
            (p = d) == null ||
              p.set(t, {
                timer: f,
                traceID: l,
                visibilityChangeCallaback: g,
                mutationType: n,
                mutationTime: a,
                startPaintingTime: u,
                imageOnLoadTime: i,
              }),
            (_ = c) == null || _.observe(t));
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
    function E(t, n, o, a) {
      var i = function () {
          (C(t, n, o, a),
            t.removeEventListener("load", i),
            t.removeEventListener("error", l));
        },
        l = function () {
          var s,
            u = (s = d) == null ? void 0 : s.get(t);
          if (u) {
            var c = u.startPaintingTime,
              m = u.traceID,
              p = (e || (e = r("performanceNow")))();
            (L({
              element: t,
              mutationTime: o,
              mutationType: n,
              startPaintingTime: c,
              endPainingTime: p,
              traceID: m,
              imageOnLoadTime: a,
            }),
              r("OneTraceCore").endTrace(m, p, "FAIL"),
              k(t));
          }
          (t.removeEventListener("load", i), t.removeEventListener("error", l));
        };
      return { errorHandler: l, loadHandler: i };
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
    function I(t, n, o) {
      var a = (e || (e = r("performanceNow")))(),
        i = E(t, n, o, a),
        l = i.errorHandler,
        s = i.loadHandler;
      (t.addEventListener("load", s), t.addEventListener("error", l));
    }
    function T(e) {
      return D(e) === "IMG";
    }
    function D(e) {
      var t;
      return (t = e.tagName) != null ? t : "";
    }
    ((l.init = p), (l.logImagePerfV2 = _));
  },
  98,
);
