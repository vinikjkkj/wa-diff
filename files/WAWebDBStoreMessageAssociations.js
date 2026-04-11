__d(
  "WAWebDBStoreMessageAssociations",
  ["Promise", "WALogger", "WAWebSchemaMessageAssociation", "compactMap"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return o("WAWebSchemaMessageAssociation")
        .getMessageAssociationTable()
        .bulkCreate(e);
    }
    function c(t, a) {
      a === void 0 && (a = !1);
      var i = r("compactMap")(t, function (e) {
        var t = e.associationType,
          n = e.internalId,
          r = e.parentMsgKey;
        return r != null && t != null && n != null
          ? {
              msgKey: e.id.toString(),
              parentMsgKey: r,
              associationType: t,
              msgKeyInternalId: n,
            }
          : null;
      });
      return (
        a &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "storeEncryptedDBMessages: ",
                " associations stored",
              ])),
            i.length,
          ),
        i.length ? u(i) : (s || (s = n("Promise"))).resolve()
      );
    }
    l.bulkStoreMessageAssociations = c;
  },
  98,
);
