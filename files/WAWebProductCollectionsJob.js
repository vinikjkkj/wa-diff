__d(
  "WAWebProductCollectionsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementAppealCollection",
    "WAWebBizCatalogManagementCreateCollection",
    "WAWebBizCatalogManagementDeleteCollections",
    "WAWebBizCatalogManagementUpdateCollection",
    "WAWebBizCatalogManagementUpdateCollectionList",
    "WAWebBizGatingUtils",
    "WAWebHttpErrors",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebNetworkStatus",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (a == null) throw r("err")("createCollection: meUser is null");
          var i = yield o(
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
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(i.error),
            r("err")(
              "createCollection: error handling flow not implemented for " +
                JSON.stringify(i),
            )
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (n == null)
            throw r("err")("deleteCollectionGraphQL: meUser is null");
          var a = yield o(
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return u(e, t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (l == null)
              throw r("err")("editCollectionGraphQL: meUser is null");
            var s = {
              collection: { id: e, biz_jid: l.toJid(), catalog_session_id: i },
            };
            (t != null && (s.collection.name = t),
              n.length > 0 && (s.collection.add = { ids: n }),
              a.length > 0 && (s.collection.remove = { ids: a }));
            var u = yield o(
              "WAWebBizCatalogManagementUpdateCollection",
            ).updateCollection(s);
            if (u.type === "success") return u.collectionResult;
            throw (
              u.type === "graphql-error" &&
                o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(u.error),
              r("err")(
                "editCollectionGraphQL: unexpected result type " +
                  JSON.stringify(u),
              )
            );
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
              throw new (o("WAWebBackendErrors").E451)();
            return p(e, t, n, r, a);
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (n == null)
            throw r("err")("appealCollectionGraphQL: meUser is null");
          var a = yield o(
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return h(e, t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (t == null)
            throw r("err")("reorderCollectionGraphQL: meUser is null");
          var n = yield o(
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
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("WAWebNetworkStatus").online)
            throw new (o("WAWebHttpErrors").HttpNetworkError)();
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return v(e);
        })),
        L.apply(this, arguments)
      );
    }
    ((l.createCollection = e),
      (l.deleteCollection = d),
      (l.editCollection = f),
      (l.appealCollection = C),
      (l.reorderCollection = R));
  },
  98,
);
