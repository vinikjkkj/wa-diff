__d(
  "WAWebKeyboardHotKeys.react",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebUim",
    "cr:23442",
    "lodash",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["ref"],
      d = [
        "component",
        "handlers",
        "children",
        "xstyle",
        "onFocus",
        "onBlur",
        "focusType",
        "onKeyDown",
        "tabIndex",
        "className",
      ],
      m,
      p,
      _ = p || (p = o("react")),
      f = p.useRef,
      g = { alt: "Alt", ctrl: "Control", meta: "Meta", shift: "Shift" },
      h = r("lodash").values(g),
      y = "+",
      C = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        capslock: 20,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        ins: 45,
        del: 46,
        meta: 224,
      },
      b = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta",
      },
      v = {
        option: "alt",
        command: "meta",
        return: "enter",
        escape: "esc",
        plus: "+",
      };
    function S(e) {
      var t = o("react-compiler-runtime").c(45),
        a,
        i;
      t[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2]));
      var l, s, u, p, g, h, y, C, v, S, k;
      if (t[3] !== a) {
        var I = a;
        ((h = I.component),
          (p = I.handlers),
          (l = I.children),
          (k = I.xstyle),
          (y = I.onFocus),
          (C = I.onBlur),
          (v = I.focusType),
          (g = I.onKeyDown),
          (S = I.tabIndex),
          (s = I.className),
          (u = babelHelpers.objectWithoutPropertiesLoose(I, d)),
          (t[3] = a),
          (t[4] = l),
          (t[5] = s),
          (t[6] = u),
          (t[7] = p),
          (t[8] = g),
          (t[9] = h),
          (t[10] = y),
          (t[11] = C),
          (t[12] = v),
          (t[13] = S),
          (t[14] = k));
      } else
        ((l = t[4]),
          (s = t[5]),
          (u = t[6]),
          (p = t[7]),
          (g = t[8]),
          (h = t[9]),
          (y = t[10]),
          (C = t[11]),
          (v = t[12]),
          (S = t[13]),
          (k = t[14]));
      var T = h === void 0 ? "div" : h,
        D = y === void 0 ? r("WAWebNoop") : y,
        x = C === void 0 ? r("WAWebNoop") : C,
        $ = v === void 0 ? "all" : v,
        P = f(!1),
        N = n("cr:23442")(),
        M = N[0],
        w = N[1],
        A = f(null),
        F = r("useMergeRefs")(i, A, M),
        O;
      (t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            if (P.current) {
              var e = document.activeElement;
              A.current === e && o("WAWebUim").UIM.Manager.refocusTopUie();
            }
          }),
          (t[15] = O))
        : (O = t[15]),
        r("useWAWebOnUnmount")(O));
      var B;
      t[16] !== p || t[17] !== g
        ? ((B = function (t) {
            (g != null && g(t),
              p &&
                Object.keys(p).forEach(function (e) {
                  var n = p[e];
                  if (n != null) {
                    var r = E(e),
                      o = r[0];
                    b[String(o)] && L(r, t) && n(t);
                  }
                }));
          }),
          (t[16] = p),
          (t[17] = g),
          (t[18] = B))
        : (B = t[18]);
      var W = B,
        q;
      t[19] !== p
        ? ((q = function (t) {
            p &&
              Object.keys(p).forEach(function (e) {
                var n = p[e];
                if (n != null) {
                  var r = E(e),
                    o = r[0];
                  b[String(o)] || (L(r, t) && n(t));
                }
              });
          }),
          (t[19] = p),
          (t[20] = q))
        : (q = t[20]);
      var U = q,
        V;
      t[21] !== $ || t[22] !== w || t[23] !== D
        ? ((V = function (t) {
            ((P.current = !0), !($ === "keyboardOnly" && w !== !0) && D(t));
          }),
          (t[21] = $),
          (t[22] = w),
          (t[23] = D),
          (t[24] = V))
        : (V = t[24]);
      var H = V,
        G;
      t[25] !== x
        ? ((G = function (t) {
            ((P.current = !1), x(t));
          }),
          (t[25] = x),
          (t[26] = G))
        : (G = t[26]);
      var z = G,
        j =
          p != null &&
          Object.keys(p).some(function (e) {
            return p[e] != null;
          }),
        K = -1;
      (u["data-tab"] != null && (K = 0), S != null && (K = S));
      var Q;
      if (t[27] !== s || t[28] !== k) {
        if (((Q = []), s != null && Q.push(s), k != null)) {
          var X;
          (t[30] !== k
            ? ((X = (m || (m = r("stylex")))(k)), (t[30] = k), (t[31] = X))
            : (X = t[31]),
            Q.push(X));
        }
        ((t[27] = s), (t[28] = k), (t[29] = Q));
      } else Q = t[29];
      var Y = K,
        J = j ? U : null,
        Z = j ? W : null,
        ee;
      t[32] !== Q ? ((ee = Q.map(R)), (t[32] = Q), (t[33] = ee)) : (ee = t[33]);
      var te = ee.join(" "),
        ne;
      return (
        t[34] !== T ||
        t[35] !== l ||
        t[36] !== u ||
        t[37] !== z ||
        t[38] !== H ||
        t[39] !== F ||
        t[40] !== J ||
        t[41] !== Z ||
        t[42] !== te ||
        t[43] !== K
          ? ((ne = _.jsx(
              T,
              babelHelpers.extends(
                {
                  ref: F,
                  tabIndex: Y,
                  onKeyPress: J,
                  onKeyDown: Z,
                  className: te,
                },
                u,
                { onFocus: H, onBlur: z, children: l },
              ),
            )),
            (t[34] = T),
            (t[35] = l),
            (t[36] = u),
            (t[37] = z),
            (t[38] = H),
            (t[39] = F),
            (t[40] = J),
            (t[41] = Z),
            (t[42] = te),
            (t[43] = K),
            (t[44] = ne))
          : (ne = t[44]),
        ne
      );
    }
    function R(e) {
      return e;
    }
    function L(e, t) {
      var n = e[0],
        r = e[1];
      return n !== t.which
        ? !1
        : h.every(function (e) {
            return r != null && e === r
              ? t.getModifierState(r)
              : !t.getModifierState(e);
          });
    }
    function E(t) {
      var n = t.toLowerCase().split(y),
        r = n[0],
        a = n[1];
      (v[r] && (r = v[r]), v[a] && (a = v[a]));
      var i = r,
        l;
      return (
        a
          ? ((i = a),
            (l = g[r]),
            l === void 0
              ? o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Invalid HotKey Modifier: ",
                      "",
                    ])),
                  r,
                )
              : i === void 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Invalid HotKey Key: ",
                      "",
                    ])),
                  a,
                ))
          : i === void 0 &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid HotKey Key: ",
                  "",
                ])),
              r,
            ),
        [C[i] || i.charCodeAt(0), l]
      );
    }
    ((l.SpecialKeyMap = C), (l.HotKeys = S));
  },
  98,
);
