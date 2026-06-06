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
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4286237861;
    async function s(t, n) {
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
          o("WAWebUserPrefsMeUser").getMeUser(),
        ),
        p = (a = n == null ? void 0 : n.isNewsletter()) != null ? a : !1,
        _ = void 0;
      p || (_ = o("WAWebLidStatusMigrationUtils").matWidConvert(m));
      var f = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: d,
          id: await r("WAWebMsgKey").newId(),
          participant: _,
        }),
        g = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled()
          ? await r("WAWebUserPrefsStatus").getStatusReshareAllowed()
          : !1,
        h = {
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
          canBeReshared: g,
          forwardedNewsletterMessageInfo:
            (s = t.forwardedNewsletterMessageInfo) != null ? s : void 0,
          statusAttributions: (u = t.statusAttributions) != null ? u : void 0,
        };
      return h;
    }
    l.createTextStatusMsgData = s;
  },
  98,
);
