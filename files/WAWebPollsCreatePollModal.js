__d(
  "WAWebPollsCreatePollModal",
  [
    "fbt",
    "WANullthrows",
    "WAWebAttachMediaCollection",
    "WAWebAttachmentMenuLogger",
    "WAWebBizBotTosUtils",
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
    "WAWebUISpacing",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSSwitch.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
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
      y = 25;
    function C(e) {
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
              return { name: n, image: r("WANullthrows")(t) };
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
    var b = {
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
      sectionTitle: { fontSize: "xlm9qay", fontWeight: "xk50ysn", $$css: !0 },
      createPollButtonContainer: {
        width: "xh8yej3",
        display: "x78zum5",
        justifyContent: "x13a6bvl",
        height: "xwvwv9b",
        backgroundColor: "x1jn9dgz",
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
    function v(t) {
      var a,
        i = t.chat,
        l = t.getComposeBoxEditorRef,
        u = t.initialCheckedKey,
        d = t.initialOptions,
        y = t.initialQuestion,
        v = t.onSend,
        S = t.pollType,
        R = r("useLazyRef")(function () {
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
        L = h(R),
        E = L[0],
        k = L[1],
        I = h(!1),
        T = I[0],
        D = I[1],
        x = h(u),
        $ = x[0],
        P = x[1],
        N = h(!1),
        M = N[0],
        w = N[1],
        A = h(null),
        F = A[0],
        O = A[1],
        B = h(!1),
        W = B[0],
        q = B[1],
        U = g(),
        V = h(void 0),
        H = V[0],
        G = V[1],
        z = h(!1),
        j = z[0],
        K = z[1],
        Q = h(!1),
        X = Q[0],
        Y = Q[1],
        J = h(null),
        Z = J[0],
        ee = J[1],
        te =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        ne = te[0],
        re = te[1],
        oe = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        ae = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: oe },
          );
        }),
        ie = ae[0],
        le = ae[1],
        se = g(new Map()),
        ue = g(null),
        ce = g(),
        de = r("useWAWebUIM")(),
        me = m(
          function (e, t) {
            le(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: oe,
                focusedKey: t,
              }),
            );
          },
          [oe],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var pe = g(),
        _e = g(ie.length);
      _(
        function () {
          var e = ue.current,
            t = _e.current,
            n = ie.findIndex(function (e) {
              return e.key === pe.current;
            });
          (e != null &&
            t < ie.length &&
            n === ie.length - 2 &&
            ie[ie.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (_e.current = ie.length));
        },
        [ie],
      );
      var fe = function (t) {
          var e = t.text;
          k(e);
        },
        ge = ie.some(function (e) {
          return e.image != null;
        }),
        he = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(ie);
          },
          [ie],
        );
      (p(
        function () {
          i.isComposingPoll =
            E.length > 0 ||
            ie.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, E, ie],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var ye = ie[oe - 2],
        Ce = ie[oe - 1],
        be =
          ie.length === oe &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ye) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Ce),
        ve = g(),
        Se = function (t) {
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
        Re =
          E !== "" ||
          ie.some(function (e) {
            return e.name !== "" || e.image;
          }),
        Le = function () {
          Re ? K(!0) : Se(!0);
        },
        Ee = function () {
          Re ? j || K(!0) : Se(!0);
        },
        ke = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (Y(!0),
              Se(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = ie.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = C({
                correctOptionKey: $,
                filteredOptions: n,
                isPhotoPoll: ge,
                isSingleOption: T,
                pollEndTime: M ? F : null,
                pollType: S,
                question: E,
                hideVoterNames: W,
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
        Ie = function () {
          if (
            ne &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              re,
            ) &&
            ce.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              ke(t);
            };
            ee({ popupAnchorEl: ce.current, handleSelect: e });
          } else ke();
          v == null || v();
        },
        Te = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: E,
            options: ie,
            isPhotoPoll: ge,
            pollType: S,
            correctOptionKey: $,
            pollEndTimeEnabled: M,
            pollEndTime: F,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          Ie();
        },
        De = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: ie };
          },
          [i, l, ie],
        ),
        xe = m(
          function (e, t) {
            var n = [].concat(ie);
            ((n[e] = babelHelpers.extends({}, ie[e], { image: void 0 })),
              me(n, t));
          },
          [ie, me],
        ),
        $e = m(
          function (e) {
            var t = ie[e],
              n = babelHelpers.extends(
                { question: E, allowMultipleMedia: !1, activeOptionIndex: e },
                De,
                { pollType: S, correctOptionKey: $ },
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
                de == null || de.requestDismiss());
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
              (G(e), (u = U.current) == null || u.open());
            }
          },
          [i, $, De, ie, S, E, de],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), Le());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: Ee,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: b.drawer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    S === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: Le,
                }),
                c.jsx(r("WAWebDrawerBody.react"), {
                  children: c.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        b.bodyContainer,
                        o("WAWebUISpacing").uiPadding.top32,
                      ),
                      {
                        children: [
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn",
                            children: s._(/*BTDS*/ "Question"),
                          }),
                          c.jsx(o("WAWebRichTextField.react").RichTextField, {
                            ref: ve,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            textFormatEnabled: !0,
                            value: y != null ? y : R,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLengthForIncomingMessages(),
                            onChange: fe,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              e.props(
                                b.sectionTitle,
                                o("WAWebUISpacing").uiMargin.top25,
                              ),
                              { children: s._(/*BTDS*/ "Options") },
                            ),
                          ),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: ue },
                              e.props(
                                b.optionsContainer,
                                o("WAWebUISpacing").uiMargin.top2,
                                o("WAWebUISpacing").uiMargin.bottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: ie,
                                    onReordered: me,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          $e(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = U.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: he.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? se.current.set(n.key, t)
                                            : se.current.delete(n.key);
                                        },
                                        pollType: S,
                                        isPhotoPoll: ge,
                                        onChange: function (r) {
                                          var t = [].concat(ie);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            me(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          xe(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          pe.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          pe.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === $
                                            ? P(null)
                                            : P(n.key);
                                        },
                                        checked: n.key === $,
                                      });
                                    },
                                  }),
                                  S ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !Re &&
                                    c.jsx(
                                      "div",
                                      babelHelpers.extends(
                                        {},
                                        (e || (e = r("stylex"))).props(
                                          o("WAWebUISpacing").uiPadding.top10,
                                        ),
                                        {
                                          children: c.jsx(r("WDSText.react"), {
                                            type: "Body2",
                                            colorName: "contentDeemphasized",
                                            children: s._(
                                              /*BTDS*/ "Select one right answer",
                                            ),
                                          }),
                                        },
                                      ),
                                    ),
                                ],
                              },
                            ),
                          ),
                          c.jsx("h3", {
                            "data-testid": "poll-creation-one-more-option-hint",
                            className: { 0: "x1nxh6w3", 1: "x1nxh6w3 xlshs6z" }[
                              !be << 0
                            ],
                            children: s._(
                              /*BTDS*/ "You can add one more option.",
                            ),
                          }),
                          S === o("WAWebPollCreationUtils").PollType.POLL &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isSingleOptionPollsSendingEnabled(i.id) &&
                            c.jsxs(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  b.singleOptionContainer,
                                  o("WAWebUISpacing").uiPadding.bottom20,
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
                                          b.singleOptionLabel,
                                          o("WAWebUISpacing").uiPadding.vert4,
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
                                      value: !T,
                                      onChange: function () {
                                        D(!T);
                                      },
                                      testid: "polls-single-option-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          S === o("WAWebPollCreationUtils").PollType.POLL &&
                            !ne &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isPollHideVotersSendingEnabled(i.id) &&
                            c.jsxs(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  b.singleOptionContainer,
                                  o("WAWebUISpacing").uiPadding.bottom20,
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
                                          b.singleOptionLabel,
                                          o("WAWebUISpacing").uiPadding.vert4,
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
                                      value: W,
                                      onChange: function () {
                                        q(!W);
                                      },
                                      testid: "polls-hide-voter-names-switch",
                                    }),
                                  ],
                                },
                              ),
                            ),
                          S === o("WAWebPollCreationUtils").PollType.POLL &&
                            !ne &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isPollEndTimeSendingEnabled(i.id) &&
                            c.jsx(r("WAWebPollsEndTimeSection"), {
                              enabled: M,
                              onToggle: w,
                              pollEndTime: F,
                              onEndTimeChange: O,
                            }),
                        ],
                      },
                    ),
                  ),
                }),
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(
                      b.createPollButtonContainer,
                      o("WAWebUISpacing").uiMargin.top30,
                    ),
                    {
                      children: c.jsxs(o("WAWebRound.react").Round, {
                        ref: ce,
                        xstyle: [b.sendButton, b.sendButtonRefreshed],
                        theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                        large: !0,
                        onClick: Te,
                        disabled: he.size !== 0 || X || (M && F == null),
                        label: s._(/*BTDS*/ "Send"),
                        testid: "poll-send-button",
                        children: [
                          c.jsx(
                            o("WAWebWdsIcSendFilledIcon.react")
                              .WdsIcSendFilledIcon,
                            { width: 28, directional: !0 },
                          ),
                          " ",
                        ],
                      }),
                    },
                  ),
                ),
                Z != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: Z.handleSelect,
                    popupAnchorEl: Z.popupAnchorEl,
                    onDismiss: function () {
                      return ee(null);
                    },
                  }),
              ],
            }),
          }),
          j &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelButtonType: "warning-secondary",
              title:
                S === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (K(!1), (e = ve.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                Se(!0);
              },
              onOverlayClick: Ee,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: U,
            chat: i,
            options: ie,
            getComposeBoxEditorRef: l,
            question: E,
            allowMultipleMedia: !ge,
            activeOptionIndex: H != null ? H : void 0,
            pollType: S,
            correctOptionKey: $,
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.CreatePollModal = v));
  },
  226,
);
