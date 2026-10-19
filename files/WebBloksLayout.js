__d(
  "WebBloksLayout",
  [
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = new Set(),
      c = "flex",
      d = "collection",
      m = "bk.style.Base",
      p = "ig.style.SearchStyle",
      _ = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("("),
      y = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      v = o("WebBloksModel").defineWebBloksAttributeKey(","),
      S = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("."),
      L = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      E = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("2"),
      I = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      T = o("WebBloksModel").defineWebBloksAttributeKey("4"),
      D = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      x = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      $ = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      P = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      N = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      M = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      w = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      A = o("WebBloksModel").defineWebBloksAttributeKey("="),
      F = o("WebBloksModel").defineWebBloksAttributeKey(">"),
      O = o("WebBloksModel").defineWebBloksAttributeKey("?"),
      B = o("WebBloksModel").defineWebBloksAttributeKey("A"),
      W = o("WebBloksModel").defineWebBloksAttributeKey("B"),
      q = o("WebBloksModel").defineWebBloksAttributeKey("C"),
      U = o("WebBloksModel").defineWebBloksAttributeKey("D"),
      V = o("WebBloksModel").defineWebBloksAttributeKey("R"),
      H = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      G = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      z = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      j = o("WebBloksModel").defineWebBloksAttributeKey("("),
      K = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      Q = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      X = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      Y = o("WebBloksModel").defineWebBloksAttributeKey(","),
      J = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      Z = o("WebBloksModel").defineWebBloksAttributeKey("."),
      ee = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      te = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      ne = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      re = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      oe = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      ae = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      ie = o("WebBloksModel").defineWebBloksAttributeKey("="),
      le = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      se = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      ue = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      ce = o("WebBloksModel").defineWebBloksAttributeKey("("),
      de = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      me = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      pe = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      _e = o("WebBloksModel").defineWebBloksAttributeKey(","),
      fe = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      ge = o("WebBloksModel").defineWebBloksAttributeKey("."),
      he = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      ye = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      Ce = o("WebBloksModel").defineWebBloksAttributeKey("2"),
      be = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      ve = o("WebBloksModel").defineWebBloksAttributeKey("4"),
      Se = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      Re = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      Le = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      Ee = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      ke = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      Ie = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      Te = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      De = o("WebBloksModel").defineWebBloksAttributeKey("="),
      xe = o("WebBloksModel").defineWebBloksAttributeKey(">"),
      $e = o("WebBloksModel").defineWebBloksAttributeKey("?"),
      Pe = o("WebBloksModel").defineWebBloksAttributeKey("A"),
      Ne = o("WebBloksModel").defineWebBloksAttributeKey("C"),
      Me = o("WebBloksModel").defineWebBloksAttributeKey("D"),
      we = o("WebBloksModel").defineWebBloksAttributeKey("E"),
      Ae = o("WebBloksModel").defineWebBloksAttributeKey("F");
    function Fe(e) {
      var t = o("react-compiler-runtime").c(14),
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        r = n.isRtl,
        a;
      t[0] !== n.gkx
        ? ((a = n.gkx.getGK("wbloks_logical_edge_priority")),
          (t[0] = n.gkx),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== e
        ? ((l = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY)),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        u;
      t[4] !== e
        ? ((u = e.get(o("WebBloksConstants").ALPHA_ATTRIBUTE_KEY)),
          (t[4] = e),
          (t[5] = u))
        : (u = t[5]);
      var Fe = u,
        qe;
      t[6] !== s
        ? ((qe = o("WebBloksUtils").isStyle(s, c)), (t[6] = s), (t[7] = qe))
        : (qe = t[7]);
      var Ue = qe,
        Ve;
      if (
        t[8] !== Fe ||
        t[9] !== r ||
        t[10] !== i ||
        t[11] !== s ||
        t[12] !== Ue
      ) {
        if (((Ve = {}), Fe != null && (Ve.opacity = Fe), Ue)) {
          var He = o("WebBloksUtils").nullthrows(s);
          Oe(He, Ve);
          for (var Ge of He.entries()) {
            var ze = Ge[0],
              je = Ge[1];
            if (!Be(ze))
              e: switch (ze) {
                case y: {
                  Ve.flexGrow = String(je);
                  break e;
                }
                case B: {
                  Ve.flexShrink = String(je);
                  break e;
                }
                case _: {
                  Ve.alignSelf = o("WebBloksUtils").toHyphen(String(je));
                  break e;
                }
                case V: {
                  Ve.flexBasis = o("WebBloksUtils").toPx(String(je));
                  break e;
                }
                case o("WebBloksConstants")
                  .YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY: {
                  Ve.justifyContent = o("WebBloksUtils").toHyphen(String(je));
                  break e;
                }
                case F: {
                  Ve.position = String(je);
                  break e;
                }
                case g: {
                  ((Ve.bottom = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case b: {
                  ((Ve.left = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case O: {
                  ((Ve.right = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case q: {
                  ((Ve.top = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case W: {
                  (r
                    ? (Ve.right = o("WebBloksUtils").toPx(String(je)))
                    : (Ve.left = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case h: {
                  (r
                    ? (Ve.left = o("WebBloksUtils").toPx(String(je)))
                    : (Ve.right = o("WebBloksUtils").toPx(String(je))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case f:
                  break e;
                case U: {
                  Ve.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case C: {
                  Ve.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case D: {
                  Ve.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case I: {
                  Ve.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case x: {
                  Ve.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case T: {
                  Ve.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case k: {
                  Ve.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case L: {
                  Ve.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case v: {
                  Ve.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case R: {
                  Ve.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case E: {
                  if (i) break e;
                  r
                    ? (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ))
                    : (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ));
                  break e;
                }
                case S: {
                  if (i) break e;
                  r
                    ? (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ))
                    : (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ));
                  break e;
                }
                case w: {
                  if (i) break e;
                  r
                    ? (Ve.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ))
                    : (Ve.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ));
                  break e;
                }
                case P: {
                  if (i) break e;
                  r
                    ? (Ve.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ))
                    : (Ve.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(je)),
                      ));
                  break e;
                }
                case A: {
                  Ve.paddingTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case M: {
                  Ve.paddingRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case $: {
                  Ve.paddingBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case N: {
                  Ve.paddingLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(je)),
                  );
                  break e;
                }
                case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                  break e;
                case o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY: {
                  Ve.transform = String(je);
                  break e;
                }
                default:
              }
          }
          if (i) {
            var Ke = r ? He.get(P) : He.get(w);
            if (Ke != null) {
              var Qe = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(Ke)),
              );
              Qe != null && (Ve.paddingLeft = Qe);
            }
            var Xe = r ? He.get(w) : He.get(P);
            if (Xe != null) {
              var Ye = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(Xe)),
              );
              Ye != null && (Ve.paddingRight = Ye);
            }
            var Je = r ? He.get(S) : He.get(E);
            if (Je != null) {
              var Ze = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(Je)),
              );
              Ze != null && (Ve.marginLeft = Ze);
            }
            var et = r ? He.get(E) : He.get(S);
            if (et != null) {
              var tt = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(et)),
              );
              tt != null && (Ve.marginRight = tt);
            }
          }
        }
        var nt = o("WebBloksUtils").isStyle(s, d);
        if (nt) {
          var rt = o("WebBloksUtils").nullthrows(s);
          for (var ot of rt.entries()) {
            var at = ot[0],
              it = ot[1];
            if (!Be(at))
              e: switch (at) {
                case G: {
                  it === !0 && (Ve.position = "sticky");
                  break e;
                }
                case z:
                case j:
                  break e;
                case le:
                  break e;
                case H: {
                  Ve.height = o("WebBloksUtils").toPx(String(it));
                  break e;
                }
                case K: {
                  Ve.width = o("WebBloksUtils").toPx(String(it));
                  break e;
                }
                case Q: {
                  Ve.alignSelf = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case X: {
                  We(Ve, "aspectRatio", it);
                  break e;
                }
                case Y: {
                  Ve.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case J: {
                  Ve.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case Z: {
                  Ve.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case ee: {
                  Ve.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case ie: {
                  Ve.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case oe: {
                  Ve.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case te: {
                  Ve.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case re: {
                  Ve.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(it)),
                  );
                  break e;
                }
                case ae: {
                  r
                    ? (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(it)),
                      ))
                    : (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(it)),
                      ));
                  break e;
                }
                case ne: {
                  r
                    ? (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(it)),
                      ))
                    : (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(it)),
                      ));
                  break e;
                }
                default:
              }
          }
        }
        var lt = o("WebBloksUtils").isStyle(s, m);
        if (lt) {
          var st = o("WebBloksUtils").nullthrows(s);
          Oe(st, Ve);
          for (var ut of st.entries()) {
            var ct = ut[0],
              dt = ut[1];
            if (!Be(ct))
              e: switch (ct) {
                case $e: {
                  Ve.flexGrow = String(dt);
                  break e;
                }
                case Pe: {
                  Ve.flexShrink = String(dt);
                  break e;
                }
                case Ae: {
                  Ve.flexBasis = o("WebBloksUtils").toPx(String(dt));
                  break e;
                }
                case De: {
                  Ve.alignSelf = o("WebBloksUtils").toHyphen(String(dt));
                  break e;
                }
                case Re: {
                  Ve.position = String(dt);
                  break e;
                }
                case ue: {
                  ((Ve.bottom = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case me: {
                  ((Ve.left = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case Le: {
                  ((Ve.right = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case ke: {
                  ((Ve.top = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case Ee: {
                  (r
                    ? (Ve.right = o("WebBloksUtils").toPx(String(dt)))
                    : (Ve.left = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case ce: {
                  (r
                    ? (Ve.left = o("WebBloksUtils").toPx(String(dt)))
                    : (Ve.right = o("WebBloksUtils").toPx(String(dt))),
                    (Ve.position = "absolute"));
                  break e;
                }
                case se:
                  break e;
                case Te: {
                  Ve.zIndex = Number(dt);
                  break e;
                }
                case xe:
                case Me:
                case Ne:
                case we:
                  break e;
                case Ie: {
                  Ve.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case de: {
                  Ve.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case ve: {
                  Ve.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case Ce: {
                  Ve.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case Se: {
                  Ve.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case be: {
                  Ve.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case ye: {
                  Ve.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case ge: {
                  Ve.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case pe: {
                  Ve.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case fe: {
                  Ve.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(dt)),
                  );
                  break e;
                }
                case he: {
                  if (i) break e;
                  r
                    ? (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(dt)),
                      ))
                    : (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(dt)),
                      ));
                  break e;
                }
                case _e: {
                  if (i) break e;
                  r
                    ? (Ve.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(dt)),
                      ))
                    : (Ve.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(dt)),
                      ));
                  break e;
                }
                case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                  break e;
                default:
              }
          }
          if (i) {
            var mt = r ? st.get(_e) : st.get(he);
            if (mt != null) {
              var pt = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(mt)),
              );
              pt != null && (Ve.marginLeft = pt);
            }
            var _t = r ? st.get(he) : st.get(_e);
            if (_t != null) {
              var ft = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(_t)),
              );
              ft != null && (Ve.marginRight = ft);
            }
          }
        }
        (o("WebBloksUtils").isStyle(s, p) && (Ve.width = "100%"),
          (t[8] = Fe),
          (t[9] = r),
          (t[10] = i),
          (t[11] = s),
          (t[12] = Ue),
          (t[13] = Ve));
      } else Ve = t[13];
      return Ve;
    }
    function Oe(e, t) {
      var n = e.getUntyped(o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY);
      if (n != null) {
        var r;
        ((t.marginLeft = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(n)))),
          (t.marginRight = r.toPx(r.toHyphen(String(n)))),
          (t.marginTop = r.toPx(r.toHyphen(String(n)))),
          (t.marginBottom = r.toPx(r.toHyphen(String(n)))));
      }
      var a = e.getUntyped(
        o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY,
      );
      if (a != null) {
        var r;
        ((t.marginLeft = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(a)))),
          (t.marginRight = r.toPx(r.toHyphen(String(a)))));
      }
      var i = e.getUntyped(
        o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY,
      );
      if (i != null) {
        var r;
        ((t.marginTop = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(i)))),
          (t.marginBottom = r.toPx(r.toHyphen(String(i)))));
      }
    }
    function Be(e) {
      return (
        e.startsWith(o("WebBloksConstants").YOGA_NORMALIZED_ATTRIBUTE_PREFIX) ||
        e === o("WebBloksConstants").DESCENDANT_HAS_BIND ||
        e === o("WebBloksConstants").ID_ATTRIBUTE_KEY ||
        e === o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY ||
        e === o("WebBloksConstants").CHILD_TEMPLATES_ATTRIBUTE_KEY
      );
    }
    function We(e, t, n) {
      e[t] = o("WebBloksUtils").toPx(o("WebBloksUtils").toHyphen(String(n)));
    }
    l.default = Fe;
  },
  98,
);
