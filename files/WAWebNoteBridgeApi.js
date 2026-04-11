__d(
  "WAWebNoteBridgeApi",
  ["WAWebNoteAction", "WAWebNoteCollection"],
  function (t, n, r, o, a, i, l) {
    var e = {
      removeNotes: function (t) {
        var e = t.noteIds;
        o("WAWebNoteCollection").NoteCollection.remove(e);
      },
      updateNoteJidAction: function (t) {
        var e = t.newJid,
          n = t.oldJid;
        o("WAWebNoteAction").updateNoteJidAction(n, e);
      },
      upsertNotesFromSyncd: function (t) {
        var e = t.noteRecords;
        o("WAWebNoteCollection").NoteCollection.add(
          e.map(function (e) {
            return babelHelpers.extends({}, e);
          }),
          { merge: !0 },
        );
      },
    };
    l.NoteBridgeApi = e;
  },
  98,
);
