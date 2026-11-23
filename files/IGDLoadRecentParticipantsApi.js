__d(
  "IGDLoadRecentParticipantsApi",
  ["I64", "LSIntEnum", "MAWReStoreDb", "ReQL", "WAJids"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = async function (n, r) {
        var t = await o("MAWReStoreDb").getDB(i.id + ":30"),
          a = await o("ReQL").toArrayAsync(
            o("ReQL")
              .fromTableDescending(
                t.tables.threads.index("lastActivityTimestampMs"),
              )
              .filter(function (t) {
                return (e || (e = o("I64"))).equal(
                  t.threadType,
                  (s || (s = o("LSIntEnum"))).ofNumber(1),
                );
              })
              .take(n),
          ),
          l = [];
        return (
          a.forEach(function (t) {
            var n = o("WAJids").interpretAsUserJid(
              o("WAJids").toMsgrUserJid(
                (e || (e = o("I64"))).to_string(t.threadKey),
              ),
            );
            n != null && n !== r && l.push(n);
          }),
          new Set(l)
        );
      };
    l.loadRecentParticipants = u;
  },
  98,
);
