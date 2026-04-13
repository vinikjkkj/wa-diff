__d(
  "useWAWebAddParticipantsSelectedContacts",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = o("react-compiler-runtime").c(5),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = new Map()), (e[0] = t))
        : (t = e[0]);
      var n = s(t),
        r = n[0],
        a = n[1],
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t, n) {
            a(function (e) {
              return (n ? e.delete(t.id) : e.set(t.id, t), e);
            });
          }),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        u;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function () {
            a(new Map());
          }),
          (e[2] = u))
        : (u = e[2]);
      var c = u,
        d;
      return (
        e[3] !== r
          ? ((d = {
              selectedContactsMap: r,
              updateSelectedContactsState: l,
              handleClearSelectedContacts: c,
            }),
            (e[3] = r),
            (e[4] = d))
          : (d = e[4]),
        d
      );
    }
    l.default = u;
  },
  98,
);
