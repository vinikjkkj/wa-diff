__d(
  "WAWebVoipCallOfferStanzaParser",
  ["WADeprecatedWapParser", "WATimeUtils", "WAWebJidToWid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WADeprecatedWapParser"))("callOfferPlaceholder", function (
      e,
    ) {
      var t;
      e.assertTag("call");
      var n = e.mapFirstChild(function (e) {
        return e;
      });
      return n == null || n.tag() !== "offer"
        ? null
        : {
            callId: n.attrString("call-id"),
            callCreator: o("WAWebJidToWid").jidWithTypeToWid(
              n.attrJidWithType("call-creator"),
            ),
            groupJid: n.hasAttr("group-jid")
              ? o("WAWebJidToWid").jidWithTypeToWid(
                  n.attrJidWithType("group-jid"),
                )
              : null,
            isVideoCall: n.hasChild("video"),
            t:
              (t = e.maybeAttrTime("t")) != null
                ? t
                : o("WATimeUtils").castToUnixTime(0),
          };
    });
    function s(t) {
      var n = e.parse(t);
      return n.error || n.success == null ? null : n.success;
    }
    l.parseCallOfferStanza = s;
  },
  98,
);
