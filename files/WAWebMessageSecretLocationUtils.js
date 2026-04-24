__d(
  "WAWebMessageSecretLocationUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufValidationErrorWamEvent",
    "WAWebWamEnumProtobufValidationFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ Sender: "sender", Receiver: "receiver" }),
      c = new Set(["deviceSentMessage", "$$unknownFieldCount"]),
      d = 10,
      m = 4;
    function p(e) {
      var t = e.messageContextInfo;
      return t != null ? t.messageSecret != null : !1;
    }
    function _(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function f(t, n, r) {
      if ((n === void 0 && (n = 0), r === void 0 && (r = ""), n >= d))
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
      if (p(t) && n > 0) return { violationPath: r || "unknown" };
      for (var a of Object.keys(t))
        if (!(c.has(a) || a === "messageContextInfo")) {
          var i = t[a];
          if (!(i == null || typeof i != "object")) {
            var l = r ? r + "." + a : a,
              s = Array.isArray(i) ? i : [i];
            for (var u of s) {
              var m = _(u);
              if (m != null) {
                var g = f(m, n + 1, l);
                if (g != null) return g;
              }
            }
          }
        }
      return null;
    }
    function g(e, t, n) {
      if (
        o("WAWebMessagingGatingUtils").isTopLevelMessageSecretCheckEnabled()
      ) {
        var r = f(e);
        if (r != null) {
          var a =
              t === u.Sender
                ? "sender"
                : t === u.Receiver
                  ? "receiver"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })(),
            i = "message-secret-location-violation-" + a,
            l = n == null ? "unknown" : n.slice(0, m);
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "messageSecret location violation on ",
                  ": path:",
                  " stanzaIdPrefix:",
                  "",
                ])),
              a,
              r.violationPath,
              l,
            )
            .tags("messaging", "wa-ice", "message-secret-location")
            .sendLogs(i),
            t === u.Sender &&
              new (o(
                "WAWebProtobufValidationErrorWamEvent",
              ).ProtobufValidationErrorWamEvent)({
                protobufValidationDropped: !1,
                protobufLegacyValidationDropped: !1,
                protobufValidationFlow: o("WAWebWamEnumProtobufValidationFlow")
                  .PROTOBUF_VALIDATION_FLOW.STANZA_MESSAGE_SEND,
                protobufValidationPath: r.violationPath,
                protobufValidationRuleId: "79",
              }).commit());
        }
      }
    }
    ((l.MessageSecretCheckContext = u),
      (l.findMessageSecretViolation = f),
      (l.verifyTopLevelMessageSecret = g));
  },
  98,
);
