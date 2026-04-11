__d(
  "WAWebRichTextField.react",
  [
    "cx",
    "fbt",
    "$InternalEnum",
    "WAUnicodeUtils",
    "WAWebAlertErrorIcon.react",
    "WAWebBidiParagraphNode",
    "WAWebCharacterLimitPlugin",
    "WAWebCheckboxRoundCheckedIcon.react",
    "WAWebClassnames",
    "WAWebDelimiterNode",
    "WAWebDragIconWrapper.react",
    "WAWebDropdown.react",
    "WAWebEditorStatePlugin.react",
    "WAWebEmojiNode",
    "WAWebEmojiPanel.react",
    "WAWebEmojiPickerPlugin",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebIcMoodIcon.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebMultilinePlugin",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebPencilRefreshedIcon.react",
    "WAWebQuoteLineNode",
    "WAWebRichTextFieldEmojiTextBlock.react",
    "WAWebRichTextInput.react",
    "WAWebRichTextInputPlugins.react",
    "WAWebRound.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWdsIcSendFilledIcon.react",
    "WAWebWebIcCheckIcon.react",
    "WDSButton.react",
    "WDSFocusStateStyles",
    "WDSIconIcImage.react",
    "WDSIconIcInfo.react",
    "WDSIconIcMood.react",
    "WDSRichTextField.react",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useHoverState",
    "useWAWebABPropConfigValue",
    "useWAWebPrevious",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useEffect,
      g = p.useImperativeHandle,
      h = p.useMemo,
      y = p.useRef,
      C = p.useState,
      b = 50,
      v = 10,
      S = 24,
      R = n("$InternalEnum")({
        GroupInfoName: "groupInfoName",
        Desaturated: "desaturated",
        NoErrorInfo: "noErrorInfo",
        ChatInfoDefaultText: "chatInfoDefaultText",
        ChatInfoLargeText: "chatInfoLargeText",
        DisabledLabel: "disabledLabel",
        DigitalCode: "digitalCode",
      }),
      L = {
        sendBtn: { boxShadow: "x1gnnqk1", $$css: !0 },
        iconColor: { color: "xt16idv", $$css: !0 },
        iconMain: {
          position: "x10l6tqk",
          top: "x1atx4j1",
          color: "x1heor9g",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        btn: {
          color: "x1heor9g",
          cursor: "x1ypdohk",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        textInputFontSize13: { fontSize: "x1nxh6w3", $$css: !0 },
        textInputFontSize14: { fontSize: "x1f6kntn", $$css: !0 },
        textInputFontSize15: { fontSize: "x6prxxf", $$css: !0 },
        textInputFontSize16: { fontSize: "x1jchvi3", $$css: !0 },
        textInputFontSize17: { fontSize: "x1lkfr7t", $$css: !0 },
        textInputFontSize24: { fontSize: "xngnso2", $$css: !0 },
        btnFooterContainer: {
          display: "x78zum5",
          flexDirection: "x3ieub6",
          $$css: !0,
        },
        iconMainRefreshed: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          height: "x1vqgdyp",
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        iconMainContainerRefreshed: {
          flexShrink: "x2lah0s",
          color: "x14ug900",
          $$css: !0,
        },
        iconMainContainerMultilineRefreshed: {
          alignSelf: "x1y8v6su",
          $$css: !0,
        },
        alignSelfCenter: { alignSelf: "xamitd3", $$css: !0 },
        textAlign: { textAlign: "x1yc453h", $$css: !0 },
      };
    function E(t) {
      var n,
        a,
        l,
        s,
        d,
        p,
        E = t.ref,
        k = babelHelpers.objectWithoutPropertiesLoose(t, e),
        I = k.customStyleThemes,
        T = I === void 0 ? [] : I,
        D = k.focusOnMount,
        x = k.selectOnMount,
        $ = k.lockable,
        P = k.multiline,
        N = k.onBeginEdit,
        M = k.lowProfile,
        w = k.error,
        A = k.validate,
        F = k.onSave,
        O = k.onError,
        B = k.onCancel,
        W = k.emptyValuePlaceholder,
        q = k.editable,
        U = q === void 0 ? !0 : q,
        V = k.pending,
        H = k.blockFocusOnLock,
        G = k.managed,
        z = k.managedError,
        j = k.testid,
        K = j === void 0 ? "text-input" : j,
        Q = k.inputPlaceholder,
        X = k.direction,
        Y = k.maxCodeUnits,
        J = k.setIsEditing,
        Z = k.contextMsg,
        ee = k.shutEmojiPickerOnSelect,
        te = k.onCharLimitReachedOnce,
        ne = k.containerXstyle,
        re = k.showValidateIcon,
        oe = k.showErrorIcon,
        ae = k.showSuccessIcon,
        ie = k.placeholderClickToEditEnabled,
        le = ie === void 0 ? !1 : ie,
        se = k.isRefresh,
        ue = se === void 0 ? !1 : se,
        ce = k.tabOrder,
        de = k.showSendBtn,
        me = de === void 0 ? !1 : de,
        pe = k.onSend,
        _e = k.emojiBtnPosition === "side",
        fe = k.emojiBtnPosition === "footer",
        ge = k.photoBtnPosition === "side",
        he = k.photoBtnPosition === "footer",
        ye = _e || fe,
        Ce = babelHelpers.extends(
          { multiline: P, direction: "auto", inferLinesDirection: !0 },
          k.emojiTextSettingsInLockMode,
        ),
        be = r("useHoverState")(),
        ve = be.onMouseEnter,
        Se = be.onMouseLeave,
        Re = C(k.value),
        Le = Re[0],
        Ee = Re[1],
        ke = Le != null ? Le : k.value,
        Ie = !ke,
        Te = Q == null || Q === "";
      f(
        function () {
          Ee(k.value);
        },
        [k.value],
      );
      var De = y(null),
        xe = y(null),
        $e = y(null),
        Pe = y(null),
        Ne = C((n = k.startActive) != null ? n : !1),
        Me = Ne[0],
        we = Ne[1],
        Ae = C(!1),
        Fe = Ae[0],
        Oe = Ae[1],
        Be = C(k.startActive !== !0 && !!$),
        We = Be[0],
        qe = Be[1],
        Ue = C(null),
        Ve = Ue[0],
        He = Ue[1],
        Ge = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wds_web_rich_text_field",
        ),
        ze = C(null),
        je = ze[0],
        Ke = ze[1],
        Qe = _(function (e) {
          Ke(e);
        }, []),
        Xe = h(function () {
          return [
            o("WAWebEmojiNode").EmojiNode,
            o("WAWebMentionNode").MentionNode,
            o("WAWebListBulletNode").ListBulletNode,
            o("WAWebListNumberNode").ListNumberNode,
            o("WAWebQuoteLineNode").QuoteLineNode,
            o("WAWebBidiParagraphNode").BidiParagraphNode,
            o("WAWebDelimiterNode").DelimiterNode,
            o("WAWebNonJidMentionNode").NonJidMentionNode,
          ];
        }, []),
        Ye = function () {
          var e;
          je != null ? je.focus() : (e = De.current) == null || e.focus();
        };
      f(
        function () {
          J != null && Me !== J && (we(J), qe(!J), Ye());
        },
        [J],
      );
      var Je = r("useWAWebPrevious")(We),
        Ze = r("useWAWebPrevious")(U),
        et = r("useWAWebPrevious")(V);
      f(function () {
        D === !0 && Ye();
      }, []);
      var tt = function (t) {
          t && (t.preventDefault(), t.stopPropagation());
          var e = m.jsx(r("WAWebEmojiPanel.react"), {
            onEmoji: function (t) {
              if ((ee === !0 && nt(), je != null)) {
                var e;
                (e = je.editor) == null ||
                  e.update(function () {
                    return o("WAWebLexicalUtils").$insertText(t);
                  });
              } else {
                var n;
                (n = De.current) == null || n.replaceSelection(t);
              }
            },
            onFocusNext: Ye,
            onFocusPrev: Ye,
          });
          (He({
            menu: e,
            dirY: o("WAWebDropdown.react").DirY.TOP,
            type: o("WAWebDropdown.react").MenuType.EmojiPicker,
            anchor: t.target,
          }),
            Ye());
        },
        nt = function () {
          He(null);
        },
        rt = function () {
          var e;
          (e = xe.current) == null || e.restoreFocus();
        },
        ot = function () {
          var e = !(M !== !0 && w);
          (A && e && (e = A(ke)), e ? (F && F(), qe(!0), we(!1)) : O && O());
        },
        at = function (t) {
          ($ === !0 && ot(),
            me === !0 && pe != null && pe(ke),
            P !== !0 &&
              t instanceof KeyboardEvent &&
              (k.onEnter == null || k.onEnter(t)));
        },
        it = function (t) {
          (we(!0), k.onFocus == null || k.onFocus(t));
        },
        lt = function (t) {
          (we(!1), k.onBlur == null || k.onBlur(t));
        },
        st = function () {
          (N && N(), qe(!1));
        },
        ut = r("useWAWebStableCallback")(function () {
          (B && B(), qe(!0), we(!1), Ee(k.value));
        }),
        ct = function () {
          return Ie && W != null && W !== "" && We;
        },
        dt = r("useWAWebStableCallback")(function () {
          return U && !We;
        }),
        mt = function () {
          Ve && rt();
        };
      f(
        function () {
          if ((Je !== !0 && Ze === !0 && !U && ut(), $e.current)) {
            var e = Je !== !0 && We,
              t = et === !0 && !V;
            H !== !0 && (e || t) && r("WAWebFocusTracer").focus($e.current);
          }
          var n = De.current;
          ((!dt() || G === !0) &&
            (n == null ? void 0 : n.getTextContent()) !== ke &&
            (n == null || n.setTextContent(ke || "")),
            z === !0 && w != null && We && qe(!1));
        },
        [H, U, w, ut, dt, We, G, z, V, Ze, Je, et, ke],
      );
      var pt = function () {
          (Ce.onReadMore == null || Ce.onReadMore(),
            !U && k.editRestrictionInfo
              ? k.editRestrictionInfo()
              : U && We && st());
        },
        _t = function () {
          var e, t;
          ((e = Pe.current) == null || e.focus(),
            (t = De.current) == null || t.focus());
        },
        ft = function () {
          var e;
          (_t(), (e = De.current) == null || e.selectAll());
        },
        gt = function () {
          var e;
          (e = De.current) == null || e.reset();
        },
        ht = function () {
          $e.current && r("WAWebFocusTracer").focus($e.current);
        };
      g(E, function () {
        return je != null
          ? {
              restoreFocus: function () {
                return je.focus();
              },
              triggerSelect: function () {
                return je.focus();
              },
              triggerFocus: function () {
                return je.focus();
              },
              selectTextInput: function () {
                (je.focus(), je.selectAll());
              },
              clearTextInput: function () {
                return je.setTextContent("");
              },
              focusEditBtn: r("WAWebNoop"),
            }
          : {
              restoreFocus: Ye,
              triggerSelect: pt,
              triggerFocus: _t,
              selectTextInput: ft,
              clearTextInput: gt,
              focusEditBtn: ht,
            };
      });
      var yt = (a = k.maxLength) != null ? a : 25,
        Ct = dt(),
        bt = Ct && k.error != null && k.error !== "" && !k.lowProfile,
        vt = T.map(function (e) {
          return e === R.GroupInfoName
            ? "_alen"
            : e === R.Desaturated
              ? "_aleo"
              : e === R.NoErrorInfo
                ? "_alem"
                : e === R.ChatInfoDefaultText
                  ? "_alep"
                  : e === R.ChatInfoLargeText
                    ? "_aleq"
                    : e === R.DisabledLabel
                      ? "_aler"
                      : e === R.DigitalCode
                        ? "_aqzu"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                e,
                            );
                          })();
        }),
        St = {
          container: o(
            "WAWebClassnames",
          ).classnamesConvertMeToStylexPlease.apply(
            void 0,
            ["_alcf", (c || (c = r("stylex")))(ne)].concat(vt, [
              ((l = {}),
              (l._alcg = !k.placeholder),
              (l._alch = k.theme === "invite-message-caption"),
              (l._alci = k.theme === "request-reason"),
              (l._alcm = dt()),
              (l._alcn = k.theme === "small"),
              (l._alco = k.theme === "large"),
              (l._alcp = k.showEditOnHover === !0),
              (l._alcr = k.showHighlightOnHover === !0),
              (l._alcs = U && Me),
              (l._alct = U && k.theme === "editor"),
              (l._am05 = k.theme === "gray-background"),
              (l._aleq = T.includes(R.ChatInfoLargeText)),
              (l._ap3v = k.theme === "label-input"),
              (l._au01 = k.theme === "phone-input"),
              l),
            ]),
          ),
          label: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_alcv",
            "_alcw",
            ((s = {}),
            (s._alcx =
              !Ie || (k.theme === "gray-background" && k.hideSpacer !== !0)),
            (s._alcy = !!k.hideFloatingLabel),
            (s._alcz = k.theme !== "small"),
            (s["_alc-"] = Ie && _e),
            s),
          ),
          inputWrapper: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ue === !0 ? "x1n2onr6 xhtitgo x78zum5 x6s0dn4" : "_alc_",
            ((d = {}),
            (d._ald0 = bt),
            (d._alch = k.theme === "invite-message-caption"),
            (d._ald1 = Me),
            (d._ald2 = We && !ue),
            (d._ald3 = dt()),
            d),
          ),
          infoWrapper: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ald4",
            ((p = {}), (p._ald0 = bt), (p._ald1 = Me), p),
          ),
        },
        Rt,
        Lt;
      if (k.lockable === !0) {
        if (k.pending === !0)
          Lt = m.jsx(
            "div",
            {
              className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                ue
                  ? "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x1ypdohk x17gydlx"
                  : "_ald6",
              ),
              children: m.jsx(o("WAWebSpinner.react").Spinner, {
                size: 18,
                stroke: 6,
                color: "highlight",
              }),
            },
            "spinner",
          );
        else if (We)
          if (U) {
            var It,
              Tt = (It = k.fieldName) != null ? It : "",
              Dt = u._(/*BTDS*/ "Edit {fieldName}", [
                u._param("fieldName", Tt),
              ]);
            Lt = m.jsx(r("WDSTooltip.react"), {
              label: Dt,
              children: m.jsx(
                r("WDSButton.react"),
                {
                  testid: void 0,
                  Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                  variant: "borderless",
                  onPress: st,
                  "aria-label": Dt,
                  ref: $e,
                },
                "btn-edit",
              ),
            });
          } else
            k.editRestrictionInfo &&
              !U &&
              (Lt = m.jsx(
                r("WAWebUnstyledButton.react"),
                {
                  xstyle: [
                    ue ? L.iconMainRefreshed : L.iconMain,
                    o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                  ],
                  onClick: k.editRestrictionInfo,
                  children: m.jsx(r("WDSIconIcInfo.react"), {
                    iconXstyle: L.iconColor,
                  }),
                },
                "btn-info",
              ));
        else {
          var Et,
            kt = (Et = k.fieldName) != null ? Et : "";
          Lt = m.jsx(
            r("WAWebUnstyledButton.react"),
            {
              xstyle: [
                ue ? L.iconMainRefreshed : L.iconMain,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              ],
              onClick: ot,
              disabled: k.disabled,
              testid: void 0,
              title: u._(/*BTDS*/ "Click to save {fieldName}, ESC to cancel", [
                u._param("fieldName", kt),
              ]),
              children: m.jsx(
                o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
                {},
              ),
            },
            "btn-done",
          );
        }
        if (k.lockable === !0 && Lt != null) {
          var xt = We && U && !k.pending;
          Rt = m.jsx(r("WAWebVelocityTransitionGroup"), {
            exit: !k.showEditOnHover,
            enter: k.showEditOnHover !== !0 || !We,
            className_DONOTUSE:
              ue || xt
                ? (c || (c = r("stylex")))(
                    L.iconMainContainerRefreshed,
                    ue &&
                      P && [
                        L.iconMainContainerMultilineRefreshed,
                        o("WAWebUISpacing").uiMargin.start10,
                      ],
                  )
                : "_ald8",
            xstyle: L.alignSelfCenter,
            transitionName: "pop",
            children: Lt,
          });
        }
      } else if (re === !0) {
        var $t;
        (k.pending === !0
          ? ($t = m.jsx(o("WAWebSpinner.react").Spinner, {
              size: 18,
              stroke: 6,
              color: "highlight",
            }))
          : w != null || oe === !0
            ? ($t = m.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
                height: 18,
              }))
            : ae === !0 &&
              ($t = m.jsx(
                o("WAWebCheckboxRoundCheckedIcon.react")
                  .CheckboxRoundCheckedIcon,
                { className_DONOTUSE: "_ald7" },
              )),
          $t != null &&
            (Rt = m.jsx(r("WAWebVelocityTransitionGroup"), {
              appear: !0,
              className_DONOTUSE: "_ald8",
              transitionName: "pop",
              children: m.jsx("div", {
                className:
                  o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                    "_ald5",
                  ),
                children: $t,
              }),
            })));
      } else if (me && pe) {
        var Pt = ke == null || ke.trim() === "";
        Rt = m.jsx(r("WAWebVelocityTransitionGroup"), {
          appear: !0,
          transitionName: "pop",
          children: m.jsx(o("WAWebRound.react").Round, {
            xstyle: [L.sendBtn, o("WAWebUISpacing").uiMargin.bottom6],
            medium: !0,
            theme: Pt ? o("WAWebRound.react").RoundTheme.Disabled : void 0,
            onClick: function () {
              return pe(ke);
            },
            disabled: Pt,
            label: u._(/*BTDS*/ "Send"),
            testid: void 0,
            children: m.jsx(
              o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
              { directional: !0 },
            ),
          }),
        });
      }
      var Nt =
          dt() && ye
            ? m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                handlers: { enter: tt, space: tt },
                children: m.jsx(
                  r("WAWebUnstyledButton.react"),
                  {
                    dataTab: ce,
                    xstyle: [
                      L.btn,
                      o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                    ],
                    onClick: tt,
                    onFocus: mt,
                    title: u._(/*BTDS*/ "Open emojis panel"),
                    children: m.jsx(o("WAWebIcMoodIcon.react").IcMoodIcon, {}),
                  },
                  "emoji-btn",
                ),
              })
            : null,
        Mt = m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          children: m.jsx(
            r("WAWebUnstyledButton.react"),
            {
              xstyle: [
                L.btn,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              ],
              onClick: k.onPhotoIconClick,
              title: u._(/*BTDS*/ "Add photo"),
              children: m.jsx(r("WDSIconIcImage.react"), {
                width: S,
                height: S,
              }),
            },
            "photo-btn",
          ),
        }),
        wt = null;
      if (k.showRemaining === !0) {
        var At,
          Ft = o("WAUnicodeUtils").numCodepoints(ke || ""),
          Ot =
            (Y != null ? Y : 1 / 0) -
            o("WAWebCharacterLimitPlugin").numCodeUnits(ke || ""),
          Bt = Math.min(Ot, yt - Ft),
          Wt = (At = k.charLimit) != null ? At : b,
          qt = Bt <= Wt && dt();
        if (qt) {
          var Ut = Bt <= Math.min(Wt, v);
          ((wt = m.jsx(
            "div",
            babelHelpers.extends(
              {
                "aria-label": u._(/*BTDS*/ "Characters remaining:"),
                className:
                  o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                    "_ald9",
                  ),
                "aria-live": "polite",
                "aria-atomic": "true",
                "aria-busy": "true",
              },
              Ut && { "aria-busy": "false" },
              { children: r("WAWebL10N").n(Bt) },
            ),
            "counter",
          )),
            Fe || (Oe(!0), te != null && te()));
        }
      }
      var Vt = Rt != null,
        Ht = h(
          function () {
            return P === !0
              ? null
              : We && Vt && ue === !0
                ? m.jsx("div", { className: "x2lah0s x100vrsf x1vqgdyp" })
                : null;
          },
          [We, P, ue, Vt],
        );
      function Gt() {
        var e, t, n, a, i;
        if (
          Ge !== !0 ||
          $ === !0 ||
          x === !0 ||
          k.pasteFromHTML === !0 ||
          k.onFiles != null ||
          k.onKeyDown != null ||
          Y != null ||
          me === !0 ||
          k.showValidateIcon === !0 ||
          k.emojiBtnPosition === "footer" ||
          k.photoBtnPosition != null ||
          G === !0 ||
          k.showEditOnHover === !0 ||
          k.showHighlightOnHover === !0 ||
          (T != null && T.length > 0) ||
          k.theme != null
        )
          return null;
        var l = k.emojiBtnPosition === "side",
          s =
            (e =
              (t =
                (n = (a = k.title) != null ? a : k.placeholder) != null
                  ? n
                  : typeof k.emptyValuePlaceholder == "string"
                    ? k.emptyValuePlaceholder
                    : null) != null
                ? t
                : k.ariaLabel) != null
              ? e
              : "",
          u = 3;
        return (
          k.maxVisibleLines != null && k.minVisibleLines != null
            ? (u = Math.round((k.maxVisibleLines + k.minVisibleLines) / 2))
            : k.minVisibleLines != null
              ? (u = k.minVisibleLines)
              : k.maxVisibleLines != null && (u = k.maxVisibleLines),
          m.jsxs(r("WDSRichTextField.react"), {
            ref: Qe,
            label: s,
            initialText: (i = k.value) != null ? i : void 0,
            onValueChange: Ee,
            onEnter:
              k.onEnter != null
                ? function () {
                    k.onEnter == null ||
                      k.onEnter(new KeyboardEvent("keydown", { key: "Enter" }));
                  }
                : void 0,
            maxLength: k.maxLength,
            maxCharacterCount: k.showRemaining === !0 ? yt : void 0,
            readOnly: k.readOnly,
            disabled: k.disabled,
            error: k.error != null && k.error !== "",
            rows: k.multiline === !0 ? u : void 0,
            errorText: k.error,
            bottomText: Z,
            testid: void 0,
            nodes: Xe,
            loading: V,
            EndIcon: l ? r("WDSIconIcMood.react") : void 0,
            onEndIconClick: l ? tt : void 0,
            children: [
              m.jsx(r("WAWebEditorStatePlugin.react"), {
                onChange: function (t, n, r) {
                  r || k.onChange == null || k.onChange(t, n);
                },
                onBlur: function (t) {
                  (we(!1), k.onBlur == null || k.onBlur(t));
                },
                onFocus: function (t) {
                  (we(!0), k.onFocus == null || k.onFocus(t));
                },
              }),
              m.jsx(r("WAWebRichTextInputPlugins.react"), {
                textFormatEnabled: k.textFormatEnabled,
                bulletPointsEnabled: k.bulletPointsEnabled,
                numberedListEnabled: k.numberedListEnabled,
                inlineCodeEnabled: k.inlineCodeEnabled,
                blockQuoteEnabled: k.blockQuoteEnabled,
                textFormatShortcutsEnabled: k.textFormatShortcutsEnabled,
                linksEnabled: k.linksEnabled,
                internLinksEnabled: k.internLinksEnabled,
                phoneNumbersEnabled: k.phoneNumbersEnabled,
                floatingToolbarEnabled: k.floatingToolbarEnabled,
              }),
              m.jsx(r("WAWebEmojiPickerPlugin"), {}),
              m.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                multiline: k.multiline === !0,
              }),
            ],
          })
        );
      }
      Gt.displayName = Gt.name + " [from " + i.id + "]";
      var zt = Gt();
      if (zt != null)
        return m.jsxs(m.Fragment, {
          children: [
            zt,
            Ve != null &&
              m.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "EmojiPicker",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: nt,
                requestFocus: rt,
                children: m.jsx(r("WAWebUimUieMenu.react"), {
                  contextMenu: Ve,
                }),
              }),
          ],
        });
      var jt =
          k.showDraggableIcon != null && k.showDraggableIcon === !0
            ? null
            : m.jsx("div", {
                children: m.jsx(r("WAWebDragIconWrapper.react"), {
                  onDragThumbMouseDown: k.onDragThumbMouseDown,
                }),
              }),
        Kt =
          _e || k.showRemaining === !0
            ? m.jsxs(r("WAWebVelocityTransitionGroup"), {
                className_DONOTUSE: "_alda",
                exit: !k.showEditOnHover,
                transitionName: "none",
                children: [
                  wt,
                  ge ? Mt : null,
                  _e ? Nt : null,
                  dt() && k.onDragThumbMouseDown != null ? jt : null,
                ],
              })
            : null,
        Qt =
          k.error != null && k.error !== ""
            ? m.jsxs(m.Fragment, {
                children: [
                  m.jsx("div", {
                    className: "_aldb",
                    "data-testid": void 0,
                    children: bt ? k.error : null,
                  }),
                  m.jsx("div", {
                    className: "_aldc",
                    role: "alert",
                    children: u._(/*BTDS*/ "Error: {error}", [
                      u._param("error", k.error),
                    ]),
                  }),
                ],
              })
            : null,
        Xt =
          Z != null && Z !== ""
            ? m.jsx("div", {
                className: "x1pg5gke xhslqc4",
                "data-testid": void 0,
                children: Z,
              })
            : null,
        Yt =
          k.lowProfile !== !0
            ? m.jsxs("div", {
                className: "x78zum5 x1q0g3np",
                children: [
                  m.jsx("div", {
                    className: "x78zum5 x3ieub6 x1iyjqo2",
                    children: m.jsx("div", {
                      className: St.infoWrapper,
                      children: Qt != null ? Qt : Xt,
                    }),
                  }),
                  he &&
                    Me &&
                    m.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props(
                          L.btnFooterContainer,
                          o("WAWebUISpacing").uiPadding.top2,
                        ),
                        { children: Mt },
                      ),
                    ),
                  fe &&
                    m.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props(
                          L.btnFooterContainer,
                          o("WAWebUISpacing").uiPadding.top2,
                        ),
                        { children: Nt },
                      ),
                    ),
                ],
              })
            : null,
        Jt;
      if (k.lockable === !0 && !We) {
        var Zt;
        (Ve &&
          (Zt = m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "EmojiPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: nt,
            requestFocus: rt,
            children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Ve }),
          })),
          (Jt = m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "TextInput",
            escapable: !0,
            dismissOnWindowResize: !0,
            requestFocus: Ye,
            requestDismiss: ut,
            children: m.jsx("div", { children: Zt }),
          })));
      } else
        k.lockable !== !0 &&
          Ve &&
          (Jt = m.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "EmojiPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: nt,
            requestFocus: rt,
            children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Ve }),
          }));
      var en = U && !We,
        tn = en,
        nn,
        rn;
      if (!tn)
        Ie
          ? Te ||
            (nn = m.jsx("div", {
              className: "xhslqc4 xs83m0k x1iyjqo2",
              children: m.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
                settings: Ce,
                textContent: Q,
                testid: void 0,
              }),
            }))
          : ((nn = m.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
              settings: Ce,
              textContent: ke,
              testid: void 0,
            })),
            ue
              ? (nn = m.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "_aldd",
                    {
                      0: "x112ta8 x3hdcf8 xje27ih x18dplov xozx76t",
                      2: "x112ta8 x3hdcf8 xje27ih x18dplov xozx76t x14ug900 xngnso2 xcgk4ki",
                      1: "x112ta8 x3hdcf8 xje27ih x18dplov xozx76t x6prxxf x1o2sk6j x14ug900",
                      3: "x112ta8 x3hdcf8 xje27ih x18dplov xozx76t x6prxxf x1o2sk6j x14ug900",
                    }[
                      (!!T.includes(R.ChatInfoLargeText) << 1) |
                        (!!T.includes(R.ChatInfoDefaultText) << 0)
                    ],
                  ),
                  children: nn,
                }))
              : k.showHighlightOnHover === !0 &&
                (nn = m.jsx("div", {
                  className:
                    o("WAWebClassnames").classnamesConvertMeToStylexPlease(
                      "_aldd",
                    ),
                  children: nn,
                })));
      else {
        var on, an;
        T.includes(R.ChatInfoLargeText)
          ? (an = L.textInputFontSize24)
          : T.includes(R.ChatInfoDefaultText) || k.theme === "label-input"
            ? ue
              ? (an = L.textInputFontSize15)
              : (an = L.textInputFontSize16)
            : k.theme === "editor"
              ? (an = L.textInputFontSize14)
              : k.theme === "small"
                ? (an = L.textInputFontSize13)
                : (an = L.textInputFontSize17);
        var ln =
          k.theme === "phone-input" ? {} : { paddingTop: 8, paddingBottom: 5 };
        ((nn = m.jsx("div", {
          style: ln,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_aldd",
            ue && "x112ta8 x3hdcf8 xje27ih x18dplov xozx76t",
            ((on = {}), (on._alde = k.constrainedWidth), on),
          ),
          children: m.jsxs(r("WAWebRichTextInput.react"), {
            title: k.title,
            ariaLabel: k.ariaLabel,
            testid: void 0,
            ref: De,
            initialText: k.value,
            multiline: k.multiline,
            focusOnMount: D,
            selectOnMount: x,
            pasteFromHTML: k.pasteFromHTML,
            enterIsNewLine: k.enterIsNewLine,
            onChange: function (t, n) {
              (Ee(t.text), k.onChange == null || k.onChange(t, n));
            },
            onFocus: it,
            onBlur: lt,
            onEnter: at,
            onKeyDown: k.onKeyDown,
            onFiles: k.onFiles,
            maxLength: k.maxLength,
            maxVisibleLines: k.maxVisibleLines,
            minVisibleLines: k.minVisibleLines,
            maxCodeUnits: Y,
            placeholder: Q,
            textXstyle: an,
            lineWrap: k.lineWrap,
            readOnly: k.readOnly,
            tabOrder: ce,
            children: [
              m.jsx(r("WAWebRichTextInputPlugins.react"), {
                textFormatEnabled: k.textFormatEnabled,
                bulletPointsEnabled: k.bulletPointsEnabled,
                numberedListEnabled: k.numberedListEnabled,
                inlineCodeEnabled: k.inlineCodeEnabled,
                blockQuoteEnabled: k.blockQuoteEnabled,
                textFormatShortcutsEnabled: k.textFormatShortcutsEnabled,
                linksEnabled: k.linksEnabled,
                internLinksEnabled: k.internLinksEnabled,
                phoneNumbersEnabled: k.phoneNumbersEnabled,
                floatingToolbarEnabled: k.floatingToolbarEnabled,
              }),
              m.jsx(r("WAWebEmojiPickerPlugin"), {}),
            ],
          }),
        })),
          (rn = null));
      }
      var sn, un;
      k.placeholder != null &&
        ((sn =
          (Ie || k.hideFloatingLabel !== !0) &&
          m.jsx("span", { className: St.label, children: k.placeholder })),
        k.hideSpacer !== !0 && (un = m.jsx("div", { className: "_aldf" })));
      var cn = function (t) {
          var e = Pe.current;
          e != null && t.target instanceof HTMLElement && e.contains(t.target);
        },
        dn = X != null ? X : r("WAWebL10N").isRTL() ? "rtl" : "ltr",
        mn = {
          0: { className: "x1v5yvga" },
          1: { className: "x1v5yvga x1f6kntn" },
        }[(k.theme === "small") << 0],
        pn = m.jsx(
          "div",
          babelHelpers.extends({}, mn, { "data-testid": void 0, children: W }),
        );
      return m.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        className: St.container,
        onFocus: cn,
        onMouseEnter: ve,
        onMouseLeave: Se,
        children: [
          sn,
          un,
          m.jsxs("div", {
            ref: Pe,
            className: St.inputWrapper,
            dir: dn,
            children: [
              Ht,
              rn,
              nn,
              ct() &&
                (le
                  ? m.jsx(o("WAWebFlex.react").FlexRow, {
                      grow: 1,
                      paddingBottom: 8,
                      children: m.jsx(r("WAWebUnstyledButton.react"), {
                        onClick: st,
                        xstyle: L.textAlign,
                        children: pn,
                      }),
                    })
                  : pn),
              m.jsxs(o("WAWebFlex.react").FlexRow, {
                columnGap: 8,
                children: [Kt, Rt],
              }),
            ],
          }),
          Yt,
          Jt,
        ],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    var k = E;
    ((l.TextInputCustomStyleThemes = R), (l.RichTextField = k));
  },
  226,
);
