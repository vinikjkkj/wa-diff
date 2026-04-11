__d(
  "WASmaxInBotBotListResponseSuccessV3",
  [
    "WAResultOrError",
    "WASmaxInBotEnums",
    "WASmaxInBotIQResultResponseMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "persona_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "card_title",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "count",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            personaId: r.value,
            cardTitle: a.value,
            count: i.value,
          })
        : i;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "section");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t, "name");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        t,
        "type",
        o("WASmaxInBotEnums").ENUM_ALL_CATEGORY_FEATURED,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        t,
        "display_type",
        o("WASmaxInBotEnums")
          .ENUM_HIDDEN_HSCROLL_HSCROLLICEBREAKERS_HSCROLLLARGE_HSCROLLSMALL_LISTVIEW,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(t, "bot", 0, 1 / 0, e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: r.value,
            type: a.value,
            displayType: i.value,
            bot: l.value,
          })
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "default");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "persona_id");
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, personaId: r.value })
        : r;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "default", u);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "v",
        "3",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "bhash");
      if (!l.success) return l;
      var c = o("WASmaxInBotIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "section",
        0,
        1 / 0,
        s,
      );
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { botV: i.value, botBhash: l.value },
              c.value,
              { botDefault: a.value, botSection: d.value },
            ),
          )
        : d;
    }
    ((l.parseBotListResponseSuccessV3BotSectionBot = e),
      (l.parseBotListResponseSuccessV3BotSection = s),
      (l.parseBotListResponseSuccessV3BotDefault = u),
      (l.parseBotListResponseSuccessV3 = c));
  },
  98,
);
