__d(
  "WAWebOrgMembersPhash",
  ["WACryptoSha256", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.some(function (e) {
              return e.role == null;
            }) ||
            new Set(
              e.map(function (e) {
                return e.lid;
              }),
            ).size !== e.length
          )
            return null;
          var t = new TextEncoder(),
            n = []
              .concat(e)
              .sort(u)
              .flatMap(function (e) {
                var t;
                return [
                  e.lid + "@lid",
                  e.role == null ? "" : e.role,
                  (t = e.memberTag) != null ? t : "",
                ];
              })
              .map(function (e) {
                var n = t.encode(e);
                return [t.encode(n.length + ":"), n];
              })
              .flat(),
            r = n.reduce(function (e, t) {
              return e + t.length;
            }, 0),
            a = new Uint8Array(r),
            i = 0;
          return (
            n.forEach(function (e) {
              (a.set(e, i), (i += e.length));
            }),
            o("WACryptoSha256").sha256Base64(a)
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return e.lid.length !== t.lid.length
        ? e.lid.length - t.lid.length
        : e.lid === t.lid
          ? 0
          : e.lid < t.lid
            ? -1
            : 1;
    }
    l.computeOrgMembersPhash = e;
  },
  98,
);
