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
    "nullthrows",
    "react",
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
      var n,
        a = t.chat,
        i = t.getComposeBoxEditorRef,
        l = t.initialCheckedKey,
        u = t.initialOptions,
        d = t.initialQuestion,
        C = t.onSend,
        R = t.pollType,
        E = h(function () {
          var e, t;
          return (e =
            (t = i()) == null || (t = t.getTextContent()) == null
              ? void 0
              : t.substring(
                  0,
                  o("WAWebPollsGatingUtils").getMaxPollNameLength(),
                )) != null
            ? e
            : "";
        }),
        k = E[0],
        I = h(k),
        T = I[0],
        D = I[1],
        x = h(!1),
        $ = x[0],
        P = x[1],
        N = h(l),
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
          (n = o("useWAWebChatValues").useOptionalChatValues(a.id, [
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
          ])) != null
            ? n
            : [!1, null],
        ae = oe[0],
        ie = oe[1],
        le = f(
          function () {
            var e = o(
              "WAWebChatEphemerality",
            ).calculateEphemeralDurationForChat(a);
            return e == null ? null : e * 1e3;
          },
          [a],
        ),
        se = o("WAWebPollsGatingUtils").getMaxPollOptionCount(),
        ue = h(function () {
          return o("WAWebPollOptionsRenderUtils").formatOptions(
            u != null ? u : [],
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
        ),
        he = r("useWAWebStableCallback")(function () {
          o("WAWebPollsActionsMetricUtils").commitPollOpenCreationModal(a);
        });
      p(
        function () {
          return he();
        },
        [he],
      );
      var ye = g(),
        Ce = g(ce.length);
      _(
        function () {
          var e = pe.current,
            t = Ce.current,
            n = ce.findIndex(function (e) {
              return e.key === ye.current;
            });
          (e != null &&
            t < ce.length &&
            n === ce.length - 2 &&
            ce[ce.length - 1].name === "" &&
            e.scroll({ top: e.scrollHeight, behavior: "smooth" }),
            (Ce.current = ce.length));
        },
        [ce],
      );
      var be = function (t) {
          var e = t.text;
          D(e);
        },
        ve = ce.some(function (e) {
          return e.image != null;
        }),
        Se = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").validateOptions(ce);
          },
          [ce],
        );
      (p(
        function () {
          a.set(
            "isComposingPoll",
            T.length > 0 ||
              ce.some(function (e) {
                return e.name.length > 0;
              }),
          );
        },
        [a, T, ce],
      ),
        r("useWAWebOnUnmount")(function () {
          a.set("isComposingPoll", !1);
        }));
      var Re = ce[se - 2],
        Le = ce[se - 1],
        Ee =
          ce.length === se &&
          !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Re) &&
          o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(Le),
        ke = g(),
        Ie = function (t) {
          (t === void 0 && (t = !1),
            o("WAWebModalManager").ModalManager.close(),
            t &&
              o(
                "WAWebAttachmentMenuLogger",
              ).AttachmentMenuLogger.logAttachmentCancel(
                a,
                o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL,
              ));
        },
        Te =
          T !== "" ||
          ce.some(function (e) {
            return e.name !== "" || e.image;
          }),
        De =
          R === o("WAWebPollCreationUtils").PollType.QUIZ &&
          ae &&
          o("WAWebNewsletterGatingUtils").isQuizOptionOrderNoticeEnabled(),
        xe = function () {
          Te ? Y(!0) : Ie(!0);
        },
        $e = function () {
          Te ? X || Y(!0) : Ie(!0);
        },
        Pe = async function (t) {
          var e;
          (ee(!0),
            Ie(!1),
            await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(a));
          var n = ce.filter(function (e) {
              return !o("WAWebPollOptionsRenderUtils").isEmptyAfterTrimming(e);
            }),
            r = b({
              correctOptionKey: M,
              filteredOptions: n,
              isPhotoPoll: ve,
              isSingleOption: $,
              pollEndTime: F ? W : null,
              pollType: R,
              question: T,
              hideVoterNames: V,
            });
          (o("WAWebPollsSendPollCreationMsgAction").sendPollCreation({
            poll: r,
            chat: a,
            quotedMsg: a.composeQuotedMsg,
            isWamoSub:
              t ===
              o("WAWebNewsletterWamoSubMessageType")
                .NewsletterWamoSubMessageType.WamoSub,
          }),
            a.set("composeQuotedMsg", null),
            a.setComposeContents({}),
            (e = i()) == null || e.reset(),
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachmentSend(
              a,
              o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL,
            ));
        },
        Ne = function () {
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
              Pe(t);
            };
            re({ popupAnchorEl: _e.current, handleSelect: e });
          } else Pe();
          C == null || C();
        },
        Me = function () {
          var e = o("WAWebPollOptionsRenderUtils").validatePoll({
            question: T,
            options: ce,
            isPhotoPoll: ve,
            pollType: R,
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
          Ne();
        },
        we = f(
          function () {
            return { chat: a, getComposeBoxEditorRef: i, options: ce };
          },
          [a, i, ce],
        ),
        Ae = m(
          function (e, t) {
            var n = [].concat(ce);
            ((n[e] = babelHelpers.extends({}, ce[e], { image: void 0 })),
              ge(n, t));
          },
          [ce, ge],
        ),
        Fe = m(
          function (e) {
            var t = ce[e],
              n = babelHelpers.extends(
                { question: T, allowMultipleMedia: !1, activeOptionIndex: e },
                we,
                { pollType: R, correctOptionKey: M },
              );
            if (t.image) {
              var i = t.image,
                l = new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: a.getParticipantCount(),
                });
              (l.add(i),
                l.forEach(function (e) {
                  e.updateCaption(t.name);
                }),
                l.setActive(i),
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
          [a, M, we, ce, R, T, fe],
        );
      return c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: {
          esc: function (t) {
            (t.stopPropagation(), xe());
          },
        },
        children: [
          c.jsx(o("WAWebModal.react").Modal, {
            type: o("WAWebModal.react").ModalTheme.Tower,
            testid: "poll-creation-modal",
            onOverlayClick: $e,
            tsNavigationData: S,
            children: c.jsxs(r("WAWebDrawer.react"), {
              xstyle: v.drawer,
              disableNavigationLogging: !0,
              children: [
                c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  title:
                    R === o("WAWebPollCreationUtils").PollType.QUIZ
                      ? s._(/*BTDS*/ "")
                      : s._(/*BTDS*/ ""),
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                  onCancel: xe,
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
                            children: s._(/*BTDS*/ ""),
                          }),
                          c.jsx(o("WAWebRichTextField.react").RichTextField, {
                            ref: ke,
                            testid: "poll-question-input",
                            focusOnMount: !0,
                            hideFloatingLabel: !0,
                            showRemaining: !0,
                            emojiBtnPosition: "side",
                            spoilerEnabled:
                              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
                            textFormatEnabled: !0,
                            value: d != null ? d : k,
                            maxLength: o(
                              "WAWebPollsGatingUtils",
                            ).getMaxPollNameLength(),
                            maxVisibleLines: 5,
                            maxCodeUnits: o("WAWebPollsGatingUtils")
                              .MAX_POLL_NAME_LENGTH_FOR_INCOMING_MESSAGES,
                            onChange: be,
                            placeholder: s._(/*BTDS*/ ""),
                          }),
                          c.jsx("span", {
                            className: "xlm9qay xk50ysn x1e1m7ul",
                            children: s._(/*BTDS*/ ""),
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
                                        chat: a,
                                        onPhotoThumbnailClick: function () {
                                          Fe(e);
                                        },
                                        onPhotoIconClick: function () {
                                          var e;
                                          return (e = G.current) == null
                                            ? void 0
                                            : e.open();
                                        },
                                        initialText: n.name,
                                        error: Se.get(n.key),
                                        testid: "poll-option-input-" + e,
                                        onTextInputRef: function (t) {
                                          t
                                            ? me.current.set(n.key, t)
                                            : me.current.delete(n.key);
                                        },
                                        pollType: R,
                                        isPhotoPoll: ve,
                                        onChange: function (r) {
                                          var t = [].concat(ce);
                                          ((t[e] = babelHelpers.extends({}, n, {
                                            name: r,
                                          })),
                                            ge(t, n.key));
                                        },
                                        onDeletePhoto: function () {
                                          Ae(e, n.key);
                                        },
                                        onDragThumbMouseDown: function (t) {
                                          t.button === 0 && o(n.key, t);
                                        },
                                        onInputFocus: function () {
                                          ye.current = n.key;
                                        },
                                        onInputBlur: function () {
                                          ye.current = null;
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
                                  R ===
                                    o("WAWebPollCreationUtils").PollType.QUIZ &&
                                    !De &&
                                    !Te &&
                                    c.jsx("div", {
                                      "data-testid": "quiz-correct-answer-hint",
                                      className: "x889kno",
                                      children: c.jsx(r("WDSText.react"), {
                                        type: "Body2",
                                        colorName: "contentDeemphasized",
                                        children: s._(/*BTDS*/ ""),
                                      }),
                                    }),
                                ],
                              },
                            ),
                          ),
                          De && c.jsx(L, { isFormDirty: Te }),
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
                              }[!Ee << 0],
                              { children: s._(/*BTDS*/ "") },
                            ),
                          ),
                          c.jsx(r("WAWebPollsSettingsSection"), {
                            chatId: a.id,
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
                            pollType: R,
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
                    onClick: Me,
                    disabled: Se.size !== 0 || Z || (F && W == null),
                    label: s._(/*BTDS*/ ""),
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
                R === o("WAWebPollCreationUtils").PollType.QUIZ
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ ""),
              okText: s._(/*BTDS*/ ""),
              onOK: function () {
                var e;
                (Y(!1), (e = ke.current) == null || e.restoreFocus());
              },
              cancelText: s._(/*BTDS*/ ""),
              onCancel: function () {
                Ie(!0);
              },
              onOverlayClick: $e,
              children: s._(/*BTDS*/ ""),
            }),
          c.jsx(r("WAWebPollAttachMediaPicker.react"), {
            mediaPickerRef: G,
            chat: a,
            options: ce,
            getComposeBoxEditorRef: i,
            question: T,
            allowMultipleMedia: !ve,
            activeOptionIndex: j != null ? j : void 0,
            pollType: R,
            correctOptionKey: M,
          }),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.isFormDirty;
      return c.jsx("div", {
        "data-testid": "quiz-option-order-notice",
        children: c.jsx(r("WDSText.react"), {
          type: "Body3",
          colorName: "contentDefault",
          children: t ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
        }),
      });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.CreatePollModal = R));
  },
  226,
);
