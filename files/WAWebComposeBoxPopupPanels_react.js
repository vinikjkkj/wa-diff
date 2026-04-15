__d(
  "WAWebComposeBoxPopupPanels.react",
  [
    "PaymentLinkPreviewWithAmountFeature",
    "WAWebABProps",
    "WAWebAnimationGroupItem.react",
    "WAWebBizCtwaContextImagePreview.react",
    "WAWebChatGetters",
    "WAWebComposeBoxExpressionPanels.react",
    "WAWebComposeBoxPanelsMenu.react",
    "WAWebComposeBoxPopupPanel.react",
    "WAWebConversationSpam.react",
    "WAWebDisplayType",
    "WAWebFrontendChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMediaLinkPreview.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebNoop",
    "WAWebPREGatingUtils",
    "WAWebQuestionReplyQuotedMessage.react",
    "WAWebQuestions.flow",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgAdminGroupName.react",
    "WAWebResizeObserver.react",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebUISpacing",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "cr:5981",
    "gkx",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatInternalStatusHookWrapper",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMeasure",
    "useWAWebSetModelValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = {
        overlay: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          boxSizing: "x9f619",
          width: "xh8yej3",
          $$css: !0,
        },
        overlayRefresh: { width: "x8pckko", $$css: !0 },
        topPanelContainer: {
          borderStartStartRadius: "x12l2aii",
          borderStartEndRadius: "x1mbk4o",
          maxWidth: "xazf962",
          display: "x1lliihq",
          $$css: !0,
        },
        inputBoxShadow: { boxShadow: "xkfubxc", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.chat,
        a = e.onClickDismissSpam,
        i = e.onClickNotSpam,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = u.jsx(r("WAWebConversationSpam.react"), {
              chat: n,
              onClickNotSpam: i,
              onClickDismissSpam: a,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function h(e) {
      var t = e.getComposeBlockWidth,
        n = e.onEmoji,
        a = e.onExpressionPanelChange,
        i = e.onExpressionPanelClose,
        l = e.onGif,
        s = e.onSticker,
        c = e.ref,
        d = e.restoreFocus,
        m = e.selectedExpressionPanel,
        f = _(null),
        g = _(),
        h = function (t) {
          g.current = t;
        };
      p(c, function () {
        return {
          restoreFocus: function (t) {
            var e;
            (e = f.current) == null || e.restoreFocus(t);
          },
        };
      });
      var y = r("useWAWebMeasure")(),
        C = y[0],
        b = y[1],
        v = b.width > 0 ? b.width : t(),
        S = function () {
          d();
        };
      return u.jsx(r("WAWebAnimationGroupItem.react"), {
        ref: C,
        children: u.jsx(r("WAWebComposeBoxExpressionPanels.react"), {
          displayCache: g.current,
          width: v,
          onDisplayCache: h,
          onEmoji: n,
          onFocusRelease: S,
          onGif: l,
          onExpressionPanelChange: a,
          onSticker: s,
          requestDismiss: i,
          ref: f,
          selectedExpressionPanel: m,
          theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme
            .ChatComposeBox,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      "use no forget";
      var t,
        n = e.chat,
        a = e.isTopmostPanel,
        i = e.questionType,
        l = e.rawQuotedMsg,
        s = e.ref,
        c = e.restoreFocus,
        m = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        n.composeQuotedMsg,
        "change:latestEditMsgKey",
        m,
      );
      var p = o("useWAWebSetModelValue").useSetModelValue(
          n,
          "composeQuotedMsg",
        ),
        _ = d(r("WAWebThreadsViewComposeQuotedMsgContext")),
        f = (t = _ == null ? void 0 : _.setQuotedMsg) != null ? t : p,
        g = function (t) {
          (t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION),
            t !== o("WAWebUim").DismissReason.LIFECYCLE &&
              (f(null),
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageDeleted(n.id)));
        };
      return u.jsx(o("WAWebUimUie.react").UIE, {
        ref: s,
        displayName: "ComposeBoxQuotedMsg",
        escapable: !0,
        requestFocus: c,
        requestDismiss: g,
        children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
          onOmit: g,
          questionType: i,
          isTopmostPanel: a,
          children: u.jsx(
            r("WAWebQuotedMsg.react"),
            {
              msg: l.safe(),
              displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
              composeQuotedMsgRemoteJid: n.composeQuotedMsgRemoteJid,
              theme: "composeBox",
              chat: o("WAWebFrontendMsgGetters").getChat(l),
              onClick: function () {
                o(
                  "WAWebQuotedMessageUserJourneyLogger",
                ).QuotedMessageUserJourneyLogger.quotedMessageTappedInComposer(
                  n.id,
                );
              },
              shouldHideQuotedMsgAuthor: l.shouldHideQuotedMsgAuthor,
            },
            l.id.toString(),
          ),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isTopmostPanel,
        a = e.questionReplyQuotedMessage,
        i = e.ref,
        l;
      t[0] !== a
        ? ((l = u.jsx(r("WAWebQuestionReplyQuotedMessage.react"), {
            questionReplyQuotedMessage: a,
          })),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] !== n || t[3] !== l
        ? ((s = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
            onOmit: r("WAWebNoop"),
            isTopmostPanel: n,
            questionType: o("WAWebQuestions.flow").QuestionType.Reply,
            showCloseButton: !1,
            children: l,
          })),
          (t[2] = n),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var c;
      return (
        t[5] !== i || t[6] !== s
          ? ((c = u.jsx(o("WAWebUimUie.react").UIE, {
              ref: i,
              displayName: "QuestionReplyQuotedMsg",
              escapable: !1,
              children: s,
            })),
            (t[5] = i),
            (t[6] = s),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.chat,
        a = e.questionType,
        i = e.quotedGroupJid,
        l = e.ref,
        s = e.restoreFocus,
        c = o("useWAWebSetModelValue").useSetModelValue(
          n,
          "quotedMsgAdminGroupJid",
        ),
        d;
      t[0] !== c
        ? ((d = function (t) {
            var e =
              t === void 0 ? o("WAWebUim").DismissReason.UIM_INTERACTION : t;
            e !== o("WAWebUim").DismissReason.LIFECYCLE && c(null);
          }),
          (t[0] = c),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p =
          n.quotedMsgAdminGroupSubject != null
            ? n.quotedMsgAdminParentGroupJid
            : void 0,
        _ = n.quotedMsgAdminGroupSubject,
        f;
      t[2] !== i ? ((f = i.toString()), (t[2] = i), (t[3] = f)) : (f = t[3]);
      var g;
      t[4] !== n.quotedMsgAdminGroupSubject ||
      t[5] !== i ||
      t[6] !== p ||
      t[7] !== f
        ? ((g = u.jsx(
            o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName,
            {
              isComposePreview: !0,
              quotedGroupJid: i,
              quotedParentGroupJid: p,
              quotedGroupSubject: _,
            },
            f,
          )),
          (t[4] = n.quotedMsgAdminGroupSubject),
          (t[5] = i),
          (t[6] = p),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== m || t[10] !== a || t[11] !== g
        ? ((h = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
            questionType: a,
            onOmit: m,
            isTopmostPanel: !0,
            children: g,
          })),
          (t[9] = m),
          (t[10] = a),
          (t[11] = g),
          (t[12] = h))
        : (h = t[12]);
      var y;
      return (
        t[13] !== m || t[14] !== l || t[15] !== s || t[16] !== h
          ? ((y = u.jsx(o("WAWebUimUie.react").UIE, {
              ref: l,
              displayName: "QuotedMsgAdminGroupName",
              escapable: !0,
              requestFocus: s,
              requestDismiss: m,
              children: h,
            })),
            (t[13] = m),
            (t[14] = l),
            (t[15] = s),
            (t[16] = h),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.isTopmostPanel,
        a = e.linkPreviewData,
        i = e.links,
        l = e.omitLinkPreview,
        s = e.questionType,
        c = e.ref,
        d = a.description,
        m = a.inviteGrpType,
        p = a.isLoading,
        _ = a.matchedText,
        f = a.thumbnail,
        g = a.thumbnailHeight,
        h = a.thumbnailHQ,
        y = a.thumbnailWidth,
        C = a.title,
        b;
      t[0] !== _
        ? ((b = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(_)),
          (t[0] = _),
          (t[1] = b))
        : (b = t[1]);
      var v = b,
        S;
      t[2] !== a || t[3] !== i
        ? ((S = o(
            "PaymentLinkPreviewWithAmountFeature",
          ).isPaymentLinkPreviewWithAmountEnabled(a, i)),
          (t[2] = a),
          (t[3] = i),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x6ikm8r" }), (t[5] = L))
        : (L = t[5]);
      var E = !R,
        k = v != null ? v : _,
        I;
      t[6] !== d ||
      t[7] !== m ||
      t[8] !== p ||
      t[9] !== a ||
      t[10] !== i ||
      t[11] !== k ||
      t[12] !== f ||
      t[13] !== h ||
      t[14] !== g ||
      t[15] !== y ||
      t[16] !== C
        ? ((I = u.jsx(r("WAWebMediaLinkPreview.react"), {
            title: C,
            compose: !0,
            thumbnailJpegHQ: h,
            matchedText: k,
            description: d,
            thumbnailJpeg: f,
            inviteGrpType: m,
            isLoading: p,
            thumbnailJpegWidth: y,
            thumbnailJpegHeight: g,
            linkPreviewData: a,
            links: i,
          })),
          (t[6] = d),
          (t[7] = m),
          (t[8] = p),
          (t[9] = a),
          (t[10] = i),
          (t[11] = k),
          (t[12] = f),
          (t[13] = h),
          (t[14] = g),
          (t[15] = y),
          (t[16] = C),
          (t[17] = I))
        : (I = t[17]);
      var T;
      t[18] !== n || t[19] !== l || t[20] !== s || t[21] !== E || t[22] !== I
        ? ((T = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, L, {
              children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
                onOmit: l,
                bodyBackground: !1,
                isTopmostPanel: n,
                questionType: s,
                showCloseButton: E,
                children: I,
              }),
            }),
          )),
          (t[18] = n),
          (t[19] = l),
          (t[20] = s),
          (t[21] = E),
          (t[22] = I),
          (t[23] = T))
        : (T = t[23]);
      var D;
      return (
        t[24] !== l || t[25] !== c || t[26] !== T
          ? ((D = u.jsx(o("WAWebUimUie.react").UIE, {
              ref: c,
              displayName: "ComposeBoxLinkPreview",
              escapable: !0,
              requestDismiss: l,
              children: T,
            })),
            (t[24] = l),
            (t[25] = c),
            (t[26] = T),
            (t[27] = D))
          : (D = t[27]),
        D
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ctwaContextData,
        a = e.ctwaContextLinkData,
        i = e.isTopmostPanel,
        l = e.omitCtwa,
        s = e.questionType,
        c = e.ref,
        d;
      t[0] !== n || t[1] !== a.sourceUrl
        ? ((d = u.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
            context: n,
            sourceUrl: a.sourceUrl,
            compose: !0,
          })),
          (t[0] = n),
          (t[1] = a.sourceUrl),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== i || t[4] !== l || t[5] !== s || t[6] !== d
        ? ((m = u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
            onOmit: l,
            questionType: s,
            isTopmostPanel: i,
            children: d,
          })),
          (t[3] = i),
          (t[4] = l),
          (t[5] = s),
          (t[6] = d),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== l || t[9] !== c || t[10] !== m
          ? ((p = u.jsx(o("WAWebUimUie.react").UIE, {
              ref: c,
              displayName: "ComposeBoxCtwaContextPreview",
              escapable: !0,
              requestDismiss: l,
              children: m,
            })),
            (t[8] = l),
            (t[9] = c),
            (t[10] = m),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    function R(t, a) {
      var i,
        l,
        s,
        c = a.chat,
        p = a.ctwaContextData,
        R = a.ctwaContextLinkData,
        L = a.getComposeBlockWidth,
        E = a.linkPreviewData,
        k = a.links,
        I = a.omitCtwa,
        T = a.omitLinkPreview,
        D = a.onClickDismissSpam,
        x = a.onClickNotSpam,
        $ = a.onComposeHeightChange,
        P = a.onEmoji,
        N = a.onExpressionPanelChange,
        M = a.onExpressionPanelClose,
        w = a.onGif,
        A = a.onSticker,
        F = a.questionReplyQuotedMessage,
        O = a.questionType,
        B = a.restoreFocus,
        W = a.selectedExpressionPanel,
        q = a.showSpamPanel,
        U = _(null),
        V = [],
        H = [],
        G = o("useWAWebChatValues").useChatValues(c.id, [
          o("WAWebChatGetters").getIsPSA,
          (s = o("WAWebFrontendChatGetters")).getShouldAppearInList,
          s.getComposeQuotedMsg,
          s.getComposeQuotedMsgRemoteJid,
          s.getQuotedMsgAdminGroupJid,
          s.getQuotedMsgAdminGroupSubject,
          s.getQuotedMsgAdminParentGroupJid,
          s.getMsgs,
          s.getContact,
        ]),
        z = G[0],
        j = G[1],
        K = G[2],
        Q = G[3],
        X = G[4],
        Y = G[5],
        J = G[6],
        Z = G[7],
        ee = G[8],
        te = d(r("WAWebThreadsViewComposeQuotedMsgContext")),
        ne = (i = te == null ? void 0 : te.quotedMsg) != null ? i : K;
      (q && !z && j && Z && Z.length > 0
        ? H.push(
            u.jsx(g, { chat: c, onClickNotSpam: x, onClickDismissSpam: D }),
          )
        : H.push(null),
        W && L() != null
          ? H.push(
              u.jsx(h, {
                getComposeBlockWidth: L,
                onEmoji: P,
                onExpressionPanelChange: N,
                onExpressionPanelClose: M,
                onGif: w,
                onSticker: A,
                restoreFocus: B,
                ref: t,
                selectedExpressionPanel: W,
              }),
            )
          : H.push(null));
      var re =
          (l = r("useWAWebChatInternalStatusHookWrapper")(c.id)) != null
            ? l
            : {},
        oe = re.hasActiveStatus;
      (r("gkx")("26258") === !1 &&
      o("WAWebChatGetters").getIsGroup(c) === !1 &&
      n("cr:5981") != null &&
      oe === !0
        ? V.push(
            u.jsx(n("cr:5981").InternalStatusWarningComposeBox, {
              id: c.contact.id,
              renderImmediately: !0,
            }),
          )
        : V.push(null),
        F
          ? V.push(
              u.jsx(C, {
                questionReplyQuotedMessage: F,
                isTopmostPanel: !V.some(Boolean),
              }),
            )
          : ne
            ? V.push(
                u.jsx(y, {
                  chat: c,
                  rawQuotedMsg: ne,
                  isTopmostPanel: !V.some(Boolean),
                  restoreFocus: B,
                  questionType: O,
                }),
              )
            : X
              ? V.push(
                  u.jsx(b, {
                    chat: c,
                    restoreFocus: B,
                    quotedGroupJid: X,
                    questionType: O,
                  }),
                )
              : V.push(null),
        E
          ? V.push(
              u.jsx(v, {
                linkPreviewData: E,
                links: k,
                isTopmostPanel: !V.some(Boolean),
                omitLinkPreview: T,
                questionType: O,
              }),
            )
          : V.push(null),
        R
          ? V.push(
              u.jsx(S, {
                ctwaContextLinkData: R,
                isTopmostPanel: !V.some(Boolean),
                omitCtwa: I,
                ctwaContextData: p,
                questionType: O,
              }),
            )
          : V.push(null));
      var ae = V.some(Boolean),
        ie = [f.overlay];
      (ie.push(f.overlayRefresh, o("WAWebUISpacing").uiMargin.horiz12),
        ae && ie.push(o("WAWebUISpacing").uiMargin.top6));
      var le = _(null),
        se = function () {
          var e,
            t = U == null || (e = U.current) == null ? void 0 : e.clientHeight;
          (le.current === t && o("WAWebPREGatingUtils").isPREResizeEnabled()) ||
            ($({ overlay: t }, !0), (le.current = t));
        };
      m(function () {
        if (
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_reduce_forced_layout_chat_open",
          )
        ) {
          var e = window.requestAnimationFrame(function () {
            se();
          });
          return function () {
            return window.cancelAnimationFrame(e);
          };
        }
        se();
      }, []);
      var ue = u.jsx("div", {
        className: "x10l6tqk x13vifvy x1o0tod xh8yej3",
        children: u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(ie), {
            ref: U,
            children: [
              H,
              u.jsx(r("WAWebResizeObserver.react"), {
                onResize: se,
                children: u.jsx(r("WAWebVelocityTransitionGroup"), {
                  displayName: "ComposeBoxPanels",
                  transitionName: "compose-panel-down",
                  xstyle: [
                    f.topPanelContainer,
                    O == null && f.inputBoxShadow,
                    o("WAWebUISpacing").uiMargin.horizAuto,
                  ],
                  children: V,
                }),
              }),
            ],
          }),
        ),
      });
      return { PopupPanels: ue, hasTopPanels: ae };
    }
    l.useComposePopupPanels = R;
  },
  98,
);
