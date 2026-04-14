__d(
  "WAWebDeveloperMenuSVG.react",
  [
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebExternalLink.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.TowerLarge,
        title: "SVGs",
        testid: void 0,
        children: s.jsxs(r("WAWebDrawer.react"), {
          children: [
            s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: "SVG Components",
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
              onCancel: o("WAWebModalManager").closeModalManager,
            }),
            s.jsx(r("WAWebDrawerBody.react"), {
              className: "x1rife3k",
              children: s.jsx("div", {
                className: "x2b8uid x1280gxy xcldk2z xv6tirj x1phvje8 x1tiyuxx",
                children: s.jsxs(
                  o("WAWebCopyPasteSelectable.react").SelectableDiv,
                  {
                    selectable: !0,
                    children: [
                      s.jsxs("h2", {
                        className: "x1380le5 xefnzgg",
                        children: [
                          "General",
                          " ",
                          s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Reference/Design_&_UI/Assets/SVG/",
                            children: "SVG wiki",
                          }),
                          ".",
                        ],
                      }),
                      s.jsxs("h2", {
                        className: "x1380le5 xefnzgg",
                        children: [
                          "To view all usable SVGs, please visit the",
                          " ",
                          s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: "https://www.internalfb.com/assets/set/whatsapp_web_icons?card_variant=SmallGrid",
                            children: "Asset Manager Set",
                          }),
                        ],
                      }),
                      s.jsxs("h2", {
                        className: "x1380le5 xefnzgg",
                        children: [
                          "In order to use any of these SVGs, simply import them into your file like `",
                          s.jsxs("code", {
                            children: [
                              "import ",
                              "{AccountBalanceIcon}",
                              " from 'WAWebAccountBalanceIcon.react';",
                            ],
                          }),
                          "` then use them like any other component `",
                          s.jsx("code", { children: "<AccountBalanceIcon />" }),
                          "`",
                        ],
                      }),
                      s.jsxs("p", {
                        children: [
                          s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: "https://www.internalfb.com/intern/wiki/WhatsApp/CO/Bidirectionality/Mirroring/",
                            children: "Important note about RTL compatibility",
                          }),
                          ". Use ",
                          s.jsx("code", { children: "directional" }),
                          " prop of",
                          " ",
                          s.jsx("code", { children: "<SVG />" }),
                          " for automatic mirroring of icons.",
                        ],
                      }),
                    ],
                  },
                ),
              }),
            }),
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
