__d(
  "WAWebNoteCollection",
  ["WAWebBaseCollection", "WAWebNoteModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return ((t = e.call(this) || this), (t.queriedChatJids = new Set()), t);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.maybeGetNoteByChatJid = function (t) {
          var e = this.findFirst(function (e) {
            return e.chatJid === t;
          });
          return e != null ? e : null;
        }),
        (n.hasCachedQueryForChatJid = function (t) {
          return this.queriedChatJids.has(t);
        }),
        (n.updateCollectionFromDB = function (t, n) {
          (this.queriedChatJids.add(t),
            n != null &&
              this.add(new (o("WAWebNoteModel").Note)(n), { merge: !0 }));
        }),
        (n.purgeNotesByChatJid = function (t) {
          var e = this.where({ chatJid: t });
          (this.remove(e), this.queriedChatJids.delete(t));
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNoteModel").Note;
    var s = new e();
    l.NoteCollection = s;
  },
  98,
);
