__d(
  "useWAWebAddParticipantsSelectedContacts",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(new Map()),
        t = e[0],
        n = e[1],
        r = function (t, r) {
          n(function (e) {
            return (r ? e.delete(t.id) : e.set(t.id, t), e);
          });
        },
        o = function () {
          n(new Map());
        };
      return {
        selectedContactsMap: t,
        updateSelectedContactsState: r,
        handleClearSelectedContacts: o,
      };
    }
    l.default = u;
  },
  98,
);
