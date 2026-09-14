__d(
  "WebBloksCollectionHelpers",
  ["WebBloksCollectionMinificationKeys", "WebBloksUtils"],
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
        a = e.getStyle(
          o("WebBloksCollectionMinificationKeys").COLLECTION_STYLE,
        ),
        i = e.getStyle(o("WebBloksCollectionMinificationKeys").BASE_STYLE),
        l =
          t === "width"
            ? (n =
                a == null
                  ? void 0
                  : a.get(
                      o("WebBloksCollectionMinificationKeys")
                        .COLLECTION_STYLE_WIDTH,
                    )) != null
              ? n
              : i == null
                ? void 0
                : i.get(
                    o("WebBloksCollectionMinificationKeys").BASE_STYLE_WIDTH,
                  )
            : (r =
                  a == null
                    ? void 0
                    : a.get(
                        o("WebBloksCollectionMinificationKeys")
                          .COLLECTION_STYLE_HEIGHT,
                      )) != null
              ? r
              : i == null
                ? void 0
                : i.get(
                    o("WebBloksCollectionMinificationKeys").BASE_STYLE_HEIGHT,
                  );
      return o("WebBloksUtils").isPercentage(l);
    }
    function u(t) {
      var n,
        r = t.getSubNodes(
          o("WebBloksCollectionMinificationKeys").COLLECTION_CHILDREN,
        ),
        a = t.get(o("WebBloksCollectionMinificationKeys").COLLECTION_DIRECTION),
        i = e(a),
        l = i.mainAxisSize,
        u =
          (n =
            r &&
            r.some(function (e) {
              return s(e, l);
            })) != null
            ? n
            : !1;
      return u ? (a === "column" ? "size" : "inline-size") : "normal";
    }
    function c(e) {
      return (
        e.get(
          o("WebBloksCollectionMinificationKeys")
            .COLLECTION_MEASUREMENT_VERSION,
        ) === "v2"
      );
    }
    ((l.getDirectionPropNames = e),
      (l.hasCollectionDimensionInPct = s),
      (l.getContainerType = u),
      (l.shouldUseWebBloksCollectionV2 = c));
  },
  98,
);
