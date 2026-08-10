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
    function C(t) {
      var n = t.depth,
        r = n === void 0 ? 0 : n,
        a = t.path,
        i = a === void 0 ? "" : a,
        l = t.proto;
      if (r >= _)
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "messageSecret location check exceeded max depth: path:",
                  "",
                ])),
              i,
            )
            .tags("messaging", "wa-ice", "message-secret-location")
            .sendLogs("message-secret-location-max-depth"),
          null
        );
      if (h(l) && r > 0) return { violationPath: i || "unknown" };
      for (var s of Object.keys(l))
        if (!(p.has(s) || s === "messageContextInfo")) {
          var u = l[s];
          if (!(u == null || typeof u != "object")) {
            var c = i ? i + "." + s : s,
              d = Array.isArray(u) ? u : [u];
            for (var m of d) {
              var f = y(m);
              if (f != null) {
                var g = C({ depth: r + 1, path: c, proto: f });
                if (g != null) return g;
              }
            }
          }
        }
      return null;
    }
    function b(e, t, n, r) {
      var a = C({ proto: e });
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
