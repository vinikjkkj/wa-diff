__d(
  "WAWebMetaAiListActionsImpl",
  [
    "WALogger",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebMetaAiListOrder",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
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
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebListUtils").isMetaAiListEnabled())
            try {
              yield _();
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
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["label"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0];
                    if (
                      (yield t.get(o("WAWebListUtils").META_AI_LIST_ID)) != null
                    )
                      return null;
                    var n = (yield t.all()).filter(function (e) {
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
                      orderIndex: o(
                        "WAWebMetaAiListOrder",
                      ).getDefaultMetaAiOrderIndex(
                        n.filter(function (e) {
                          return e.isActive !== !1;
                        }),
                        d,
                      ),
                      isActive: !0,
                      type: o("WAWebSchemaLabel").ListType.META_AI_THREAD,
                    };
                    return (yield t.createOrMerge(r.id, r), r);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          if (t != null) {
            var r = t.id,
              a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            o("WAWebLabelCollection").LabelCollection.add(
              babelHelpers.extends({ id: r }, a),
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebListUtils").isMetaAiListEnabled()) {
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["label"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0];
                      yield n.merge(o("WAWebListUtils").META_AI_LIST_ID, {
                        isActive: e,
                      });
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
            var t = o("WAWebLabelCollection").LabelCollection.get(
              o("WAWebListUtils").META_AI_LIST_ID,
            );
            t != null && (t.isActive = e);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = null,
            a = !0;
          try {
            t = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["label"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n,
                        r = t[0],
                        a = o("WAWebListUtils").isMetaAiListEnabled()
                          ? yield r.all()
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
                            : o(
                                "WAWebMetaAiListOrder",
                              ).getReanchoredMetaAiOrderIndex(
                                e.find(function (e) {
                                  return i.has(e);
                                }),
                                a,
                                o("WAWebMetaAiListOrder").isManageListRow,
                              );
                      return l != null
                        ? (yield r.merge(o("WAWebListUtils").META_AI_LIST_ID, {
                            orderIndex: l,
                          }),
                          l)
                        : (n = yield r.get(
                              o("WAWebListUtils").META_AI_LIST_ID,
                            )) == null
                          ? void 0
                          : n.orderIndex;
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
          } catch (e) {
            var i;
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Lists] placeMetaAiListAfter: moving the Meta AI list failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("meta-ai-list-move-failed", { sampling: 0.01 }),
              (a = !1),
              (t =
                (i = yield o("WAWebSchemaLabel")
                  .getLabelTable()
                  .get(o("WAWebListUtils").META_AI_LIST_ID)
                  .catch(function () {
                    return null;
                  })) == null
                  ? void 0
                  : i.orderIndex));
          }
          var l = o("WAWebLabelCollection").LabelCollection.get(
            o("WAWebListUtils").META_AI_LIST_ID,
          );
          return (
            l != null &&
              t != null &&
              ((l.orderIndex = t),
              o("WAWebLabelCollection").LabelCollection.trigger("reorder")),
            { orderIndex: t, moved: a }
          );
        })),
        b.apply(this, arguments)
      );
    }
    ((l.keepMetaAiListInPlace = c),
      (l.ensureMetaAiList = m),
      (l.reanchorMetaAiListInMemory = g),
      (l.updateMetaAiListActive = h),
      (l.placeMetaAiListAfter = C));
  },
  98,
);
