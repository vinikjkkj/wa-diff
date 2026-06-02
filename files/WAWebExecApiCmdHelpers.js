__d(
  "WAWebExecApiCmdHelpers",
  [
    "WANullthrows",
    "WAWebContactUtils",
    "WAWebDeepLinkOpenWamEvent",
    "WAWebDrawerManager",
    "WAWebExternalCtxAuthoriseWAChat",
    "WAWebExternalCtxConfig",
    "WAWebFileUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOpenChatFlow.react",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebUim",
    "WAWebUpdateUtmAction",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumDeepLinkOpenFrom",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = function (r) {
        var n = r.chat;
        self.setTimeout(function () {
          (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
            "Deeplink",
          ),
            t && o("WAWebUpdateUtmAction").addUtmToChat(n.id, t),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              s.jsx(
                o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable,
                { chat: n, catalogOwnerJid: e },
              ),
              {
                transition: "slide-left",
                uim: o("WAWebUim").UIM.Manager.getTop(),
                newDrawerContext: o(
                  "WAWebProductCatalogContext",
                ).buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_DEEPLINK,
                ),
              },
            ));
        }, 100);
      };
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: n,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function c(e, t, n) {
      var r = o("WAWebProductCatalogContext").buildProductCatalogContext(
          new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
          o("WAWebContactUtils").getMaybeBizPlatformForLogging(e),
          o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
            .CATALOG_ENTRY_POINT_DEEPLINK,
        ),
        a = function (i) {
          var a = i.chat;
          self.setTimeout(function () {
            (o("WAWebUtilsLogQplEvents").qplStartProductView("Deeplink"),
              n && o("WAWebUpdateUtmAction").addUtmToChat(a.id, n),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                s.jsx(
                  o("WAWebProductDetailsFlowLoadable")
                    .ProductDetailsFlowLoadable,
                  {
                    chat: a,
                    productInfo: { productId: t, businessOwnerJid: e },
                    refreshCarousel: !0,
                  },
                ),
                {
                  transition: "slide-left",
                  uim: o("WAWebUim").UIM.Manager.getTop(),
                  newDrawerContext: r,
                },
              ));
          }, 100);
        };
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: a,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function d(e) {
      var t = e.customUrl,
        n = e.invalidUsernameKey,
        a = e.phone,
        i = e.url,
        l = e.username,
        s = e.usernameKey;
      return a != null
        ? { wid: o("WAWebWidFactory").createWid(a) }
        : t != null
          ? l != null
            ? {
                customUrl: t,
                fallbackUrl: i,
                username: l,
                usernameKey: s,
                invalidUsernameKey: n,
              }
            : { customUrl: t, fallbackUrl: i }
          : s != null
            ? { username: r("WANullthrows")(l), usernameKey: s }
            : { username: r("WANullthrows")(l), invalidUsernameKey: n };
    }
    function m(e) {
      var t = e.campaign,
        n = e.deepLinkSessionId,
        r = e.deepLinkType,
        a = e.isExternal,
        i = a
          ? o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM
              .DEEP_LINK_EXTERNAL
          : o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM
              .DEEP_LINK_WA_LINK_CLICK;
      new (o("WAWebDeepLinkOpenWamEvent").DeepLinkOpenWamEvent)({
        deepLinkOpenFrom: i,
        deepLinkType: r,
        deepLinkSessionId: n,
        campaign: t != null ? t : void 0,
      }).commit();
    }
    function p(e) {
      var t = e.chatId,
        n = e.deepLinkType,
        a = e.isExternal,
        i = e.partnerToken;
      o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
        r("WAWebExternalCtxAuthoriseWAChat")({
          chatId: t,
          deepLinkType: n,
          isExternal: a,
          partnerToken: i,
        }).finally(r("WAWebNoop"));
    }
    function _(e, t) {
      var n = e.headers.get("content-disposition");
      if (n != null) {
        var r = /filename[^;=\n]*=(([\'\"]).*?\2|[^;\n]*)/,
          o = r.exec(n);
        if (o != null && o[1]) return o[1].replace(/\"/g, "");
      }
      return t;
    }
    function f(e) {
      return Promise.all(
        e.map(async function (e, t) {
          var n = await window.fetch(e),
            r = await n.blob(),
            a = n.headers.get("Content-Type") || r.type,
            i = _(n, t.toString() + "." + a);
          return o("WAWebFileUtils").createFile([r], i, { type: a });
        }),
      );
    }
    ((l.openChatAndCatalog = u),
      (l.openChatAndProduct = c),
      (l.getOpenChatFlowProps = d),
      (l.submitDeepLinkOpenWamEvent = m),
      (l.externalCtxAuthoriseWAChatIfEnabled = p),
      (l.getFileNameFromResponse = _),
      (l.downloadAttachments = f));
  },
  98,
);
