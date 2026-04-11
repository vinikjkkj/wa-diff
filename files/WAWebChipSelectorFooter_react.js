__d(
  "WAWebChipSelectorFooter.react",
  [
    "fbt",
    "WAWebChipButton.react",
    "WAWebFlex.react",
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
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = r("WAWebL10N").isRTL()), (t[0] = n))
        : (n = t[0]);
      var a = n,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x1xrf6ya xcldk2z xa0aww2 x1phvje8 x178xt8z x13fuv20 xx42vgk",
          }),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== e
        ? ((l = e.categories.map(function (t) {
            var n = function () {
              return e.onRemoveItem(t.id);
            };
            return u.jsx(
              r("WAWebChipButton.react"),
              {
                "aria-label": s._(/*BTDS*/ "Unselect category"),
                onClick: n,
                label: t.localized_display_name,
                PostfixIcon: a
                  ? void 0
                  : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
                PrefixIcon: a
                  ? o("WAWebRoundXInvIcon.react").RoundXInvIcon
                  : void 0,
                xstyle: c.chip,
              },
              t.id.toString(),
            );
          })),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var d;
      return (
        t[4] !== l
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "start",
                  justify: "start",
                  wrap: "wrap",
                  children: l,
                }),
              }),
            )),
            (t[4] = l),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = d;
  },
  226,
);
