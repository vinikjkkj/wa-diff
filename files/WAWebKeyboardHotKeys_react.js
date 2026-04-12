__d(
  "WAWebKeyboardHotKeys.react",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebUim",
    "cr:23442",
    "lodash",
    "react",
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
      var t = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, c),
        i = a.component,
        l = i === void 0 ? "div" : i,
        s = a.handlers,
        u = a.children,
        p = a.xstyle,
        g = a.onFocus,
        h = g === void 0 ? r("WAWebNoop") : g,
        y = a.onBlur,
        C = y === void 0 ? r("WAWebNoop") : y,
        v = a.focusType,
        S = v === void 0 ? "all" : v,
        E = a.onKeyDown,
        k = a.tabIndex,
        I = a.className,
        T = babelHelpers.objectWithoutPropertiesLoose(a, d),
        D = f(!1),
        x = n("cr:23442")(),
        $ = x[0],
        P = x[1],
        N = f(null),
        M = r("useMergeRefs")(t, N, $);
      r("useWAWebOnUnmount")(function () {
        if (D.current) {
          var e = document.activeElement;
          N.current === e && o("WAWebUim").UIM.Manager.refocusTopUie();
        }
      });
      var w = function (t) {
          (E != null && E(t),
            s &&
              Object.keys(s).forEach(function (e) {
                var n = s[e];
                if (n != null) {
                  var r = L(e),
                    o = r[0];
                  b[String(o)] && R(r, t) && n(t);
                }
              }));
        },
        A = function (t) {
          s &&
            Object.keys(s).forEach(function (e) {
              var n = s[e];
              if (n != null) {
                var r = L(e),
                  o = r[0];
                b[String(o)] || (R(r, t) && n(t));
              }
            });
        },
        F = function (t) {
          ((D.current = !0), !(S === "keyboardOnly" && P !== !0) && h(t));
        },
        O = function (t) {
          ((D.current = !1), C(t));
        },
        B =
          s != null &&
          Object.keys(s).some(function (e) {
            return s[e] != null;
          }),
        W = -1;
      (T["data-tab"] != null && (W = 0), k != null && (W = k));
      var q = [];
      return (
        I != null && q.push(I),
        p != null && q.push((m || (m = r("stylex")))(p)),
        _.jsx(
          l,
          babelHelpers.extends(
            {
              ref: M,
              tabIndex: W,
              onKeyPress: B ? A : null,
              onKeyDown: B ? w : null,
              className: q
                .map(function (e) {
                  return e;
                })
                .join(" "),
            },
            T,
            { onFocus: F, onBlur: O, children: u },
          ),
        )
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t) {
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
    function L(t) {
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
