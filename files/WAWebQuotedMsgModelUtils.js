__d(
  "WAWebQuotedMsgModelUtils",
  [
    "WALogger",
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
    var e, s, u;
    function c(e) {
      var t = d(e);
      return t ? o("WAWebMsgGetters").getIsSentByMe(t) : !1;
    }
    function d(t) {
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
        n.quotedMsg ? (c = m(n)) : n.paymentRequestMessageKey && (c = p(n)),
        c == null
          ? null
          : ((n.quotedMsgKey = c.id),
            (c.ephemeralDuration = null),
            a.add(c.unsafe()),
            c)
      );
    }
    function m(e) {
      var t,
        n = h(e),
        a = e.quotedStanzaID,
        i = e.quotedRemoteJid ? e.quotedRemoteJid : e.id.remote,
        l = y(e, i);
      if (!n || !l || r("isStringNullOrEmpty")(a)) return null;
      var s = o("WAWebUserPrefsMeUser").isMeAccount(n),
        u = s ? "out" : "in",
        c = {
          id: a,
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
    function p(e) {
      var t,
        n,
        r = h(e),
        a =
          (t = e.paymentRequestMessageKey) != null && t.remote
            ? e.paymentRequestMessageKey.remote
            : e.id.remote,
        i = y(e, a);
      if (!e.paymentRequestMessageKey || !r || !i) return null;
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
    function _(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedRemoteJid : null;
    }
    function f(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedGroupSubject : null;
    }
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return t.quotedMsg == null ? t.quotedParentGroupJid : null;
    }
    var h = function (t) {
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
      },
      y = function (t, n) {
        var e = n.isLid()
          ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
          : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return (
          e == null &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "null meUser in quotedMsg",
                  ])),
              )
              .sendLogs("null-me-user"),
          e
        );
      };
    ((l.isMyQuotedMsg = c),
      (l.getQuotedMsgObj = d),
      (l.createQuotedMsgObj = m),
      (l.getQuotedMsgAdminGroupJid = _),
      (l.getQuotedMsgAdminGroupSubject = f),
      (l.getQuotedMsgAdminParentGroupJid = g));
  },
  98,
);
