__d(
  "WAWebMessageMenu.react",
  [
    "cx",
    "WAWebAdAttributionUtils",
    "WAWebChatPreferenceCollection",
    "WAWebClassnames",
    "WAWebCtwaAGMUtils",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebIcChevronDownMenuIcon.react",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgSelectors",
    "WAWebMsgType",
    "WAWebPipIsParsableOnlineVideoUrl",
    "WAWebProtobufsE2E.pb",
    "WAWebStateUtils",
    "WAWebStopEvent",
    "WAWebThemeContext",
    "WAWebUnifiedResponseUtils",
    "WAWebViewOnceState",
    "WAWebWallpaper",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = [
        o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.IMAGE,
        o("WAWebInteractiveMessageHeaderMediaType")
          .InteractiveMessageHeaderMediaType.VIDEO,
      ],
      h = [
        r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER,
        r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP,
      ],
      y = { FRONT: "FRONT", MID: "MID", END: "END", SINGLE: "SINGLE" },
      C = {
        context: {
          position: "x10l6tqk",
          top: "x1jzctok",
          insetInlineEnd: "xceh6e4",
          left: null,
          right: null,
          zIndex: "xjhb59c",
          width: "x10h3iyq",
          height: "x9fpu7x",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        contextIn: { background: "x1n92vqa", $$css: !0 },
        contextOut: { background: "x1595w2n", $$css: !0 },
        contextInverse: {
          insetInlineEnd: "xnro73h",
          insetInlineStart: "x1fb7gu6",
          left: null,
          right: null,
          $$css: !0,
        },
        contextInverseIn: { background: "xjw9qsh", $$css: !0 },
        contextInverseOut: { background: "x64ygrw", $$css: !0 },
        contextSpecialIn: { background: "xsluj4e", $$css: !0 },
        contextSpecialOut: { background: "xsluj4e", $$css: !0 },
        contextPttFix: {
          insetInlineEnd: "x1og1502",
          insetInlineStart: "x1tvzbhf",
          left: null,
          right: null,
          background: "x11g6tue",
          $$css: !0,
        },
        contextMultiVcardIn: {
          width: "xge0ay3",
          height: "xnnlda6",
          background: "x1d8sa2z",
          $$css: !0,
        },
        contextMultiVcardOut: {
          width: "xge0ay3",
          height: "xnnlda6",
          background: "x1oomfc",
          $$css: !0,
        },
        contextTransparent: { background: "x11g6tue", $$css: !0 },
        noBg: { background: "x11g6tue", $$css: !0 },
        contextEventOut: { background: "x1ie7x4c", $$css: !0 },
        contextEventIn: { background: "x1ie7x4c", $$css: !0 },
        contextMediaLTR: { background: "xrumn1r", $$css: !0 },
        contextMediaRTL: { background: "xvfnxmo", $$css: !0 },
      };
    function b(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.ariaLabel,
        c = l.contextOwnerIsKeyboardFocused,
        m = c === void 0 ? !1 : c,
        y = l.hasAuthor,
        b = l.isGroupedSticker,
        v = l.isMenuOpen,
        S = l.msg,
        L = l.onToggle,
        E = l.role,
        k = l.tabIndex,
        I = f(null),
        T = f(null),
        D = p(o("WAWebThemeContext").ThemeContext),
        x = o("WAWebThemeContext").useIsDarkTheme(),
        $ = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getLinkPreview,
          o("WAWebMsgGetters").getMatchedText,
          o("WAWebMsgGetters").getCtwaContext,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebMsgGetters").getIsMedia,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebMsgGetters").getIsNewsletterMsg,
          o("WAWebMsgGetters").getIsViewOnce,
          o("WAWebMsgGetters").getInteractiveHeader,
          o("WAWebMsgGetters").getType,
          o("WAWebMsgGetters").getQuotedMsg,
          o("WAWebMsgGetters").getBody,
          o("WAWebMsgGetters").getQuotedRemoteJid,
          o("WAWebMsgGetters").getRichPreviewType,
          o("WAWebMsgGetters").getDoNotPlayInline,
          o("WAWebMsgGetters").getNewsletterAdminInviteInfo,
        ]),
        P = $[0],
        N = $[1],
        M = $[2],
        w = $[3],
        A = $[4],
        F = $[5],
        O = $[6],
        B = $[7],
        W = $[8],
        q = $[9],
        U = $[10],
        V = $[11],
        H = $[12],
        G = $[13],
        z = $[14],
        j = $[15],
        K = $[16],
        Q = $[17],
        X = $[18],
        Y = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          o("WAWebMsgGetters").getList,
          o("WAWebMsgGetters").getNativeFlowName,
          o("WAWebMsgGetters").getThumbnailDirectPath,
          o("WAWebMsgGetters").getThumbnailHeight,
          o("WAWebMsgGetters").getThumbnailWidth,
          o("WAWebFrontendMsgGetters").getText,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
          o("WAWebMsgGetters").getGroupHistoryBundleMessageKey,
          o("WAWebMsgGetters").getUnifiedResponse,
        ]),
        J = Y[0],
        Z = Y[1],
        ee = Y[2],
        te = Y[3],
        ne = Y[4],
        re = Y[5],
        oe = Y[6],
        ae = Y[7],
        ie = Y[8],
        le = Y[9];
      _(i, function () {
        return {
          getContext: function () {
            return T.current;
          },
          getElement: function () {
            return I.current;
          },
        };
      });
      var se = function (t) {
          (t.stopPropagation(), L(t.target));
        },
        ue = !!G,
        ce = ue && !!j,
        de = o("WAWebMsgSelectors").showForwarded(S),
        me = o("WAWebDisplayType").isWideDisplay(l.displayType),
        pe =
          H === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
          (V == null ? void 0 : V.mediaType) ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT,
        _e = pe && !z,
        fe = pe && !r("isStringNullOrEmpty")(z),
        ge = H === o("WAWebMsgType").MSG_TYPE.LOCATION,
        he =
          N &&
          o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(
            K,
            M,
            Q,
          ),
        ye =
          H === o("WAWebMsgType").MSG_TYPE.LIST &&
          (J == null ? void 0 : J.listType) ===
            o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType.PRODUCT_LIST,
        Ce = X != null,
        be = o("WAWebUnifiedResponseUtils").isImagineResponse(le),
        ve =
          O ||
          ((V == null ? void 0 : V.mediaType) != null &&
            g.includes(V.mediaType)) ||
          be,
        Se =
          w != null &&
          w.thumbnail != null &&
          w.thumbnailUrl != null &&
          w.sourceUrl != null,
        Re = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(
          w == null ? void 0 : w.sourceApp,
        ),
        Le = Re
          ? Se &&
            (S.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ||
              ((n = S.ctwaContext) == null
                ? void 0
                : n.automatedGreetingMessageShown) !== !0)
          : S.type !== o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
            Se,
        Ee =
          fe ||
          ge ||
          ue ||
          ye ||
          H === o("WAWebMsgType").MSG_TYPE.PAYMENT ||
          he ||
          H === o("WAWebMsgType").MSG_TYPE.PRODUCT ||
          H === o("WAWebMsgType").MSG_TYPE.ALBUM ||
          (Z != null && h.includes(Z)) ||
          Le ||
          (ve && !U && H !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
          (U && !B && !o("WAWebViewOnceState").isViewed(S.safe())),
        ke = o("WAWebMsgLinks").getSuspiciousLinks(S).length > 0,
        Ie =
          H === o("WAWebMsgType").MSG_TYPE.CHAT &&
          N &&
          !he &&
          !y &&
          !de &&
          !ke &&
          o("WAWebMsgModelPropUtils").isTrusted(S),
        Te = o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview(
          o("WAWebStateUtils").unproxy(S.unsafe()),
        ),
        De = Ie && !Te && !B && !ue,
        xe =
          (Ee &&
            !y &&
            !ke &&
            !de &&
            !o("WAWebAdAttributionUtils").shouldShowAdAttribution(S)) ||
          (Ie && Te),
        $e =
          (H === o("WAWebMsgType").MSG_TYPE.PTT && !U) ||
          H === o("WAWebMsgType").MSG_TYPE.AUDIO,
        Pe = H === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD && !ue && !y && !de,
        Ne = H === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE,
        Me = Ne && !y && !de && !ue,
        we = ((Ie && !Te && B) || _e || Ce) && !y && !de && !ue,
        Ae = R({
          msg: S,
          isGroupedSticker: b,
          isGroupMsg: W,
          isNewsletterMsg: q,
          isWide: me,
          isSentByMe: B,
          isTransparentMsg: oe,
        }),
        Fe =
          H === o("WAWebMsgType").MSG_TYPE.CHAT &&
          !ue &&
          !y &&
          !de &&
          !he &&
          !o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview &&
          !!A &&
          F !== r("WAWebL10N").isRTL(),
        Oe = $e && r("WAWebL10N").isRTL() && !y,
        Be = H === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
        We = "_ahk_",
        qe;
      !m &&
        !ce &&
        (we
          ? Ie && B
            ? (qe = C.noBg)
            : (qe = B ? C.contextSpecialOut : C.contextSpecialIn)
          : H === o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
              (H === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION && B)
            ? (qe = C.noBg)
            : $e && !ue && !y
              ? ((r("WAWebL10N").isRTL() && B) ||
                  (!r("WAWebL10N").isRTL() && !B)) &&
                (qe = C.contextPttFix)
              : Fe || Oe
                ? (qe = B ? C.contextInverseOut : C.contextInverseIn)
                : $e
                  ? (qe = C.noBg)
                  : Pe
                    ? (qe = B ? C.contextMultiVcardOut : C.contextMultiVcardIn)
                    : Ae
                      ? ((!ae || !G) && (qe = C.contextTransparent),
                        (We = "x22v28t"))
                      : ae
                        ? ((qe = B ? C.noBg : C.contextIn), (We = "x11g6tue"))
                        : Be
                          ? y
                            ? (qe = C.noBg)
                            : (qe = B ? C.contextEventOut : C.contextEventIn)
                          : (S.isForwarded || ie != null) && O
                            ? (qe = C.noBg)
                            : (qe = B ? C.contextOut : C.contextIn));
      var Ue, Ve;
      if (Ae) {
        var He = r("WAWebChatPreferenceCollection").get("defaultPreference"),
          Ge = He ? He.wallpaper : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
          ze = { backgroundColor: Ge, opacity: 0.9 };
        ((Ve = d.jsx("div", { className: We, style: ze })),
          (Ue = o("WAWebWallpaper").invertTransparentWallpaperColors(
            D.theme,
            Ge,
          )));
      }
      var je = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          xe || De || Me ? "_ahko" : "_ahkm",
        ),
        Ke = null;
      (xe || De || Me) &&
        (Ke = r("WAWebL10N").isRTL() ? C.contextMediaRTL : C.contextMediaLTR);
      var Qe = [qe, Ke];
      ((Fe || Oe) &&
        (Qe.unshift(C.contextInverse),
        (je = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          xe ? "_ahko" : "_ahkm",
          "xnro73h x1o0tod",
        ))),
        (!(xe || Ie) || we) && Qe.unshift(C.context));
      var Xe = Ae;
      ae && G && (Xe = !1);
      var Ye = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((a = {}),
          (a._ahkr = xe || De || Me),
          (a._ahkp = we),
          (a._ahkv = _e && !y && !de && !ue),
          (a._ahku = fe),
          (a._am2j = oe && !Ae),
          (a._am2k = Xe),
          (a._am2l = Ae && Ue === !0),
          a),
          (u || (u = r("stylex")))(Qe),
          ie != null &&
            !(xe || De || Me) &&
            { 0: "xx0f3s1", 1: "x104how" }[!!x << 0],
        ),
        Je = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) && se(t);
        },
        Ze = d.jsx(
          o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
          {},
        );
      return d.jsxs("div", {
        ref: I,
        className: Ye,
        children: [
          d.jsx("div", {
            "data-testid": void 0,
            "data-js-context-icon": !0,
            className: je,
            ref: T,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            tabIndex: k,
            onKeyDown: Je,
            "aria-label": s,
            "aria-expanded": v,
            role: E,
            onClick: se,
            children: Ze,
          }),
          Ve,
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = b,
      S = v;
    function R(e) {
      var t = e.isGroupedSticker,
        n = e.isGroupMsg,
        r = e.isNewsletterMsg,
        a = e.isSentByMe,
        i = e.isTransparentMsg,
        l = e.isWide,
        s = e.msg;
      switch (s.type) {
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return i && (t === !0 || !n || (a && !l));
        case o("WAWebMsgType").MSG_TYPE.CHAT:
          return i && (!n || (a && !l));
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return r || !l;
      }
      return !1;
    }
    l.default = S;
  },
  98,
);
