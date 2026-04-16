__d(
  "WAWebLabelCollection",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebAddToFavoritesAction",
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebContactModel",
    "WAWebEditLabelAssociationBridge",
    "WAWebLabelModel",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebNoop",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSchemaLabel",
    "WAWebStaleBaseCollection",
    "WAWebToastManager",
    "WAWebWid",
    "lodash",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = ["id"],
      m,
      p = m || (m = o("react")),
      _ = n("$InternalEnum").Mirrored(["CREATE", "EDIT", "DELETE"]),
      f = n("$InternalEnum").Mirrored(["IN_PROGRESS", "SUCCESS", "ERROR"]);
    function g(e, t, n) {
      if (n === _.CREATE)
        return e === f.IN_PROGRESS
          ? s._(/*BTDS*/ "Creating list")
          : e === f.SUCCESS
            ? s._(/*BTDS*/ "List created")
            : e === f.ERROR
              ? s._(/*BTDS*/ "List could not be created")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      if (t)
        switch (e) {
          case f.IN_PROGRESS:
            return s._(/*BTDS*/ "Adding to list");
          case f.SUCCESS:
            return s._(/*BTDS*/ "Added to list");
          case f.ERROR:
            return s._(/*BTDS*/ "Could not be added to list");
        }
      else
        switch (e) {
          case f.IN_PROGRESS:
            return s._(/*BTDS*/ "Updating list");
          case f.SUCCESS:
            return s._(/*BTDS*/ "List updated");
          case f.ERROR:
            return s._(/*BTDS*/ "List could not be updated");
        }
    }
    var h = (function (t) {
      function n() {
        var e;
        return (
          (e = t.call(this) || this),
          (e.$LabelCollectionImpl$p_1 = new Map()),
          e.listenTo(e, "remove", y),
          e
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.initializeFromCache = function (t) {
          var e = this,
            n = t.filter(function (t) {
              var n = t.type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED;
              return (
                n && e.addToServerAssignedLabelIdMap(t.id, t.predefinedId),
                !n
              );
            }),
            r = n.map(function (e) {
              var t = e.id,
                n = babelHelpers.objectWithoutPropertiesLoose(e, d);
              return babelHelpers.extends({ id: t }, n);
            });
          this.add(r);
        }),
        (a.initializeAssociationsFromCache = function (t) {
          t.forEach(function (e) {
            var t = e.associationId,
              n = e.labelId;
            o("WAWebBizLabelUtils").addToLabelCollection(
              t,
              [n],
              o("WAWebListItemParentType").LabelItemParentType.Chat,
            );
          });
        }),
        (a.removeAllLabelsMD = function (t) {
          return this.addOrRemoveLabelsMD(
            (t.labels || []).map(function (e) {
              return { type: "remove", id: e };
            }),
            [t],
          );
        }),
        (a.addOrRemoveLabelsMD = function (t, n) {
          t.forEach(function (e) {
            var t = e.id,
              a = e.listType,
              i = e.type;
            n.forEach(function (e) {
              var n = o("WAWebBizLabelUtils").getParentTypeFromModel(e),
                l = e.id.toString();
              a === o("WAWebSchemaLabel").ListType.FAVORITES
                ? e.id instanceof r("WAWebWid") &&
                  (i === "add"
                    ? o("WAWebAddToFavoritesAction")
                        .addToFavoritesAction([e.id], { suppressToast: !0 })
                        .catch(r("WAWebNoop"))
                    : o("WAWebRemoveFromFavoritesAction")
                        .removeFromFavoritesAction(e.id, { suppressToast: !0 })
                        .catch(r("WAWebNoop")))
                : i === "add"
                  ? o("WAWebBizLabelUtils").addToLabelCollection(l, [t], n)
                  : o("WAWebBizLabelUtils").removeLabelFromCollection(l, t, n);
            });
          });
        }),
        (a.addOrRemoveLabels = function (n, a, i) {
          var t = this;
          if (!(n.length === 0 || a.length === 0)) {
            var l = i == null ? void 0 : i.listUpdateMode,
              c = o("WAWebListsGatingUtils").isListsEnabled(),
              d =
                c &&
                a.some(function (e) {
                  var t, n;
                  return (
                    ((t = (n = e.labels) == null ? void 0 : n.length) != null
                      ? t
                      : 0) > 0 || e.isFavorite
                  );
                }),
              m = o("WAWebActionToast.react").genId(),
              _ = new (o("WAWebActionToast.react").ActionType)(
                c
                  ? g(f.IN_PROGRESS, !d, l)
                  : s._(
                      /*BTDS*/ '_j{"*":"Changing {count} labels","_1":"Changing {count} label"}',
                      [s._plural(n.length), s._param("count", n.length)],
                    ),
              ),
              h = a.some(function (e) {
                return e instanceof r("WAWebContactModel");
              });
            h &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "contact model is invalid for editLabelAssociation",
                    ])),
                )
                .sendLogs("contact model is invalid for editLabelAssociation");
            var y = o("WAWebEditLabelAssociationBridge")
              .editLabelAssociation(this.$LabelCollectionImpl$p_2(n), a)
              .then(function () {
                t.addOrRemoveLabelsMD(n, a);
              })
              .then(function () {
                return new (o("WAWebActionToast.react").ActionType)(
                  c
                    ? g(f.SUCCESS, !d, l)
                    : s._(
                        /*BTDS*/ '_j{"*":"{count} labels changed","_1":"1 label changed"}',
                        [s._plural(n.length, "count")],
                      ),
                );
              })
              .catch(function (e) {
                return (
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "addingNewLabel dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    c
                      ? g(f.ERROR, !d, l)
                      : s._(
                          /*BTDS*/ '_j{"*":"Some labels could not be updated","_1":"The label could not be updated"}',
                          [s._plural(n.length)],
                        ),
                  )
                );
              });
            o("WAWebToastManager").ToastManager.open(
              p.jsx(o("WAWebActionToast.react").ActionToast, {
                id: m,
                initialAction: _,
                pendingAction: y,
              }),
            );
          }
        }),
        (a.$LabelCollectionImpl$p_2 = function (t) {
          return t
            .map(function (e) {
              if (e.type === "remove") {
                var t = o(
                  "WAWebBizLabelUtils",
                ).mapManualLabelIdToDetectedOutcomeLabelId(e.id);
                if (t != null)
                  return [
                    babelHelpers.extends({}, e, {
                      listType: o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED,
                      id: t,
                    }),
                    e,
                  ];
              }
              return e;
            })
            .flat(1);
        }),
        (a.getLabelsForModel = function (t, n) {
          return this.filter(function (e) {
            return e.labelItemCollection.get(
              o("WAWebBizLabelUtils").createLabelItemId(t, e.id, n),
            );
          }).map(function (e) {
            return e.id;
          });
        }),
        (a.getNextAvailableColor = function () {
          var e = o("WAWebListUtils").getAllLabelColors(),
            t = new Set();
          this.forEach(function (e) {
            e.colorIndex != null && t.add(e.colorIndex);
          });
          var n = Array.from(t).sort(function (e, t) {
            return Number(e) - Number(t);
          });
          if (n.length === 0) return 0;
          var r = n.findIndex(function (e, t) {
            return e !== t;
          });
          return r >= 0
            ? r
            : n.length < e.length
              ? n.length
              : Math.floor(Math.random() * e.length);
        }),
        (a.getChatLabelsWithUnarchivedAssociations = function () {
          return this.filter(function (e) {
            return e.count === 0
              ? !1
              : e.labelItemCollection.some(function (e) {
                  switch (e.parentType) {
                    case o("WAWebListItemParentType").LabelItemParentType.Chat:
                      var t = o("WAWebChatCollection").ChatCollection.get(
                        e.parentId,
                      );
                      return !(
                        t == null ||
                        t.archive === !0 ||
                        t.isLocked === !0
                      );
                    case o("WAWebListItemParentType").LabelItemParentType
                      .Contact:
                      return !1;
                  }
                });
          });
        }),
        (a.getActiveLists = function () {
          return this.filter(function (e) {
            return e.isActive !== !1;
          });
        }),
        (a.getNextOrderIndex = function () {
          var e = 0;
          return (
            this.forEach(function (t) {
              t.orderIndex > e && (e = t.orderIndex);
            }),
            e + 1
          );
        }),
        (a.getInactivePresetLists = function () {
          return this.filter(function (e) {
            return (
              e.isActive === !1 && o("WAWebListUtils").isBuiltInList(e.type)
            );
          });
        }),
        (a.getChatLists = function () {
          return this.filter(function (e) {
            return e.labelItemCollection.length === 0
              ? !0
              : e.labelItemCollection.some(function (e) {
                  switch (e.parentType) {
                    case o("WAWebListItemParentType").LabelItemParentType
                      .Chat: {
                      var t = o("WAWebChatCollection").ChatCollection.get(
                        e.parentId,
                      );
                      return !(t == null || t.isLocked === !0);
                    }
                    case o("WAWebListItemParentType").LabelItemParentType
                      .Contact:
                      return !1;
                  }
                });
          });
        }),
        (a.getCustomLists = function () {
          return this.filter(function (e) {
            return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
          });
        }),
        (a.getServerAssignedLabelIdMap = function () {
          return this.$LabelCollectionImpl$p_1;
        }),
        (a.addToServerAssignedLabelIdMap = function (t, n) {
          n != null && !this.$LabelCollectionImpl$p_1.has(t)
            ? this.$LabelCollectionImpl$p_1.set(t, n)
            : n == null &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "label sync: malformed mutation, unexpected null predefinedId",
                  ])),
              );
        }),
        n
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    h.model = o("WAWebLabelModel").Label;
    function y(e) {
      var t = e.labelItemCollection;
      t.toArray().forEach(function (e) {
        var t = e.labelId,
          n = e.parentId,
          a = e.parentType,
          i = o("WAWebBizLabelUtils").getParentCollection(a).get(n);
        i &&
          (i.labels = r("lodash").remove(i.labels, function (e) {
            return e !== t;
          }));
      });
    }
    var C = new h();
    ((l.ListUpdateMode = _), (l.LabelCollection = C));
  },
  226,
);
