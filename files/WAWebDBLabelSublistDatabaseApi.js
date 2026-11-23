__d(
  "WAWebDBLabelSublistDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaLabelSublist",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = m(e),
        n = await _([t]),
        r = n[0],
        a = o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(r);
      (await o("WAWebSchemaLabelSublist")
        .getLabelSublistTable()
        .createOrReplace(babelHelpers.extends({}, e, { chatJid: a })),
        a !== o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(t) &&
          (await o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .bulkRemove([t])));
    }
    async function s(e) {
      var t = [].concat(await _([e]), [e]);
      await o("WAWebSchemaLabelSublist").getLabelSublistTable().bulkRemove(t);
    }
    async function u(e) {
      var t = (
        await o("WAWebSchemaLabelSublist").getLabelSublistTable().all()
      ).filter(function (t) {
        return t.predefinedId === e;
      });
      return (
        t.length > 0 &&
          (await o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .bulkRemove(t.map(m))),
        t.length
      );
    }
    async function c(e, t) {
      var n,
        r = o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
          predefinedId: e,
          chatJid: t,
        }),
        a = await _([r]),
        i = a[0],
        l =
          (n = await o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .get(i)) != null
            ? n
            : await o("WAWebSchemaLabelSublist").getLabelSublistTable().get(r);
      if (l == null) return null;
      var s = await f([l]),
        u = s[0];
      return u;
    }
    async function d() {
      var e = await o("WAWebSchemaLabelSublist").getLabelSublistTable().all();
      return f(e);
    }
    function m(e) {
      var t = e.chatJid,
        n = e.predefinedId;
      return o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
        chatJid: t,
        predefinedId: n,
      });
    }
    function p(e) {
      return e.filter(function (e) {
        return r("WAWebWid").isWid(e);
      });
    }
    async function _(e) {
      if (
        !o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete()
      )
        return e;
      var t = await o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(
        p(
          Array.from(
            new Set(
              e.map(o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey),
            ),
          ),
        ),
      );
      return e.map(function (e) {
        var n = t.get(o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(e));
        return n == null
          ? e
          : o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
              chatJid: n,
              predefinedId: o(
                "WAWebSchemaLabelSublist",
              ).getPredefinedIdFromPrimaryKey(e),
            });
      });
    }
    async function f(e) {
      if (
        !o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete()
      )
        return e;
      var t = await o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
        p(
          Array.from(
            new Set(
              e.map(function (e) {
                return e.chatJid;
              }),
            ),
          ),
        ),
      );
      return e.map(function (e) {
        var n;
        return babelHelpers.extends({}, e, {
          chatJid: (n = t.get(e.chatJid)) != null ? n : e.chatJid,
        });
      });
    }
    ((l.addOrEditLabelSublist = e),
      (l.removeLabelSublist = s),
      (l.removeLabelSublistsByPredefinedId = u),
      (l.getLabelSublistByChat = c),
      (l.getAllLabelSublist = d));
  },
  98,
);
