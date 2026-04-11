__d(
  "WAWebProductCatalogProductImageViewerHeader.react",
  [
    "WAWebCellFrame.react",
    "WAWebContactCollection",
    "WAWebDescriptionRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebMenuBar.react",
    "WAWebName.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebXViewerIcon.react",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        productNameIcon: { color: "xhslqc4", $$css: !0 },
        info: {
          flexGrow: "x1iyjqo2",
          order: "x14yy4lh",
          marginInlineEnd: "x1yh7se0",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        mediaPanelTools: { order: "x9ek82g", $$css: !0 },
      };
    function d(t) {
      var n = t.isImgZoomedIn,
        a = t.onClose,
        i = t.product,
        l = o("useWAWebModelValues").useModelValues(i, ["name", "catalogWid"]),
        s = u.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}),
        d = o("WAWebContactCollection").ContactCollection.get(l.catalogWid),
        m;
      if (d) {
        var p = u.jsx(o("WAWebName.react").Name, {
            contact: d,
            selectable: !0,
            useVerifiedName: !0,
          }),
          _ = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: d.id,
            size: 40,
          }),
          f = o("WAWebDescriptionRefreshedIcon.react").DescriptionRefreshedIcon,
          g = u.jsxs("div", {
            children: [
              u.jsx(f, {
                xstyle: [c.productNameIcon, o("WAWebUISpacing").uiMargin.end2],
                displayInline: !0,
                width: 17,
                height: 20,
              }),
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: l.name,
                titlify: !0,
                ellipsify: !0,
              }),
            ],
          });
        m = u.jsx(r("WAWebCellFrame.react"), {
          idle: !0,
          image: _,
          primary: p,
          secondary: g,
          theme: "media",
        });
      } else
        m = u.jsx(o("WAWebText.react").WAWebTextLarge, {
          as: "span",
          paddingStart: 12,
          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l.name,
            titlify: !0,
            ellipsify: !0,
          }),
        });
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 x1c4vz4f x15zctf7 x6s0dn4 xng8ra x1280gxy xeg851g x1d8287x xeerw82",
            },
            1: {
              className:
                "x78zum5 x1c4vz4f x15zctf7 x6s0dn4 xng8ra x1280gxy xeg851g x1d8287x xeerw82 xlshs6z xg01cxk",
            },
          }[!!n << 0],
          {
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.info,
                    o("WAWebUISpacing").uiMargin.start5,
                  ),
                  { children: m },
                ),
              ),
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(
                    c.mediaPanelTools,
                    o("WAWebUISpacing").uiMargin.end18,
                  ),
                  {
                    children: u.jsx(
                      o("WAWebMenuBar.react").MenuBar,
                      {
                        theme: "strong",
                        children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
                          testid: void 0,
                          icon: s,
                          title: r("WAWebFbtCommon")("Close"),
                          onClick: a,
                        }),
                      },
                      "media-panel-header",
                    ),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
