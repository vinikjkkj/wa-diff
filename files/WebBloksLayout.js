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
        n = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        r;
      t[0] !== e
        ? ((r = e.get(o("WebBloksConstants").STYLE_ATTRIBUTE_KEY)),
          (t[0] = e),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] !== e
        ? ((i = e.get(o("WebBloksConstants").ALPHA_ATTRIBUTE_KEY)),
          (t[2] = e),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        s;
      t[4] !== a
        ? ((s = o("WebBloksUtils").isStyle(a, c)), (t[4] = a), (t[5] = s))
        : (s = t[5]);
      var u = s,
        Fe;
      if (t[6] !== l || t[7] !== n || t[8] !== a || t[9] !== u) {
        if (((Fe = {}), l != null && (Fe.opacity = l), u)) {
          var qe = o("WebBloksUtils").nullthrows(a);
          Oe(qe, Fe);
          for (var Ue of qe.entries()) {
            var Ve = Ue[0],
              He = Ue[1];
            if (!Be(Ve))
              e: switch (Ve) {
                case y: {
                  Fe.flexGrow = String(He);
                  break e;
                }
                case B: {
                  Fe.flexShrink = String(He);
                  break e;
                }
                case _: {
                  Fe.alignSelf = o("WebBloksUtils").toHyphen(String(He));
                  break e;
                }
                case V: {
                  Fe.flexBasis = o("WebBloksUtils").toPx(String(He));
                  break e;
                }
                case o("WebBloksConstants")
                  .YOGA_JUSTIFY_CONTENT_ATTRIBUTE_KEY: {
                  Fe.justifyContent = o("WebBloksUtils").toHyphen(String(He));
                  break e;
                }
                case F: {
                  Fe.position = String(He);
                  break e;
                }
                case g: {
                  ((Fe.bottom = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case b: {
                  ((Fe.left = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case O: {
                  ((Fe.right = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case q: {
                  ((Fe.top = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case W: {
                  (n
                    ? (Fe.right = o("WebBloksUtils").toPx(String(He)))
                    : (Fe.left = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case h: {
                  (n
                    ? (Fe.left = o("WebBloksUtils").toPx(String(He)))
                    : (Fe.right = o("WebBloksUtils").toPx(String(He))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case f:
                  break e;
                case U: {
                  Fe.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case C: {
                  Fe.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case D: {
                  Fe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case I: {
                  Fe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case x: {
                  Fe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case T: {
                  Fe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case k: {
                  Fe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case L: {
                  Fe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case v: {
                  Fe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case R: {
                  Fe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case E: {
                  n
                    ? (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case S: {
                  n
                    ? (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case A: {
                  Fe.paddingTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case M: {
                  Fe.paddingRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case $: {
                  Fe.paddingBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case N: {
                  Fe.paddingLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case w: {
                  n
                    ? (Fe.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (Fe.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case P: {
                  n
                    ? (Fe.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (Fe.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case o("WebBloksConstants").MARGIN_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_HORIZONTAL_ATTRIBUTE_KEY:
                case o("WebBloksConstants").MARGIN_VERTICAL_ATTRIBUTE_KEY:
                  break e;
                case o("WebBloksConstants").TRANSFORM_ATTRIBUTE_KEY: {
                  Fe.transform = String(He);
                  break e;
                }
                default:
              }
          }
        }
        var Ge = o("WebBloksUtils").isStyle(a, d);
        if (Ge) {
          var ze = o("WebBloksUtils").nullthrows(a);
          for (var je of ze.entries()) {
            var Ke = je[0],
              Qe = je[1];
            if (!Be(Ke))
              e: switch (Ke) {
                case G: {
                  Qe === !0 && (Fe.position = "sticky");
                  break e;
                }
                case z:
                case j:
                  break e;
                case le:
                  break e;
                case H: {
                  Fe.height = o("WebBloksUtils").toPx(String(Qe));
                  break e;
                }
                case K: {
                  Fe.width = o("WebBloksUtils").toPx(String(Qe));
                  break e;
                }
                case Q: {
                  Fe.alignSelf = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case X: {
                  We(Fe, "aspectRatio", Qe);
                  break e;
                }
                case Y: {
                  Fe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case J: {
                  Fe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case Z: {
                  Fe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case ee: {
                  Fe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case ie: {
                  Fe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case oe: {
                  Fe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case te: {
                  Fe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case re: {
                  Fe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Qe)),
                  );
                  break e;
                }
                case ae: {
                  n
                    ? (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Qe)),
                      ))
                    : (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Qe)),
                      ));
                  break e;
                }
                case ne: {
                  n
                    ? (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Qe)),
                      ))
                    : (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Qe)),
                      ));
                  break e;
                }
                default:
              }
          }
        }
        var Xe = o("WebBloksUtils").isStyle(a, m);
        if (Xe) {
          var Ye = o("WebBloksUtils").nullthrows(a);
          Oe(Ye, Fe);
          for (var Je of Ye.entries()) {
            var Ze = Je[0],
              et = Je[1];
            if (!Be(Ze))
              e: switch (Ze) {
                case $e: {
                  Fe.flexGrow = String(et);
                  break e;
                }
                case Pe: {
                  Fe.flexShrink = String(et);
                  break e;
                }
                case Ae: {
                  Fe.flexBasis = o("WebBloksUtils").toPx(String(et));
                  break e;
                }
                case De: {
                  Fe.alignSelf = o("WebBloksUtils").toHyphen(String(et));
                  break e;
                }
                case Re: {
                  Fe.position = String(et);
                  break e;
                }
                case ue: {
                  ((Fe.bottom = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case me: {
                  ((Fe.left = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case Le: {
                  ((Fe.right = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case ke: {
                  ((Fe.top = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case Ee: {
                  (n
                    ? (Fe.right = o("WebBloksUtils").toPx(String(et)))
                    : (Fe.left = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case ce: {
                  (n
                    ? (Fe.left = o("WebBloksUtils").toPx(String(et)))
                    : (Fe.right = o("WebBloksUtils").toPx(String(et))),
                    (Fe.position = "absolute"));
                  break e;
                }
                case se:
                  break e;
                case Te: {
                  Fe.zIndex = Number(et);
                  break e;
                }
                case xe:
                case Me:
                case Ne:
                case we:
                  break e;
                case Ie: {
                  Fe.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case de: {
                  Fe.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case ve: {
                  Fe.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case Ce: {
                  Fe.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case Se: {
                  Fe.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case be: {
                  Fe.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case ye: {
                  Fe.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case ge: {
                  Fe.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case pe: {
                  Fe.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case fe: {
                  Fe.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(et)),
                  );
                  break e;
                }
                case he: {
                  n
                    ? (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(et)),
                      ))
                    : (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(et)),
                      ));
                  break e;
                }
                case _e: {
                  n
                    ? (Fe.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(et)),
                      ))
                    : (Fe.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(et)),
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
        }
        (o("WebBloksUtils").isStyle(a, p) && (Fe.width = "100%"),
          (t[6] = l),
          (t[7] = n),
          (t[8] = a),
          (t[9] = u),
          (t[10] = Fe));
      } else Fe = t[10];
      return Fe;
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
