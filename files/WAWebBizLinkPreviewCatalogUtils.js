__d(
  "WAWebBizLinkPreviewCatalogUtils",
  [
    "WAWebCatalogCollection",
    "WAWebContactCollection",
    "WAWebContactSyncLogger",
    "WAWebCurrencyUtils",
    "WAWebFrontendContactGetters",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebLinkPreviewUtils",
    "WAWebMediaDataUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "fbs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 100;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l, s, u;
          if (!r("WAWebWid").isWid(n)) return null;
          var c = o("WAWebWidFactory").createWid(n),
            d;
          try {
            d = yield o("WAWebCatalogCollection").CatalogCollection.find(c);
          } catch (e) {
            return null;
          }
          var m =
            a != null
              ? d.productCollection.get(a)
              : d.productCollection.getProductModels().find(function (e) {
                  return e.reviewStatus === "APPROVED" && !e.isHidden;
                });
          if (m == null || m.reviewStatus !== "APPROVED" || m.isHidden)
            return null;
          var p = m.getPreviewImage(),
            _;
          if (p) {
            var f = [
                {
                  width: e,
                  height: e,
                  imageFormat: "image/jpeg",
                  imageFormatOptions: 0.75,
                },
              ],
              g = yield o("WAWebMediaDataUtils").getResizedThumbData(
                p.mediaUrl,
                f,
              );
            _ = g[0];
          }
          var h;
          if (
            (i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null &&
            i.equals(c)
          ) {
            var y = o("WAWebContactCollection").ContactCollection.get(c);
            if (y == null) return null;
            h = o("WAWebFrontendContactGetters").getDisplayName(y);
          } else {
            var C,
              b = yield o(
                "WAWebGetOrQueryUsyncInfoContactAction",
              ).getOrQueryUsyncInfo({
                wid: c,
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                  .BUSINESS_CONTACT_CHAT,
              });
            h = (C = b.bizInfo) == null ? void 0 : C.verifiedName.name;
          }
          var v, S;
          a != null
            ? ((v = r("fbs")
                ._(
                  /*BTDS*/ "{productName} from {catalogOwnerName} on WhatsApp.",
                  [
                    r("fbs")._param("productName", m.name),
                    r("fbs")._param("catalogOwnerName", h),
                  ],
                )
                .toString()),
              m.description != null &&
              m.priceAmount1000 != null &&
              m.currency != null
                ? (S =
                    m.description +
                    " \xB7 " +
                    o("WAWebCurrencyUtils").formatAmount1000(
                      m.currency,
                      m.priceAmount1000,
                    ))
                : m.description != null
                  ? (S = m.description)
                  : m.priceAmount1000 != null &&
                    m.currency != null &&
                    (S = o("WAWebCurrencyUtils").formatAmount1000(
                      m.currency,
                      m.priceAmount1000,
                    )))
            : ((v = r("fbs")
                ._(/*BTDS*/ "View {catalogOwnerName}'s catalog on WhatsApp", [
                  r("fbs")._param("catalogOwnerName", h),
                ])
                .toString()),
              (S = r("fbs")
                ._(/*BTDS*/ "Learn more about their products & services")
                .toString()));
          var R = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t,
            linkDetails: {
              title: v,
              description: S,
              richPreviewType: o("WAWebProtobufsE2E.pb")
                .Message$ExtendedTextMessage$PreviewType.NONE,
              doNotPlayInline: !0,
              isLoading: !1,
            },
            linkThumbnail: {
              thumbnail: (l = _) == null ? void 0 : l.dataUrl,
              thumbnailHeight: (s = _) == null ? void 0 : s.height,
              thumbnailWidth: (u = _) == null ? void 0 : u.width,
            },
          });
          return R;
        })),
        u.apply(this, arguments)
      );
    }
    l.getProductOrCatalogLinkPreview = s;
  },
  226,
);
