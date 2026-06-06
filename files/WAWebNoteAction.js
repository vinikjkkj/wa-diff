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
    async function c(e, t, n) {
      await m({ actionType: "add", noteType: e, chatJid: t, content: n }, !0);
    }
    async function d(e, t, n, r, o) {
      await m(
        {
          actionType: "edit",
          id: e,
          noteType: t,
          chatJid: n,
          content: r,
          createdAt: o,
        },
        !0,
      );
    }
    async function m(t, n) {
      var a, i;
      o("WAWebMobilePlatforms").isSMB() || s(0, 79042);
      var l = o("WATimeUtils").unixTime(),
        u = t.id;
      u == null && (u = await o("WAWebNotesIdUtils").generateNoteId(t.chatJid));
      var c = {
        id: u,
        type: t.noteType,
        chatJid: t.chatJid,
        content: t.content,
        createdAt: (a = t.createdAt) != null ? a : l,
        modifiedAt: (i = t.modifiedAt) != null ? i : l,
      };
      if (n) {
        var d = await r("WAWebNoteSync").getNoteMutation(c);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Notes] addOrEditNoteAction: id ",
              " mutation generated",
            ])),
          u,
        ),
          await o("WAWebSyncdCoreApi").lockForSync(
            ["note"],
            [d],
            async function () {
              await o("WAWebDBNoteDatabaseApi").addOrEditNote(c);
            },
          ));
      } else await o("WAWebDBNoteDatabaseApi").addOrEditNote(c);
      o("WAWebNoteCollection").NoteCollection.add(babelHelpers.extends({}, c), {
        merge: !0,
      });
    }
    async function p(e, t) {
      var n = await o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t);
      n.length > 0 &&
        (await o("WAWebSchemaNote")
          .getNoteTable()
          .bulkRemove(
            n.map(function (e) {
              return e.id;
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
      (l.updateNoteJidAction = p));
  },
  98,
);
