__d(
  "WebBloksDrawable",
  ["WebBloksTheme", "WebBloksUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState,
      m = "\u3406",
      p = "\u3409",
      _ = "\u340A",
      f = "\u3414",
      g = "\u341C",
      h = "#",
      y = "#",
      C = "#",
      b = "$",
      v = "&",
      S = "(",
      R = "#",
      L = "$",
      E = "&",
      k = "(",
      I = "#",
      T = "#",
      D = "$";
    function x(e) {
      return [1, void 0, !0].includes(e);
    }
    function $(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a;
      r[0] !== n
        ? ((a = n === void 0 ? {} : n), (r[0] = n), (r[1] = a))
        : (a = r[1]);
      var i = a,
        l = P(e),
        s = N(e, t, i),
        u;
      return (
        r[2] !== s || r[3] !== l
          ? ((u = babelHelpers.extends({}, l, s)),
            (r[2] = s),
            (r[3] = l),
            (r[4] = u))
          : (u = r[4]),
        u
      );
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(9),
        n = o("WebBloksTheme").useTheme(),
        r;
      t[0] !== n ? ((r = n.getTheme()), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      e: {
        if (!e) {
          var l;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = {}), (t[2] = l))
            : (l = t[2]),
            (i = l));
          break e;
        }
        var s;
        t[3] !== e || t[4] !== a
          ? ((s = w(a, e)), (t[3] = e), (t[4] = a), (t[5] = s))
          : (s = t[5]);
        var u = s;
        if (u == null) {
          var c;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = {}), (t[6] = c))
            : (c = t[6]),
            (i = c));
          break e;
        }
        var d;
        (t[7] !== u
          ? ((d = { background: u }), (t[7] = u), (t[8] = d))
          : (d = t[8]),
          (i = d));
      }
      return i;
    }
    function N(e, t, n) {
      var r = o("react-compiler-runtime").c(19),
        a;
      r[0] !== n
        ? ((a = n === void 0 ? {} : n), (r[0] = n), (r[1] = a))
        : (a = r[1]);
      var i = a,
        l = o("WebBloksTheme").useTheme(),
        s;
      r[2] !== l ? ((s = l.getTheme()), (r[2] = l), (r[3] = s)) : (s = r[3]);
      var c = s,
        m = d(x(i.enabled) ? "default" : "disabled"),
        p = m[0],
        _ = m[1],
        g,
        h;
      (r[4] !== i.enabled
        ? ((g = function () {
            _(x(i.enabled) ? "default" : "disabled");
          }),
          (h = [i.enabled]),
          (r[4] = i.enabled),
          (r[5] = g),
          (r[6] = h))
        : ((g = r[5]), (h = r[6])),
        u(g, h));
      var y, C;
      (r[7] !== e || r[8] !== i.enabled || r[9] !== t
        ? ((y = function () {
            var n = t.current;
            if (n != null) {
              var r = function () {
                _("pressed");
                function e() {
                  (_("default"),
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("touchend", e));
                }
                (document.addEventListener("mouseup", e),
                  document.addEventListener("touchend", e));
              };
              return (
                x(i.enabled) &&
                  ((e == null ? void 0 : e.styleId) === f ||
                    (e == null ? void 0 : e.styleId) ===
                      "bk.components.StateDrawable") &&
                  A(o("WebBloksUtils").cast(e), "pressed") &&
                  (n.addEventListener("mousedown", r),
                  n.addEventListener("touchstart", r)),
                function () {
                  (n.removeEventListener("mousedown", r),
                    n.removeEventListener("touchstart", r));
                }
              );
            }
          }),
          (C = [e, i.enabled, t]),
          (r[7] = e),
          (r[8] = i.enabled),
          (r[9] = t),
          (r[10] = y),
          (r[11] = C))
        : ((y = r[10]), (C = r[11])),
        u(y, C));
      var b;
      e: {
        if (
          (e == null ? void 0 : e.styleId) === f ||
          (e == null ? void 0 : e.styleId) === "bk.components.StateDrawable"
        ) {
          var v;
          r[12] !== e || r[13] !== p || r[14] !== c
            ? ((v = F(c, o("WebBloksUtils").cast(e), p)),
              (r[12] = e),
              (r[13] = p),
              (r[14] = c),
              (r[15] = v))
            : (v = r[15]);
          var S = v,
            R = S != null ? S : void 0,
            L;
          (r[16] !== R
            ? ((L = { background: R }), (r[16] = R), (r[17] = L))
            : (L = r[17]),
            (b = L));
          break e;
        }
        var E;
        (r[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = {}), (r[18] = E))
          : (E = r[18]),
          (b = E));
      }
      return b;
    }
    var M = {
      top_to_bottom: "180deg",
      left_to_right: "90deg",
      bottom_left_to_top_right: "45deg",
      top_left_to_bottom_right: "135deg",
    };
    function w(e, t) {
      switch (t.styleId) {
        case m:
        case "bk.components.ColorDrawable": {
          var n = o("WebBloksUtils").cast(t).get(h);
          if (n == null) break;
          return o("WebBloksUtils").convertRGBArrToString(
            o("WebBloksUtils").convertRGBOrHexStringToArr(n),
          );
        }
        case g:
        case "bk.components.ThemedColorDrawable": {
          var r = o("WebBloksUtils").cast(t).get(y);
          if (r == null) break;
          return o("WebBloksUtils").getRGBColorWithTheme(r, e);
        }
        case p:
        case "bk.components.GradientDrawable": {
          var a = o("WebBloksUtils").cast(t),
            i = a.get(S),
            l = a.get(C),
            s = a.get(v),
            u = a.get(b),
            c = "";
          return (
            i != null && (c += M[i] + ","),
            l != null &&
              (c +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(l),
                ) + ","),
            s != null &&
              (c +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(s),
                ) + ","),
            u != null &&
              (c += o("WebBloksUtils").convertRGBArrToString(
                o("WebBloksUtils").convertRGBOrHexStringToArr(u),
              )),
            "linear-gradient(" + c + ")"
          );
        }
        case _:
        case "bk.components.GradientThemedColorDrawable": {
          var d = o("WebBloksUtils").cast(t),
            f = d.get(k),
            I = d.get(R),
            T = d.get(E),
            D = d.get(L),
            x = "";
          return (
            f != null && (x += M[f] + ","),
            I != null &&
              (x += o("WebBloksUtils").getRGBColorWithTheme(I, e) + ","),
            T != null &&
              (x += o("WebBloksUtils").getRGBColorWithTheme(T, e) + ","),
            D != null && (x += o("WebBloksUtils").getRGBColorWithTheme(D, e)),
            "linear-gradient(" + x + ")"
          );
        }
        default:
          return null;
      }
    }
    function A(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.get(I)) != null ? n : [];
      return r.some(function (e) {
        return e.get(D) === t;
      });
    }
    function F(e, t, n) {
      var r = t.get(I);
      for (var o of r) if (o.get(D) === n) return w(e, o.get(T));
      return null;
    }
    l.default = $;
  },
  98,
);
