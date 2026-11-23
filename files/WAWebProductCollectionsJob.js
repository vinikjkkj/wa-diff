__d(
  "WAWebProductCollectionsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAppealCollection",
    "WAWebBizCatalogManagementCreateCollection",
    "WAWebBizCatalogManagementDeleteCollections",
    "WAWebBizCatalogManagementUpdateCollection",
    "WAWebBizCatalogManagementUpdateCollectionList",
    "WAWebGetFormattedCatalogJid",
    "WAWebHttpErrors",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebNetworkStatus",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = e.catalogSessionId,
        a = e.name,
        i = e.productIds;
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      var l = o("WAWebUserUtils").getMeUserOrThrow(),
        s = await o(
          "WAWebBizCatalogManagementCreateCollection",
        ).createCollection({
          collection: {
            name: a,
            product_ids: i,
            biz_jid:
              (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                l,
              )) != null
                ? t
                : l.toJid(),
            catalog_session_id: n,
          },
        });
      if (s.type === "success") return s.collectionResult;
      throw (
        s.type === "graphql-error" &&
          o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
            s.error,
          ),
        r("err")(
          "createCollection: error handling flow not implemented for " +
            JSON.stringify(s),
        )
      );
    }
    async function s(e, t) {
      var n,
        a = o("WAWebUserUtils").getMeUserOrThrow(),
        i = await o(
          "WAWebBizCatalogManagementDeleteCollections",
        ).deleteCollections({
          collections: {
            collection_ids: [e],
            biz_jid:
              (n = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                a,
              )) != null
                ? n
                : a.toJid(),
            catalog_session_id: t,
          },
        });
      if (i.type !== "success")
        throw (
          i.type === "graphql-error"
            ? o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(i.error)
            : i.type,
          r("err")(
            "deleteCollectionGraphQL: error handling flow not implemented for " +
              JSON.stringify(i),
          )
        );
    }
    async function u(e, t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return s(e, t);
    }
    async function c(e, t, n, a, i) {
      var l,
        s = o("WAWebUserUtils").getMeUserOrThrow(),
        u = {
          collection: {
            id: e,
            biz_jid:
              (l = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                s,
              )) != null
                ? l
                : s.toJid(),
            catalog_session_id: i,
          },
        };
      (t != null && (u.collection.name = t),
        n.length > 0 && (u.collection.add = { ids: n }),
        a.length > 0 && (u.collection.remove = { ids: a }));
      var c = await o(
        "WAWebBizCatalogManagementUpdateCollection",
      ).updateCollection(u);
      if (c.type === "success") return c.collectionResult;
      throw (
        c.type === "graphql-error" &&
          o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
            c.error,
          ),
        r("err")(
          "editCollectionGraphQL: unexpected result type " + JSON.stringify(c),
        )
      );
    }
    async function d(e, t, n, r, a) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return c(e, t, n, r, a);
    }
    async function m(e, t) {
      var n,
        a = o("WAWebUserUtils").getMeUserOrThrow(),
        i = await o(
          "WAWebBizCatalogManagementAppealCollection",
        ).appealCollection({
          product_set_id: e,
          jid:
            (n = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a)) !=
            null
              ? n
              : a.toJid(),
          reason: t,
        });
      if (i.type === "success") return i.result;
      throw (
        i.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(i.error)
          : i.type,
        r("err")(
          "appealCollectionGraphQL: error handling flow not implemented for " +
            JSON.stringify(i),
        )
      );
    }
    async function p(e, t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return m(e, t);
    }
    async function _(e) {
      var t,
        n = o("WAWebUserUtils").getMeUserOrThrow(),
        a = await o(
          "WAWebBizCatalogManagementUpdateCollectionList",
        ).updateCollectionList({
          biz_jid:
            (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(n)) !=
            null
              ? t
              : n.toJid(),
          move: e.map(function (e) {
            var t = e[0],
              n = e[1],
              r = e[2];
            return { collection_id: t, from_index: n, to_index: r };
          }),
        });
      if (a.type === "success") return a.result;
      throw (
        a.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(a.error)
          : a.type,
        r("err")(
          "reorderCollectionGraphQL: error handling flow not implemented for " +
            JSON.stringify(a),
        )
      );
    }
    async function f(e) {
      if (!r("WAWebNetworkStatus").online)
        throw new (o("WAWebHttpErrors").HttpNetworkError)();
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return _(e);
    }
    ((l.createCollection = e),
      (l.deleteCollection = u),
      (l.editCollection = d),
      (l.appealCollection = p),
      (l.reorderCollection = f));
  },
  98,
);
