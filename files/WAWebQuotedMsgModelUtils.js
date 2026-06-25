__d(
  "WAWebQuotedMsgModelUtils",
  [
    "WALogger",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = c(e);
      return t ? o("WAWebMsgGetters").getIsSentByMe(t) : !1;
    }
    function c(t) {
      var n = o("WAWebStateUtils").unproxy(t);
      if (n.quotedMsgKey == null) {
        try {
          var r = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(n);
          r !== "missing-stanza-id" && (n.quotedMsgKey = r);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to create quoted msg key",
                ])),
            )
            .sendLogs("qmk-fail");
        }
        if (n.quotedMsgKey == null) return null;
      }
      if (!n.quotedMsg && !n.paymentRequestMessageKey) return null;
      var a = n.getCollection(),
        i = n.quotedMsgKey;
      if (i) {
        var l = a.get(i);
        if (l) return l.safe();
        var s = o("WAWebLidMigrationUtils").getAlternateMsgKey(i);
        if (s) {
          var u = a.get(s);
          if (u) return u.safe();
        }
      }
      var c;
      return (
        n.quotedMsg ? (c = d(n)) : n.paymentRequestMessageKey && (c = m(n)),
        c == null
          ? null
          : ((n.quotedMsgKey = c.id),
            (c.ephemeralDuration = null),
            a.add(c.unsafe()),
            c)
      );
    }
    function d(e) {
      var t,
        n = g(e),
        a = e.quotedStanzaID,
        i = e.quotedRemoteJid ? e.quotedRemoteJid : e.id.remote,
        l = o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(i);
      if (!n || r("isStringNullOrEmpty")(a)) return null;
      var s = o("WAWebUserPrefsMeUser").isMeAccount(n),
        u = s ? "out" : "in",
        c = {
          id:
            a != null && r("WAWebWid").isStatus(i)
              ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(a)
              : a,
          from: s ? l : i,
          to: s ? i : l,
          self: u,
          author: n,
          remote: i,
        },
        d = r("WAWebWid").isGroup(c.from) || r("WAWebWid").isGroup(c.to);
      ((d || r("WAWebWid").isStatus(i)) && (c.participant = n),
        Object.assign(c, e.quotedMsg));
      var m =
        (t = o("WAWebMsgModelUtils").createQuotedMsg(c)) != null ? t : void 0;
      return m == null
        ? null
        : (e.selectedCarouselCardIndex != null &&
            ((m.interactiveHeader = void 0), (m.isCarouselCard = !1)),
          m.safe());
    }
    function m(e) {
      var t,
        n,
        r = g(e),
        a =
          (t = e.paymentRequestMessageKey) != null && t.remote
            ? e.paymentRequestMessageKey.remote
            : e.id.remote,
        i = o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(a);
      if (!e.paymentRequestMessageKey || !r) return null;
      var l = e.paymentRequestMessageKey.fromMe,
        s = l ? "out" : "in",
        u =
          e.paymentRequestMessageKey.self != null
            ? e.paymentRequestMessageKey.self
            : s,
        c =
          e.paymentRequestMessageKey.participant || e.paymentMessageReceiverJid,
        d = e.paymentRequestMessageKey.id,
        m = {
          id: d,
          from: l ? i : a,
          to: l ? a : i,
          self: u,
          participant: c,
          author: c,
          remote: a,
          amount1000: e.paymentAmount1000,
          currency: e.paymentCurrency,
          receiverJid: o("WAWebMsgGetters").getSender(e),
          type: e.type,
          subtype: "request",
        };
      return (n = o("WAWebMsgModelUtils").createQuotedMsg(m)) == null
        ? void 0
        : n.safe();
    }
    function p(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedRemoteJid : null;
    }
    function _(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedGroupSubject : null;
    }
    function f(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedParentGroupJid : null;
    }
    var g = function (t) {
      return (
        t.quotedParticipant == null &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "null quotedParticipant in quotedMsg",
                ])),
            )
            .sendLogs("null-quoted-participant"),
        t.quotedParticipant
      );
    };
    ((l.isMyQuotedMsg = u),
      (l.getQuotedMsgObj = c),
      (l.createQuotedMsgObj = d),
      (l.getQuotedMsgAdminGroupJid = p),
      (l.getQuotedMsgAdminGroupSubject = _),
      (l.getQuotedMsgAdminParentGroupJid = f));
  },
  98,
);
