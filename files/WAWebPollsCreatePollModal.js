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
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionInput",
    "WAWebPollsOrderableList",
    "WAWebPollsSendPollCreationMsgAction",
    "WAWebPollsSettingsSection",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSpoilerGating",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSIconIcSendFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebChatValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
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
      },
      S = { surface: "unknown", viewName: "polls-create" };
    function R(t) {
      var a,
        i = t.chat,
        l = t.getComposeBoxEditorRef,
        u = t.initialCheckedKey,
        d = t.initialOptions,
        C = t.initialQuestion,
        R = t.onSend,
        E = t.pollType,
        k = h(function () {
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
        }),
        I = k[0],
        T = h(I),
        D = T[0],
        x = T[1],
        $ = h(!1),
        P = $[0],
        N = $[1],
        M = h(u),
        w = M[0],
        A = M[1],
        F = h(!1),
        O = F[0],
        B = F[1],
        W = h(null),
        q = W[0],
        U = W[1],
        V = h(!1),
        H = V[0],
        G = V[1],
        z = g(),
        j = h(void 0),
        K = j[0],
        Q = j[1],
        X = h(!1),
        Y = X[0],
        J = X[1],
        Z = h(!1),
        ee = Z[0],
        te = Z[1],
        ne = h(null),
        re = ne[0],
        oe = ne[1],
        ae =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        ie = ae[0],
        le = ae[1],
        se = f(
          function () {
            var e = o(
              "WAWebChatEphemerality",
            ).calculateEphemeralDurationForChat(i);
            return e == null ? null : e * 1e3;
          },
          [i],
        ),
        ue = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        ce = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: ue },
          );
        }),
        de = ce[0],
        me = ce[1],
        pe = g(new Map()),
        _e = g(null),
        fe = g(),
        ge = r("useWAWebUIM")(),
        he = m(
          function (e, t) {
            me(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: ue,
                focusedKey: t,
              }),
            );
          },
          [ue],
        ),
        ye = r("useWAWebStableCallback")(function () {
          o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
        });
      p(
        function () {
          return ye();
        },
        [ye],
      );
      var Ce = g(),
        be = g(de.length);
      _(
        function () {
          var e = _e.current,
            t = be.current,
            n = de.findIndex(function (e) {
              return e.key === Ce.current;
            });
          (e != null &&
            t < de.length &&
            n === de.length - 2 &&
            de[de.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (be.current = de.length));
        },
        [de],
      );
      var ve = function (t) {
          var e = t.text;
          x(e);
        },
        Se = de.some(function (e) {
          return e.image != null;
        }),
        Re = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(de);
          },
          [de],
        );
      (p(
        function () {
          i.set(
            "isComposingPoll",
            D.length > 0 ||
              de.some(function (e) {
                return e.name.length > 0;
              }),
          );
        },
        [i, D, de],
      ),
        r("useWAWebOnUnmount")(function () {
          i.set("isComposingPoll", !1);
        }));
      var Le = de[ue - 2],
        Ee = de[ue - 1],
        ke =
          de.length === ue &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Le) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Ee),
        Ie = g(),
        Te = function (t) {
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
        De =
          D !== "" ||
          de.some(function (e) {
            return e.name !== "" || e.image;
          }),
        xe =
          E === o("WAWebPollCreationUtils").PollType.QUIZ &&
          ie &&
          o("WAWebNewsletterGatingUtils").isQuizOptionOrderNoticeEnabled(),
        $e = function () {
          De ? J(!0) : Te(!0);
        },
        Pe = function () {
          De ? Y || J(!0) : Te(!0);
        },
        Ne = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (te(!0),
              Te(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = de.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = b({
                correctOptionKey: w,
                filteredOptions: n,
                isPhotoPoll: Se,
                isSingleOption: P,
                pollEndTime: O ? q : null,
                pollType: E,
                question: D,
                hideVoterNames: H,
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
        Me = function () {
          if (
            ie &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              le,
            ) &&
            fe.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              Ne(t);
            };
            oe({ popupAnchorEl: fe.current, handleSelect: e });
          } else Ne();
          R == null || R();
        },
        we = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: D,
            options: de,
            isPhotoPoll: Se,
            pollType: E,
            correctOptionKey: w,
            pollEndTimeEnabled: O,
            pollEndTime: q,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          Me();
        },
        Ae = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: de };
          },
          [i, l, de],
        ),
        Fe = m(
          function (e, t) {
            var n = [].concat(de);
            ((n[e] = babelHelpers.extends({}, de[e], { image: void 0 })),
              he(n, t));
          },
          [de, he],
        ),
        Oe = m(
          function (e) {
            var t = de[e],
              n = babelHelpers.extends(
                { question: D, allowMultipleMedia: !1, activeOptionIndex: e },
                Ae,
                { pollType: E, correctOptionKey: w },
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
                ge == null || ge.requestDismiss());
              var s = c.jsx(
                r("WAWebPollAttachMediaViewLoadable.react"),
                babelHelpers.extends({ mediaCollection: l }, n),
              );
              o("WAWebModalManager").ModalManager.openMedia(s, {
                transition: "menu",
              });
            } else {
              var u;
              (Q(e), (u = z.current) == null || u.open());
            }
          },
          [i, w, Ae, de, E, D, ge],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), $e());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: Pe,
            tsNavigationData: S,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: v.drawer,
              disableNavigationLogging: !0,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    E === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: $e,
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
                            ref: Ie,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            spoilerEnabled:
                              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                            textFormatEnabled: !0,
                            value: C != null ? C : I,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o("WAWebPollsGatingUtils")
                              .MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES,
                            onChange: ve,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn x1e1m7ul",
                            children: s._(/*BTDS*/ "Options"),
                          }),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: _e },
                              e.props(
                                v.optionsContainer,
                                o("WDSMargins.stylex").wdsMargins.marginTop2,
                                y.marginBottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: de,
                                    onReordered: he,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          Oe(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = z.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: Re.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? pe.current.set(n.key, t)
                                            : pe.current.delete(n.key);
                                        },
                                        pollType: E,
                                        isPhotoPoll: Se,
                                        onChange: function (r) {
                                          var t = [].concat(de);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            he(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          Fe(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          Ce.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          Ce.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === w
                                            ? A(null)
                                            : A(n.key);
                                        },
                                        checked: n.key === w,
                                      });
                                    },
                                  }),
                                  E ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !xe &&
                                    !De &&
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
                          xe && c.jsx(L, { isFormDirty: De }),
                          c.jsx(
                            "h3",
                            babelHelpers.extends(
                              {
                                "data-testid":
                                  "poll-creation-one-more-option-hint",
                              },
                              {
                                0: { className: "x1nxh6w3" },
                                1: { className: "x1nxh6w3 xlshs6z" },
                              }[!ke << 0],
                              {
                                children: s._(
                                  /*BTDS*/ "You can add one more option.",
                                ),
                              },
                            ),
                          ),
                          c.jsx(r("WAWebPollsSettingsSection"), {
                            chatId: i.id,
                            hideVoterNames: H,
                            isNewsletter: ie,
                            isSingleOption: P,
                            onEndTimeChange: U,
                            onEndTimeToggle: B,
                            onHideVoterNamesChange: G,
                            onSingleOptionChange: N,
                            pollEndTime: q,
                            pollEndTimeEnabled: O,
                            pollEndTimeMaxDurationMs: se,
                            pollType: E,
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
                    ref: fe,
                    xstyle: [v.sendButton, v.sendButtonRefreshed],
                    theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                    large: !0,
                    onClick: we,
                    disabled: Re.size !== 0 || ee || (O && q == null),
                    label: s._(/*BTDS*/ "Send"),
                    testid: "poll-send-button",
                    children: [
                      c.jsx(r("WDSIconIcSendFilled.react"), {
                        testid: "wds-ic-send-filled",
                        width: 28,
                        height: 28,
                        directional: !0,
                      }),
                      " ",
                    ],
                  }),
                }),
                re != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: re.handleSelect,
                    popupAnchorEl: re.popupAnchorEl,
                    onDismiss: function () {
                      return oe(null);
                    },
                  }),
              ],
            }),
          }),
          Y &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title:
                E === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (J(!1), (e = Ie.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                Te(!0);
              },
              onOverlayClick: Pe,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: z,
            chat: i,
            options: de,
            getComposeBoxEditorRef: l,
            question: D,
            allowMultipleMedia: !Se,
            activeOptionIndex: K != null ? K : void 0,
            pollType: E,
            correctOptionKey: w,
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
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
    l.CreatePollModal = R;
  },
  226,
);
