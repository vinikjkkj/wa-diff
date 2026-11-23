__d(
  "WASmaxBotBotListRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = R(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success)
        return { name: "BotListResponseSuccessV2", value: a.value };
      var i = g(r, n);
      if (i.success)
        return { name: "BotListResponseSuccessV3", value: i.value };
      var l = s(r, n);
      if (l.success) return { name: "BotListResponseError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("BotList", {
          SuccessV2: a,
          SuccessV3: i,
          Error: l,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = b(e, t);
      if (!a.success) return a;
      var i = L(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorBotListErrors: i.value }),
          )
        : i;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "theme");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "background");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "primary_text");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "secondary_text");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStringEnum(e, "mode", y);
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "persona_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        e,
        "count",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(e, "theme", 0, 2, u);
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            personaId: r.value,
            count: a.value,
            theme: i.value,
          })
        : i;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "section");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(e, "type", h);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(e, "bot", 0, 1 / 0, c);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: n.value,
            type: r.value,
            bot: a.value,
          })
        : a;
    }
    function m(e, t) {
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
      var u = v(e, t);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "section",
        1,
        1 / 0,
        d,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                botV: i.value,
                botDefaultJid: l.value,
                botDefaultPersonaId: s.value,
              },
              u.value,
              { botSection: c.value },
            ),
          )
        : c;
    }
    function p(e) {
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
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "section");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(e, "type", h);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(e, "display_type", C);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(e, "bot", 0, 1 / 0, p);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: n.value,
            type: r.value,
            displayType: a.value,
            bot: i.value,
          })
        : i;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "default");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "persona_id");
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, personaId: r.value })
        : r;
    }
    function g(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "default", f);
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
      var s = v(e, t);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "section",
        0,
        1 / 0,
        _,
      );
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { botV: i.value, botBhash: l.value },
              s.value,
              { botDefault: a.value, botSection: u.value },
            ),
          )
        : u;
    }
    var h = { all: "all", category: "category", featured: "featured" },
      y = { dark: "dark", light: "light" },
      C = {
        hidden: "hidden",
        hscroll: "hscroll",
        hscroll_icebreakers: "hscroll_icebreakers",
        hscroll_large: "hscroll_large",
        hscroll_small: "hscroll_small",
        listview: "listview",
      };
    function b(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function v(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        r.value,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["to"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "from",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      return s.success ? o("WAResultOrError").makeResult({ type: s.value }) : s;
    }
    function S(e) {
      var t = e.botJid,
        n = o("WASmaxJsx").smax("bot", { jid: o("WAWap").JID(t) });
      return n;
    }
    function R(e) {
      var t = e.botArgs,
        n = e.botV,
        r = e.botBhash,
        a = x(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "bot",
              {
                v: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
                bhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
              },
              o("WASmaxChildren").REPEATED_CHILD(S, t, 0, 1 / 0),
            ),
          ),
        );
      return a;
    }
    function L(e) {
      var t = I(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = k(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = E(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: r.value,
        });
      var a = T(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorNotAllowed",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorForbidden",
              "IQErrorBadRequest",
              "IQErrorNotAllowed",
            ],
            [t, n, r, a],
          );
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "bad-request",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        400,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "forbidden",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        403,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "internal-server-error",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        500,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "text",
        "not-allowed",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrInt,
        e,
        "code",
        405,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ text: n.value, code: r.value })
        : r;
    }
    function D() {
      var e = P(
        o("WASmaxJsx").smax("iq", {
          to: o("WAWap").S_WHATSAPP_NET,
          xmlns: "bot",
        }),
      );
      return e;
    }
    function x(e) {
      var t = D();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function $() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "get",
      });
      return e;
    }
    function P(e) {
      var t = $();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendBotListRPC = e),
      (l.parseBotListResponseError = s),
      (l.parseBotListResponseSuccessV2 = m),
      (l.parseBotListResponseSuccessV3 = g),
      (l.ENUM_ALL_CATEGORY_FEATURED = h),
      (l.ENUM_DARK_LIGHT = y),
      (l.ENUM_HIDDEN_HSCROLL_HSCROLLICEBREAKERS_HSCROLLLARGE_HSCROLLSMALL_LISTVIEW =
        C),
      (l.makeBotListRequest = R));
  },
  98,
);
