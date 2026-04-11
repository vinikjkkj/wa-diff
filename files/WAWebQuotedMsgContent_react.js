__d(
  "WAWebQuotedMsgContent.react",
  [
    "fbt",
    "WACommonTaskScheduler",
    "WANullthrows",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBizOrderPreview.react",
    "WAWebChatMsgSymbol.react",
    "WAWebClock",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgType",
    "WAWebPaymentType.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebServerPropConstants",
    "WAWebSticker.react",
    "WAWebViewMode.flow",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcHelp.react",
    "isNonZeroNumber",
    "promiseDone",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      "use no forget";
      var t = e.excludeSymbol,
        n = t === void 0 ? !1 : t,
        a = e.rootMsg,
        i = e.theme,
        l = e.msg,
        d = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          l.unsafe(),
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
        );
      if (
        (a &&
          (l.unsafe().fromQuotedMsg || o("WAWebMsgGetters").getIsEdited(l)) &&
          (l = r("WANullthrows")(
            o("WAWebQuotedMsgModelUtils").createQuotedMsgObj(a.unsafe()),
          )),
        a != null &&
          a.selectedCarouselCardIndex != null &&
          l.carouselCards != null)
      ) {
        var m = l.carouselCards.at(a.selectedCarouselCardIndex);
        m != null && (l = m.safe());
      }
      var p = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (c(function () {
        (l.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
          r("promiseDone")(
            l.downloadMedia({
              downloadEvenIfExpensive: !1,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .MSG_RENDER,
              isUserInitiated: !1,
            }),
          ),
          l.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            l.isVcardOverMmsDocument &&
            (!l.mediaData || !l.mediaData.mediaBlob) &&
            o("WAWebMsgModelPropUtils").isTrusted(l.unsafe()) &&
            l.size <=
              o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB *
                1024 &&
            r("promiseDone")(
              l
                .downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.MSG_RENDER,
                  isUserInitiated: !1,
                })
                .then(function () {
                  return o("WAWebABProps").getABPropConfigValue(
                    "wmi_worker_scheduler_web",
                  )
                    ? r("WACommonTaskScheduler").yield()
                    : o("WAPromiseDelays").releaseToEventLoop();
                }),
            ));
      }, []),
        o("useWAWebListener").useListener(
          l.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            l.mediaData &&
            l.isVcardOverMmsDocument
            ? l.mediaData
            : null,
          "change:parsedVcards",
          function () {
            p();
          },
        ));
      var _ = function () {
          return l.downloadMedia({
            downloadEvenIfExpensive: !1,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .MSG_RENDER,
            isUserInitiated: !1,
          });
        },
        f = [];
      (o("WAWebMsgGetters").getIsQuestion(l) &&
        f.push(
          u.jsx(
            r("WAWebChatMsgSymbol.react"),
            {
              msg: l.unsafe(),
              overrideIcon: u.jsx(r("WDSIconIcHelp.react"), {
                width: 18,
                height: 20,
              }),
            },
            "question-symbol",
          ),
        ),
        !n &&
          o("WAWebMsgModelPropUtils").hasSymbol(l.unsafe()) &&
          l.type !== o("WAWebMsgType").MSG_TYPE.STICKER &&
          l.type !== o("WAWebMsgType").MSG_TYPE.ORDER &&
          f.push(
            u.jsx(
              r("WAWebChatMsgSymbol.react"),
              { msg: l.unsafe(), viewOnceStatic: !0 },
              "msg-symbol",
            ),
          ),
        ((l.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
          !l.isGif &&
          !l.caption &&
          !l.isViewOnce) ||
          l.type === o("WAWebMsgType").MSG_TYPE.AUDIO) &&
          f.push(o("WAWebClock").Clock.durationStr(Number(l.duration)) + " "));
      var g = o("WAWebFormatConfiguration").QuotedMention({
        mentions: l.mentionMap(),
        groupMentions: l.groupMentionMap(),
      });
      if (
        l.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        l.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        l.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        l.type === o("WAWebMsgType").MSG_TYPE.PTT ||
        l.isFromTemplate ||
        l.isDynamicReplyButtonsMsg
      ) {
        var h, y;
        if (
          (h = o("WAWebFrontendMsgGetters").getAsViewOnce(l)) != null &&
          h.isViewOnce
        )
          switch (l.type) {
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
              y = s._(/*BTDS*/ "Photo");
              break;
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
              y = s._(/*BTDS*/ "Video");
              break;
            case o("WAWebMsgType").MSG_TYPE.PTT:
              y = s._(/*BTDS*/ "Voice message");
              break;
          }
        else
          y =
            l.isFromTemplate &&
            l.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
            l.title
              ? "*" + l.title + "*\n" + l.body
              : r("WAWebFormatMsgText")({
                  msg: l.unsafe(),
                  associatedMessages: d,
                  options: { unformat: !1 },
                });
        f.push(
          u.jsx(
            o("WAWebEmojiText.react").EmojiText,
            {
              selectable: !0,
              formatters: g,
              className: "quoted-mention",
              text: y,
              textLimit: o("WAWebMsgGetters").getInitialPageSize(l),
              direction: "auto",
            },
            "status",
          ),
        );
      } else if (l.type === o("WAWebMsgType").MSG_TYPE.STICKER) {
        var C = e.theme === "composeBox" ? "composeBoxQuoted" : "quoted";
        f.push(
          u.jsx(
            r("WAWebSticker.react"),
            { mediaData: l.mediaData, theme: C, downloadMedia: _ },
            "sticker",
          ),
        );
      } else
        l.type === o("WAWebMsgType").MSG_TYPE.PAYMENT
          ? (o("isNonZeroNumber").isNonZeroNumber(l.paymentAmount1000) &&
              l.paymentCurrency) ||
            l.subtype === "invite"
            ? f.push(
                u.jsx(
                  r("WAWebPaymentType.react"),
                  {
                    msgKey: l.id,
                    subtype: l.subtype,
                    receiverJid: l.paymentMessageReceiverJid,
                    isQuoted: !0,
                  },
                  "payment",
                ),
              )
            : f.push(s._(/*BTDS*/ "Payment message \u2022 Amount unavailable"))
          : l.type === o("WAWebMsgType").MSG_TYPE.ORDER
            ? f.push(
                u.jsx(
                  o("WAWebBizOrderPreview.react").OrderDescription,
                  { msg: l.unsafe(), showMessage: !0 },
                  "order",
                ),
              )
            : f.push(
                u.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  {
                    selectable: !0,
                    formatters: g,
                    className: "quoted-mention",
                    text: o("WAWebQuotedMsgUtils").formatQuotedMsg(l),
                    preformatted:
                      l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
                      (l.nativeFlowName ===
                        r("WAWebInteractiveMessagesNativeFlowName")
                          .ORDER_DETAILS ||
                        l.nativeFlowName ===
                          r("WAWebInteractiveMessagesNativeFlowName")
                            .PAYMENT_INFO),
                    textLimit: o("WAWebMsgGetters").getInitialPageSize(l),
                    direction: "auto",
                  },
                  "status",
                ),
              );
      var b = i === "conversation" || i === "starred" ? "button" : null;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x104kibb x1ul5b45 x6ikm8r x10wlt62 x1ezpfd3 x1n6pog2 xhslqc4 xlyipyv xj0a0fe x126k92a x1h7i4cw x1ua5tub",
            },
            2: {
              className:
                "x104kibb x6ikm8r x10wlt62 x1ezpfd3 x1n6pog2 xhslqc4 xlyipyv xj0a0fe x126k92a x1h7i4cw x1ua5tub x18wx58x",
            },
            1: {
              className:
                "x104kibb x1ul5b45 x6ikm8r x10wlt62 x1ezpfd3 x1n6pog2 xhslqc4 xlyipyv xj0a0fe x126k92a x1ua5tub xh0615m",
            },
            3: {
              className:
                "x104kibb x6ikm8r x10wlt62 x1ezpfd3 x1n6pog2 xhslqc4 xlyipyv xj0a0fe x126k92a x1ua5tub x18wx58x xh0615m",
            },
          }[
            ((e.theme === "composeBox") << 1) | ((e.theme === "questions") << 0)
          ],
          { dir: o("WAWebFrontendMsgGetters").getDir(l), role: b, children: f },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
