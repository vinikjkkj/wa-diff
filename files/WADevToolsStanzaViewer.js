__d(
  "WADevToolsStanzaViewer",
  ["WADevToolsBridge", "WASmaxParseUtils", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WASmaxParseUtils").attrInt(e, "t"),
        r = n.success
          ? o("WATimeUtils").castToUnixTime(n.value)
          : o("WATimeUtils").unixTime();
      o("WADevToolsBridge")
        .getDevToolBridge()
        .fireAndForget(
          "devtool",
          "newStanza",
          { ts: r, type: e.tag, isOutgoing: t, stanza: e.toString() },
          !0,
        );
    }
    l.sendNewStanzaToDevTool = e;
  },
  98,
);
