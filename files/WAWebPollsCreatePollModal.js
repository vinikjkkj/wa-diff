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
      y = 25,
      C = {
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
    function b(t) {
      var a,
        i = t.chat,
        l = t.getComposeBoxEditorRef,
        u = t.initialCheckedKey,
        d = t.initialOptions,
        y = t.initialQuestion,
        b = t.onSend,
        v = t.pollType,
        S = r("useLazyRef")(function () {
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
        R = h(S),
        L = R[0],
        E = R[1],
        k = h(!1),
        I = k[0],
        T = k[1],
        D = h(u),
        x = D[0],
        $ = D[1],
        P = g(),
        N = h(void 0),
        M = N[0],
        w = N[1],
        A = h(!1),
        F = A[0],
        O = A[1],
        B = h(!1),
        W = B[0],
        q = B[1],
        U = h(null),
        V = U[0],
        H = U[1],
        G =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        z = G[0],
        j = G[1],
        K = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        Q = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: K },
          );
        }),
        X = Q[0],
        Y = Q[1],
        J = g(new Map()),
        Z = g(null),
        ee = g(),
        te = r("useWAWebUIM")(),
        ne = m(
          function (e, t) {
            Y(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: K,
                focusedKey: t,
              }),
            );
          },
          [K],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var re = g(),
        oe = g(X.length);
      _(
        function () {
          var e = Z.current,
            t = oe.current,
            n = X.findIndex(function (e) {
              return e.key === re.current;
            });
          (e != null &&
            t < X.length &&
            n === X.length - 2 &&
            X[X.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (oe.current = X.length));
        },
        [X],
      );
      var ae = function (t) {
          var e = t.text;
          E(e);
        },
        ie = X.some(function (e) {
          return e.image != null;
        }),
        le = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(X);
          },
          [X],
        );
      (p(
        function () {
          i.isComposingPoll =
            L.length > 0 ||
            X.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, L, X],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var se = X[K - 2],
        ue = X[K - 1],
        ce =
          X.length === K &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(se) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(ue),
        de = g(),
        me = function (t) {
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
        pe =
          L !== "" ||
          X.some(function (e) {
            return e.name !== "" || e.image;
          }),
        _e = function () {
          pe ? O(!0) : me(!0);
        },
        fe = function () {
          pe ? F || O(!0) : me(!0);
        },
        ge = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (q(!0),
              me(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = X.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              a = {
                name: L,
                selectableOptionsCount:
                  I || v === o("WAWebPollCreationUtils").PollType.QUIZ ? 1 : 0,
                correctOptionIndex:
                  v === o("WAWebPollCreationUtils").PollType.QUIZ
                    ? n.findIndex(function (e) {
                        return e.key === x;
                      })
                    : void 0,
              },
              s = ie
                ? babelHelpers.extends({}, a, {
                    contentType: "IMAGE",
                    options: n.map(function (e) {
                      var t = e.image,
                        n = e.name;
                      return { name: n, image: r("WANullthrows")(t) };
                    }),
                    pollType: v,
                  })
                : babelHelpers.extends({}, a, {
                    contentType: "TEXT",
                    options: n.map(function (e) {
                      var t = e.name;
                      return { name: t };
                    }),
                    pollType: v,
                  });
            (o("WAWebPollsSendPollCreationMsgAction").sendPollCreation({
              poll: s,
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
        he = function () {
          if (
            z &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              j,
            ) &&
            ee.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              ge(t);
            };
            H({ popupAnchorEl: ee.current, handleSelect: e });
          } else ge();
          b == null || b();
        },
        ye = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: L,
            options: X,
            isPhotoPoll: ie,
            pollType: v,
            correctOptionKey: x,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          he();
        },
        Ce = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: X };
          },
          [i, l, X],
        ),
        be = m(
          function (e, t) {
            var n = [].concat(X);
            ((n[e] = babelHelpers.extends({}, X[e], { image: void 0 })),
              ne(n, t));
          },
          [X, ne],
        ),
        ve = m(
          function (e) {
            var t = X[e],
              n = babelHelpers.extends(
                { question: L, allowMultipleMedia: !1, activeOptionIndex: e },
                Ce,
                { pollType: v, correctOptionKey: x },
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
                te == null || te.requestDismiss());
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
              (w(e), (u = P.current) == null || u.open());
            }
          },
          [i, x, Ce, X, v, L, te],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), _e());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: void 0,
            onOverlayClick: fe,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: C.drawer,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    v === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "Create quiz")
                      : s._(/*BTDS*/ "Create poll"),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: _e,
                }),
                c.jsx(r("WAWebDrawerBody.react"), {
                  children: c.jsxs(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        C.bodyContainer,
                        o("WAWebUISpacing").uiPadding.top32,
                      ),
                      {
                        children: [
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn",
                            children: s._(/*BTDS*/ "Question"),
                          }),
                          c.jsx(o("WAWebRichTextField.react").RichTextField, {
                            ref: de,
                            testid: void 0,
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            textFormatEnabled: !0,
                            value: y != null ? y : S,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLengthForIncomingMessages(),
                            onChange: ae,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              e.props(
                                C.sectionTitle,
                                o("WAWebUISpacing").uiMargin.top25,
                              ),
                              { children: s._(/*BTDS*/ "Options") },
                            ),
                          ),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: Z },
                              e.props(
                                C.optionsContainer,
                                o("WAWebUISpacing").uiMargin.top2,
                                o("WAWebUISpacing").uiMargin.bottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: X,
                                    onReordered: ne,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          ve(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = P.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: le.get(n.key),
                                        testid: void 0,
                                        onTextInputRef: function (t) {
                                          t
                                            ? J.current.set(n.key, t)
                                            : J.current.delete(n.key);
                                        },
                                        pollType: v,
                                        isPhotoPoll: ie,
                                        onChange: function (r) {
                                          var t = [].concat(X);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            ne(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          be(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          re.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          re.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === x
                                            ? $(null)
                                            : $(n.key);
                                        },
                                        checked: n.key === x,
                                      });
                                    },
                                  }),
                                  v ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !pe &&
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
                            "data-testid": void 0,
                            className: { 0: "x1nxh6w3", 1: "x1nxh6w3 xlshs6z" }[
                              !ce << 0
                            ],
                            children: s._(
                              /*BTDS*/ "You can add one more option.",
                            ),
                          }),
                          v === o("WAWebPollCreationUtils").PollType.POLL &&
                            o(
                              "WAWebPollsGatingUtils",
                            ).isSingleOptionPollsSendingEnabled(i.id) &&
                            c.jsxs(
                              "div",
                              babelHelpers.extends(
                                {},
                                (e || (e = r("stylex"))).props(
                                  C.singleOptionContainer,
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
                                          C.singleOptionLabel,
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
                                      value: !I,
                                      onChange: function () {
                                        T(!I);
                                      },
                                      testid: void 0,
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
                      C.createPollButtonContainer,
                      o("WAWebUISpacing").uiMargin.top30,
                    ),
                    {
                      children: c.jsxs(o("WAWebRound.react").Round, {
                        ref: ee,
                        xstyle: [C.sendButton, C.sendButtonRefreshed],
                        theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                        large: !0,
                        onClick: ye,
                        disabled: le.size !== 0 || W,
                        label: s._(/*BTDS*/ "Send"),
                        testid: void 0,
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
                V != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: V.handleSelect,
                    popupAnchorEl: V.popupAnchorEl,
                    onDismiss: function () {
                      return H(null);
                    },
                  }),
              ],
            }),
          }),
          F &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              cancelButtonType: "warning-secondary",
              title:
                v === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (O(!1), (e = de.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                me(!0);
              },
              onOverlayClick: fe,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: P,
            chat: i,
            options: X,
            getComposeBoxEditorRef: l,
            question: L,
            allowMultipleMedia: !ie,
            activeOptionIndex: M != null ? M : void 0,
            pollType: v,
            correctOptionKey: x,
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.CreatePollModal = b));
  },
  226,
);
