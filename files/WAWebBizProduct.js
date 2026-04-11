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
    "WAWebFormatConfiguration",
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
    "WAWebUISpacing",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWidFactory",
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
    function f(e) {
      var t,
        n,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isCarouselCard,
        c = e.msg,
        f = e.onProductClick,
        g = e.quotedMsg,
        h = e.trusted,
        y = r("useWAWebUIM")(),
        C = p(function () {
          return new (o("WAWebProductCatalogSession").ProductCatalogSession)();
        }, []),
        b = o("WAWebDisplayType").isWideDisplay(i),
        v = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
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
        S = v[0],
        R = v[1],
        L = v[2],
        E = v[3],
        k = v[4],
        I = v[5],
        T = v[6],
        D = v[7],
        x = v[8],
        $ = v[9],
        P = v[10],
        N = v[11],
        M = v[12],
        w = v[13],
        A = v[14],
        F = v[15],
        O = v[16];
      m(function () {
        var e = S != null && o("WAWebWidFactory").createWid(S);
        e != null &&
          o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(
            o("WAWebStateUtils").unproxy(c.unsafe()),
          );
      }, []);
      var B = n.getChat(e.msg.unsafe()),
        W = d(
          function (e) {
            if ((e && e.stopPropagation(), !(x == null || S == null))) {
              o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
              var t = r("WAWebProductCatalogGetLatestProduct")({
                productId: x,
                businessOwnerJid: S,
                msgT: w,
              });
              if (!t) {
                o("WAWebUtilsLogQplEvents").qplDropProductView();
                return;
              }
              var n = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                C,
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(S),
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
              f
                ? f(t, a)
                : o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(
                      o("WAWebProductDetailsFlowLoadable")
                        .ProductDetailsFlowLoadable,
                      { refreshCarousel: !0, chat: B, product: t },
                    ),
                    { transition: "slide-left", uim: y, newDrawerContext: n },
                  );
            }
          },
          [x, S, f, w, B, C, y],
        ),
        q = (R != null && R !== "") || E != null,
        U = q || l,
        V;
      if (q) {
        var H = {
          selectable: h,
          dirMismatch: N !== r("WAWebL10N").isRTL(),
          direction: L,
          inferLinesDirection: !0,
          formatters: o("WAWebFormatConfiguration").Conversation({
            links: o("WAWebMsgLinks").getFooterLinks(c.unsafe()),
            phoneNumbers: o(
              "WAWebMsgPhoneNumbers",
            ).getFooterPhoneNumbersFromMsg(c.unsafe()),
            trusted: h,
            fromMe: k.fromMe,
          }),
        };
        V = u.jsxs(
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
                R != null
                  ? u.jsx(r("WAWebMessageSpacerText.react"), {
                      msg: e.msg.unsafe(),
                      spacer: !1,
                      children: u.jsx(
                        o("WAWebEmojiText.react").EmojiText,
                        babelHelpers.extends({}, H, {
                          text: R,
                          xstyle: _.caption,
                          element: "p",
                        }),
                      ),
                    })
                  : null,
                E != null
                  ? u.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({}, H, {
                        text: E,
                        xstyle: [_.footer, R != null && _.footerMargin],
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
      var G = a
        ? u.jsx("div", {
            className: "xyqdw3p x1icxu4v xs9asl8 x25sj25",
            children: u.jsx(r("WAWebMessageAuthor.react"), {
              msg: c,
              contact: M,
              displayType: i,
            }),
          })
        : null;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: { className: "x1n2onr6 x1vjfegm x9f619 xlkrthq" },
            1: { className: "x1n2onr6 x1vjfegm x9f619 xmewjk2" },
          }[!!b << 0],
          {
            children: [
              G,
              u.jsx(o("WAWebMessagePicture.react").ImageMessage, {
                msg: e.msg,
                mediaData: c.mediaData,
                hideMeta: U,
                trusted: h,
                displayAuthor: !1,
                displayType: i,
                contentContainerClassName: "x1n2onr6 x6ikm8r x10wlt62",
                captionComponent: u.jsx(r("WAWebBizProductInfo.react"), {
                  trusted: h,
                  onClick: W,
                  msg: e.msg,
                  displayType: i,
                }),
                thumbClassName:
                  "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk xaejkm2 x1uuy6ko",
                onThumbClick: W,
                quotedMsg: g,
              }),
              V,
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: [
                  _.productCta,
                  _.productCtaColorV2,
                  q && _.btnBorder,
                  o("WAWebUISpacing").uiPadding.top7,
                  l
                    ? o("WAWebUISpacing").uiPadding.bottom0
                    : o("WAWebUISpacing").uiPadding.bottom10,
                ],
                onClick: W,
                text: s._(/*BTDS*/ "View"),
              }),
            ],
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
