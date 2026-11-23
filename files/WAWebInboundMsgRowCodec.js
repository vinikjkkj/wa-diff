__d(
  "WAWebInboundMsgRowCodec",
  [
    "WACustomError",
    "WAWap",
    "WAWebHandleMsgParser",
    "WAWebQuarantineActionUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.name = "InboundMsgRowCodecError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    function s(e) {
      var t = e.clientReceivedTsMillis,
        n = e.intake,
        r = e.isGroupStatusStanza,
        a = e.isStatusStanza,
        i = e.msgProcessStartTsMillis,
        l = e.node,
        s = e.parts,
        u = e.placeholder;
      return babelHelpers.extends(
        { kind: "message", clientReceivedTsMillis: t, intake: n },
        u != null ? { placeholder: u } : null,
        {
          isGroupStatusStanza: r,
          isStatusStanza: a,
          msgProcessStartTsMillis: i,
          parts: s,
          stanza: o("WAWap").encodeStanza(l),
          version: u != null ? 2 : 1,
        },
      );
    }
    async function u(t) {
      var n;
      if (t.version !== 1 && t.version !== 2)
        throw new e("unknown inbound row version " + t.version);
      var r = await o("WAWap").decodeStanza(t.stanza.slice(), f),
        a = o("WAWebHandleMsgParser").incomingMsgParser.parse(r);
      if (a.error) throw new e("persisted stanza no longer parses");
      var i = a.success;
      return (
        t.isGroupStatusStanza && (i.msgMeta.isGroupStatus = !0),
        t.isStatusStanza && (i.msgMeta.isStatusStanza = !0),
        (i.msgInfo.clientReceivedTsMillis = t.clientReceivedTsMillis),
        (i.msgInfo.msgProcessStartTsMillis = t.msgProcessStartTsMillis),
        m(i.msgInfo, t.intake),
        {
          input: i,
          parts: t.parts.map(function (e) {
            return p(i.encs, e);
          }),
          placeholder: (n = t.placeholder) != null ? n : null,
        }
      );
    }
    function c(e, t) {
      return {
        kind: "stanza",
        handler: t,
        stanza: o("WAWap").encodeStanza(e),
        version: 1,
      };
    }
    async function d(t) {
      if (t.version !== 1)
        throw new e("unknown inbound row version " + t.version);
      return o("WAWap").decodeStanza(t.stanza.slice(), f);
    }
    function m(e, t) {
      var n = t.hostedBizEncStateMismatch,
        r = t.offline,
        o = t.senderOrRecipientAccountTypeHosted;
      (r == null ? delete e.offline : (e.offline = r),
        n && (e.hostedBizEncStateMismatch = !0),
        o && (e.senderOrRecipientAccountTypeHosted = !0));
    }
    function p(t, n) {
      var r = n.encIndex,
        o = n.plaintext,
        a = n.quarantineAction,
        i = n.scheduledMsgViewMode,
        l = t[r];
      if (l == null) throw new e("persisted part refers to missing enc " + r);
      return {
        enc: l,
        plaintext: o,
        quarantineAction: _(a),
        scheduledMsgViewMode: i,
      };
    }
    function _(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "NoQuarantine"
        )
          return o("WAWebQuarantineActionUtils").QuarantineAction.NoQuarantine;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "QuarantineWithoutText"
        )
          return o("WAWebQuarantineActionUtils").QuarantineAction
            .QuarantineWithoutText;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "QuarantineWithText" &&
          "text" in e
        ) {
          var t = e.text;
          return o(
            "WAWebQuarantineActionUtils",
          ).QuarantineAction.QuarantineWithText(t);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function f() {
      return Promise.reject(new e("persisted stanza is compressed"));
    }
    ((l.InboundMsgRowCodecError = e),
      (l.encodeInboundMsgRow = s),
      (l.decodeInboundMsgRow = u),
      (l.encodeInboundStanzaRow = c),
      (l.decodeInboundStanzaRow = d),
      (l.applyInboundMsgIntakeState = m));
  },
  98,
);
