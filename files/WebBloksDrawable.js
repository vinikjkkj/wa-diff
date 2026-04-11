__d(
  "WebBloksDrawable",
  ["WebBloksTheme", "WebBloksUtils", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState;
    function m(e) {
      return [1, void 0, !0].includes(e);
    }
    function p(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a;
      r[0] !== n
        ? ((a = n === void 0 ? {} : n), (r[0] = n), (r[1] = a))
        : (a = r[1]);
      var i = a,
        l = _(e),
        s = f(e, t, i),
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
    function _(e) {
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
          ? ((s = h(a, e)), (t[3] = e), (t[4] = a), (t[5] = s))
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
    function f(e, t, n) {
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
        p = d(m(i.enabled) ? "default" : "disabled"),
        _ = p[0],
        f = p[1],
        g,
        h;
      (r[4] !== i.enabled
        ? ((g = function () {
            f(m(i.enabled) ? "default" : "disabled");
          }),
          (h = [i.enabled]),
          (r[4] = i.enabled),
          (r[5] = g),
          (r[6] = h))
        : ((g = r[5]), (h = r[6])),
        u(g, h));
      var b, v;
      (r[7] !== e || r[8] !== i.enabled || r[9] !== t
        ? ((b = function () {
            var n = t.current;
            if (n != null) {
              var r = function () {
                f("pressed");
                function e() {
                  (f("default"),
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("touchend", e));
                }
                (document.addEventListener("mouseup", e),
                  document.addEventListener("touchend", e));
              };
              return (
                m(i.enabled) &&
                  (e == null ? void 0 : e.styleId) ===
                    "bk.components.StateDrawable" &&
                  y(e, "pressed") &&
                  (n.addEventListener("mousedown", r),
                  n.addEventListener("touchstart", r)),
                function () {
                  (n.removeEventListener("mousedown", r),
                    n.removeEventListener("touchstart", r));
                }
              );
            }
          }),
          (v = [e, i.enabled, t]),
          (r[7] = e),
          (r[8] = i.enabled),
          (r[9] = t),
          (r[10] = b),
          (r[11] = v))
        : ((b = r[10]), (v = r[11])),
        u(b, v));
      var S;
      e: {
        if (
          (e == null ? void 0 : e.styleId) === "bk.components.StateDrawable"
        ) {
          var R;
          r[12] !== e || r[13] !== _ || r[14] !== c
            ? ((R = C(c, e, _)),
              (r[12] = e),
              (r[13] = _),
              (r[14] = c),
              (r[15] = R))
            : (R = r[15]);
          var L = R,
            E = L != null ? L : void 0,
            k;
          (r[16] !== E
            ? ((k = { background: E }), (r[16] = E), (r[17] = k))
            : (k = r[17]),
            (S = k));
          break e;
        }
        var I;
        (r[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = {}), (r[18] = I))
          : (I = r[18]),
          (S = I));
      }
      return S;
    }
    var g = {
      top_to_bottom: "180deg",
      left_to_right: "90deg",
      bottom_left_to_top_right: "45deg",
      top_left_to_bottom_right: "135deg",
    };
    function h(e, t) {
      switch (t.styleId) {
        case "bk.components.ColorDrawable": {
          var n = t.get("color");
          if (n == null) break;
          return o("WebBloksUtils").convertRGBArrToString(
            o("WebBloksUtils").convertRGBOrHexStringToArr(n),
          );
        }
        case "bk.components.ThemedColorDrawable": {
          var r = t.get("color");
          if (r == null) break;
          return o("WebBloksUtils").getRGBColorWithTheme(r, e);
        }
        case "bk.components.GradientDrawable": {
          var a = t.get("orientation"),
            i = t.get("begin_color"),
            l = t.get("middle_color"),
            s = t.get("end_color"),
            u = "";
          return (
            a != null && (u += g[a] + ","),
            i != null &&
              (u +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(i),
                ) + ","),
            l != null &&
              (u +=
                o("WebBloksUtils").convertRGBArrToString(
                  o("WebBloksUtils").convertRGBOrHexStringToArr(l),
                ) + ","),
            s != null &&
              (u += o("WebBloksUtils").convertRGBArrToString(
                o("WebBloksUtils").convertRGBOrHexStringToArr(s),
              )),
            "linear-gradient(" + u + ")"
          );
        }
        case "bk.components.GradientThemedColorDrawable": {
          var c = t.get("orientation"),
            d = t.get("begin_color"),
            m = t.get("middle_color"),
            p = t.get("end_color"),
            _ = "";
          return (
            c != null && (_ += g[c] + ","),
            d != null &&
              (_ += o("WebBloksUtils").getRGBColorWithTheme(d, e) + ","),
            m != null &&
              (_ += o("WebBloksUtils").getRGBColorWithTheme(m, e) + ","),
            p != null && (_ += o("WebBloksUtils").getRGBColorWithTheme(p, e)),
            "linear-gradient(" + _ + ")"
          );
        }
        default:
          return null;
      }
    }
    function y(e, t) {
      var n,
        r = (n = e == null ? void 0 : e.get("state_items")) != null ? n : [];
      return r.some(function (e) {
        return e.get("state") === t;
      });
    }
    function C(e, t, n) {
      var r = t.get("state_items");
      for (var o of r) if (o.get("state") === n) return h(e, o.get("drawable"));
      return null;
    }
    l.default = p;
  },
  98,
);
