__d(
  "WAWebCustomerManagerEmptyState.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebEmptyStateActionTile.react",
    "WAWebLabelOutlineIcon.react",
    "WAWebListPeopleRefreshedIcon.react",
    "WAWebListsGatingUtils",
    "WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSIconIcPersonAdd.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        wrapper: {
          backgroundColor: "x6egj2d",
          width: "xh8yej3",
          height: "x5yr21d",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        titleCard: {
          maxWidth: "x1rjt51p",
          backgroundColor: "x16w0wmm",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          rowGap: "x1j3ira4",
          boxSizing: "x9f619",
          height: "xg7h5cd",
          $$css: !0,
        },
        textGroup: { rowGap: "x1qvou4u", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t.onAddCustomer,
        i = t.onLearnMore,
        l = t.onManageLabels,
        u,
        m,
        _,
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e || (e = r("stylex"))).props(
            d.wrapper,
            o("WDSFlex.stylex").wdsFlex.flexCenter,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
          )),
          (m = e.props(
            d.titleCard,
            o("WDSFlex.stylex").wdsFlex.flexColumn,
            o("WDSFlex.stylex").wdsFlex.alignCenter,
          )),
          (_ = c.jsx(
            o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react")
              .WdsPictoUserCheckFeedbackPositiveIcon,
            {},
          )),
          (f = e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, d.textGroup)),
          (n[0] = u),
          (n[1] = m),
          (n[2] = _),
          (n[3] = f))
        : ((u = n[0]), (m = n[1]), (_ = n[2]), (f = n[3]));
      var g;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Headline2",
            robotoPropValue:
              o("WAWebABProps").getABPropConfigValue("wds_web_roboto"),
            children: s._(
              /*BTDS*/ "Keep every customer conversation organized",
            ),
          })),
          (n[4] = g))
        : (g = n[4]);
      var h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsxs(
            "div",
            babelHelpers.extends({}, f, {
              children: [
                g,
                c.jsx(r("WDSText.react"), {
                  colorName: "contentDeemphasized",
                  type: "Body2",
                  children: s._(
                    /*BTDS*/ "Label, filter, and pick up any thread instantly\u2014with a workflow designed for businesses.",
                  ),
                }),
              ],
            }),
          )),
          (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Learn more")), (n[6] = y))
        : (y = n[6]);
      var C = i != null ? i : p,
        b;
      n[7] !== C
        ? ((b = c.jsxs(
            "div",
            babelHelpers.extends({}, m, {
              children: [
                _,
                h,
                c.jsx(r("WDSButton.react"), {
                  type: "default",
                  variant: "tonal",
                  size: "small",
                  label: y,
                  onPress: C,
                  testid: void 0,
                }),
              ],
            }),
          )),
          (n[7] = C),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
          )),
          (n[9] = v))
        : (v = n[9]);
      var S;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Add customer")), (n[10] = S))
        : (S = n[10]);
      var R;
      n[11] !== a
        ? ((R = c.jsx(r("WAWebEmptyStateActionTile.react"), {
            Icon: r("WDSIconIcPersonAdd.react"),
            title: S,
            clickHandler: a,
            testid: void 0,
          })),
          (n[11] = a),
          (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebListsGatingUtils").isListsEnabled()
            ? s._(/*BTDS*/ "Manage lists")
            : s._(/*BTDS*/ "Manage labels")),
          (n[13] = L))
        : (L = n[13]);
      var E;
      n[14] !== l
        ? ((E = c.jsx(r("WAWebEmptyStateActionTile.react"), {
            Icon: o("WAWebListsGatingUtils").isListsEnabled()
              ? o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon
              : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
            title: L,
            clickHandler: l,
            testid: void 0,
          })),
          (n[14] = l),
          (n[15] = E))
        : (E = n[15]);
      var k;
      n[16] !== R || n[17] !== E
        ? ((k = c.jsxs(
            "div",
            babelHelpers.extends({}, v, { children: [R, E] }),
          )),
          (n[16] = R),
          (n[17] = E),
          (n[18] = k))
        : (k = n[18]);
      var I;
      return (
        n[19] !== k || n[20] !== b
          ? ((I = c.jsxs(
              "section",
              babelHelpers.extends({ "data-testid": void 0 }, u, {
                children: [b, k],
              }),
            )),
            (n[19] = k),
            (n[20] = b),
            (n[21] = I))
          : (I = n[21]),
        I
      );
    }
    function p() {}
    l.default = m;
  },
  226,
);
