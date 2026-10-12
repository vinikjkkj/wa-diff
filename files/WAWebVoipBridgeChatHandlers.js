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
      m = {
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
            var e;
            yield o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
            var t = o(
              "WAWebVoipOngoingCallCollection",
            ).WAWebVoipOngoingCallCollection.findOngoingCallActiveOnOtherSelfDevice();
            if (t == null)
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getOngoingCallInfo: no call active on another self device",
                    ])),
                ),
                null
              );
            var n = t.id.remote,
              r = (
                (e = o("WAWebMsgGetters").getCallParticipants(t)) != null
                  ? e
                  : []
              ).map(function (e) {
                var t = e.participant;
                return t.toString();
              }),
              a = t.callCreator;
            return (
              r.length === 0 && a != null && r.push(a.toString()),
              {
                callId: t.id.id,
                isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
                groupJid: n.isGroup() ? n.toString() : null,
                participantJids: r,
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
      };
    l.VoipBridgeChatHandlers = m;
  },
  98,
);
