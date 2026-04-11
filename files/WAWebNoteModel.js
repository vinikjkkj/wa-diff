__d(
  "WAWebNoteModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.type = o("WAWebBaseModel").prop()),
          (t.chatJid = o("WAWebBaseModel").prop()),
          (t.content = o("WAWebBaseModel").prop()),
          (t.createdAt = o("WAWebBaseModel").prop()),
          (t.modifiedAt = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          e.prototype.initialize.call(this);
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "note";
    var s = o("WAWebBaseModel").defineModel(e);
    l.Note = s;
  },
  98,
);
