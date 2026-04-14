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
      var a = t["aria-label"],
        i = t.children,
        l = t.className,
        s = t.dataTab,
        c = t.getDefaultFocusItem,
        _ = t.getPriorityFocusItem,
        h = t.handlers,
        y = t.onBeforeEnd,
        C = t.role,
        b = t.tabIndex,
        v = b === void 0 ? 0 : b,
        S = r("useWAWebIsKeyboardUser")(),
        R = S.isKeyboardUser,
        L = m(null),
        E = m(null),
        k = m(null),
        I = m(!1),
        T = m(!1),
        D = m(!1),
        x = function () {
          return L.current
            ? Array.from(L.current.getElementsByClassName(p))
            : [];
        },
        $ = function (t) {
          var e = _ == null ? void 0 : _();
          (e && e === t && (D.current = !0),
            r("WAWebFocusTracer").focus(t, { preventScroll: !1 }));
        },
        P = function (n) {
          var t = x();
          if (t.length !== 0) {
            var r;
            if (k.current) {
              var a = t.indexOf(k.current);
              a !== -1 && (a + n < 0 ? (r = t[0]) : (r = t[a + n]));
            }
            if (!r) {
              var i = k.current ? null : c == null ? void 0 : c(t);
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
              $(l));
          }
        },
        N = function () {
          var e = x();
          return e.length > 0 ? e[e.length - 1] : null;
        },
        M = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            y && (yield y());
            var e = N(),
              t = _ == null ? void 0 : _();
            t && !D.current ? $(t) : e && $(e);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        w = function (t) {
          (t.preventDefault(), P(-1));
        },
        A = function (t) {
          (t.preventDefault(), P(1));
        },
        F = function (t) {
          (t.preventDefault(), M());
        },
        O = function () {
          P(0);
        },
        B = function (n) {
          (n.setAttribute("tabIndex", "0"),
            t.removeTabIndexFocusInside === !0 &&
              n.addEventListener("focusin", function (e) {
                e.target !== n && n.setAttribute("tabIndex", "-1");
              }),
            k.current &&
              k.current !== n &&
              k.current.setAttribute("tabIndex", "-1"),
            (k.current = n));
        },
        W = function (t) {
          var e = t.target;
          if (L.current === e) {
            var n;
            if (R) {
              var r = _ == null ? void 0 : _();
              !T.current && r && !c ? $(r) : O();
            }
            (n = E.current) == null || n.activate();
          } else e instanceof HTMLElement && e.classList.contains(p) && B(e);
          ((I.current = !0), (T.current = !0));
        },
        q = function (t) {
          I.current = !1;
        },
        U = function () {
          L.current &&
            !L.current.contains(document.activeElement) &&
            r("WAWebFocusTracer").focus(L.current);
        };
      d(
        function () {
          ((D.current = !1),
            I.current &&
              k.current &&
              L.current &&
              !L.current.contains(k.current) &&
              r("WAWebFocusTracer").focus(L.current));
        },
        void 0,
      );
      var V = babelHelpers.extends({}, h, {
        up: w,
        down: A,
        end: F,
        "command+down": F,
      });
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "ListHotKeys",
        ref: E,
        uimState: o("WAWebUim").UIMState.PASSIVE,
        requestFocus: R ? null : U,
        children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          tabIndex: v,
          handlers: V,
          className: l,
          "data-tab": s,
          onFocus: W,
          onBlur: q,
          ref: L,
          role: C,
          "aria-label": a,
          children: i,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
