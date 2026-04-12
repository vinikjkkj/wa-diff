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
        n = e.categories,
        a = e.locked,
        i = e.onLockedClick,
        l = e.saveBusinessProfile,
        d = function () {
          if (
            (o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.clickCategory(),
            a === !0)
          ) {
            i != null && i();
            return;
          }
          l != null &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebBusinessCategoryModal.react"), {
                initialCategories: n != null ? n : [],
                saveBusinessProfile: l,
                onCancel: function () {
                  o(
                    "WAWebBusinessProfileSMBUserJourneyLogger",
                  ).BusinessProfileUserJourneyLogger.saveCategory(
                    o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                      .UNCHANGED,
                  );
                },
                onSaveSuccess: r("WAWebNoop"),
              }),
            );
        },
        m = (t = n == null ? void 0 : n.length) != null ? t : 0,
        p = r(m === 3 ? "WDSIconIcEdit.react" : "WDSIconIcAdd.react"),
        _ = o("WAWebBizGatingUtils").businessProfileRefreshV2Enabled(),
        f = l != null || a === !0 || i != null,
        g = _ && m > 0 && f;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 12,
        xstyle: [c.fieldContainer, _ && c.fieldContainerHover],
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: c.iconContainer,
            children: u.jsx(r("WDSIconIcCategory.react"), {}),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            justify: "center",
            gap: 8,
            grow: g ? 1 : 0,
            children: [
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body3",
                children: o("WAWebBusinessProfileLabels").getCategoryLabel(),
              }),
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                gap: 8,
                children: [
                  n != null &&
                    n.map(function (e) {
                      return u.jsx(
                        r("WDSChip.react"),
                        { label: e.localized_display_name, isNeutral: !0 },
                        e.id,
                      );
                    }),
                  f &&
                    !g &&
                    u.jsx(r("WDSButton.react"), {
                      variant: "tonal",
                      size: "small",
                      Icon: p,
                      onPress: d,
                    }),
                ],
              }),
            ],
          }),
          g &&
            u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              label: s._(/*BTDS*/ "Edit"),
              xstyle: c.editButton,
              onPress: d,
            }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WAWebBusinessCategoryField = d));
  },
  226,
);
