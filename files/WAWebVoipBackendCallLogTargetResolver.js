__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSyncContactJob",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipCallLogMessageTarget",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l = t.callCreatorWid,
            s = t.callId,
            u = t.groupJid,
            c = t.isCallLink,
            d = t.peerWid,
            p = t.participants,
            f = p === void 0 ? [] : p,
            g,
            h,
            y = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            C = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(s),
            b = yield _({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(
                (n = C == null ? void 0 : C.rootCallCreatorWid) != null ? n : l,
              ),
            }),
            v = o("WAWebUserUtils").isMeAccount(b),
            S = f.filter(function (e) {
              return e != null && !o("WAWebUserUtils").isMeAccount(e);
            });
          if (u != null) ((g = u), (h = b));
          else if (!v) g = b;
          else {
            var R = S.length === 1 ? S[0] : null;
            c !== !0 && R != null && !(yield m(R))
              ? (g = yield _({
                  callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(R),
                }))
              : c !== !0 && d != null && !(yield m(d))
                ? (g = yield _({
                    callDestinationWid:
                      o("WAWebWidFactory").asUserWidOrThrow(d),
                  }))
                : (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] getCallLogTargetDetails: msg -> self chat",
                      ])),
                  ),
                  (g = b),
                  (y =
                    S.length > 0 || d != null
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callDestinationWid,
            n = e.groupJid;
          if (
            n != null ||
            (o("WAWebRuntimeEnvironmentUtils").isWorker() ||
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            !t.isRegularUser())
          )
            return t;
          var r = o("WAWebLidMigrationUtils").toUserLid(t);
          if (
            (r == null &&
              (yield o("WAWebSyncContactJob").syncContactListJob(
                [t],
                !0,
                "query",
              ),
              (r = o("WAWebLidMigrationUtils").toUserLid(t))),
            r == null)
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log target: no LID after contact sync",
                  ])),
              ),
              t
            );
          var a = yield o(
            "WAWebMessageProcessUtils",
          ).selectChatForOneOnOneMessage({ lid: r });
          return o("WAWebWidFactory").asUserWidOrThrow(a.chatId);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id.remote;
          if (!t.isRegularUser()) return e;
          var n = o("WAWebLidMigrationUtils").toUserLid(
            o("WAWebWidFactory").asUserWidOrThrow(t),
          );
          if (n == null) return e;
          var r = yield o(
              "WAWebMessageProcessUtils",
            ).selectChatForOneOnOneMessage({ lid: n }),
            a = r.chatId;
          return o("WAWebVoipCallLogMessageTarget").withCallLogChatId(e, a);
        })),
        h.apply(this, arguments)
      );
    }
    ((l.getCallLogTargetDetails = c),
      (l.get1x1CallLidOrPnDestination = _),
      (l.resolveCallLogMessageTarget = g));
  },
  98,
);
