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
      u,
      c = n("$InternalEnum")({ Sender: "sender", Receiver: "receiver" }),
      d = new Set(["deviceSentMessage", "$$unknownFieldCount"]),
      m = 15,
      p = 4,
      _ = 0.01;
    function f(e) {
      var t = e.messageContextInfo;
      return t != null ? t.messageSecret != null : !1;
    }
    function g(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function h(t, n, r) {
      if ((n === void 0 && (n = 0), r === void 0 && (r = ""), n >= m))
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
      if (f(t) && n > 0) return { violationPath: r || "unknown" };
      for (var a of Object.keys(t))
        if (!(d.has(a) || a === "messageContextInfo")) {
          var i = t[a];
          if (!(i == null || typeof i != "object")) {
            var l = r ? r + "." + a : a,
              s = Array.isArray(i) ? i : [i];
            for (var u of s) {
              var c = g(u);
              if (c != null) {
                var p = h(c, n + 1, l);
                if (p != null) return p;
              }
            }
          }
        }
      return null;
    }
    function y(e, t, n) {
      if (
        o("WAWebMessagingGatingUtils").isTopLevelMessageSecretCheckEnabled()
      ) {
        var r = h(e);
        if (r != null) {
          var a =
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
            i = "message-secret-location-violation-" + a,
            l = n == null ? "unknown" : n.slice(0, p);
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
                  a,
                  r.violationPath,
                  l,
                )
                .tags("messaging", "wa-ice", "message-secret-location")
                .sendLogs(i, { sampling: _ })
            : o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "messageSecret location violation on ",
                      ": path:",
                      " stanzaIdPrefix:",
                      "",
                    ])),
                  a,
                  r.violationPath,
                  l,
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
                protobufValidationPath: r.violationPath,
                protobufValidationRuleId: "79",
              }).commit());
        }
      }
    }
    ((l.MessageSecretCheckContext = c),
      (l.findMessageSecretViolation = h),
      (l.verifyTopLevelMessageSecret = y));
  },
  98,
);
