__d(
  "WAWebParticipantPickerSelectionActions",
  ["WAWebOutContactModel"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return n
        ? Array.from(
            new Map(
              [].concat(e, t != null ? t : []).map(function (e) {
                return [e.id, e];
              }),
            ).values(),
          )
        : t != null
          ? t
          : [];
    }
    function s(e, t, n, o, a, i, l, s) {
      var u = function (t, n) {
          (n instanceof r("WAWebOutContactModel") ? a(n) : o(t, n), l(!0), s());
        },
        c = function (r) {
          if (n) {
            var e = t.at(-1);
            e != null && u(r, e);
          } else i();
        };
      return {
        getCount: function () {
          return n ? t.length : e.length;
        },
        handleRemoveSelection: u,
        handleRemoveLastSelection: c,
      };
    }
    ((l.getParticipantPickerOutContacts = e),
      (l.getParticipantPickerSelectionActions = s));
  },
  98,
);
