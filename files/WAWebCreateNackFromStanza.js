__d(
  "WAWebCreateNackFromStanza",
  [
    "$InternalEnum",
    "WALogger",
    "WAWap",
    "WAWebCurrentUser",
    "WAWebPostUnknownStanzaMetric",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = n("$InternalEnum")({
        StaleGroupAddressingMode: 421,
        NewChatMessagesCapped: 475,
        ParsingError: 487,
        UnrecognizedStanza: 488,
        UnrecognizedStanzaClass: 489,
        UnrecognizedStanzaType: 490,
        InvalidProtobuf: 491,
        InvalidHostedCompanionStanza: 493,
        MissingMessageSecret: 495,
        SignalErrorOldCounter: 496,
        MessageDeletedOnPeer: 499,
        UnhandledError: 500,
        UnsupportedAdminRevoke: 550,
        UnsupportedLIDGroup: 551,
        DBOperationFailed: 552,
      });
    function f(t, n) {
      var a,
        i,
        l = t == null ? void 0 : t.tag,
        p = t == null || (a = t.attrs) == null ? void 0 : a.id,
        f =
          t == null || (i = t.attrs) == null || (i = i.type) == null
            ? void 0
            : i.toString(),
        h = _.getName(n);
      try {
        var y, C;
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createNackFromStanza: class: '",
                "' type: '",
                "' id: '",
                "' reason: '",
                "'",
              ])),
            l,
            f,
            p,
            h,
          ),
          l === "receipt" &&
            n === _.UnrecognizedStanza &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Unrecognized receipt stanza: type: '",
                    "'",
                  ])),
                f,
              )
              .sendLogs("unrecognized-receipt-stanza", {
                sampling: o("WAWebCurrentUser").isEmployee() ? 1 : 0.001,
              }),
          ((y = t.attrs.type) == null ? void 0 : y.toString()) === "text" &&
            t.tag === "message" &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createNackFromStanza: unknown text type stanza",
                  ])),
              )
              .sendLogs("createNackFromStanza-unknown-text-type-stanza", {
                sampling: 0.01,
              }),
          p != null &&
            (t == null || (C = t.attrs) == null ? void 0 : C.from) != null)
        )
          return g(t, n);
        (o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[createNackFromStanza] fail: id/from null cls=",
              " type=",
              " reason=",
              "",
            ])),
          l,
          f,
          h,
        ),
          o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t));
      } catch (e) {
        var b;
        o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[createNackFromStanza] fail cls=",
              " type=",
              " id=",
              " reason=",
              "",
            ])),
          l,
          f,
          p,
          h,
        );
        var v = r("getErrorSafe")(e);
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "createNackFromStanza: failed with unhandled reason: ",
                "",
              ])),
            (b = v.message) != null ? b : e,
          )
          .sendLogs("send-nack-exception");
      }
      return "NO_ACK";
    }
    function g(e, t) {
      var n = e.attrs;
      if (t === _.UnrecognizedStanza)
        return o("WAWap").wap("ack", {
          class: o("WAWap").CUSTOM_STRING(e.tag),
          id: n.id,
          to: n.from,
          type: n.type || o("WAWap").DROP_ATTR,
          participant: n.participant || o("WAWap").DROP_ATTR,
          error: o("WAWap").INT(t),
        });
      switch (e.tag) {
        case "notification":
          return o("WAWap").wap("ack", {
            class: "notification",
            id: n.id,
            to: n.from,
            type: n.type || o("WAWap").DROP_ATTR,
            participant: n.participant || o("WAWap").DROP_ATTR,
            error: o("WAWap").INT(t),
          });
        case "message":
          return o("WAWap").wap("ack", {
            class: "message",
            id: n.id,
            to: n.from,
            type: n.type || o("WAWap").DROP_ATTR,
            participant: n.participant || o("WAWap").DROP_ATTR,
            error: o("WAWap").INT(t),
          });
        case "receipt":
          return o("WAWap").wap("ack", {
            class: "receipt",
            id: n.id,
            to: n.from,
            type: n.type || o("WAWap").DROP_ATTR,
            participant: n.participant || o("WAWap").DROP_ATTR,
            error: o("WAWap").INT(t),
          });
        default:
          return (
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "sendNack called with unsupported stanza tag: ",
                    "",
                  ])),
                e.tag,
              )
              .sendLogs("unsupported-nack"),
            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e),
            "NO_ACK"
          );
      }
    }
    ((l.NackReason = _), (l.createNackFromStanza = f));
  },
  98,
);
