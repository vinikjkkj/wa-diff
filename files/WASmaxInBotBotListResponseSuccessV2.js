__d(
  "WASmaxInBotBotListResponseSuccessV2",
  [
    "WAResultOrError",
    "WASmaxInBotEnums",
    "WASmaxInBotIQResultResponseMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "theme");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "background");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "primary_text");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "secondary_text");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(
        e,
        "mode",
        o("WASmaxInBotEnums").ENUM_DARK_LIGHT,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentString(n.value);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentString(r.value);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentString(a.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            mode: i.value,
            backgroundElementValue: l.value,
            primaryTextElementValue: s.value,
            secondaryTextElementValue: u.value,
          })
        : u;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "bot");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrUserJid(t, "jid");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "persona_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        t,
        "count",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(t, "theme", 0, 2, e);
      return l.success
        ? o("WAResultOrError").makeResult({
            jid: r.value,
            personaId: a.value,
            count: i.value,
            theme: l.value,
          })
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "section");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInBotEnums").ENUM_ALL_CATEGORY_FEATURED,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "bot", 0, 1 / 0, s);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: n.value,
            type: r.value,
            bot: a.value,
          })
        : a;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "default");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "v",
        "2",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(a.value, "jid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(a.value, "persona_id");
      if (!s.success) return s;
      var c = o("WASmaxInBotIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "section",
        1,
        1 / 0,
        u,
      );
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                botV: i.value,
                botDefaultJid: l.value,
                botDefaultPersonaId: s.value,
              },
              c.value,
              { botSection: d.value },
            ),
          )
        : d;
    }
    ((l.parseBotListResponseSuccessV2BotSectionBotTheme = e),
      (l.parseBotListResponseSuccessV2BotSectionBot = s),
      (l.parseBotListResponseSuccessV2BotSection = u),
      (l.parseBotListResponseSuccessV2 = c));
  },
  98,
);
