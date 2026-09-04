__d(
  "WAWebPollsCreatePollModal",
  [
    "fbt",
    "WAWebAttachMediaCollection",
    "WAWebAttachmentMenuLogger",
    "WAWebBizBotTosUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypePopup.react",
    "WAWebNewsletterWamoSubUtils",
    "WAWebPollAttachMediaPicker.react",
    "WAWebPollAttachMediaViewLoadable.react",
    "WAWebPollCreationUtils",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsEndTimeSection",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionInput",
    "WAWebPollsOrderableList",
    "WAWebPollsSendPollCreationMsgAction",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpoilerGating",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSSwitch.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebChatValues",
    "useWAWebOnUnmount",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useLayoutEffect,
      f = d.useMemo,
      g = d.useRef,
      h = d.useState,
      y = { marginBottom10: { marginBottom: "xyorhqc", $$css: !0 } },
      C = 25;
    function b(e) {
      var t = e.correctOptionKey,
        n = e.filteredOptions,
        a = e.hideVoterNames,
        i = e.isPhotoPoll,
        l = e.isSingleOption,
        s = e.pollEndTime,
        u = e.pollType,
        c = e.question,
        d = {
          name: c,
          selectableOptionsCount:
            l || u === o("WAWebPollCreationUtils").PollType.QUIZ ? 1 : 0,
          correctOptionIndex:
            u === o("WAWebPollCreationUtils").PollType.QUIZ
              ? n.findIndex(function (e) {
                  return e.key === t;
                })
              : void 0,
          endTime: s,
          hideVoterNames: a ? !0 : void 0,
        };
      return i
        ? babelHelpers.extends({}, d, {
            contentType: "IMAGE",
            options: n.map(function (e) {
              var t = e.image,
                n = e.name;
              return { name: n, image: r("nullthrows")(t) };
            }),
            pollType: u,
          })
        : babelHelpers.extends({}, d, {
            contentType: "TEXT",
            options: n.map(function (e) {
              var t = e.name;
              return { name: t };
            }),
            pollType: u,
          });
    }
    var v = {
      bodyContainer: {
        boxSizing: "x9f619",
        width: "x1esq4s8",
        paddingInlineStart: "xvahy20",
        paddingInlineEnd: "x1a4sjiy",
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        $$css: !0,
      },
      optionsContainer: { overflowY: "x1odjw0f", $$css: !0 },
      drawer: {
        backgroundColor: "x1280gxy",
        marginInlineStart: "x137kccz",
        width: "x14n2pz4",
        $$css: !0,
      },
      sendButton: {
        transform: "x1cb1t30",
        marginInlineEnd: "x1wcu8vx",
        transitionProperty: "xs2xxs2",
        transitionDuration: "x1d8287x",
        $$css: !0,
      },
      sendButtonRefreshed: {
        color: "x1pse0pq",
        backgroundColor: "xfn3atn",
        $$css: !0,
      },
      singleOptionContainer: {
        display: "x78zum5",
        alignItems: "x6s0dn4",
        width: "xh8yej3",
        fontSize: "x1jchvi3",
        lineHeight: "xdod15v",
        $$css: !0,
      },
      singleOptionLabel: {
        width: "xh8yej3",
        display: "x1rg5ohu",
        cursor: "x1ypdohk",
        $$css: !0,
      },
    };
    function S(t) {
      var a,
        i = t.chat,
        l = t.getComposeBoxEditorRef,
        u = t.initialCheckedKey,
        d = t.initialOptions,
        C = t.initialQuestion,
        S = t.onSend,
        L = t.pollType,
        E = r("useLazyRef")(function () {
          var e, t;
          return (e =
            (t = l()) == null || (t = t.getTextContent()) == null
              ? void 0
              : t.substring(
                  0,
                  o("WAWebPollsGatingUtils").getMaxPollNameLength(),
                )) != null
            ? e
            : "";
        }).current,
        k = h(E),
        I = k[0],
        T = k[1],
        D = h(!1),
        x = D[0],
        $ = D[1],
        P = h(u),
        N = P[0],
        M = P[1],
        w = h(!1),
        A = w[0],
        F = w[1],
        O = h(null),
        B = O[0],
        W = O[1],
        q = h(!1),
        U = q[0],
        V = q[1],
        H = g(),
        G = h(void 0),
        z = G[0],
        j = G[1],
        K = h(!1),
        Q = K[0],
        X = K[1],
        Y = h(!1),
        J = Y[0],
        Z = Y[1],
        ee = h(null),
        te = ee[0],
        ne = ee[1],
        re =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        oe = re[0],
        ae = re[1],
        ie = f(
          function () {
            var e = o(
              "WAWebChatEphemerality",
            ).calculateEphemeralDurationForChat(i);
            return e == null ? null : e * 1e3;
          },
          [i],
        ),
        le = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        se = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: le },
          );
        }),
        ue = se[0],
        ce = se[1],
        de = g(new Map()),
        me = g(null),
        pe = g(),
        _e = r("useWAWebUIM")(),
        fe = m(
          function (e, t) {
            ce(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: le,
                focusedKey: t,
              }),
            );
          },
          [le],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var ge = g(),
        he = g(ue.length);
      _(
        function () {
          var e = me.current,
            t = he.current,
            n = ue.findIndex(function (e) {
              return e.key === ge.current;
            });
          (e != null &&
            t < ue.length &&
            n === ue.length - 2 &&
            ue[ue.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (he.current = ue.length));
        },
        [ue],
      );
      var ye = function (t) {
          var e = t.text;
          T(e);
        },
        Ce = ue.some(function (e) {
          return e.image != null;
        }),
        be = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(ue);
          },
          [ue],
        );
      (p(
        function () {
          i.isComposingPoll =
            I.length > 0 ||
            ue.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, I, ue],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var ve = ue[le - 2],
        Se = ue[le - 1],
        Re =
          ue.length === le &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ve) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Se),
        Le = g(),
        Ee = function (t) {
          (t === void 0 && (t = !1),
            o("WAWebModalManager").ModalManager.close(),
            t &&
              o(
                "WAWebAttachmentMenuLogger",
              ).AttachmentMenuLogger.logAttachmentCancel(
                i,
                o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL,
              ));
        },
        ke =
          I !== "" ||
          ue.some(function (e) {
            return e.name !== "" || e.image;
          }),
        Ie =
          L === o("WAWebPollCreationUtils").PollType.QUIZ &&
          oe &&
          o("WAWebNewsletterGatingUtils").isQuizOptionOrderNoticeEnabled(),
        Te = function () {
          ke ? X(!0) : Ee(!0);
        },
        De = function () {
          ke ? Q || X(!0) : Ee(!0);
        },
        xe = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (Z(!0),
              Ee(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = ue.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = b({
                correctOptionKey: N,
                filteredOptions: n,
                isPhotoPoll: Ce,
                isSingleOption: x,
                pollEndTime: A ? B : null,
                pollType: L,
                question: I,
                hideVoterNames: U,
              });
            (o("WAWebPollsSendPollCreationMsgAction").sendPollCreation({
              poll: r,
              chat: i,
              quotedMsg: i.composeQuotedMsg,
              isWamoSub:
                e ===
                o("WAWebNewsletterWamoSubMessageType")
                  .NewsletterWamoSubMessageType.WamoSub,
            }),
              (i.composeQuotedMsg = null),
              i.setComposeContents({}),
              (t = l()) == null || t.reset(),
              o(
                "WAWebAttachmentMenuLogger",
              ).AttachmentMenuLogger.logAttachmentSend(
                i,
                o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL,
              ));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        $e = function () {
          if (
            oe &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              ae,
            ) &&
            pe.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              xe(t);
            };
            ne({ popupAnchorEl: pe.current, handleSelect: e });
          } else xe();
          S == null || S();
        },
        Pe = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: I,
            options: ue,
            isPhotoPoll: Ce,
            pollType: L,
            correctOptionKey: N,
            pollEndTimeEnabled: A,
            pollEndTime: B,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          $e();
        },
        Ne = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: ue };
          },
          [i, l, ue],
        ),
        Me = m(
          function (e, t) {
            var n = [].concat(ue);
            ((n[e] = babelHelpers.extends({}, ue[e], { image: void 0 })),
              fe(n, t));
          },
          [ue, fe],
        ),
        we = m(
          function (e) {
            var t = ue[e],
              n = babelHelpers.extends(
                { question: I, allowMultipleMedia: !1, activeOptionIndex: e },
                Ne,
                { pollType: L, correctOptionKey: N },
              );
            if (t.image) {
              var a = t.image,
                l = new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: i.getParticipantCount(),
                });
              (l.add(a),
                l.forEach(function (e) {
                  e.updateCaption(t.name);
                }),
                l.setActive(a),
                _e == null || _e.requestDismiss());
              var s = c.jsx(
                o("WAWebPollAttachMediaViewLoadable.react")
                  .PollAttachMediaViewLoadable,
                babelHelpers.extends({ mediaCollection: l }, n),
              );
              o("WAWebModalManager").ModalManager.openMedia(s, {
                transition: "menu",
              });
            } else {
              var u;
              (j(e), (u = H.current) == null || u.open());
            }
          },
          [i, N, Ne, ue, L, I, _e],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), Te());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: De,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: v.drawer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    L === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: Te,
                }),
                c.jsx(r("WAWebDrawerBody.react"), {
                  children: c.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        v.bodyContainer,
                        o("WDSPaddings.stylex").wdsPaddings.paddingTop32,
                      ),
                      {
                        children: [
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn",
                            children: s._(/*BTDS*/ "Question"),
                          }),
                          c.jsx(o("WAWebRichTextField.react").RichTextField, {
                            ref: Le,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            spoilerEnabled:
                              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                            textFormatEnabled: !0,
                            value: C != null ? C : E,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLengthForIncomingMessages(),
                            onChange: ye,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn x1e1m7ul",
                            children: s._(/*BTDS*/ "Options"),
                          }),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: me },
                              e.props(
                                v.optionsContainer,
                                o("WDSMargins.stylex").wdsMargins.marginTop2,
                                y.marginBottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: ue,
                                    onReordered: fe,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          we(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = H.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: be.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? de.current.set(n.key, t)
                                            : de.current.delete(n.key);
                                        },
                                        pollType: L,
                                        isPhotoPoll: Ce,
                                        onChange: function (r) {
                                          var t = [].concat(ue);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            fe(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          Me(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          ge.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          ge.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === N
                                            ? M(null)
                                            : M(n.key);
                                        },
                                        checked: n.key === N,
                                      });
                                    },
                                  }),
                                  L ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !Ie &&
                                    !ke &&
                                    c.jsx("div", {
                                      "data-testid": "quiz-correct-answer-hint",
                                      className: "x889kno",
                                      children: c.jsx(r("WDSText.react"), {
                                        type: "Body2",
                                        colorName: "contentDeemphasized",
                                        children: s._(
                                          /*BTDS*/ "Select one right answer",
                                        ),
                                      }),
                                    }),
                                ],
                              },
                            ),
                          ),
                          Ie && c.jsx(R, { isFormDirty: ke }),
                          c.jsx("h3", {
                            "data-testid": "poll-creation-one-more-option-hint",
                            className: { 0: "x1nxh6w3", 1: "x1nxh6w3 xlshs6z" }[
                              !Re << 0
                            ],
                            children: s._(
                              /*BTDS*/ "You can add one more option.",
                            ),
                          }),
                          L === o("WAWebPollCreationUtils").PollType.POLL &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isSingleOptionPollsSendingEnabled(i.id) &&
                            c.jsxs(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  v.singleOptionContainer,
                                  o("WDSPaddings.stylex").wdsPaddings
                                    .paddingBottom20,
                                ),
                                {
                                  children: [
                                    c.jsx(
                                      "label",
                                      babelHelpers.extends(
                                        {
                                          htmlFor: "polls-single-option-switch",
                                        },
                                        (e || (e = r("stylex"))).props(
                                          v.singleOptionLabel,
                                          o("WDSPaddings.stylex").wdsPaddings
                                            .paddingVer4,
                                        ),
                                        {
                                          children: s._(
                                            /*BTDS*/ "Allow multiple answers",
                                          ),
                                        },
                                      ),
                                    ),
                                    c.jsx(r("WDSSwitch.react"), {
                                      id: "polls-single-option-switch",
                                      value: !x,
                                      onChange: function () {
                                        $(!x);
                                      },
                                      testid: "polls-single-option-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          L === o("WAWebPollCreationUtils").PollType.POLL &&
                            !oe &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isPollHideVotersSendingEnabled(i.id) &&
                            c.jsxs(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  v.singleOptionContainer,
                                  o("WDSPaddings.stylex").wdsPaddings
                                    .paddingBottom20,
                                ),
                                {
                                  children: [
                                    c.jsx(
                                      "label",
                                      babelHelpers.extends(
                                        {
                                          htmlFor:
                                            "polls-hide-voter-names-switch",
                                        },
                                        (e || (e = r("stylex"))).props(
                                          v.singleOptionLabel,
                                          o("WDSPaddings.stylex").wdsPaddings
                                            .paddingVer4,
                                        ),
                                        {
                                          children: s._(
                                            /*BTDS*/ "Hide voter names",
                                          ),
                                        },
                                      ),
                                    ),
                                    c.jsx(r("WDSSwitch.react"), {
                                      id: "polls-hide-voter-names-switch",
                                      value: U,
                                      onChange: function () {
                                        V(!U);
                                      },
                                      testid: "polls-hide-voter-names-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          L === o("WAWebPollCreationUtils").PollType.POLL &&
                            !oe &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isPollEndTimeSendingEnabled(i.id) &&
                            c.jsx(r("WAWebPollsEndTimeSection"), {
                              enabled: A,
                              maxDurationMs: ie,
                              onToggle: F,
                              pollEndTime: B,
                              onEndTimeChange: W,
                            }),
                        ],
                      },
                    ),
                  ),
                }),
                c.jsx("div", {
                  className:
                    "xh8yej3 x78zum5 x13a6bvl xwvwv9b x1jn9dgz x11fxgd9",
                  children: c.jsxs(o("WAWebRound.react").Round, {
                    ref: pe,
                    xstyle: [v.sendButton, v.sendButtonRefreshed],
                    theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                    large: !0,
                    onClick: Pe,
                    disabled: be.size !== 0 || J || (A && B == null),
                    label: s._(/*BTDS*/ "Send"),
                    testid: "poll-send-button",
                    children: [
                      c.jsx(
                        o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                        { width: 28, directional: !0 },
                      ),
                      " ",
                    ],
                  }),
                }),
                te != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: te.handleSelect,
                    popupAnchorEl: te.popupAnchorEl,
                    onDismiss: function () {
                      return ne(null);
                    },
                  }),
              ],
            }),
          }),
          Q &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title:
                L === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (X(!1), (e = Le.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                Ee(!0);
              },
              onOverlayClick: De,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: H,
            chat: i,
            options: ue,
            getComposeBoxEditorRef: l,
            question: I,
            allowMultipleMedia: !Ce,
            activeOptionIndex: z != null ? z : void 0,
            pollType: L,
            correctOptionKey: N,
          }),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.isFormDirty,
        a;
      return (
        t[0] !== n
          ? ((a = c.jsx("div", {
              "data-testid": "quiz-option-order-notice",
              children: c.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDefault",
                children: n
                  ? s._(
                      /*BTDS*/ "Everyone will see the options in a different order.",
                    )
                  : s._(
                      /*BTDS*/ "Select one right answer. Everyone will see the options in a different order.",
                    ),
              }),
            })),
            (t[0] = n),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.CreatePollModal = S;
  },
  226,
);
