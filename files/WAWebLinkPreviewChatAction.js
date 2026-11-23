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
    "WAWebBackendRuntime",
    "WAWebBizLinkPreviewCatalogUtils",
    "WAWebChatGetters",
    "WAWebCheckIfDomainIsPreviewable",
    "WAWebGenMinimalLinkPreviewChatAction",
    "WAWebHatchPeerPairingUrl",
    "WAWebLinkPreviewCache",
    "WAWebLinkPreviewGroupUtils",
    "WAWebLinkPreviewUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgKey",
    "WAWebNewsletterFetchLinkPreviewAction",
    "WAWebNonMessageDataRequestHandlerGenLinkPreview",
    "WAWebParseCallLinkType",
    "WAWebPeerDataService",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebStateUtils",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcDisplayStatusType",
    "WAWebWebcLinkPreviewDisplayWamEvent",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    function S() {
      return n("cr:17219") == null
        ? void 0
        : n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator").WAWebLinkPreviewChatAction,
          );
    }
    var R,
      L = !1;
    function E() {
      return (L || ((R = S()), (L = !0)), R);
    }
    async function k(t, n) {
      var a,
        i = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        l = i.disableLinkPreviews;
      if (l === !0)
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: disabled due to user settings",
              ])),
          ),
          null
        );
      if (o("WAWebHatchPeerPairingUrl").isHatchPeerPairingInvitationUrl(t.url))
        return null;
      var h = await o(
        "WAWebCheckIfDomainIsPreviewable",
      ).checkIfDomainIsPreviewable(t.domain, n);
      if (!h) return null;
      var y =
        n != null
          ? o("WAWebChatGetters").getIsNewsletter(
              o("WAWebStateUtils").unproxy(n),
            )
          : !1;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: start flow",
          ])),
      );
      var C = y
        ? o("WAWebLinkPreviewCache").getNewsletterPreviewCache()
        : o("WAWebLinkPreviewCache").getPreviewCache();
      if (C.has(t.url))
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: in cache",
              ])),
          ),
          C.get(t.url)
        );
      if (y)
        return o(
          "WAWebNewsletterFetchLinkPreviewAction",
        ).fetchPlaintextLinkPreviewAction(t, n);
      var b,
        v = o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
          .NONE,
        S = null,
        R = o("WAWebApiParse").parseAPICmd(t.url);
      if (R.resultType === o("WAWebApi").APICmd.CATALOG)
        b = await o(
          "WAWebBizLinkPreviewCatalogUtils",
        ).getProductOrCatalogLinkPreview(t.url, R.data.catalogOwnerJid);
      else if (R.resultType === o("WAWebApi").APICmd.PRODUCT)
        b = await o(
          "WAWebBizLinkPreviewCatalogUtils",
        ).getProductOrCatalogLinkPreview(
          t.url,
          R.data.businessOwnerJid,
          R.data.productId,
        );
      else if (R.resultType === o("WAWebApi").APICmd.GROUP_INVITE) {
        var L = await o("WAWebLinkPreviewGroupUtils").getGroupInviteLinkPreview(
          {
            code: R.data.code,
            resolveProfilePicUrl: o("WAWebProfilePicThumbGetters").getMaybeImg,
            url: t.url,
          },
        );
        L && (b = L);
      } else
        R.resultType === o("WAWebApi").APICmd.PAYMENT_LINK &&
        R.data.shouldDetectInComposer
          ? ((v = o("WAWebProtobufsE2E.pb")
              .Message$ExtendedTextMessage$PreviewType.PAYMENT_LINKS),
            (S = R.data.psp))
          : R.resultType === o("WAWebApi").APICmd.CALL_LINK &&
              r("WAWebParseCallLinkType")(t.url, !0) != null
            ? (b = o("WAWebLinkPreviewUtils").genLinkPreview({
                url: t.url,
                linkDetails: {
                  title: t.domain,
                  description: t.url,
                  richPreviewType: o("WAWebProtobufsE2E.pb")
                    .Message$ExtendedTextMessage$PreviewType.NONE,
                  doNotPlayInline: !0,
                  isLoading: !1,
                },
              }))
            : R.resultType;
      if (b) return (C.set(t.url, b), b);
      if ((a = t.suspiciousCharacters) != null && a.size) return null;
      var k = E();
      if ((k == null ? void 0 : k.linksPreview) != null && S == null) {
        var $ = await k.linksPreview.getPreviewAsync(t.url);
        if ($ != null) {
          var P,
            N = (P = $.thumbnail) != null ? P : "",
            M = { thumbnail: N };
          if (
            ((b = o("WAWebLinkPreviewUtils").genLinkPreview({
              url: t.url,
              linkThumbnail: M,
              linkDetails: {
                title: $.title,
                description: $.description,
                richPreviewType: I($.previewType, R),
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview not enabled debug",
                  ])),
              )
              .sendLogs("intern debug link preview not enabled"),
          o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview({
            isLoading: !1,
            link: t,
            paymentLinkDetails: { psp: S },
            richPreviewType: v,
          })
        );
      var w = await r("WAWebMsgKey").newId(),
        A = o(
          "WAWebNonMessageDataRequestHandlerGenLinkPreview",
        ).registerLinkPreviewHandlerHook(w);
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: request from primary",
          ])),
      );
      var F = o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hqLinkPreview;
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebPeerDataService").PeerDataService,
            ).sendPeerDataOperationRequest
          : o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest
      )(
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .GENERATE_LINK_PREVIEW,
        { urls: [t.url], includeHqThumbnail: F },
        { msgId: w },
      );
      try {
        var O, B;
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "link preview: wait for primary",
            ])),
        );
        var W = await o("WAPromiseTimeout").promiseTimeout(
          A.promise,
          o("WAWebABProps").getABPropConfigValue("link_preview_wait_time") *
            1e3,
        );
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "link preview: got primary response or timeout",
            ])),
        ),
          (W == null || (O = W.linkPreviewResponse) == null ? void 0 : O.url) !=
            null &&
            (W == null || (B = W.linkPreviewResponse) == null
              ? void 0
              : B.url) !== t.url &&
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: response url is different than expected url",
                ])),
            ));
        var q = W == null ? void 0 : W.linkPreviewResponse;
        if (q) {
          if (
            (W == null ? void 0 : W.mediaUploadResult) != null &&
            (W == null ? void 0 : W.mediaUploadResult) !==
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .SUCCESS
          )
            return (
              T(W == null ? void 0 : W.mediaUploadResult, F),
              o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview({
                isLoading: !1,
                link: t,
                paymentLinkDetails: {
                  psp: S,
                  previewMetadata: q.previewMetadata,
                },
                richPreviewType: v,
              })
            );
        } else {
          x({
            didRequestHq: F,
            webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
              .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_MALFORMED,
          });
          var U = o(
            "WAWebGenMinimalLinkPreviewChatAction",
          ).genMinimalLinkPreview({
            isLoading: !1,
            link: t,
            paymentLinkDetails: { psp: S },
            richPreviewType: v,
          });
          return (
            (W == null ? void 0 : W.mediaUploadResult) ===
              o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
                .NOT_FOUND &&
              U != null &&
              C.set(t.url, U),
            U
          );
        }
        var V =
            R.resultType === o("WAWebApi").APICmd.GROUP_INVITE
              ? o("WAWebLinkPreviewGroupUtils").GROUP_INVITE_DEFAULT_DESCRIPTION
              : q.description,
          H = await D({
            previewFromPrimary: q,
            chat: n,
            includeHqThumbnail: F,
          });
        return (
          (b = o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t.url,
            linkDetails: {
              title: q.title,
              description: V,
              richPreviewType: I(q.previewType, R),
              doNotPlayInline: !1,
              isLoading: !1,
            },
            linkThumbnail: H,
            paymentLinkDetails: { psp: S, previewMetadata: q.previewMetadata },
          })),
          C.set(t.url, b),
          b
        );
      } catch (e) {
        if (e instanceof o("WACustomError").TimeoutError)
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "link preview: timeout during link generation",
                ])),
            ),
            x({
              didRequestHq: F,
              webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
                .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_TIMEOUT,
            }),
            o("WAWebGenMinimalLinkPreviewChatAction").genMinimalLinkPreview({
              isLoading: !1,
              link: t,
              paymentLinkDetails: { psp: S },
              richPreviewType: v,
            })
          );
      }
    }
    function I(e, t) {
      var n =
        e === "video"
          ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .VIDEO
          : e === "profile"
            ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
                .PROFILE
            : null;
      return n != null
        ? n
        : t.resultType === o("WAWebApi").APICmd.PAYMENT_LINK &&
            t.data.shouldDetectInComposer
          ? o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .PAYMENT_LINKS
          : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
              .NONE;
    }
    function T(e, t) {
      switch (e) {
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .DECRYPTION_ERROR:
          x({
            didRequestHq: t,
            webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
              .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_DECRYPTION_ERROR,
          });
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .NOT_FOUND:
          x({
            didRequestHq: t,
            webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
              .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_NOT_FOUND,
          });
          break;
        case o("WAWebProtobufsMmsRetry.pb").MediaRetryNotification$ResultType
          .GENERAL_ERROR:
          x({
            didRequestHq: t,
            webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
              .WEBC_DISPLAY_STATUS_TYPE.PREVIEW_GENERAL_ERROR,
          });
          break;
        default:
          break;
      }
    }
    async function D(e) {
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: found HQ preview",
                  ])),
              ),
              (u = o("WALongInt").numberOrThrowIfTooLarge(_)),
              (c = o("WABase64").encodeB64(p)),
              (i = await o("WAWebLinkPreviewUtils").getThumbnailDetails({
                chatWid: t == null ? void 0 : t.id,
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview",
                  ])),
              ),
              (s = !0));
        } catch (e) {
          (o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: could not download HQ preview. details: ",
                "",
              ])),
            e,
          ),
            (s = !0));
        }
      else
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "link preview: did not find HQ preview",
            ])),
        );
      return (
        x({
          didFallbackNonHq: s,
          didRequestHq: n,
          didRespondHqPreview: l != null,
          webcDisplayStatus: o("WAWebWamEnumWebcDisplayStatusType")
            .WEBC_DISPLAY_STATUS_TYPE.SHOWED_PREVIEW_TO_USER,
        }),
        i
      );
    }
    function x(e) {
      var t = e.didFallbackNonHq,
        n = e.didRequestHq,
        r = e.didRespondHqPreview,
        a = e.webcDisplayStatus;
      (o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "link preview: status ",
            "",
          ])),
        a,
      ),
        new (o(
          "WAWebWebcLinkPreviewDisplayWamEvent",
        ).WebcLinkPreviewDisplayWamEvent)({
          webcDisplayStatus: a,
          didRequestHq: n,
          didRespondHqPreview: !!r,
          didFallbackNonHq: !!t,
        }).commit());
    }
    l.getLinkPreview = k;
  },
  98,
);
