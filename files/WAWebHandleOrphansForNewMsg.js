__d(
  "WAWebHandleOrphansForNewMsg",
  [
    "Promise",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebMessageAssociationGatingUtils",
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
          var r = [
            o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(t),
          ];
          (o(
            "WAWebMessageAssociationGatingUtils",
          ).isMessageAssociationInfraEnabled() &&
            r.push(
              o(
                "WAWebDBAssociatedMsgsAttachDetachAPI",
              ).processOrphansFromAssociationsTableForNewMsg([t]),
            ),
            yield (e || (e = n("Promise"))).all(r));
        })),
        u.apply(this, arguments)
      );
    }
    l.handleOrphansForNewMsg = s;
  },
  98,
);
