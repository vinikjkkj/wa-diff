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
    function C(e, t, n, a, i, l) {
      var s = {
        name: e,
        selectableOptionsCount:
          n || a === o("WAWebPollCreationUtils").PollType.QUIZ ? 1 : 0,
        correctOptionIndex:
          a === o("WAWebPollCreationUtils").PollType.QUIZ
            ? t.findIndex(function (e) {
                return e.key === i;
              })
            : void 0,
      };
      return l
        ? babelHelpers.extends({}, s, {
            contentType: "IMAGE",
            options: t.map(function (e) {
              var t = e.image,
                n = e.name;
              return { name: n, image: r("WANullthrows")(t) };
            }),
            pollType: a,
          })
        : babelHelpers.extends({}, s, {
            contentType: "TEXT",
            options: t.map(function (e) {
              var t = e.name;
              return { name: t };
            }),
            pollType: a,
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
        N = g(),
        M = h(void 0),
        w = M[0],
        A = M[1],
        F = h(!1),
        O = F[0],
        B = F[1],
        W = h(!1),
        q = W[0],
        U = W[1],
        V = h(null),
        H = V[0],
        G = V[1],
        z =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        j = z[0],
        K = z[1],
        Q = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        X = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: Q },
          );
        }),
        Y = X[0],
        J = X[1],
        Z = g(new Map()),
        ee = g(null),
        te = g(),
        ne = r("useWAWebUIM")(),
        re = m(
          function (e, t) {
            J(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: Q,
                focusedKey: t,
              }),
            );
          },
          [Q],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var oe = g(),
        ae = g(Y.length);
      _(
        function () {
          var e = ee.current,
            t = ae.current,
            n = Y.findIndex(function (e) {
              return e.key === oe.current;
            });
          (e != null &&
            t < Y.length &&
            n === Y.length - 2 &&
            Y[Y.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (ae.current = Y.length));
        },
        [Y],
      );
      var ie = function (t) {
          var e = t.text;
          k(e);
        },
        le = Y.some(function (e) {
          return e.image != null;
        }),
        se = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(Y);
          },
          [Y],
        );
      (p(
        function () {
          i.isComposingPoll =
            E.length > 0 ||
            Y.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, E, Y],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var ue = Y[Q - 2],
        ce = Y[Q - 1],
        de =
          Y.length === Q &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ue) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ce),
        me = g(),
        pe = function (t) {
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
        _e =
          E !== "" ||
          Y.some(function (e) {
            return e.name !== "" || e.image;
          }),
        fe = function () {
          _e ? B(!0) : pe(!0);
        },
        ge = function () {
          _e ? O || B(!0) : pe(!0);
        },
        he = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (U(!0),
              pe(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = Y.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = C(E, n, T, S, $, le);
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
        ye = function () {
          if (
            j &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              K,
            ) &&
            te.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              he(t);
            };
            G({ popupAnchorEl: te.current, handleSelect: e });
          } else he();
          v == null || v();
        },
        Ce = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: E,
            options: Y,
            isPhotoPoll: le,
            pollType: S,
            correctOptionKey: $,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          ye();
        },
        be = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: Y };
          },
          [i, l, Y],
        ),
        ve = m(
          function (e, t) {
            var n = [].concat(Y);
            ((n[e] = babelHelpers.extends({}, Y[e], { image: void 0 })),
              re(n, t));
          },
          [Y, re],
        ),
        Se = m(
          function (e) {
            var t = Y[e],
              n = babelHelpers.extends(
                { question: E, allowMultipleMedia: !1, activeOptionIndex: e },
                be,
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
                ne == null || ne.requestDismiss());
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
              (A(e), (u = N.current) == null || u.open());
            }
          },
          [i, $, be, Y, S, E, ne],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), fe());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: ge,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: b.drawer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    S === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: fe,
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
                            ref: me,
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
                            onChange: ie,
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
                              { ref: ee },
                              e.props(
                                b.optionsContainer,
                                o("WAWebUISpacing").uiMargin.top2,
                                o("WAWebUISpacing").uiMargin.bottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: Y,
                                    onReordered: re,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          Se(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = N.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: se.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? Z.current.set(n.key, t)
                                            : Z.current.delete(n.key);
                                        },
                                        pollType: S,
                                        isPhotoPoll: le,
                                        onChange: function (r) {
                                          var t = [].concat(Y);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            re(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          ve(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          oe.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          oe.current = null;
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
                                    !_e &&
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
                              !de << 0
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
                        ref: te,
                        xstyle: [b.sendButton, b.sendButtonRefreshed],
                        theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                        large: !0,
                        onClick: Ce,
                        disabled: se.size !== 0 || q,
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
                H != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: H.handleSelect,
                    popupAnchorEl: H.popupAnchorEl,
                    onDismiss: function () {
                      return G(null);
                    },
                  }),
              ],
            }),
          }),
          O &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelButtonType: "warning-secondary",
              title:
                S === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (B(!1), (e = me.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                pe(!0);
              },
              onOverlayClick: ge,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: N,
            chat: i,
            options: Y,
            getComposeBoxEditorRef: l,
            question: E,
            allowMultipleMedia: !le,
            activeOptionIndex: w != null ? w : void 0,
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
