__d(
  "WAWebBizProduct",
  [
    "fbt",
    "WALogger",
    "WAWebBizProductInfo.react",
    "WAWebCatalogCollection",
    "WAWebContactUtils",
    "WAWebDisplayType",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageAuthor.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePicture.react",
    "WAWebMessageSpacerText.react",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogGetLatestProduct",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebStateUtils",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWidFactory",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = {
        paddingTop7: { paddingTop: "xm7lytj", $$css: !0 },
        paddingBottom10: { paddingBottom: "x1a8lsjc", $$css: !0 },
      },
      g = {
        productCta: {
          display: "x1lliihq",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          color: "x1ph7ams",
          textAlign: "x2b8uid",
          cursor: "x1ypdohk",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        productCtaColorV2: { color: "xo1mcw5", $$css: !0 },
        btnBorder: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        caption: { fontSize: "x1f6kntn", $$css: !0 },
        footer: {
          display: "x1lliihq",
          fontSize: "x1nxh6w3",
          lineHeight: "xwn7fz2",
          color: "xhslqc4",
          $$css: !0,
        },
        footerMargin: { marginTop: "x1gslohp", $$css: !0 },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(83),
        a = t.displayAuthor,
        i = t.displayType,
        l = t.isCarouselCard,
        u = t.msgKey,
        d = t.onProductClick,
        m = t.quotedMsg,
        _ = t.trusted,
        h = r("useWAWebUIM")(),
        y;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = new (o("WAWebProductCatalogSession").ProductCatalogSession)()),
          (n[0] = y))
        : (y = n[0]);
      var C = y,
        b = o("WAWebDisplayType").isWideDisplay(i),
        v;
      if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
        var S;
        ((v = [
          (S = o("WAWebMsgGetters")).getBusinessOwnerJid,
          S.getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          S.getFooter,
          S.getId,
          S.getIsGroupMsg,
          S.getProductId,
          S.getProductImageCount,
          S.getRetailerId,
          o("WAWebFrontendMsgGetters").getRtl,
          S.getT,
          S.getTitle,
          S.getType,
          S.getUrl,
          S.getSender,
          S.getSupportsMessageFooterLinks,
          S.getIsNewsletterMsg,
        ]),
          (n[1] = v));
      } else v = n[1];
      var R = o("useWAWebMsgValues").useMsgValues(
          u,
          o("WAWebMsgCasts").castToProductOrInteractiveMsg,
          v,
        ),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[6],
        x = R[9],
        $ = R[10],
        P = R[14],
        N = R[15],
        M = R[16],
        w;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = [
            o("WAWebFrontendMsgGetters").getAsProductInquiry,
            o("WAWebFrontendMsgGetters").getMediaData,
            o("WAWebFrontendMsgGetters").getSenderObj,
          ]),
          (n[2] = w))
        : (w = n[2]);
      var A = o("useWAWebMsgValues").useMsgValues(u, w),
        F = A[1],
        O = A[2],
        B;
      n[3] !== L || n[4] !== u
        ? ((B = function () {
            var e = L != null && o("WAWebWidFactory").createWid(L);
            if (e != null) {
              var t = o("WAWebMsgCollection").MsgCollection.get(u);
              t != null &&
                o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(
                  t,
                );
            }
          }),
          (n[3] = L),
          (n[4] = u),
          (n[5] = B))
        : (B = n[5]);
      var W = r("useWAWebStableCallback")(B),
        q,
        U;
      (n[6] !== W
        ? ((q = function () {
            return W();
          }),
          (U = [W]),
          (n[6] = W),
          (n[7] = q),
          (n[8] = U))
        : ((q = n[7]), (U = n[8])),
        p(q, U));
      var V;
      n[9] !== L ||
      n[10] !== M ||
      n[11] !== u ||
      n[12] !== d ||
      n[13] !== D ||
      n[14] !== $ ||
      n[15] !== h
        ? ((V = function (n) {
            if ((n && n.stopPropagation(), !(D == null || L == null))) {
              o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
              var t = r("WAWebProductCatalogGetLatestProduct")({
                productId: D,
                businessOwnerJid: L,
                msgT: $,
              });
              if (!t) {
                o("WAWebUtilsLogQplEvents").qplDropProductView();
                return;
              }
              var a = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                C,
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(L),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_MESSAGE,
              );
              o("WAWebProductCatalogLogEvents").logProductMsgClick({
                product: o("WAWebStateUtils").unproxy(t),
                catalogContext: a,
              });
              var i = o(
                "WAWebProductCatalogSession",
              ).ProductCatalogSession.toString();
              if (d) {
                d(t, i);
                return;
              }
              var l = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(u, M);
              if (l == null) {
                (o("WAWebUtilsLogQplEvents").qplDropProductView(),
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[product-msg] no chat for the product message",
                        ])),
                    )
                    .sendLogs("biz-product-missing-chat"));
                return;
              }
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                c.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  { refreshCarousel: !0, chat: l, product: t },
                ),
                { transition: "slide-left", uim: h, newDrawerContext: a },
              );
            }
          }),
          (n[9] = L),
          (n[10] = M),
          (n[11] = u),
          (n[12] = d),
          (n[13] = D),
          (n[14] = $),
          (n[15] = h),
          (n[16] = V))
        : (V = n[16]);
      var H = V,
        G = (E != null && E !== "") || I != null,
        z = G || l,
        j;
      if (G) {
        var K;
        n[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = r("WAWebL10N").isRTL()), (n[17] = K))
          : (K = n[17]);
        var Q = x !== K,
          X;
        n[18] !== I ||
        n[19] !== T.fromMe ||
        n[20] !== P ||
        n[21] !== N ||
        n[22] !== _
          ? ((X = o("WAWebFormatConfigurationConversation").Conversation({
              links:
                N && I != null ? o("WAWebMsgLinks").getLinksFromText(I, P) : [],
              phoneNumbers:
                N && I != null
                  ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(I)
                  : [],
              trusted: _,
              fromMe: T.fromMe,
            })),
            (n[18] = I),
            (n[19] = T.fromMe),
            (n[20] = P),
            (n[21] = N),
            (n[22] = _),
            (n[23] = X))
          : (X = n[23]);
        var Y;
        n[24] !== k || n[25] !== X || n[26] !== Q || n[27] !== _
          ? ((Y = {
              selectable: _,
              dirMismatch: Q,
              direction: k,
              inferLinesDirection: !0,
              formatters: X,
            }),
            (n[24] = k),
            (n[25] = X),
            (n[26] = Q),
            (n[27] = _),
            (n[28] = Y))
          : (Y = n[28]);
        var J = Y,
          Z;
        n[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = {
              0: { className: "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh" },
              1: {
                className:
                  "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh x1hr2gdg",
              },
            }[!!r("WAWebL10N").isRTL() << 0]),
            (n[29] = Z))
          : (Z = n[29]);
        var ee;
        n[30] !== E || n[31] !== u || n[32] !== J
          ? ((ee =
              E != null
                ? c.jsx(r("WAWebMessageSpacerText.react"), {
                    msgKey: u,
                    spacer: !1,
                    children: c.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({}, J, {
                        text: E,
                        xstyle: g.caption,
                        element: "p",
                      }),
                    ),
                  })
                : null),
            (n[30] = E),
            (n[31] = u),
            (n[32] = J),
            (n[33] = ee))
          : (ee = n[33]);
        var te;
        n[34] !== E || n[35] !== I || n[36] !== J
          ? ((te =
              I != null
                ? c.jsx(
                    o("WAWebEmojiText.react").EmojiText,
                    babelHelpers.extends({}, J, {
                      text: I,
                      xstyle: [g.footer, E != null && g.footerMargin],
                    }),
                  )
                : null),
            (n[34] = E),
            (n[35] = I),
            (n[36] = J),
            (n[37] = te))
          : (te = n[37]);
        var ne;
        n[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((ne = {
              0: { className: "x10l6tqk xtijo5x x1o583il" },
              1: { className: "x10l6tqk x1o583il xwukr4l" },
            }[!!r("WAWebL10N").isRTL() << 0]),
            (n[38] = ne))
          : (ne = n[38]);
        var re;
        n[39] !== u
          ? ((re = c.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: u })),
            (n[39] = u),
            (n[40] = re))
          : (re = n[40]);
        var oe;
        n[41] !== ne || n[42] !== re
          ? ((oe = c.jsx(
              "div",
              babelHelpers.extends({}, ne, { children: re }),
            )),
            (n[41] = ne),
            (n[42] = re),
            (n[43] = oe))
          : (oe = n[43]);
        var ae;
        (n[44] !== Z || n[45] !== ee || n[46] !== te || n[47] !== oe
          ? ((ae = c.jsxs(
              "div",
              babelHelpers.extends({}, Z, { children: [ee, te, oe] }),
            )),
            (n[44] = Z),
            (n[45] = ee),
            (n[46] = te),
            (n[47] = oe),
            (n[48] = ae))
          : (ae = n[48]),
          (j = ae));
      }
      var ie;
      n[49] !== a || n[50] !== i || n[51] !== u || n[52] !== O
        ? ((ie = a
            ? c.jsx("div", {
                className: "xyqdw3p x1icxu4v xs9asl8 x25sj25",
                children: c.jsx(r("WAWebMessageAuthor.react"), {
                  msgKey: u,
                  contact: O,
                  displayType: i,
                }),
              })
            : null),
          (n[49] = a),
          (n[50] = i),
          (n[51] = u),
          (n[52] = O),
          (n[53] = ie))
        : (ie = n[53]);
      var le = ie,
        se = {
          0: { className: "x1n2onr6 x1vjfegm x9f619 x13nahy2" },
          1: { className: "x1n2onr6 x1vjfegm x9f619 xmewjk2" },
        }[!!b << 0],
        ue;
      n[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = "x1n2onr6 x6ikm8r x10wlt62"), (n[54] = ue))
        : (ue = n[54]);
      var ce;
      n[55] !== i || n[56] !== H || n[57] !== u || n[58] !== _
        ? ((ce = c.jsx(r("WAWebBizProductInfo.react"), {
            trusted: _,
            onClick: H,
            msgKey: u,
            displayType: i,
          })),
          (n[55] = i),
          (n[56] = H),
          (n[57] = u),
          (n[58] = _),
          (n[59] = ce))
        : (ce = n[59]);
      var de;
      n[60] === Symbol.for("react.memo_cache_sentinel")
        ? ((de =
            "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk x1i282gy xx9ypkp"),
          (n[60] = de))
        : (de = n[60]);
      var me;
      n[61] !== i ||
      n[62] !== H ||
      n[63] !== F ||
      n[64] !== u ||
      n[65] !== m ||
      n[66] !== z ||
      n[67] !== ce ||
      n[68] !== _
        ? ((me = c.jsx(r("WAWebMessagePicture.react"), {
            msgKey: u,
            mediaData: F,
            hideMeta: z,
            trusted: _,
            displayAuthor: !1,
            displayType: i,
            contentContainerClassName: ue,
            captionComponent: ce,
            thumbClassName: de,
            onThumbClick: H,
            quotedMsg: m,
          })),
          (n[61] = i),
          (n[62] = H),
          (n[63] = F),
          (n[64] = u),
          (n[65] = m),
          (n[66] = z),
          (n[67] = ce),
          (n[68] = _),
          (n[69] = me))
        : (me = n[69]);
      var pe = j,
        _e = G && g.btnBorder,
        fe = l
          ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0
          : f.paddingBottom10,
        ge;
      n[70] !== _e || n[71] !== fe
        ? ((ge = [g.productCta, g.productCtaColorV2, _e, f.paddingTop7, fe]),
          (n[70] = _e),
          (n[71] = fe),
          (n[72] = ge))
        : (ge = n[72]);
      var he;
      n[73] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = s._(/*BTDS*/ "View")), (n[73] = he))
        : (he = n[73]);
      var ye;
      n[74] !== H || n[75] !== ge
        ? ((ye = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: ge,
            onClick: H,
            text: he,
          })),
          (n[74] = H),
          (n[75] = ge),
          (n[76] = ye))
        : (ye = n[76]);
      var Ce;
      return (
        n[77] !== le ||
        n[78] !== j ||
        n[79] !== me ||
        n[80] !== ye ||
        n[81] !== se
          ? ((Ce = c.jsxs(
              "div",
              babelHelpers.extends({}, se, { children: [le, me, pe, ye] }),
            )),
            (n[77] = le),
            (n[78] = j),
            (n[79] = me),
            (n[80] = ye),
            (n[81] = se),
            (n[82] = Ce))
          : (Ce = n[82]),
        Ce
      );
    }
    l.default = h;
  },
  226,
);
