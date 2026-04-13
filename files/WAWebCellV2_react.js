__d(
  "WAWebCellV2.react",
  [
    "WAWebCellFrameV2.react",
    "WAWebFocusTracer",
    "WAWebKeyboardTabUtils",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(78),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O;
      if (n[3] !== a) {
        var B = a,
          W = B.active,
          q = B.applyFocusStyles,
          U = B.ariaLabel,
          V = B.border,
          H = B.colorScheme,
          G = B.containerXStyle,
          z = B.detailLeftXStyle,
          j = B.detailRightXStyle,
          K = B.disabled,
          Q = B.idle,
          X = B.interactive,
          Y = B.material,
          J = B.middleContainerXStyle,
          Z = B.onClick,
          ee = B.onContextMenu,
          te = B.onMouseEnter,
          ne = B.onMouseLeave,
          re = B.primaryRightXStyle,
          oe = B.primaryXStyle,
          ae = B.secondaryRightXStyle,
          ie = B.secondaryXStyle,
          le = B.tabIndex,
          se = B.testid,
          ue = B.title,
          ce = babelHelpers.objectWithoutPropertiesLoose(B, s);
        ((x = W),
          ($ = q),
          (l = U),
          (P = H),
          (u = G),
          (y = z),
          (C = j),
          (N = K),
          (M = Q),
          (w = X),
          (b = J),
          (v = Z),
          (S = ee),
          (R = te),
          (L = ne),
          (E = re),
          (k = oe),
          (T = ae),
          (D = ie),
          (A = le),
          (F = se),
          (O = ue),
          (I = ce),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = y),
          (n[7] = C),
          (n[8] = b),
          (n[9] = v),
          (n[10] = S),
          (n[11] = R),
          (n[12] = L),
          (n[13] = E),
          (n[14] = k),
          (n[15] = I),
          (n[16] = T),
          (n[17] = D),
          (n[18] = x),
          (n[19] = $),
          (n[20] = P),
          (n[21] = N),
          (n[22] = M),
          (n[23] = w),
          (n[24] = A),
          (n[25] = F),
          (n[26] = O));
      } else
        ((l = n[4]),
          (u = n[5]),
          (y = n[6]),
          (C = n[7]),
          (b = n[8]),
          (v = n[9]),
          (S = n[10]),
          (R = n[11]),
          (L = n[12]),
          (E = n[13]),
          (k = n[14]),
          (I = n[15]),
          (T = n[16]),
          (D = n[17]),
          (x = n[18]),
          ($ = n[19]),
          (P = n[20]),
          (N = n[21]),
          (M = n[22]),
          (w = n[23]),
          (A = n[24]),
          (F = n[25]),
          (O = n[26]));
      var de = x === void 0 ? !1 : x,
        me = $ === void 0 ? !0 : $,
        pe = P === void 0 ? "default" : P,
        _e = N === void 0 ? !1 : N,
        fe = M === void 0 ? !1 : M,
        ge = w === void 0 ? !0 : w,
        he = ge && !_e,
        ye = d(null),
        Ce = r("useWAWebFocusState")(),
        be = Ce[0],
        ve = Ce[1],
        Se;
      n[27] !== _e || n[28] !== A
        ? ((Se = { tabIndex: A, disabled: _e }),
          (n[27] = _e),
          (n[28] = A),
          (n[29] = Se))
        : (Se = n[29]);
      var Re = r("useWAWebStaticButtonA11y")(v, Se),
        Le = Re[0],
        Ee = Re[1],
        ke = d(null),
        Ie = r("useMergeRefs")(ye, Le, be, ke, i),
        Te;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = function (t) {
            var e = ye.current;
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
          }),
          (n[30] = Te))
        : (Te = n[30]);
      var De = Te,
        xe;
      n[31] !== Ee || n[32] !== he || n[33] !== R || n[34] !== L
        ? ((xe = he
            ? babelHelpers.extends({}, Ee, {
                tabIndex: Ee.tabIndex,
                onMouseEnter: function (t) {
                  R == null || R(t);
                },
                onMouseLeave: function (t) {
                  L == null || L(t);
                },
              })
            : {}),
          (n[31] = Ee),
          (n[32] = he),
          (n[33] = R),
          (n[34] = L),
          (n[35] = xe))
        : (xe = n[35]);
      var $e = xe,
        Pe;
      n[36] !== pe
        ? ((Pe =
            pe === "default"
              ? _
              : pe === "lighter"
                ? f
                : pe === "lightest"
                  ? g
                  : pe === "negative"
                    ? h
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            pe,
                        );
                      })()),
          (n[36] = pe),
          (n[37] = Pe))
        : (Pe = n[37]);
      var Ne = Pe,
        Me;
      n[38] !== S
        ? ((Me = function (t) {
            (t.preventDefault(), t.stopPropagation(), S && S({ event: t }));
          }),
          (n[38] = S),
          (n[39] = Me))
        : (Me = n[39]);
      var we = Me,
        Ae = !!de && (Ne == null ? void 0 : Ne.containerActive),
        Fe = !!he && !fe && (Ne == null ? void 0 : Ne.containerInteractive),
        Oe =
          ve &&
          me &&
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
        Be;
      n[40] !== u || n[41] !== Ae || n[42] !== Fe || n[43] !== Oe
        ? ((Be = [p.material, Ae, Fe, Oe, u]),
          (n[40] = u),
          (n[41] = Ae),
          (n[42] = Fe),
          (n[43] = Oe),
          (n[44] = Be))
        : (Be = n[44]);
      var We = Be,
        qe;
      n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = "x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl"),
          (n[45] = qe))
        : (qe = n[45]);
      var Ue = F != null ? F : "cell-frame-container",
        Ve;
      n[46] !== y ? ((Ve = [y]), (n[46] = y), (n[47] = Ve)) : (Ve = n[47]);
      var He;
      n[48] !== b ? ((He = [b]), (n[48] = b), (n[49] = He)) : (He = n[49]);
      var Ge;
      n[50] !== k ? ((Ge = [k]), (n[50] = k), (n[51] = Ge)) : (Ge = n[51]);
      var ze;
      n[52] !== E ? ((ze = [E]), (n[52] = E), (n[53] = ze)) : (ze = n[53]);
      var je;
      n[54] !== D ? ((je = [D]), (n[54] = D), (n[55] = je)) : (je = n[55]);
      var Ke;
      n[56] !== T ? ((Ke = [T]), (n[56] = T), (n[57] = Ke)) : (Ke = n[57]);
      var Qe;
      n[58] !== C ? ((Qe = [C]), (n[58] = C), (n[59] = Qe)) : (Qe = n[59]);
      var Xe;
      n[60] !== We ||
      n[61] !== I ||
      n[62] !== Ve ||
      n[63] !== He ||
      n[64] !== Ge ||
      n[65] !== ze ||
      n[66] !== je ||
      n[67] !== Ke ||
      n[68] !== Qe
        ? ((Xe = c.jsx(
            r("WAWebCellFrameV2.react"),
            babelHelpers.extends({}, I, {
              containerXStyle: We,
              detailLeftXStyle: Ve,
              middleContainerXStyle: He,
              primaryXStyle: Ge,
              primaryRightXStyle: ze,
              secondaryXStyle: je,
              secondaryRightXStyle: Ke,
              detailRightXStyle: Qe,
            }),
          )),
          (n[60] = We),
          (n[61] = I),
          (n[62] = Ve),
          (n[63] = He),
          (n[64] = Ge),
          (n[65] = ze),
          (n[66] = je),
          (n[67] = Ke),
          (n[68] = Qe),
          (n[69] = Xe))
        : (Xe = n[69]);
      var Ye;
      return (
        n[70] !== l ||
        n[71] !== we ||
        n[72] !== $e ||
        n[73] !== Ie ||
        n[74] !== Ue ||
        n[75] !== Xe ||
        n[76] !== O
          ? ((Ye = c.jsx(
              "div",
              babelHelpers.extends(
                {
                  onKeyDown: De,
                  ref: Ie,
                  className: qe,
                  "data-testid": void 0,
                  title: O,
                  "aria-label": l,
                },
                $e,
                { onContextMenu: we, children: Xe },
              ),
            )),
            (n[70] = l),
            (n[71] = we),
            (n[72] = $e),
            (n[73] = Ie),
            (n[74] = Ue),
            (n[75] = Xe),
            (n[76] = O),
            (n[77] = Ye))
          : (Ye = n[77]),
        Ye
      );
    }
    l.default = y;
  },
  98,
);
