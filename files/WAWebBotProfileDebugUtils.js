__d(
  "WAWebBotProfileDebugUtils",
  ["WAWebBotProduct", "WAWebBotProfileCategory"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.product !== void 0 && (n.product = t.product),
        t.isDeprecated !== void 0 && (n.isDeprecated = t.isDeprecated),
        t.isDeleted !== void 0 && (n.isDeleted = t.isDeleted),
        n
      );
    }
    function s(e, t) {
      var n,
        r,
        a,
        i = (n = e == null ? void 0 : e.product) != null ? n : null,
        l = o("WAWebBotProduct").botProductFromServerValue(i);
      return {
        isDeleted: (r = e == null ? void 0 : e.isDeleted) != null ? r : null,
        isDeprecated:
          (a = e == null ? void 0 : e.isDeprecated) != null ? a : null,
        knownProduct: l != null ? l.valueOf() : null,
        product: i,
        supportStateKind: t.kind,
      };
    }
    function u(e) {
      return {
        id: e.id,
        name: e.name,
        attrs: e.attrs,
        description: e.description,
        category: e.category,
        isDefault: e.isDefault,
        prompts: e.prompts,
        personaId: e.personaId,
        commands: e.commands,
        commandsDescription: e.commandsDescription,
        isMetaCreated: e.isMetaCreated,
        creatorName: e.creatorName,
        creatorProfileUrl: e.creatorProfileUrl,
        lastUpdateTs: e.lastUpdateTs,
        posingAsProfessional: e.posingAsProfessional,
        product: e.product,
        isDeprecated: e.isDeprecated,
        isDeleted: e.isDeleted,
        lastFetchedTimeMs: e.lastFetchedTimeMs,
      };
    }
    function c(e) {
      return {
        id: e,
        name: "",
        attrs: "",
        description: "",
        category: o("WAWebBotProfileCategory").BotProfileCategory.SYNTHETIC,
        isDefault: !1,
        prompts: [],
        personaId: "",
        commands: [],
        commandsDescription: "",
        isMetaCreated: null,
        creatorName: null,
        creatorProfileUrl: null,
        lastUpdateTs: null,
        posingAsProfessional: null,
        product: null,
        isDeprecated: !1,
        isDeleted: !1,
        lastFetchedTimeMs: null,
      };
    }
    ((l.mergeProfileOverride = e),
      (l.formatProfileDebug = s),
      (l.profileTypeFromModel = u),
      (l.emptyBotProfile = c));
  },
  98,
);
