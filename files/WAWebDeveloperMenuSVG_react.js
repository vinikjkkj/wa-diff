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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(13),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "SVG Components",
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n, a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = "x1rife3k"),
          (a = {
            className: "x2b8uid x1280gxy xcldk2z xv6tirj x1phvje8 x1tiyuxx",
          }),
          (e[1] = n),
          (e[2] = a))
        : ((n = e[1]), (a = e[2]));
      var i;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x1380le5 xefnzgg"), (e[3] = i))
        : (i = e[3]);
      var l, u;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsxs("h2", {
            className: i,
            children: [
              "General",
              " ",
              s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Reference/Design_&_UI/Assets/SVG/",
                children: "SVG wiki",
              }),
              ".",
            ],
          })),
          (u = "x1380le5 xefnzgg"),
          (e[4] = l),
          (e[5] = u))
        : ((l = e[4]), (u = e[5]));
      var c, d;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsxs("h2", {
            className: u,
            children: [
              "To view all usable SVGs, please visit the",
              " ",
              s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: "https://www.internalfb.com/assets/set/whatsapp_web_icons?card_variant=SmallGrid",
                children: "Asset Manager Set",
              }),
            ],
          })),
          (d = "x1380le5 xefnzgg"),
          (e[6] = c),
          (e[7] = d))
        : ((c = e[6]), (d = e[7]));
      var m;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsxs("code", {
            children: [
              "import ",
              "{AccountBalanceIcon}",
              " from 'WAWebAccountBalanceIcon.react';",
            ],
          })),
          (e[8] = m))
        : (m = e[8]);
      var p, _;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsxs("h2", {
            className: d,
            children: [
              "In order to use any of these SVGs, simply import them into your file like `",
              m,
              "` then use them like any other component `",
              s.jsx("code", { children: "<AccountBalanceIcon />" }),
              "`",
            ],
          })),
          (p = s.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: "https://www.internalfb.com/intern/wiki/WhatsApp/CO/Bidirectionality/Mirroring/",
            children: "Important note about RTL compatibility",
          })),
          (e[9] = p),
          (e[10] = _))
        : ((p = e[9]), (_ = e[10]));
      var f;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s.jsx("code", { children: "directional" })), (e[11] = f))
        : (f = e[11]);
      var g;
      return (
        e[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.TowerLarge,
              title: "SVGs",
              testid: void 0,
              children: s.jsxs(r("WAWebDrawer.react"), {
                children: [
                  t,
                  s.jsx(r("WAWebDrawerBody.react"), {
                    className: n,
                    children: s.jsx(
                      "div",
                      babelHelpers.extends({}, a, {
                        children: s.jsxs(
                          o("WAWebCopyPasteSelectable.react").SelectableDiv,
                          {
                            selectable: !0,
                            children: [
                              l,
                              c,
                              _,
                              s.jsxs("p", {
                                children: [
                                  p,
                                  ". Use ",
                                  f,
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
                    ),
                  }),
                ],
              }),
            })),
            (e[12] = g))
          : (g = e[12]),
        g
      );
    }
    l.default = u;
  },
  98,
);
