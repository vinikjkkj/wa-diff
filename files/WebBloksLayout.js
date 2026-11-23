__d(
  "WebBloksLayout",
  [
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksUtils",
    "react",
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
      var t = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        n = t.isRtl,
        r = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY),
        a = e.get(o("WebBloksConstants").ALPHA_ATTRIBUTE_KEY);
      return s(
        function () {
          var e = o("WebBloksUtils").isStyle(r, c),
            t = {};
          if ((a != null && (t.opacity = a), e)) {
            var i = o("WebBloksUtils").nullthrows(r);
            Oe(i, t);
            for (var l of i.entries()) {
              var s = l[0],
                u = l[1];
              if (!Be(s))
                switch (s) {
                  case y:
                    t.flexGrow = String(u);
                    break;
                  case B:
                    t.flexShrink = String(u);
                    break;
                  case _:
                    t.alignSelf = o("WebBloksUtils").toHyphen(String(u));
                    break;
                  case V:
                    t.flexBasis = o("WebBloksUtils").toPx(String(u));
                    break;
                  case o("WebBloksConstants")
                    .YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY:
                    t.justifyContent = o("WebBloksUtils").toHyphen(String(u));
                    break;
                  case F:
                    t.position = String(u);
                    break;
                  case g:
                    ((t.bottom = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case b:
                    ((t.left = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case O:
                    ((t.right = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case q:
                    ((t.top = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case W:
                    (n
                      ? (t.right = o("WebBloksUtils").toPx(String(u)))
                      : (t.left = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case h:
                    (n
                      ? (t.left = o("WebBloksUtils").toPx(String(u)))
                      : (t.right = o("WebBloksUtils").toPx(String(u))),
                      (t.position = "absolute"));
                    break;
                  case f:
                    break;
                  case U:
                    t.width = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case C:
                    t.height = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case D:
                    t.minHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case I:
                    t.maxHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case x:
                    t.minWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case T:
                    t.maxWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case k:
                    t.marginTop = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case L:
                    t.marginRight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case v:
                    t.marginBottom = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case R:
                    t.marginLeft = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case E:
                  case S:
                  case w:
                  case P:
                    break;
                  case A:
                    t.paddingTop = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case M:
                    t.paddingRight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case $:
                    t.paddingBottom = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case N:
                    t.paddingLeft = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(u)),
                    );
                    break;
                  case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                  case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                  case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                    break;
                  case o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY:
                    t.transform = String(u);
                    break;
                  default:
                    break;
                }
            }
            var Fe = n ? i.get(P) : i.get(w);
            if (Fe != null) {
              var qe = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(Fe)),
              );
              qe != null && (t.paddingLeft = qe);
            }
            var Ue = n ? i.get(w) : i.get(P);
            if (Ue != null) {
              var Ve = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(Ue)),
              );
              Ve != null && (t.paddingRight = Ve);
            }
            var He = n ? i.get(S) : i.get(E);
            if (He != null) {
              var Ge = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(He)),
              );
              Ge != null && (t.marginLeft = Ge);
            }
            var ze = n ? i.get(E) : i.get(S);
            if (ze != null) {
              var je = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(ze)),
              );
              je != null && (t.marginRight = je);
            }
          }
          var Ke = o("WebBloksUtils").isStyle(r, d);
          if (Ke) {
            var Qe = o("WebBloksUtils").nullthrows(r);
            for (var Xe of Qe.entries()) {
              var Ye = Xe[0],
                Je = Xe[1];
              if (!Be(Ye))
                switch (Ye) {
                  case G:
                    Je === !0 && (t.position = "sticky");
                    break;
                  case z:
                  case j:
                    break;
                  case le:
                    break;
                  case H:
                    t.height = o("WebBloksUtils").toPx(String(Je));
                    break;
                  case K:
                    t.width = o("WebBloksUtils").toPx(String(Je));
                    break;
                  case Q:
                    t.alignSelf = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case X:
                    We(t, "aspectRatio", Je);
                    break;
                  case Y:
                    t.maxHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case J:
                    t.maxWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case Z:
                    t.minHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case ee:
                    t.minWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case ie:
                    t.marginTop = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case oe:
                    t.marginRight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case te:
                    t.marginBottom = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case re:
                    t.marginLeft = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(Je)),
                    );
                    break;
                  case ae:
                    n
                      ? (t.marginRight = o("WebBloksUtils").toPx(
                          o("WebBloksUtils").toHyphen(String(Je)),
                        ))
                      : (t.marginLeft = o("WebBloksUtils").toPx(
                          o("WebBloksUtils").toHyphen(String(Je)),
                        ));
                    break;
                  case ne:
                    n
                      ? (t.marginLeft = o("WebBloksUtils").toPx(
                          o("WebBloksUtils").toHyphen(String(Je)),
                        ))
                      : (t.marginRight = o("WebBloksUtils").toPx(
                          o("WebBloksUtils").toHyphen(String(Je)),
                        ));
                    break;
                  default:
                    break;
                }
            }
          }
          var Ze = o("WebBloksUtils").isStyle(r, m);
          if (Ze) {
            var et = o("WebBloksUtils").nullthrows(r);
            Oe(et, t);
            for (var tt of et.entries()) {
              var nt = tt[0],
                rt = tt[1];
              if (!Be(nt))
                switch (nt) {
                  case $e:
                    t.flexGrow = String(rt);
                    break;
                  case Pe:
                    t.flexShrink = String(rt);
                    break;
                  case Ae:
                    t.flexBasis = o("WebBloksUtils").toPx(String(rt));
                    break;
                  case De:
                    t.alignSelf = o("WebBloksUtils").toHyphen(String(rt));
                    break;
                  case Re:
                    t.position = String(rt);
                    break;
                  case ue:
                    ((t.bottom = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case me:
                    ((t.left = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case Le:
                    ((t.right = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case ke:
                    ((t.top = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case Ee:
                    (n
                      ? (t.right = o("WebBloksUtils").toPx(String(rt)))
                      : (t.left = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case ce:
                    (n
                      ? (t.left = o("WebBloksUtils").toPx(String(rt)))
                      : (t.right = o("WebBloksUtils").toPx(String(rt))),
                      (t.position = "absolute"));
                    break;
                  case se:
                    break;
                  case Te:
                    t.zIndex = Number(rt);
                    break;
                  case xe:
                  case Me:
                  case Ne:
                  case we:
                    break;
                  case Ie:
                    t.width = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case de:
                    t.height = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case ve:
                    t.minHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case Ce:
                    t.maxHeight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case Se:
                    t.minWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case be:
                    t.maxWidth = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case ye:
                    t.marginTop = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case ge:
                    t.marginRight = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case pe:
                    t.marginBottom = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case fe:
                    t.marginLeft = o("WebBloksUtils").toPx(
                      o("WebBloksUtils").toHyphen(String(rt)),
                    );
                    break;
                  case he:
                  case _e:
                    break;
                  case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                  case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                  case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                    break;
                  default:
                    break;
                }
            }
            var ot = n ? et.get(_e) : et.get(he);
            if (ot != null) {
              var at = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(ot)),
              );
              at != null && (t.marginLeft = at);
            }
            var it = n ? et.get(he) : et.get(_e);
            if (it != null) {
              var lt = o("WebBloksUtils").toPx(
                o("WebBloksUtils").toHyphen(String(it)),
              );
              lt != null && (t.marginRight = lt);
            }
          }
          return (o("WebBloksUtils").isStyle(r, p) && (t.width = "100%"), t);
        },
        [a, n, r],
      );
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
