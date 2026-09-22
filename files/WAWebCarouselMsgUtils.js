__d(
  "WAWebCarouselMsgUtils",
  ["WALogger", "WAWebMsgCollection", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (!t.isCarouselCard) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getParentMsgFromCarouselCard called on non carousel card.",
              ])),
          )
          .sendLogs("getParentMsgFromCarouselCard-error");
        return;
      }
      if (t.parentMsgId == null) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "parentMsgId is null on carousel card.",
              ])),
          )
          .sendLogs("getParentMsgFromCarouselCard-error");
        return;
      }
      var n = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgId);
      return (
        n == null &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Could not find parent msg (id=",
                  ") for carousel card.",
                ])),
              t.parentMsgId,
            )
            .sendLogs("getParentMsgFromCarouselCard-error"),
        n
      );
    }
    function d(e) {
      if (!e.id.fromMe) return !1;
      if (o("WAWebMsgGetters").getBizBotType(e) != null) return !0;
      if (!e.isCarouselCard) return !1;
      var t = c(e);
      return t != null && o("WAWebMsgGetters").getBizBotType(t) != null;
    }
    function m(e) {
      var t = [],
        n = function (n) {
          return t.push(n);
        };
      for (var r of e)
        r.carouselCards != null ? r.carouselCards.forEach(n) : n(r);
      return t;
    }
    ((l.getParentMsgFromCarouselCard = c),
      (l.isOutgoingBizBotMessage = d),
      (l.flattenMsgs = m));
  },
  98,
);
