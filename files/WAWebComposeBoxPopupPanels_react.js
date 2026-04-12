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
      var t = e.chat,
        n = e.onClickDismissSpam,
        o = e.onClickNotSpam;
      return u.jsx(r("WAWebConversationSpam.react"), {
        chat: t,
        onClickNotSpam: o,
        onClickDismissSpam: n,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
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
      var t = e.isTopmostPanel,
        n = e.questionReplyQuotedMessage,
        a = e.ref;
      return u.jsx(o("WAWebUimUie.react").UIE, {
        ref: a,
        displayName: "QuestionReplyQuotedMsg",
        escapable: !1,
        children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
          onOmit: r("WAWebNoop"),
          isTopmostPanel: t,
          questionType: o("WAWebQuestions.flow").QuestionType.Reply,
          showCloseButton: !1,
          children: u.jsx(r("WAWebQuestionReplyQuotedMessage.react"), {
            questionReplyQuotedMessage: n,
          }),
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.chat,
        n = e.questionType,
        a = e.quotedGroupJid,
        i = e.ref,
        l = e.restoreFocus,
        s = o("useWAWebSetModelValue").useSetModelValue(
          t,
          "quotedMsgAdminGroupJid",
        ),
        c = function (t) {
          (t === void 0 && (t = o("WAWebUim").DismissReason.UIM_INTERACTION),
            t !== o("WAWebUim").DismissReason.LIFECYCLE && s(null));
        };
      return u.jsx(o("WAWebUimUie.react").UIE, {
        ref: i,
        displayName: "QuotedMsgAdminGroupName",
        escapable: !0,
        requestFocus: l,
        requestDismiss: c,
        children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
          questionType: n,
          onOmit: c,
          isTopmostPanel: !0,
          children: u.jsx(
            o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName,
            {
              isComposePreview: !0,
              quotedGroupJid: a,
              quotedParentGroupJid:
                t.quotedMsgAdminGroupSubject != null
                  ? t.quotedMsgAdminParentGroupJid
                  : void 0,
              quotedGroupSubject: t.quotedMsgAdminGroupSubject,
            },
            a.toString(),
          ),
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.isTopmostPanel,
        n = e.linkPreviewData,
        a = e.links,
        i = e.omitLinkPreview,
        l = e.questionType,
        s = e.ref,
        c = n.description,
        d = n.inviteGrpType,
        m = n.isLoading,
        p = n.matchedText,
        _ = n.thumbnail,
        f = n.thumbnailHeight,
        g = n.thumbnailHQ,
        h = n.thumbnailWidth,
        y = n.title,
        C = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(p),
        b = o(
          "PaymentLinkPreviewWithAmountFeature",
        ).isPaymentLinkPreviewWithAmountEnabled(n, a);
      return u.jsx(o("WAWebUimUie.react").UIE, {
        ref: s,
        displayName: "ComposeBoxLinkPreview",
        escapable: !0,
        requestDismiss: i,
        children: u.jsx("div", {
          "data-testid": void 0,
          className: "x6ikm8r",
          children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
            onOmit: i,
            bodyBackground: !1,
            isTopmostPanel: t,
            questionType: l,
            showCloseButton: !b,
            children: u.jsx(r("WAWebMediaLinkPreview.react"), {
              title: y,
              compose: !0,
              thumbnailJpegHQ: g,
              matchedText: C != null ? C : p,
              description: c,
              thumbnailJpeg: _,
              inviteGrpType: d,
              isLoading: m,
              thumbnailJpegWidth: h,
              thumbnailJpegHeight: f,
              linkPreviewData: n,
              links: a,
            }),
          }),
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.ctwaContextData,
        n = e.ctwaContextLinkData,
        a = e.isTopmostPanel,
        i = e.omitCtwa,
        l = e.questionType,
        s = e.ref;
      return u.jsx(o("WAWebUimUie.react").UIE, {
        ref: s,
        displayName: "ComposeBoxCtwaContextPreview",
        escapable: !0,
        requestDismiss: i,
        children: u.jsx(r("WAWebComposeBoxPopupPanel.react"), {
          onOmit: i,
          questionType: l,
          isTopmostPanel: a,
          children: u.jsx(r("WAWebBizCtwaContextImagePreview.react"), {
            context: t,
            sourceUrl: n.sourceUrl,
            compose: !0,
          }),
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
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
                isTopmostPanel: V.filter(Boolean).length === 0,
              }),
            )
          : ne
            ? V.push(
                u.jsx(y, {
                  chat: c,
                  rawQuotedMsg: ne,
                  isTopmostPanel: V.filter(Boolean).length === 0,
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
                isTopmostPanel: V.filter(Boolean).length === 0,
                omitLinkPreview: T,
                questionType: O,
              }),
            )
          : V.push(null),
        R
          ? V.push(
              u.jsx(S, {
                ctwaContextLinkData: R,
                isTopmostPanel: V.filter(Boolean).length === 0,
                omitCtwa: I,
                ctwaContextData: p,
                questionType: O,
              }),
            )
          : V.push(null));
      var ae = V.filter(Boolean).length > 0,
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
