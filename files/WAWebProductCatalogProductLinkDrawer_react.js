__d(
  "WAWebProductCatalogProductLinkDrawer.react",
  [
    "fbt",
    "WAWebBizSendProductButton.react",
    "WAWebBizSendProductLinkFlow.react",
    "WAWebCatalogShortLinkUtils",
    "WAWebCellFrame.react",
    "WAWebCmd",
    "WAWebCopyLinkButton.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogLinkText.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductThumb.react",
    "WAWebSendLinkButton.react",
    "WAWebStateUtils",
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
      p = { surface: "smb-catalog-share-product-link" },
      _ = {
        prompt: { lineHeight: "x101yacv", $$css: !0 },
        productImageContainer: {
          width: "xjzcg3w",
          height: "xcbkimw",
          $$css: !0,
        },
        productThumbContainer: {
          position: "x170k5ml",
          backgroundColor: null,
          $$css: !0,
        },
      },
      f = "product-link-anchor";
    function g(e) {
      var t = e.getProductImageCollectionHead();
      return t
        ? d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
            xstyle: _.productImageContainer,
            mediaData: t.mediaData,
          })
        : d.jsx(
            o("WAWebProductCatalogProductThumb.react").ProductThumbPlaceholder,
            { xstyle: _.productThumbContainer },
          );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = o("react-compiler-runtime").c(53),
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
        c = l.centerDrawer,
        h = l.onBack,
        y = l.onCancel,
        C = l.onSend,
        b = l.product,
        v = l.prompt,
        S = l.sendProductMsg,
        R = m(o("WAWebDrawerContext").DrawerContext),
        L;
      n[3] !== R || n[4] !== C || n[5] !== b
        ? ((L = function () {
            (o("WAWebModalManager").ModalManager.open(
              d.jsx(r("WAWebBizSendProductLinkFlow.react"), {
                product: b,
                onSend: C,
              }),
              { transition: "modal-flow" },
            ),
              o("WAWebProductCatalogLogEvents").logShareProductViaWALinkClick({
                product: b,
                catalogContext: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(R),
              }));
          }),
          (n[3] = R),
          (n[4] = C),
          (n[5] = b),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k;
      n[7] !== E
        ? ((k = function (t) {
            (t.preventDefault(), E());
          }),
          (n[7] = E),
          (n[8] = k))
        : (k = n[8]);
      var I = k,
        T;
      n[9] !== R || n[10] !== b
        ? ((T = function () {
            o("WAWebProductCatalogLogEvents").logShareProductCopyLinkClick({
              product: b,
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(R),
            });
          }),
          (n[9] = R),
          (n[10] = b),
          (n[11] = T))
        : (T = n[11]);
      var D = T,
        x;
      n[12] !== C || n[13] !== b
        ? ((x = function () {
            o("WAWebCmd").Cmd.attachProduct({
              product: o("WAWebStateUtils").unproxy(b),
              onSend: C,
            });
          }),
          (n[12] = C),
          (n[13] = b),
          (n[14] = x))
        : (x = n[14]);
      var $ = x,
        P;
      n[15] !== b.catalogWid.user || n[16] !== b.id
        ? ((P = o("WAWebCatalogShortLinkUtils").createProductLink(
            b.catalogWid.user,
            b.id.toString(),
          )),
          (n[15] = b.catalogWid.user),
          (n[16] = b.id),
          (n[17] = P))
        : (P = n[17]);
      var N = P,
        M,
        w;
      c && ((M = "labels"), (w = "center-column"));
      var A;
      if (S != null) {
        var F;
        (n[18] !== $
          ? ((F = d.jsx(r("WAWebBizSendProductButton.react"), { onClick: $ })),
            (n[18] = $),
            (n[19] = F))
          : (F = n[19]),
          (A = F));
      } else {
        var O;
        (n[20] !== E
          ? ((O = d.jsx(r("WAWebSendLinkButton.react"), { onClick: E })),
            (n[20] = E),
            (n[21] = O))
          : (O = n[21]),
          (A = O));
      }
      var B = M,
        W;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Product link")), (n[22] = W))
        : (W = n[22]);
      var q;
      n[23] !== h || n[24] !== y
        ? ((q = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: W,
            onBack: h,
            onCancel: y,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (n[23] = h),
          (n[24] = y),
          (n[25] = q))
        : (q = n[25]);
      var U = w,
        V;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = (u || (u = r("stylex"))).props(
            _.prompt,
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.bottom10,
          )),
          (n[26] = V))
        : (V = n[26]);
      var H;
      n[27] !== v
        ? ((H = d.jsxs(
            "div",
            babelHelpers.extends({}, V, { children: [" ", v, " "] }),
          )),
          (n[27] = v),
          (n[28] = H))
        : (H = n[28]);
      var G;
      n[29] !== b ? ((G = g(b)), (n[29] = b), (n[30] = G)) : (G = n[30]);
      var z;
      n[31] !== b.name
        ? ((z = d.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: b.name,
            direction: "auto",
          })),
          (n[31] = b.name),
          (n[32] = z))
        : (z = n[32]);
      var j;
      n[33] !== I || n[34] !== N
        ? ((j = d.jsx(r("WAWebProductCatalogLinkText.react"), {
            id: f,
            href: N,
            onClick: I,
            noHandle: !0,
          })),
          (n[33] = I),
          (n[34] = N),
          (n[35] = j))
        : (j = n[35]);
      var K;
      n[36] !== G || n[37] !== z || n[38] !== j
        ? ((K = d.jsx(r("WAWebCellFrame.react"), {
            image: G,
            primary: z,
            theme: "identity",
            secondary: j,
          })),
          (n[36] = G),
          (n[37] = z),
          (n[38] = j),
          (n[39] = K))
        : (K = n[39]);
      var Q;
      n[40] !== D
        ? ((Q = d.jsx(r("WAWebCopyLinkButton.react"), {
            elementId: f,
            onClick: D,
          })),
          (n[40] = D),
          (n[41] = Q))
        : (Q = n[41]);
      var X;
      n[42] !== w || n[43] !== A || n[44] !== H || n[45] !== K || n[46] !== Q
        ? ((X = d.jsxs(r("WAWebDrawerBody.react"), {
            theme: U,
            children: [H, K, A, Q],
          })),
          (n[42] = w),
          (n[43] = A),
          (n[44] = H),
          (n[45] = K),
          (n[46] = Q),
          (n[47] = X))
        : (X = n[47]);
      var Y;
      return (
        n[48] !== M || n[49] !== i || n[50] !== X || n[51] !== q
          ? ((Y = d.jsxs(
              r("WAWebDrawer.react"),
              { ref: i, theme: B, tsNavigationData: p, children: [q, X] },
              "product-link-drawer",
            )),
            (n[48] = M),
            (n[49] = i),
            (n[50] = X),
            (n[51] = q),
            (n[52] = Y))
          : (Y = n[52]),
        Y
      );
    }
    l.default = h;
  },
  226,
);
