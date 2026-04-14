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
      var t = e.onRemoveItem,
        n = e.selectedCategories,
        a = r("WAWebL10N").isRTL();
      return u.jsx(u.Fragment, {
        children:
          n != null &&
          n.length > 0 &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: c.chipsContainer,
                children: n.map(function (e) {
                  var n = function () {
                    return t(e.id);
                  };
                  return u.jsx(
                    r("WAWebChipButton.react"),
                    {
                      "aria-label": s._(/*BTDS*/ "Unselect category"),
                      onClick: n,
                      label: e.localized_display_name,
                      PostfixIcon: a
                        ? void 0
                        : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
                      PrefixIcon: a
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
          }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
