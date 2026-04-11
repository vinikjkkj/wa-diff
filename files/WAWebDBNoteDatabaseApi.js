__d(
  "WAWebDBNoteDatabaseApi",
  ["WALogger", "WAWebSchemaNote", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaNote").getNoteTable().createOrReplace(e);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebSchemaNote").getNoteTable().equals(["chatJid"], e);
          return t;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield c(t);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebSchemaNote").getNoteTable().bulkCreateOrMerge(e);
        })),
        f.apply(this, arguments)
      );
    }
    ((l.addOrEditNote = s),
      (l.getNotesByChatJid = c),
      (l.getOnlyNoteByChatJid = m),
      (l.bulkUpdateNotes = _));
  },
  98,
);
