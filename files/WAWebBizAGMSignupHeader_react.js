__d(
  "WAWebBizAGMSignupHeader.react",
  [
    "fbt",
    "WAWebBizAGMSignupPrivacyPolicyPopup.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebModalManager",
    "WAWebSignupCTAExperiment",
    "WDSFlex.stylex",
    "WDSFocusStateStyles",
    "WDSIconWdsIcGift.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        wrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          backgroundColor: "x1bu39yj",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginTop: "x4qlk2n",
          marginInlineStart: "x9nfknk",
          marginInlineEnd: "x1aohvf0",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
        clickable: { cursor: "x1ypdohk", $$css: !0 },
        iconCircle: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x16w0wmm",
          color: "x14ug900",
          $$css: !0,
        },
        contentWrapper: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
        a = t.contact,
        i = t.experiment,
        l = t.privacyPolicyUrl,
        u;
      n[0] !== a || n[1] !== i || n[2] !== l
        ? ((u = function () {
            l != null &&
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizAGMSignupPrivacyPolicyPopup.react"), {
                  contact: a,
                  experiment: i,
                  privacyPolicyUrl: l,
                }),
                { transition: "modal-flow" },
              );
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = u))
        : (u = n[3]);
      var m = u,
        p;
      n[4] !== m
        ? ((p = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) && m();
          }),
          (n[4] = m),
          (n[5] = p))
        : (p = n[5]);
      var _ = p,
        f;
      n[6] !== m || n[7] !== _ || n[8] !== l
        ? ((f =
            l != null
              ? { onClick: m, onKeyDown: _, role: "button", tabIndex: 0 }
              : void 0),
          (n[6] = m),
          (n[7] = _),
          (n[8] = l),
          (n[9] = f))
        : (f = n[9]);
      var g;
      n[10] !== l
        ? ((g = (e || (e = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            d.wrapper,
            l != null && d.clickable,
          )),
          (n[10] = l),
          (n[11] = g))
        : (g = n[11]);
      var h, y, C;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
          )),
          (y = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                o("WDSFlex.stylex").wdsFlex.flexCenter,
                o("WDSFlex.stylex").wdsFlex.flexShrink0,
                d.iconCircle,
              ),
              {
                children: c.jsx(r("WDSIconWdsIcGift.react"), {
                  width: 20,
                  height: 20,
                }),
              },
            ),
          )),
          (C = e.props(
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.flexGrow1,
            o("WDSFlex.stylex").wdsFlex.justifyCenter,
            d.contentWrapper,
          )),
          (n[12] = h),
          (n[13] = y),
          (n[14] = C))
        : ((h = n[12]), (y = n[13]), (C = n[14]));
      var b;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }), (n[15] = b))
        : (b = n[15]);
      var v;
      n[16] !== i
        ? ((v = c.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, b, {
              children: c.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDefault",
                children:
                  i ===
                  o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                    ? s._(/*BTDS*/ "Get offers and announcements")
                    : s._(/*BTDS*/ "Sign up to offers and announcements"),
              }),
            }),
          )),
          (n[16] = i),
          (n[17] = v))
        : (v = n[17]);
      var S;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft" }), (n[18] = S))
        : (S = n[18]);
      var R;
      n[19] !== i
        ? ((R = c.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, S, {
              children: c.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children:
                  i ===
                  o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                    ? s._(/*BTDS*/ "View Privacy Policy")
                    : s._(/*BTDS*/ "Privacy Policy"),
              }),
            }),
          )),
          (n[19] = i),
          (n[20] = R))
        : (R = n[20]);
      var L;
      n[21] !== R || n[22] !== v
        ? ((L = c.jsxs(
            "div",
            babelHelpers.extends({}, h, {
              children: [
                y,
                c.jsxs(
                  "div",
                  babelHelpers.extends({}, C, { children: [v, R] }),
                ),
              ],
            }),
          )),
          (n[21] = R),
          (n[22] = v),
          (n[23] = L))
        : (L = n[23]);
      var E;
      return (
        n[24] !== L || n[25] !== f || n[26] !== g
          ? ((E = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, f, g, {
                children: L,
              }),
            )),
            (n[24] = L),
            (n[25] = f),
            (n[26] = g),
            (n[27] = E))
          : (E = n[27]),
        E
      );
    }
    l.default = m;
  },
  226,
);
