__d(
  "WAWebStatusPostingTextView.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebAttachMediaCollection",
    "WAWebChatPreferenceCollection",
    "WAWebCmd",
    "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
    "WAWebEmojiNode",
    "WAWebFileUtils",
    "WAWebFlex.react",
    "WAWebFontLoader",
    "WAWebLogStatusPost",
    "WAWebLogStatusPosterActions",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebNewsletterSendStatusAction",
    "WAWebNewsletterStatusSelectorButton.react",
    "WAWebPrepareMessageSendingAction",
    "WAWebProtobufsE2E.pb",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebSendButtonWithCount.react",
    "WAWebSendStatusMsgAction",
    "WAWebStatusChangePrivacyPopup.react",
    "WAWebStatusJidUtils",
    "WAWebStatusPostingMediaView.react",
    "WAWebStatusPrivacySettingButton.react",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUserPrefsStatusType",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWamEnumStatusPostResult",
    "WDSIconIcClose.react",
    "WDSIconIcMatchCase.react",
    "WDSIconIcMood.react",
    "WDSIconIcPalette.react",
    "WDSMenuBarItem.react",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useImperativeHandle,
      g = p.useRef,
      h = p.useState,
      y = 700,
      C = 10;
    function b(e) {
      if (e != null)
        switch (e.setting) {
          case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
            return e.allowList.length;
          case o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
            return e.denyList.length;
          default:
            return;
        }
    }
    var v = {
        textInputWrapper: {
          color: "x17t9dm2",
          wordWrap: "x1vvkbs",
          whiteSpace: "x126k92a",
          maxHeight: "x9hq9vl",
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          marginTop: "xb8qb8r",
          marginInlineEnd: "x11t971q",
          marginBottom: "x14ihc8f",
          marginInlineStart: "xvc5jky",
          alignSelf: "xamitd3",
          $$css: !0,
        },
        input: { textAlign: "x2b8uid", $$css: !0 },
        inputText: { width: "xh8yej3", fontSize: "xcg35fi", $$css: !0 },
        sendWrapper: {
          backgroundColor: "x1bwewq6",
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          height: "x1peatla",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        optionWrapper: {
          position: "x10l6tqk",
          top: "xomnu4r",
          insetInlineStart: "x1o0tod",
          height: "xsdox4t",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "x13a6bvl",
          boxSizing: "x9f619",
          $$css: !0,
        },
        font_0: { $$css: !0 },
        font_1: { fontFamily: "x12n1cvc", $$css: !0 },
        font_2: { fontFamily: "xs8eguv", $$css: !0 },
        textLarge: {
          fontSize: "xvzvg7y",
          lineHeight: "x1xuplte",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        textMedium: {
          fontSize: "xdhfpv1",
          lineHeight: "x1swossr",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        textSmall: {
          fontSize: "x1jchvi3",
          lineHeight: "x3gokd0",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        placeholderText: { color: "xr3d4wh", $$css: !0 },
        buttonSpacing: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      },
      S = new Map([
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM,
          v.font_0,
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .SYSTEM_TEXT,
          v.font_1,
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .FB_SCRIPT,
          v.font_2,
        ],
      ]),
      R = [
        4289080433, 4287670337, 4290879551, 4286128440, 4289628020, 4293964592,
        4290163495, 4291207116, 4287326608, 4294937228, 4283744869, 4294933355,
        4280730844, 4283943423, 4285818730, 4286484643, 4283864831, 4285408638,
        4286237605, 4280563264, 4286747850,
      ],
      L = [
        o("WAWebFontLoader").Font.SANS_SERIF,
        o("WAWebFontLoader").Font.SERIF,
        o("WAWebFontLoader").Font.NORICAN_REGULAR,
      ],
      E = function () {
        return R[Math.floor(Math.random() * R.length)];
      },
      k = function (t) {
        return t <= 60 ? v.textLarge : t <= 240 ? v.textMedium : v.textSmall;
      },
      I = function (t) {
        return t <= 60
          ? o("WAWebEmojiNode").EmojiSize.Large
          : t <= 240
            ? o("WAWebEmojiNode").EmojiSize.Medium
            : o("WAWebEmojiNode").EmojiSize.Small;
      };
    function T(e) {
      var t = (e >> 24) & 255,
        n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        o = e & 255;
      return "rgba(" + n + ", " + r + ", " + o + ", " + t + ")";
    }
    function D() {
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ "Your status update cannot exceed {character-length} characters or {lines-length} lines.",
            [s._param("character-length", y), s._param("lines-length", C)],
          ),
          id: "WA_STATUS_MAX_INPUT_EXCEEDED",
        }),
        o("WAWebToastManager").ToastPosition.CENTER,
      );
    }
    function x(t) {
      var a = t.isNewsletterStatus,
        i = t.newsletterWid,
        l = t.ref,
        d = h(i != null ? i : null),
        p = d[0],
        R = d[1],
        x = h(
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM,
        ),
        $ = x[0],
        P = x[1],
        N = h(E()),
        M = N[0],
        w = N[1],
        A = h(!1),
        F = A[0],
        O = A[1],
        B = h(""),
        W = B[0],
        q = B[1],
        U = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        V = U.audienceTracking,
        H = U.setStatusPostingPrivacyConfig,
        G = U.statusPostingPrivacyConfig,
        z = U.trackAudienceSelectorClicked,
        j = g(0),
        K = h(function () {
          return new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)();
        }),
        Q = K[0],
        X = g(),
        Y = g(),
        J = g(),
        Z = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["spellcheck", "transformTextEmoji"],
        );
      _(
        function () {
          (o("WAWebCmd").Cmd.onStatusPostingFlow(),
            (c || (c = n("Promise"))).all(
              L.map(function (e) {
                return o("WAWebFontLoader").FontLoader.load(e);
              }),
            ),
            Q.logStatusTextScreenImp());
        },
        [Q],
      );
      var ee = function () {
        (Q.logComposerXoutTapped(),
          o("WAWebModalManager").ModalManager.closeMedia());
      };
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
        surface: "status-composer-text",
      });
      var te = o("WAWebStatusJidUtils").getStatusChat(),
        ne = function () {
          for (
            var e, t = S.keys(), n;
            (n = t.next()) && n.value !== $;
            n != null
          );
          (P(
            (e = t.next().value) != null
              ? e
              : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM,
          ),
            Q.logTextToolFontChanged());
        },
        re = function () {
          (w(E()), Q.logBackgroundColorTap());
        },
        oe = function () {
          var t = W,
            n = $;
          if (
            (Q.logPostSendTap(
              o("WAWebLogStatusPosterActions").STATUS_CONTENT_TYPE.TEXT,
            ),
            a !== !0 &&
              (G == null ? void 0 : G.setting) ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList &&
              (G == null ? void 0 : G.allowList.length) === 0)
          )
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebStatusChangePrivacyPopup.react"), {
                statusPostingPrivacyConfig: G,
                setStatusPostingPrivacyConfig: H,
              }),
            );
          else {
            o("WAWebModalManager").ModalManager.closeMedia();
            var i = j.current;
            j.current += 1;
            var l = {
                statusPostOrigin: o("WAWebWamEnumStatusPostOrigin")
                  .STATUS_POST_ORIGIN.STATUS_TAB_PEN,
                mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
                hasFilters: !1,
                perPostStatusPrivacySetting:
                  a !== !0 ? (G == null ? void 0 : G.setting) : void 0,
                retryCount: i,
                statusAudienceSelectorClicked: V.statusAudienceSelectorClicked,
                statusAudienceSelectorUpdated: V.statusAudienceSelectorUpdated,
                statusAudienceSize: a !== !0 ? b(G) : void 0,
                statusContainsMusic: !1,
              },
              s =
                p != null
                  ? o(
                      "WAWebNewsletterSendStatusAction",
                    ).sendNewsletterStatusTextMsgAction(p, {
                      text: t,
                      color: M,
                      font: n,
                    })
                  : o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
                      text: t,
                      color: M,
                      font: n,
                    });
            s.then(function (e) {
              o("WAWebLogStatusPost").logStatusPost(
                babelHelpers.extends(
                  {
                    statusPostResult: o(
                      "WAWebLogStatusPost",
                    ).getStatusPostResult(e.messageSendResult),
                    msg: e.msg,
                  },
                  l,
                ),
              );
            }).catch(function (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Text status posting failed with error ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("sendStatusMessage-failed", { sampling: 0.01 }),
                o("WAWebLogStatusPost").logStatusPost(
                  babelHelpers.extends(
                    {
                      statusPostResult: o("WAWebWamEnumStatusPostResult")
                        .STATUS_POST_RESULT.ERROR_UNKNOWN,
                    },
                    l,
                  ),
                ));
            });
          }
        },
        ae = function () {
          O(!0);
        },
        ie = function (t) {
          var e = Y.current;
          (e && (e.focus(), e.replaceSelection(t)), O(!1));
        },
        le = function () {
          return J.current;
        },
        se = function () {
          return (o("WAWebModalManager").ModalManager.closeMedia(), !0);
        },
        ue = function (t) {
          var e = t.getFiles(),
            n = e.filter(function (e) {
              var t = o("WAWebFileUtils").typeFromMimetype(e.type);
              return (
                t === o("WAWebFileUtils").FILETYPE.IMAGE ||
                t === o("WAWebFileUtils").FILETYPE.VIDEO
              );
            });
          if (n.length !== 0 && !(a === !0 && p === null)) {
            te.attachMediaContents ||
              te.setAttachMediaContents(
                new (r("WAWebAttachMediaCollection"))({
                  chatParticipantCount: te.getParticipantCount(),
                }),
              );
            var i = r("WANullthrows")(
                te.attachMediaContents,
                "attachMediaContents should be set before processing files",
              ),
              l = function () {
                i.processAttachmentsForChat(
                  n.map(function (e) {
                    return { file: e };
                  }),
                  o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.PASTE,
                  te,
                );
              };
            o("WAWebModalManager").ModalManager.openMedia(
              m.jsx(r("WAWebStatusPostingMediaView.react"), {
                chat: te,
                onRender: l,
                mediaCollection: i,
                newsletterWid: p != null ? p : void 0,
              }),
              { transition: "status-modal" },
            );
          }
        };
      f(l, function () {
        return { getElement: le, handleRequestDismiss: se };
      });
      var ce =
          F &&
          X.current &&
          m.jsx(
            o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react")
              .EmojiPanelPopup,
            {
              anchor: X.current,
              onSelect: ie,
              onClose: function () {
                O(!1);
              },
            },
          ),
        de = null;
      return (
        a === !0 && i == null
          ? (de = m.jsx(r("WAWebNewsletterStatusSelectorButton.react"), {
              selectedNewsletterWid: p,
              onNewsletterSelected: R,
              type: "text",
            }))
          : a !== !0 &&
            (de = m.jsx(r("WAWebStatusPrivacySettingButton.react"), {
              onAudienceSelectorClicked: z,
              statusPostingPrivacyConfig: G,
              setStatusPostingPrivacyConfig: H,
              type: "text",
            })),
        m.jsxs("div", {
          className:
            "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn xo5hfjf xbpklzw x78zum5",
          style: { backgroundColor: T(M) },
          ref: J,
          children: [
            m.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props([
                  v.optionWrapper,
                  o("WAWebUISpacing").uiPadding.end18,
                  v.fullWidth,
                ]),
                {
                  children: m.jsxs(o("WAWebMenuBar.react").MenuBar, {
                    children: [
                      m.jsx("div", {
                        className:
                          "x10l6tqk xfwv6vp x1tiyuxx x1uc92m x1nbhmlj x181vq82",
                        children: m.jsx(r("WDSMenuBarItem.react"), {
                          buttonType: "media",
                          title: s._(/*BTDS*/ "Close status posting view"),
                          icon: r("WDSIconIcClose.react"),
                          onClick: ee,
                        }),
                      }),
                      m.jsx(
                        r("WDSMenuBarItem.react"),
                        {
                          title: s._(/*BTDS*/ "Emoji"),
                          buttonVariant: "borderless",
                          buttonType: "media",
                          ref: X,
                          icon: r("WDSIconIcMood.react"),
                          testid: void 0,
                          onClick: ae,
                          marginInlineXstyle: v.buttonSpacing,
                        },
                        "emoji-button",
                      ),
                      m.jsx(
                        r("WDSMenuBarItem.react"),
                        {
                          title: s._(/*BTDS*/ "Font"),
                          buttonVariant: "borderless",
                          buttonType: "media",
                          icon: r("WDSIconIcMatchCase.react"),
                          testid: void 0,
                          onClick: ne,
                          marginInlineXstyle: v.buttonSpacing,
                        },
                        "font-button",
                      ),
                      m.jsx(
                        r("WDSMenuBarItem.react"),
                        {
                          title: s._(/*BTDS*/ "Palette"),
                          buttonVariant: "borderless",
                          buttonType: "media",
                          icon: r("WDSIconIcPalette.react"),
                          testid: void 0,
                          onClick: re,
                        },
                        "palette-button",
                      ),
                    ],
                  }),
                },
              ),
            ),
            m.jsx(
              "div",
              babelHelpers.extends(
                {},
                u.props([v.textInputWrapper, S.get($)]),
                {
                  children: m.jsx(r("WAWebRichTextInput.react"), {
                    ref: Y,
                    xstyle: v.input,
                    textXstyle: [v.inputText, k(W.length)],
                    placeholderTextXStyle: v.placeholderText,
                    placeholder: s._(/*BTDS*/ "Type a status"),
                    onChange: function (t) {
                      (q(t.text),
                        o(
                          "WAWebPrepareMessageSendingAction",
                        ).prepareChatForMessageSending(te));
                    },
                    multiline: !0,
                    focusOnMount: !0,
                    spellCheck: Z.spellcheck,
                    maxLength: y,
                    maxLineCount: C,
                    onMaxInputExceeded: D,
                    onMaxPasteExceeded: D,
                    onFiles: ue,
                    children: m.jsx(r("WAWebRichTextInputPlugins.react"), {
                      emojiSize: I(W.length),
                      transformTextEmoji: Z.transformTextEmoji,
                      textFormatEnabled: !0,
                      linksEnabled: !0,
                      textFormatShortcutsEnabled: !0,
                    }),
                  }),
                },
              ),
            ),
            m.jsx(
              "div",
              babelHelpers.extends(
                {},
                u.props([
                  v.sendWrapper,
                  v.fullWidth,
                  o("WAWebUISpacing").uiPadding.vert16,
                ]),
                {
                  children: m.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: [
                      v.fullWidth,
                      o("WAWebUISpacing").uiPadding.horiz28,
                    ],
                    children: [
                      m.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        children: de,
                      }),
                      m.jsx(o("WAWebFlex.react").FlexItem, {
                        children: m.jsx(r("WAWebSendButtonWithCount.react"), {
                          disabled:
                            W.trim().length === 0 || (a === !0 && p == null),
                          ariaLabel: s._(/*BTDS*/ "Send"),
                          large: !0,
                          onClick: oe,
                        }),
                      }),
                    ],
                  }),
                },
              ),
            ),
            ce,
          ],
        })
      );
    }
    ((x.displayName = x.name + " [from " + i.id + "]"), (l.default = x));
  },
  226,
);
