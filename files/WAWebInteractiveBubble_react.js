__d(
  "WAWebInteractiveBubble.react",
  [
    "WAWebBizGatingUtils",
    "WAWebBizSuspiciousLabel.react",
    "WAWebBloksWidgetErrorFallback.react",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebExpandableText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveFooterText",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveBloksWidget.react",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageCropping",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgModelPropUtils",
    "WAWebMsgPhoneNumbers",
    "WAWebMsgSelectors",
    "WAWebOrderStatus",
    "WAWebShowMessageActionFallbackErrorAction",
    "WAWebUISpacing",
    "isStringNullOrEmpty",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useCallback,
      d = {
        bubble: { width: "x1o095ql", maxWidth: "x193iq5w", $$css: !0 },
        footer: {
          display: "x1lliihq",
          fontSize: "x1nxh6w3",
          lineHeight: "xwn7fz2",
          overflowWrap: "x1mzt3pk",
          whiteSpace: "x126k92a",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.actions,
        a = t.displayAuthor,
        i = t.displayFooter,
        l = i === void 0 ? !0 : i,
        s = t.displayType,
        m = t.header,
        p = t.hideMeta,
        _ = t.minTextHeight,
        f = t.msg,
        g = o("WAWebMsgModelPropUtils").isTrusted(f.unsafe()),
        h = {
          selectable: g,
          dirMismatch:
            o("WAWebFrontendMsgGetters").getRtl(f) !== r("WAWebL10N").isRTL(),
          direction: o("WAWebFrontendMsgGetters").getDir(f),
          inferLinesDirection: !0,
        },
        y = o("WAWebFrontendMsgGetters").getText(f);
      if (
        f.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
        y != null
      ) {
        var C = o(
          "WAWebInAppSignupConfirmation",
        ).getInAppSignupConfirmationInfo(f);
        C != null &&
          (y = o("WAWebInAppSignupConfirmation").applyBoldToPromoCode(
            y,
            C.promoCode,
          ));
      }
      var b = r("isStringNullOrEmpty")(y)
          ? null
          : u.jsx(r("WAWebMessageSpacerText.react"), {
              msg: f.unsafe(),
              "data-id": f.id,
              spacer: f.carouselCards != null,
              children: u.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: y,
                textLimit: o("WAWebMsgGetters").getInitialPageSize(f),
                children: function (t) {
                  var e = t.textLimit;
                  return u.jsx(
                    o("WAWebEmojiText.react").EmojiText,
                    babelHelpers.extends({}, h, {
                      text: y,
                      formatters: o("WAWebFormatConfiguration").Conversation({
                        links: o("WAWebMsgLinks").getLinksFromMsg(
                          f.unsafe(),
                          e,
                        ),
                        phoneNumbers: o(
                          "WAWebMsgPhoneNumbers",
                        ).getPhoneNumbersFromMsg(f.unsafe()),
                        trusted: g,
                        selectable: g,
                        fromMe: f.id.fromMe,
                      }),
                      textLimit: e,
                      minTextHeight: _,
                      inlineblock: _ != null ? !0 : void 0,
                    }),
                  );
                },
              }),
            }),
        v = o("WAWebGetInteractiveFooterText").getInteractiveFooterText(f),
        S = o("WAWebOrderStatus").hasOrderStatusButton(f),
        R =
          l && v != null
            ? u.jsx(r("WAWebMessageSpacerText.react"), {
                msg: f.unsafe(),
                className: "x78zum5",
                spacer: S,
                children: u.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({}, h, {
                    text: v,
                    formatters: o("WAWebFormatConfiguration").Conversation({
                      links: o("WAWebMsgLinks").getFooterLinks(f.unsafe()),
                      phoneNumbers: o(
                        "WAWebMsgPhoneNumbers",
                      ).getFooterPhoneNumbersFromMsg(f.unsafe()),
                      selectable: g,
                      trusted: g,
                      fromMe: f.id.fromMe,
                    }),
                    xstyle: [d.footer, o("WAWebUISpacing").uiMargin.top6],
                  }),
                ),
              })
            : null,
        L =
          n != null &&
          n.length &&
          s !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
            ? u.jsx("div", {
                className: "xwib8y2 x7coems x1bjonze x9otpla",
                children: u.jsx(
                  o("WAWebMessageBubbleActions.react").BubbleActions,
                  {
                    direction: "vertical",
                    items: n.map(function (e) {
                      var t;
                      return {
                        testid: e.testid,
                        label: e.label,
                        onClick:
                          (t = e.onClick) != null
                            ? t
                            : function () {
                                return r(
                                  "WAWebShowMessageActionFallbackErrorAction",
                                )();
                              },
                        disabled: e.disabled,
                        Icon: e.Icon,
                      };
                    }),
                  },
                ),
              })
            : null,
        E = !!o("WAWebBizSuspiciousLabel.react").getSuspiciousLabel({
          msg: f.unsafe(),
          displayType: s,
        }),
        k =
          a !== !1
            ? !o("WAWebMsgGetters").getIsSentByMe(f) &&
              o("WAWebMsgGetters").getIsGroupMsg(f)
            : null,
        I = o("WAWebMsgSelectors").showForwarded(f) || k === !0 || E,
        T =
          f.bloksWidget != null &&
          o("WAWebBizGatingUtils").isBloksWidgetEnabled()
            ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "interactive-bloks-widget",
                fallback: r("WAWebBloksWidgetErrorFallback.react"),
                children: u.jsx(r("WAWebInteractiveBloksWidget.react"), {
                  bloksWidget: f.bloksWidget,
                }),
              })
            : null,
        D =
          f.isCarouselCard != null
            ? {
                width: o("WAWebMessageCropping").CAROUSEL_MEDIA_DIMS
                  .bubbleWidth,
              }
            : {},
        x = c(
          function (e) {
            var t = o("WAWebFrontendMsgGetters").getChat(f.unsafe());
            o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(
              t,
              f.unsafe(),
            ) &&
              o("WAWebMmSignalSharingUIUtils").manageMmSignalSharingBodyClick(
                e,
                t,
                f.unsafe(),
              );
          },
          [f],
        );
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: d.bubble,
        style: D,
        children: [
          u.jsxs(r("WAWebMessageTextBubble.react"), {
            msg: f,
            displayAuthor: a,
            hideMeta: p != null ? p : !1,
            children: [
              E
                ? u.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                    msg: f.unsafe(),
                  })
                : null,
              u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    p === !1 && o("WAWebUISpacing").uiMargin.bottom10,
                    I && o("WAWebUISpacing").uiMargin.top5,
                  ]),
                  { onClick: x, role: "none", children: [m, T, b, R] },
                ),
              ),
            ],
          }),
          L,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
