__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
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
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.callCreatorWid,
            a = t.callId,
            i = t.groupJid,
            l = t.isCallLink,
            s = t.peerWid,
            u = t.participants,
            d = u === void 0 ? [] : u,
            m,
            p,
            _ = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            f = yield c({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(n),
            }),
            g = o("WAWebUserPrefsMeUser").isMeAccount(f),
            h = d.filter(function (e) {
              return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
          if (i != null) ((m = i), (p = f));
          else if (!g) m = f;
          else if (h.length === 1 && l !== !0) {
            var y = h[0];
            m = yield c({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(y),
            });
          } else
            s != null
              ? (m = yield c({
                  callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(s),
                }))
              : (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] getCallLogTargetDetails: msg -> self chat",
                    ])),
                ),
                (m = f),
                (_ =
                  h.length > 0
                    ? o("WAWebViewMode.flow").ViewModeType
                        .CALL_LOG_AD_HOC_GROUP_CALL
                    : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
          return {
            msgKeyId: a != null ? a : yield r("WAWebMsgKey").newId(),
            fromMe: g,
            callCreatorUserWid: f,
            chatId: m,
            participant: p,
            viewMode: _,
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        d.apply(this, arguments)
      );
    }
    ((l.getCallLogTargetDetails = s), (l.get1x1CallLidOrPnDestination = c));
  },
  98,
);
