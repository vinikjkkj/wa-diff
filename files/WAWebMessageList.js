__d(
  "WAWebMessageList",
  [
    "fbt",
    "WAWebBizProductListMessagePreview",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebListMsgModal.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProductMessageListCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebQplFlowWrapper",
    "WAWebUISpacing",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WDSIconIcFormatListBulleted.react",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = r("qpl")._(774777097, "3431");
    function m(e, t) {
      var n = e.requiresDirectConnection,
        r = e.isForwarded
          ? e.businessOwnerJid
          : e.from.toString({ legacy: !0 });
      if (!(e.list.productListInfo == null || r == null)) {
        var a = !!o(
          "WAWebProductMessageListCollection",
        ).ProductMessageListCollection.get(e.id);
        o("WAWebQplFlowWrapper").QPL.markerStart(d, {
          annotations: { bool: { IsCached: a } },
        });
        var i = o(
          "WAWebProductMessageListCollection",
        ).ProductMessageListCollection.getOrAdd(
          e.id,
          e.list.productListInfo,
          n,
          r,
          e.list.title,
        );
        i != null
          ? o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
                {
                  chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
                  catalogOwnerJid: r,
                  productListId: i.id,
                },
              ),
              {
                transition: "slide-left",
                uim: t,
                newDrawerContext: o(
                  "WAWebProductCatalogContext",
                ).buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT,
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_PRODUCT_LIST_MESSAGE,
                ),
              },
            )
          : o("WAWebQplFlowWrapper").QPL.markerDrop(d);
      }
    }
    function p(e, t) {
      var n = e.list.listType;
      if (n != null)
        switch (n) {
          case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
            .SINGLE_SELECT:
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebListMsgModal.react"), { msg: e }),
            );
            break;
          case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
            .PRODUCT_LIST:
            m(e, t);
            break;
          default:
        }
    }
    function _(e) {
      var t = e.listType;
      return t ===
        o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
        ? s._(/*BTDS*/ "View items")
        : e.buttonText;
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = c.jsx(
              r("WDSIconIcFormatListBulleted.react"),
              babelHelpers.extends({}, e, { width: 20, height: 20 }),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function g(e) {
      var t = e.listType;
      if (
        t !==
        o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
      )
        return f;
    }
    var h = {
      title: {
        display: "x1lliihq",
        fontSize: "x6prxxf",
        fontWeight: "xk50ysn",
        lineHeight: "xggjnk3",
        whiteSpace: "xeaf4i8",
        $$css: !0,
      },
      footer: {
        display: "x1lliihq",
        fontSize: "x1nxh6w3",
        lineHeight: "xuy8w9f",
        color: "xhslqc4",
        $$css: !0,
      },
      quotedElement: {
        marginTop: "x1198e8h",
        marginInlineEnd: "x1lxpwgx",
        marginBottom: "xzueoph",
        marginInlineStart: "xw01apr",
        $$css: !0,
      },
    };
    function y(t) {
      var n,
        a = t.displayAuthor,
        i = t.msg,
        l = t.quotedMsg,
        s = i.list,
        u = r("useWAWebUIM")();
      if (!s) return null;
      var d = {
          selectable: !0,
          dirMismatch:
            o("WAWebFrontendMsgGetters").getRtl(i) !== r("WAWebL10N").isRTL(),
          direction: o("WAWebFrontendMsgGetters").getDir(i),
          inferLinesDirection: !0,
        },
        m = o("WAWebFormatConfiguration").Conversation({
          links: o("WAWebMsgLinks").getHeaderLinks(i.unsafe()),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getHeaderPhoneNumbersFromMsg(
            i.unsafe(),
          ),
          selectable: !0,
          trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
          fromMe: i.id.fromMe,
        }),
        f = o("WAWebFormatConfiguration").Conversation({
          mentions: i.mentionMap(),
          groupMentions: i.groupMentionMap(),
          links: o("WAWebMsgLinks").getLinksFromMsg(i.unsafe()),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
            i.unsafe(),
          ),
          selectable: !0,
          trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
          fromMe: i.id.fromMe,
          fromChatWid: i.id.remote,
        }),
        y =
          s.listType ===
          o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    h.quotedElement,
                    i.isForwarded && o("WAWebUISpacing").uiMargin.top0,
                  ),
                  {
                    children: c.jsx(r("WAWebBizProductListMessagePreview"), {
                      msg: i,
                      onClick: function (t) {
                        (t && t.stopPropagation(), p(i, u));
                      },
                    }),
                  },
                ),
              )
            : null,
        C =
          s.listType !==
          o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST
            ? c.jsx(
                o("WAWebEmojiText.react").EmojiText,
                babelHelpers.extends({}, d, {
                  className: (e || (e = r("stylex")))(
                    h.title,
                    o("WAWebUISpacing").uiMargin.bottom8,
                  ),
                  text: s.title,
                  formatters: m,
                  ellipsify: !0,
                }),
              )
            : null,
        b = c.jsx(
          o("WAWebEmojiText.react").EmojiText,
          babelHelpers.extends({}, d, { text: s.description, formatters: f }),
        ),
        v = null;
      if (i.footer != null && i.footer !== "") {
        var S = o("WAWebFormatConfiguration").Conversation({
          links: o("WAWebMsgLinks").getFooterLinks(i.unsafe()),
          phoneNumbers: o("WAWebMsgPhoneNumbers").getFooterPhoneNumbersFromMsg(
            i.unsafe(),
          ),
          selectable: !0,
          trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
          fromMe: i.id.fromMe,
        });
        v = c.jsx(
          o("WAWebEmojiText.react").EmojiText,
          babelHelpers.extends({}, d, {
            className: (e || (e = r("stylex")))(
              h.footer,
              o("WAWebUISpacing").uiMargin.top6,
            ),
            text: i.footer,
            formatters: S,
          }),
        );
      }
      var R = c.jsx("div", {
          className: "x10l6tqk xtijo5x x1o583il",
          children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }),
        }),
        L = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [
            {
              label: (n = _(s)) != null ? n : "",
              Icon: g(s),
              onClick: function (t) {
                (t && t.stopPropagation(), p(i, u));
              },
            },
          ],
        }),
        E = null;
      return (
        l &&
          (E = c.jsx("div", {
            className: "x1198e8h x1lxpwgx xzueoph xw01apr",
            children: l,
          })),
        c.jsx("div", {
          className: "x1n2onr6 x1vjfegm x9f619 x1o095ql x193iq5w",
          children: c.jsxs(r("WAWebMessageTextBubble.react"), {
            msg: i,
            displayAuthor: a,
            hideMeta: !0,
            children: [
              E,
              y,
              C,
              c.jsxs(r("WAWebMessageSpacerText.react"), {
                msg: i.unsafe(),
                "data-id": i.id,
                children: [b, v, R],
              }),
              L,
            ],
          }),
        })
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
