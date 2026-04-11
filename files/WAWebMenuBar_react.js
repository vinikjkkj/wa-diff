__d(
  "WAWebMenuBar.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebMenuBarStyles",
    "WAWebPopoverContext.react",
    "WAWebTooltip.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.createContext,
      _ = m.useContext,
      f = m.useEffect,
      g = m.useMemo,
      h = m.useRef,
      y = m.useState,
      C = { buttonMargin: { marginInlineStart: "x150mmf0", $$css: !0 } };
    function b(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e.xstyle
        ? ((n = [r("WAWebMenuBarStyles").itemChild, e.xstyle]),
          (t[0] = e.xstyle),
          (t[1] = n))
        : (n = t[1]);
      var a;
      return (
        t[2] !== e || t[3] !== n
          ? ((a = d.jsx(
              r("WAWebVelocityTransitionGroup"),
              babelHelpers.extends({}, e, { xstyle: n }),
            )),
            (t[2] = e),
            (t[3] = n),
            (t[4] = a))
          : (a = t[4]),
        a
      );
    }
    var v = p({});
    function S(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.gap,
        i = e.theme,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = (u || (u = r("stylex")))(
            r("WAWebMenuBarStyles").menu,
            i == null && r("WAWebMenuBarStyles").menuDefault,
            i === "strong" && r("WAWebMenuBarStyles").menuStrong,
            i === "inverse" && r("WAWebMenuBarStyles").menuInverse,
            i === "nav-bar" && r("WAWebMenuBarStyles").menuNavBar,
            a === "single" && r("WAWebMenuBarStyles").menuGapSingle,
          )),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s = l,
        c;
      t[3] !== i
        ? ((c = i ? { theme: i } : {}), (t[3] = i), (t[4] = c))
        : (c = t[4]);
      var m = c,
        p;
      t[5] !== n || t[6] !== s
        ? ((p = d.jsx("div", { className: s, children: n })),
          (t[5] = n),
          (t[6] = s),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== m || t[9] !== p
          ? ((_ = d.jsx(v.Provider, { value: m, children: p })),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    var R = -10;
    function L(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.buttonStyle,
        l = a.disabled,
        s = l === void 0 ? !1 : l,
        c = a.dropdownMenu,
        m = a.icon,
        p = a.onTransitionEnd,
        g = a.onTransitionStart,
        S = a.selected,
        L = a.showHoverTooltip,
        E = L === void 0 ? !1 : L,
        k = a.testid,
        I = a.text,
        T = a.theme,
        D = a.title,
        x = a.transitionName,
        $ = x === void 0 ? "dropdown" : x,
        P = a.vertical,
        N = a.xstyle,
        M = _(v),
        w = M.theme,
        A = y(!1),
        F = A[0],
        O = A[1],
        B = function () {
          if ((g == null || g(), c != null)) {
            var e,
              t = c.offsetX;
            (t == null && (t = R),
              O(!0),
              Q(
                babelHelpers.extends({}, c, {
                  anchor: (e = c.anchor) != null ? e : z.current,
                  offsetX: t,
                }),
              ),
              a.onOpen == null || a.onOpen());
          }
        },
        W = function (t) {
          (p == null || p(), O(!1), Q(null), a.onClose == null || a.onClose(t));
        },
        q = function (t) {
          (a.onClick && a.onClick(t),
            !(t == null || t.isDefaultPrevented()) &&
              (t.preventDefault(), F || B()));
        },
        U = r("useWAWebStaticButtonA11y")(q, { disabled: s }),
        V = U[0],
        H = U[1],
        G = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ajv7",
          (u || (u = r("stylex")))(
            [r("WAWebMenuBarStyles").item, C.buttonMargin],
            N,
            S === !0 && r("WAWebMenuBarStyles").itemSelected,
            F === !0 && r("WAWebMenuBarStyles").itemActive,
            s !== !0 && r("WAWebMenuBarStyles").itemActiveStateNotDisabled,
            s !== !0 && r("WAWebMenuBarStyles").itemShowHoverBg,
            P === !0 && [
              o("WAWebUISpacing").uiMargin.start0,
              o("WAWebUISpacing").uiMargin.top10,
            ],
            s === !0 && r("WAWebMenuBarStyles").itemDisabled,
            s === !0 &&
              H.role === "button" &&
              r("WAWebMenuBarStyles").itemDisabledRoleBtn,
            w === "nav-bar" && r("WAWebMenuBarStyles").itemThemeNavBar,
            w === "media-editor" &&
              r("WAWebMenuBarStyles").itemThemeMediaEditor,
          ),
        ),
        z = h(null),
        j = y(null),
        K = j[0],
        Q = j[1],
        X = r("useMergeRefs")(V, z);
      return (
        f(function () {
          c && F === !0 && B();
        }, []),
        d.jsxs("div", {
          ref: n,
          className: G,
          "data-testid": void 0,
          children: [
            d.jsxs(
              "button",
              babelHelpers.extends(
                { "aria-expanded": F },
                H,
                u.props(
                  r("WAWebMenuBarStyles").itemButton,
                  o("WAWebUISpacing").uiPadding.all8,
                  i,
                  T === "force-size" &&
                    r("WAWebMenuBarStyles").btnThemeForceSize,
                  o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                ),
                {
                  "data-tab": s ? void 0 : a.tabOrder,
                  title: E ? "" : D,
                  "aria-label": D,
                  ref: X,
                  children: [
                    m,
                    I != null &&
                      I !== "" &&
                      d.jsx(
                        "span",
                        babelHelpers.extends(
                          {},
                          (u || (u = r("stylex"))).props(
                            o("WAWebUISpacing").uiMargin.all3,
                          ),
                          { children: I },
                        ),
                      ),
                  ],
                },
              ),
            ),
            K != null &&
              d.jsx(b, {
                transitionName: $,
                children: d.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "MenuBarMenuItem",
                  escapable: !0,
                  popable: !0,
                  dismissOnWindowResize: !0,
                  requestDismiss: W,
                  children: d.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: K,
                  }),
                }),
              }),
            E &&
              d.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                targetRef: z,
                popover: d.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                  targetRef: "context",
                  alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
                  position: o("WAWebTooltip.react").PopoverPosition.End,
                  openingDelay: 350,
                  children: D,
                }),
              }),
          ],
        })
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.MenuBarVelocityTransitionGroup = b),
      (l.MenuBar = S),
      (l.MENU_BAR_ITEM_DROPDOWN_OFFSET = R),
      (l.MenuBarItem = L));
  },
  98,
);
