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
        k = r("useLazyRef")(function () {
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
        I = h(k),
        T = I[0],
        D = I[1],
        x = h(!1),
        $ = x[0],
        P = x[1],
        N = h(u),
        M = N[0],
        w = N[1],
        A = h(!1),
        F = A[0],
        O = A[1],
        B = h(null),
        W = B[0],
        q = B[1],
        U = h(!1),
        V = U[0],
        H = U[1],
        G = g(),
        z = h(void 0),
        j = z[0],
        K = z[1],
        Q = h(!1),
        X = Q[0],
        Y = Q[1],
        J = h(!1),
        Z = J[0],
        ee = J[1],
        te = h(null),
        ne = te[0],
        re = te[1],
        oe =
          (a = o("useWAWebChatValues").useOptionalChatValues(i.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? a
            : [!1, null],
        ae = oe[0],
        ie = oe[1],
        le = f(
          function () {
            var e = o(
              "WAWebChatEphemerality",
            ).calculateEphemeralDurationForChat(i);
            return e == null ? null : e * 1e3;
          },
          [i],
        ),
        se = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        ue = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            d != null ? d : [],
            { maxOptionsCount: se },
          );
        }),
        ce = ue[0],
        de = ue[1],
        me = g(new Map()),
        pe = g(null),
        _e = g(),
        fe = r("useWAWebUIM")(),
        ge = m(
          function (e, t) {
            de(
              o("WAWebPollOptionsRenderUtils").formatOptions(e, {
                maxOptionsCount: se,
                focusedKey: t,
              }),
            );
          },
          [se],
        );
      p(function () {
        o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(i);
      }, []);
      var he = g(),
        ye = g(ce.length);
      _(
        function () {
          var e = pe.current,
            t = ye.current,
            n = ce.findIndex(function (e) {
              return e.key === he.current;
            });
          (e != null &&
            t < ce.length &&
            n === ce.length - 2 &&
            ce[ce.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (ye.current = ce.length));
        },
        [ce],
      );
      var Ce = function (t) {
          var e = t.text;
          D(e);
        },
        be = ce.some(function (e) {
          return e.image != null;
        }),
        ve = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(ce);
          },
          [ce],
        );
      (p(
        function () {
          i.isComposingPoll =
            T.length > 0 ||
            ce.some(function (e) {
              return e.name.length > 0;
            });
        },
        [i, T, ce],
      ),
        r("useWAWebOnUnmount")(function () {
          i.isComposingPoll = !1;
        }));
      var Se = ce[se - 2],
        Re = ce[se - 1],
        Le =
          ce.length === se &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Se) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Re),
        Ee = g(),
        ke = function (t) {
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
        Ie =
          T !== "" ||
          ce.some(function (e) {
            return e.name !== "" || e.image;
          }),
        Te =
          E === o("WAWebPollCreationUtils").PollType.QUIZ &&
          ae &&
          o("WAWebNewsletterGatingUtils").isQuizOptionOrderNoticeEnabled(),
        De = function () {
          Ie ? Y(!0) : ke(!0);
        },
        xe = function () {
          Ie ? X || Y(!0) : ke(!0);
        },
        $e = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t;
            (ee(!0),
              ke(!1),
              yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(i));
            var n = ce.filter(function (e) {
                return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(
                  e,
                );
              }),
              r = b({
                correctOptionKey: M,
                filteredOptions: n,
                isPhotoPoll: be,
                isSingleOption: $,
                pollEndTime: F ? W : null,
                pollType: E,
                question: T,
                hideVoterNames: V,
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
        Pe = function () {
          if (
            ae &&
            o("WAWebNewsletterWamoSubUtils").newsletterSupportsSubscriptions(
              ie,
            ) &&
            _e.current &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubCreatorExperienceSupported()
          ) {
            var e = function (t) {
              $e(t);
            };
            re({ popupAnchorEl: _e.current, handleSelect: e });
          } else $e();
          R == null || R();
        },
        Ne = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: T,
            options: ce,
            isPhotoPoll: be,
            pollType: E,
            correctOptionKey: M,
            pollEndTimeEnabled: F,
            pollEndTime: W,
          });
          if (e != null) {
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, { msg: e }),
            );
            return;
          }
          Pe();
        },
        Me = f(
          function () {
            return { chat: i, getComposeBoxEditorRef: l, options: ce };
          },
          [i, l, ce],
        ),
        we = m(
          function (e, t) {
            var n = [].concat(ce);
            ((n[e] = babelHelpers.extends({}, ce[e], { image: void 0 })),
              ge(n, t));
          },
          [ce, ge],
        ),
        Ae = m(
          function (e) {
            var t = ce[e],
              n = babelHelpers.extends(
                { question: T, allowMultipleMedia: !1, activeOptionIndex: e },
                Me,
                { pollType: E, correctOptionKey: M },
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
                fe == null || fe.requestDismiss());
              var s = c.jsx(
                r("WAWebPollAttachMediaViewLoadable.react"),
                babelHelpers.extends({ mediaCollection: l }, n),
              );
              o("WAWebModalManager").ModalManager.openMedia(s, {
                transition: "menu",
              });
            } else {
              var u;
              (K(e), (u = G.current) == null || u.open());
            }
          },
          [i, M, Me, ce, E, T, fe],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), De());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: xe,
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
                  onCancel: De,
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
                            ref: Ee,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            spoilerEnabled:
                              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                            textFormatEnabled: !0,
                            value: C != null ? C : k,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o("WAWebPollsGatingUtils")
                              .MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES,
                            onChange: Ce,
                            placeholder: s._(/*BTDS*/ "Ask question"),
                          }),
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn x1e1m7ul",
                            children: s._(/*BTDS*/ "Options"),
                          }),
                          c.jsxs(
                            "div",
                            babelHelpers.extends(
                              { ref: pe },
                              e.props(
                                v.optionsContainer,
                                o("WDSMargins.stylex").wdsMargins.marginTop2,
                                y.marginBottom10,
                              ),
                              {
                                children: [
                                  c.jsx(r("WAWebPollsOrderableList"), {
                                    items: ce,
                                    onReordered: ge,
                                    renderItem: function (t) {
                                      var e = t.index,
                                        n = t.item,
                                        o = t.startDrag;
                                      return c.jsx(r("WAWebPollsOptionInput"), {
                                        chat: i,
                                        onPhotoThumbnailClick: function () {
                                          Ae(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = G.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: ve.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? me.current.set(n.key, t)
                                            : me.current.delete(n.key);
                                        },
                                        pollType: E,
                                        isPhotoPoll: be,
                                        onChange: function (r) {
                                          var t = [].concat(ce);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            ge(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          we(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          he.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          he.current = null;
                                        },
                                        image: n.image,
                                        handleCheckBoxClick: function () {
                                          return n.key === M
                                            ? w(null)
                                            : w(n.key);
                                        },
                                        checked: n.key === M,
                                      });
                                    },
                                  }),
                                  E ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !Te &&
                                    !Ie &&
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
                          Te && c.jsx(L, { isFormDirty: Ie }),
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
                              }[!Le << 0],
                              {
                                children: s._(
                                  /*BTDS*/ "You can add one more option.",
                                ),
                              },
                            ),
                          ),
                          c.jsx(r("WAWebPollsSettingsSection"), {
                            chatId: i.id,
                            hideVoterNames: V,
                            isNewsletter: ae,
                            isSingleOption: $,
                            onEndTimeChange: q,
                            onEndTimeToggle: O,
                            onHideVoterNamesChange: H,
                            onSingleOptionChange: P,
                            pollEndTime: W,
                            pollEndTimeEnabled: F,
                            pollEndTimeMaxDurationMs: le,
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
                    ref: _e,
                    xstyle: [v.sendButton, v.sendButtonRefreshed],
                    theme: o("WAWebRound.react").RoundTheme.DrawerFooter,
                    large: !0,
                    onClick: Ne,
                    disabled: ve.size !== 0 || Z || (F && W == null),
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
                ne != null &&
                  c.jsx(r("WAWebNewsletterWamoSubMessageTypePopup.react"), {
                    handleSelect: ne.handleSelect,
                    popupAnchorEl: ne.popupAnchorEl,
                    onDismiss: function () {
                      return re(null);
                    },
                  }),
              ],
            }),
          }),
          X &&
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title:
                E === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "Leave quiz?")
                  : s._(/*BTDS*/ "Leave poll?"),
              okText: s._(/*BTDS*/ "Keep editing"),
              onOK: function () {
                var e;
                (Y(!1), (e = Ee.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ "Leave"),
              onCancel: function () {
                ke(!0);
              },
              onOverlayClick: xe,
              children: s._(/*BTDS*/ "Your edits won't be saved."),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: G,
            chat: i,
            options: ce,
            getComposeBoxEditorRef: l,
            question: T,
            allowMultipleMedia: !be,
            activeOptionIndex: j != null ? j : void 0,
            pollType: E,
            correctOptionKey: M,
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
