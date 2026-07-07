__d(
  "WAWebVerifiedNameBridgeApi",
  [
    "WAWebBizCreateBizStateChangeNotificationMsgsAction",
    "WAWebContactCollection",
    "WAWebJidToWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      generateAndUpdatePrivacySystemMessages: function (t) {
        var e = t.currentState,
          n = t.previousState,
          r = t.shouldRunMATonWid,
          a = t.userJid;
        return o(
          "WAWebBizCreateBizStateChangeNotificationMsgsAction",
        ).createBizStateChangeNotificationMsgs({
          currentState: e,
          previousState: n,
          shouldRunMATonWid: r,
          wid: o("WAWebWidFactory").createUserWidOrThrow(a),
        });
      },
      applyBusinessRemoval: function (t) {
        var e = t.wid,
          n = o("WAWebJidToWid").userJidToUserWid(e),
          r = o("WAWebContactCollection").ContactCollection.get(n),
          a = r
            ? { isBusiness: r.isBusiness, privacyMode: r.privacyMode }
            : { isBusiness: !1 };
        return (
          r != null &&
            r.set({ isBusiness: !1, verifiedLevel: null, verifiedName: null }),
          o(
            "WAWebBizCreateBizStateChangeNotificationMsgsAction",
          ).createBizStateChangeNotificationMsgs({
            currentState: { isBusiness: !1 },
            previousState: a,
            wid: n,
          })
        );
      },
    };
    l.VerifiedNameBridgeApiType = e;
  },
  98,
);
