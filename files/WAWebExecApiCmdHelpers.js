__d(
  "WAWebExecApiCmdHelpers",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t) {
      var n = function (r) {
        var n = r.chat;
        self.setTimeout(function () {
          (o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(
            "Deeplink",
          ),
            t && o("WAWebUpdateUtmAction").addUtmToChat(n.id, t),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              u.jsx(
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
        u.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: n,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function d(e, t, n) {
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
                u.jsx(
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
        u.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
          target: { wid: o("WAWebWidFactory").createWid(e) },
          onSuccess: a,
          msgText: null,
        }),
        { transition: "modal-flow" },
      );
    }
    function m(e) {
      var t = e.customUrl,
        n = e.phone,
        a = e.url,
        i = e.username,
        l = e.usernameKey;
      return n != null
        ? { wid: o("WAWebWidFactory").createWid(n) }
        : t != null
          ? i != null
            ? { customUrl: t, fallbackUrl: a, username: i, usernameKey: l }
            : { customUrl: t, fallbackUrl: a }
          : l != null
            ? { username: r("WANullthrows")(i), usernameKey: l }
            : { username: r("WANullthrows")(i) };
    }
    function p(e) {
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
    function _(e, t, n, a) {
      o("WAWebExternalCtxConfig").isCtxLoggingEnabled() &&
        r("WAWebExternalCtxAuthoriseWAChat")(e, t, n, a).finally(
          r("WAWebNoop"),
        );
    }
    function f(e, t) {
      var n = e.headers.get("content-disposition");
      if (n != null) {
        var r = /filename[^;=\n]*=(([\'\"]).*?\2|[^;\n]*)/,
          o = r.exec(n);
        if (o != null && o[1]) return o[1].replace(/\"/g, "");
      }
      return t;
    }
    function g(t) {
      return (e || (e = n("Promise"))).all(
        t.map(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield window.fetch(e),
                  r = yield n.blob(),
                  a = n.headers.get("Content-Type") || r.type,
                  i = f(n, t.toString() + "." + a);
                return o("WAWebFileUtils").createFile([r], i, { type: a });
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        ),
      );
    }
    ((l.openChatAndCatalog = c),
      (l.openChatAndProduct = d),
      (l.getOpenChatFlowProps = m),
      (l.submitDeepLinkOpenWamEvent = p),
      (l.externalCtxAuthoriseWAChatIfEnabled = _),
      (l.getFileNameFromResponse = f),
      (l.downloadAttachments = g));
  },
  98,
);
