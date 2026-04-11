__d(
  "WAWebBizAdDetailsContent.react",
  [
    "fbt",
    "WAWebBizAdDetailsActionButtons.react",
    "WAWebBizAdDetailsThumbnail.react",
    "WAWebFlex.react",
    "WAWebFlexBox.react",
    "WAWebL10nGetRenderedLocale",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: { paddingBottom: "x12xbjc7", $$css: !0 },
        textContent: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        n,
        a,
        i = e.item,
        l = e.onDelete,
        d = e.onViewPreview,
        m = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .replace("_", "-"),
        p = i.startTime,
        _ =
          p != null
            ? new Intl.DateTimeFormat(m, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: !0,
              })
                .format(p * 1e3)
                .replace(" AM", "am")
                .replace(" PM", "pm")
            : null,
        f = i.childAttachments != null && i.childAttachments.length > 0,
        g = f
          ? (t =
              (n = i.childAttachments) == null || (n = n[0]) == null
                ? void 0
                : n.picture) != null
            ? t
            : i.thumbnailUrl
          : (a = i.highResImageUrl) != null
            ? a
            : i.thumbnailUrl;
      return u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
        gap: 4,
        xstyle: c.container,
        children: [
          u.jsx(r("WAWebBizAdDetailsThumbnail.react"), {
            thumbnailUrl: g,
            onClick: d,
          }),
          u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: c.textContent,
            children: [
              _ != null &&
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  children: u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: d,
                    children: u.jsx(r("WDSText.react"), {
                      type: "Headline1",
                      colorName: "contentDefault",
                      children: s._(/*BTDS*/ "Created {date}", [
                        s._param("date", _),
                      ]),
                    }),
                  }),
                }),
              u.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                children: u.jsx(r("WDSTextualLink.react"), {
                  textConfig: "Body2Emphasized",
                  onClick: d,
                  children: s._(/*BTDS*/ "Ad preview"),
                }),
              }),
            ],
          }),
          u.jsx(r("WAWebBizAdDetailsActionButtons.react"), {
            item: i,
            onDelete: l,
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
