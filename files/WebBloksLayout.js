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
      var t = o("react-compiler-runtime").c(7),
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        r;
      t[0] !== e._style
        ? ((r = o("WebBloksUtils").isStyle(e._style, "flex")),
          (t[0] = e._style),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      if (t[2] !== n || t[3] !== e._style || t[4] !== e.alpha || t[5] !== a) {
        if (((i = {}), e.alpha != null && (i.opacity = e.alpha), a)) {
          var l = o("WebBloksUtils").nullthrows(e._style).getValues();
          c(l, i);
          for (var s of Object.entries(l)) {
            var u = s[0],
              m = s[1];
            if (!d(u)) {
              var p = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(u),
                n,
              );
              e: switch (p) {
                case "grow": {
                  i.flexGrow = String(m);
                  break e;
                }
                case "shrink": {
                  i.flexShrink = String(m);
                  break e;
                }
                case "alignSelf": {
                  i.alignSelf = o("WebBloksUtils").toHyphen(String(m));
                  break e;
                }
                case "flexBasis": {
                  i.flexBasis = o("WebBloksUtils").toPx(String(m));
                  break e;
                }
                case "justifyContent": {
                  i.justifyContent = o("WebBloksUtils").toHyphen(String(m));
                  break e;
                }
                case "position_type":
                case "positionType": {
                  i.position = String(m);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((i[p] = o("WebBloksUtils").toPx(String(m))),
                    (i.position = "absolute"));
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
                  i[p] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(m)),
                  );
                  break e;
                }
                case "margin":
                case "marginHorizontal":
                case "marginVertical":
                  break e;
                case "transform": {
                  i[p] = String(m);
                  break e;
                }
                default:
                  i[p] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(m)),
                  );
              }
            }
          }
        }
        var _ = o("WebBloksUtils").isStyle(e._style, "collection");
        if (_) {
          var f = o("WebBloksUtils").nullthrows(e._style).getValues();
          for (var g of Object.entries(f)) {
            var h = g[0],
              y = g[1];
            if (!d(h)) {
              var C = o("WebBloksUtils").toCamel(h);
              e: switch (C) {
                case "isSticky": {
                  y === !0 && (i.position = "sticky");
                  break e;
                }
                case "onAppear":
                case "onDisappear":
                  break e;
                case "height": {
                  i.height = o("WebBloksUtils").toPx(String(y));
                  break e;
                }
                case "width": {
                  i.width = o("WebBloksUtils").toPx(String(y));
                  break e;
                }
                case "ntDebugMetadataV2":
                  break e;
                default:
                  i[C] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(y)),
                  );
              }
            }
          }
        }
        var b = o("WebBloksUtils").isStyle(e._style, "bk.style.Base");
        if (b) {
          var v = o("WebBloksUtils").nullthrows(e._style).getValues();
          c(v, i);
          for (var S of Object.entries(v)) {
            var R = S[0],
              L = S[1];
            if (!d(R)) {
              var E = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(R),
                n,
              );
              e: switch (E) {
                case "flexGrow": {
                  i.flexGrow = String(L);
                  break e;
                }
                case "flexShrink": {
                  i.flexShrink = String(L);
                  break e;
                }
                case "flexBasis": {
                  i.flexBasis = o("WebBloksUtils").toPx(String(L));
                  break e;
                }
                case "alignSelf": {
                  i.alignSelf = o("WebBloksUtils").toHyphen(String(L));
                  break e;
                }
                case "positionType": {
                  i.position = String(L);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((i[E] = o("WebBloksUtils").toPx(String(L))),
                    (i.position = "absolute"));
                  break e;
                }
                case "aspectRatio":
                  break e;
                case "zIndex": {
                  i.zIndex = Number(L);
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
                  i[E] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(L)),
                  );
                  break e;
                }
                case "margin":
                case "marginHorizontal":
                case "marginVertical":
                  break e;
                default:
                  i[E] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(L)),
                  );
              }
            }
          }
        }
        (o("WebBloksUtils").isStyle(e._style, "ig.style.SearchStyle") &&
          (i.width = "100%"),
          (t[2] = n),
          (t[3] = e._style),
          (t[4] = e.alpha),
          (t[5] = a),
          (t[6] = i));
      } else i = t[6];
      return i;
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
