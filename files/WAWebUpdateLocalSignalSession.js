__d(
  "WAWebUpdateLocalSignalSession",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBroadcastSenderKeyManager",
    "WAWebChatCollection",
    "WAWebProcessRetryKeyBundle",
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
            f = m || i;
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
            var g = o("WAWebChatCollection").ChatCollection.get(t);
            g &&
              f &&
              o("WAWebApiParticipantStore").markForgetSenderKey(g.id, [f]);
          }
          (t.isStatus() &&
            f &&
            r("WAWebUserPrefsStatus").markForgetStatusSenderKey([f]),
            t.isBroadcastList() &&
              f &&
              o("WAWebBroadcastSenderKeyManager").markForgetBroadcastSenderKey(
                o("WAWebWidFactory").createDeviceWidFromWidOrThrow(f),
                t.toString(),
              ));
          var h = yield o("WAWebSignal").Session.getRemoteRegId(f);
          if (
            o("WAWebUserPrefsMeUser").isMeAccount(
              o("WAWebWidFactory").asUserWidOrThrow(f),
            ) &&
            h !== p
          )
            throw r("err")(
              "updateLocalSignalSession: detect registration Id change remote: " +
                p +
                ", local: " +
                String(h) +
                " for peer device",
            );
          var y = yield o("WAWebProcessRetryKeyBundle").processKeyBundle(
            l,
            f,
            p,
            h,
            c,
            a,
          );
          y ||
            (h != null &&
              h !== p &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateLocalSignalSession: delete session because reg does not match, saved: ",
                    ", received: ",
                    "",
                  ])),
                h,
                p,
              ),
              yield o("WAWebSignal").Session.deleteRemoteSession(f)));
          var C = 2;
          if (_ === C) return o("WAWebSignal").Session.saveSessionBaseKey(f, d);
          if (_ > C) {
            var b = yield o("WAWebSignal").Session.hasSameBaseKey(f, d);
            if (b)
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "updateLocalSignalSession: delete local session due to same base key",
                    ])),
                ),
                o("WAWebSignal").Session.deleteRemoteSession(f)
              );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.updateLocalSignalSession = c;
  },
  98,
);
