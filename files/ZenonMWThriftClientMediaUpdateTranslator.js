__d(
  "ZenonMWThriftClientMediaUpdateTranslator",
  [
    "MultiwayCommonTypes",
    "ZenonMWCommonUtils",
    "ZenonMWThriftResponseStatusCodeUtils",
    "ZenonMWThriftTranslatorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageBody,
        r = e.messageHeader,
        a = n.clientMediaUpdateResponse,
        i = r.responseStatusCode,
        l = r.responseSubCode,
        s = r.retryAfterMsec;
      if (a) {
        var u = a.answer,
          c = a.mediaStatus,
          d = u != null && c != null;
        o("ZenonMWThriftTranslatorUtils").addThriftStateStoreSignalingEvents(
          a.stateStore,
          t,
          !1,
          d,
        );
        var m = o("ZenonMWThriftTranslatorUtils").fetchE2eeServerState(
          a.stateStore,
        );
        if (d) {
          var p,
            _ = (p = u == null ? void 0 : u.sdpString) != null ? p : "",
            f = o("ZenonMWThriftTranslatorUtils").toZenonMediaStatesFromThrift(
              c,
            ),
            g = {
              ackMessageId: r.transactionId,
              eventName: "localSdpResponse",
              hasAnswerInJoinResponse: !1,
              source: "clientMediaUpdate",
            },
            h = a.renegotiationOffer,
            y = null;
          h != null &&
            h.sdpString != null &&
            (y = {
              sdp: h.sdpString,
              type: "offer",
              version: o("ZenonMWCommonUtils").getSdpVersion(h.sdpString),
            });
          var C = {
            e2eeServerState: m,
            eventName: "remoteSdpRequest",
            mediaPath: o("ZenonMWThriftTranslatorUtils").fromThriftMediaPath(
              a.mediaPath,
            ),
            mediaStates: f,
            negotiateType: !1,
            renegotiationOffer: y,
            sdp: {
              sdp: _,
              type: "answer",
              version: o("ZenonMWCommonUtils").getSdpVersion(_),
            },
            sdpOriginLocalId: a.sdpOriginLocalId,
            source: "clientMediaUpdateResponse",
          };
          (t.push(g), t.push(C));
        }
        var b = {
          ackMessageId: r.transactionId,
          acknowledgedVersion: Number(a.currentVersion),
          eventName: "mediaUpdateResponse",
          retryAfter: s != null ? s : 0,
        };
        (i != null &&
          (b.responseStatusCode = o(
            "ZenonMWThriftResponseStatusCodeUtils",
          ).getResponseStatusCodeFromThrift(i)),
          l != null &&
            (b.responseSubCode = o(
              "ZenonMWThriftResponseStatusCodeUtils",
            ).getResponseSubCodeFromThrift(l)),
          t.push(b));
      }
      return t;
    }
    function s(e, t, n) {
      var r = {
        fromVersion: String(t.version),
        mediaUpdates: [
          {
            mediaStatus: o(
              "ZenonMWThriftTranslatorUtils",
            ).toMWThriftMediaStatus(t),
            mediaStatusEx: o(
              "ZenonMWThriftTranslatorUtils",
            ).toThriftMWMediaStatusEx(t),
          },
        ],
        toVersion: String(t.version),
      };
      return (
        n !== void 0 && (r.offer = { sdpString: n.sdp }),
        o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
          header: e,
          rtcMessageBody: { clientMediaUpdateRequest: r },
          type: o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE,
        })
      );
    }
    ((l.fromThriftClientMediaUpdateResponse = e),
      (l.toThriftClientMediaUpdateRequest = s));
  },
  98,
);
