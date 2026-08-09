__d(
  "MWGetOtherContactOrSelf",
  ["I64", "ReQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = yield o("ReQL").toArrayAsync(
            o("ReQL").fromTableAscending(r.tables.participants).getKeyRange(t),
          );
          if (a.length === 1) {
            var i = a[0];
            return o("ReQL").firstAsync(
              o("ReQL")
                .fromTableAscending(r.tables.contacts)
                .getKeyRange(i.contactId),
            );
          }
          if (!(a.length > 2)) {
            var l = a.find(function (t) {
              return !(e || (e = o("I64"))).equal(t.contactId, n);
            });
            if (l != null)
              return o("ReQL").firstAsync(
                o("ReQL")
                  .fromTableAscending(r.tables.contacts)
                  .getKeyRange(l.contactId),
              );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getOtherContactOrSelf = s;
  },
  98,
);
