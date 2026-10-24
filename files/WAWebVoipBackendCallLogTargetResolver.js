__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebFindChat",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l = t.callCreatorWid,
            s = t.callId,
            u = t.groupJid,
            c = t.isCallLink,
            m = t.peerWid,
            _ = t.participants,
            f = _ === void 0 ? [] : _,
            g,
            h,
            y = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            C = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(s),
            b = yield p({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(
                (n = C == null ? void 0 : C.rootCallCreatorWid) != null ? n : l,
              ),
            }),
            v = o("WAWebUserPrefsMeUser").isMeAccount(b),
            S = f.filter(function (e) {
              return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
          if (u != null) ((g = u), (h = b));
          else if (!v) g = b;
          else {
            var R = S.length === 1 ? S[0] : null;
            c !== !0 && R != null && !(yield d(R))
              ? (g = yield p({
                  callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(R),
                }))
              : c !== !0 && m != null && !(yield d(m))
                ? (g = yield p({
                    callDestinationWid:
                      o("WAWebWidFactory").asUserWidOrThrow(m),
                  }))
                : (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] getCallLogTargetDetails: msg -> self chat",
                      ])),
                  ),
                  (g = b),
                  (y =
                    S.length > 0 || m != null
                      ? o("WAWebViewMode.flow").ViewModeType
                          .CALL_LOG_AD_HOC_GROUP_CALL
                      : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
          }
          return {
            msgKeyId:
              (a = (i = C == null ? void 0 : C.rootCallId) != null ? i : s) !=
              null
                ? a
                : yield r("WAWebMsgKey").newId(),
            fromMe: v,
            callCreatorUserWid: b,
            chatId: g,
            participant: h,
            viewMode: y,
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isUser()) return !1;
          try {
            var t;
            return o("WAWebContactExternalUserState").isGuestUser(
              (t = yield o("WAWebApiContact").getContactRecord(
                o("WAWebWidFactory").asUserWidOrThrow(e),
              )) == null
                ? void 0
                : t.externalUserState,
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] isGuest: contact read failed, treating as non-guest",
                  ])),
              ),
              !1
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callDestinationWid,
            n = e.groupJid,
            r = t;
          if (!n) {
            o("WAWebRuntimeEnvironmentUtils").isWorker() ||
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced());
            var a = yield o("WAWebFindChat").findOrCreateLatestChat(
                t,
                "voipCallLog",
              ),
              i = a.chat;
            r = o("WAWebWidFactory").asUserWidOrThrow(i.id);
          }
          return r;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getCallLogTargetDetails = u), (l.get1x1CallLidOrPnDestination = p));
  },
  98,
);
