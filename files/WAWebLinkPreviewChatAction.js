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
    "WAWebParseCallLinkType",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S() {
      return n("cr:17219") == null ? void 0 : n("cr:17219").getWindowsBridge();
    }
    var R,
      L = !1;
    function E() {
      return (L || ((R = S()), (L = !0)), R);
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            i = a.disableLinkPreviews;
          if (i === !0)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: disabled due to user settings",
                  ])),
              ),
              null
            );
          var l = yield o(
            "WAWebCheckIfDomainIsPreviewable",
          ).checkIfDomainIsPreviewable(e.domain, t);
          if (!l) return null;
          var y =
            t != null
              ? o("WAWebChatGetters").getIsNewsletter(
                  o("WAWebStateUtils").unproxy(t),
                )
              : !1;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: start flow",
              ])),
          );
          var C = y
            ? o("WAWebLinkPreviewCache").getNewsletterPreviewCache()
            : o("WAWebLinkPreviewCache").getPreviewCache();
          if (C.has(e.url))
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: in cache",
                  ])),
              ),
              C.get(e.url)
            );
          if (y)
            return o(
              "WAWebNewsletterFetchLinkPreviewAction",
            ).fetchPlaintextLinkPreviewAction(e, t);
          var b,
            v = o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$PreviewType.NONE,
            S = null,
            R = o("WAWebApiParse").parseAPICmd(e.url);
          if (R.resultType === o("WAWebApi").APICmd.CATALOG)
            b = yield o(
              "WAWebBizLinkPreviewCatalogUtils",
            ).getProductOrCatalogLinkPreview(e.url, R.data.catalogOwnerJid);
          else if (R.resultType === o("WAWebApi").APICmd.PRODUCT)
            b = yield o(
              "WAWebBizLinkPreviewCatalogUtils",
            ).getProductOrCatalogLinkPreview(
              e.url,
              R.data.businessOwnerJid,
              R.data.productId,
            );
          else if (R.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
            var L = yield o(
              "WAWebLinkPreviewGroupUtils",
            ).getGroupInviteLinkPreview(e.url, R.data.code);
            L && (b = L);
          } else
            R.resultType === o("WAWebApi").APICmd.PAYMENT_LINK &&
            R.data.shouldDetectInComposer
              ? ((v = o("WAWebProtobufsE2E.pb")
                  .Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS),
                (S = R.data.psp))
              : R.resultType === o("WAWebApi").APICmd.CALL_LINK &&
                  r("WAWebParseCallLinkType")(e.url, !0) != null
                ? (b = o("WAWebLinkPreviewUtils").genLinkPreview({
                    url: e.url,
                    linkDetails: {
                      title: e.domain,
                      description: e.url,
                      richPreviewType: o("WAWebProtobufsE2E.pb")
                        .Message$ExtendedTextMessage$PreviewType.NONE,
                      doNotPlayInline: !0,
                      isLoading: !1,
                    },
                  }))
                : R.resultType;
          if (b) return (C.set(e.url, b), b);
          if ((n = e.suspiciousCharacters) != null && n.size) return null;
          var k = E();
          if ((k == null ? void 0 : k.linksPreview) != null && S == null) {
            var I = yield k.linksPreview.getPreviewAsync(e.url);
            if (I != null) {
              var $,
                N = ($ = I.thumbnail) != null ? $ : "",
                M = { thumbnail: N };
              if (
                ((b = o("WAWebLinkPreviewUtils").genLinkPreview({
                  url: e.url,
                  linkThumbnail: M,
                  linkDetails: {
                    title: I.title,
                    description: I.description,
                    richPreviewType: T(I.previewType, R),
                    doNotPlayInline: !1,
                    isLoading: !1,
                  },
                })),
                b != null)
              )
                return b;
            }
          }
          if (!o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: opted out. flag=",
                    " abprop=",
                    "",
                  ])),
                o("WAWebPrimaryFeaturesModel").PrimaryFeatures.linkPreview,
                !0,
              ),
              r("gkx")("26258") ||
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: wait for primary",
                ])),
            );
            var W = yield o("WAPromiseTimeout").promiseTimeout(
              A.promise,
              o("WAWebABProps").getABPropConfigValue("link_preview_wait_time") *
                1e3,
            );
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  D(W == null ? void 0 : W.mediaUploadResult, F),
                  o(
                    "WAWebGenMinimalLinkPreviewChatAction",
                  ).genMinimalLinkPreview(e, v, !1, {
                    psp: S,
                    previewMetadata: q.previewMetadata,
                  })
                );
            } else {
              P(
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
                R.resultType === o("WAWebApi").APICmd.GROUP_INVITE
                  ? o("WAWebLinkPreviewGroupUtils")
                      .GROUP_INVITE_DEFAULT_DESCRIPTION
                  : q.description,
              H = yield x({
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
                  richPreviewType: T(q.previewType, R),
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "link preview: timeout during link generation",
                    ])),
                ),
                P(
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
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
    function D(e, t) {
      switch (e) {
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .DECRYPTION_ERROR:
          P(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_DECRYPTION_ERROR,
            t,
          );
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .NOT_FOUND:
          P(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_NOT_FOUND,
            t,
          );
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .GENERAL_ERROR:
          P(
            o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
              .PREVIEW_GENERAL_ERROR,
            t,
          );
          break;
        default:
          break;
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "link preview: malformed HQ preview",
                      ])),
                  ),
                  (s = !0));
            } catch (e) {
              (o("WALogger").ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: could not download HQ preview. details: ",
                    "",
                  ])),
                e,
              ),
                (s = !0));
            }
          else
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: did not find HQ preview",
                ])),
            );
          return (
            P(
              o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE
                .SHOWED_PREVIEW_TO_USER,
              n,
              l != null,
              s,
            ),
            i
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, n, r, a) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: status ",
            "",
          ])),
        t,
      ),
        new (o(
          "WAWebWebcLinkPreviewDisplayWamEvent",
        ).WebcLinkPreviewDisplayWamEvent)({
          webcDisplayStatus: t,
          didRequestHq: n,
          didRespondHqPreview: !!r,
          didFallbackNonHq: !!a,
        }).commit());
    }
    l.getLinkPreview = k;
  },
  98,
);
