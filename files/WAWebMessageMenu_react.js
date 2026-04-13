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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(118),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.ariaLabel,
        c = l.contextOwnerIsKeyboardFocused,
        m = l.hasAuthor,
        y = l.isGroupedSticker,
        b = l.isMenuOpen,
        v = l.msg,
        S = l.onToggle,
        L = l.role,
        E = l.tabIndex,
        k = c === void 0 ? !1 : c,
        I = f(null),
        T = f(null),
        D = p(o("WAWebThemeContext").ThemeContext),
        x = o("WAWebThemeContext").useIsDarkTheme(),
        $;
      if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
        var P;
        (($ = [
          (P = o("WAWebMsgGetters")).getAck,
          P.getLinkPreview,
          P.getMatchedText,
          P.getCtwaContext,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebFrontendMsgGetters").getRtl,
          P.getIsMedia,
          P.getIsSentByMe,
          P.getIsGroupMsg,
          P.getIsNewsletterMsg,
          P.getIsViewOnce,
          P.getInteractiveHeader,
          P.getType,
          P.getQuotedMsg,
          P.getBody,
          P.getQuotedRemoteJid,
          P.getRichPreviewType,
          P.getDoNotPlayInline,
          P.getNewsletterAdminInviteInfo,
        ]),
          (n[3] = $));
      } else $ = n[3];
      var N = o("useWAWebMsgValues").useMsgValues(a.msg.id, $),
        M = N[1],
        w = N[2],
        A = N[3],
        F = N[4],
        O = N[5],
        B = N[6],
        W = N[7],
        q = N[8],
        U = N[9],
        V = N[10],
        H = N[11],
        G = N[12],
        z = N[13],
        j = N[14],
        K = N[15],
        Q = N[16],
        X = N[17],
        Y = N[18],
        J;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var P;
        ((J = [
          (P = o("WAWebMsgGetters")).getList,
          P.getNativeFlowName,
          P.getThumbnailDirectPath,
          P.getThumbnailHeight,
          P.getThumbnailWidth,
          o("WAWebFrontendMsgGetters").getText,
          o("WAWebFrontendMsgGetters").getIsTransparentMsg,
          o("WAWebFrontendMsgGetters").getIsTransparentMsgEmoji,
          P.getGroupHistoryBundleMessageKey,
          P.getUnifiedResponse,
        ]),
          (n[4] = J));
      } else J = n[4];
      var Z = o("useWAWebMsgValues").useMsgValues(a.msg.id, J),
        ee = Z[0],
        te = Z[1],
        ne = Z[6],
        re = Z[7],
        oe = Z[8],
        ae = Z[9],
        ie;
      (n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = function () {
            return {
              getContext: function () {
                return T.current;
              },
              getElement: function () {
                return I.current;
              },
            };
          }),
          (n[5] = ie))
        : (ie = n[5]),
        _(i, ie));
      var le;
      n[6] !== S
        ? ((le = function (t) {
            (t.stopPropagation(), S(t.target));
          }),
          (n[6] = S),
          (n[7] = le))
        : (le = n[7]);
      var se = le,
        ue = !!z,
        ce = ue && !!K,
        de;
      n[8] !== v
        ? ((de = o("WAWebMsgSelectors").showForwarded(v)),
          (n[8] = v),
          (n[9] = de))
        : (de = n[9]);
      var me = de,
        pe,
        _e,
        fe;
      if (
        n[10] !== j ||
        n[11] !== D ||
        n[12] !== k ||
        n[13] !== A ||
        n[14] !== F ||
        n[15] !== X ||
        n[16] !== oe ||
        n[17] !== m ||
        n[18] !== ue ||
        n[19] !== ce ||
        n[20] !== H ||
        n[21] !== x ||
        n[22] !== q ||
        n[23] !== y ||
        n[24] !== U ||
        n[25] !== W ||
        n[26] !== ne ||
        n[27] !== re ||
        n[28] !== V ||
        n[29] !== M ||
        n[30] !== (ee == null ? void 0 : ee.listType) ||
        n[31] !== w ||
        n[32] !== v ||
        n[33] !== B ||
        n[34] !== te ||
        n[35] !== Y ||
        n[36] !== a.displayType ||
        n[37] !== z ||
        n[38] !== Q ||
        n[39] !== O ||
        n[40] !== me ||
        n[41] !== G ||
        n[42] !== ae
      ) {
        var ge,
          he,
          ye = o("WAWebDisplayType").isWideDisplay(a.displayType),
          Ce =
            G === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
            (H == null ? void 0 : H.mediaType) ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT,
          be = Ce && !j,
          ve;
        n[46] !== j || n[47] !== Ce
          ? ((ve = Ce && !r("isStringNullOrEmpty")(j)),
            (n[46] = j),
            (n[47] = Ce),
            (n[48] = ve))
          : (ve = n[48]);
        var Se = ve,
          Re = G === o("WAWebMsgType").MSG_TYPE.LOCATION,
          Le;
        n[49] !== X || n[50] !== M || n[51] !== w || n[52] !== Q
          ? ((Le =
              M &&
              o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(
                Q,
                w,
                X,
              )),
            (n[49] = X),
            (n[50] = M),
            (n[51] = w),
            (n[52] = Q),
            (n[53] = Le))
          : (Le = n[53]);
        var Ee = Le,
          ke =
            G === o("WAWebMsgType").MSG_TYPE.LIST &&
            (ee == null ? void 0 : ee.listType) ===
              o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                .PRODUCT_LIST,
          Ie = Y != null,
          Te;
        n[54] !== ae
          ? ((Te = o("WAWebUnifiedResponseUtils").isImagineResponse(ae)),
            (n[54] = ae),
            (n[55] = Te))
          : (Te = n[55]);
        var De = Te,
          xe;
        n[56] !== H || n[57] !== De || n[58] !== B
          ? ((xe =
              B ||
              ((H == null ? void 0 : H.mediaType) != null &&
                g.includes(H.mediaType)) ||
              De),
            (n[56] = H),
            (n[57] = De),
            (n[58] = B),
            (n[59] = xe))
          : (xe = n[59]);
        var $e = xe,
          Pe =
            A != null &&
            A.thumbnail != null &&
            A.thumbnailUrl != null &&
            A.sourceUrl != null,
          Ne = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(
            A == null ? void 0 : A.sourceApp,
          ),
          Me = Ne
            ? Pe &&
              (v.type ===
                o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE ||
                ((ge = v.ctwaContext) == null
                  ? void 0
                  : ge.automatedGreetingMessageShown) !== !0)
            : v.type !==
                o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && Pe,
          we;
        n[60] !== ue ||
        n[61] !== Me ||
        n[62] !== Se ||
        n[63] !== Re ||
        n[64] !== $e ||
        n[65] !== ke ||
        n[66] !== W ||
        n[67] !== V ||
        n[68] !== v ||
        n[69] !== te ||
        n[70] !== Ee ||
        n[71] !== G
          ? ((we =
              Se ||
              Re ||
              ue ||
              ke ||
              G === o("WAWebMsgType").MSG_TYPE.PAYMENT ||
              Ee ||
              G === o("WAWebMsgType").MSG_TYPE.PRODUCT ||
              G === o("WAWebMsgType").MSG_TYPE.ALBUM ||
              (te != null && h.includes(te)) ||
              Me ||
              ($e && !V && G !== o("WAWebMsgType").MSG_TYPE.AUDIO) ||
              (V && !W && !o("WAWebViewOnceState").isViewed(v.safe()))),
            (n[60] = ue),
            (n[61] = Me),
            (n[62] = Se),
            (n[63] = Re),
            (n[64] = $e),
            (n[65] = ke),
            (n[66] = W),
            (n[67] = V),
            (n[68] = v),
            (n[69] = te),
            (n[70] = Ee),
            (n[71] = G),
            (n[72] = we))
          : (we = n[72]);
        var Ae = we,
          Fe;
        n[73] !== v
          ? ((Fe = o("WAWebMsgLinks").getSuspiciousLinks(v)),
            (n[73] = v),
            (n[74] = Fe))
          : (Fe = n[74]);
        var Oe = Fe.length > 0,
          Be;
        n[75] !== m ||
        n[76] !== Oe ||
        n[77] !== M ||
        n[78] !== v ||
        n[79] !== Ee ||
        n[80] !== me ||
        n[81] !== G
          ? ((Be =
              G === o("WAWebMsgType").MSG_TYPE.CHAT &&
              M &&
              !Ee &&
              !m &&
              !me &&
              !Oe &&
              o("WAWebMsgModelPropUtils").isTrusted(v)),
            (n[75] = m),
            (n[76] = Oe),
            (n[77] = M),
            (n[78] = v),
            (n[79] = Ee),
            (n[80] = me),
            (n[81] = G),
            (n[82] = Be))
          : (Be = n[82]);
        var We = Be,
          qe;
        n[83] !== v
          ? ((qe = o(
              "WAWebMediaLinkPreviewUtils",
            ).displayHighQualityLinkPreview(
              o("WAWebStateUtils").unproxy(v.unsafe()),
            )),
            (n[83] = v),
            (n[84] = qe))
          : (qe = n[84]);
        var Ue = qe,
          Ve = We && !Ue && !W && !ue,
          He;
        n[85] !== Ue ||
        n[86] !== m ||
        n[87] !== Oe ||
        n[88] !== Ae ||
        n[89] !== We ||
        n[90] !== v ||
        n[91] !== me
          ? ((He =
              (Ae &&
                !m &&
                !Oe &&
                !me &&
                !o("WAWebAdAttributionUtils").shouldShowAdAttribution(v)) ||
              (We && Ue)),
            (n[85] = Ue),
            (n[86] = m),
            (n[87] = Oe),
            (n[88] = Ae),
            (n[89] = We),
            (n[90] = v),
            (n[91] = me),
            (n[92] = He))
          : (He = n[92]);
        var Ge = He,
          ze =
            (G === o("WAWebMsgType").MSG_TYPE.PTT && !V) ||
            G === o("WAWebMsgType").MSG_TYPE.AUDIO,
          je = G === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD && !ue && !m && !me,
          Ke = G === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE,
          Qe = Ke && !m && !me && !ue,
          Xe = ((We && !Ue && W) || be || Ie) && !m && !me && !ue,
          Ye = R({
            msg: v,
            isGroupedSticker: y,
            isGroupMsg: q,
            isNewsletterMsg: U,
            isWide: ye,
            isSentByMe: W,
            isTransparentMsg: ne,
          }),
          Je =
            G === o("WAWebMsgType").MSG_TYPE.CHAT &&
            !ue &&
            !m &&
            !me &&
            !Ee &&
            !o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview &&
            !!F &&
            O !== r("WAWebL10N").isRTL(),
          Ze = ze && r("WAWebL10N").isRTL() && !m,
          et = G === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
          tt = "_ahk_",
          nt;
        if (!k && !ce)
          if (Xe)
            We && W
              ? (nt = C.noBg)
              : (nt = W ? C.contextSpecialOut : C.contextSpecialIn);
          else if (
            G === o("WAWebMsgType").MSG_TYPE.CALL_LOG ||
            (G === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION && W)
          )
            nt = C.noBg;
          else if (ze && !ue && !m)
            ((r("WAWebL10N").isRTL() && W) ||
              (!r("WAWebL10N").isRTL() && !W)) &&
              (nt = C.contextPttFix);
          else if (Je || Ze) nt = W ? C.contextInverseOut : C.contextInverseIn;
          else if (ze) nt = C.noBg;
          else if (je) nt = W ? C.contextMultiVcardOut : C.contextMultiVcardIn;
          else if (Ye) {
            (!re || !z) && (nt = C.contextTransparent);
            var rt;
            (n[93] === Symbol.for("react.memo_cache_sentinel")
              ? ((rt = "x22v28t"), (n[93] = rt))
              : (rt = n[93]),
              (tt = rt));
          } else if (re) {
            nt = W ? C.noBg : C.contextIn;
            var ot;
            (n[94] === Symbol.for("react.memo_cache_sentinel")
              ? ((ot = "x11g6tue"), (n[94] = ot))
              : (ot = n[94]),
              (tt = ot));
          } else
            et
              ? m
                ? (nt = C.noBg)
                : (nt = W ? C.contextEventOut : C.contextEventIn)
              : v.isForwarded && B
                ? (nt = C.noBg)
                : (nt = W ? C.contextOut : C.contextIn);
        var at;
        if (Ye) {
          var it;
          if (n[95] !== tt || n[96] !== D.theme) {
            var lt = r("WAWebChatPreferenceCollection").get(
                "defaultPreference",
              ),
              st = lt
                ? lt.wallpaper
                : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              ut = { backgroundColor: st, opacity: 0.9 };
            ((pe = d.jsx("div", { className: tt, style: ut })),
              (it = o("WAWebWallpaper").invertTransparentWallpaperColors(
                D.theme,
                st,
              )),
              (n[95] = tt),
              (n[96] = D.theme),
              (n[97] = it),
              (n[98] = pe));
          } else ((it = n[97]), (pe = n[98]));
          at = it;
        }
        var ct = Ge || Ve || Qe ? "_ahko" : "_ahkm",
          dt;
        (n[99] !== ct
          ? ((dt = o("WAWebClassnames").classnamesConvertMeToStylexPlease(ct)),
            (n[99] = ct),
            (n[100] = dt))
          : (dt = n[100]),
          (_e = dt));
        var mt = null;
        (Ge || Ve || Qe) &&
          (mt = r("WAWebL10N").isRTL() ? C.contextMediaRTL : C.contextMediaLTR);
        var pt = [nt, mt];
        if (Je || Ze) {
          pt.unshift(C.contextInverse);
          var _t = Ge ? "_ahko" : "_ahkm",
            ft;
          (n[101] !== _t
            ? ((ft = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                _t,
                "xnro73h x1o0tod",
              )),
              (n[101] = _t),
              (n[102] = ft))
            : (ft = n[102]),
            (_e = ft));
        }
        (!(Ge || We) || Xe) && pt.unshift(C.context);
        var gt = Ye;
        (re && z && (gt = !1),
          (fe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((he = {}),
            (he._ahkr = Ge || Ve || Qe),
            (he._ahkp = Xe),
            (he._ahkv = be && !m && !me && !ue),
            (he._ahku = Se),
            (he._am2j = ne && !Ye),
            (he._am2k = gt),
            (he._am2l = Ye && at === !0),
            he),
            (u || (u = r("stylex")))(pt),
            oe != null && { 0: "xx0f3s1", 1: "x104how" }[!!x << 0],
          )),
          (n[10] = j),
          (n[11] = D),
          (n[12] = k),
          (n[13] = A),
          (n[14] = F),
          (n[15] = X),
          (n[16] = oe),
          (n[17] = m),
          (n[18] = ue),
          (n[19] = ce),
          (n[20] = H),
          (n[21] = x),
          (n[22] = q),
          (n[23] = y),
          (n[24] = U),
          (n[25] = W),
          (n[26] = ne),
          (n[27] = re),
          (n[28] = V),
          (n[29] = M),
          (n[30] = ee == null ? void 0 : ee.listType),
          (n[31] = w),
          (n[32] = v),
          (n[33] = B),
          (n[34] = te),
          (n[35] = Y),
          (n[36] = a.displayType),
          (n[37] = z),
          (n[38] = Q),
          (n[39] = O),
          (n[40] = me),
          (n[41] = G),
          (n[42] = ae),
          (n[43] = pe),
          (n[44] = _e),
          (n[45] = fe));
      } else ((pe = n[43]), (_e = n[44]), (fe = n[45]));
      var ht = fe,
        yt;
      n[103] !== se
        ? ((yt = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) && se(t);
          }),
          (n[103] = se),
          (n[104] = yt))
        : (yt = n[104]);
      var Ct = yt,
        bt;
      n[105] === Symbol.for("react.memo_cache_sentinel")
        ? ((bt = d.jsx(
            o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon,
            {},
          )),
          (n[105] = bt))
        : (bt = n[105]);
      var vt = bt,
        St;
      n[106] !== s ||
      n[107] !== se ||
      n[108] !== Ct ||
      n[109] !== _e ||
      n[110] !== b ||
      n[111] !== L ||
      n[112] !== E
        ? ((St = d.jsx("div", {
            "data-testid": void 0,
            "data-js-context-icon": !0,
            className: _e,
            ref: T,
            onMouseDown: o("WAWebStopEvent").stopPropagation,
            tabIndex: E,
            onKeyDown: Ct,
            "aria-label": s,
            "aria-expanded": b,
            role: L,
            onClick: se,
            children: vt,
          })),
          (n[106] = s),
          (n[107] = se),
          (n[108] = Ct),
          (n[109] = _e),
          (n[110] = b),
          (n[111] = L),
          (n[112] = E),
          (n[113] = St))
        : (St = n[113]);
      var Rt;
      return (
        n[114] !== ht || n[115] !== pe || n[116] !== St
          ? ((Rt = d.jsxs("div", {
              ref: I,
              className: ht,
              children: [St, pe],
            })),
            (n[114] = ht),
            (n[115] = pe),
            (n[116] = St),
            (n[117] = Rt))
          : (Rt = n[117]),
        Rt
      );
    }
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
