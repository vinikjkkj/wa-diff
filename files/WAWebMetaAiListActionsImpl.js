__d(
  "WAWebMetaAiListActionsImpl",
  [
    "WALogger",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebMetaAiListOrder",
    "WAWebModelStorageUtils",
    "WAWebNullFunc",
    "WAWebSchemaLabel",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id"],
      s,
      u;
    function c(e) {
      return o("WAWebMetaAiListOrder").keepMetaAiListInPlace(
        function () {
          return o("WAWebSchemaLabel").getLabelTable().all();
        },
        e,
        function (e) {
          return o("WAWebSchemaLabel")
            .getLabelTable()
            .merge(o("WAWebListUtils").META_AI_LIST_ID, { orderIndex: e });
        },
      );
    }
    function d(e) {
      return (
        !o("WAWebListUtils").isBuiltInList(e.type) &&
        !o("WAWebListUtils").isAiList(e.type) &&
        e.type !== o("WAWebSchemaLabel").ListType.CHANNELS
      );
    }
    async function m() {
      if (o("WAWebListUtils").isMetaAiListEnabled())
        try {
          await p();
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lists] ensureMetaAiList: seeding the Meta AI list failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("meta-ai-list-seed-failed", { sampling: 0.01 });
        }
    }
    async function p() {
      var t = await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["label"], async function (e) {
          var t = e[0];
          if ((await t.get(o("WAWebListUtils").META_AI_LIST_ID)) != null)
            return null;
          var n = (await t.all()).filter(function (e) {
            return (
              o("WAWebMetaAiListOrder").isVisibleListRow(e) &&
              e.id !== o("WAWebListUtils").META_AI_LIST_ID
            );
          });
          if (n.length === 0) return null;
          var r = {
            id: o("WAWebListUtils").META_AI_LIST_ID,
            name: "AI",
            colorIndex: null,
            predefinedId: null,
            orderIndex: o("WAWebMetaAiListOrder").getDefaultMetaAiOrderIndex(
              n.filter(function (e) {
                return e.isActive !== !1;
              }),
              d,
            ),
            isActive: !0,
            type: o("WAWebSchemaLabel").ListType.META_AI_THREAD,
          };
          return (await t.createOrMerge(r.id, r), r);
        });
      if (t != null) {
        var n = t.id,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        o("WAWebLabelCollection").LabelCollection.add(
          babelHelpers.extends({ id: n }, r),
        );
      }
    }
    function _(e) {
      o("WAWebMetaAiListOrder").reanchorMetaAiListInMemory(
        e,
        o("WAWebLabelCollection").LabelCollection.toArray(),
        function (e) {
          var t = o("WAWebLabelCollection").LabelCollection.get(
            o("WAWebListUtils").META_AI_LIST_ID,
          );
          t != null &&
            ((t.orderIndex = e),
            o("WAWebLabelCollection").LabelCollection.trigger("reorder"));
        },
      );
    }
    async function f(e) {
      if (o("WAWebListUtils").isMetaAiListEnabled()) {
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["label"], async function (t) {
            var n = t[0];
            await n.merge(o("WAWebListUtils").META_AI_LIST_ID, { isActive: e });
          });
        var t = o("WAWebLabelCollection").LabelCollection.get(
          o("WAWebListUtils").META_AI_LIST_ID,
        );
        t != null && (t.isActive = e);
      }
    }
    async function g(e) {
      var t = null,
        n = !0;
      try {
        t = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["label"], async function (t) {
            var n,
              r = t[0],
              a = o("WAWebListUtils").isMetaAiListEnabled()
                ? await r.all()
                : null,
              i = new Set(
                (a != null ? a : [])
                  .filter(o("WAWebMetaAiListOrder").isManageListRow)
                  .map(function (e) {
                    return e.id;
                  }),
              ),
              l =
                a == null
                  ? null
                  : o("WAWebMetaAiListOrder").getReanchoredMetaAiOrderIndex(
                      e.find(function (e) {
                        return i.has(e);
                      }),
                      a,
                      o("WAWebMetaAiListOrder").isManageListRow,
                    );
            return l != null
              ? (await r.merge(o("WAWebListUtils").META_AI_LIST_ID, {
                  orderIndex: l,
                }),
                l)
              : (n = await r.get(o("WAWebListUtils").META_AI_LIST_ID)) == null
                ? void 0
                : n.orderIndex;
          });
      } catch (e) {
        var a;
        (o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Lists] placeMetaAiListAfter: moving the Meta AI list failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("meta-ai-list-move-failed", { sampling: 0.01 }),
          (n = !1),
          (t =
            (a = await o("WAWebSchemaLabel")
              .getLabelTable()
              .get(o("WAWebListUtils").META_AI_LIST_ID)
              .catch(o("WAWebNullFunc").returnNull)) == null
              ? void 0
              : a.orderIndex));
      }
      var i = o("WAWebLabelCollection").LabelCollection.get(
        o("WAWebListUtils").META_AI_LIST_ID,
      );
      return (
        i != null &&
          t != null &&
          ((i.orderIndex = t),
          o("WAWebLabelCollection").LabelCollection.trigger("reorder")),
        { orderIndex: t, moved: n }
      );
    }
    ((l.keepMetaAiListInPlace = c),
      (l.ensureMetaAiList = m),
      (l.reanchorMetaAiListInMemory = _),
      (l.updateMetaAiListActive = f),
      (l.placeMetaAiListAfter = g));
  },
  98,
);
