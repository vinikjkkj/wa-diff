__d(
  "WAWebCommsClassifyStatusStanza",
  [
    "WAJids",
    "WALogger",
    "WASmaxInStatusDeliverIncomingE2eeStatusRequest",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = o(
        "WASmaxInStatusDeliverIncomingE2eeStatusRequest",
      ).parseIncomingE2eeStatusRequest(t);
      return n.success
        ? {
            isGroupStatus:
              n.value.fromBroadcastOrGroupMixinGroup.name === "FromGroup",
          }
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "classifyIncomingStatusStanza: <status> stanza does not match status_deliver: ",
                  "",
                ])),
              o("WAJids").maybeSanitizeLogLineText(n.error),
            )
            .sendLogs("status-deliver-smax-parse-failed", {
              sampling: r("gkx")("26259") ? 1 : 0.1,
            }),
          null);
    }
    l.classifyIncomingStatusStanza = s;
  },
  98,
);
