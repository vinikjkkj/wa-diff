__d(
  "WAWebVoipCallOfferStanzaParser",
  ["WADeprecatedWapParser", "WATimeUtils", "WAWebJidToWid"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WADeprecatedWapParser"))("callOfferPlaceholder", function (
      e,
    ) {
      var t, n, r;
      e.assertTag("call");
      var a = e.mapFirstChild(function (e) {
        return e;
      });
      return a == null || a.tag() !== "offer"
        ? null
        : {
            isCallEnded: a.maybeAttrString("is_call_ended") === "1",
            isGroupCall: c(a),
            isJoinableGroupCall: d(a),
            isLightweight: a.maybeAttrString("lightweight") === "1",
            placeholderProps: {
              callId: a.attrString("call-id"),
              callCreator: o("WAWebJidToWid").jidWithTypeToWid(
                a.attrJidWithType("call-creator"),
              ),
              groupJid: a.hasAttr("group-jid")
                ? o("WAWebJidToWid").jidWithTypeToWid(
                    a.attrJidWithType("group-jid"),
                  )
                : null,
              isVideoCall: a.hasChild("video"),
              t:
                (t = e.maybeAttrTime("t")) != null
                  ? t
                  : o("WATimeUtils").castToUnixTime(0),
            },
            queuedMs: o("WATimeUtils").castUnixTimeToMillisTime(
              (n = e.maybeAttrTime("e")) != null
                ? n
                : o("WATimeUtils").castToUnixTime(0),
            ),
            silenceReason:
              (r = a.maybeChild("silence")) == null
                ? void 0
                : r.maybeAttrString("reason"),
          };
    });
    function s(e) {
      var t;
      return (t = u(e)) == null ? void 0 : t.placeholderProps;
    }
    function u(t) {
      var n = e.parse(t);
      return n.error || n.success == null ? null : n.success;
    }
    function c(e) {
      var t;
      return (
        m(e) ||
        ((t = e.maybeChild("waiting_room")) == null
          ? void 0
          : t.maybeAttrString("enabled")) === "1"
      );
    }
    function d(e) {
      return m(e) && e.maybeAttrString("joinable") === "1";
    }
    function m(e) {
      var t = e.maybeChild("group_info");
      return t != null && (t.hasChild("user") || t.hasChild("participant"));
    }
    ((l.parseCallOfferStanza = s), (l.parseCallOffer = u));
  },
  98,
);
