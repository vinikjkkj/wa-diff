__d(
  "MAWRemoveCorruptedParticipantsFromOneToOneChat",
  ["I64", "Promise", "ReQL", "WAJids", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = o("WAJids").extractUserId(a),
              u = [l];
            i !== l && u.push(i);
            var c = yield o("ReQL").toArrayAsync(
                o("ReQL").fromTableAscending(t.participants).getKeyRange(r),
              ),
              d = c
                .filter(function (e) {
                  return !u.includes(
                    (s || (s = o("I64"))).to_string(e.contactId),
                  );
                })
                .map(function (e) {
                  return e.contactId;
                });
            yield (e || (e = n("Promise"))).all(
              d.map(function (e) {
                return t.participants.delete(r, e);
              }),
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
