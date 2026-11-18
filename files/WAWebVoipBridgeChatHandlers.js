__d(
  "WAWebVoipBridgeChatHandlers",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebVoipEventConstants",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipOngoingTransferCalls",
    "WAWebVoipSendScreeningVoicemail",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 8e3,
      _ = {
        getTcToken: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.wid;
            if (!n.isUser())
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getTcToken: wid is not a user wid, wid domain: ",
                      "",
                    ])),
                  n.server,
                ),
                { tcToken: null }
              );
            try {
              var r = o("WAWebWidFactory").asUserWidOrThrow(n),
                a = yield o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({
                  callDestinationWid: r,
                }),
                i = o("WAWebChatCollection").ChatCollection.get(a);
              return (
                i == null &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getTcToken: chat not found, chat domain: ",
                        "",
                      ])),
                    n.server,
                  ),
                { tcToken: i == null ? void 0 : i.tcToken }
              );
            } catch (e) {
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getTcToken: get1x1CallLidOrPnDestination failed, error: ",
                      "",
                    ])),
                  e,
                ),
                { tcToken: null }
              );
            }
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        getOngoingCallInfo: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              t = self.performance.now() + p;
            yield o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
            var n = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.findOngoingCallActiveOnOtherSelfDevice();
            if (n == null) return f(Math.max(0, t - self.performance.now()));
            var r = n.id.remote,
              a = (
                (e = o("WAWebMsgGetters").getCallParticipants(n)) != null
                  ? e
                  : []
              ).map(function (e) {
                var t = e.participant;
                return t.toString();
              }),
              i = n.callCreator;
            return (
              a.length === 0 && i != null && a.push(i.toString()),
              {
                callId: n.id.id,
                isVideoCall: o("WAWebMsgGetters").getIsVideoCall(n),
                groupJid: r.isGroup() ? r.toString() : null,
                participantJids: a,
              }
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleMutedByOthers: function (t) {
          var e = t.muterJid;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleMutedByOthers muterJid=",
                "",
              ])),
            String(e),
          );
          var n = "";
          if (e != null) {
            var a = o("WAWebContactCollection").ContactCollection.get(e);
            a != null &&
              (n = o("WAWebFrontendContactGetters").getFormattedShortName(a));
          }
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallCollectionEvents
                .MUTED_BY_OTHERS,
            ),
            { name: n },
          );
        },
        sendScreeningVoicemail: function (t) {
          return o("WAWebVoipSendScreeningVoicemail").sendScreeningVoicemail(t);
        },
      };
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o(
              "WAWebVoipOngoingTransferCalls",
            ).waitForOngoingTransferEntryPoint(e);
          return n == null
            ? (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getOngoingCallInfo: no call active on another self device",
                  ])),
              ),
              null)
            : o(
                  "WAWebVoipTransferredCallRegistry",
                ).getLiveTransferredCallRootId(
                  (t = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : t.id,
                ) === n.rootCallId
              ? (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getOngoingCallInfo: 1:1 call already transferred here",
                    ])),
                ),
                null)
              : {
                  callId: n.rootCallId,
                  isVideoCall: n.isVideoCall,
                  groupJid: null,
                  participantJids: [n.peerWid.toString()],
                };
        })),
        g.apply(this, arguments)
      );
    }
    l.VoipBridgeChatHandlers = _;
  },
  98,
);
