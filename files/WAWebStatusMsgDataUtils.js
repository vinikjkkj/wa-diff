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
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled()
            ? yield r("WAWebUserPrefsStatus").getStatusReshareAllowed()
            : !1;
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l,
            u,
            c,
            d = (t.text || "").trim();
          if (d === "") return null;
          var m =
              n != null
                ? n
                : o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            p = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            ),
            _ = (a = n == null ? void 0 : n.isNewsletter()) != null ? a : !1,
            f = void 0;
          _ || (f = o("WAWebLidStatusMigrationUtils").matWidConvert(p));
          var g = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: m,
              id: yield r("WAWebMsgKey").newId(),
              participant: f,
            }),
            h = yield s(),
            y = {
              id: g,
              body: d,
              author: p,
              backgroundColor: (i = t.color) != null ? i : e,
              type: "chat",
              kind: o("WAWebMsgType").MsgKind.Chat,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: void 0,
              t: o("WATimeUtils").unixTime(),
              from: p,
              to: m,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              font: (l = t.font) != null ? l : void 0,
              messageSecret: o(
                "WAWebMessagingGatingUtils",
              ).isReportingTokenSendingEnabled()
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : null,
              canBeReshared: h,
              forwardedNewsletterMessageInfo:
                (u = t.forwardedNewsletterMessageInfo) != null ? u : void 0,
              statusAttributions:
                (c = t.statusAttributions) != null ? c : void 0,
            };
          return y;
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getCanBeResharedForNewStatus = s), (l.createTextStatusMsgData = c));
  },
  98,
);
