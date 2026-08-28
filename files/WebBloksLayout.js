__d(
  "WebBloksLayout",
  [
    "WebBloksCSSUtils",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = "\u3438",
      c = "\u3436",
      d = "\u5E89",
      m = "\u346D",
      p = "#",
      _ = "$",
      f = "&",
      g = "(",
      h = ")",
      y = "*",
      C = "+",
      b = ",",
      v = "-",
      S = ".",
      R = "0",
      L = "1",
      E = "2",
      k = "3",
      I = "4",
      T = "5",
      D = "6",
      x = "7",
      $ = "8",
      P = "9",
      N = ":",
      M = ";",
      w = "=",
      A = ">",
      F = "?",
      O = "A",
      B = "B",
      W = "C",
      q = "D",
      U = "R",
      V = "#",
      H = "$",
      G = "&",
      z = "(",
      j = ")",
      K = "*",
      Q = "+",
      X = ",",
      Y = "-",
      J = ".",
      Z = "0",
      ee = "7",
      te = "8",
      ne = "9",
      re = ":",
      oe = ";",
      ae = "=",
      ie = "6",
      le = "#",
      se = "$",
      ue = "(",
      ce = ")",
      de = "*",
      me = "+",
      pe = ",",
      _e = "-",
      fe = ".",
      ge = "0",
      he = "1",
      ye = "2",
      Ce = "3",
      be = "4",
      ve = "5",
      Se = "6",
      Re = "7",
      Le = "8",
      Ee = "9",
      ke = ":",
      Ie = ";",
      Te = "=",
      De = ">",
      xe = "?",
      $e = "A",
      Pe = "C",
      Ne = "D",
      Me = "E",
      we = "F";
    function Ae(e) {
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
        ? ((s =
            o("WebBloksUtils").isStyle(a, u) ||
            o("WebBloksUtils").isStyle(a, "flex")),
          (t[4] = a),
          (t[5] = s))
        : (s = t[5]);
      var Ae = s,
        We;
      if (t[6] !== l || t[7] !== n || t[8] !== a || t[9] !== Ae) {
        if (((We = {}), l != null && (We.opacity = l), Ae)) {
          var qe = o("WebBloksUtils").nullthrows(a);
          Fe(qe, We);
          for (var Ue of qe.canonicalEntries()) {
            var Ve = Ue[0],
              He = Ue[1];
            if (!Oe(Ve))
              e: switch (Ve) {
                case h:
                case "grow": {
                  We.flexGrow = String(He);
                  break e;
                }
                case O:
                case "shrink": {
                  We.flexShrink = String(He);
                  break e;
                }
                case p:
                case "align_self": {
                  We.alignSelf = o("WebBloksUtils").toHyphen(String(He));
                  break e;
                }
                case U:
                case "flex_basis": {
                  We.flexBasis = o("WebBloksUtils").toPx(String(He));
                  break e;
                }
                case "justify_content": {
                  We.justifyContent = o("WebBloksUtils").toHyphen(String(He));
                  break e;
                }
                case A:
                case "position_type":
                case "positionType": {
                  We.position = String(He);
                  break e;
                }
                case f:
                case "bottom": {
                  ((We.bottom = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case C:
                case "left": {
                  ((We.left = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case F:
                case "right": {
                  ((We.right = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case W:
                case "top": {
                  ((We.top = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case B:
                case "start": {
                  (n
                    ? (We.right = o("WebBloksUtils").toPx(String(He)))
                    : (We.left = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case g:
                case "end": {
                  (n
                    ? (We.left = o("WebBloksUtils").toPx(String(He)))
                    : (We.right = o("WebBloksUtils").toPx(String(He))),
                    (We.position = "absolute"));
                  break e;
                }
                case _:
                case "aspect_ratio":
                  break e;
                case "nt_debug_metadata_v2":
                  break e;
                case q:
                case "width": {
                  We.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case y:
                case "height": {
                  We.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case T:
                case "min_height": {
                  We.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case k:
                case "max_height": {
                  We.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case D:
                case "min_width": {
                  We.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case I:
                case "max_width": {
                  We.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case E:
                case "margin_top": {
                  We.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case R:
                case "margin_right": {
                  We.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case b:
                case "margin_bottom": {
                  We.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case S:
                case "margin_left": {
                  We.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case L:
                case "margin_start": {
                  n
                    ? (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case v:
                case "margin_end": {
                  n
                    ? (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case w:
                case "padding_top": {
                  We.paddingTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case N:
                case "padding_right": {
                  We.paddingRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case x:
                case "padding_bottom": {
                  We.paddingBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case P:
                case "padding_left": {
                  We.paddingLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(He)),
                  );
                  break e;
                }
                case M:
                case "padding_start": {
                  n
                    ? (We.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (We.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case $:
                case "padding_end": {
                  n
                    ? (We.paddingLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ))
                    : (We.paddingRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(He)),
                      ));
                  break e;
                }
                case "margin":
                case "margin_horizontal":
                case "margin_vertical":
                  break e;
                case "transform": {
                  We.transform = String(He);
                  break e;
                }
                default: {
                  var Ge = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                    o("WebBloksUtils").toCamel(Ve),
                    n,
                  );
                  Be(We, Ge, He);
                }
              }
          }
        }
        var ze =
          o("WebBloksUtils").isStyle(a, c) ||
          o("WebBloksUtils").isStyle(a, "collection");
        if (ze) {
          var je = o("WebBloksUtils").nullthrows(a);
          for (var Ke of je.canonicalEntries()) {
            var Qe = Ke[0],
              Xe = Ke[1];
            if (!Oe(Qe))
              e: switch (Qe) {
                case H:
                case "is_sticky": {
                  Xe === !0 && (We.position = "sticky");
                  break e;
                }
                case G:
                case "on_appear":
                case z:
                case "on_disappear":
                  break e;
                case ie:
                case "sticky_item_config":
                  break e;
                case V:
                case "height": {
                  We.height = o("WebBloksUtils").toPx(String(Xe));
                  break e;
                }
                case j:
                case "width": {
                  We.width = o("WebBloksUtils").toPx(String(Xe));
                  break e;
                }
                case K:
                case "align_self": {
                  We.alignSelf = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case Q:
                case "aspect_ratio": {
                  Be(We, "aspectRatio", Xe);
                  break e;
                }
                case X:
                case "max_height": {
                  We.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case Y:
                case "max_width": {
                  We.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case J:
                case "min_height": {
                  We.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case Z:
                case "min_width": {
                  We.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case ae:
                case "margin_top": {
                  We.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case re:
                case "margin_right": {
                  We.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case ee:
                case "margin_bottom": {
                  We.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case ne:
                case "margin_left": {
                  We.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(Xe)),
                  );
                  break e;
                }
                case oe:
                case "margin_start": {
                  n
                    ? (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Xe)),
                      ))
                    : (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Xe)),
                      ));
                  break e;
                }
                case te:
                case "margin_end": {
                  n
                    ? (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Xe)),
                      ))
                    : (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(Xe)),
                      ));
                  break e;
                }
                case "nt_debug_metadata_v2":
                  break e;
                default: {
                  var Ye = o("WebBloksUtils").toCamel(Qe);
                  Be(We, Ye, Xe);
                }
              }
          }
        }
        var Je =
          o("WebBloksUtils").isStyle(a, d) ||
          o("WebBloksUtils").isStyle(a, "bk.style.Base");
        if (Je) {
          var Ze = o("WebBloksUtils").nullthrows(a);
          Fe(Ze, We);
          for (var et of Ze.canonicalEntries()) {
            var tt = et[0],
              nt = et[1];
            if (!Oe(tt))
              e: switch (tt) {
                case xe:
                case "flex_grow": {
                  We.flexGrow = String(nt);
                  break e;
                }
                case $e:
                case "flex_shrink": {
                  We.flexShrink = String(nt);
                  break e;
                }
                case we:
                case "flex_basis": {
                  We.flexBasis = o("WebBloksUtils").toPx(String(nt));
                  break e;
                }
                case Te:
                case "align_self": {
                  We.alignSelf = o("WebBloksUtils").toHyphen(String(nt));
                  break e;
                }
                case Se:
                case "position_type": {
                  We.position = String(nt);
                  break e;
                }
                case se:
                case "bottom": {
                  ((We.bottom = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case de:
                case "left": {
                  ((We.left = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case Re:
                case "right": {
                  ((We.right = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case Ee:
                case "top": {
                  ((We.top = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case Le:
                case "start": {
                  (n
                    ? (We.right = o("WebBloksUtils").toPx(String(nt)))
                    : (We.left = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case ue:
                case "end": {
                  (n
                    ? (We.left = o("WebBloksUtils").toPx(String(nt)))
                    : (We.right = o("WebBloksUtils").toPx(String(nt))),
                    (We.position = "absolute"));
                  break e;
                }
                case le:
                case "aspect_ratio":
                  break e;
                case Ie:
                case "z_index": {
                  We.zIndex = Number(nt);
                  break e;
                }
                case De:
                case "collection_sticky_item_config":
                case Ne:
                case "grid_span_count":
                case Pe:
                case "grid_is_full_span":
                case Me:
                case "staggered_grid_cell_aspect_ratio":
                  break e;
                case "nt_debug_metadata_v2":
                  break e;
                case ke:
                case "width": {
                  We.width = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case ce:
                case "height": {
                  We.height = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case be:
                case "min_height": {
                  We.minHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case ye:
                case "max_height": {
                  We.maxHeight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case ve:
                case "min_width": {
                  We.minWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case Ce:
                case "max_width": {
                  We.maxWidth = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case he:
                case "margin_top": {
                  We.marginTop = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case fe:
                case "margin_right": {
                  We.marginRight = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case me:
                case "margin_bottom": {
                  We.marginBottom = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case _e:
                case "margin_left": {
                  We.marginLeft = o("WebBloksUtils").toPx(
                    o("WebBloksUtils").toHyphen(String(nt)),
                  );
                  break e;
                }
                case ge:
                case "margin_start": {
                  n
                    ? (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(nt)),
                      ))
                    : (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(nt)),
                      ));
                  break e;
                }
                case pe:
                case "margin_end": {
                  n
                    ? (We.marginLeft = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(nt)),
                      ))
                    : (We.marginRight = o("WebBloksUtils").toPx(
                        o("WebBloksUtils").toHyphen(String(nt)),
                      ));
                  break e;
                }
                case "margin":
                case "margin_horizontal":
                case "margin_vertical":
                  break e;
                default: {
                  var rt = o("WebBloksCSSUtils").getRtlAwareCssAttr(
                    o("WebBloksUtils").toCamel(tt),
                    n,
                  );
                  Be(We, rt, nt);
                }
              }
          }
        }
        ((o("WebBloksUtils").isStyle(a, m) ||
          o("WebBloksUtils").isStyle(a, "ig.style.SearchStyle")) &&
          (We.width = "100%"),
          (t[6] = l),
          (t[7] = n),
          (t[8] = a),
          (t[9] = Ae),
          (t[10] = We));
      } else We = t[10];
      return We;
    }
    function Fe(e, t) {
      var n = e.getWireValue("margin");
      if (n != null) {
        var r;
        ((t.marginLeft = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(n)))),
          (t.marginRight = r.toPx(r.toHyphen(String(n)))),
          (t.marginTop = r.toPx(r.toHyphen(String(n)))),
          (t.marginBottom = r.toPx(r.toHyphen(String(n)))));
      }
      var a = e.getWireValue("margin_horizontal");
      if (a != null) {
        var r;
        ((t.marginLeft = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(a)))),
          (t.marginRight = r.toPx(r.toHyphen(String(a)))));
      }
      var i = e.getWireValue("margin_vertical");
      if (i != null) {
        var r;
        ((t.marginTop = (r = o("WebBloksUtils")).toPx(r.toHyphen(String(i)))),
          (t.marginBottom = r.toPx(r.toHyphen(String(i)))));
      }
    }
    function Oe(e) {
      return (
        e.startsWith(o("WebBloksConstants").YOGA_NORMALIZED_ATTRIBUTE_PREFIX) ||
        e === o("WebBloksConstants").DESCENDANT_HAS_BIND ||
        e === o("WebBloksConstants").ID_ATTRIBUTE_KEY ||
        e === "id" ||
        e === o("WebBloksConstants").ON_BIND_ATTRIBUTE_KEY ||
        e === "on_bind" ||
        e === o("WebBloksConstants").CHILD_TEMPLATES_ATTRIBUTE_KEY ||
        e === "child_templates"
      );
    }
    function Be(e, t, n) {
      e[t] = o("WebBloksUtils").toPx(o("WebBloksUtils").toHyphen(String(n)));
    }
    l.default = Ae;
  },
  98,
);
