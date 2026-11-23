__d(
  "WADeletePreKeyGenerationsApi",
  ["WAGetPrekeyIdsInRange", "WALogger", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["prekey", "prekeyGeneration"],
            "readwrite",
            async function (t) {
              var r = await t.stores.prekeyGeneration.bulkGet(n),
                a = [];
              for (var i of r) {
                if (i == null) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Attempting to delete non-existent prekey generation",
                      ])),
                  );
                  continue;
                }
                for (var l of o("WAGetPrekeyIdsInRange").getPrekeyIdsInRange(
                  i.startingId,
                  i.endingId,
                ))
                  a.push(l);
              }
              await Promise.all([
                t.stores.prekeyGeneration.bulkDelete(n),
                t.stores.prekey.bulkDelete(a),
              ]);
            },
            o("WASignalDB").signalOp("deletePreKeyGenerations"),
          );
      };
    l.deletePreKeyGenerations = s;
  },
  98,
);
