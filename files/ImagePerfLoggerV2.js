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
      m = !1,
      p = 5e3,
      _;
    function f(e) {
      var t,
        n = _;
      return e == null || e === "" || n == null
        ? 0
        : (t = n.get(e)) != null
          ? t
          : 0;
    }
    function g(e) {
      var t,
        n = _;
      if (!(e == null || e === "" || n == null)) {
        var r = ((t = n.get(e)) != null ? t : 0) + 1;
        if ((n.delete(e), n.set(e, r), n.size > p)) {
          var o = n.keys().next().value;
          o != null && n.delete(o);
        }
      }
    }
    function h() {
      m ||
        (typeof WeakMap == "function" &&
          ((d = new WeakMap()), (u = new WeakSet()), (_ = new Map())),
        o("WebAPIs").IntersectionObserver &&
          (c = new (o("WebAPIs").IntersectionObserver)(S)),
        o("ImageMutationTracker").init(y, P),
        (m = !0));
    }
    function y(e, t, n) {
      var r, o, a;
      if (
        !(!d || !c) &&
        M(e) &&
        !(((r = u) != null && r.has(e)) || ((o = d) != null && o.has(e)))
      ) {
        if (((a = u) == null || a.add(e), C(e))) {
          R(e, t, n);
          return;
        }
        if (b(e)) {
          var i;
          (i = u) == null || i.delete(e);
          return;
        }
        if (!C(e)) {
          N(e, t, n);
          return;
        }
      }
    }
    function C(e) {
      return e.complete;
    }
    function b(e) {
      return e.getAttribute("loading") === "lazy";
    }
    function v() {
      var t,
        n = (e || (e = r("performanceNow")))(),
        a =
          (t = o("VisibilityState").getHiddenSpans(n - 1, n)) != null ? t : [];
      return a.length > 0;
    }
    function S(e) {
      e.forEach(function (e) {
        var t,
          n = (t = d) == null ? void 0 : t.get(e.target);
        if (n != null && e.target) {
          var o = n.imageOnLoadTime,
            a = n.mutationTime,
            i = n.mutationType,
            l = n.startPaintingTime,
            s = n.traceID;
          (D({
            element: e.target,
            traceID: s,
            mutationTime: a,
            mutationType: i,
            startPaintingTime: l,
            endPainingTime: e.time,
            imageOnLoadTime: o,
          }),
            r("OneTraceCore").endTrace(s, e.time, "SUCCESS"),
            e.target instanceof HTMLImageElement &&
              g(r("getSanitizedUrl")(e.target.src)),
            $(e.target));
        }
      });
    }
    function R(t, n, a, i, l) {
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
        if (v())
          (D(babelHelpers.extends({}, p, { endPainingTime: m })),
            r("OneTraceCore").endTrace(u, m, "SUCCESS"),
            g(r("getSanitizedUrl")(t.src)));
        else {
          var _,
            f,
            h = setTimeout(function () {
              var n = (e || (e = r("performanceNow")))();
              (D(babelHelpers.extends({}, p, { endPainingTime: n })),
                r("OneTraceCore").endTrace(u, n, "TIMEOUT"),
                $(t));
            }, s),
            y = function (o, a) {
              if (a) {
                var n = (e || (e = r("performanceNow")))();
                (D(babelHelpers.extends({}, p, { endPainingTime: n })),
                  r("OneTraceCore").endTrace(u, n, "SUCCESS"),
                  g(r("getSanitizedUrl")(t.src)),
                  $(t));
              }
            };
          (o("VisibilityState").subscribe(y),
            (_ = d) == null ||
              _.set(t, {
                timer: h,
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
    function L(e) {
      var t = e.match(/\.(\w+)(\?|$)/);
      return t && t.length > 1 ? t[1] : "";
    }
    var E = { feedlmage: "feedImage" };
    function k(e) {
      var t,
        n = e.getAttribute("data-imgperflogname");
      return n != null && (t = E[n]) != null ? t : n;
    }
    function I(e) {
      if (typeof window == "undefined") return null;
      var t = window.getComputedStyle(e);
      return t.objectFit;
    }
    function T(e) {
      var t =
        performance &&
        performance.getEntriesByName &&
        performance.getEntriesByName(e);
      return t && t[0];
    }
    function D(e) {
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
          _ = d != null ? T(d) : null,
          g = d != null ? L(d) : null,
          h = k(t),
          y = d != null ? r("getSanitizedUrl")(d) : null,
          C = r("OneTraceCore").startTrace(
            u,
            (c = r("OneTraceCore").getCurrentTracePolicy()) != null ? c : "",
            "IMAGE",
            i,
          );
        if (
          ((p.hidden = Number(o("VisibilityState").wasHidden(i, n))),
          (p.previousSuccessfulLoadCount = f(y)),
          a != null && (C.markerPoints.imageOnLoad = { timeSinceStart: a }),
          (C.markerPoints.startPainting = { timeSinceStart: s }),
          (C.markerPoints.mutationTime = { timeSinceStart: i }),
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
              (C.markerPoints[e] = { timeSinceStart: _[e] });
          }),
            ["decodedBodySize", "encodedBodySize", "transferSize"].forEach(
              function (e) {
                _ != null && typeof _[e] == "number" && (p[e] = _[e]);
              },
            ),
            _ != null &&
              typeof _.nextHopProtocol == "string" &&
              (m.nextHopProtocol = _.nextHopProtocol),
            g != null && g !== "" && (m.fileExt = g),
            h != null && (m.logName = h));
          var b = I(t);
          (b != null && (m.objectFit = b),
            y != null && y !== "" && (m.url = y));
        }
        r("addAnnotations")(C.annotations, { string: m, int: p });
      }
    }
    function x(t, n, o, a, i) {
      var l = function () {
          (R(t, n, o, a, i),
            t.removeEventListener("load", l),
            t.removeEventListener("error", s));
        },
        s = function () {
          var u = (e || (e = r("performanceNow")))();
          (D({
            element: t,
            mutationTime: o,
            mutationType: n,
            startPaintingTime: a,
            endPainingTime: u,
            traceID: i,
            imageOnLoadTime: a,
          }),
            r("OneTraceCore").endTrace(i, u, "FAIL"),
            $(t),
            t.removeEventListener("load", l),
            t.removeEventListener("error", s));
        };
      return { errorHandler: s, loadHandler: l };
    }
    function $(e) {
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
    function P(t) {
      var n,
        o = (n = d) == null ? void 0 : n.get(t);
      if (o != null) {
        var a = (e || (e = r("performanceNow")))(),
          i = o.imageOnLoadTime,
          l = o.mutationTime,
          s = o.mutationType,
          u = o.startPaintingTime,
          c = o.traceID;
        (D({
          element: t,
          traceID: c,
          mutationType: s,
          mutationTime: l,
          startPaintingTime: u,
          endPainingTime: a,
          imageOnLoadTime: i,
        }),
          r("OneTraceCore").endTrace(c, a, "CANCEL"),
          $(t));
      }
    }
    function N(t, n, o) {
      var a = (e || (e = r("performanceNow")))(),
        i = r("uuidv4")(),
        l = x(t, n, o, a, i),
        s = l.errorHandler,
        u = l.loadHandler;
      (t.addEventListener("load", u), t.addEventListener("error", s));
    }
    function M(e) {
      return w(e) === "IMG";
    }
    function w(e) {
      var t;
      return (t = e.tagName) != null ? t : "";
    }
    ((l.init = h), (l.logImagePerfV2 = y));
  },
  98,
);
