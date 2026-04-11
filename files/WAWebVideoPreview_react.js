__d(
  "WAWebVideoPreview.react",
  [
    "fbt",
    "WALogger",
    "WAUnicodeUtils",
    "WAWebABProps",
    "WAWebClickable.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebHDMediaIconWrapper.react",
    "WAWebHDMediaUtils",
    "WAWebInteractiveMessageCarouselLogEvents",
    "WAWebMedia",
    "WAWebMediaAlbumUtils",
    "WAWebMediaConstants",
    "WAWebMediaMissingModal.react",
    "WAWebMediaOpaqueData",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebMessageCropping",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebMessageThumbShadeTop.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMusicNewsletterAttribution.react",
    "WAWebPipButton.react",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebShowMediaNotReadableModal",
    "WAWebStateUtils",
    "WAWebTypesMedia",
    "WAWebURLUtils",
    "WAWebVideo.react",
    "WAWebVideoPipLargeIcon.react",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWamMsgUtils",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useImperativeHandle,
      g = p.useRef,
      h = p.useState,
      y = "xekv6nw-B",
      C = {
        thumb: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "xkgd8lh",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          "::before_position": "x1hmns74",
          "::before_top": "x1y3wzot",
          "::before_insetInlineStart": "x1682cnc",
          "::before_zIndex": "xvi4grz",
          "::before_width": "x1rmj1tg",
          "::before_height": "xszcg87",
          "::before_content": "x1cpjm7i",
          "::before_opacity": "x56jcce",
          $$css: !0,
        },
        inAlbum: {
          height: "x19hm5wc",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        cursorPointer: { cursor: "x1ypdohk", $$css: !0 },
        musicAttribution: {
          zIndex: "x11uqc5h",
          position: "x10l6tqk",
          top: "xfr5jun",
          insetInlineStart: "xrr41r3",
          insetInlineEnd: "x1f889gz",
          left: null,
          right: null,
          $$css: !0,
        },
        musicAttributionHover: {
          insetInlineStart: "x9pwknu",
          insetInlineEnd: "xeer0ze",
          left: null,
          right: null,
          transition: "x1xgqf3o",
          $$css: !0,
        },
        thumbChannelAlerts: { maxHeight: "xuyqlj2", $$css: !0 },
        overlay: {
          position: "x1n2onr6",
          maxWidth: "xjmpccy",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          "::before_position": "x1hmns74",
          "::before_zIndex": "x6m1997",
          "::before_width": "x1rmj1tg",
          "::before_height": "xszcg87",
          "::before_content": "x1cpjm7i",
          "::before_background": "x7wzjsu",
          "::before_borderStartStartRadius": "x1nf3qbo",
          "::before_borderStartEndRadius": "x1k12aft",
          "::before_borderEndEndRadius": "xptwhb6",
          "::before_borderEndStartRadius": "x10ad0jm",
          $$css: !0,
        },
        ctwaThumbWidth: { width: "xg80ozm", $$css: !0 },
      },
      b = { PREVIEW: "PREVIEW", FLOATER: "FLOATER" };
    function v(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = i.albumMsgs,
        d = i.currentAlbumMessageIndex,
        p = d === void 0 ? 0 : d,
        y = i.displayType,
        v = i.hasOverlay,
        R = v === void 0 ? !1 : v,
        L = i.maxWidth,
        E = i.msg,
        k = i.theme,
        I = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getFooter,
          o("WAWebMsgGetters").getIsCarouselCard,
          o("WAWebMsgGetters").getGifAttribution,
          o("WAWebMsgGetters").getId,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsPSA,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebFrontendMsgGetters").getIsUnsentMedia,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getCtwaContext,
          o("WAWebMsgGetters").getSupportsMessageFooter,
          o("WAWebFrontendMsgGetters").getText,
        ]),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = I[3],
        P = I[4],
        N = I[5],
        M = I[6],
        w = I[7],
        A = I[8],
        F = I[9],
        O = I[10],
        B = I[11],
        W = I[12],
        q = I[13],
        U = I[14],
        V = I[15],
        H = I[16],
        G = I[17],
        z = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          o("WAWebMsgGetters").getCampaignId,
        ]),
        j = z[0],
        K = o("useWAWebMsgValues").useMsgValues(i.msg.id, [
          o("WAWebMsgGetters").getFirstMusicAnnotation,
        ]),
        Q = K[0],
        X = Q != null;
      o("useWAWebModelValues").useModelValues(i.mediaData, [
        "aspectRatio",
        "preview",
        "fullPreviewData",
        "duration",
        "mediaStage",
        "fullWidth",
        "fullHeight",
        "size",
      ]);
      var Y = g(null),
        J = g(null),
        Z = i.mediaData,
        ee =
          k === o("WAWebTypesMedia").DisplayTheme.Album ||
          k === o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        te = h(function () {
          return r("WAWebPipController").isOpened(
            o("WAWebStateUtils").unproxy(E.unsafe()),
          )
            ? b.FLOATER
            : b.PREVIEW;
        }),
        ne = te[0],
        re = te[1],
        oe = h(!1),
        ae = oe[0],
        ie = oe[1],
        le =
          A &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_chat_psa_auto_play_videos",
          ),
        se = function (t) {
          var e = J.current;
          Z.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            ne !== b.FLOATER &&
            e &&
            (t && t.stopPropagation(), e.play());
        },
        ue = function (t) {
          var e = J.current;
          Z.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            e &&
            (t && t.stopPropagation(), e.pauseAndReset());
        };
      _(function () {
        (o("WAWebMiscGatingUtils").isHighQualityVideoThumbnailsEnabled() &&
          o("WAWebMedia").downloadVideoThumbnail({
            msg: o("WAWebStateUtils").unproxy(E),
            chat: o("WAWebFrontendMsgGetters").getChat(E.unsafe()),
          }),
          le &&
            E.downloadMedia({
              downloadEvenIfExpensive: !1,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MSG_RENDER,
              isUserInitiated: !1,
            }));
      }, []);
      var ce = function () {
          o("WAWebModalManager").ModalManager.open(
            m.jsx(r("WAWebMediaMissingModal.react"), { msg: E.unsafe() }),
          );
        },
        de = function () {
          (E.forceDownloadMediaEvenIfExpensive(),
            S("clickToDownload", o("WAWebStateUtils").unproxy(E.unsafe())));
        },
        me = function () {
          E.cancelDownload();
        },
        pe = function () {
          E.cancelUpload();
        },
        _e = function () {
          E.resumeUpload();
        },
        fe = function () {
          E.resumeRemoteUpload();
        },
        ge = function (t) {
          (t && t.stopPropagation(),
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebMediaUnsupportedModal.react"), {
                msg: o("WAWebStateUtils").unproxy(E.unsafe()),
              }),
            ));
        },
        he = function (t) {
          if (
            (t && t.stopPropagation(),
            A &&
              o("WAWebWamChatPSALogger").logChatPSAMediaPlay(
                o("WAWebWamMsgUtils").getWamMediaType(E),
                j,
                M.id,
              ),
            S("clickToDownload", o("WAWebStateUtils").unproxy(E.unsafe())),
            ee)
          ) {
            var e = i.zoomMsg || E,
              n = new Set(
                (l || []).map(function (e) {
                  return e.id.toString();
                }),
              );
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(e.unsafe()),
              highlightedMsgIds: n,
            });
          } else
            o("WAWebCmd").Cmd.mediaViewerModal({
              msg: o("WAWebStateUtils").unproxy(E.unsafe()),
            });
        },
        ye = function (t) {
          (t && t.stopPropagation(), le && ue());
          var e = Y.current ? Y.current.getBoundingClientRect() : null;
          r("WAWebPipController").openPiP(
            o("WAWebStateUtils").unproxy(E.unsafe()),
            0,
            e,
          );
        },
        Ce = function () {
          ne !== b.PREVIEW && re(b.PREVIEW);
        },
        be = function () {
          ne !== b.FLOATER && re(b.FLOATER);
        };
      (f(a, function () {
        return { play: he };
      }),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          M.toString() + "_pip_did_open",
          be,
        ),
        o("useWAWebListener").useListener(
          r("WAWebPipController"),
          M.toString() + "_pip_did_close",
          Ce,
        ));
      var ve = null,
        Se = null,
        Re = Z.mediaStage;
      switch (Re) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          le
            ? (se(), (Se = he))
            : ((ve = m.jsx(o("WAWebMediaStateControls.react").Play, {})),
              (Se = he));
          break;
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Play, {})),
            (Se = he));
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: Z.size,
          })),
            (Se = de));
          break;
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Pending, {
            cancelable: !0,
          })),
            (Se = pe));
          break;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Pending, {
            cancelable: !0,
          })),
            (Se = me));
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Upload, {
            filesize: Z.size,
          })),
            (Se = _e));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((ve = m.jsx(o("WAWebMediaStateControls.react").Upload, {
            filesize: Z.size,
          })),
            (Se = fe));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          Se = ce;
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
          O ||
            ((ve = m.jsx(o("WAWebMediaStateControls.react").Download, {
              filesize: Z.size,
            })),
            (Se = ge));
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          U || (ve = m.jsx(o("WAWebMediaStateControls.react").Pending, {}));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Videos should be copied in memory when selected",
                ])),
            )
            .sendLogs("media-image-not-readable-error"),
            (Se = r("WAWebShowMediaNotReadableModal")));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
          ve = m.jsx(o("WAWebMediaStateControls.react").Pending, {});
          break;
      }
      y === o("WAWebDisplayType").DISPLAY_TYPE.EDITING && (Se = null);
      var Le = parseInt(Z.duration, 10)
          ? o("WAWebClock").Clock.durationStr(Z.duration)
          : null,
        Ee = r("isStringNullOrEmpty")(Le)
          ? null
          : m.jsxs("span", {
              className:
                "x78zum5 x6s0dn4 x10l6tqk xy1j3rs xrr41r3 x11uqc5h xx3o462 x1ncwhqj x152skdk x1dxgm4b",
              children: [
                m.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1rg5ohu x1p8j9ns x17t9dm2 x16dsc37" },
                      1: {
                        className:
                          "x1rg5ohu x1p8j9ns x17t9dm2 x16dsc37 x4h0osi",
                      },
                    }[
                      !!o("WAWebHDMediaUtils").isHdVideo(
                        Z.fullHeight,
                        Z.fullWidth,
                      ) << 0
                    ],
                    {
                      children: m.jsx(r("WAWebHDMediaIconWrapper.react"), {
                        height: Z.fullHeight,
                        width: Z.fullWidth,
                        type: Z.type,
                      }),
                    },
                  ),
                ),
                m.jsx("span", { children: Le }),
              ],
            }),
        ke =
          o("WAUnicodeUtils").numCodepoints(G != null ? G : "") >
          o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH,
        Ie = o("WAWebMessageCropping").getBubbleDimension(
          q,
          !1,
          P,
          Z.aspectRatio,
          p,
          (n = l == null ? void 0 : l.length) != null ? n : 0,
          k,
          y,
          ke,
          L,
          o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(l),
        ),
        Te = Ie.bubbleHeight,
        De = Ie.bubbleWidth,
        xe = babelHelpers.extends(
          { width: De, height: Te },
          k === o("WAWebTypesMedia").DisplayTheme.AlbumV2 && {
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
          },
        ),
        $e = Z.fullHeight || Te,
        Pe = Z.fullWidth || De,
        Ne = o("WAWebMessageCropping").getImgStyle(Pe, $e, De, Te),
        Me = function (t) {
          return t instanceof r("WAWebMediaOpaqueData")
            ? babelHelpers.extends(
                {
                  backgroundImage: r("WAWebURLUtils").thumbAsBackgroundImage(
                    t.url(),
                  ).backgroundImage,
                },
                Ne,
              )
            : void 0;
        },
        we = Me(Z.preview),
        Ae = Me(Z.fullPreviewData),
        Fe =
          Z.aspectRatio >= 1
            ? { width: "auto", height: Te }
            : { width: De, height: "auto" },
        Oe =
          Z.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && le
            ? m.jsx("div", {
                className:
                  "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k xh8yej3 x5yr21d",
                children: m.jsx(r("WAWebVideo.react"), {
                  ref: J,
                  src: Z.renderableUrl,
                  style: Fe,
                  onEnded: se,
                  onLoadedMetadata: se,
                  autoPlay: !0,
                  muted: !0,
                }),
              })
            : m.jsxs(m.Fragment, {
                children: [
                  we
                    ? m.jsx("div", {
                        className:
                          "x10l6tqk x1hhq9f1 x1ezo4zr x1vjfegm x1okw0bk xh8yej3 x5yr21d x121ad3m x1y2vyrr x1qp9xe7 xeykx7r xztyhrg x18d0r48 x14tgpju",
                        style: we,
                      })
                    : null,
                  Ae
                    ? m.jsx("div", {
                        className:
                          "x10l6tqk x1hhq9f1 x1ezo4zr x1vjfegm x1okw0bk xh8yej3 x5yr21d x121ad3m x1y2vyrr x1qp9xe7 xeykx7r xztyhrg x18d0r48 x127lhb5 x4afe7t xa3vuyk x10e4vud",
                        style: Ae,
                      })
                    : null,
                ],
              }),
        Be;
      switch (Z.mediaStage) {
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          Be = m.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x1rozsjd xg01cxk x23gdha" },
                1: { className: "x1rozsjd x23gdha x1hc1fzr" },
              }[!!(i.hover === !0 || ae) << 0],
              {
                children: m.jsx(o("WAWebPipButton.react").PiPButton, {
                  onClick: ye,
                  onFocus: function () {
                    return ie(!0);
                  },
                  onBlur: function () {
                    return ie(!1);
                  },
                  theme: o("WAWebPipButton.react").PIP_BUTTON_THEME.PREVIEW,
                }),
              },
            ),
          );
          break;
        default:
          Be = null;
      }
      var We = m.jsx(r("WAWebMessageThumbShadeBottom.react"), {}),
        qe = X ? m.jsx(r("WAWebMessageThumbShadeTop.react"), {}) : null;
      y === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW &&
        ((Se = null), (Be = null), (ve = null), (We = null));
      var Ue;
      switch (ne) {
        case b.PREVIEW:
          Ue = m.jsxs(m.Fragment, { children: [Be, ve] });
          break;
        case b.FLOATER:
          Ue = m.jsx(r("WAWebPipOverlay.react"), {
            icon: m.jsx(
              o("WAWebVideoPipLargeIcon.react").VideoPipLargeIcon,
              {},
            ),
            children: s._(
              /*BTDS*/ "This video is playing in picture in picture.",
            ),
          });
          break;
      }
      return m.jsxs(o("WAWebClickable.react").Clickable, {
        ref: Y,
        dataTestId: "video-content",
        className: (c || (c = r("stylex")))(
          C.thumb,
          ee && C.inAlbum,
          ne === b.PREVIEW &&
            y !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING &&
            C.cursorPointer,
          R === !0 && C.overlay,
          V != null && C.ctwaThumbWidth,
          y === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            C.thumbChannelAlerts,
        ),
        onClick: Se,
        inlineStyle: xe,
        children: [
          R ||
          k === o("WAWebTypesMedia").DisplayTheme.AlbumV2 ||
          y === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW
            ? null
            : Ue,
          Oe,
          We,
          qe,
          R || y === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW
            ? null
            : Ee,
          m.jsx(r("WAWebMusicNewsletterAttribution.react"), {
            playing: !1,
            msg: E.unsafe(),
            xstyle:
              i.hover === !0
                ? [C.musicAttribution, C.musicAttributionHover]
                : C.musicAttribution,
          }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
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
    l.default = v;
  },
  226,
);
