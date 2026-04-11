__d(
  "LateMutationUtilities",
  ["VisualCompletionConstants", "WebAPIs", "addAnnotations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      u(e) && (c(e, t), d(t), f(e, t), h(t), y(t), C(t));
    }
    function u(e) {
      var t = e.interactionType === "INITIAL_LOAD",
        n = e.markerPoints.has("ssr_paint");
      return t && n;
    }
    function c(e, t) {
      if (e.config.SSRInjectedElements != null) {
        m(e, t);
        return;
      }
      var n = null;
      (t.pagelets.forEach(function (e) {
        e.name === "root" && (n = e.mutationSeq);
      }),
        t.elements.forEach(function (t) {
          var r = t.pagelet;
          if (
            r != null &&
            n != null &&
            t.mutationSeq > n &&
            t.type === "component"
          ) {
            if (e.config.onlyLogLateMutationAfterSSRPaint()) {
              var a,
                i =
                  (a = e.markerPoints.get("ssr_paint")) == null
                    ? void 0
                    : a.timestamp;
              i != null &&
                i < t.latency &&
                (_(t, e)
                  ? ((r.data.hadLateMutationExpected = 1),
                    (t.hadLateMutationExpected = !0))
                  : ((r.data.hadLateMutationUnexpected = 1),
                    (t.hadLateMutationUnexpected = !0)));
            } else
              _(t, e)
                ? ((r.data.hadLateMutationExpected = 1),
                  (t.hadLateMutationExpected = !0))
                : ((r.data.hadLateMutationUnexpected = 1),
                  (t.hadLateMutationUnexpected = !0));
            var l = o("WebAPIs").derefOnlyAttachedElement(t.element);
            l != null && p(e, t, l);
          }
        }));
    }
    function d(e) {
      for (var t = e.elements.length - 1; t >= 0; t--) {
        var n = e.elements[t];
        if (
          (n.hadLateMutationExpected || n.hadLateMutationUnexpected) &&
          n.reactStack != null
        ) {
          var r = n.reactStack,
            o = r.indexOf("HeroPagelet");
          (o >= 0 && r.splice(o), (n.reactStack = r));
        }
      }
    }
    function m(e, t) {
      var n = t.markerPoints.get("vcWithoutImage"),
        r = o("WebAPIs").derefOnlyAttachedElement(
          n == null ? void 0 : n.element,
        ),
        a = t.markerPoints.get("visuallyComplete"),
        i = o("WebAPIs").derefOnlyAttachedElement(
          a == null ? void 0 : a.element,
        );
      t.elements.forEach(function (t) {
        if (t.type === "component") {
          var l,
            s = o("WebAPIs").derefOnlyAttachedElement(t.element);
          if (
            s == null ||
            ((l = e.config.SSRInjectedElements) != null && l.has(s))
          )
            return;
          for (var u = s, c = !1; s != null; ) {
            var d;
            if ((d = e.config.SSRInjectedElements) != null && d.has(s)) {
              c = !0;
              break;
            }
            s = s.parentElement;
          }
          if (!c) return;
          if ((p(e, t, u), _(t, e))) t.hadLateMutationExpected = !0;
          else {
            if (((t.hadLateMutationUnexpected = !0), n != null && r === u)) {
              var m = n.data || {};
              ((m.mutationType = "ssrLateMutationUnexpected"), (n.data = m));
            }
            if (a != null && i === u) {
              var f = a.data || {};
              ((f.mutationType = "ssrLateMutationUnexpected"), (a.data = f));
            }
          }
        }
      });
    }
    function p(e, t, n) {
      var r = e.config.getReactComponentStackFromDOMElement;
      if (r && n != null) {
        var o = r(n);
        o != null && (t.reactStack = o);
      }
    }
    function _(t, n) {
      for (var a = o("WebAPIs").derefOnlyAttachedElement(t.element); a; ) {
        if (
          a.getAttribute(
            (e || (e = r("VisualCompletionConstants"))).ATTRIBUTE_NAME,
          ) ===
            (e || (e = r("VisualCompletionConstants"))).IGNORE_LATE_MUTATION ||
          n.lateMutationIgnoreElements.has(a)
        )
          return !0;
        a = a.parentElement;
      }
      if (t.reactStack != null) {
        var i = t.reactStack;
        if (
          i.indexOf("CometDOMOnlyBoundary") >= 0 ||
          i.indexOf("CometSSRSuspendOnServer") >= 0
        )
          return !0;
      }
      return !1;
    }
    function f(e, t) {
      for (
        var n = 10, a = 0, i = 0, l = 0, s = t.elements.length - 1;
        s >= 0;
        s--
      ) {
        var u = t.elements[s];
        (u.hadLateMutationExpected || u.hadLateMutationUnexpected) &&
          ((i += u.hadLateMutationExpected ? 1 : 0),
          (l += u.hadLateMutationUnexpected ? 1 : 0),
          (a = u.hadLateMutationExpected && i + l >= n ? 1 : 0));
      }
      r("addAnnotations")(t.annotations, {
        int: { lmCountExpected: i, lmCountUnexpected: l },
        bool: {
          hadLateMutationExpected: i > 0,
          hadLateMutationUnexpected: l > 0,
        },
      });
      var c = n - l - a,
        d = [],
        m = !1,
        p,
        _ = !1,
        f = 1;
      ((i = 1), (l = 1));
      for (var h = t.elements.length - 1; h >= 0; h--) {
        var y = t.elements[h];
        if (y.hadLateMutationUnexpected || y.hadLateMutationExpected) {
          var C = {
            hadLateMutationExpected: y.hadLateMutationExpected,
            hadLateMutationUnexpected: y.hadLateMutationUnexpected,
            mutationType: y.mutationType,
            type: y.type,
            height: y.rectangle.bottom - y.rectangle.top,
            width: y.rectangle.right - y.rectangle.left,
          };
          if (y.element) {
            var b;
            C.tagName =
              (b = o("WebAPIs").derefOnlyAttachedElement(y.element)) == null
                ? void 0
                : b.tagName;
          }
          if (
            (y.pagelet && (C.pagelet = y.pagelet.name),
            !_ &&
              y.hadLateMutationUnexpected &&
              ((C.reactStack = y.reactStack), (_ = !0)),
            (p = {
              markerPointData: C,
              markerPointTitle: g(C, y.hadLateMutationUnexpected ? l : i),
              element: y,
              timestamp: y.latency,
            }),
            e.config.logLateMutationReactStack &&
              y.reactStack != null &&
              !m &&
              y.hadLateMutationUnexpected)
          ) {
            var v;
            (r("addAnnotations")(t.annotations, {
              string: {
                lateMutationStack: y.reactStack.join(","),
                lateMutationPagelet: (v = y.pagelet) == null ? void 0 : v.name,
              },
            }),
              (m = !0));
          }
          (i <= c || y.hadLateMutationUnexpected) &&
            f < n &&
            (y.hadLateMutationUnexpected ? l++ : i++, d.push(p), f++);
        }
      }
      p && f === n && d.push(p);
      var S = d.length;
      if (S > 1) {
        var R = d[S - 1];
        R.markerPointData.reactStack = R.element.reactStack;
      }
      d.forEach(function (e) {
        return t.markerPoints.set(e.markerPointTitle, {
          data: e.markerPointData,
          timestamp: e.timestamp,
        });
      });
    }
    function g(e, t) {
      return (
        "late_mutation/" +
        (e.hadLateMutationUnexpected ? "unexpected" : "expected") +
        "_" +
        t
      );
    }
    function h(e) {
      var t,
        n = e.markerPoints.get("vcWithoutImage"),
        o = 0;
      if (
        (n == null || (t = n.data) == null ? void 0 : t.mutationType) ===
        "ssrLateMutationUnexpected"
      ) {
        var a,
          i = Number.MIN_SAFE_INTEGER,
          l =
            (a = e.markerPoints.get("ssr_paint")) == null
              ? void 0
              : a.timestamp;
        (l != null && l < e.vcWithoutImage && (i = Math.max(i, l)),
          e.elements.forEach(function (e) {
            e.type === "component" &&
              e.hadLateMutationUnexpected !== !0 &&
              (i = Math.max(i, e.latency));
          }),
          i !== Number.MIN_SAFE_INTEGER && (o = e.vcWithoutImage - i));
      }
      r("addAnnotations")(e.annotations, { int: { ssrLateMutationCost: o } });
    }
    function y(e) {
      var t = e.pagelets.reduce(function (e, t) {
        return "firstPaint" in t.points ? Math.min(e, t.points.firstPaint) : e;
      }, Number.MAX_SAFE_INTEGER);
      t !== Number.MAX_SAFE_INTEGER &&
        r("addAnnotations")(e.annotations, {
          int: { progressiveRenderCost: e.vcWithoutImage - t },
        });
    }
    function C(e) {
      var t = e.pagelets.reduce(function (e, t) {
          return "firstPaint" in t.points && t.data.lateMutation
            ? Math.min(e, t.points.firstPaint)
            : e;
        }, Number.MAX_SAFE_INTEGER),
        n = e.pagelets.reduce(function (e, t) {
          return "vcWithoutImage" in t.points && t.data.lateMutation
            ? Math.max(e, t.points.vcWithoutImage)
            : e;
        }, Number.MIN_SAFE_INTEGER);
      t !== Number.MAX_SAFE_INTEGER &&
        n !== Number.MIN_SAFE_INTEGER &&
        r("addAnnotations")(e.annotations, {
          int: { SsrPageletLmCost: n - t },
        });
    }
    ((l.logLateMutationData = s), (l.logLateMutationMarkerPoints = f));
  },
  98,
);
