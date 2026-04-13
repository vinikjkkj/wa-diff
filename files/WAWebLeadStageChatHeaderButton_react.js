__d(
  "WAWebLeadStageChatHeaderButton.react",
  [
    "fbt",
    "WAJids",
    "WAWebCustomerDataFieldSaver",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebScreenWidthThresholds",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WDSIconIcArrowDropDown.react",
    "WDSIconIcSort.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCustomerDataForContact",
    "useWAWebWindowSize",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = {
        button: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1280gxy",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xhpystz",
          borderStartEndRadius: "xhmftvz",
          borderEndEndRadius: "x11v37me",
          borderEndStartRadius: "x1tw5c3r",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          cursor: "x1ypdohk",
          display: "x78zum5",
          columnGap: "x1s70e7g",
          height: "x10kmny3",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        icon: {
          color: "x14ug900",
          height: "x8lyb6r",
          width: "x1mzsije",
          $$css: !0,
        },
      };
    function f(e) {
      var t,
        n = o("react-compiler-runtime").c(34),
        a = e.chat,
        i = r("useWAWebWindowSize")(),
        l = i.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        c = (t = a.contact) == null ? void 0 : t.id,
        d = r("useWAWebCustomerDataForContact")(c != null ? c : a.id),
        m;
      if (n[0] !== (d == null ? void 0 : d.leadStage)) {
        var f;
        ((m =
          (f = o("WAWebLeadStage").getLeadStageFromNumber(
            d == null ? void 0 : d.leadStage,
          )) != null
            ? f
            : o("WAWebLeadStage").LeadStage.NONE),
          (n[0] = d == null ? void 0 : d.leadStage),
          (n[1] = m));
      } else m = n[1];
      var g = m,
        h;
      n[2] !== a.id
        ? ((h = o("WAJids").unsafeCoerceToChatJid(a.id.toString())),
          (n[2] = a.id),
          (n[3] = h))
        : (h = n[3]);
      var y = h,
        C;
      n[4] !== y || n[5] !== g || n[6] !== d
        ? ((C = function (t) {
            o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(
              y,
              d,
              t,
              g,
            );
          }),
          (n[4] = y),
          (n[5] = g),
          (n[6] = d),
          (n[7] = C))
        : (C = n[7]);
      var b = C,
        v = p(null),
        S;
      n[8] !== g || n[9] !== b
        ? ((S = o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE.map(
            function (e) {
              return u.jsx(
                r("WDSMenuItem.react"),
                {
                  isToggleable: !0,
                  onPress: function () {
                    return b(e);
                  },
                  testid: void 0,
                  title: o("WAWebLeadStageNames").getLeadStageName(e),
                  toggled: g === e,
                },
                e,
              );
            },
          )),
          (n[8] = g),
          (n[9] = b),
          (n[10] = S))
        : (S = n[10]);
      var R;
      n[11] !== S
        ? ((R = u.jsx(r("WDSMenu.react"), { children: S })),
          (n[11] = S),
          (n[12] = R))
        : (R = n[12]);
      var L = R,
        E;
      n[13] !== L
        ? ((E = { targetRef: v, menu: L }), (n[13] = L), (n[14] = E))
        : (E = n[14]);
      var k = r("useWDSMenu")(E),
        I = k.closeMenu,
        T = k.isMenuOpen,
        D = k.menuPortal,
        x = k.openMenu,
        $;
      n[15] !== I || n[16] !== T || n[17] !== x
        ? (($ = function (t) {
            (t.preventDefault(), t.stopPropagation(), T ? I() : x());
          }),
          (n[15] = I),
          (n[16] = T),
          (n[17] = x),
          (n[18] = $))
        : ($ = n[18]);
      var P = $,
        N;
      n[19] !== g
        ? ((N =
            g !== o("WAWebLeadStage").LeadStage.NONE
              ? o("WAWebLeadStageNames").getLeadStageName(g)
              : s._(/*BTDS*/ "Lead stage")),
          (n[19] = g),
          (n[20] = N))
        : (N = n[20]);
      var M = N,
        w;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x150mmf0" }), (n[21] = w))
        : (w = n[21]);
      var A, F;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Lead stage")),
          (F = u.jsx(r("WDSIconIcSort.react"), { iconXstyle: _.icon })),
          (n[22] = A),
          (n[23] = F))
        : ((A = n[22]), (F = n[23]));
      var O;
      n[24] !== M || n[25] !== l
        ? ((O =
            !l &&
            u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              textAlign: "center",
              colorName: "contentDefault",
              children: M,
            })),
          (n[24] = M),
          (n[25] = l),
          (n[26] = O))
        : (O = n[26]);
      var B;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx(r("WDSIconIcArrowDropDown.react"), {
            iconXstyle: _.icon,
          })),
          (n[27] = B))
        : (B = n[27]);
      var W;
      n[28] !== P || n[29] !== O
        ? ((W = u.jsx(
            "div",
            babelHelpers.extends({}, w, {
              children: u.jsxs(r("WAWebUnstyledButton.react"), {
                ref: v,
                dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                xstyle: _.button,
                onClick: P,
                "aria-label": A,
                children: [F, O, B],
              }),
            }),
          )),
          (n[28] = P),
          (n[29] = O),
          (n[30] = W))
        : (W = n[30]);
      var q;
      return (
        n[31] !== D || n[32] !== W
          ? ((q = u.jsxs(u.Fragment, { children: [W, D] })),
            (n[31] = D),
            (n[32] = W),
            (n[33] = q))
          : (q = n[33]),
        q
      );
    }
    l.default = f;
  },
  226,
);
