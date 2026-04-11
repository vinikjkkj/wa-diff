__d(
  "WAWebLinkPreviewChatAction",
  [
    "WABase64",
    "WACustomError",
    "WALogger",
    "WALongInt",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBizLinkPreviewCatalogUtils",
    "WAWebChatGetters",
    "WAWebCheckIfDomainIsPreviewable",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewGroupUtils",
    "WAWebLinkPreviewUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgKey",
    "WAWebNewsletterFetchLinkPreviewAction",
    "WAWebNonMessageDataRequestHandlerGenLinkPreview",
    "WAWebPrimaryFeaturesModel",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcDisplayStatusType",
    "WAWebWebcLinkPreviewDisplayWamEvent",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge();
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            i = a.disableLinkPreviews;
          if (i === !0)
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: disabled due to user settings",
                  ])),
              ),
              null
            );
          var l = yield o(
            "WAWebCheckIfDomainIsPreviewable",
          ).checkIfDomainIsPreviewable(e.domain, t);
          if (!l) return null;
          var s =
            t != null
              ? o("WAWebChatGetters").getIsNewsletter(
                  o("WAWebStateUtils").unproxy(t),
                )
              : !1;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: start flow",
              ])),
          );
          var C = s
            ? o("WAWebLinkPreviewCache").getNewsletterPreviewCache()
            : o("WAWebLinkPreviewCache").getPreviewCache();
          if (C.has(e.url))
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: in cache",
                  ])),
              ),
              C.get(e.url)
            );
          if (s)
            return o(
              "WAWebNewsletterFetchLinkPreviewAction",
            ).fetchPlaintextLinkPreviewAction(e, t);
          var b,
            v = o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$PreviewType.NONE,
            S = null,
            L = o("WAWebApiParse").parseAPICmd(e.url);
          if (L.resultType === o("WAWebApi").APICmd.CATALOG)
            b = yield o(
              "WAWebBizLinkPreviewCatalogUtils",
            ).getProductOrCatalogLinkPreview(e.url, L.data.catalogOwnerJid);
          else if (L.resultType === o("WAWebApi").APICmd.PRODUCT)
            b = yield o(
              "WAWebBizLinkPreviewCatalogUtils",
            ).getProductOrCatalogLinkPreview(
              e.url,
              L.data.businessOwnerJid,
              L.data.productId,
            );
          else if (L.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
            var E = yield o(
              "WAWebLinkPreviewGroupUtils",
            ).getGroupInviteLinkPreview(e.url, L.data.code);
            E && (b = E);
          } else
            L.resultType === o("WAWebApi").APICmd.PAYMENT_LINK &&
            L.data.shouldDetectInComposer
              ? ((v = o("WAWebProtobufsE2E.pb")
                  .Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS),
                (S = L.data.psp))
              : L.resultType;
          if (b) return (C.set(e.url, b), b);
          if ((n = e.suspiciousCharacters) != null && n.size) return null;
          if ((R == null ? void 0 : R.linksPreview) != null && S == null) {
            var D = yield R.linksPreview.getPreviewAsync(e.url);
            if (D != null) {
              var $,
                P = ($ = D.thumbnail) != null ? $ : "",
                N = { thumbnail: P };
              if (
                ((b = o("WAWebLinkPreviewUtils").genLinkPreview({
                  url: e.url,
                  linkThumbnail: N,
                  linkDetails: {
                    title: D.title,
                    description: D.description,
                    richPreviewType: k(D.previewType, L),
                    doNotPlayInline: !1,
                    isLoading: !1,
                  },
                })),
                b != null)
              )
                return b;
            }
          }
          var M = o("WAWebABProps").getABPropConfigValue(
            "web_link_preview_sync_enabled",
          );
          if (!M || !o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview)
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: opted out. flag=",
                    " abprop=",
                    "",
                  ])),
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview,
                M,
              ),
              r("gkx")("26258") ||
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview not enabled debug",
                      ])),
                  )
                  .sendLogs("intern debug link preview not enabled"),
              o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(
                e,
                v,
                !1,
                { psp: S },
              )
            );
          var w = yield r("WAWebMsgKey").newId(),
            A = o(
              "WAWebNonMessageDataRequestHandlerGenLinkPreview",
            ).registerLinkPreviewHandlerHook(w);
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: request from primary",
              ])),
          );
          var F = o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hqLinkPreview;
          yield o(
            "WAWebSendNonMessageDataRequest",
          ).sendPeerDataOperationRequest(
            o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
              .GENERATE_LINK_PREVIEW,
            { urls: [e.url], includeHqThumbnail: F },
            { msgId: w },
          );
          try {
            var O, B;
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: wait for primary",
                ])),
            );
            var W = yield o("WAPromiseTimeout").promiseTimeout(
              A.promise,
              o("WAWebABProps").getABPropConfigValue("link_preview_wait_time") *
                1e3,
            );
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: got primary response or timeout",
                ])),
            ),
              (W == null || (O = W.linkPreviewResponse) == null
                ? void 0
                : O.url) != null &&
                (W == null || (B = W.linkPreviewResponse) == null
                  ? void 0
                  : B.url) !== e.url &&
                o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "link preview: response url is different than expected url",
                    ])),
                ));
            var q = W == null ? void 0 : W.linkPreviewResponse;
            if (q) {
              if (
                (W == null ? void 0 : W.mediaUploadResult) != null &&
                (W == null ? void 0 : W.mediaUploadResult) !==
                  o("WAWebProtobufsMmsRetry.pb")
                    .MediaRetryNotification$ResultType.SUCCESS
              )
                return (
                  I(W == null ? void 0 : W.mediaUploadResult, F),
                  o(
                    "WAWebGenMinimalLinkPreviewChatAction",
                  ).genMinimalLinkPreview(e, v, !1, {
                    psp: S,
                    previewMetadata: q.previewMetadata,
                  })
                );
            } else {
              x(
                o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
                  .PREVIEW_MALFORMED,
                F,
              );
              var U = o(
                "WAWebGenMinimalLinkPreviewChatAction",
              ).genMinimalLinkPreview(e, v, !1, { psp: S });
              return (
                (W == null ? void 0 : W.mediaUploadResult) ===
                  o("WAWebProtobufsMmsRetry.pb")
                    .MediaRetryNotification$ResultType.NOT_FOUND &&
                  U != null &&
                  C.set(e.url, U),
                U
              );
            }
            var V =
                L.resultType === o("WAWebApi").APICmd.GROUP_INVITE
                  ? o("WAWebLinkPreviewGroupUtils")
                      .GROUP_INVITE_DEFAULT_DESCRIPTION
                  : q.description,
              H = yield T({
                previewFromPrimary: q,
                chat: t,
                includeHqThumbnail: F,
              });
            return (
              (b = o("WAWebLinkPreviewUtils").genLinkPreview({
                url: e.url,
                linkDetails: {
                  title: q.title,
                  description: V,
                  richPreviewType: k(q.previewType, L),
                  doNotPlayInline: !1,
                  isLoading: !1,
                },
                linkThumbnail: H,
                paymentLinkDetails: {
                  psp: S,
                  previewMetadata: q.previewMetadata,
                },
              })),
              C.set(e.url, b),
              b
            );
          } catch (t) {
            if (t instanceof o("WACustomError").TimeoutError)
              return (
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "link preview: timeout during link generation",
                    ])),
                ),
                x(
                  o("WAWebWamEnumWebcDisplayStatusType")
                    .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_TIMEOUT,
                  F,
                ),
                o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview(
                  e,
                  v,
                  !1,
                  { psp: S },
                )
              );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return e === "video"
        ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
            .VIDEO
        : t.resultType === o("WAWebApi").APICmd.PAYMENT_LINK &&
            t.data.shouldDetectInComposer
          ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .PAYMENT_LINKS
          : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .NONE;
    }
    function I(e, t) {
      switch (e) {
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .DECRYPTION_ERROR:
          x(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_DECRYPTION_ERROR,
            t,
          );
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .NOT_FOUND:
          x(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_NOT_FOUND,
            t,
          );
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .GENERAL_ERROR:
          x(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_GENERAL_ERROR,
            t,
          );
          break;
        default:
          break;
      }
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.includeHqThumbnail,
            r = e.previewFromPrimary,
            a = r.thumbData ? o("WABase64").encodeB64(r.thumbData) : "",
            i = { thumbnail: a },
            l = r.hqThumbnail,
            s = l ? !1 : void 0,
            u,
            c;
          if (n && l != null)
            try {
              var d = l.directPath,
                m = l.encThumbHash,
                p = l.mediaKey,
                _ = l.mediaKeyTimestampMs,
                f = l.thumbHash;
              d != null && m != null && f != null && p != null && _ != null
                ? (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: found HQ preview",
                      ])),
                  ),
                  (u = o("WALongInt").numberOrThrowIfTooLarge(_)),
                  (c = o("WABase64").encodeB64(p)),
                  (i = yield o("WAWebLinkPreviewUtils").getThumbnailDetails({
                    chatWid: t == null ? void 0 : t.id,
                    mediaType:
                      o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                    thumbnail: a,
                    hqThumbnailParams: l,
                    encryptionParams: {
                      encFilehash: m,
                      mediaKeyTimestamp: u,
                      mediaKey: c,
                    },
                  })),
                  (s = i.thumbnailHQ == null))
                : (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: malformed HQ preview",
                      ])),
                  ),
                  (s = !0));
            } catch (e) {
              (o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: could not download HQ preview. details: ",
                    "",
                  ])),
                e,
              ),
                (s = !0));
            }
          else
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: did not find HQ preview",
                ])),
            );
          return (
            x(
              o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
                .SHOWED_PREVIEW_TO_USER,
              n,
              l != null,
              s,
            ),
            i
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r) {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: status ",
            "",
          ])),
        e,
      ),
        new (o(
          "WAWebWebcLinkPreviewDisplayWamEvent",
        ).WebcLinkPreviewDisplayWamEvent)({
          webcDisplayStatus: e,
          didRequestHq: t,
          didRespondHqPreview: !!n,
          didFallbackNonHq: !!r,
        }).commit());
    }
    l.getLinkPreview = L;
  },
  98,
);
