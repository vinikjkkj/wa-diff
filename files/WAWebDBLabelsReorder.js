__d(
  "WAWebDBLabelsReorder",
  ["WALogger", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["label"], async function (n) {
          var r = n[0],
            a = t.reduce(function (e, t, n) {
              return (e.set(t, n), e);
            }, new Map([]));
          try {
            var i = t.map(function (e) {
                return String(e);
              }),
              l = await r.bulkGet(i),
              s = [];
            return (
              l.forEach(function (e) {
                if (e != null) {
                  var t = a.get(Number(e.id));
                  t != null && s.push(r.merge(e.id, { orderIndex: t }));
                }
              }),
              Promise.all(s)
            );
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Label] updateLabelsSortOrder: updating storage failed",
                    ])),
                )
                .tags("labels")
                .sendLogs("labels-db-update-failed"),
              t
            );
          }
        });
    }
    l.updateLabelsSortOrder = s;
  },
  98,
);
