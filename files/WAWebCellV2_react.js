__d(
  "WAWebCellV2.react",
  [
    "WAWebCellFrameV2.react",
    "WAWebFocusTracer",
    "WAWebKeyboardTabUtils",
    "WDSFocusStateStyles",
    "react",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "active",
        "applyFocusStyles",
        "ariaLabel",
        "border",
        "colorScheme",
        "containerXStyle",
        "detailLeftXStyle",
        "detailRightXStyle",
        "disabled",
        "idle",
        "interactive",
        "material",
        "middleContainerXStyle",
        "onClick",
        "onContextMenu",
        "onMouseEnter",
        "onMouseLeave",
        "primaryRightXStyle",
        "primaryXStyle",
        "secondaryRightXStyle",
        "secondaryXStyle",
        "tabIndex",
        "testid",
        "title",
      ],
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = ["ArrowRight", "ArrowLeft"],
      p = {
        material: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
      },
      _ = {
        containerActive: { backgroundColor: "x4wrhlh", $$css: !0 },
        containerInteractive: {
          ":hover_backgroundColor": "x17gydlx",
          ":focus_backgroundColor": "x1jsj9aw",
          $$css: !0,
        },
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        borderHover: { borderBottomColor: "xee4sfp", $$css: !0 },
      },
      f = {
        containerActive: { backgroundColor: "x4wrhlh", $$css: !0 },
        containerInteractive: {
          ":hover_backgroundColor": "x1ubxc9n",
          ":focus_backgroundColor": "xbmkbis",
          $$css: !0,
        },
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        borderHover: { borderBottomColor: "x6hs5rg", $$css: !0 },
      },
      g = {
        containerActive: { backgroundColor: "x4wrhlh", $$css: !0 },
        containerInteractive: {
          ":hover_backgroundColor": "x17gydlx",
          ":focus_backgroundColor": "x1jsj9aw",
          $$css: !0,
        },
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        borderHover: { borderBottomColor: "xee4sfp", $$css: !0 },
      },
      h = {
        containerActive: { backgroundColor: "xrkjzwr", $$css: !0 },
        containerInteractive: {
          ":hover_backgroundColor": "x4a1f80",
          ":focus_backgroundColor": "xatmcw1",
          $$css: !0,
        },
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        borderHover: { borderBottomColor: "xtee1b1", $$css: !0 },
      };
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.active,
        l = i === void 0 ? !1 : i,
        u = a.applyFocusStyles,
        y = u === void 0 ? !0 : u,
        C = a.ariaLabel,
        b = a.border,
        v = a.colorScheme,
        S = v === void 0 ? "default" : v,
        R = a.containerXStyle,
        L = a.detailLeftXStyle,
        E = a.detailRightXStyle,
        k = a.disabled,
        I = k === void 0 ? !1 : k,
        T = a.idle,
        D = T === void 0 ? !1 : T,
        x = a.interactive,
        $ = x === void 0 ? !0 : x,
        P = a.material,
        N = a.middleContainerXStyle,
        M = a.onClick,
        w = a.onContextMenu,
        A = a.onMouseEnter,
        F = a.onMouseLeave,
        O = a.primaryRightXStyle,
        B = a.primaryXStyle,
        W = a.secondaryRightXStyle,
        q = a.secondaryXStyle,
        U = a.tabIndex,
        V = a.testid,
        H = a.title,
        G = babelHelpers.objectWithoutPropertiesLoose(a, s),
        z = $ && !I,
        j = d(null),
        K = r("useWAWebFocusState")(),
        Q = K[0],
        X = K[1],
        Y = r("useWAWebStaticButtonA11y")(M, { tabIndex: U, disabled: I }),
        J = Y[0],
        Z = Y[1],
        ee = d(null),
        te = r("useMergeRefs")(j, J, Q, ee, n),
        ne = function (t) {
          var e = j.current;
          if (e) {
            var n = t.key;
            if (m.includes(n) && e) {
              var a = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                t.key === "ArrowRight"
                  ? o("WAWebKeyboardTabUtils").TabDirection.FORWARD
                  : o("WAWebKeyboardTabUtils").TabDirection.BACKWARD,
                o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              );
              r("WAWebFocusTracer").focus(a);
            }
          }
        },
        re = z
          ? babelHelpers.extends({}, Z, {
              tabIndex: Z.tabIndex,
              onMouseEnter: function (t) {
                A == null || A(t);
              },
              onMouseLeave: function (t) {
                F == null || F(t);
              },
            })
          : {},
        oe =
          S === "default"
            ? _
            : S === "lighter"
              ? f
              : S === "lightest"
                ? g
                : S === "negative"
                  ? h
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          S,
                      );
                    })(),
        ae = function (t) {
          (t.preventDefault(), t.stopPropagation(), w && w({ event: t }));
        },
        ie = [
          p.material,
          !!l && (oe == null ? void 0 : oe.containerActive),
          !!z && !D && (oe == null ? void 0 : oe.containerInteractive),
          X &&
            y &&
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
          R,
        ];
      return c.jsx(
        "div",
        babelHelpers.extends(
          {
            onKeyDown: ne,
            ref: te,
            className: "x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl",
            "data-testid": void 0,
            title: H,
            "aria-label": C,
          },
          re,
          {
            onContextMenu: ae,
            children: c.jsx(
              r("WAWebCellFrameV2.react"),
              babelHelpers.extends({}, G, {
                containerXStyle: ie,
                detailLeftXStyle: [L],
                middleContainerXStyle: [N],
                primaryXStyle: [B],
                primaryRightXStyle: [O],
                secondaryXStyle: [q],
                secondaryRightXStyle: [W],
                detailRightXStyle: [E],
              }),
            ),
          },
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
