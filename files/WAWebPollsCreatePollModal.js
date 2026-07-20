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
        R = t.pollType,
        L = r("useLazyRef")(function () {
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
        E = h(L),
        k = E[0],
        I = E[1],
        T = h(!1),
        D = T[0],
        x = T[1],
        $ = h(u),
        P = $[0],
        N = $[1],
        M = h(!1),
        w = M[0],
        A = M[1],
        F = h(null),
        O = F[0],
        B = F[1],
        W = h(!1),
        q = W[0],
        U = W[1],
        V = g(),
        H = h(void 0),
        G = H[0],
        z = H[1],
        j = h(!1),
        K = j[0],
        Q = j[1],
        X = h(!1),
        Y = X[0],
        J = X[1],
        Z = h(null),
        ee = Z[0],
        te = Z[1],
        ne =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        re = ne[0],
        oe = ne[1],
        ae = f(
          function () {
            var e = o(
              "WAWebChatEphemerality",
            ).calculateEphemeralDurationForChat(i);
            return e == null ? null : e * 1e3;
          },
          [i],
        ),
        ie = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        le = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: ie },
          );
        }),
        se = le[0],
        ue = le[1],
        ce = g(new Map()),
        de = g(null),
        me = g(),
        pe = r("useWAWebUIM")(),
        _e = m(
          function (e, t) {
            ue(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: ie,
                focusedKey: t,
              }),
            );
          },
          [ie],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var fe = g(),
        ge = g(se.length);
      _(
        function () {
          var e = de.current,
            t = ge.current,
            n = se.findIndex(function (e) {
              return e.key === fe.current;
            });
          (e != null &&
            t < se.length &&
            n === se.length - 2 &&
            se[se.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (ge.current = se.length));
        },
        [se],
      );
      var he = function (t) {
          var e = t.text;
          I(e);
        },
        ye = se.some(function (e) {
          return e.image != null;
        }),
        Ce = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(se);
          },
          [se],
        );
      (p(
        function () {
          i.isComposingPoll =
            k.length > 0 ||
            se.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, k, se],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var be = se[ie - 2],
        ve = se[ie - 1],
        Se =
          se.length === ie &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(be) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ve),
        Re = g(),
        Le = function (t) {
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
        Ee =
          k !== "" ||
          se.some(function (e) {
            return e.name !== "" || e.image;
          }),
        ke = function () {
          Ee ? Q(!0) : Le(!0);
        },
        Ie = function () {
          Ee ? K || Q(!0) : Le(!0);
        },
        Te = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (J(!0),
              Le(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = se.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = b({
                correctOptionKey: P,
                filteredOptions: n,
                isPhotoPoll: ye,
                isSingleOption: D,
                pollEndTime: w ? O : null,
                pollType: R,
                question: k,
                hideVoterNames: q,
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
        De = function () {
          if (
            re &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              oe,
            ) &&
            me.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              Te(t);
            };
            te({ popupAnchorEl: me.current, handleSelect: e });
          } else Te();
          S == null || S();
        },
        xe = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: k,
            options: se,
            isPhotoPoll: ye,
            pollType: R,
            correctOptionKey: P,
            pollEndTimeEnabled: w,
            pollEndTime: O,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          De();
        },
        $e = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: se };
          },
          [i, l, se],
        ),
        Pe = m(
          function (e, t) {
            var n = [].concat(se);
            ((n[e] = babelHelpers.extends({}, se[e], { image: void 0 })),
              _e(n, t));
          },
          [se, _e],
        ),
        Ne = m(
          function (e) {
            var t = se[e],
              n = babelHelpers.extends(
                { question: k, allowMultipleMedia: !1, activeOptionIndex: e },
                $e,
                { pollType: R, correctOptionKey: P },
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
                pe == null || pe.requestDismiss());
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
              (z(e), (u = V.current) == null || u.open());
            }
          },
          [i, P, $e, se, R, k, pe],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), ke());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: Ie,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: v.drawer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    R === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: ke,
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
                            ref: Re,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            textFormatEnabled: !0,
                            value: C != null ? C : L,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLengthForIncomingMessages(),
                            onChange: he,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn x1e1m7ul",
                            children: s._(/*BTDS*/ "Options"),
                          }),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: de },
                              e.props(
                                v.optionsContainer,
                                o("WDSMargins.stylex").wdsMargins.marginTop2,
                                y.marginBottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: se,
                                    onReordered: _e,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          Ne(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = V.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: Ce.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? ce.current.set(n.key, t)
                                            : ce.current.delete(n.key);
                                        },
                                        pollType: R,
                                        isPhotoPoll: ye,
                                        onChange: function (r) {
                                          var t = [].concat(se);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            _e(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          Pe(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          fe.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          fe.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === P
                                            ? N(null)
                                            : N(n.key);
                                        },
                                        checked: n.key === P,
                                      });
                                    },
                                  }),
                                  R ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !Ee &&
                                    c.jsx("div", {
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
                          c.jsx("h3", {
                            "data-testid": "poll-creation-one-more-option-hint",
                            className: { 0: "x1nxh6w3", 1: "x1nxh6w3 xlshs6z" }[
                              !Se << 0
                            ],
                            children: s._(
                              /*BTDS*/ "You can add one more option.",
                            ),
                          }),
                          R === o("WAWebPollCreationUtils").PollType.POLL &&
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
                                      value: !D,
                                      onChange: function () {
                                        x(!D);
                                      },
                                      testid: "polls-single-option-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          R === o("WAWebPollCreationUtils").PollType.POLL &&
                            !re &&
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
                                      value: q,
                                      onChange: function () {
                                        U(!q);
                                      },
                                      testid: "polls-hide-voter-names-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          R === o("WAWebPollCreationUtils").PollType.POLL &&
                            !re &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isPollEndTimeSendingEnabled(i.id) &&
                            c.jsx(r("WAWebPollsEndTimeSection"), {
                              enabled: w,
                              maxDurationMs: ae,
                              onToggle: A,
                              pollEndTime: O,
                              onEndTimeChange: B,
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
                    ref: me,
                    xstyle: [v.sendButton, v.sendButtonRefreshed],
                    theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                    large: !0,
                    onClick: xe,
                    disabled: Ce.size !== 0 || Y || (w && O == null),
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
                ee != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: ee.handleSelect,
                    popupAnchorEl: ee.popupAnchorEl,
                    onDismiss: function () {
                      return te(null);
                    },
                  }),
              ],
            }),
          }),
          K &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title:
                R === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (Q(!1), (e = Re.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                Le(!0);
              },
              onOverlayClick: Ie,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: V,
            chat: i,
            options: se,
            getComposeBoxEditorRef: l,
            question: k,
            allowMultipleMedia: !ye,
            activeOptionIndex: G != null ? G : void 0,
            pollType: R,
            correctOptionKey: P,
          }),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.CreatePollModal = S));
  },
  226,
);
