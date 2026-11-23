__d(
  "WAWebNewsletterStatusCardTapAreas",
  ["WAWebNewsletterStatusCardLayout", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    var e = 1e4;
    function s(e, t) {
      var n,
        r,
        a,
        i = {
          newsletterJid: t.newsletterWid.toString(),
          serverMessageId: (n = t.serverMessageId) != null ? n : void 0,
          newsletterName: (r = t.newsletterName) != null ? r : void 0,
          contentType: o("WAWebProtobufsE2E.pb")
            .ContextInfo$ForwardedNewsletterMessageInfo$ContentType.UPDATE_CARD,
          accessibilityText: (a = t.accessibilityText) != null ? a : void 0,
        },
        l = {
          polygonVertices: u(e.card),
          shouldSkipConfirmation: !1,
          newsletter: i,
        },
        s = e.readMore;
      if (s == null) return [l];
      var c = {
        polygonVertices: u(s.tapArea),
        shouldSkipConfirmation: !0,
        newsletter: i,
      };
      return [c, l];
    }
    function u(e) {
      var t = e.height,
        n = e.width,
        r = e.x,
        o = e.y;
      return [c(r, o), c(r + n, o), c(r + n, o + t), c(r, o + t)];
    }
    function c(e, t) {
      return {
        x: d(e, o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.width),
        y: d(t, o("WAWebNewsletterStatusCardLayout").CARD_CANVAS.height),
      };
    }
    function d(t, n) {
      var r = Math.min(Math.max(t / n, 0), 1);
      return Math.round(r * e) / e;
    }
    l.default = s;
  },
  98,
);
