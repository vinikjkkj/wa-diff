__d(
  "WAWebVoipCreateCallLinksPopup.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiParse",
    "WAWebCallCollection",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebExecApiCmd",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebForwardRefreshedIcon.react",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkify",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSendTextFlow.react",
    "WAWebSendTextMsgChatAction",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebTextBoxReadonly.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebVoipCallLinksPopupTypeDropDown.react",
    "WAWebVoipCreateCallLink",
    "WAWebVoipGatingUtils",
    "WAWebVoipWaitingRoomToggleJob",
    "WDSButton.react",
    "WDSSwitch.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "err",
    "fbs",
    "react",
    "useWAWebAsyncRetry",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = L || (L = o("react")),
      k = L,
      I = k.useCallback,
      T = k.useEffect,
      D = k.useRef,
      x = k.useState,
      $ = 5e3,
      P = {
        forwardIcon: { verticalAlign: "xxymvpz", $$css: !0 },
        modalContainer: { maxWidth: "x65f84u", $$css: !0 },
        textContainer: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
      };
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "handleCallLinkClick: handleCallLinkClick",
                ])),
            ),
            e == null)
          ) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "handleCallLinkClick: callLink is null",
                  ])),
              )
              .sendLogs("click-call-link-error");
            return;
          }
          var t = o("WAWebApiParse").parseAPICmd(e);
          r("WAWebExecApiCmd")({ cmdData: t, isExternal: !1 });
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "handleGenerateCallLinkClick BEGIN",
              ])),
          );
          try {
            o("WAWebModalManager").ModalManager.open(E.jsx(F, {}));
          } catch (e) {
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "handleGenerateCallLinkClick: error=",
                  "",
                ])),
              e,
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(t) {
      var a = t.targetChat,
        i = x(
          o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType.VIDEO,
        ),
        l = i[0],
        C = i[1],
        b = x(null),
        v = b[0],
        S = b[1],
        L = x(!1),
        k = L[0],
        M = L[1],
        w = x(!1),
        A = w[0],
        F = w[1],
        B = D(void 0);
      B.current === void 0 && (B.current = k);
      var W = o("WAWebABProps").getABPropConfigValue(
          "enable_waiting_room_admin_ui",
        ),
        q = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          "change:activeCall",
          function () {
            return r("WAWebCallCollection").activeCall != null;
          },
          [r("WAWebCallCollection").activeCall],
        ),
        U = r("useWAWebAsyncRetry")(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createCallLinkAsync: creating call link of type ",
                  "",
                ])),
              l,
            );
            var a = o("WAWebVoipCreateCallLink").createCallLink({
                callType:
                  l ===
                  o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType
                    .VIDEO
                    ? "video"
                    : "audio",
                requireApproval: (t = B.current) != null ? t : !1,
              }),
              i = new (R || (R = n("Promise")))(function (e, t) {
                window.setTimeout(function () {
                  t(
                    r("err")(
                      "Call link creation timed out. Please check your connection and try again.",
                    ),
                  );
                }, $);
              }),
              s = yield R.race([a, i]);
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createCallLinkAsync: The call link created is ",
                    "",
                  ])),
                s,
              ),
              s
            );
          }),
          [l],
        ),
        V = I(
          function (e) {
            (M(e),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createCallLinkAsync: requireApproval toggled to ",
                    "",
                  ])),
                e,
              ));
            var t = U.value;
            if (t != null) {
              var n = new URL(t).pathname.split("/").filter(Boolean).pop();
              if (n == null || n === "") {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "createCallLinkAsync: link token extraction failed",
                      ])),
                  )
                  .sendLogs("extract-link-token-error");
                return;
              }
              var r =
                l ===
                o("WAWebVoipCallLinksPopupTypeDropDown.react").CallLinkType
                  .VIDEO;
              (F(!0),
                o("WAWebVoipWaitingRoomToggleJob")
                  .toggleWaitingRoomForCallLink({
                    isVideoCall: r,
                    linkToken: n,
                    waitingRoomEnabled: e,
                  })
                  .then(function () {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "createCallLinkAsync: waiting room toggle succeeded",
                        ])),
                    );
                  })
                  .catch(function (t) {
                    (o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "createCallLinkAsync: Failed to toggle waiting room, error: ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("toggle-waiting-room-error"),
                      o("WAWebToastManager").ToastManager.open(
                        E.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Could not update approval setting. Please try again.",
                          ),
                        }),
                      ),
                      M(!e));
                  })
                  .finally(function () {
                    F(!1);
                  }));
            }
          },
          [U.value, l],
        );
      (T(
        function () {
          if (U.value != null && a != null) {
            var e = U.value,
              t = o("WAWebChatCollection").ChatCollection.getActive();
            if (t != null) {
              var n = o("WAWebLinkify").findLink(e, !0);
              n != null
                ? o("WAWebLinkPreviewChatAction")
                    .getLinkPreview(n, t)
                    .then(function (e) {
                      (S(e == null ? void 0 : e.data),
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "createCallLinkAsync: Link preview fetched successfully",
                            ])),
                        ));
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "createCallLinkAsync: Failed to get link preview, error: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("create-call-link-preview-error");
                    })
                : o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "createCallLinkAsync: Failed to parse call link as URL",
                        ])),
                    )
                    .sendLogs("create-call-link-parse-error");
            }
          }
        },
        [U.value, a],
      ),
        U.error &&
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "createCallLinkAsync: call link creation failed: ",
                  "",
                ])),
              U.error,
            )
            .sendLogs("create-call-link-error"));
      var H = U.loading,
        G = U.error != null,
        z = H || G ? null : U.value;
      function j() {
        return K.apply(this, arguments);
      }
      function K() {
        return (
          (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (z != null) {
              if (
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "handleGenerateCallLinkClick: handleSendLinkOnWhatsApp",
                    ])),
                ),
                a != null)
              ) {
                var e = o("WAWebChatCollection").ChatCollection.getActive();
                if (e != null) {
                  (v != null
                    ? yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                        e,
                        z,
                        { linkPreview: v },
                      )
                    : yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
                        e,
                        z,
                      ),
                    o("WAWebModalManager").ModalManager.close());
                  return;
                }
              }
              o("WAWebModalManager").ModalManager.open(
                E.jsx(r("WAWebSendTextFlow.react"), {
                  title: s._(/*BTDS*/ "Send link to"),
                  text: z,
                  onSend: o("WAWebDrawerManager").closeDrawerLeft,
                }),
              );
            }
          })),
          K.apply(this, arguments)
        );
      }
      return E.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.CDS,
        onOK: j,
        okDisabled: z == null || A,
        okText:
          a != null
            ? s._(/*BTDS*/ "{=m0} Send link to chat", [
                s._implicitParam(
                  "=m0",
                  E.jsx(
                    o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                    {
                      directional: !0,
                      displayInline: !0,
                      xstyle: P.forwardIcon,
                      children: s._(/*BTDS*/ ""),
                    },
                  ),
                ),
              ])
            : s._(/*BTDS*/ "{=m0} Send link via WhatsApp", [
                s._implicitParam(
                  "=m0",
                  E.jsx(
                    o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
                    {
                      directional: !0,
                      displayInline: !0,
                      xstyle: P.forwardIcon,
                      children: s._(/*BTDS*/ ""),
                    },
                  ),
                ),
              ]),
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: r("WAWebFbtCommon")("Close"),
        extraButtonProps:
          (!r("WAWebEnvironment").isWeb ||
            o("WAWebVoipGatingUtils").isGroupCallingEnabled()) &&
          !q
            ? {
                type: "simplified",
                disabled: A,
                onClick: function () {
                  return N(z);
                },
                text: r("fbs")._(/*BTDS*/ "Join call"),
              }
            : void 0,
        buttonsDirection: "horizontal",
        buttonGroupStyle: [
          o("WAWebUISpacing").uiMargin.all20,
          o("WAWebUISpacing").uiPadding.vert0,
        ],
        children: E.jsx(o("WAWebFlex.react").FlexRow, {
          children: E.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: P.modalContainer,
            children: E.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              gap: 12,
              children: [
                E.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.all25,
                    o("WAWebUISpacing").uiPadding.bottom0,
                  ],
                  children: E.jsx(
                    o("WAWebText.react").WAWebTextLargeRefreshed,
                    {
                      color: "primary",
                      children: s._(/*BTDS*/ "New call link"),
                    },
                  ),
                }),
                E.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: o("WAWebUISpacing").uiMargin.horiz25,
                  align: "center",
                  children: [
                    E.jsx(o("WAWebFlex.react").FlexItem, {
                      shrink: 0,
                      children: E.jsx(
                        o("WAWebVoipCallLinksPopupTypeDropDown.react")
                          .WAWebVoipCallLinksPopupTypeDropDown,
                        { callLinkType: l, onCallLinkTypeSelectionChanged: C },
                      ),
                    }),
                    E.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      children: G
                        ? E.jsx("div", {
                            className:
                              "x1vqgdyp xh8yej3 x6nvzda x4i4b9w xhl9efl xj65ea0 x78zum5 x6s0dn4 x13a6bvl x2vl965 x4wrhlh",
                            children: E.jsx(r("WDSTextualLink.react"), {
                              onClick: U.retry,
                              children: s._(/*BTDS*/ "Retry link"),
                            }),
                          })
                        : E.jsx(r("WAWebTextBoxReadonly.react"), {
                            addOnAfter:
                              z == null
                                ? E.jsx(o("WAWebSpinner.react").Spinner, {
                                    size: 24,
                                  })
                                : E.jsx(O, { textToCopy: z }),
                            ariaLabel: r("fbs")._(/*BTDS*/ "Call link text"),
                            text: z != null ? z : "",
                            xstyle: P.textContainer,
                            inputContainerXstyle: [
                              o("WAWebUISpacing").uiPadding.start10,
                              o("WAWebUISpacing").uiPadding.end0,
                            ],
                          }),
                    }),
                  ],
                }),
                E.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.vert5,
                    o("WAWebUISpacing").uiPadding.horiz25,
                  ],
                  children: E.jsx(o("WAWebText.react").WAWebTextSmall, {
                    textWrap: "wrap",
                    children: s._(
                      /*BTDS*/ "Anyone with WhatsApp can use this link to join this call. Only share it with people you trust.",
                    ),
                  }),
                }),
                W &&
                  E.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: [
                      o("WAWebUISpacing").uiPadding.vert10,
                      o("WAWebUISpacing").uiPadding.horiz25,
                    ],
                    align: "center",
                    justify: "all",
                    children: [
                      E.jsx(o("WAWebFlex.react").FlexColumn, {
                        align: "stretch",
                        children: E.jsx(o("WAWebText.react").WAWebTextSmall, {
                          children: s._(/*BTDS*/ "Require approval to join"),
                        }),
                      }),
                      E.jsx(o("WAWebFlex.react").FlexItem, {
                        shrink: 0,
                        children: E.jsxs(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          columnGap: 8,
                          children: [
                            A &&
                              E.jsx(o("WAWebSpinner.react").Spinner, {
                                size: 20,
                              }),
                            E.jsx(r("WDSSwitch.react"), {
                              "aria-label": r("fbs")._(
                                /*BTDS*/ "Require approval to join",
                              ),
                              disabled: z == null || A,
                              value: k,
                              onChange: V,
                              testid: void 0,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        }),
      });
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      var t = e.textToCopy,
        n = x(!1),
        a = n[0],
        i = n[1];
      return (
        T(
          function () {
            var e = new AbortController();
            return (
              a &&
                o("WAWebCopyToClipboard")
                  .copyTextToClipboard(t)
                  .then(function () {
                    e.signal.aborted ||
                      (i(!1),
                      o("WAWebToastManager").ToastManager.open(
                        E.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Link copied"),
                        }),
                      ));
                  }),
              function () {
                e.abort();
              }
            );
          },
          [a, t],
        ),
        E.jsx(r("WDSButton.react"), {
          Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
          "aria-label": r("fbs")._(/*BTDS*/ "Copy Call link"),
          onPress: function () {
            i(!0);
          },
          variant: "borderless",
        })
      );
    }
    ((O.displayName = O.name + " [from " + i.id + "]"),
      (l.handleGenerateCallLinkClick = w),
      (l.WAWebVoipCreateCallLinksPopup = F));
  },
  226,
);
