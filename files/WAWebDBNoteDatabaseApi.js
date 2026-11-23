__d(
  "WAWebDBNoteDatabaseApi",
  ["WALogger", "WAWebSchemaNote"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      return o("WAWebSchemaNote").getNoteTable().createOrReplace(e);
    }
    async function u(e) {
      var t = o("WAWebSchemaNote").getNoteTable().equals(["chatJid"], e);
      return t;
    }
    async function c(e) {
      return o("WAWebSchemaNote").getNoteTable().anyOf(["chatJid"], e);
    }
    async function d(t) {
      var n = await u(t);
      return (
        n.length > 1 &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getOnlyNoteByChatJid] >1 note for jid ",
                "",
              ])),
            t,
          ),
        n.length > 0 ? n[0] : null
      );
    }
    async function m(e) {
      return o("WAWebSchemaNote").getNoteTable().bulkCreateOrMerge(e);
    }
    ((l.addOrEditNote = s),
      (l.getNotesByChatJid = u),
      (l.getNotesByChatJids = c),
      (l.getOnlyNoteByChatJid = d),
      (l.bulkUpdateNotes = m));
  },
  98,
);
