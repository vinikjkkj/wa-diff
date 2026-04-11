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
            s = (t.text || "").trim();
          if (s === "") return null;
          var u =
              n != null
                ? n
                : o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            c = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            ),
            d = (a = n == null ? void 0 : n.isNewsletter()) != null ? a : !1,
            m = void 0;
          d || (m = o("WAWebLidStatusMigrationUtils").matWidConvert(c));
          var p = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: u,
              id: yield r("WAWebMsgKey").newId(),
              participant: m,
            }),
            _ = {
              id: p,
              body: s,
              author: c,
              backgroundColor: (i = t.color) != null ? i : e,
              type: "chat",
              kind: o("WAWebMsgType").MsgKind.Chat,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: void 0,
              t: o("WATimeUtils").unixTime(),
              from: c,
              to: u,
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
            };
          return _;
        })),
        u.apply(this, arguments)
      );
    }
    l.createTextStatusMsgData = s;
  },
  98,
);
