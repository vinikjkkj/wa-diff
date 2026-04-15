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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.animateIn,
        r = e.bubbleHeight,
        a = e.bubbleWidth,
        i = e.caption,
        l = e.disableContextMenu,
        s = e.draggable,
        u = e.imgRef,
        c = e.isPreview,
        d = e.mediaData,
        m = e.src,
        p = e.useDynamicSizing,
        _ = n === void 0 ? !1 : n,
        f = l === void 0 ? !1 : l,
        h = c === void 0 ? !1 : c,
        y = d.fullHeight,
        C = d.fullWidth,
        b = y || r,
        v = C || a,
        S;
      t[0] !== _ || t[1] !== h
        ? ((S = {
            0: "x15kfjtz x1c4vz4f x2lah0s xdl72j9",
            2: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x14tgpju",
            1: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x127lhb5 x4afe7t xa3vuyk x10e4vud",
            3: "x15kfjtz x1c4vz4f x2lah0s xdl72j9 x14tgpju x127lhb5 x4afe7t xa3vuyk x10e4vud",
          }[(!!h << 1) | (!!_ << 0)]),
          (t[0] = _),
          (t[1] = h),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== r || t[4] !== a || t[5] !== b || t[6] !== v || t[7] !== p
        ? ((L = p
            ? { width: "100%", height: "100%", objectFit: "cover" }
            : o("WAWebMessageCropping").getImgStyle(v, b, a, r)),
          (t[3] = r),
          (t[4] = a),
          (t[5] = b),
          (t[6] = v),
          (t[7] = p),
          (t[8] = L))
        : (L = t[8]);
      var E = L,
        k;
      t[9] !== f
        ? ((k = function (t) {
            f && t.preventDefault();
          }),
          (t[9] = f),
          (t[10] = k))
        : (k = t[10]);
      var I = k,
        T;
      return (
        t[11] !== i ||
        t[12] !== s ||
        t[13] !== I ||
        t[14] !== R ||
        t[15] !== u ||
        t[16] !== E ||
        t[17] !== m
          ? ((T = g.jsx("img", {
              alt: i,
              src: m,
              className: R,
              style: E,
              ref: u,
              draggable: s,
              onContextMenu: I,
            })),
            (t[11] = i),
            (t[12] = s),
            (t[13] = I),
            (t[14] = R),
            (t[15] = u),
            (t[16] = E),
            (t[17] = m),
            (t[18] = T))
          : (T = t[18]),
        T
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.bubbleHeight,
        a = e.bubbleWidth,
        i = e.caption,
        l = e.disableContextMenu,
        s = e.draggable,
        u = e.imgRef,
        c = e.mediaData,
        d = e.useDynamicSizing,
        m = l === void 0 ? !1 : l,
        p;
      if (t[0] !== c.fullPreviewData) {
        var _, f;
        ((p =
          (_ = (f = c.fullPreviewData) == null ? void 0 : f.url()) != null
            ? _
            : null),
          (t[0] = c.fullPreviewData),
          (t[1] = p));
      } else p = t[1];
      var h = p,
        y;
      t[2] !== h || t[3] !== c.preview
        ? ((y =
            h != null
              ? h
              : c.preview instanceof r("WAWebMediaOpaqueData")
                ? c.preview.url()
                : null),
          (t[2] = h),
          (t[3] = c.preview),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b = h == null,
        v;
      return (
        t[5] !== n ||
        t[6] !== a ||
        t[7] !== i ||
        t[8] !== m ||
        t[9] !== s ||
        t[10] !== u ||
        t[11] !== c ||
        t[12] !== C ||
        t[13] !== b ||
        t[14] !== d
          ? ((v = g.jsx(R, {
              imgRef: u,
              mediaData: c,
              caption: i,
              bubbleWidth: a,
              bubbleHeight: n,
              isPreview: b,
              src: C,
              useDynamicSizing: d,
              disableContextMenu: m,
              draggable: s,
            })),
            (t[5] = n),
            (t[6] = a),
            (t[7] = i),
            (t[8] = m),
            (t[9] = s),
            (t[10] = u),
            (t[11] = c),
            (t[12] = C),
            (t[13] = b),
            (t[14] = d),
            (t[15] = v))
          : (v = t[15]),
        v
      );
    }
    function E(e) {
      var t,
        n = o("react-compiler-runtime").c(130),
        a,
        i;
      n[0] !== e
        ? ((i = e.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, p)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.albumMsgs,
        c = l.captionComponent,
        d = l.contentContainerClassName,
        m = l.currentAlbumMessageIndex,
        f = l.displayAuthor,
        h = l.displayType,
        v = l.hideMeta,
        E = l.isMsgVisible,
        x = l.maxWidth,
        $ = l.msg,
        w = l.onThumbClick,
        A = l.overlayContent,
        F = l.preventDownload,
        O = l.theme,
        B = l.thumbClassName,
        W = l.zoomMsg,
        q = m === void 0 ? 0 : m,
        U = F === void 0 ? !1 : F,
        V = C(null),
        H;
      if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
        var G, z;
        ((H = [
          (G = o("WAWebMsgGetters")).getAck,
          G.getCaption,
          (z = o("WAWebFrontendMsgGetters")).getDir,
          G.getFooter,
          G.getIsFromTemplate,
          G.getIsCarouselCard,
          G.getId,
          G.getIsFailed,
          G.getIsGroupMsg,
          G.getIsPSA,
          G.getIsSentByMe,
          z.getRtl,
          z.getSenderObj,
          G.getType,
          G.getSupportsMessageFooter,
          z.getText,
        ]),
          (n[3] = H));
      } else H = n[3];
      var j = o("useWAWebMsgValues").useMsgValues(a.msg.id, H),
        K = j[1],
        Q = j[2],
        X = j[3],
        Y = j[4],
        J = j[5],
        Z = j[6],
        ee = j[9],
        te = j[11],
        ne = j[12],
        re = j[13],
        oe = j[14],
        ae = j[15],
        ie = o("WAWebFrontendMsgGetters").getChat($.unsafe()),
        le;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = [
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
          (n[4] = le))
        : (le = n[4]);
      var se = o("useWAWebModelValues").useModelValues(a.mediaData, le),
        ue;
      n[5] !== se || n[6] !== a.displayType
        ? ((ue = { mediaData: se, displayType: a.displayType }),
          (n[5] = se),
          (n[6] = a.displayType),
          (n[7] = ue))
        : (ue = n[7]);
      var ce = o("useWAWebSendViewCount").useSendViewCount($.id, ue),
        de = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia($),
        me;
      n[8] !== $
        ? ((me = function () {
            o("WAWebModalManager").ModalManager.open(
              g.jsx(r("WAWebMediaMissingModal.react"), { msg: $.unsafe() }),
            );
          }),
          (n[8] = $),
          (n[9] = me))
        : (me = n[9]);
      var pe = me,
        _e;
      n[10] !== E
        ? ((_e = function (t) {
            if (!E) return null;
            var e = E(t);
            if (typeof e == "boolean" || e == null) return null;
            var n = e.getImgNode,
              r = e.getImgNodeByMsgKey,
              o = e.isCardVisible;
            return n != null
              ? n()
              : r != null && o != null && o(t)
                ? r(t)
                : null;
          }),
          (n[10] = E),
          (n[11] = _e))
        : (_e = n[11]);
      var fe = _e,
        ge;
      n[12] !== $
        ? ((ge = function () {
            ($.forceDownloadMediaEvenIfExpensive().catch(D),
              M("clickToDownload", o("WAWebStateUtils").unproxy($.unsafe())));
          }),
          (n[12] = $),
          (n[13] = ge))
        : (ge = n[13]);
      var he = ge,
        ye;
      n[14] !== $
        ? ((ye = function () {
            $.cancelDownload();
          }),
          (n[14] = $),
          (n[15] = ye))
        : (ye = n[15]);
      var Ce = ye,
        be;
      n[16] !== $
        ? ((be = function () {
            $.cancelUpload();
          }),
          (n[16] = $),
          (n[17] = be))
        : (be = n[17]);
      var ve = be,
        Se;
      n[18] !== $
        ? ((Se = function () {
            $.resumeUpload().catch(T);
          }),
          (n[18] = $),
          (n[19] = Se))
        : (Se = n[19]);
      var Re = Se,
        Le;
      n[20] !== $
        ? ((Le = function () {
            $.resumeRemoteUpload().catch(I);
          }),
          (n[20] = $),
          (n[21] = Le))
        : (Le = n[21]);
      var Ee = Le,
        ke;
      n[22] !== K || n[23] !== re
        ? ((ke = function () {
            return re === o("WAWebMsgType").MSG_TYPE.IMAGE &&
              !r("isStringNullOrEmpty")(K)
              ? K
              : void 0;
          }),
          (n[22] = K),
          (n[23] = re),
          (n[24] = ke))
        : (ke = n[24]);
      var Ie = ke,
        Te;
      n[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = function () {
            return V.current;
          }),
          (n[25] = Te))
        : (Te = n[25]);
      var De = Te,
        xe;
      (n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = function () {
            return { getImgNode: De };
          }),
          (n[26] = xe))
        : (xe = n[26]),
        y(i, xe));
      var $e;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = new Set([
            o("WAWebTypesMedia").DisplayTheme.Album,
            o("WAWebTypesMedia").DisplayTheme.AlbumV2,
            o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
          ])),
          (n[27] = $e))
        : ($e = n[27]);
      var Pe = $e,
        Ne;
      n[28] !== u ||
      n[29] !== fe ||
      n[30] !== Z ||
      n[31] !== ee ||
      n[32] !== $ ||
      n[33] !== O ||
      n[34] !== W
        ? ((Ne = function (t) {
            if (
              (t && t.stopPropagation(),
              ee &&
                o("WAWebWamChatPSALogger").logChatPSAMediaPlay(
                  o("WAWebWamMsgUtils").getWamMediaType($),
                  $.campaignId,
                  Z.id,
                ),
              M("clickToView", o("WAWebStateUtils").unproxy($.unsafe())),
              O != null && Pe.has(O))
            ) {
              var e = new Set((u || []).map(k));
              o("WAWebCmd").Cmd.mediaViewerModal({
                msg: o("WAWebStateUtils").unproxy((W || $).unsafe()),
                getZoomNode: fe,
                highlightedMsgIds: e,
                shouldShowNumberText:
                  O === o("WAWebTypesMedia").DisplayTheme.PhotoPoll,
              });
            } else
              o("WAWebCmd").Cmd.mediaViewerModal({
                msg: o("WAWebStateUtils").unproxy($.unsafe()),
                getZoomNode: fe,
              });
          }),
          (n[28] = u),
          (n[29] = fe),
          (n[30] = Z),
          (n[31] = ee),
          (n[32] = $),
          (n[33] = O),
          (n[34] = W),
          (n[35] = Ne))
        : (Ne = n[35]);
      var Me = Ne,
        we =
          o("WAUnicodeUtils").numCodepoints(ae != null ? ae : "") >
          o("WAWebMediaConstants").MAX_PORTRAIT_MEDIA_CAPTION_LENGTH,
        Ae = (t = u == null ? void 0 : u.length) != null ? t : 0,
        Fe;
      n[36] !== u ||
      n[37] !== q ||
      n[38] !== h ||
      n[39] !== J ||
      n[40] !== Y ||
      n[41] !== x ||
      n[42] !== se.aspectRatio ||
      n[43] !== we ||
      n[44] !== Ae ||
      n[45] !== O ||
      n[46] !== re
        ? ((Fe = o("WAWebMessageCropping").getBubbleDimension(
            re,
            Y,
            J,
            se.aspectRatio,
            q,
            Ae,
            O,
            h,
            we,
            x,
            o("WAWebMediaAlbumUtils").isAlbumPortraitOriented(u),
          )),
          (n[36] = u),
          (n[37] = q),
          (n[38] = h),
          (n[39] = J),
          (n[40] = Y),
          (n[41] = x),
          (n[42] = se.aspectRatio),
          (n[43] = we),
          (n[44] = Ae),
          (n[45] = O),
          (n[46] = re),
          (n[47] = Fe))
        : (Fe = n[47]);
      var Oe = Fe,
        Be = Oe.bubbleHeight,
        We = Oe.bubbleWidth,
        qe;
      n[48] !== O
        ? ((qe = O === o("WAWebTypesMedia").DisplayTheme.AlbumV2 && {
            transition: "height 0.3s ease-in-out, width 0.3s ease-in-out",
          }),
          (n[48] = O),
          (n[49] = qe))
        : (qe = n[49]);
      var Ue;
      n[50] !== Be || n[51] !== We || n[52] !== qe
        ? ((Ue = babelHelpers.extends({ width: We, height: Be }, qe)),
          (n[50] = Be),
          (n[51] = We),
          (n[52] = qe),
          (n[53] = Ue))
        : (Ue = n[53]);
      var Ve = Ue,
        He = Ie(),
        Ge =
          !r("isStringNullOrEmpty")(He) || c != null
            ? null
            : g.jsx(r("WAWebMessageThumbShadeBottom.react"), {}),
        ze =
          We < Be && o("WAWebMessageCropping").canUseCustomCropping(re, O, h),
        je = o("WAWebDisplayType").isWideDisplay(h),
        Ke =
          !r("isStringNullOrEmpty")(He) && (O == null || !b.includes(O))
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
                  }[(!!ze << 2) | (!!je << 1) | (!!ee << 0)],
                  {
                    children: g.jsx(r("WAWebMessageCaption.react"), {
                      msg: $.unsafe(),
                      trusted: a.trusted,
                      spacer: !(oe && X),
                      testId: "image-caption",
                    }),
                  },
                ),
              )
            : null,
        Qe;
      if (h === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW)
        ((Ke = null), (Qe = null), (Ge = null));
      else if (h === o("WAWebDisplayType").DISPLAY_TYPE.EDITING)
        Qe = w != null ? w : null;
      else if (A != null) Qe = w || Me;
      else {
        var Xe = se.mediaStage,
          Ye;
        (n[54] !== Ce ||
        n[55] !== ve ||
        n[56] !== he ||
        n[57] !== Me ||
        n[58] !== Xe ||
        n[59] !== w ||
        n[60] !== Ee ||
        n[61] !== Re ||
        n[62] !== pe
          ? ((Ye = N(Xe, w, Me, Ce, ve, he, Re, Ee, pe)),
            (n[54] = Ce),
            (n[55] = ve),
            (n[56] = he),
            (n[57] = Me),
            (n[58] = Xe),
            (n[59] = w),
            (n[60] = Ee),
            (n[61] = Re),
            (n[62] = pe),
            (n[63] = Ye))
          : (Ye = n[63]),
          (Qe = Ye));
      }
      var Je =
          o("WAWebMsgSelectors").showForwarded($) &&
          a.theme !== o("WAWebTypesMedia").DisplayTheme.Album &&
          a.theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 &&
          a.displayType !==
            o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW,
        Ze =
          O === o("WAWebTypesMedia").DisplayTheme.Album ||
          O === o("WAWebTypesMedia").DisplayTheme.AlbumV2,
        et = (_ || (_ = r("stylex")))(
          S.bubble,
          ze && S.bubblePortrait,
          Ze && S.bubbleAlbum,
          je && S.bubbleAnnouncement,
          a.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            S.bubbleChannelAlerts,
          a.theme === o("WAWebTypesMedia").DisplayTheme.PhotoPoll &&
            S.bubbleMaxWidthPhotoPoll,
        ),
        tt =
          a.displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO ||
          a.displayType === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
        nt = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          et,
          { 0: "", 1: "x193iq5w" }[!!tt << 0],
        ),
        rt = f
          ? g.jsx(
              "div",
              babelHelpers.extends(
                {},
                (_ || (_ = r("stylex"))).props(
                  S.author,
                  Je && o("WAWebUISpacing").uiPadding.bottom0,
                  o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(
                    ie,
                  ) && S.authorElevatedPushNames,
                ),
                {
                  children: g.jsx(r("WAWebMessageAuthor.react"), {
                    msg: $,
                    contact: ne,
                    displayType: a.displayType,
                  }),
                },
              ),
            )
          : null,
        ot;
      n[64] !== f || n[65] !== $ || n[66] !== Je
        ? ((ot = Je
            ? g.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: $.unsafe(),
                xstyle: [
                  S.forwardedIndicator,
                  f && S.forwardedIndicatorHasAuthor,
                ],
              })
            : null),
          (n[64] = f),
          (n[65] = $),
          (n[66] = Je),
          (n[67] = ot))
        : (ot = n[67]);
      var at = ot,
        it;
      n[68] !== $
        ? ((it = g.jsx(r("WAWebMessagePaidPartnershipDisclaimerText.react"), {
            msg: $,
          })),
          (n[68] = $),
          (n[69] = it))
        : (it = n[69]);
      var lt = it,
        st = a.quotedMsg
          ? g.jsx(
              "div",
              babelHelpers.extends(
                {},
                (_ || (_ = r("stylex"))).props(
                  S.quote,
                  o("WAWebUISpacing").uiMargin.bottom3,
                  ze && S.quotePortrait,
                  je && S.quoteAnnouncement,
                ),
                { children: a.quotedMsg },
              ),
            )
          : null,
        ut = a.displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
        ct = _(
          S.thumb,
          !!A && S.overlay,
          !!A && je && S.overlayAnnouncement,
          Ze && S.thumbAlbum,
          Ze && je && S.thumbAlbumAnnouncement,
          ut && S.thumbGallery,
          a.displayType ===
            o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS &&
            S.thumbChannelAlerts,
        ),
        dt;
      if (
        A == null &&
        v !== !0 &&
        O !== o("WAWebTypesMedia").DisplayTheme.AlbumV2
      ) {
        var mt;
        n[70] !== He || n[71] !== Ze
          ? ((mt = {
              0: { className: "xrb244j x10l6tqk x11dcrhx xhtitgo" },
              2: { className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs" },
              1: { className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs" },
              3: { className: "x10l6tqk xhtitgo xceh6e4 xy1j3rs" },
            }[(!!He << 1) | (!!Ze << 0)]),
            (n[70] = He),
            (n[71] = Ze),
            (n[72] = mt))
          : (mt = n[72]);
        var pt;
        n[73] !== h || n[74] !== Ze || n[75] !== $
          ? ((pt = g.jsx(o("WAWebMessageMeta.react").Meta, {
              msg: $,
              displayType: h,
              isAlbum: Ze,
            })),
            (n[73] = h),
            (n[74] = Ze),
            (n[75] = $),
            (n[76] = pt))
          : (pt = n[76]);
        var _t;
        (n[77] !== mt || n[78] !== pt
          ? ((_t = g.jsx(
              "div",
              babelHelpers.extends({}, mt, { children: pt }),
            )),
            (n[77] = mt),
            (n[78] = pt),
            (n[79] = _t))
          : (_t = n[79]),
          (dt = _t));
      }
      var ft = !U && !r("WAWebEnvironment").isWindows,
        gt;
      n[80] !== $
        ? ((gt = $.unsafe()), (n[80] = $), (n[81] = gt))
        : (gt = n[81]);
      var ht;
      n[82] === Symbol.for("react.memo_cache_sentinel")
        ? ((ht = "xdj266r x14z9mp xahult9 x1lziwak"), (n[82] = ht))
        : (ht = n[82]);
      var yt;
      n[83] !== gt
        ? ((yt = g.jsx(r("WAWebBizCtwaContext.react"), {
            msg: gt,
            wrapperClass: ht,
          })),
          (n[83] = gt),
          (n[84] = yt))
        : (yt = n[84]);
      var Ct = Qe,
        bt;
      n[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((bt = s._(/*BTDS*/ "Open picture")), (n[85] = bt))
        : (bt = n[85]);
      var vt;
      n[86] !== se || n[87] !== $ || n[88] !== A
        ? ((vt =
            A == null &&
            g.jsx(P, {
              mediaData: o("WAWebStateUtils").unproxy(se),
              msg: o("WAWebStateUtils").unproxy($),
            })),
          (n[86] = se),
          (n[87] = $),
          (n[88] = A),
          (n[89] = vt))
        : (vt = n[89]);
      var St;
      n[90] !== Be ||
      n[91] !== We ||
      n[92] !== h ||
      n[93] !== ft ||
      n[94] !== Ie ||
      n[95] !== se ||
      n[96] !== U
        ? ((St = function () {
            return g.jsx(L, {
              useDynamicSizing:
                h === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
                h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              imgRef: V,
              mediaData: se,
              caption: Ie(),
              bubbleWidth: We,
              bubbleHeight: Be,
              draggable: ft,
              disableContextMenu: U,
            });
          }),
          (n[90] = Be),
          (n[91] = We),
          (n[92] = h),
          (n[93] = ft),
          (n[94] = Ie),
          (n[95] = se),
          (n[96] = U),
          (n[97] = St))
        : (St = n[97]);
      var Rt;
      n[98] !== Be ||
      n[99] !== We ||
      n[100] !== h ||
      n[101] !== ft ||
      n[102] !== Ie ||
      n[103] !== se ||
      n[104] !== U
        ? ((Rt = function (t, n) {
            return g.jsx(R, {
              useDynamicSizing:
                h === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ||
                h === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT,
              isPreview: n,
              imgRef: V,
              mediaData: se,
              caption: Ie(),
              bubbleWidth: We,
              bubbleHeight: Be,
              src: t,
              animateIn: !n,
              draggable: ft,
              disableContextMenu: U,
            });
          }),
          (n[98] = Be),
          (n[99] = We),
          (n[100] = h),
          (n[101] = ft),
          (n[102] = Ie),
          (n[103] = se),
          (n[104] = U),
          (n[105] = Rt))
        : (Rt = n[105]);
      var Lt;
      n[106] !== de || n[107] !== se || n[108] !== St || n[109] !== Rt
        ? ((Lt = g.jsx(r("WAWebMediaUrlProvider"), {
            mediaData: se,
            placeholderRenderer: St,
            downloadMedia: de,
            renderProgressively: !0,
            children: Rt,
          })),
          (n[106] = de),
          (n[107] = se),
          (n[108] = St),
          (n[109] = Rt),
          (n[110] = Lt))
        : (Lt = n[110]);
      var Et;
      n[111] !== se.fullHeight || n[112] !== se.fullWidth || n[113] !== se.type
        ? ((Et = g.jsx(r("WAWebHDMediaIconWrapper.react"), {
            height: se.fullHeight,
            width: se.fullWidth,
            type: se.type,
            xstyle: S.hdIcon,
          })),
          (n[111] = se.fullHeight),
          (n[112] = se.fullWidth),
          (n[113] = se.type),
          (n[114] = Et))
        : (Et = n[114]);
      var kt;
      n[115] !== $
        ? ((kt = $.unsafe()), (n[115] = $), (n[116] = kt))
        : (kt = n[116]);
      var It;
      n[117] !== Q ||
      n[118] !== X ||
      n[119] !== a.trusted ||
      n[120] !== te ||
      n[121] !== oe ||
      n[122] !== kt ||
      n[123] !== re
        ? ((It = g.jsx(r("WAWebBizTemplateMessageFooter.react"), {
            dir: Q,
            footer: X,
            isShown: oe,
            msg: kt,
            rtl: te,
            trusted: a.trusted,
            type: re,
          })),
          (n[117] = Q),
          (n[118] = X),
          (n[119] = a.trusted),
          (n[120] = te),
          (n[121] = oe),
          (n[122] = kt),
          (n[123] = re),
          (n[124] = It))
        : (It = n[124]);
      var Tt = g.jsxs("div", {
        className: d,
        ref: ce,
        children: [
          rt,
          at,
          lt,
          st,
          yt,
          g.jsxs(o("WAWebClickable.react").Clickable, {
            dataTestId: "image-thumb",
            className: r("isStringNullOrEmpty")(B) ? ct : B,
            onClick: Ct,
            ariaLabel: bt,
            focusTheme: o("WAWebClickable.react").FocusTheme.Image,
            inlineStyle: Ve,
            children: [vt, Lt, Ge, Et],
          }),
          c || Ke,
          It,
          dt,
        ],
      });
      if (Ke) {
        var Dt;
        return (
          n[125] !== $
            ? ((Dt = $.unsafe()), (n[125] = $), (n[126] = Dt))
            : (Dt = n[126]),
          g.jsx(r("WAWebMessageBubbleHiddenText.react"), {
            contact: ne,
            msg: Dt,
            className: nt,
            onClick: o("WAWebStopEvent").stopPropagation,
            children: Tt,
          })
        );
      }
      A != null &&
        (Tt = g.jsxs(
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
            }[!!je << 0],
            { children: [Tt, A] },
          ),
        ));
      var xt;
      return (
        n[127] !== nt || n[128] !== Tt
          ? ((xt = g.jsx("div", {
              className: nt,
              onClick: o("WAWebStopEvent").stopPropagation,
              children: Tt,
            })),
            (n[127] = nt),
            (n[128] = Tt),
            (n[129] = xt))
          : (xt = n[129]),
        xt
      );
    }
    function k(e) {
      return e.id.toString();
    }
    function I() {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[message-picture] failed to resume remote upload",
            ])),
        )
        .sendLogs("failed-to-resume-remote-upload");
    }
    function T() {
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[message-picture] failed to resume upload",
            ])),
        )
        .sendLogs("failed-to-resume-upload");
    }
    function D() {
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[message-picture] failed to force download media",
            ])),
        )
        .sendLogs("failed-to-force-download-media");
    }
    var x = E,
      $ = x;
    function P(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.mediaData,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["mediaStage", "progressiveStage"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        s = l.mediaStage,
        u = l.progressiveStage,
        c = null;
      e: switch (s) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          break e;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          var m;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              })),
              (t[1] = m))
            : (m = t[1]),
            (c = m));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
          var p;
          (t[2] !== n.size
            ? ((p = g.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: n.size,
              })),
              (t[2] = n.size),
              (t[3] = p))
            : (p = t[3]),
            (c = p));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING: {
          var _;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              })),
              (t[4] = _))
            : (_ = t[4]),
            (c = _));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: {
          var f;
          (t[5] !== n.size
            ? ((f = g.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: n.size,
              })),
              (t[5] = n.size),
              (t[6] = f))
            : (f = t[6]),
            (c = f));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
          var h;
          (t[7] !== n.size
            ? ((h = g.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: n.size,
              })),
              (t[7] = n.size),
              (t[8] = h))
            : (h = t[8]),
            (c = h));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          break e;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
          var y;
          (t[9] !== n.size
            ? ((y = g.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: n.size,
              })),
              (t[9] = n.size),
              (t[10] = y))
            : (y = t[10]),
            (c = y));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.SENDING: {
          var C;
          (t[11] !== a
            ? ((C = o("WAWebMsgGetters").getIsFailed(a)
                ? null
                : g.jsx(o("WAWebMediaStateControls.react").Pending, {})),
              (t[11] = a),
              (t[12] = C))
            : (C = t[12]),
            (c = C));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          if (u == null) {
            var b;
            (t[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = g.jsx(o("WAWebMediaStateControls.react").Pending, {
                  cancelable: !0,
                })),
                (t[13] = b))
              : (b = t[13]),
              (c = b));
          }
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE: {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Images should be copied in memory when selected",
                ])),
            )
            .sendLogs("media-image-not-readable-error");
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break e;
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING: {
          var v;
          (t[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = g.jsx(o("WAWebMediaStateControls.react").Pending, {})),
              (t[14] = v))
            : (v = t[14]),
            (c = v));
        }
      }
      var S;
      return (
        t[15] !== c
          ? ((S = g.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "fade-ease-out",
              children: c,
            })),
            (t[15] = c),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    function N(e, t, n, a, i, l, s, u, c) {
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
    function M(e, t) {
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
    l.ImageMessage = $;
  },
  226,
);
