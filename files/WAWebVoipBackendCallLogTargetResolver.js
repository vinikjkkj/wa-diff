__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebFindChat",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
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
          var n = t.callCreatorWid,
            a = t.callId,
            i = t.groupJid,
            l = t.isCallLink,
            s = t.peerWid,
            u = t.participants,
            c = u === void 0 ? [] : u,
            m,
            _,
            f = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            g = yield p({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(n),
            }),
            h = o("WAWebUserPrefsMeUser").isMeAccount(g),
            y = c.filter(function (e) {
              return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
          if (i != null) ((m = i), (_ = g));
          else if (!h) m = g;
          else {
            var C = y.length === 1 ? y[0] : null;
            l !== !0 && C != null && !(yield d(C))
              ? (m = yield p({
                  callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(C),
                }))
              : l !== !0 && s != null && !(yield d(s))
                ? (m = yield p({
                    callDestinationWid:
                      o("WAWebWidFactory").asUserWidOrThrow(s),
                  }))
                : (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] getCallLogTargetDetails: msg -> self chat",
                      ])),
                  ),
                  (m = g),
                  (f =
                    y.length > 0 || s != null
                      ? o("WAWebViewMode.flow").ViewModeType
                          .CALL_LOG_AD_HOC_GROUP_CALL
                      : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
          }
          return {
            msgKeyId: a != null ? a : yield r("WAWebMsgKey").newId(),
            fromMe: h,
            callCreatorUserWid: g,
            chatId: m,
            participant: _,
            viewMode: f,
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
            r = t,
            a =
              !r.isLid() &&
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated(),
            i = !n && (r.isLid() || a);
          if (i) {
            o("WAWebRuntimeEnvironmentUtils").isWorker() ||
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced());
            var l = yield o("WAWebFindChat").findOrCreateLatestChat(
                t,
                "voipCallLog",
              ),
              s = l.chat;
            r = o("WAWebWidFactory").asUserWidOrThrow(s.id);
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
