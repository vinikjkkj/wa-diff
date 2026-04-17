__d(
  "WAWebStatusMsgDataUtils",
  [
    "WAJids",
    "WATimeUtils",
    "WAWebAck",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4286237861;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l,
            s,
            u = (t.text || "").trim();
          if (u === "") return null;
          var c =
              n != null
                ? n
                : o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            d = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMeUser(),
            ),
            m = (a = n == null ? void 0 : n.isNewsletter()) != null ? a : !1,
            p = void 0;
          m || (p = o("WAWebLidStatusMigrationUtils").matWidConvert(d));
          var _ = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: c,
              id: yield r("WAWebMsgKey").newId(),
              participant: p,
            }),
            f = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled()
              ? yield r("WAWebUserPrefsStatus").getStatusReshareAllowed()
              : !1,
            g = {
              id: _,
              body: u,
              author: d,
              backgroundColor: (i = t.color) != null ? i : e,
              type: "chat",
              kind: o("WAWebMsgType").MsgKind.Chat,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: void 0,
              t: o("WATimeUtils").unixTime(),
              from: d,
              to: c,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              font: (l = t.font) != null ? l : void 0,
              messageSecret: o(
                "WAWebMessagingGatingUtils",
              ).isReportingTokenSendingEnabled()
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : null,
              cannotBeRanked: o(
                "WAWebStatusGatingUtils",
              ).canCheckStatusRankingPosterGating(),
              canBeReshared: f,
              statusAttributions:
                (s = t.statusAttributions) != null ? s : void 0,
            };
          return g;
        })),
        u.apply(this, arguments)
      );
    }
    l.createTextStatusMsgData = s;
  },
  98,
);
