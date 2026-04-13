__d(
  "WAWebProductCatalogCatalogLinkDrawer.react",
  [
    "fbt",
    "WAWebBizSendCatalogLinkFlow.react",
    "WAWebCatalogShortLinkUtils",
    "WAWebCellFrame.react",
    "WAWebCopyLinkButton.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLinkText.react",
    "WAWebProductCatalogLogEvents",
    "WAWebSendLinkButton.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useContext,
      p = { surface: "smb-catalog-share-link" },
      _ = { prompt: { lineHeight: "x101yacv", $$css: !0 } },
      f = "catalog-link-anchor";
    function g(t) {
      var n = o("react-compiler-runtime").c(47),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.catalog,
        g = l.centerDrawer,
        h = l.contact,
        y = l.onBack,
        C = l.onCancel,
        b = l.onSend,
        v = l.prompt,
        S = m(o("WAWebDrawerContext").DrawerContext),
        R;
      n[3] !== c || n[4] !== S || n[5] !== b
        ? ((R = function () {
            (o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizSendCatalogLinkFlow.react"), {
                catalog: c,
                onSend: b,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebProductCatalogLogEvents").logShareCatalogViaWALinkClick({
                catalogOwnerWid: c.id,
                catalogContext: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(S),
              }));
          }),
          (n[3] = c),
          (n[4] = S),
          (n[5] = b),
          (n[6] = R))
        : (R = n[6]);
      var L = R,
        E;
      n[7] !== L
        ? ((E = function (t) {
            (t.preventDefault(), L());
          }),
          (n[7] = L),
          (n[8] = E))
        : (E = n[8]);
      var k = E,
        I;
      n[9] !== c.id || n[10] !== S
        ? ((I = function () {
            o("WAWebProductCatalogLogEvents").logShareCatalogCopyLinkClick({
              catalogOwnerWid: c.id,
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(S),
            });
          }),
          (n[9] = c.id),
          (n[10] = S),
          (n[11] = I))
        : (I = n[11]);
      var T = I,
        D;
      n[12] !== h.id
        ? ((D = d.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: h.id,
            size: 82,
            quality: o("WAWebDetailImage.react").DetailImageQuality.High,
          })),
          (n[12] = h.id),
          (n[13] = D))
        : (D = n[13]);
      var x = D,
        $,
        P;
      g && (($ = "labels"), (P = "center-column"));
      var N = $,
        M;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Catalog link")), (n[14] = M))
        : (M = n[14]);
      var w;
      n[15] !== y || n[16] !== C
        ? ((w = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: M,
            onBack: y,
            onCancel: C,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[15] = y),
          (n[16] = C),
          (n[17] = w))
        : (w = n[17]);
      var A = P,
        F;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = (u || (u = r("stylex"))).props([
            _.prompt,
            o("WAWebUISpacing").uiPadding.top0,
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.bottom10,
          ])),
          (n[18] = F))
        : (F = n[18]);
      var O;
      n[19] !== v
        ? ((O = d.jsx("div", babelHelpers.extends({}, F, { children: v }))),
          (n[19] = v),
          (n[20] = O))
        : (O = n[20]);
      var B;
      n[21] !== h
        ? ((B = d.jsx(o("WAWebName.react").Name, {
            contact: h,
            useVerifiedName: !0,
          })),
          (n[21] = h),
          (n[22] = B))
        : (B = n[22]);
      var W;
      n[23] !== c.id.user
        ? ((W = o("WAWebCatalogShortLinkUtils").createCatalogLink(c.id.user)),
          (n[23] = c.id.user),
          (n[24] = W))
        : (W = n[24]);
      var q;
      n[25] !== k || n[26] !== W
        ? ((q = d.jsx(r("WAWebProductCatalogLinkText.react"), {
            id: f,
            href: W,
            onClick: k,
            noHandle: !0,
          })),
          (n[25] = k),
          (n[26] = W),
          (n[27] = q))
        : (q = n[27]);
      var U;
      n[28] !== x || n[29] !== B || n[30] !== q
        ? ((U = d.jsx(r("WAWebCellFrame.react"), {
            image: x,
            primary: B,
            theme: "identity",
            secondary: q,
          })),
          (n[28] = x),
          (n[29] = B),
          (n[30] = q),
          (n[31] = U))
        : (U = n[31]);
      var V;
      n[32] !== L
        ? ((V = d.jsx(r("WAWebSendLinkButton.react"), { onClick: L })),
          (n[32] = L),
          (n[33] = V))
        : (V = n[33]);
      var H;
      n[34] !== T
        ? ((H = d.jsx(r("WAWebCopyLinkButton.react"), {
            elementId: f,
            onClick: T,
          })),
          (n[34] = T),
          (n[35] = H))
        : (H = n[35]);
      var G;
      n[36] !== P || n[37] !== O || n[38] !== U || n[39] !== V || n[40] !== H
        ? ((G = d.jsxs(r("WAWebDrawerBody.react"), {
            theme: A,
            children: [O, U, V, H],
          })),
          (n[36] = P),
          (n[37] = O),
          (n[38] = U),
          (n[39] = V),
          (n[40] = H),
          (n[41] = G))
        : (G = n[41]);
      var z;
      return (
        n[42] !== $ || n[43] !== i || n[44] !== G || n[45] !== w
          ? ((z = d.jsxs(
              r("WAWebDrawer.react"),
              { ref: i, theme: N, tsNavigationData: p, children: [w, G] },
              "catalog-link-drawer",
            )),
            (n[42] = $),
            (n[43] = i),
            (n[44] = G),
            (n[45] = w),
            (n[46] = z))
          : (z = n[46]),
        z
      );
    }
    l.default = g;
  },
  226,
);
