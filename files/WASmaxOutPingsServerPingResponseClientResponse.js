__d(
  "WASmaxOutPingsServerPingResponseClientResponse",
  ["WASmaxAttrs", "WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasIqXmlnsUrnx3Axmppx3Aping,
        n = e.iqTo,
        r = o("WASmaxJsx").smax("iq", {
          xmlns: o("WASmaxAttrs").OPTIONAL_LITERAL("urn:xmpp:ping", t),
          to: o("WAWap").JID(n),
          type: "result",
          id: o("WAWap").generateId(),
        });
      return r;
    }
    l.makeServerPingResponseClientResponse = e;
  },
  98,
);
