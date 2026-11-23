__d(
  "WAWebNoteAction",
  [
    "invariant",
    "WALogger",
    "WATimeUtils",
    "WAWebDBNoteDatabaseApi",
    "WAWebGetOnlyNoteByChatJidJob",
    "WAWebMobilePlatforms",
    "WAWebNoteCollection",
    "WAWebNoteModel",
    "WAWebNoteSync",
    "WAWebNotesIdUtils",
    "WAWebSchemaNote",
    "WAWebSyncdCoreApi",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    async function u(e) {
      if (
        !o("WAWebNoteCollection").NoteCollection.hasCachedQueryForChatJid(e)
      ) {
        var t = await o("WAWebGetOnlyNoteByChatJidJob").getOnlyNoteByChatJidJob(
          { chatJid: e },
        );
        o("WAWebNoteCollection").NoteCollection.updateCollectionFromDB(e, t);
      }
      return o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(e);
    }
    async function c(e) {
      var t = e.chatJid,
        n = e.content,
        r = e.type;
      await m({ actionType: "add", noteType: r, chatJid: t, content: n });
    }
    async function d(e) {
      var t = e.chatJid,
        n = e.content,
        r = e.createdAt,
        o = e.id,
        a = e.type;
      await m({
        actionType: "edit",
        id: o,
        noteType: a,
        chatJid: t,
        content: n,
        createdAt: r,
      });
    }
    async function m(t) {
      var n;
      o("WAWebMobilePlatforms").isSMB() || s(0, 79042);
      var a = o("WATimeUtils").unixTime(),
        i = t.id;
      i == null && (i = await o("WAWebNotesIdUtils").generateNoteId(t.chatJid));
      var l = {
          id: i,
          type: t.noteType,
          chatJid: t.chatJid,
          content: t.content,
          createdAt: (n = t.createdAt) != null ? n : a,
          modifiedAt: a,
        },
        u = await r("WAWebNoteSync").getNoteMutation(l);
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[Notes] addOrEditNoteAction: id ",
            " mutation generated",
          ])),
        i,
      ),
        await o("WAWebSyncdCoreApi").lockForSync(
          ["note"],
          [u],
          async function () {
            await o("WAWebDBNoteDatabaseApi").addOrEditNote(l);
          },
        ),
        o("WAWebNoteCollection").NoteCollection.add(
          babelHelpers.extends({}, l),
          { merge: !0 },
        ));
    }
    async function p(e) {
      var t = e.canonicalChatJid,
        n = e.chatJid,
        a = e.content,
        i = e.type;
      o("WAWebMobilePlatforms").isSMB() || s(0, 79042);
      var l = o("WATimeUtils").unixTime(),
        u = {
          id: await o("WAWebNotesIdUtils").generateNoteId(n),
          type: i,
          chatJid: n,
          content: a,
          createdAt: l,
          modifiedAt: l,
        },
        c = await r("WAWebNoteSync").getNoteMutation(u),
        d = r("err")("Note already exists");
      try {
        await o("WAWebSyncdCoreApi").lockForSync(
          ["note"],
          [c],
          async function () {
            if (
              (await o("WAWebDBNoteDatabaseApi").getNotesByChatJid(n)).length >
                0 ||
              (t != null &&
                t !== n &&
                (await o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t))
                  .length > 0)
            )
              throw d;
            await o("WAWebDBNoteDatabaseApi").addOrEditNote(u);
          },
        );
      } catch (e) {
        if (e === d) return !1;
        throw e;
      }
      return (
        o("WAWebNoteCollection").NoteCollection.add(
          babelHelpers.extends({}, u),
          { merge: !0 },
        ),
        !0
      );
    }
    async function _(e, t) {
      var n = await o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t);
      n.length > 0 &&
        (await o("WAWebSchemaNote")
          .getNoteTable()
          .bulkRemove(
            n.map(function (e) {
              return e.id;
            }),
          ),
        o("WAWebNoteCollection").NoteCollection.removeNotesByIds(
          n.map(function (e) {
            return String(e.id);
          }),
        ),
        o("WAWebNoteCollection").NoteCollection.purgeNotesByChatJid(t));
      var r = await o("WAWebDBNoteDatabaseApi").getNotesByChatJid(e);
      if (r.length !== 0) {
        var a = r.map(function (e) {
            return babelHelpers.extends({}, e, { chatJid: t });
          }),
          i = a.map(function (e) {
            return new (o("WAWebNoteModel").Note)(e);
          });
        return (
          o("WAWebNoteCollection").NoteCollection.purgeNotesByChatJid(e),
          o("WAWebNoteCollection").NoteCollection.add(i, { merge: !0 }),
          o("WAWebDBNoteDatabaseApi").bulkUpdateNotes(a)
        );
      }
    }
    ((l.retrieveOnlyNoteForChatJid = u),
      (l.noteAddAction = c),
      (l.noteEditAction = d),
      (l.addOrEditNoteAction = m),
      (l.noteAddIfAbsentAction = p),
      (l.updateNoteJidAction = _));
  },
  98,
);
