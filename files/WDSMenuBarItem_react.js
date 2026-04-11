__d(
  "WDSMenuBarItem.react",
  [
    "WAWebMenuBar.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSTooltip.react",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u = [
        "dropdownMenu",
        "menuEnableUim",
        "menuIsContainer",
        "onClose",
        "onOpen",
        "transitionName",
        "wdsMenuToRender",
      ],
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = c || (c = r("react")),
      f = p.useImperativeHandle,
      g = p.useRef,
      h = p.useState,
      y = r("deferredLoadComponent")(
        r("requireDeferred")("WDSMenuBarItemWithWDSMenu.react").__setRef(
          "WDSMenuBarItem.react",
        ),
      );
    function C(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.buttonSize,
        l = i === void 0 ? "medium" : i,
        s = a.buttonType,
        u = s === void 0 ? "default" : s,
        c = a.buttonVariant,
        m = c === void 0 ? "borderless" : c,
        p = a.disabled,
        y = p === void 0 ? !1 : p,
        C = a.dropdownMenu,
        b = a.icon,
        v = a.imperativeRef,
        S = a.keyboardShortcutAction,
        R = a.label,
        L = a.marginInlineXstyle,
        E = a.onClick,
        k = a.onClose,
        I = a.onOpen,
        T = a.tabOrder,
        D = a.testid,
        x = a.title,
        $ = a.transitionName,
        P = $ === void 0 ? "dropdown" : $,
        N = h(!1),
        M = N[0],
        w = N[1],
        A = g(null),
        F = r("useMergeRefs")(n, A),
        O = h(null),
        B = O[0],
        W = O[1],
        q = !y && R == null,
        U = function () {
          if (C != null) {
            var e,
              t,
              n,
              r = C.offsetX;
            (r == null &&
              (r = o("WAWebMenuBar.react").MENU_BAR_ITEM_DROPDOWN_OFFSET),
              w(!0),
              W(
                babelHelpers.extends({}, C, {
                  anchor:
                    (e =
                      (t = (n = C.anchorRef) == null ? void 0 : n.current) !=
                      null
                        ? t
                        : C.anchor) != null
                      ? e
                      : A.current,
                  offsetX: r,
                }),
              ),
              I == null || I());
          }
        },
        V = function (t) {
          (w(!1), W(null), k == null || k(t));
        },
        H = function (t) {
          (E && E(t),
            !(t == null || t.isDefaultPrevented()) &&
              (t.preventDefault(), M || U()));
        };
      f(v, function () {
        return {
          open: function () {
            U();
          },
        };
      });
      var G = _.jsxs(_.Fragment, {
        children: [
          _.jsx(r("WDSButton.react"), {
            type: u,
            variant: m,
            size: l,
            directional: !0,
            Icon: b,
            label: R,
            "aria-label": x,
            "aria-haspopup": C ? "menu" : void 0,
            "aria-expanded": M,
            onPress: H,
            ref: F,
            disabled: y,
            testid: void 0,
            tabOrder: T,
          }),
          B != null &&
            _.jsx(o("WAWebMenuBar.react").MenuBarVelocityTransitionGroup, {
              transitionName: P,
              children: _.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "MenuBarMenuItem",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: V,
                children: _.jsx(r("WAWebUimUieMenu.react"), { contextMenu: B }),
              }),
            }),
        ],
      });
      return q
        ? _.jsx(
            "div",
            babelHelpers.extends({}, (d || (d = r("stylex"))).props(L), {
              children: _.jsx(r("WDSTooltip.react"), {
                label: x,
                shortcut: S,
                disabled: M,
                children: G,
              }),
            }),
          )
        : _.jsx(
            "div",
            babelHelpers.extends({}, (d || (d = r("stylex"))).props(L), {
              title: x,
              children: G,
            }),
          );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = n.dropdownMenu,
        o = n.menuEnableUim,
        a = n.menuIsContainer,
        i = n.onClose,
        l = n.onOpen,
        c = n.transitionName,
        d = n.wdsMenuToRender,
        m = babelHelpers.objectWithoutPropertiesLoose(n, u);
      return d != null
        ? _.jsx(
            y,
            babelHelpers.extends({ ref: t }, m, {
              wdsMenuToRender: d,
              menuEnableUim: o,
              menuIsContainer: a,
            }),
          )
        : _.jsx(C, babelHelpers.extends({ ref: t }, n));
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
