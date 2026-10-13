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
    "asyncToGeneratorRuntime",
    "err",
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatJid,
            n = e.content,
            r = e.type;
          yield f({ actionType: "add", noteType: r, chatJid: t, content: n });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatJid,
            n = e.content,
            r = e.createdAt,
            o = e.id,
            a = e.type;
          yield f({
            actionType: "edit",
            id: o,
            noteType: a,
            chatJid: t,
            content: n,
            createdAt: r,
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a;
          o("WAWebMobilePlatforms").isSMB() || s(0, 79042);
          var i = o("WATimeUtils").unixTime(),
            l = t.id;
          l == null &&
            (l = yield o("WAWebNotesIdUtils").generateNoteId(t.chatJid));
          var u = {
              id: l,
              type: t.noteType,
              chatJid: t.chatJid,
              content: t.content,
              createdAt: (a = t.createdAt) != null ? a : i,
              modifiedAt: i,
            },
            c = yield r("WAWebNoteSync").getNoteMutation(u);
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Notes] addOrEditNoteAction: id ",
                " mutation generated",
              ])),
            l,
          ),
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["note"],
              [c],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebDBNoteDatabaseApi").addOrEditNote(u);
              }),
            ),
            o("WAWebNoteCollection").NoteCollection.add(
              babelHelpers.extends({}, u),
              { merge: !0 },
            ));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canonicalChatJid,
            a = e.chatJid,
            i = e.content,
            l = e.type;
          o("WAWebMobilePlatforms").isSMB() || s(0, 79042);
          var u = o("WATimeUtils").unixTime(),
            c = {
              id: yield o("WAWebNotesIdUtils").generateNoteId(a),
              type: l,
              chatJid: a,
              content: i,
              createdAt: u,
              modifiedAt: u,
            },
            d = yield r("WAWebNoteSync").getNoteMutation(c),
            m = r("err")("Note already exists");
          try {
            yield o("WAWebSyncdCoreApi").lockForSync(
              ["note"],
              [d],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (
                  (yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(a))
                    .length > 0 ||
                  (t != null &&
                    t !== a &&
                    (yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t))
                      .length > 0)
                )
                  throw m;
                yield o("WAWebDBNoteDatabaseApi").addOrEditNote(c);
              }),
            );
          } catch (e) {
            if (e === m) return !1;
            throw e;
          }
          return (
            o("WAWebNoteCollection").NoteCollection.add(
              babelHelpers.extends({}, c),
              { merge: !0 },
            ),
            !0
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
          var n = yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t);
          n.length > 0 &&
            (yield o("WAWebSchemaNote")
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
        b.apply(this, arguments)
      );
    }
    ((l.retrieveOnlyNoteForChatJid = u),
      (l.noteAddAction = d),
      (l.noteEditAction = p),
      (l.addOrEditNoteAction = f),
      (l.noteAddIfAbsentAction = h),
      (l.updateNoteJidAction = C));
  },
  98,
);
