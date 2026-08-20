__d(
  "WebBloksLayout",
  [
    "WebBloksCSSUtils",
    "WebBloksEnvironmentContext",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        r;
      t[0] !== e ? ((r = e.get("_style")), (t[0] = e), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      t[2] !== e ? ((i = e.get("alpha")), (t[2] = e), (t[3] = i)) : (i = t[3]);
      var l = i,
        s;
      t[4] !== a
        ? ((s = o("WebBloksUtils").isStyle(a, "flex")), (t[4] = a), (t[5] = s))
        : (s = t[5]);
      var u = s,
        m;
      if (t[6] !== l || t[7] !== n || t[8] !== a || t[9] !== u) {
        if (((m = {}), l != null && (m.opacity = l), u)) {
          var p = o("WebBloksUtils").nullthrows(a).getValues_DO_NOT_USE();
          c(p, m);
          for (var _ of Object.entries(p)) {
            var f = _[0],
              g = _[1];
            if (!d(f)) {
              var h = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(f),
                n,
              );
              e: switch (h) {
                case "grow": {
                  m.flexGrow = String(g);
                  break e;
                }
                case "shrink": {
                  m.flexShrink = String(g);
                  break e;
                }
                case "alignSelf": {
                  m.alignSelf = o("WebBloksUtils").toHyphen(String(g));
                  break e;
                }
                case "flexBasis": {
                  m.flexBasis = o("WebBloksUtils").toPx(String(g));
                  break e;
                }
                case "justifyContent": {
                  m.justifyContent = o("WebBloksUtils").toHyphen(String(g));
                  break e;
                }
                case "position_type":
                case "positionType": {
                  m.position = String(g);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((m[h] = o("WebBloksUtils").toPx(String(g))),
                    (m.position = "absolute"));
                  break e;
                }
                case "aspectRatio":
                  break e;
                case "ntDebugMetadataV2":
                  break e;
                case "width":
                case "height":
                case "minHeight":
                case "maxHeight":
                case "minWidth":
                case "maxWidth":
                case "marginTop":
                case "marginRight":
                case "marginBottom":
                case "marginLeft":
                case "paddingTop":
                case "paddingRight":
                case "paddingBottom":
                case "paddingLeft": {
                  m[h] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(g)),
                  );
                  break e;
                }
                case "margin":
                case "marginHorizontal":
                case "marginVertical":
                  break e;
                case "transform": {
                  m[h] = String(g);
                  break e;
                }
                default:
                  m[h] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(g)),
                  );
              }
            }
          }
        }
        var y = o("WebBloksUtils").isStyle(a, "collection");
        if (y) {
          var C = o("WebBloksUtils").nullthrows(a).getValues_DO_NOT_USE();
          for (var b of Object.entries(C)) {
            var v = b[0],
              S = b[1];
            if (!d(v)) {
              var R = o("WebBloksUtils").toCamel(v);
              e: switch (R) {
                case "isSticky": {
                  S === !0 && (m.position = "sticky");
                  break e;
                }
                case "onAppear":
                case "onDisappear":
                  break e;
                case "height": {
                  m.height = o("WebBloksUtils").toPx(String(S));
                  break e;
                }
                case "width": {
                  m.width = o("WebBloksUtils").toPx(String(S));
                  break e;
                }
                case "ntDebugMetadataV2":
                  break e;
                default:
                  m[R] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(S)),
                  );
              }
            }
          }
        }
        var L = o("WebBloksUtils").isStyle(a, "bk.style.Base");
        if (L) {
          var E = o("WebBloksUtils").nullthrows(a).getValues_DO_NOT_USE();
          c(E, m);
          for (var k of Object.entries(E)) {
            var I = k[0],
              T = k[1];
            if (!d(I)) {
              var D = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(I),
                n,
              );
              e: switch (D) {
                case "flexGrow": {
                  m.flexGrow = String(T);
                  break e;
                }
                case "flexShrink": {
                  m.flexShrink = String(T);
                  break e;
                }
                case "flexBasis": {
                  m.flexBasis = o("WebBloksUtils").toPx(String(T));
                  break e;
                }
                case "alignSelf": {
                  m.alignSelf = o("WebBloksUtils").toHyphen(String(T));
                  break e;
                }
                case "positionType": {
                  m.position = String(T);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((m[D] = o("WebBloksUtils").toPx(String(T))),
                    (m.position = "absolute"));
                  break e;
                }
                case "aspectRatio":
                  break e;
                case "zIndex": {
                  m.zIndex = Number(T);
                  break e;
                }
                case "collectionStickyItemConfig":
                case "gridSpanCount":
                case "gridIsFullSpan":
                case "staggeredGridCellAspectRatio":
                  break e;
                case "ntDebugMetadataV2":
                  break e;
                case "width":
                case "height":
                case "minHeight":
                case "maxHeight":
                case "minWidth":
                case "maxWidth":
                case "marginTop":
                case "marginRight":
                case "marginBottom":
                case "marginLeft": {
                  m[D] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(T)),
                  );
                  break e;
                }
                case "margin":
                case "marginHorizontal":
                case "marginVertical":
                  break e;
                default:
                  m[D] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(T)),
                  );
              }
            }
          }
        }
        (o("WebBloksUtils").isStyle(a, "ig.style.SearchStyle") &&
          (m.width = "100%"),
          (t[6] = l),
          (t[7] = n),
          (t[8] = a),
          (t[9] = u),
          (t[10] = m));
      } else m = t[10];
      return m;
    }
    function c(e, t) {
      if (e.margin != null) {
        var n;
        ((t.marginLeft = (n = o("WebBloksUtils")).toPx(
          n.toHyphen(String(e.margin)),
        )),
          (t.marginRight = n.toPx(n.toHyphen(String(e.margin)))),
          (t.marginTop = n.toPx(n.toHyphen(String(e.margin)))),
          (t.marginBottom = n.toPx(n.toHyphen(String(e.margin)))));
      }
      if (e.margin_horizontal != null) {
        var n;
        ((t.marginLeft = (n = o("WebBloksUtils")).toPx(
          n.toHyphen(String(e.margin_horizontal)),
        )),
          (t.marginRight = n.toPx(n.toHyphen(String(e.margin_horizontal)))));
      }
      if (e.margin_vertical != null) {
        var n;
        ((t.marginTop = (n = o("WebBloksUtils")).toPx(
          n.toHyphen(String(e.margin_vertical)),
        )),
          (t.marginBottom = n.toPx(n.toHyphen(String(e.margin_vertical)))));
      }
    }
    function d(e) {
      return e[0] === "$" || e === "id" || e === "on_bind";
    }
    l.default = u;
  },
  98,
);
