__d(
  "WAWebStatusComposeBox.react",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAWebChatPreferenceCollection",
    "WAWebComposeBoxExpressionPanels.react",
    "WAWebComposeBoxPanelsMenu.react",
    "WAWebContactBlockedErrorAction",
    "WAWebEmojiSuggestions.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebResizeObserver.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendReactionMsgAction",
    "WAWebSendStickerAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStatusGatingUtils",
    "WAWebStatusPlayerQuickRepliesBar.react",
    "WAWebSuggestionsPanelContainer.react",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumStatusReplyMessageType",
    "WAWebWamEnumStatusReplyResult",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "react",
    "stylex",
    "useWAWebIsTabKeyboardUser",
    "useWAWebModelValues",
    "useWAWebReactions",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p,
      g = f.useEffect,
      h = f.useImperativeHandle,
      y = f.useRef,
      C = f.useState,
      b = {
        iconButton: {
          display: "x1rg5ohu",
          alignSelf: "xpvyfi4",
          marginBottom: "xfitlp5",
          marginInlineStart: "x10zl8k0",
          marginInlineEnd: "xcknrev",
          $$css: !0,
        },
        iconButtonColourFocused: { color: "xhslqc4", $$css: !0 },
        iconButtonColourOutOfFocus: { color: "x17t9dm2", $$css: !0 },
        iconButtonColourLiked: { color: "x8dwe99", $$css: !0 },
        inlineSendButtonIcon: {
          width: "xvy4d1p",
          height: "xxk0z11",
          color: "x17t9dm2",
          $$css: !0,
        },
        replyPlaceholderColourFocused: { color: "xhslqc4", $$css: !0 },
        replyPlaceholderColourOutOfFocus: { color: "x17t9dm2", $$css: !0 },
        square26Svg: { width: "x23j0i4", height: "xd7y6wv", $$css: !0 },
        inputContainer: {
          boxSizing: "x9f619",
          width: "xh8yej3",
          minHeight: "x1ba4aug",
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "xdx6fka",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        inputInFocus: {
          backgroundColor: "xk7ee7b",
          borderTopColor: "x1716072",
          borderInlineEndColor: "x1ygal6x",
          borderBottomColor: "x89wmna",
          borderInlineStartColor: "x1rbbhm9",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        inputOutOfFocus: { backgroundColor: "x1gaxu4n", $$css: !0 },
        inputOutOfFocusWithText: {
          backgroundColor: "x1gaxu4n",
          color: "x17t9dm2",
          $$css: !0,
        },
        inputText: { fontSize: "x1lkfr7t", $$css: !0 },
      },
      v = function (t, n, r) {
        return !!t || n || !!r;
      },
      S = function () {
        var e = o("WAWebToast.react").genId();
        o("WAWebToastManager").ToastManager.open(
          _.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Sending reply\u2026"),
            id: e,
          }),
        );
      };
    function R(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, c),
        p = l.onFocusChange,
        f = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji", "enterIsSend"],
        ),
        R = y(null),
        L = C(!1),
        E = L[0],
        k = L[1],
        I = C(void 0),
        T = I[0],
        D = I[1],
        x = C(void 0),
        $ = x[0],
        P = x[1],
        N = C(null),
        M = N[0],
        w = N[1],
        A = C(300),
        F = A[0],
        O = A[1],
        B = C(""),
        W = B[0],
        q = B[1],
        U = C(!1),
        V = U[0],
        H = U[1],
        G = r("WAWebNoop"),
        z = r("useWAWebReactions")([l.msg.id.toString()], G),
        j = z.reactionsModels,
        K = (a = j[0]) == null ? void 0 : a.reactionByMe,
        Q = K != null && K.reactionText !== "",
        X = function (t) {
          (t == null || t.stopPropagation(), t == null || t.preventDefault());
          var e = "\u2764\uFE0F",
            n = "",
            r = Q ? n : e;
          o("WAWebSendReactionMsgAction")
            .sendReactionToMsg(l.msg, r)
            .catch(function (e) {});
        },
        Y = function (t) {
          return t
            ? s._(/*BTDS*/ "Send")
            : Q
              ? s._(/*BTDS*/ "Unlike")
              : s._(/*BTDS*/ "Like");
        },
        J = function (t) {
          return t
            ? b.iconButtonColourFocused
            : Q
              ? b.iconButtonColourLiked
              : b.iconButtonColourOutOfFocus;
        },
        Z = y(null),
        ee = C(null),
        te = ee[0],
        ne = ee[1],
        re = y(null),
        oe = r("useWAWebUnmountSignal")(),
        ae = r("useWAWebIsTabKeyboardUser")();
      g(function () {
        var e = r("WANullthrows")(o("WAWebMsgGetters").getSender(l.msg));
        o("WAWebFindChatAction")
          .findOrCreateLatestChat(e, "statusComposeBox")
          .then(function (e) {
            var t = e.chat;
            oe.aborted || P(t);
          });
      }, []);
      var ie = v(T, E, M);
      g(
        function () {
          ie ? l.pause() : l.play();
        },
        [ie],
      );
      var le = function () {
          return ie;
        },
        se = function () {
          te == null || te.focus();
        },
        ue = function () {
          (D(void 0), se());
        },
        ce = function () {
          (w(null), se());
        },
        de = function () {
          (D(void 0), w(null));
        },
        me = function () {
          if ($) return (m || (m = n("Promise"))).resolve($);
          var e = r("WANullthrows")(o("WAWebMsgGetters").getSender(l.msg));
          return o("WAWebFindChatAction")
            .findOrCreateLatestChat(e, "statusComposeBox")
            .then(function (e) {
              return e.chat;
            });
        },
        pe = function () {
          (S(), de(), te == null || te.reset(), l.dismissReply(void 0, !0));
        },
        _e = function (t, n) {
          var e = o("WAWebToast.react").genId(),
            a =
              n ===
              o("WAWebWamEnumStatusReplyMessageType").STATUS_REPLY_MESSAGE_TYPE
                .QUICK_REPLY;
          (t
            .then(function () {
              (l.onSend(),
                l.onLogStatusReply(
                  o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT.OK,
                  n,
                  a,
                ));
            })
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
            .catch(
              o("WAFilteredCatch").filteredCatch(
                r("WAWebContactBlockedErrorAction"),
                function () {
                  $ &&
                    (o("WAWebToastManager").ToastManager.open(
                      _.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(
                          /*BTDS*/ "Can't send a message to blocked contact {contact}.",
                          [
                            s._param(
                              "contact",
                              o("WAWebFrontendContactGetters").getFormattedName(
                                $.contact,
                              ),
                            ),
                          ],
                        ),
                        id: e,
                      }),
                    ),
                    l.onLogStatusReply(
                      o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT
                        .ERROR_UNKNOWN,
                      n,
                      a,
                    ));
                },
              ),
            ),
            a || pe());
        },
        fe = function (n) {
          (n == null || n.stopPropagation(),
            n == null || n.preventDefault(),
            W.trim().length &&
              me().then(function (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleTextSend inside WAWebStatusComposeBox",
                    ])),
                );
                var n = o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                  t,
                  W,
                  { quotedMsg: l.msg },
                );
                _e(
                  n,
                  o("WAWebWamEnumStatusReplyMessageType")
                    .STATUS_REPLY_MESSAGE_TYPE.TEXT,
                );
              }));
        },
        ge = function (t) {
          (k(t), p(t));
        },
        he = function () {
          ge(!0);
        },
        ye = function () {
          (document.activeElement, document.body);
        },
        Ce = function () {
          return E;
        },
        be = function () {
          (ge(!1), de(), H(!1));
        },
        ve = function (t) {
          te == null || te.replaceSelection(t);
        },
        Se = function (t, n) {
          t.isCreateButton ||
            me().then(function (e) {
              var r = o("WAWebSendStickerAction").sendStickerToChat(e, t, {
                stickerSendOrigin: n,
                quotedMsg: l.msg,
              });
              _e(
                r,
                o("WAWebWamEnumStatusReplyMessageType")
                  .STATUS_REPLY_MESSAGE_TYPE.STICKER,
              );
            });
        },
        Re = function () {
          var e;
          (e = re.current) == null || e.restoreFocus();
        },
        Le = function (t) {
          O(t.width);
        },
        Ee = function (t) {
          Z.current = t;
        },
        ke = function (t) {
          t == null ? ce() : (w(t), ge(!0));
        },
        Ie = function (t, n) {
          (t.stopPropagation(),
            H(!0),
            me().then(function (e) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleQuickReplySend inside WAWebStatusComposeBox",
                  ])),
              );
              var t = o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, n, {
                quotedMsg: l.msg,
              });
              _e(
                t,
                o("WAWebWamEnumStatusReplyMessageType")
                  .STATUS_REPLY_MESSAGE_TYPE.QUICK_REPLY,
              );
            }));
        };
      h(i, function () {
        return { isFocused: Ce, isPaused: le, restoreFocus: se, blur: be };
      });
      var Te = Ce() || M != null,
        De = (function () {
          if (Te) return fe;
          if (o("WAWebStatusGatingUtils").isStatusLikesSendEnabled()) return X;
        })(),
        xe =
          F != null && M != null
            ? _.jsx(r("WAWebResizeObserver.react"), {
                onResize: Le,
                children: _.jsx(r("WAWebComposeBoxExpressionPanels.react"), {
                  displayCache: Z.current,
                  width: F,
                  onDisplayCache: Ee,
                  onEmoji: ve,
                  onFocusRelease: r("WAWebNoop"),
                  onGif: r("WAWebNoop"),
                  onExpressionPanelChange: ke,
                  onSticker: Se,
                  requestDismiss: ce,
                  selectedExpressionPanel: M,
                  theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme
                    .StatusReplyComposeBox,
                }),
              })
            : null,
        $e = T
          ? _.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "EmojiPicker",
              escapable: !0,
              dismissOnWindowResize: !0,
              requestFocus: Re,
              children: _.jsx("div", {
                children: _.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "EmojiPicker",
                  escapable: !0,
                  popable: !0,
                  dismissOnWindowResize: !0,
                  requestDismiss: ue,
                  requestFocus: Re,
                  children: _.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: T,
                  }),
                }),
              }),
            })
          : null,
        Pe =
          W.length === 0
            ? _.jsx(r("WAWebStatusPlayerQuickRepliesBar.react"), {
                onClick: Ie,
                onClickAnimateEnd: pe,
              })
            : null,
        Ne =
          (E || ae) && M == null
            ? _.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "StatusQuickReply",
                escapable: !0,
                requestDismiss: function () {
                  (l.onLogStatusReply(
                    o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT
                      .CANCELLED,
                  ),
                    l.dismissReply());
                },
                children: _.jsx("div", {
                  className:
                    "xyw6214 xyri2b x18d9i69 x11t971q xvc5jky x6my1t9 x1nrll8i xuuh30 x10l6tqk xxzp1fc",
                  children: Pe,
                }),
              })
            : null,
        Me = _.jsx("div", {
          className: "x1q2q2tz",
          children: _.jsx(
            o("WAWebComposeBoxPanelsMenu.react").ComposeBoxExpressionPanelsMenu,
            {
              chat: $,
              selectedExpressionPanel: M,
              onChange: ke,
              theme: o("WAWebComposeBoxPanelsMenu.react").PanelsTheme
                .StatusReplyComposeBox,
              buttonStyle: [
                Te ? b.iconButtonColourFocused : b.iconButtonColourOutOfFocus,
              ],
              buttonProps: {
                closePanel: {
                  "data-tab":
                    o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                },
                openEmoji: {
                  "data-tab":
                    o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                },
                openGif: {
                  "data-tab":
                    o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                },
                openSticker: {
                  "data-tab":
                    o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                },
              },
            },
          ),
        }),
        we = o("WAWebMsgGetters").getIsGroupStatus(l.msg)
          ? s._(/*BTDS*/ "Reply to group\u2026")
          : s._(/*BTDS*/ "Type a reply\u2026"),
        Ae = te == null ? void 0 : te.editor,
        Fe = !Te && W.trim().length > 0,
        Oe = function () {
          return Te
            ? b.inputInFocus
            : Fe
              ? b.inputOutOfFocusWithText
              : b.inputOutOfFocus;
        },
        Be = _.jsxs(_.Fragment, {
          children: [
            _.jsx("div", {
              className: "x10l6tqk xo2ifbc xs7f9wi xi5uv41",
              children:
                Ae &&
                _.jsx(r("WAWebEmojiSuggestions.react"), {
                  editor: Ae,
                  kind: o("WAWebSuggestionsPanelContainer.react")
                    .SuggestionsPanelKind.Menu,
                }),
            }),
            _.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              className: (d || (d = r("stylex")))(
                b.inputContainer,
                o("WAWebUISpacing").uiPadding.vert3,
                Oe(),
              ),
              onClick: se,
              children: [
                _.jsx(r("WAWebRichTextInput.react"), {
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                  xstyle: o("WAWebUISpacing").uiMargin.vert6,
                  textXstyle: b.inputText,
                  placeholderTextXStyle: Te
                    ? b.replyPlaceholderColourFocused
                    : b.replyPlaceholderColourOutOfFocus,
                  ref: ne,
                  placeholder: we,
                  multiline: !0,
                  spellCheck: f.spellcheck,
                  enterIsNewLine: !f.enterIsSend,
                  onChange: function (t) {
                    return q(t.text);
                  },
                  onFocus: he,
                  onBlur: ye,
                  onEnter: fe,
                  children: _.jsx(r("WAWebRichTextInputPlugins.react"), {
                    transformTextEmoji: f.transformTextEmoji,
                    textFormatEnabled: !0,
                    bulletPointsEnabled: !0,
                    numberedListEnabled: !0,
                    inlineCodeEnabled: !0,
                    blockQuoteEnabled: !0,
                    internLinksEnabled: !0,
                    phoneNumbersEnabled: !0,
                    linksEnabled: !0,
                    textFormatShortcutsEnabled: !0,
                  }),
                }),
                !Te && W.trim().length > 0
                  ? _.jsx(r("WAWebUnstyledButton.react"), {
                      "aria-label": s._(/*BTDS*/ "Send"),
                      dataTab:
                        o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                      className_DONOTUSE:
                        "x10l6tqk x11dcrhx xwa60dl x1cb1t30 x78zum5 x6s0dn4 xl56j7k x17t9dm2",
                      onClick: fe,
                      children: _.jsx(
                        o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                        { xstyle: b.inlineSendButtonIcon },
                      ),
                    })
                  : null,
              ],
            }),
          ],
        }),
        We = V
          ? null
          : _.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x12ol6y4 x180vkcf x1khw62d x709u02 xa1v5g2 x1n2onr6",
                  },
                  1: {
                    className:
                      "xhjsbib x1h2kqdt x12ol6y4 x180vkcf x1khw62d x709u02 xa1v5g2 x1n2onr6",
                  },
                }[!!Te << 0],
                {
                  children: [
                    _.jsx(r("WAWebVelocityTransitionGroup"), {
                      transitionName: "status-panel",
                      appear: !0,
                      children: xe,
                    }),
                    _.jsxs("div", {
                      className:
                        "xa1v5g2 x78zum5 x1q0g3np x889kno x2vl965 x1a8lsjc xe2zdcy",
                      children: [
                        Me,
                        _.jsx("div", {
                          className:
                            "x1n2onr6 x13vifvy xu96u03 x1rg5ohu x10kpxic",
                          children: Be,
                        }),
                        _.jsx(r("WAWebUnstyledButton.react"), {
                          "aria-label": Y(Te),
                          dataTab:
                            o("WAWebTabOrder").TAB_ORDER.STATUS_BOTTOM_SECTION,
                          className_DONOTUSE: (d || (d = r("stylex")))(
                            b.iconButton,
                            J(Te),
                          ),
                          onClick: De,
                          children:
                            Te ||
                            !o(
                              "WAWebStatusGatingUtils",
                            ).isStatusLikesSendEnabled()
                              ? _.jsx(
                                  o("WAWebWdsIcSendFilledIcon.react")
                                    .WdsIcSendFilledIcon,
                                  { xstyle: b.square26Svg },
                                )
                              : _.jsx(
                                  "span",
                                  {
                                    className:
                                      "x78zum5 x6s0dn4 xl56j7k x1ue3g3s x5hsz1j xa3vuyk x10e4vud",
                                    children: Q
                                      ? _.jsx(
                                          r("WDSIconIcFavoriteFilled.react"),
                                          {
                                            xstyle: b.square26Svg,
                                            colorName:
                                              "persistentActivityIndicator",
                                          },
                                        )
                                      : _.jsx(r("WDSIconIcFavorite.react"), {
                                          xstyle: b.square26Svg,
                                          colorName: "persistentAlwaysWhite",
                                        }),
                                  },
                                  Q ? "liked" : "unliked",
                                ),
                        }),
                        $e,
                      ],
                    }),
                  ],
                },
              ),
            );
      return (
        g(
          function () {
            var e = function () {
              var e,
                t = document.activeElement;
              !((e = R.current) != null && e.contains(t)) &&
                E &&
                (l.onLogStatusReply(
                  o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT
                    .CANCELLED,
                ),
                l.dismissReply(!1));
            };
            return (
              document.addEventListener("focusin", e),
              function () {
                document.removeEventListener("focusin", e);
              }
            );
          },
          [E],
        ),
        _.jsxs("div", {
          ref: R,
          className:
            "x10l6tqk x3m8u43 xn0vg7t xu96u03 xa1v5g2 x19sv2k2 x1kozois x11t971q xvc5jky x1a8lsjc",
          children: [
            We,
            _.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "status-quick-reply",
              appear: !0,
              children: Ne,
            }),
          ],
        })
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
