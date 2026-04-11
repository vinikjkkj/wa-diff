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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(25),
        n = e.msg,
        a = e.ref,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMsgGetters").getGroupHistoryBundleMetadata]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(n.id, i),
        s = l[0],
        u = s == null ? void 0 : s.processState,
        p,
        f;
      (t[1] !== n || t[2] !== u
        ? ((p = function () {
            var e;
            u !==
              o("WAWebGroupHistoryMsgData.flow")
                .MessageHistoryBundleProcessState.NONE ||
              !o("WAWebMsgModelPropUtils").isTrusted(n.unsafe()) ||
              ((e = n.id) != null && e.fromMe) ||
              r("WAWebDownloadHistoryBundleAction")(n, u, {
                downloadEvenIfExpensive: !1,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.MSG_RENDER,
                isUserInitiated: !1,
              });
          }),
          (f = [n, u]),
          (t[1] = n),
          (t[2] = u),
          (t[3] = p),
          (t[4] = f))
        : ((p = t[3]), (f = t[4])),
        d(p, f));
      var g =
          u ===
            o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState
              .FAILED && m.error,
        C;
      t[5] !== g
        ? ((C = [m.messageBody, g]), (t[5] = g), (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== n || t[8] !== u
        ? ((b = o(
            "WAWebFormatMessageHistoryBundleBody",
          ).formatMessageHistoryBundleBody(n, u)),
          (t[7] = n),
          (t[8] = u),
          (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== n.id.fromMe || t[11] !== u
        ? ((v = h(u, n.id.fromMe)),
          (t[10] = n.id.fromMe),
          (t[11] = u),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== u ? ((S = y(u)), (t[13] = u), (t[14] = S)) : (S = t[14]);
      var R;
      t[15] !== n || t[16] !== u
        ? ((R = n.id.fromMe
            ? null
            : function () {
                _(n, u);
              }),
          (t[15] = n),
          (t[16] = u),
          (t[17] = R))
        : (R = t[17]);
      var L;
      return (
        t[18] !== a ||
        t[19] !== C ||
        t[20] !== b ||
        t[21] !== v ||
        t[22] !== S ||
        t[23] !== R
          ? ((L = c.jsx(
              o("WAWebSystemMessageWithSingleCTA.react")
                .SystemMessageWithSingleCTA,
              {
                xstyle: C,
                bodyText: b,
                ctaText: v,
                ctaXstyle: m.cta,
                icon: S,
                onClick: R,
                onclickRef: a,
                testid: void 0,
              },
            )),
            (t[18] = a),
            (t[19] = C),
            (t[20] = b),
            (t[21] = v),
            (t[22] = S),
            (t[23] = R),
            (t[24] = L))
          : (L = t[24]),
        L
      );
    }
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
