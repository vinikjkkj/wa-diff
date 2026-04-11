__d(
  "WAWebBusinessCategoryList.react",
  [
    "fbt",
    "WAWebChipButton.react",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebL10N",
    "WAWebRoundXInvIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        chip: {
          marginTop: "x1380le5",
          marginInlineEnd: "xqf2s3x",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        chipsContainer: {
          flexWrap: "x1a02dak",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onRemoveItem,
        a = e.selectedCategories,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = r("WAWebL10N").isRTL()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        d;
      t[1] !== n || t[2] !== a
        ? ((d =
            a != null &&
            a.length > 0 &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: c.chipsContainer,
                  children: a.map(function (e) {
                    var t = function () {
                      return n(e.id);
                    };
                    return u.jsx(
                      r("WAWebChipButton.react"),
                      {
                        "aria-label": s._(/*BTDS*/ "Unselect category"),
                        onClick: t,
                        label: e.localized_display_name,
                        PostfixIcon: l
                          ? void 0
                          : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
                        PrefixIcon: l
                          ? o("WAWebRoundXInvIcon.react").RoundXInvIcon
                          : void 0,
                        xstyle: c.chip,
                      },
                      e.id,
                    );
                  }),
                }),
                u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
              ],
            })),
          (t[1] = n),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m;
      return (
        t[4] !== d
          ? ((m = u.jsx(u.Fragment, { children: d })), (t[4] = d), (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = d;
  },
  226,
);
