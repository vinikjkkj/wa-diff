__d(
  "WAWebMessageSecretLocationUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebMessagingGatingUtils",
    "WAWebVerifyProtobufMsgObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({ Sender: "sender", Receiver: "receiver" }),
      c = new Set(["deviceSentMessage", "$$unknownFieldCount"]),
      d = 10;
    function m(e) {
      var t = e.messageContextInfo;
      return t != null ? t.messageSecret != null : !1;
    }
    function p(t, n, r) {
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
      if (m(t) && n > 0) return { violationPath: r || "unknown" };
      for (var a of Object.keys(t))
        if (!c.has(a) && a !== "messageContextInfo") {
          var i = o("WAWebVerifyProtobufMsgObjectKeys").getWrappedMessage(t[a]);
          if (i != null) {
            var l = r ? r + "." + a : a,
              s = p(i, n + 1, l);
            if (s != null) return s;
          }
        }
      return null;
    }
    function _(e, t) {
      if (
        o("WAWebMessagingGatingUtils").isTopLevelMessageSecretCheckEnabled()
      ) {
        var n = p(e);
        if (n != null) {
          var r =
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
            a = "message-secret-location-violation-" + r;
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "messageSecret location violation on ",
                  ": path:",
                  "",
                ])),
              r,
              n.violationPath,
            )
            .tags("messaging", "wa-ice", "message-secret-location")
            .sendLogs(a);
        }
      }
    }
    ((l.MessageSecretCheckContext = u),
      (l.findMessageSecretViolation = p),
      (l.verifyTopLevelMessageSecret = _));
  },
  98,
);
