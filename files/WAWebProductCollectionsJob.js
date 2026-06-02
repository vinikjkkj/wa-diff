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
    "WAWebHttpErrors",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null) throw r("err")("createCollection: meUser is null");
      var i = await o(
        "WAWebBizCatalogManagementCreateCollection",
      ).createCollection({
        collection: {
          name: e,
          product_ids: t,
          biz_jid: a.toJid(),
          catalog_session_id: n,
        },
      });
      if (i.type === "success") return i.collectionResult;
      throw (
        i.type === "graphql-error" &&
          o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
            i.error,
          ),
        r("err")(
          "createCollection: error handling flow not implemented for " +
            JSON.stringify(i),
        )
      );
    }
    async function s(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (n == null) throw r("err")("deleteCollectionGraphQL: meUser is null");
      var a = await o(
        "WAWebBizCatalogManagementDeleteCollections",
      ).deleteCollections({
        collections: {
          collection_ids: [e],
          biz_jid: n.toJid(),
          catalog_session_id: t,
        },
      });
      if (a.type !== "success")
        throw (
          a.type === "graphql-error"
            ? o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(a.error)
            : a.type,
          r("err")(
            "deleteCollectionGraphQL: error handling flow not implemented for " +
              JSON.stringify(a),
          )
        );
    }
    async function u(e, t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return s(e, t);
    }
    async function c(e, t, n, a, i) {
      var l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (l == null) throw r("err")("editCollectionGraphQL: meUser is null");
      var s = {
        collection: { id: e, biz_jid: l.toJid(), catalog_session_id: i },
      };
      (t != null && (s.collection.name = t),
        n.length > 0 && (s.collection.add = { ids: n }),
        a.length > 0 && (s.collection.remove = { ids: a }));
      var u = await o(
        "WAWebBizCatalogManagementUpdateCollection",
      ).updateCollection(s);
      if (u.type === "success") return u.collectionResult;
      throw (
        u.type === "graphql-error" &&
          o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
            u.error,
          ),
        r("err")(
          "editCollectionGraphQL: unexpected result type " + JSON.stringify(u),
        )
      );
    }
    async function d(e, t, n, r, a) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return c(e, t, n, r, a);
    }
    async function m(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (n == null) throw r("err")("appealCollectionGraphQL: meUser is null");
      var a = await o(
        "WAWebBizCatalogManagementAppealCollection",
      ).appealCollection({ product_set_id: e, jid: n.toJid(), reason: t });
      if (a.type === "success") return a.result;
      throw (
        a.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(a.error)
          : a.type,
        r("err")(
          "appealCollectionGraphQL: error handling flow not implemented for " +
            JSON.stringify(a),
        )
      );
    }
    async function p(e, t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return m(e, t);
    }
    async function _(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (t == null) throw r("err")("reorderCollectionGraphQL: meUser is null");
      var n = await o(
        "WAWebBizCatalogManagementUpdateCollectionList",
      ).updateCollectionList({
        biz_jid: t.toJid(),
        move: e.map(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return { collection_id: t, from_index: n, to_index: r };
        }),
      });
      if (n.type === "success") return n.result;
      throw (
        n.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(n.error)
          : n.type,
        r("err")(
          "reorderCollectionGraphQL: error handling flow not implemented for " +
            JSON.stringify(n),
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
