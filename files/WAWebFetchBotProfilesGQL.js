__d(
  "WAWebFetchBotProfilesGQL",
  [
    "WAWebFetchBotProfilesGQLQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebFetchBotProfilesGQLQuery.graphql"));
    function u(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = e.latest_published_version_for_viewer;
      return {
        personaId: (t = e.id) != null ? t : "",
        jid: e.jid,
        name: (n = l == null ? void 0 : l.name) != null ? n : "",
        description: (r = l == null ? void 0 : l.description) != null ? r : "",
        isMetaCreated: e.is_meta_created,
        creatorName: (o = e.creator) == null ? void 0 : o.name,
        creatorProfileUrl: (a = e.creator) == null ? void 0 : a.profile_uri,
        prompts:
          (i = l == null ? void 0 : l.icebreaker_prompt_list) != null ? i : [],
        posingAsProfessional:
          (l == null ? void 0 : l.posing_as_professional) != null
            ? String(l.posing_as_professional)
            : null,
      };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return { type: "success", value: [] };
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var t,
              n = yield o("WAWebRelayClient").fetchQuery(
                s,
                { ids: e },
                { environmentType: "whatsapp_web" },
              ),
              a =
                (t = n == null ? void 0 : n.xfb_fetch_genai_personas) != null
                  ? t
                  : [];
            return { type: "success", value: a.filter(Boolean).map(u) };
          } catch (e) {
            return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? { type: "graphql-error", error: e }
              : { type: "error" };
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchBotProfilesGQL = c;
  },
  98,
);
