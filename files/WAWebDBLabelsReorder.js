__d(
  "WAWebDBLabelsReorder",
  ["WALogger", "WAWebListUtils", "WAWebModelStorageUtils", "WAWebSchemaLabel"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      return o("WAWebListUtils").isMetaAiListEnabled() &&
        (await o("WAWebSchemaLabel")
          .getLabelTable()
          .get(o("WAWebListUtils").META_AI_LIST_ID)) != null
        ? o("WAWebListUtils").loadMetaAiList()
        : null;
    }
    async function u(e) {
      var t = await s();
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["label"], function () {
          return c(e, t);
        });
    }
    async function c(e, t) {
      if (t == null) return d(e);
      await t.keepMetaAiListInPlace(function () {
        return d(e);
      });
    }
    async function d(t) {
      var n = t.reduce(function (e, t, n) {
        return (e.set(t, n), e);
      }, new Map([]));
      try {
        var r = t.map(function (e) {
            return String(e);
          }),
          a = await o("WAWebSchemaLabel").getLabelTable().bulkGet(r),
          i = [];
        (a.forEach(function (e) {
          if (e != null) {
            var t = n.get(Number(e.id));
            t != null &&
              i.push(
                o("WAWebSchemaLabel")
                  .getLabelTable()
                  .merge(e.id, { orderIndex: t }),
              );
          }
        }),
          await Promise.all(i));
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Label] writeLabelsSortOrder: updating storage failed",
                ])),
            )
            .tags("labels")
            .sendLogs("labels-db-update-failed"),
          t
        );
      }
    }
    ((l.loadMetaAiListOrderForReorder = s),
      (l.updateLabelsSortOrder = u),
      (l.writeLabelsSortOrder = c));
  },
  98,
);
