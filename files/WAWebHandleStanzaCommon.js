__d(
  "WAWebHandleStanzaCommon",
  ["WAWap", "WAWebHandlePairDevice", "WAWebHandlePairSuccess", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.attrs,
        n = e.content;
      if (t.xmlns === "urn:xmpp:ping")
        return o("WAWap").wap("iq", { type: "result", to: t.from });
      if (t.xmlns === "md") {
        if (!Array.isArray(n) || !n.length) return;
        var a = n[0].tag;
        switch (a) {
          case "pair-device":
            return r("WAWebHandlePairDevice")(e);
          case "pair-success":
            return r("WAWebHandlePairSuccess")(e);
        }
      } else throw r("err")("handleIq unrecognized " + e.toString());
    }
    l.handleIq = e;
  },
  98,
);
