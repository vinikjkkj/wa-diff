__d(
  "WAWebMessageHistoryBundleMessage.react",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebDownloadHistoryBundleAction",
    "WAWebFormatMessageHistoryBundleBody",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReceiverUserJourneyLogger",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSystemMessageWithSingleCTA.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "fbs",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        messageBody: {
          display: "x78zum5",
          flexWrap: "x1a02dak",
          paddingTop: "x1gxa6cn",
          paddingBottom: "xa0aww2",
          columnGap: "x1trrmfo",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        error: { color: "xqnyt8g", $$css: !0 },
        cta: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function p(e) {
      var t = e.msg,
        n = e.ref,
        a = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getGroupHistoryBundleMetadata,
        ]),
        i = a[0],
        l = i == null ? void 0 : i.processState;
      return (
        d(
          function () {
            var e;
            l !==
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.NONE ||
              !o("WAWebMsgModelPropUtils").isTrusted(t.unsafe()) ||
              ((e = t.id) != null && e.fromMe) ||
              r("WAWebDownloadHistoryBundleAction")(t, l, {
                downloadEvenIfExpensive: !1,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: !1,
              });
          },
          [t, l],
        ),
        c.jsx(
          o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA,
          {
            xstyle: [
              m.messageBody,
              l ===
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED && m.error,
            ],
            bodyText: o(
              "WAWebFormatMessageHistoryBundleBody",
            ).formatMessageHistoryBundleBody(t, l),
            ctaText: h(l, t.id.fromMe),
            ctaXstyle: m.cta,
            icon: y(l),
            onClick: t.id.fromMe
              ? null
              : function () {
                  _(t, l);
                },
            onclickRef: n,
            testid: void 0,
          },
        )
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      return t ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .NONE ||
        t ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .FAILED
        ? f(e, t)
        : t ===
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.INJECTED ||
            t ===
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.INJECTED_PARTIAL
          ? g(e)
          : null;
    }
    function f(e, t) {
      (o(
        "WAWebGroupHistoryReceiverUserJourneyLogger",
      ).GroupHistoryReceiverUserJourneyLogger.downloadButtonClicked(
        e.id.remote.toJid(),
      ),
        r("WAWebDownloadHistoryBundleAction")(e, t, {
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .MSG_CLICK,
          isUserInitiated: !0,
        }));
    }
    function g(t) {
      o(
        "WAWebGroupHistoryReceiverUserJourneyLogger",
      ).GroupHistoryReceiverUserJourneyLogger.viewButtonClicked(
        t.id.remote.toJid(),
      );
      var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        r = n.msgs.findFirst(function (e) {
          var n = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
          return n != null && n.id === t.id.id;
        });
      r
        ? o("WAWebCmd")
            .Cmd.openChatAt({
              chat: n,
              msgContext: {
                collection: r.getMsgChunk() || n.msgs,
                msg: r,
                key: r.id,
                highlightMsg: !0,
              },
            })
            .catch(function () {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] open chat at first bundle msg failed",
                  ])),
              );
            })
        : o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "No message history to view"),
            }),
          );
    }
    function h(e, t) {
      return t
        ? null
        : e ===
            o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .NONE
          ? r("fbs")._(/*BTDS*/ "Download")
          : e ===
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED ||
              e ===
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.INJECTED_PARTIAL
            ? r("fbs")._(/*BTDS*/ "View")
            : e ===
                o("WAWebGroupHistoryMsgData.flow")
                  .MessageHistoryBundleProcessState.FAILED
              ? r("fbs")._(/*BTDS*/ "Retry")
              : null;
    }
    function y(e) {
      return e ===
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
          .DOWNLOADING ||
        e ===
          o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
            .PROCESSING
        ? c.jsx(r("WDSSpinner.react"), { size: 16 })
        : e ===
            o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .FAILED
          ? c.jsx(r("WDSIconIcError.react"), { height: 16 })
          : null;
    }
    l.default = p;
  },
  226,
);
