__d(
  "WAWebNoteAction",
  [
    "invariant",
    "WALogger",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebDBNoteDatabaseApi",
    "WAWebGetOnlyNoteByChatJidJob",
    "WAWebNoteCollection",
    "WAWebNoteModel",
    "WAWebNoteSync",
    "WAWebNotesIdUtils",
    "WAWebSchemaNote",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o("WAWebNoteCollection").NoteCollection.hasCachedQueryForChatJid(e)
          ) {
            var t = yield o(
              "WAWebGetOnlyNoteByChatJidJob",
            ).getOnlyNoteByChatJidJob({ chatJid: e });
            o("WAWebNoteCollection").NoteCollection.updateCollectionFromDB(
              e,
              t,
            );
          }
          return o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(
            e,
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield f(
            { actionType: "add", noteType: e, chatJid: t, content: n },
            !0,
          );
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
          function* (e, t, n, r, o) {
            yield f(
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
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i, l;
          o("WAWebBizGatingUtils").smbNotesV1Enabled() || s(0, 79042);
          var u = o("WATimeUtils").unixTime(),
            c = t.id;
          c == null &&
            (c = yield o("WAWebNotesIdUtils").generateNoteId(t.chatJid));
          var d = {
            id: c,
            type: t.noteType,
            chatJid: t.chatJid,
            content: t.content,
            createdAt: (i = t.createdAt) != null ? i : u,
            modifiedAt: (l = t.modifiedAt) != null ? l : u,
          };
          if (a) {
            var m = yield r("WAWebNoteSync").getNoteMutation(d);
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Notes] addOrEditNoteAction: id ",
                  " mutation generated",
                ])),
              c,
            ),
              yield o("WAWebSyncdCoreApi").lockForSync(
                ["note"],
                [m],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o("WAWebDBNoteDatabaseApi").addOrEditNote(d);
                }),
              ));
          } else yield o("WAWebDBNoteDatabaseApi").addOrEditNote(d);
          o("WAWebNoteCollection").NoteCollection.add(
            babelHelpers.extends({}, d),
            { merge: !0 },
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t);
          n.length > 0 &&
            (yield o("WAWebSchemaNote")
              .getNoteTable()
              .bulkRemove(
                n.map(function (e) {
                  return e.id;
                }),
              ),
            o("WAWebNoteCollection").NoteCollection.purgeNotesByChatJid(t));
          var r = yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(e);
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
        })),
        y.apply(this, arguments)
      );
    }
    ((l.retrieveOnlyNoteForChatJid = u),
      (l.noteAddAction = d),
      (l.noteEditAction = p),
      (l.addOrEditNoteAction = f),
      (l.updateNoteJidAction = h));
  },
  98,
);
