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
      var n = o("react-compiler-runtime").c(82),
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
        var S, R;
        ((v = [
          (S = o("WAWebMsgGetters")).getBusinessOwnerJid,
          S.getCaption,
          (R = o("WAWebFrontendMsgGetters")).getDir,
          S.getFooter,
          S.getId,
          S.getIsGroupMsg,
          R.getAsProductInquiry,
          R.getMediaData,
          S.getProductId,
          S.getProductImageCount,
          S.getRetailerId,
          R.getRtl,
          R.getSenderObj,
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
      var L = o("useWAWebMsgValues").useMsgValues(u, v),
        E = L[0],
        k = L[1],
        I = L[2],
        T = L[3],
        D = L[4],
        x = L[7],
        $ = L[8],
        P = L[11],
        N = L[12],
        M = L[13],
        w = L[17],
        A = L[18],
        F = L[19],
        O;
      n[2] !== E || n[3] !== u
        ? ((O = function () {
            var e = E != null && o("WAWebWidFactory").createWid(E);
            if (e != null) {
              var t = o("WAWebMsgCollection").MsgCollection.get(u);
              t != null &&
                o("WAWebCatalogCollection").CatalogCollection.addMsgAsProduct(
                  t,
                );
            }
          }),
          (n[2] = E),
          (n[3] = u),
          (n[4] = O))
        : (O = n[4]);
      var B = r("useWAWebStableCallback")(O),
        W,
        q;
      (n[5] !== B
        ? ((W = function () {
            return B();
          }),
          (q = [B]),
          (n[5] = B),
          (n[6] = W),
          (n[7] = q))
        : ((W = n[6]), (q = n[7])),
        p(W, q));
      var U;
      n[8] !== E ||
      n[9] !== F ||
      n[10] !== u ||
      n[11] !== d ||
      n[12] !== $ ||
      n[13] !== M ||
      n[14] !== h
        ? ((U = function (n) {
            if ((n && n.stopPropagation(), !($ == null || E == null))) {
              o("WAWebUtilsLogQplEvents").qplStartProductView("Message");
              var t = r("WAWebProductCatalogGetLatestProduct")({
                productId: $,
                businessOwnerJid: E,
                msgT: M,
              });
              if (!t) {
                o("WAWebUtilsLogQplEvents").qplDropProductView();
                return;
              }
              var a = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                C,
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(E),
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
              var l = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(u, F);
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
          (n[8] = E),
          (n[9] = F),
          (n[10] = u),
          (n[11] = d),
          (n[12] = $),
          (n[13] = M),
          (n[14] = h),
          (n[15] = U))
        : (U = n[15]);
      var V = U,
        H = (k != null && k !== "") || T != null,
        G = H || l,
        z;
      if (H) {
        var j;
        n[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = r("WAWebL10N").isRTL()), (n[16] = j))
          : (j = n[16]);
        var K = P !== j,
          Q;
        n[17] !== T ||
        n[18] !== D.fromMe ||
        n[19] !== w ||
        n[20] !== A ||
        n[21] !== _
          ? ((Q = o("WAWebFormatConfigurationConversation").Conversation({
              links:
                A && T != null ? o("WAWebMsgLinks").getLinksFromText(T, w) : [],
              phoneNumbers:
                A && T != null
                  ? o("WAWebMsgPhoneNumbers").getPhoneNumbersFromText(T)
                  : [],
              trusted: _,
              fromMe: D.fromMe,
            })),
            (n[17] = T),
            (n[18] = D.fromMe),
            (n[19] = w),
            (n[20] = A),
            (n[21] = _),
            (n[22] = Q))
          : (Q = n[22]);
        var X;
        n[23] !== I || n[24] !== K || n[25] !== Q || n[26] !== _
          ? ((X = {
              selectable: _,
              dirMismatch: K,
              direction: I,
              inferLinesDirection: !0,
              formatters: Q,
            }),
            (n[23] = I),
            (n[24] = K),
            (n[25] = Q),
            (n[26] = _),
            (n[27] = X))
          : (X = n[27]);
        var Y = X,
          J;
        n[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = {
              0: { className: "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh" },
              1: {
                className:
                  "x1n2onr6 x1xmf6yo x1xegmmw x1e56ztr x13fj5qh x1hr2gdg",
              },
            }[!!r("WAWebL10N").isRTL() << 0]),
            (n[28] = J))
          : (J = n[28]);
        var Z;
        n[29] !== k || n[30] !== u || n[31] !== Y
          ? ((Z =
              k != null
                ? c.jsx(r("WAWebMessageSpacerText.react"), {
                    msgKey: u,
                    spacer: !1,
                    children: c.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({}, Y, {
                        text: k,
                        xstyle: g.caption,
                        element: "p",
                      }),
                    ),
                  })
                : null),
            (n[29] = k),
            (n[30] = u),
            (n[31] = Y),
            (n[32] = Z))
          : (Z = n[32]);
        var ee;
        n[33] !== k || n[34] !== T || n[35] !== Y
          ? ((ee =
              T != null
                ? c.jsx(
                    o("WAWebEmojiText.react").EmojiText,
                    babelHelpers.extends({}, Y, {
                      text: T,
                      xstyle: [g.footer, k != null && g.footerMargin],
                    }),
                  )
                : null),
            (n[33] = k),
            (n[34] = T),
            (n[35] = Y),
            (n[36] = ee))
          : (ee = n[36]);
        var te;
        n[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((te = {
              0: { className: "x10l6tqk xtijo5x x1o583il" },
              1: { className: "x10l6tqk x1o583il xwukr4l" },
            }[!!r("WAWebL10N").isRTL() << 0]),
            (n[37] = te))
          : (te = n[37]);
        var ne;
        n[38] !== u
          ? ((ne = c.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: u })),
            (n[38] = u),
            (n[39] = ne))
          : (ne = n[39]);
        var re;
        n[40] !== te || n[41] !== ne
          ? ((re = c.jsx(
              "div",
              babelHelpers.extends({}, te, { children: ne }),
            )),
            (n[40] = te),
            (n[41] = ne),
            (n[42] = re))
          : (re = n[42]);
        var oe;
        (n[43] !== J || n[44] !== Z || n[45] !== ee || n[46] !== re
          ? ((oe = c.jsxs(
              "div",
              babelHelpers.extends({}, J, { children: [Z, ee, re] }),
            )),
            (n[43] = J),
            (n[44] = Z),
            (n[45] = ee),
            (n[46] = re),
            (n[47] = oe))
          : (oe = n[47]),
          (z = oe));
      }
      var ae;
      n[48] !== a || n[49] !== i || n[50] !== u || n[51] !== N
        ? ((ae = a
            ? c.jsx("div", {
                className: "xyqdw3p x1icxu4v xs9asl8 x25sj25",
                children: c.jsx(r("WAWebMessageAuthor.react"), {
                  msgKey: u,
                  contact: N,
                  displayType: i,
                }),
              })
            : null),
          (n[48] = a),
          (n[49] = i),
          (n[50] = u),
          (n[51] = N),
          (n[52] = ae))
        : (ae = n[52]);
      var ie = ae,
        le = {
          0: { className: "x1n2onr6 x1vjfegm x9f619 x13nahy2" },
          1: { className: "x1n2onr6 x1vjfegm x9f619 xmewjk2" },
        }[!!b << 0],
        se;
      n[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = "x1n2onr6 x6ikm8r x10wlt62"), (n[53] = se))
        : (se = n[53]);
      var ue;
      n[54] !== i || n[55] !== V || n[56] !== u || n[57] !== _
        ? ((ue = c.jsx(r("WAWebBizProductInfo.react"), {
            trusted: _,
            onClick: V,
            msgKey: u,
            displayType: i,
          })),
          (n[54] = i),
          (n[55] = V),
          (n[56] = u),
          (n[57] = _),
          (n[58] = ue))
        : (ue = n[58]);
      var ce;
      n[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce =
            "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x193iq5w x6ikm8r x10wlt62 x1ypdohk x1i282gy xx9ypkp"),
          (n[59] = ce))
        : (ce = n[59]);
      var de;
      n[60] !== i ||
      n[61] !== V ||
      n[62] !== x ||
      n[63] !== u ||
      n[64] !== m ||
      n[65] !== G ||
      n[66] !== ue ||
      n[67] !== _
        ? ((de = c.jsx(r("WAWebMessagePicture.react"), {
            msgKey: u,
            mediaData: x,
            hideMeta: G,
            trusted: _,
            displayAuthor: !1,
            displayType: i,
            contentContainerClassName: se,
            captionComponent: ue,
            thumbClassName: ce,
            onThumbClick: V,
            quotedMsg: m,
          })),
          (n[60] = i),
          (n[61] = V),
          (n[62] = x),
          (n[63] = u),
          (n[64] = m),
          (n[65] = G),
          (n[66] = ue),
          (n[67] = _),
          (n[68] = de))
        : (de = n[68]);
      var me = z,
        pe = H && g.btnBorder,
        _e = l
          ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0
          : f.paddingBottom10,
        fe;
      n[69] !== pe || n[70] !== _e
        ? ((fe = [g.productCta, g.productCtaColorV2, pe, f.paddingTop7, _e]),
          (n[69] = pe),
          (n[70] = _e),
          (n[71] = fe))
        : (fe = n[71]);
      var ge;
      n[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = s._(/*BTDS*/ "View")), (n[72] = ge))
        : (ge = n[72]);
      var he;
      n[73] !== V || n[74] !== fe
        ? ((he = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: fe,
            onClick: V,
            text: ge,
          })),
          (n[73] = V),
          (n[74] = fe),
          (n[75] = he))
        : (he = n[75]);
      var ye;
      return (
        n[76] !== ie ||
        n[77] !== z ||
        n[78] !== de ||
        n[79] !== he ||
        n[80] !== le
          ? ((ye = c.jsxs(
              "div",
              babelHelpers.extends({}, le, { children: [ie, de, me, he] }),
            )),
            (n[76] = ie),
            (n[77] = z),
            (n[78] = de),
            (n[79] = he),
            (n[80] = le),
            (n[81] = ye))
          : (ye = n[81]),
        ye
      );
    }
    l.default = h;
  },
  226,
);
