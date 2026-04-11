__d(
  "WAWebKeyboardListHotKeys.react",
  [
    "WALogger",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebUim",
    "WAWebUimUie.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = "focusable-list-item";
    function _(t) {
      var a = o("react-compiler-runtime").c(48),
        i = t["aria-label"],
        l = t.children,
        s = t.className,
        c = t.dataTab,
        _ = t.getDefaultFocusItem,
        h = t.getPriorityFocusItem,
        y = t.handlers,
        C = t.onBeforeEnd,
        b = t.role,
        v = t.tabIndex,
        S = v === void 0 ? 0 : v,
        R = r("useWAWebIsKeyboardUser")(),
        L = R.isKeyboardUser,
        E = m(null),
        k = m(null),
        I = m(null),
        T = m(!1),
        D = m(!1),
        x = m(!1),
        $;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            return E.current
              ? Array.from(E.current.getElementsByClassName(p))
              : [];
          }),
          (a[0] = $))
        : ($ = a[0]);
      var P = $,
        N;
      a[1] !== h
        ? ((N = function (t) {
            var e = h == null ? void 0 : h();
            (e && e === t && (x.current = !0),
              r("WAWebFocusTracer").focus(t, { preventScroll: !1 }));
          }),
          (a[1] = h),
          (a[2] = N))
        : (N = a[2]);
      var M = N,
        w;
      a[3] !== M || a[4] !== _
        ? ((w = function (n) {
            var t = P();
            if (t.length !== 0) {
              var r;
              if (I.current) {
                var a = t.indexOf(I.current);
                a !== -1 && (a + n < 0 ? (r = t[0]) : (r = t[a + n]));
              }
              if (!r) {
                var i = I.current ? null : _ == null ? void 0 : _(t);
                r = i != null ? i : t[t.length - 1];
              }
              var l = r;
              (f(l) ||
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ListHotKeys] item missing tabIndex attr",
                    ])),
                ),
                g(l)),
                M(l));
            }
          }),
          (a[3] = M),
          (a[4] = _),
          (a[5] = w))
        : (w = a[5]);
      var A = w,
        F;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            var e = P();
            return e.length > 0 ? e[e.length - 1] : null;
          }),
          (a[6] = F))
        : (F = a[6]);
      var O = F,
        B;
      a[7] !== M || a[8] !== h || a[9] !== C
        ? ((B = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              C && (yield C());
              var e = O(),
                t = h == null ? void 0 : h();
              t && !x.current ? M(t) : e && M(e);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[7] = M),
          (a[8] = h),
          (a[9] = C),
          (a[10] = B))
        : (B = a[10]);
      var W = B,
        q;
      a[11] !== A
        ? ((q = function (t) {
            (t.preventDefault(), A(-1));
          }),
          (a[11] = A),
          (a[12] = q))
        : (q = a[12]);
      var U = q,
        V;
      a[13] !== A
        ? ((V = function (t) {
            (t.preventDefault(), A(1));
          }),
          (a[13] = A),
          (a[14] = V))
        : (V = a[14]);
      var H = V,
        G;
      a[15] !== W
        ? ((G = function (t) {
            (t.preventDefault(), W());
          }),
          (a[15] = W),
          (a[16] = G))
        : (G = a[16]);
      var z = G,
        j;
      a[17] !== A
        ? ((j = function () {
            A(0);
          }),
          (a[17] = A),
          (a[18] = j))
        : (j = a[18]);
      var K = j,
        Q;
      a[19] !== t.removeTabIndexFocusInside
        ? ((Q = function (n) {
            (n.setAttribute("tabIndex", "0"),
              t.removeTabIndexFocusInside === !0 &&
                n.addEventListener("focusin", function (e) {
                  e.target !== n && n.setAttribute("tabIndex", "-1");
                }),
              I.current &&
                I.current !== n &&
                I.current.setAttribute("tabIndex", "-1"),
              (I.current = n));
          }),
          (a[19] = t.removeTabIndexFocusInside),
          (a[20] = Q))
        : (Q = a[20]);
      var X = Q,
        Y;
      a[21] !== K ||
      a[22] !== M ||
      a[23] !== _ ||
      a[24] !== h ||
      a[25] !== L ||
      a[26] !== X
        ? ((Y = function (t) {
            var e = t.target;
            if (E.current === e) {
              var n;
              if (L) {
                var r = h == null ? void 0 : h();
                !D.current && r && !_ ? M(r) : K();
              }
              (n = k.current) == null || n.activate();
            } else e instanceof HTMLElement && e.classList.contains(p) && X(e);
            ((T.current = !0), (D.current = !0));
          }),
          (a[21] = K),
          (a[22] = M),
          (a[23] = _),
          (a[24] = h),
          (a[25] = L),
          (a[26] = X),
          (a[27] = Y))
        : (Y = a[27]);
      var J = Y,
        Z;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function (t) {
            T.current = !1;
          }),
          (a[28] = Z))
        : (Z = a[28]);
      var ee = Z,
        te;
      a[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = function () {
            E.current &&
              !E.current.contains(document.activeElement) &&
              r("WAWebFocusTracer").focus(E.current);
          }),
          (a[29] = te))
        : (te = a[29]);
      var ne = te,
        re;
      (a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function () {
            ((x.current = !1),
              T.current &&
                I.current &&
                E.current &&
                !E.current.contains(I.current) &&
                r("WAWebFocusTracer").focus(E.current));
          }),
          (a[30] = re))
        : (re = a[30]),
        d(re, void 0));
      var oe;
      a[31] !== H || a[32] !== z || a[33] !== U || a[34] !== y
        ? ((oe = babelHelpers.extends({}, y, {
            up: U,
            down: H,
            end: z,
            "command+down": z,
          })),
          (a[31] = H),
          (a[32] = z),
          (a[33] = U),
          (a[34] = y),
          (a[35] = oe))
        : (oe = a[35]);
      var ae = oe,
        ie = L ? null : ne,
        le;
      a[36] !== i ||
      a[37] !== l ||
      a[38] !== s ||
      a[39] !== c ||
      a[40] !== J ||
      a[41] !== ae ||
      a[42] !== b ||
      a[43] !== S
        ? ((le = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            tabIndex: S,
            handlers: ae,
            className: s,
            "data-tab": c,
            onFocus: J,
            onBlur: ee,
            ref: E,
            role: b,
            "aria-label": i,
            children: l,
          })),
          (a[36] = i),
          (a[37] = l),
          (a[38] = s),
          (a[39] = c),
          (a[40] = J),
          (a[41] = ae),
          (a[42] = b),
          (a[43] = S),
          (a[44] = le))
        : (le = a[44]);
      var se;
      return (
        a[45] !== ie || a[46] !== le
          ? ((se = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ListHotKeys",
              ref: k,
              uimState: o("WAWebUim").UIMState.PASSIVE,
              requestFocus: ie,
              children: le,
            })),
            (a[45] = ie),
            (a[46] = le),
            (a[47] = se))
          : (se = a[47]),
        se
      );
    }
    function f(e) {
      return e.hasAttribute("tabIndex");
    }
    function g(e) {
      e.setAttribute("tabIndex", "-1");
    }
    ((l.LIST_FOCUSABLE_ITEM_CLASS_NAME = p), (l.ListHotKeys = _));
  },
  98,
);
