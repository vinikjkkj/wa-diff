__d(
  "WAWebUsyncBotProfile",
  ["WAWap", "WAWebBotTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      e.assertTag("bot");
      var n = e.maybeChild("error");
      if (n)
        return {
          errorCode: n.attrInt("code"),
          errorText: n.attrString("text"),
        };
      var r = e.child("profile"),
        a = r.child("name"),
        i = a.contentString(),
        l = r.child("attributes"),
        c = l.contentString(),
        d = r.child("description"),
        m = d.contentString(),
        p = r.child("category"),
        _ = p.contentString(),
        f = r.maybeChild("default"),
        g = (f == null ? void 0 : f.contentString()) === "true",
        h = r.maybeChild("prompts"),
        y = s(h),
        C = (t = r.maybeAttrString("persona_id")) != null ? t : "",
        b = r.maybeChild("commands"),
        v = u(b),
        S = v.commands,
        R = v.commandsDescription,
        L,
        E = r.maybeChild("is_meta_created");
      E && (L = (E == null ? void 0 : E.contentString()) === "true");
      var k,
        I,
        T = r.maybeChild("creator");
      if (T) {
        var D, x;
        ((k = (D = T.maybeChild("name")) == null ? void 0 : D.contentString()),
          (I =
            (x = T.maybeChild("profile_url")) == null
              ? void 0
              : x.contentString()));
      }
      var $,
        P = r.maybeChild("posing_as_professional");
      if (P)
        switch (P.attrString("type")) {
          case "unknown":
            $ = o("WAWebBotTypes").BotPosingAsProfessionalType.UNKNOWN;
            break;
          case "yes":
            $ = o("WAWebBotTypes").BotPosingAsProfessionalType.YES;
            break;
          case "no":
            $ = o("WAWebBotTypes").BotPosingAsProfessionalType.NO;
            break;
        }
      return {
        name: i,
        attributes: c,
        description: m,
        category: _,
        isDefault: g,
        prompts: y,
        personaId: C,
        commands: S,
        commandsDescription: R,
        isMetaCreated: L,
        creatorName: k,
        creatorProfileUrl: I,
        posingAsProfessional: $,
      };
    }
    function s(e) {
      if (e == null) return [];
      var t = [];
      return (
        e.forEachChildWithTag("prompt", function (e) {
          var n,
            r,
            o = e.maybeChild("emoji"),
            a = (n = o == null ? void 0 : o.contentString()) != null ? n : "",
            i = e.maybeChild("text"),
            l = (r = i == null ? void 0 : i.contentString()) != null ? r : "";
          t.push({ emoji: a, text: l });
        }),
        t
      );
    }
    function u(e) {
      var t;
      if (e == null) return { commands: [], commandsDescription: "" };
      var n = [],
        r = e.maybeChild("description"),
        o = (t = r == null ? void 0 : r.contentString()) != null ? t : "";
      return (
        e.forEachChildWithTag("command", function (e) {
          var t,
            r,
            o = e.maybeChild("name"),
            a = (t = o == null ? void 0 : o.contentString()) != null ? t : "",
            i = e.maybeChild("description"),
            l = (r = i == null ? void 0 : i.contentString()) != null ? r : "";
          n.push({ name: a, description: l });
        }),
        { commands: n, commandsDescription: o }
      );
    }
    var c = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "bot";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap(
            "bot",
            null,
            o("WAWap").wap("profile", { v: "1" }),
          );
        }),
        (t.getUserElement = function (t) {
          var e = t.getPersonaId();
          return o("WAWap").wap(
            "bot",
            null,
            o("WAWap").wap("profile", {
              persona_id:
                e != null ? o("WAWap").CUSTOM_STRING(e) : o("WAWap").DROP_ATTR,
            }),
          );
        }),
        e
      );
    })();
    ((l.botProfileParser = e), (l.USyncBotProfileProtocol = c));
  },
  98,
);
