__d(
  "WAWebHandleOrphansForNewMsg",
  [
    "Promise",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBProcessOrphansForNewMsg",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (e || (e = n("Promise"))).all([
            o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(t),
            o(
              "WAWebDBAssociatedMsgsAttachDetachAPI",
            ).processOrphansFromAssociationsTableForNewMsg([t]),
          ]);
        })),
        u.apply(this, arguments)
      );
    }
    l.handleOrphansForNewMsg = s;
  },
  98,
);
