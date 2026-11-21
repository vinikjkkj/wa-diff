__d(
  "WAWebInboundMsgRowCodec",
  [
    "Promise",
    "WACustomError",
    "WAWap",
    "WAWebHandleMsgParser",
    "WAWebQuarantineActionUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
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
    function u(e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.version !== 1 && e.version !== 2)
            throw new s("unknown inbound row version " + e.version);
          var n = yield o("WAWap").decodeStanza(e.stanza.slice(), y),
            r = o("WAWebHandleMsgParser").incomingMsgParser.parse(n);
          if (r.error) throw new s("persisted stanza no longer parses");
          var a = r.success;
          return (
            e.isGroupStatusStanza && (a.msgMeta.isGroupStatus = !0),
            e.isStatusStanza && (a.msgMeta.isStatusStanza = !0),
            (a.msgInfo.clientReceivedTsMillis = e.clientReceivedTsMillis),
            (a.msgInfo.msgProcessStartTsMillis = e.msgProcessStartTsMillis),
            f(a.msgInfo, e.intake),
            {
              input: a,
              parts: e.parts.map(function (e) {
                return g(a.encs, e);
              }),
              placeholder: (t = e.placeholder) != null ? t : null,
            }
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return {
        kind: "stanza",
        handler: t,
        stanza: o("WAWap").encodeStanza(e),
        version: 1,
      };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.version !== 1)
            throw new s("unknown inbound row version " + e.version);
          return o("WAWap").decodeStanza(e.stanza.slice(), y);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = t.hostedBizEncStateMismatch,
        r = t.offline,
        o = t.senderOrRecipientAccountTypeHosted;
      (r == null ? delete e.offline : (e.offline = r),
        n && (e.hostedBizEncStateMismatch = !0),
        o && (e.senderOrRecipientAccountTypeHosted = !0));
    }
    function g(e, t) {
      var n = t.encIndex,
        r = t.plaintext,
        o = t.quarantineAction,
        a = t.scheduledMsgViewMode,
        i = e[n];
      if (i == null) throw new s("persisted part refers to missing enc " + n);
      return {
        enc: i,
        plaintext: r,
        quarantineAction: h(o),
        scheduledMsgViewMode: a,
      };
    }
    function h(e) {
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
    function y() {
      return (e || (e = n("Promise"))).reject(
        new s("persisted stanza is compressed"),
      );
    }
    ((l.InboundMsgRowCodecError = s),
      (l.encodeInboundMsgRow = u),
      (l.decodeInboundMsgRow = c),
      (l.encodeInboundStanzaRow = m),
      (l.decodeInboundStanzaRow = p),
      (l.applyInboundMsgIntakeState = f));
  },
  98,
);
