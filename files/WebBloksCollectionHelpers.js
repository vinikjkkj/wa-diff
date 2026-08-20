__d(
  "WebBloksCollectionHelpers",
  ["WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e === "column",
        n = t ? "height" : "width",
        r = t ? "width" : "height",
        o = t ? "marginTop" : "marginLeft",
        a = t ? "marginBottom" : "marginRight",
        i = t ? "top" : "left",
        l = t ? "bottom" : "right";
      return {
        mainAxisSize: n,
        crossAxisSize: r,
        mainAxisMarginStart: o,
        mainAxisMarginEnd: a,
        start: i,
        end: l,
      };
    }
    function s(e, t) {
      var n,
        r,
        a,
        i =
          (n = (r = e.getStyle("collection")) == null ? void 0 : r.get(t)) !=
          null
            ? n
            : (a = e.getStyle("bk.style.Base")) == null
              ? void 0
              : a.get(t);
      return o("WebBloksUtils").isPercentage(i);
    }
    function u(t) {
      var n,
        r = t.getSubNodes("children"),
        o = t.get("direction"),
        a = e(o),
        i = a.mainAxisSize,
        l =
          (n =
            r &&
            r.some(function (e) {
              return s(e, i);
            })) != null
            ? n
            : !1;
      return l ? (o === "column" ? "size" : "inline-size") : "normal";
    }
    function c(e) {
      return e.get("measurement_version_internal_use_only") === "v2";
    }
    ((l.getDirectionPropNames = e),
      (l.hasCollectionDimensionInPct = s),
      (l.getContainerType = u),
      (l.shouldUseWebBloksCollectionV2 = c));
  },
  98,
);
