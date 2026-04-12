__d(
  "WAWebMessagePicture.react",
  [
    "fbt",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebHDMediaIconWrapper.react",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageCropping",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessagePaidPartnershipDisclaimerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebMsgType",
    "WAWebShowMediaNotReadableModal",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebTypesMedia",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "WAWebWamChatPSALogger",
    "WAWebWamMsgUtils",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues",
    "useWAWebSendViewCount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = ["ref"],
      _,
      f,
      g = f || (f = o("react")),
      h = f,
      y = h.useImperativeHandle,
      C = h.useRef,
      b = [
        o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
      ],
      v = "xekv6nw-B",
      S = {
        bubble: {
          boxSizing: "x9f619",
          maxWidth: "xlkrthq",
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x1djpfga",
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        bubbleMaxWidthPhotoPoll: { maxWidth: "x193iq5w", $$css: !0 },
        bubbleAlbum: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        bubblePortrait: { maxWidth: "xf58f5l", $$css: !0 },
        bubbleAnnouncement: { maxWidth: "xmewjk2", $$css: !0 },
        bubbleChannelAlerts: { maxWidth: "x193iq5w", $$css: !0 },
        author: {
          paddingBottom: "xs9asl8",
          paddingInlineStart: "x25sj25",
          paddingTop: "xyqdw3p",
          $$css: !0,
        },
        authorElevatedPushNames: { paddingInlineEnd: "x11lfxj5", $$css: !0 },
        forwardedIndicator: {
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        forwardedIndicatorHasAuthor: { paddingTop: "xexx8yu", $$css: !0 },
        overlay: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          maxWidth: "xjmpccy",
          position: "x1n2onr6",
          "::before_background": "x1xuolcj",
          "::before_borderStartStartRadius": "x1nf3qbo",
          "::before_borderStartEndRadius": "x1k12aft",
          "::before_borderEndEndRadius": "xptwhb6",
          "::before_borderEndStartRadius": "x10ad0jm",
          "::before_content": "x10tli2e",
          "::before_height": "xszcg87",
          "::before_position": "x1hmns74",
          "::before_width": "x1rmj1tg",
          "::before_zIndex": "x1r18s1r",
          $$css: !0,
        },
        overlayAnnouncement: { maxWidth: "x1idnn2", $$css: !0 },
        quote: { boxSizing: "x9f619", maxWidth: "x1d8l2j3", $$css: !0 },
        quotePortrait: { maxWidth: "x16cfgq2", $$css: !0 },
        quoteAnnouncement: { maxWidth: "xno0opx", $$css: !0 },
        thumb: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        thumbAlbum: {
          maxHeight: "x1ry4eqa",
          maxWidth: "xlkrthq",
          minHeight: "x6ttaax",
          position: "x1n2onr6",
          $$css: !0,
        },
        thumbAlbumAnnouncement: {
          maxHeight: "xsjqhse",
          maxWidth: "xmewjk2",
          minHeight: "x1cnsw78",
          $$css: !0,
        },
        thumbGallery: { maxHeight: "x1983irj", $$css: !0 },
        thumbChannelAlerts: { maxHeight: "xuyqlj2", $$css: !0 },
        hdIcon: {
          position: "x10l6tqk",
          bottom: "x1c7jfne",
          insetInlineStart: "x1ty65gk",
          left: null,
          right: null,
          zIndex: "xk3oba8",
          $$css: !0,
        },
      };
    function R(e) {
      var t = e.animateIn,
        n = t === void 0 ? !1 : t,
        r = e.bubbleHeight,
        a = e.bubbleWidth,
        i = e.caption,
        l = e.disableContextMenu,
        s = l === void 0 ? !1 : l,
        u = e.draggable,
        c = e.imgRef,
        d = e.isPreview,
        m = d === void 0 ? !1 : d,
        p = e.mediaData,
        _ = e.src,
        f = e.useDynamicSizing,
        h = p.fullHeight,
        y = p.fullWidth,
        C = h || r,
        b = y || a,
        v = {
          0: "x15kfjtz x1c4vz4f x2lah0s xdl72j9",
          2: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x14tgpju",
          1: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x127lhb5 x4afe7t xa3vuyk x10e4vud",
          3: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x14tgpju x127lhb5 x4afe7t xa3vuyk x10e4vud",
        }[(!!m << 1) | (!!n << 0)],
        S = f
          ? { width: "100%", height: "100%", objectFit: "cover" }
          : o("WAWebMessageCropping").getImgStyle(b, C, a, r),
        R = function (t) {
          s && t.preventDefault();
        };
      return g.jsx("img", {
        alt: i,
        src: _,
        className: v,
        style: S,
        ref: c,
        draggable: u,
        onContextMenu: R,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t,
        n,
        o = e.bubbleHeight,
        a = e.bubbleWidth,
        i = e.caption,
        l = e.disableContextMenu,
        s = l === void 0 ? !1 : l,
        u = e.draggable,
        c = e.imgRef,
        d = e.mediaData,
        m = e.useDynamicSizing,
        p =
          (t = (n = d.fullPreviewData) == null ? void 0 : n.url()) != null
            ? t
            : null,
        _ =
          p != null
            ? p
            : d.preview instanceof r("WAWebMediaOpaqueData")
              ? d.preview.url()
              : null;
      return g.jsx(R, {
        imgRef: c,
        mediaData: d,
        caption: i,
        bubbleWidth: a,
        bubbleHeight: o,
        isPreview: p == null,
        src: _,
        useDynamicSizing: m,
        disableContextMenu: s,
        draggable: u,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, p),
        l = i.albumMsgs,
        d = i.captionComponent,
        m = i.contentContainerClassName,
        f = i.currentAlbumMessageIndex,
        h = f === void 0 ? 0 : f,
        v = i.displayAuthor,
        E = i.displayType,
        k = i.hideMeta,
        I = i.isMsgVisible,
        $ = i.maxWidth,
        P = i.msg,
        N = i.onThumbClick,
        M = i.overlayContent,
        w = i.preventDownload,
        A = w === void 0 ? !1 : w,
        F = i.theme,
        O = i.thumbClassName,
        B = i.zoomMsg,
        W = C(null),
        q = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getFooter,
          o("WAWebMsgGetters").getIsFromTemplate,
          o("WAWebMsgGetters").getIsCarouselCard,
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsPSA,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getSupportsMessageFooter,
          o("WAWebFrontendMsgGetters").getText,
        ]),
        U = q[0],
        V = q[1],
        H = q[2],
        G = q[3],
        z = q[4],
        j = q[5],
        K = q[6],
        Q = q[7],
        X = q[8],
        Y = q[9],
        J = q[10],
        Z = q[11],
        ee = q[12],
        te = q[13],
        ne = q[14],
        re = q[15],
        oe = o("WAWebFrontendMsgGetters").getChat(P.unsafe()),
        ae = o("useWAWebModelValues").useModelValues(i.mediaData, [
          "aspectRatio",
          "fullPreviewData",
          "preview",
          "mediaStage",
          "fullWidth",
          "fullHeight",
          "size",
          "progressiveStage",
          "type",
        ]),
        ie = o("useWAWebSendViewCount").useSendViewCount(P.id, {
          mediaData: ae,
          displayType: i.displayType,
        }),
        le = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(P),
        se = function () {
          o("WAWebModalManager").ModalManager.open(
            g.jsx(r("WAWebMediaMissingModal.react"), { msg: P.unsafe() }),
          );
        },
        ue = function (t) {
          if (!I) return null;
          var e = I(t);
          if (typeof e == "boolean" || e == null) return null;
          var n = e.getImgNode,
            r = e.getImgNodeByMsgKey,
            o = e.isCardVisible;
          return n != null ? n() : r != null && o != null && o(t) ? r(t) : null;
        },
        ce = function () {
          (P.forceDownloadMediaEvenIfExpensive().catch(function () {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-picture] failed to force download media",
                  ])),
              )
              .sendLogs("failed-to-force-download-media");
          }),
            x("clickToDownload", o("WAWebStateUtils").unproxy(P.unsafe())));
        },
        de = function () {
          P.cancelDownload();
        },
        me = function () {
          P.cancelUpload();
        },
        pe = function () {
          P.resumeUpload().catch(function () {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-picture] failed to resume upload",
                  ])),
              )
              .sendLogs("failed-to-resume-upload");
          });
        },
        _e = function () {
          P.resumeRemoteUpload().catch(function () {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-picture] failed to resume remote upload",
                  ])),
              )
              .sendLogs("failed-to-resume-remote-upload");
          });
        },
        fe = function () {
          return te === o("WAWebMsgType").MSG_TYPE.IMAGE &&
            !r("isStringNullOrEmpty")(V)
            ? V
            : void 0;
        },
        ge = function () {
          return W.current;
        };
      y(a, function () {
        return { getImgNode: ge };
      });
      var he = new Set([
          o("WAWebTypesMedia").DisplayTheme.Album,
          o("WAWebTypesMedia").DisplayTheme.AlbumV2,
          o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
        ]),
        ye = function (t) {
          if (
            (t && t.stopPropagation(),
            Y &&
              o("WAWebWamChatPSALogger").logChatPSAMediaPlay(
                o("WAWebWamMsgUtils").getWamMediaType(P),
                P.campaignId,
                K.id,
              ),
            x("clickToView", o("WAWebStateUtils").unproxy(P.unsafe())),
            F != null && he.has(F))
          ) {
            var e = new Set(
              (l || []).map(function (e) {
                return e.id.toString();
              }),
            );
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy((B || P).unsafe()),
              getZoomNode: ue,
              highlightedMsgIds: e,
              shouldShowNumberText:
                F === o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
            });
          } else
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(P.unsafe()),
              getZoomNode: ue,
            });
        },
        Ce =
          o("WAUnicodeUtils").numCodepoints(re != null ? re : "") >
          o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH,
        be = o("WAWebMessageCropping").getBubbleDimension(
          te,
          z,
          j,
          ae.aspectRatio,
          h,
          (n = l == null ? void 0 : l.length) != null ? n : 0,
          F,
          E,
          Ce,
          $,
          o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(l),
        ),
        ve = be.bubbleHeight,
        Se = be.bubbleWidth,
        Re = babelHelpers.extends(
          { width: Se, height: ve },
          F === o("WAWebTypesMedia").DisplayTheme.AlbumV2 && {
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
          },
        ),
        Le = fe(),
        Ee =
          !r("isStringNullOrEmpty")(Le) || d != null
            ? null
            : g.jsx(r("WAWebMessageThumbShadeBottom.react"), {}),
        ke =
          Se < ve && o("WAWebMessageCropping").canUseCustomCropping(te, F, E),
        Ie = o("WAWebDisplayType").isWideDisplay(E),
        Te =
          !r("isStringNullOrEmpty")(Le) && (F == null || !b.includes(F))
            ? g.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x9f619 x1d8l2j3 xm7lytj x11lfxj5 xs9asl8 x25sj25",
                    },
                    4: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 x16cfgq2",
                    },
                    2: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx",
                    },
                    6: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 xs9asl8 x25sj25 xno0opx",
                    },
                    1: {
                      className:
                        "x9f619 x1d8l2j3 xm7lytj x11lfxj5 x25sj25 xcmr1wf",
                    },
                    5: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 x25sj25 x16cfgq2 xcmr1wf",
                    },
                    3: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 x25sj25 xno0opx xcmr1wf",
                    },
                    7: {
                      className:
                        "x9f619 xm7lytj x11lfxj5 x25sj25 xno0opx xcmr1wf",
                    },
                  }[(!!ke << 2) | (!!Ie << 1) | (!!Y << 0)],
                  {
                    children: g.jsx(r("WAWebMessageCaption.react"), {
                      msg: P.unsafe(),
                      trusted: i.trusted,
                      spacer: !(ne && G),
                      testId: "image-caption",
                    }),
                  },
                ),
              )
            : null,
        De = null;
      if (E === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW)
        ((Te = null), (De = null), (Ee = null));
      else if (E === o("WAWebDisplayType").DISPLAY_TYPE.EDITING)
        De = N != null ? N : null;
      else if (M != null) De = N || ye;
      else {
        var xe = ae.mediaStage;
        De = D(xe, N, ye, de, me, ce, pe, _e, se);
      }
      var $e =
          o("WAWebMsgSelectors").showForwarded(P) &&
          i.theme !== o("WAWebTypesMedia").DisplayTheme.Album &&
          i.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 &&
          i.displayType !==
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW,
        Pe =
          F === o("WAWebTypesMedia").DisplayTheme.Album ||
          F === o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        Ne = (_ || (_ = r("stylex")))(
          S.bubble,
          ke && S.bubblePortrait,
          Pe && S.bubbleAlbum,
          Ie && S.bubbleAnnouncement,
          i.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            S.bubbleChannelAlerts,
          i.theme === o("WAWebTypesMedia").DisplayTheme.PhotoPoll &&
            S.bubbleMaxWidthPhotoPoll,
        ),
        Me =
          i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO ||
          i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
        we = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          Ne,
          { 0: "", 1: "x193iq5w" }[!!Me << 0],
        ),
        Ae = v
          ? g.jsx(
              "div",
              babelHelpers.extends(
                {},
                (_ || (_ = r("stylex"))).props(
                  S.author,
                  $e && o("WAWebUISpacing").uiPadding.bottom0,
                  o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(
                    oe,
                  ) && S.authorElevatedPushNames,
                ),
                {
                  children: g.jsx(r("WAWebMessageAuthor.react"), {
                    msg: P,
                    contact: ee,
                    displayType: i.displayType,
                  }),
                },
              ),
            )
          : null,
        Fe = $e
          ? g.jsx(r("WAWebMessageForwardedIndicator.react"), {
              msg: P.unsafe(),
              xstyle: [
                S.forwardedIndicator,
                v && S.forwardedIndicatorHasAuthor,
              ],
            })
          : null,
        Oe = g.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
          msg: P,
        }),
        Be = i.quotedMsg
          ? g.jsx(
              "div",
              babelHelpers.extends(
                {},
                (_ || (_ = r("stylex"))).props(
                  S.quote,
                  o("WAWebUISpacing").uiMargin.bottom3,
                  ke && S.quotePortrait,
                  Ie && S.quoteAnnouncement,
                ),
                { children: i.quotedMsg },
              ),
            )
          : null,
        We = i.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        qe = _(
          S.thumb,
          !!M && S.overlay,
          !!M && Ie && S.overlayAnnouncement,
          Pe && S.thumbAlbum,
          Pe && Ie && S.thumbAlbumAnnouncement,
          We && S.thumbGallery,
          i.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            S.thumbChannelAlerts,
        ),
        Ue;
      M == null &&
        k !== !0 &&
        F !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 &&
        (Ue = g.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "xrb244j x10l6tqk x11dcrhx xhtitgo" },
              2: { className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs" },
              1: { className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs" },
              3: { className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs" },
            }[(!!Le << 1) | (!!Pe << 0)],
            {
              children: g.jsx(o("WAWebMessageMeta.react").Meta, {
                msg: P,
                displayType: E,
                isAlbum: Pe,
              }),
            },
          ),
        ));
      var Ve = !A && !r("WAWebEnvironment").isWindows,
        He = g.jsxs("div", {
          className: m,
          ref: ie,
          children: [
            Ae,
            Fe,
            Oe,
            Be,
            g.jsx(r("WAWebBizCtwaContext.react"), {
              msg: P.unsafe(),
              wrapperClass: "xdj266r x14z9mp xahult9 x1lziwak",
            }),
            g.jsxs(o("WAWebClickable.react").Clickable, {
              dataTestId: "image-thumb",
              className: r("isStringNullOrEmpty")(O) ? qe : O,
              onClick: De,
              ariaLabel: s._(/*BTDS*/ "Open picture"),
              focusTheme: o("WAWebClickable.react").FocusTheme.Image,
              inlineStyle: Re,
              children: [
                M == null &&
                  g.jsx(T, {
                    mediaData: o("WAWebStateUtils").unproxy(ae),
                    msg: o("WAWebStateUtils").unproxy(P),
                  }),
                g.jsx(r("WAWebMediaUrlProvider"), {
                  mediaData: ae,
                  placeholderRenderer: function () {
                    return g.jsx(L, {
                      useDynamicSizing:
                        E === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
                        E === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
                      imgRef: W,
                      mediaData: ae,
                      caption: fe(),
                      bubbleWidth: Se,
                      bubbleHeight: ve,
                      draggable: Ve,
                      disableContextMenu: A,
                    });
                  },
                  downloadMedia: le,
                  renderProgressively: !0,
                  children: function (t, n) {
                    return g.jsx(R, {
                      useDynamicSizing:
                        E === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
                        E === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
                      isPreview: n,
                      imgRef: W,
                      mediaData: ae,
                      caption: fe(),
                      bubbleWidth: Se,
                      bubbleHeight: ve,
                      src: t,
                      animateIn: !n,
                      draggable: Ve,
                      disableContextMenu: A,
                    });
                  },
                }),
                Ee,
                g.jsx(r("WAWebHDMediaIconWrapper.react"), {
                  height: ae.fullHeight,
                  width: ae.fullWidth,
                  type: ae.type,
                  xstyle: S.hdIcon,
                }),
              ],
            }),
            d || Te,
            g.jsx(r("WAWebBizTemplateMessageFooter.react"), {
              dir: H,
              footer: G,
              isShown: ne,
              msg: P.unsafe(),
              rtl: Z,
              trusted: i.trusted,
              type: te,
            }),
            Ue,
          ],
        });
      return Te
        ? g.jsx(r("WAWebMessageBubbleHiddenText.react"), {
            contact: ee,
            msg: P.unsafe(),
            className: we,
            onClick: o("WAWebStopEvent").stopPropagation,
            children: He,
          })
        : (M != null &&
            (He = g.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x6s0dn4 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x78zum5 x1iyjqo2 xs83m0k x1r8uery xl56j7k xjmpccy x6ikm8r x10wlt62 x1n2onr6",
                  },
                  1: {
                    className:
                      "x6s0dn4 xaejkm2 x1uuy6ko x1gfim23 xqfj769 x1ypdohk x78zum5 x1iyjqo2 xs83m0k x1r8uery xl56j7k x6ikm8r x10wlt62 x1n2onr6 x1idnn2",
                  },
                }[!!Ie << 0],
                { children: [He, M] },
              ),
            )),
          g.jsx("div", {
            className: we,
            onClick: o("WAWebStopEvent").stopPropagation,
            children: He,
          }));
    }
    E.displayName = E.name + " [from " + i.id + "]";
    var k = E,
      I = k;
    function T(e) {
      var t = e.mediaData,
        n = e.msg,
        a = o("useWAWebModelValues").useModelValues(t, [
          "mediaStage",
          "progressiveStage",
        ]),
        i = a.mediaStage,
        l = a.progressiveStage,
        s = null;
      switch (i) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          break;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
          s = g.jsx(o("WAWebMediaStateControls.react").Pending, {
            cancelable: !0,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          s = g.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: t.size,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
          s = g.jsx(o("WAWebMediaStateControls.react").Pending, {
            cancelable: !0,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          s = g.jsx(o("WAWebMediaStateControls.react").Upload, {
            filesize: t.size,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          s = g.jsx(o("WAWebMediaStateControls.react").Upload, {
            filesize: t.size,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
          s = g.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: t.size,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          s = o("WAWebMsgGetters").getIsFailed(n)
            ? null
            : g.jsx(o("WAWebMediaStateControls.react").Pending, {});
          break;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          l == null &&
            (s = g.jsx(o("WAWebMediaStateControls.react").Pending, {
              cancelable: !0,
            }));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Images should be copied in memory when selected",
                ])),
            )
            .sendLogs("media-image-not-readable-error");
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
          s = g.jsx(o("WAWebMediaStateControls.react").Pending, {});
      }
      return g.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: "fade-ease-out",
        children: s,
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e, t, n, a, i, l, s, u, c) {
      switch (e) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          return t || n;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
          return a;
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          return l;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
          return i;
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          return s;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          return u;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          return t || c;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
          return t || n;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          return;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          return;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          return (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Images should be copied in memory when selected",
                  ])),
              )
              .sendLogs("media-image-not-readable-error"),
            r("WAWebShowMediaNotReadableModal")
          );
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          return;
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
          return;
      }
    }
    function x(e, t) {
      if (t.isCarouselCard)
        switch (e) {
          case "clickToDownload":
            o(
              "WAWebInteractiveMessageCarouselLogEvents",
            ).logCarouselCardClickToDownload(t);
            return;
          case "clickToView":
            o(
              "WAWebInteractiveMessageCarouselLogEvents",
            ).logCarouselCardClickToView(t);
        }
    }
    l.ImageMessage = I;
  },
  226,
);
