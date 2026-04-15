__d(
  "WAWebBusinessCategoryField.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessCategoryModal.react",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WDSButton.react",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "WDSIconIcCategory.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        editButton: {
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        fieldContainer: {
          alignSelf: "xkh2ocl",
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        fieldContainerHover: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(28),
        a = e.categories,
        i = e.locked,
        l = e.onLockedClick,
        d = e.saveBusinessProfile,
        _;
      n[0] !== a || n[1] !== i || n[2] !== l || n[3] !== d
        ? ((_ = function () {
            if (
              (o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.clickCategory(),
              i === !0)
            ) {
              l != null && l();
              return;
            }
            d != null &&
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebBusinessCategoryModal.react"), {
                  initialCategories: a != null ? a : [],
                  saveBusinessProfile: d,
                  onCancel: p,
                  onSaveSuccess: r("WAWebNoop"),
                }),
              );
          }),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = d),
          (n[4] = _))
        : (_ = n[4]);
      var f = _,
        g = (t = a == null ? void 0 : a.length) != null ? t : 0,
        h = r(g === 3 ? "WDSIconIcEdit.react" : "WDSIconIcAdd.react"),
        y;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled()),
          (n[5] = y))
        : (y = n[5]);
      var C = y,
        b = d != null || i === !0 || l != null,
        v = C && g > 0 && b,
        S;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [c.fieldContainer, C && c.fieldContainerHover]), (n[6] = S))
        : (S = n[6]);
      var R;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: c.iconContainer,
            children: u.jsx(r("WDSIconIcCategory.react"), {}),
          })),
          (n[7] = R))
        : (R = n[7]);
      var L = v ? 1 : 0,
        E;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body3",
            children: o("WAWebBusinessProfileLabels").getCategoryLabel(),
          })),
          (n[8] = E))
        : (E = n[8]);
      var k;
      n[9] !== a
        ? ((k = a != null && a.map(m)), (n[9] = a), (n[10] = k))
        : (k = n[10]);
      var I;
      n[11] !== h || n[12] !== b || n[13] !== f || n[14] !== v
        ? ((I =
            b &&
            !v &&
            u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              size: "small",
              Icon: h,
              onPress: f,
            })),
          (n[11] = h),
          (n[12] = b),
          (n[13] = f),
          (n[14] = v),
          (n[15] = I))
        : (I = n[15]);
      var T;
      n[16] !== k || n[17] !== I
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 8,
            children: [k, I],
          })),
          (n[16] = k),
          (n[17] = I),
          (n[18] = T))
        : (T = n[18]);
      var D;
      n[19] !== L || n[20] !== T
        ? ((D = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            gap: 8,
            grow: L,
            children: [E, T],
          })),
          (n[19] = L),
          (n[20] = T),
          (n[21] = D))
        : (D = n[21]);
      var x;
      n[22] !== f || n[23] !== v
        ? ((x =
            v &&
            u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              label: s._(/*BTDS*/ "Edit"),
              xstyle: c.editButton,
              onPress: f,
            })),
          (n[22] = f),
          (n[23] = v),
          (n[24] = x))
        : (x = n[24]);
      var $;
      return (
        n[25] !== D || n[26] !== x
          ? (($ = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: S,
              children: [R, D, x],
            })),
            (n[25] = D),
            (n[26] = x),
            (n[27] = $))
          : ($ = n[27]),
        $
      );
    }
    function m(e) {
      return u.jsx(
        r("WDSChip.react"),
        { label: e.localized_display_name, isNeutral: !0 },
        e.id,
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      o(
        "WAWebBusinessProfileSMBUserJourneyLogger",
      ).BusinessProfileUserJourneyLogger.saveCategory(
        o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.UNCHANGED,
      );
    }
    l.WAWebBusinessCategoryField = d;
  },
  226,
);
