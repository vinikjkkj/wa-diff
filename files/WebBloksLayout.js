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
      var t = o("react-compiler-runtime").c(11),
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        r = n.isRtl,
        a;
      t[0] !== e
        ? ((a = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY)),
          (t[0] = e),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== e
        ? ((l = e.get(o("WebBloksConstants").ALPHA_ATTRIBUTE_KEY)),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        u;
      t[4] !== i
        ? ((u = o("WebBloksUtils").isStyle(i, c)), (t[4] = i), (t[5] = u))
        : (u = t[5]);
      var Fe = u,
        qe;
      if (t[6] !== s || t[7] !== r || t[8] !== i || t[9] !== Fe) {
        if (((qe = {}), s != null && (qe.opacity = s), Fe)) {
          var Ue = o("WebBloksUtils").nullthrows(i);
          Oe(Ue, qe);
          for (var Ve of Ue.entries()) {
            var He = Ve[0],
              Ge = Ve[1];
            if (!Be(He))
              e: switch (He) {
                case y: {
                  qe.flexGrow = String(Ge);
                  break e;
                }
                case B: {
                  qe.flexShrink = String(Ge);
                  break e;
                }
                case _: {
                  qe.alignSelf = o("WebBloksUtils").toHyphen(String(Ge));
                  break e;
                }
                case V: {
                  qe.flexBasis = o("WebBloksUtils").toPx(String(Ge));
                  break e;
                }
                case o("WebBloksConstants")
                  .YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY: {
                  qe.justifyContent = o("WebBloksUtils").toHyphen(String(Ge));
                  break e;
                }
                case F: {
                  qe.position = String(Ge);
                  break e;
                }
                case g: {
                  ((qe.bottom = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case b: {
                  ((qe.left = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case O: {
                  ((qe.right = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case q: {
                  ((qe.top = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case W: {
                  (r
                    ? (qe.right = o("WebBloksUtils").toPx(String(Ge)))
                    : (qe.left = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case h: {
                  (r
                    ? (qe.left = o("WebBloksUtils").toPx(String(Ge)))
                    : (qe.right = o("WebBloksUtils").toPx(String(Ge))),
                    (qe.position = "absolute"));
                  break e;
                }
                case f:
                  break e;
                case U: {
                  qe.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case C: {
                  qe.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case D: {
                  qe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case I: {
                  qe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case x: {
                  qe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case T: {
                  qe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case k: {
                  qe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case L: {
                  qe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case v: {
                  qe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case R: {
                  qe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case E:
                case S:
                case w:
                case P:
                  break e;
                case A: {
                  qe.paddingTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case M: {
                  qe.paddingRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case $: {
                  qe.paddingBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case N: {
                  qe.paddingLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Ge)),
                  );
                  break e;
                }
                case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                  break e;
                case o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY: {
                  qe.transform = String(Ge);
                  break e;
                }
                default:
              }
          }
          var ze = r ? Ue.get(P) : Ue.get(w);
          if (ze != null) {
            var je = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(ze)),
            );
            je != null && (qe.paddingLeft = je);
          }
          var Ke = r ? Ue.get(w) : Ue.get(P);
          if (Ke != null) {
            var Qe = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(Ke)),
            );
            Qe != null && (qe.paddingRight = Qe);
          }
          var Xe = r ? Ue.get(S) : Ue.get(E);
          if (Xe != null) {
            var Ye = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(Xe)),
            );
            Ye != null && (qe.marginLeft = Ye);
          }
          var Je = r ? Ue.get(E) : Ue.get(S);
          if (Je != null) {
            var Ze = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(Je)),
            );
            Ze != null && (qe.marginRight = Ze);
          }
        }
        var et = o("WebBloksUtils").isStyle(i, d);
        if (et) {
          var tt = o("WebBloksUtils").nullthrows(i);
          for (var nt of tt.entries()) {
            var rt = nt[0],
              ot = nt[1];
            if (!Be(rt))
              e: switch (rt) {
                case G: {
                  ot === !0 && (qe.position = "sticky");
                  break e;
                }
                case z:
                case j:
                  break e;
                case le:
                  break e;
                case H: {
                  qe.height = o("WebBloksUtils").toPx(String(ot));
                  break e;
                }
                case K: {
                  qe.width = o("WebBloksUtils").toPx(String(ot));
                  break e;
                }
                case Q: {
                  qe.alignSelf = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case X: {
                  We(qe, "aspectRatio", ot);
                  break e;
                }
                case Y: {
                  qe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case J: {
                  qe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case Z: {
                  qe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case ee: {
                  qe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case ie: {
                  qe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case oe: {
                  qe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case te: {
                  qe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case re: {
                  qe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ot)),
                  );
                  break e;
                }
                case ae: {
                  r
                    ? (qe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(ot)),
                      ))
                    : (qe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(ot)),
                      ));
                  break e;
                }
                case ne: {
                  r
                    ? (qe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(ot)),
                      ))
                    : (qe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(ot)),
                      ));
                  break e;
                }
                default:
              }
          }
        }
        var at = o("WebBloksUtils").isStyle(i, m);
        if (at) {
          var it = o("WebBloksUtils").nullthrows(i);
          Oe(it, qe);
          for (var lt of it.entries()) {
            var st = lt[0],
              ut = lt[1];
            if (!Be(st))
              e: switch (st) {
                case $e: {
                  qe.flexGrow = String(ut);
                  break e;
                }
                case Pe: {
                  qe.flexShrink = String(ut);
                  break e;
                }
                case Ae: {
                  qe.flexBasis = o("WebBloksUtils").toPx(String(ut));
                  break e;
                }
                case De: {
                  qe.alignSelf = o("WebBloksUtils").toHyphen(String(ut));
                  break e;
                }
                case Re: {
                  qe.position = String(ut);
                  break e;
                }
                case ue: {
                  ((qe.bottom = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case me: {
                  ((qe.left = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case Le: {
                  ((qe.right = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case ke: {
                  ((qe.top = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case Ee: {
                  (r
                    ? (qe.right = o("WebBloksUtils").toPx(String(ut)))
                    : (qe.left = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case ce: {
                  (r
                    ? (qe.left = o("WebBloksUtils").toPx(String(ut)))
                    : (qe.right = o("WebBloksUtils").toPx(String(ut))),
                    (qe.position = "absolute"));
                  break e;
                }
                case se:
                  break e;
                case Te: {
                  qe.zIndex = Number(ut);
                  break e;
                }
                case xe:
                case Me:
                case Ne:
                case we:
                  break e;
                case Ie: {
                  qe.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case de: {
                  qe.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case ve: {
                  qe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case Ce: {
                  qe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case Se: {
                  qe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case be: {
                  qe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case ye: {
                  qe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case ge: {
                  qe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case pe: {
                  qe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case fe: {
                  qe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(ut)),
                  );
                  break e;
                }
                case he:
                case _e:
                  break e;
                case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                  break e;
                default:
              }
          }
          var ct = r ? it.get(_e) : it.get(he);
          if (ct != null) {
            var dt = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(ct)),
            );
            dt != null && (qe.marginLeft = dt);
          }
          var mt = r ? it.get(he) : it.get(_e);
          if (mt != null) {
            var pt = o("WebBloksUtils").toPx(
              o("WebBloksUtils").toHyphen(String(mt)),
            );
            pt != null && (qe.marginRight = pt);
          }
        }
        (o("WebBloksUtils").isStyle(i, p) && (qe.width = "100%"),
          (t[6] = s),
          (t[7] = r),
          (t[8] = i),
          (t[9] = Fe),
          (t[10] = qe));
      } else qe = t[10];
      return qe;
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
