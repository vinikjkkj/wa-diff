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
          for (var s of Object.entries(l)) {
            var u = s[0],
              d = s[1];
            if (!c(u)) {
              var m = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(u),
                n,
              );
              e: switch (m) {
                case "grow": {
                  i.flexGrow = String(d);
                  break e;
                }
                case "shrink": {
                  i.flexShrink = String(d);
                  break e;
                }
                case "alignSelf": {
                  i.alignSelf = o("WebBloksUtils").toHyphen(String(d));
                  break e;
                }
                case "flexBasis": {
                  i.flexBasis = o("WebBloksUtils").toPx(String(d));
                  break e;
                }
                case "justifyContent": {
                  i.justifyContent = o("WebBloksUtils").toHyphen(String(d));
                  break e;
                }
                case "position_type":
                case "positionType": {
                  i.position = String(d);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((i[m] = o("WebBloksUtils").toPx(String(d))),
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
                  i[m] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(d)),
                  );
                  break e;
                }
                case "transform": {
                  i[m] = String(d);
                  break e;
                }
                default:
                  i[m] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(d)),
                  );
              }
            }
          }
        }
        var p = o("WebBloksUtils").isStyle(e._style, "collection");
        if (p) {
          var _ = o("WebBloksUtils").nullthrows(e._style).getValues();
          for (var f of Object.entries(_)) {
            var g = f[0],
              h = f[1];
            if (!c(g)) {
              var y = o("WebBloksUtils").toCamel(g);
              e: switch (y) {
                case "isSticky": {
                  h === !0 && (i.position = "sticky");
                  break e;
                }
                case "onAppear":
                case "onDisappear":
                  break e;
                case "height": {
                  i.height = o("WebBloksUtils").toPx(String(h));
                  break e;
                }
                case "width": {
                  i.width = o("WebBloksUtils").toPx(String(h));
                  break e;
                }
                case "ntDebugMetadataV2":
                  break e;
                default:
                  i[y] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(h)),
                  );
              }
            }
          }
        }
        var C = o("WebBloksUtils").isStyle(e._style, "bk.style.Base");
        if (C) {
          var b = o("WebBloksUtils").nullthrows(e._style).getValues();
          for (var v of Object.entries(b)) {
            var S = v[0],
              R = v[1];
            if (!c(S)) {
              var L = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                o("WebBloksUtils").toCamel(S),
                n,
              );
              e: switch (L) {
                case "flexGrow": {
                  i.flexGrow = String(R);
                  break e;
                }
                case "flexShrink": {
                  i.flexShrink = String(R);
                  break e;
                }
                case "flexBasis": {
                  i.flexBasis = o("WebBloksUtils").toPx(String(R));
                  break e;
                }
                case "alignSelf": {
                  i.alignSelf = o("WebBloksUtils").toHyphen(String(R));
                  break e;
                }
                case "positionType": {
                  i.position = String(R);
                  break e;
                }
                case "bottom":
                case "left":
                case "right":
                case "top": {
                  ((i[L] = o("WebBloksUtils").toPx(String(R))),
                    (i.position = "absolute"));
                  break e;
                }
                case "aspectRatio":
                  break e;
                case "zIndex": {
                  i.zIndex = Number(R);
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
                  i[L] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(R)),
                  );
                  break e;
                }
                default:
                  i[L] = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(R)),
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
    function c(e) {
      return e[0] === "$" || e === "id" || e === "on_bind";
    }
    l.default = u;
  },
  98,
);
