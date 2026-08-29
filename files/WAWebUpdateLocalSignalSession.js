__d(
  "WAWebUpdateLocalSignalSession",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBroadcastSenderKeyManager",
    "WAWebChatCollection",
    "WAWebProcessRetryKeyBundle",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = n.from,
            l = n.keyBundle,
            c = n.offline,
            d = n.originalMsgId,
            m = n.participant,
            p = n.regId,
            _ = n.retryCount,
            f = m || i,
            g = a != null ? a : o("WAWebSessionScope").SessionScope.DEFAULT;
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "updateLocalSignalSession: retryCount: ",
                  ", offline: ",
                  ", has keyBundle: ",
                  "",
                ])),
              _,
              c.toString(),
              (!!l).toString(),
            ),
            t.isGroup())
          ) {
            var h = o("WAWebChatCollection").ChatCollection.get(t);
            h &&
              f &&
              o("WAWebApiParticipantStore").markForgetSenderKey(h.id, [f]);
          }
          (t.isStatus() &&
            f &&
            (yield r("WAWebUserPrefsStatus").markForgetStatusSenderKey([f])),
            t.isBroadcastList() &&
              f &&
              o("WAWebBroadcastSenderKeyManager").markForgetBroadcastSenderKey(
                o("WAWebWidFactory").createDeviceWidFromWidOrThrow(f),
                t.toString(),
              ));
          var y = o("WAWebWidFactory").asUserWidOrThrow(f),
            C = yield o("WAWebSignal").Session.getRemoteRegId(f, g);
          if (o("WAWebUserPrefsMeUser").isMeAccount(y) && C !== p)
            throw r("err")(
              "updateLocalSignalSession: detect registration Id change remote: " +
                p +
                ", local: " +
                String(C) +
                " for peer device",
            );
          var b = t.isUser() && !o("WAWebUserPrefsMeUser").isMeAccount(y),
            v = yield o("WAWebProcessRetryKeyBundle").processKeyBundle({
              is1on1: b,
              keyBundle: l,
              offline: c,
              remoteRegId: p,
              requester: f,
              savedRegId: C,
              sessionScope: g,
            });
          v ||
            (C != null &&
              C !== p &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateLocalSignalSession: delete session because reg does not match, saved: ",
                    ", received: ",
                    "",
                  ])),
                C,
                p,
              ),
              yield o("WAWebSignal").Session.deleteRemoteSession(f)));
          var S = 2;
          if (_ === S)
            return o("WAWebSignal").Session.saveSessionBaseKey(f, d, g);
          if (_ > S) {
            var R = yield o("WAWebSignal").Session.hasSameBaseKey(f, d, g);
            if (R) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "updateLocalSignalSession: delete local session due to same base key",
                  ])),
              );
              var L =
                g === o("WAWebSessionScope").SessionScope.STATUS ? g : void 0;
              return o("WAWebSignal").Session.deleteRemoteSession(f, L);
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.updateLocalSignalSession = c;
  },
  98,
);
