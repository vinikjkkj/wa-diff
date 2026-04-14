__d(
  "WAWebChipSelectorFooter.react",
  [
    "fbt",
    "WAWebChipButton.react",
    "WAWebFlex.react",
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
      };
    function d(e) {
      var t = r("WAWebL10N").isRTL();
      return u.jsx("div", {
        className:
          "x1xrf6ya xcldk2z xa0aww2 x1phvje8 x178xt8z x13fuv20 xx42vgk",
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "start",
          justify: "start",
          wrap: "wrap",
          children: e.categories.map(function (n) {
            var a = function () {
              return e.onRemoveItem(n.id);
            };
            return u.jsx(
              r("WAWebChipButton.react"),
              {
                "aria-label": s._(/*BTDS*/ "Unselect category"),
                onClick: a,
                label: n.localized_display_name,
                PostfixIcon: t
                  ? void 0
                  : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
                PrefixIcon: t
                  ? o("WAWebRoundXInvIcon.react").RoundXInvIcon
                  : void 0,
                xstyle: c.chip,
              },
              n.id.toString(),
            );
          }),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
