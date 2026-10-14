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
            s,
            u,
            c = (t.text || "").trim();
          if (c === "") return null;
          var d =
              n != null
                ? n
                : o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            m = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            ),
            p = (a = n == null ? void 0 : n.isNewsletter()) != null ? a : !1,
            _ = void 0;
          p || (_ = o("WAWebLidStatusMigrationUtils").matWidConvert(m));
          var f = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: d,
              id: yield r("WAWebMsgKey").newId(),
              participant: _,
            }),
            g = {
              id: f,
              body: c,
              author: m,
              backgroundColor: (i = t.color) != null ? i : e,
              type: "chat",
              kind: o("WAWebMsgType").MsgKind.Chat,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: void 0,
              t: o("WATimeUtils").unixTime(),
              from: m,
              to: d,
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              font: (l = t.font) != null ? l : void 0,
              messageSecret: o(
                "WAWebMessagingGatingUtils",
              ).isReportingTokenSendingEnabled()
                ? self.crypto.getRandomValues(new Uint8Array(32))
                : null,
              canBeReshared: !1,
              forwardedNewsletterMessageInfo:
                (s = t.forwardedNewsletterMessageInfo) != null ? s : void 0,
              statusAttributions:
                (u = t.statusAttributions) != null ? u : void 0,
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
