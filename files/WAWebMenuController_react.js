__d(
  "WAWebMenuController.react",
  [
    "WALogger",
    "WAWebDomScroll",
    "WAWebEventEmitter",
    "WAWebFlex.react",
    "WAWebRegister.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "stylex",
    "useWAWebNavigatableList",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.createContext,
      _ = m.useCallback,
      f = m.useContext,
      g = m.useEffect,
      h = m.useMemo,
      y = m.useRef,
      C = m.useState,
      b = p(null),
      v = o("WAWebRegister.react").createRegister(),
      S = v.Register,
      R = v.useRegister,
      L = v.useRegisterItem;
    function E() {
      var e = f(b);
      if (e == null)
        throw r("err")(
          "[Menu] useMenu must be used in a child of a MenuList component",
        );
      return e;
    }
    var k = {
      container: {
        display: "x78zum5",
        flexGrow: "x1iyjqo2",
        overflowX: "xw2csxc",
        overflowY: "x1odjw0f",
        $$css: !0,
      },
      listContainer: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        flexGrow: "x1iyjqo2",
        flexShrink: "x2lah0s",
        flexBasis: "xdl72j9",
        overflowY: "x1odjw0f",
        width: "xh8yej3",
        $$css: !0,
      },
      padding: {
        paddingTop: "x16ovd2e",
        paddingInlineEnd: "x1nzty39",
        paddingBottom: "x12xbjc7",
        paddingInlineStart: "x12w63v0",
        $$css: !0,
      },
    };
    function I(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, s),
        l = i.allowTabNavigation,
        c = l === void 0 ? !1 : l,
        m = i.autoScroll,
        p = m === void 0 ? !0 : m,
        f = i.border,
        v = i.children,
        S = i.colorScheme,
        R = S === void 0 ? "lighter" : S,
        L = i.data,
        E = i.focusOnMount,
        I = E === void 0 ? !1 : E,
        T = i.forceSelection,
        D = i.initialActiveOptionId,
        x = i.material,
        $ = x === void 0 ? !1 : x,
        P = i.maxHeight,
        N = i.menuControllerRef,
        M = i.minWidth,
        w = i.onActiveItemChange,
        A = i.onHotKeysFocus,
        F = i.onSelect,
        O = i.size,
        B = O === void 0 ? "small" : O,
        W = i.useLegacyDesign,
        q = W === void 0 ? !1 : W,
        U = L,
        V = y(),
        H = C(),
        G = H[0],
        z = H[1],
        j = h(function () {
          return new (r("WAWebEventEmitter"))();
        }, []),
        K = h(
          function () {
            return G != null ? G : Array.from(U.keys());
          },
          [G, U],
        ),
        Q = o("useWAWebNavigatableList").useNavigatableList(K),
        X = Q.NavigatableList,
        Y = Q.activeItem,
        J = Q.listSelection,
        Z = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield z(e);
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        ee = function (n) {
          var t = U.get(n);
          if (t != null && t.current != null) {
            var r = t.current;
            (r.onSelect == null || r.onSelect(),
              j.trigger("select", n, r, U),
              F == null || F(n, r, U));
          } else
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Menu] Trying to handle onSelect without a valid option '",
                  "'",
                ])),
              n,
            );
        },
        te = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        ne = _(
          function (e) {
            var t = U.get(e);
            if (V.current != null && (t == null ? void 0 : t.current) != null) {
              var n = t.current.ref.current;
              n != null &&
                o("WAWebDomScroll").scrollIntoViewIfNeeded(n, !1, V.current);
            }
          },
          [U],
        );
      (g(
        function () {
          p === !0 && Y != null && ne(Y);
        },
        [Y, ne, p],
      ),
        g(
          function () {
            w == null || w(Y);
          },
          [Y, w],
        ),
        g(function () {
          I === !0 && V.current != null && V.current.focus();
        }, []));
      var re = { down: te, up: te, enter: te },
        oe = function (t) {
          t != null ? J.setVal(t) : J.set(-1, !1);
        },
        ae = {
          items: U,
          events: j,
          activeItemId: Y,
          filteredItems: G != null ? new Set(G) : null,
          filterItems: Z,
          selectItem: ee,
          activateItem: oe,
          colorScheme: R,
          size: B,
          material: $,
          allowTabNavigation: c,
          border: f,
          useLegacyDesign: q,
        };
      return d.jsx(b.Provider, {
        value: ae,
        children: d.jsx("div", {
          ref: a,
          role: "listbox",
          "data-testid": void 0,
          className: (u || (u = r("stylex")))([k.container]),
          style: { maxHeight: P, minWidth: M },
          children: d.jsx(X, {
            listControllerRef: N,
            xstyle: k.listContainer,
            items: J,
            onSelect: ee,
            handlers: re,
            forceSelection: T,
            initialActiveItem: D,
            rotate: !0,
            onHotKeysFocus: A,
            children: d.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              tabIndex: 0,
              "data-tab": 0,
              ref: V,
              xstyle: k.padding,
              testid: void 0,
              children: v,
            }),
          }),
        }),
      });
    }
    ((I.displayName = I.name + " [from " + i.id + "]"),
      (l.useRegisterItem = L),
      (l.Register = S),
      (l.useRegister = R),
      (l.useMenu = E),
      (l.WAWebMenuController = I));
  },
  98,
);
