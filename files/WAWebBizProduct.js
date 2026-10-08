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
    "useWAWebMsgValues",
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
      var n,
        a,
        i = t.displayAuthor,
        l = t.displayType,
        u = t.isCarouselCard,
        d = t.msgKey,
        h = t.onProductClick,
        y = t.quotedMsg,
        C = t.trusted,
        b = r("useWAWebUIM")(),
        v = _(function () {
          return new (o("WAWebProductCatalogSession").ProductCatalogSession)();
        }, []),
        S = o("WAWebDisplayType").isWideDisplay(l),
        R = o("useWAWebMsgValues").useMsgValues(d, [
          (n = o("WAWebMsgGetters")).getBusinessOwnerJid,
          n.getCaption,
          (a = o("WAWebFrontendMsgGetters")).getDir,
          n.getFooter,
          n.getId,
          n.getIsGroupMsg,
          a.getAsProductInquiry,
          a.getMediaData,
          n.getProductId,
          n.getProductImageCount,
          n.getRetailerId,
          a.getRtl,
          a.getSenderObj,
          n.getT,
          n.getTitle,
          n.getType,
          n.getUrl,
          n.getSender,
          n.getSupportsMessageFooterLinks,
          n.getIsNewsletterMsg,
        ]),
        L = R[0],
        E = R[1],
        k = R[2],
        I = R[3],
        T = R[4],
        D = R[5],
        x = R[6],
        $ = R[7],
        P = R[8],
        N = R[9],
        M = R[10],
        w = R[11],
        A = R[12],
        F = R[13],
        O = R[14],
        B = R[15],
        W = R[16],
        q = R[17],
        U = R[18],
        V = R[19];
      p(function () {
        var e = L != null && o("WAWebWidFactory").createWid(L);
        if (e != null) {
          var t = o("WAWebMsgCollection").MsgCollection.get(d);
          t != null &&
            o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(t);
        }
      }, []);
      var H = m(
          function (t) {
            if ((t && t.stopPropagation(), !(P == null || L == null))) {
              o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
              var n = r("WAWebProductCatalogGetLatestProduct")({
                productId: P,
                businessOwnerJid: L,
                msgT: F,
              });
              if (!n) {
                o("WAWebUtilsLogQplEvents").qplDropProductView();
                return;
              }
              var a = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                v,
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(L),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_MESSAGE,
              );
              o("WAWebProductCatalogLogEvents").logProductMsgClick({
                product: o("WAWebStateUtils").unproxy(n),
                catalogContext: a,
              });
              var i = o(
                "WAWebProductCatalogSession",
              ).ProductCatalogSession.toString();
              if (h) {
                h(n, i);
                return;
              }
              var l = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(d, V);
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
                  { refreshCarousel: !0, chat: l, product: n },
                ),
                { transition: "slide-left", uim: b, newDrawerContext: a },
              );
            }
          },
          [P, L, h, F, d, V, v, b],
        ),
        G = (E != null && E !== "") || I != null,
        z = G || u,
        j;
      if (G) {
        var K = {
          selectable: C,
          dirMismatch: w !== r("WAWebL10N").isRTL(),
          direction: k,
          inferLinesDirection: !0,
          formatters: o("WAWebFormatConfigurationConversation").Conversation({
            links:
              U && I != null ? o("WAWebMsgLinks").getLinksFromText(I, q) : [],
            phoneNumbers:
              U && I != null
                ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(I)
                : [],
            trusted: C,
            fromMe: T.fromMe,
          }),
        };
        j = c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh" },
              1: {
                className:
                  "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh x1hr2gdg",
              },
            }[!!r("WAWebL10N").isRTL() << 0],
            {
              children: [
                E != null
                  ? c.jsx(r("WAWebMessageSpacerText.react"), {
                      msgKey: d,
                      spacer: !1,
                      children: c.jsx(
                        o("WAWebEmojiText.react").EmojiText,
                        babelHelpers.extends({}, K, {
                          text: E,
                          xstyle: g.caption,
                          element: "p",
                        }),
                      ),
                    })
                  : null,
                I != null
                  ? c.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({}, K, {
                        text: I,
                        xstyle: [g.footer, E != null && g.footerMargin],
                      }),
                    )
                  : null,
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x10l6tqk xtijo5x x1o583il" },
                      1: { className: "x10l6tqk x1o583il xwukr4l" },
                    }[!!r("WAWebL10N").isRTL() << 0],
                    {
                      children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                        msgKey: d,
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      }
      var Q = i
        ? c.jsx("div", {
            className: "xyqdw3p x1icxu4v xs9asl8 x25sj25",
            children: c.jsx(r("WAWebMessageAuthor.react"), {
              msgKey: d,
              contact: A,
              displayType: l,
            }),
          })
        : null;
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1n2onr6 x1vjfegm x9f619 x13nahy2" },
            1: { className: "x1n2onr6 x1vjfegm x9f619 xmewjk2" },
          }[!!S << 0],
          {
            children: [
              Q,
              c.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                msgKey: d,
                mediaData: $,
                hideMeta: z,
                trusted: C,
                displayAuthor: !1,
                displayType: l,
                contentContainerClassName: "x1n2onr6 x6ikm8r x10wlt62",
                captionComponent: c.jsx(r("WAWebBizProductInfo.react"), {
                  trusted: C,
                  onClick: H,
                  msgKey: d,
                  displayType: l,
                }),
                thumbClassName:
                  "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk x1i282gy xx9ypkp",
                onThumbClick: H,
                quotedMsg: y,
              }),
              j,
              c.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: [
                  g.productCta,
                  g.productCtaColorV2,
                  G && g.btnBorder,
                  f.paddingTop7,
                  u
                    ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0
                    : f.paddingBottom10,
                ],
                onClick: H,
                text: s._(/*BTDS*/ "View"),
              }),
            ],
          },
        ),
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
