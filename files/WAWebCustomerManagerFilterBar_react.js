__d(
  "WAWebCustomerManagerFilterBar.react",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebClickable.react",
    "WAWebCustomerManagerSearchUtils",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "WDSIconIcBlock.react",
    "WDSIconIcClose.react",
    "WDSIconIcLabelFilled.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = {
        closeButton: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x1mzsije",
          height: "x8lyb6r",
          color: "xhslqc4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        colorDot: {
          width: "x1dmbnle",
          height: "xkb9736",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        labelMenuItem: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          cursor: "x1ypdohk",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
      },
      g = {
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        fgColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(109),
        a = t.hideLeadStage,
        i = t.onClear,
        l = t.onClearAcquisitionSource,
        u = t.onClearLabel,
        d = t.onSelectAcquisitionSource,
        m = t.onSelectLabel,
        p = t.onToggleStage,
        h = t.selectedAcquisitionSource,
        C = t.selectedLabelId,
        b = t.selectedStages,
        v = t.testid,
        S = _(null),
        R = _(null),
        L = _(null),
        E = _(null),
        k;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o("WAWebListsGatingUtils").isListsEnabled()), (n[0] = k))
        : (k = n[0]);
      var I = k,
        T = b.length > 0,
        D = C != null,
        x = h != null,
        $;
      e: {
        if (b.length === 0) {
          $ = null;
          break e;
        }
        var P;
        n[1] !== b ? ((P = new Set(b)), (n[1] = b), (n[2] = P)) : (P = n[2]);
        var N = P,
          M;
        if (n[3] !== N) {
          var w;
          ((M =
            (w = o("WAWebLeadStage").LEAD_STAGE_ORDER.find(function (e) {
              return N.has(e);
            })) != null
              ? w
              : null),
            (n[3] = N),
            (n[4] = M));
        } else M = n[4];
        $ = M;
      }
      var A = $,
        F = b.length - 1,
        O;
      n[5] !== p || n[6] !== b
        ? ((O = o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function (e) {
            return c.jsx(
              r("WDSMenuItem.react"),
              {
                closeMenuOnPress: !1,
                isToggleable: !0,
                onPress: function () {
                  return p(e);
                },
                testid: void 0,
                title: o("WAWebLeadStageNames").getLeadStageName(e),
                toggled: b.includes(e),
              },
              e,
            );
          })),
          (n[5] = p),
          (n[6] = b),
          (n[7] = O))
        : (O = n[7]);
      var B;
      n[8] !== O
        ? ((B = c.jsx(r("WDSMenu.react"), { children: O })),
          (n[8] = O),
          (n[9] = B))
        : (B = n[9]);
      var W = B,
        q,
        U;
      if (n[10] !== m) {
        var V = o("WAWebLabelCollection")
          .LabelCollection.getActiveLists()
          .filter(y);
        ((q = r("WDSMenu.react")),
          (U = V.map(function (t) {
            var n = o("WAWebLabelGetters").getHexColor(t);
            return c.jsxs(
              o("WAWebClickable.react").Clickable,
              {
                onClick: function () {
                  return m(t.id);
                },
                dataTestId: "label-filter-" + t.id,
                xstyle: f.labelMenuItem,
                children: [
                  n != null &&
                    (I
                      ? c.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            (e || (e = r("stylex"))).props(
                              f.colorDot,
                              g.bgColor(n),
                            ),
                          ),
                        )
                      : c.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            (e || (e = r("stylex"))).props(g.fgColor(n)),
                            {
                              children: c.jsx(r("WDSIconIcLabelFilled.react"), {
                                width: 16,
                                height: 16,
                              }),
                            },
                          ),
                        )),
                  c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDefault",
                    maxLines: 1,
                    children: t.name,
                  }),
                ],
              },
              t.id,
            );
          })),
          (n[10] = m),
          (n[11] = q),
          (n[12] = U));
      } else ((q = n[11]), (U = n[12]));
      var H;
      n[13] !== m
        ? ((H = function () {
            return m(o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID);
          }),
          (n[13] = m),
          (n[14] = H))
        : (H = n[14]);
      var G;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = c.jsx(
            "span",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                g.fgColor(
                  o("WDSVars.stylex").WDSVars["--WDS-content-deemphasized"],
                ),
              ),
              {
                children: c.jsx(r("WDSIconIcBlock.react"), {
                  width: 16,
                  height: 16,
                }),
              },
            ),
          )),
          (n[15] = G))
        : (G = n[15]);
      var z;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            maxLines: 1,
            children: I ? s._(/*BTDS*/ "Unlisted") : s._(/*BTDS*/ "Unlabeled"),
          })),
          (n[16] = z))
        : (z = n[16]);
      var j;
      n[17] !== H
        ? ((j = c.jsxs(o("WAWebClickable.react").Clickable, {
            onClick: H,
            dataTestId: "label-filter-no-label",
            xstyle: f.labelMenuItem,
            children: [G, z],
          })),
          (n[17] = H),
          (n[18] = j))
        : (j = n[18]);
      var K;
      n[19] !== q || n[20] !== U || n[21] !== j
        ? ((K = c.jsxs(q, { children: [U, j] })),
          (n[19] = q),
          (n[20] = U),
          (n[21] = j),
          (n[22] = K))
        : (K = n[22]);
      var Q = K,
        X;
      n[23] !== d
        ? ((X = o("WAWebAcquisitionSourceNames")
            .getRegisteredAcquisitionSourceIds()
            .map(function (e) {
              var t;
              return c.jsx(
                r("WDSMenuItem.react"),
                {
                  title:
                    (t = o(
                      "WAWebAcquisitionSourceNames",
                    ).getAcquisitionSourceDisplayName(e)) != null
                      ? t
                      : "",
                  onPress: function () {
                    return d(e);
                  },
                  testid: void 0,
                },
                e,
              );
            })),
          (n[23] = d),
          (n[24] = X))
        : (X = n[24]);
      var Y;
      n[25] !== X
        ? ((Y = c.jsx(r("WDSMenu.react"), { children: X })),
          (n[25] = X),
          (n[26] = Y))
        : (Y = n[26]);
      var J = Y,
        Z;
      n[27] !== a || n[28] !== W
        ? ((Z =
            a !== !0 &&
            c.jsx(r("WDSMenuItem.react"), {
              title: s._(/*BTDS*/ "Lead stage"),
              hasSubmenu: !0,
              submenuContent: W,
              testid: void 0,
            })),
          (n[27] = a),
          (n[28] = W),
          (n[29] = Z))
        : (Z = n[29]);
      var ee;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = I ? s._(/*BTDS*/ "List") : s._(/*BTDS*/ "Label")),
          (n[30] = ee))
        : (ee = n[30]);
      var te;
      n[31] !== Q
        ? ((te = c.jsx(r("WDSMenuItem.react"), {
            title: ee,
            hasSubmenu: !0,
            submenuContent: Q,
            testid: void 0,
          })),
          (n[31] = Q),
          (n[32] = te))
        : (te = n[32]);
      var ne;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Acquisition source")), (n[33] = ne))
        : (ne = n[33]);
      var re;
      n[34] !== J
        ? ((re = c.jsx(r("WDSMenuItem.react"), {
            title: ne,
            hasSubmenu: !0,
            submenuContent: J,
            testid: void 0,
          })),
          (n[34] = J),
          (n[35] = re))
        : (re = n[35]);
      var oe;
      n[36] !== Z || n[37] !== te || n[38] !== re
        ? ((oe = c.jsxs(r("WDSMenu.react"), { children: [Z, te, re] })),
          (n[36] = Z),
          (n[37] = te),
          (n[38] = re),
          (n[39] = oe))
        : (oe = n[39]);
      var ae = oe,
        ie;
      n[40] !== ae
        ? ((ie = { targetRef: S, menu: ae, dismissable: !0 }),
          (n[40] = ae),
          (n[41] = ie))
        : (ie = n[41]);
      var le = r("useWDSMenu")(ie),
        se = le.closeMenu,
        ue = le.isMenuOpen,
        ce = le.menuPortal,
        de = le.openMenu,
        me;
      n[42] !== W
        ? ((me = { targetRef: R, menu: W, dismissable: !0 }),
          (n[42] = W),
          (n[43] = me))
        : (me = n[43]);
      var pe = r("useWDSMenu")(me),
        _e = pe.closeMenu,
        fe = pe.isMenuOpen,
        ge = pe.menuPortal,
        he = pe.openMenu,
        ye;
      n[44] !== Q
        ? ((ye = { targetRef: L, menu: Q, dismissable: !0 }),
          (n[44] = Q),
          (n[45] = ye))
        : (ye = n[45]);
      var Ce = r("useWDSMenu")(ye),
        be = Ce.closeMenu,
        ve = Ce.isMenuOpen,
        Se = Ce.menuPortal,
        Re = Ce.openMenu,
        Le;
      n[46] !== se || n[47] !== ue || n[48] !== de
        ? ((Le = function () {
            ue ? se() : de();
          }),
          (n[46] = se),
          (n[47] = ue),
          (n[48] = de),
          (n[49] = Le))
        : (Le = n[49]);
      var Ee = Le,
        ke;
      n[50] !== _e || n[51] !== fe || n[52] !== he
        ? ((ke = function () {
            fe ? _e() : he();
          }),
          (n[50] = _e),
          (n[51] = fe),
          (n[52] = he),
          (n[53] = ke))
        : (ke = n[53]);
      var Ie = ke,
        Te;
      n[54] !== be || n[55] !== ve || n[56] !== Re
        ? ((Te = function () {
            ve ? be() : Re();
          }),
          (n[54] = be),
          (n[55] = ve),
          (n[56] = Re),
          (n[57] = Te))
        : (Te = n[57]);
      var De = Te,
        xe;
      n[58] !== J
        ? ((xe = { targetRef: E, menu: J, dismissable: !0 }),
          (n[58] = J),
          (n[59] = xe))
        : (xe = n[59]);
      var $e = r("useWDSMenu")(xe),
        Pe = $e.closeMenu,
        Ne = $e.isMenuOpen,
        Me = $e.menuPortal,
        we = $e.openMenu,
        Ae;
      n[60] !== Pe || n[61] !== Ne || n[62] !== we
        ? ((Ae = function () {
            Ne ? Pe() : we();
          }),
          (n[60] = Pe),
          (n[61] = Ne),
          (n[62] = we),
          (n[63] = Ae))
        : (Ae = n[63]);
      var Fe = Ae,
        Oe,
        Be,
        We;
      if (
        n[64] !== ge ||
        n[65] !== A ||
        n[66] !== F ||
        n[67] !== Ie ||
        n[68] !== De ||
        n[69] !== a ||
        n[70] !== D ||
        n[71] !== T ||
        n[72] !== Se ||
        n[73] !== i ||
        n[74] !== u ||
        n[75] !== C ||
        n[76] !== b.length ||
        n[77] !== v
      ) {
        var qe,
          Ue =
            C != null ? o("WAWebLabelCollection").LabelCollection.get(C) : null,
          Ve = Ue != null ? o("WAWebLabelGetters").getHexColor(Ue) : null;
        (n[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((Oe = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g" }),
            (n[81] = Oe))
          : (Oe = n[81]),
          n[82] !== ge ||
          n[83] !== A ||
          n[84] !== F ||
          n[85] !== Ie ||
          n[86] !== a ||
          n[87] !== T ||
          n[88] !== i ||
          n[89] !== b.length ||
          n[90] !== v
            ? ((Be =
                T &&
                a !== !0 &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsxs("div", {
                      className:
                        "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                      ref: R,
                      "data-testid": void 0,
                      children: [
                        c.jsx(o("WAWebClickable.react").Clickable, {
                          onClick: Ie,
                          children: c.jsxs("span", {
                            className:
                              "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                            children: [
                              b.length === 1
                                ? s._(/*BTDS*/ "Lead stage:")
                                : s._(/*BTDS*/ "Lead stages:"),
                              " ",
                              c.jsxs("span", {
                                className: "x117nqv4",
                                children: [
                                  A != null
                                    ? o("WAWebLeadStageNames").getLeadStageName(
                                        A,
                                      )
                                    : "",
                                  F > 0 &&
                                    c.jsxs(c.Fragment, {
                                      children: [
                                        " ",
                                        s._(/*BTDS*/ "+{count}", [
                                          s._param("count", F),
                                        ]),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        c.jsx(o("WAWebClickable.react").Clickable, {
                          ariaLabel: s._(/*BTDS*/ "Remove lead stage filter"),
                          dataTestId: "lead-stage-filter-clear",
                          onClick: i,
                          xstyle: f.closeButton,
                          children: c.jsx(r("WDSIconIcClose.react"), {
                            height: 16,
                            width: 16,
                          }),
                        }),
                      ],
                    }),
                    ge,
                  ],
                })),
              (n[82] = ge),
              (n[83] = A),
              (n[84] = F),
              (n[85] = Ie),
              (n[86] = a),
              (n[87] = T),
              (n[88] = i),
              (n[89] = b.length),
              (n[90] = v),
              (n[91] = Be))
            : (Be = n[91]),
          (We =
            D &&
            (Ue != null ||
              C === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID) &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className:
                    "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                  ref: L,
                  "data-testid": void 0,
                  children: [
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: De,
                      children: c.jsxs("span", {
                        className:
                          "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                        children: [
                          I ? s._(/*BTDS*/ "List:") : s._(/*BTDS*/ "Label:"),
                          Ue != null &&
                            Ve != null &&
                            c.jsx("span", {
                              className: "x3nfvp2 x1wbi8v6 x7g7pl8",
                              children: I
                                ? c.jsx(
                                    "span",
                                    babelHelpers.extends(
                                      {},
                                      (e || (e = r("stylex"))).props(
                                        f.colorDot,
                                        g.bgColor(Ve),
                                      ),
                                    ),
                                  )
                                : c.jsx(
                                    "span",
                                    babelHelpers.extends(
                                      {},
                                      (e || (e = r("stylex"))).props(
                                        g.fgColor(Ve),
                                      ),
                                      {
                                        children: c.jsx(
                                          r("WDSIconIcLabelFilled.react"),
                                          { width: 12, height: 12 },
                                        ),
                                      },
                                    ),
                                  ),
                            }),
                          c.jsx("span", {
                            className: "x117nqv4",
                            children:
                              C ===
                              o("WAWebCustomerManagerSearchUtils")
                                .NO_LABEL_FILTER_ID
                                ? I
                                  ? s._(/*BTDS*/ "Unlisted")
                                  : s._(/*BTDS*/ "Unlabeled")
                                : (qe = Ue == null ? void 0 : Ue.name) != null
                                  ? qe
                                  : "",
                          }),
                        ],
                      }),
                    }),
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      ariaLabel: I
                        ? s._(/*BTDS*/ "Remove list filter")
                        : s._(/*BTDS*/ "Remove label filter"),
                      dataTestId: "label-filter-clear",
                      onClick: u,
                      xstyle: f.closeButton,
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 16,
                        width: 16,
                      }),
                    }),
                  ],
                }),
                Se,
              ],
            })),
          (n[64] = ge),
          (n[65] = A),
          (n[66] = F),
          (n[67] = Ie),
          (n[68] = De),
          (n[69] = a),
          (n[70] = D),
          (n[71] = T),
          (n[72] = Se),
          (n[73] = i),
          (n[74] = u),
          (n[75] = C),
          (n[76] = b.length),
          (n[77] = v),
          (n[78] = Oe),
          (n[79] = Be),
          (n[80] = We));
      } else ((Oe = n[78]), (Be = n[79]), (We = n[80]));
      var He;
      n[92] !== Me || n[93] !== Fe || n[94] !== x || n[95] !== l || n[96] !== h
        ? ((He =
            x &&
            h != null &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className:
                    "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x1iw51ew x1icxu4v x10w6t97 xmixu3c x1ypdohk",
                  ref: E,
                  "data-testid": void 0,
                  children: [
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: Fe,
                      children: c.jsxs("span", {
                        className:
                          "x3nfvp2 x6s0dn4 x1f6kntn x1fc57z9 x14ug900 xuxw1ft",
                        children: [
                          s._(/*BTDS*/ "Acquisition source:"),
                          " ",
                          c.jsx("span", {
                            className: "x117nqv4",
                            children: o(
                              "WAWebAcquisitionSourceNames",
                            ).getAcquisitionSourceDisplayName(h),
                          }),
                        ],
                      }),
                    }),
                    c.jsx(o("WAWebClickable.react").Clickable, {
                      ariaLabel: s._(
                        /*BTDS*/ "Remove acquisition source filter",
                      ),
                      dataTestId: "acquisition-source-filter-clear",
                      onClick: l,
                      xstyle: f.closeButton,
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 16,
                        width: 16,
                      }),
                    }),
                  ],
                }),
                Me,
              ],
            })),
          (n[92] = Me),
          (n[93] = Fe),
          (n[94] = x),
          (n[95] = l),
          (n[96] = h),
          (n[97] = He))
        : (He = n[97]);
      var Ge;
      n[98] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = s._(/*BTDS*/ "Add filter")), (n[98] = Ge))
        : (Ge = n[98]);
      var ze;
      n[99] !== Ee || n[100] !== ue
        ? ((ze = c.jsx(r("WDSChip.react"), {
            ref: S,
            Icon: r("WDSIconIcAdd.react"),
            iconOnly: !0,
            label: Ge,
            onPress: Ee,
            "aria-pressed": ue,
            testid: void 0,
          })),
          (n[99] = Ee),
          (n[100] = ue),
          (n[101] = ze))
        : (ze = n[101]);
      var je;
      return (
        n[102] !== ce ||
        n[103] !== Oe ||
        n[104] !== Be ||
        n[105] !== We ||
        n[106] !== He ||
        n[107] !== ze
          ? ((je = c.jsxs(
              "div",
              babelHelpers.extends({}, Oe, { children: [Be, We, He, ze, ce] }),
            )),
            (n[102] = ce),
            (n[103] = Oe),
            (n[104] = Be),
            (n[105] = We),
            (n[106] = He),
            (n[107] = ze),
            (n[108] = je))
          : (je = n[108]),
        je
      );
    }
    function y(e) {
      return !o("WAWebListUtils").isBuiltInList(e.type);
    }
    l.default = h;
  },
  226,
);
