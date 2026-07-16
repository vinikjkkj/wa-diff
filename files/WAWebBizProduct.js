__d(
  "WAWebBizProduct",
  [
    "fbt",
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
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = {
        paddingTop7: { paddingTop: "xm7lytj", $$css: !0 },
        paddingBottom10: { paddingBottom: "x1a8lsjc", $$css: !0 },
      },
      f = {
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
    function g(e) {
      var t,
        n,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isCarouselCard,
        c = e.msg,
        g = e.onProductClick,
        h = e.quotedMsg,
        y = e.trusted,
        C = r("useWAWebUIM")(),
        b = p(function () {
          return new (o("WAWebProductCatalogSession").ProductCatalogSession)();
        }, []),
        v = o("WAWebDisplayType").isWideDisplay(i),
        S = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getBusinessOwnerJid,
          t.getCaption,
          (n = o("WAWebFrontendMsgGetters")).getDir,
          t.getFooter,
          t.getId,
          t.getIsGroupMsg,
          n.getAsProductInquiry,
          n.getMediaData,
          t.getProductId,
          t.getProductImageCount,
          t.getRetailerId,
          n.getRtl,
          n.getSenderObj,
          t.getT,
          t.getTitle,
          t.getType,
          t.getUrl,
        ]),
        R = S[0],
        L = S[1],
        E = S[2],
        k = S[3],
        I = S[4],
        T = S[5],
        D = S[6],
        x = S[7],
        $ = S[8],
        P = S[9],
        N = S[10],
        M = S[11],
        w = S[12],
        A = S[13],
        F = S[14],
        O = S[15],
        B = S[16];
      m(function () {
        var e = R != null && o("WAWebWidFactory").createWid(R);
        e != null &&
          o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(
            o("WAWebStateUtils").unproxy(c.unsafe()),
          );
      }, []);
      var W = n.getChat(e.msg.unsafe()),
        q = d(
          function (e) {
            if ((e && e.stopPropagation(), !($ == null || R == null))) {
              o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
              var t = r("WAWebProductCatalogGetLatestProduct")({
                productId: $,
                businessOwnerJid: R,
                msgT: A,
              });
              if (!t) {
                o("WAWebUtilsLogQplEvents").qplDropProductView();
                return;
              }
              var n = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                b,
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(R),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_MESSAGE,
              );
              o("WAWebProductCatalogLogEvents").logProductMsgClick({
                product: o("WAWebStateUtils").unproxy(t),
                catalogContext: n,
              });
              var a = o(
                "WAWebProductCatalogSession",
              ).ProductCatalogSession.toString();
              g
                ? g(t, a)
                : o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(
                      o("WAWebProductDetailsFlowLoadable")
                        .ProductDetailsFlowLoadable,
                      { refreshCarousel: !0, chat: W, product: t },
                    ),
                    { transition: "slide-left", uim: C, newDrawerContext: n },
                  );
            }
          },
          [$, R, g, A, W, b, C],
        ),
        U = (L != null && L !== "") || k != null,
        V = U || l,
        H;
      if (U) {
        var G = {
          selectable: y,
          dirMismatch: M !== r("WAWebL10N").isRTL(),
          direction: E,
          inferLinesDirection: !0,
          formatters: o("WAWebFormatConfigurationConversation").Conversation({
            links: o("WAWebMsgLinks").getFooterLinks(c.unsafe()),
            phoneNumbers: o(
              "WAWebMsgPhoneNumbers",
            ).getFooterPhoneNumbersFromMsg(c.unsafe()),
            trusted: y,
            fromMe: I.fromMe,
          }),
        };
        H = u.jsxs(
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
                L != null
                  ? u.jsx(r("WAWebMessageSpacerText.react"), {
                      msg: e.msg.unsafe(),
                      spacer: !1,
                      children: u.jsx(
                        o("WAWebEmojiText.react").EmojiText,
                        babelHelpers.extends({}, G, {
                          text: L,
                          xstyle: f.caption,
                          element: "p",
                        }),
                      ),
                    })
                  : null,
                k != null
                  ? u.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({}, G, {
                        text: k,
                        xstyle: [f.footer, L != null && f.footerMargin],
                      }),
                    )
                  : null,
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x10l6tqk xtijo5x x1o583il" },
                      1: { className: "x10l6tqk x1o583il xwukr4l" },
                    }[!!r("WAWebL10N").isRTL() << 0],
                    {
                      children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                        msg: e.msg,
                      }),
                    },
                  ),
                ),
              ],
            },
          ),
        );
      }
      var z = a
        ? u.jsx("div", {
            className: "xyqdw3p x1icxu4v xs9asl8 x25sj25",
            children: u.jsx(r("WAWebMessageAuthor.react"), {
              msg: c,
              contact: w,
              displayType: i,
            }),
          })
        : null;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1n2onr6 x1vjfegm x9f619 x13nahy2" },
            1: { className: "x1n2onr6 x1vjfegm x9f619 xmewjk2" },
          }[!!v << 0],
          {
            children: [
              z,
              u.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                msg: e.msg,
                mediaData: c.mediaData,
                hideMeta: V,
                trusted: y,
                displayAuthor: !1,
                displayType: i,
                contentContainerClassName: "x1n2onr6 x6ikm8r x10wlt62",
                captionComponent: u.jsx(r("WAWebBizProductInfo.react"), {
                  trusted: y,
                  onClick: q,
                  msg: e.msg,
                  displayType: i,
                }),
                thumbClassName:
                  "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk x1i282gy xx9ypkp",
                onThumbClick: q,
                quotedMsg: h,
              }),
              H,
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: [
                  f.productCta,
                  f.productCtaColorV2,
                  U && f.btnBorder,
                  _.paddingTop7,
                  l
                    ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0
                    : _.paddingBottom10,
                ],
                onClick: q,
                text: s._(/*BTDS*/ "View"),
              }),
            ],
          },
        ),
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
