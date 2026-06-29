__d(
  "WAWebMessageSecretLocationUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebProtobufValidationErrorWamEvent",
    "WAWebWamEnumProtobufValidationFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({ Sender: "sender", Receiver: "receiver" }),
      d = "79",
      m = "80",
      p = new Set(["deviceSentMessage", "$$unknownFieldCount"]),
      _ = 15,
      f = 4,
      g = 0.01;
    function h(e) {
      var t = e.messageContextInfo;
      return t != null ? t.messageSecret != null : !1;
    }
    function y(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function C(t, n, r) {
      if ((n === void 0 && (n = 0), r === void 0 && (r = ""), n >= _))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "messageSecret location check exceeded max depth: path:",
                  "",
                ])),
              r,
            )
            .tags("messaging", "wa-ice", "message-secret-location")
            .sendLogs("message-secret-location-max-depth"),
          null
        );
      if (h(t) && n > 0) return { violationPath: r || "unknown" };
      for (var a of Object.keys(t))
        if (!(p.has(a) || a === "messageContextInfo")) {
          var i = t[a];
          if (!(i == null || typeof i != "object")) {
            var l = r ? r + "." + a : a,
              s = Array.isArray(i) ? i : [i];
            for (var u of s) {
              var c = y(u);
              if (c != null) {
                var d = C(c, n + 1, l);
                if (d != null) return d;
              }
            }
          }
        }
      return null;
    }
    function b(e, t, n, r) {
      var a = C(e);
      if (a != null) {
        var i =
            t === c.Sender
              ? "sender"
              : t === c.Receiver
                ? "receiver"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })(),
          l = "message-secret-location-violation-" + i,
          m = n == null ? "unknown" : n.slice(0, f);
        (t === c.Receiver
          ? o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "messageSecret location violation on ",
                    ": path:",
                    " stanzaIdPrefix:",
                    "",
                  ])),
                i,
                a.violationPath,
                m,
              )
              .tags("messaging", "wa-ice", "message-secret-location")
              .sendLogs(l, { sampling: g })
          : o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "messageSecret location violation on ",
                    ": path:",
                    " stanzaIdPrefix:",
                    "",
                  ])),
                i,
                a.violationPath,
                m,
              )
              .tags("messaging", "wa-ice", "message-secret-location"),
          t === c.Sender &&
            new (o(
              "WAWebProtobufValidationErrorWamEvent",
            ).ProtobufValidationErrorWamEvent)({
              protobufValidationDropped: !1,
              protobufLegacyValidationDropped: !1,
              protobufValidationFlow: o("WAWebWamEnumProtobufValidationFlow")
                .PROTOBUF_VALIDATION_FLOW.STANZA_MESSAGE_SEND,
              protobufValidationPath: a.violationPath,
              protobufValidationRuleId: r != null ? r : d,
            }).commit());
      }
    }
    ((l.MessageSecretCheckContext = c),
      (l.MESSAGE_SECRET_RULE_ID_OUTGOING = d),
      (l.MESSAGE_SECRET_RULE_ID_GROUP_HISTORY = m),
      (l.findMessageSecretViolation = C),
      (l.verifyTopLevelMessageSecret = b));
  },
  98,
);
