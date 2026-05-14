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
    "WAWebLabelPillColors",
    "WAWebListItemParentType",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebNoop",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSchemaLabel",
    "WAWebStaleBaseCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWid",
    "lodash",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = ["id"],
      p,
      _ = p || (p = o("react")),
      f = n("$InternalEnum").Mirrored(["CREATE", "EDIT", "DELETE"]),
      g = n("$InternalEnum").Mirrored(["IN_PROGRESS", "SUCCESS", "ERROR"]);
    function h(e, t, n) {
      if (n === f.CREATE)
        return e === g.IN_PROGRESS
          ? s._(/*BTDS*/ "Creating list")
          : e === g.SUCCESS
            ? s._(/*BTDS*/ "List created")
            : e === g.ERROR
              ? s._(/*BTDS*/ "List could not be created")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
      if (t)
        switch (e) {
          case g.IN_PROGRESS:
            return s._(/*BTDS*/ "Adding to list");
          case g.SUCCESS:
            return s._(/*BTDS*/ "Added to list");
          case g.ERROR:
            return s._(/*BTDS*/ "Could not be added to list");
        }
      else
        switch (e) {
          case g.IN_PROGRESS:
            return s._(/*BTDS*/ "Updating list");
          case g.SUCCESS:
            return s._(/*BTDS*/ "List updated");
          case g.ERROR:
            return s._(/*BTDS*/ "List could not be updated");
        }
    }
    var y = (function (t) {
      function n() {
        var e;
        return (
          (e = t.call(this) || this),
          (e.$LabelCollectionImpl$p_1 = new Map()),
          e.listenTo(e, "remove", C),
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
                n = babelHelpers.objectWithoutPropertiesLoose(e, m);
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
              d = (i == null ? void 0 : i.suppressSuccessToast) === !0,
              m = o("WAWebListsGatingUtils").isListsEnabled(),
              p =
                m &&
                n.every(function (e) {
                  return e.type === "add";
                }),
              f = a.some(function (e) {
                return e instanceof r("WAWebContactModel");
              });
            f &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "contact model is invalid for editLabelAssociation",
                    ])),
                )
                .sendLogs("contact model is invalid for editLabelAssociation");
            var y = m
                ? h(g.ERROR, p, l)
                : s._(
                    /*BTDS*/ '_j{"*":"Some labels could not be updated","_1":"The label could not be updated"}',
                    [s._plural(n.length)],
                  ),
              C = o("WAWebEditLabelAssociationBridge")
                .editLabelAssociation(this.$LabelCollectionImpl$p_2(n), a)
                .then(function () {
                  t.addOrRemoveLabelsMD(n, a);
                });
            if (d) {
              C.catch(function (e) {
                (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "addingNewLabel dropped",
                    ])),
                ),
                  o("WAWebToastManager").ToastManager.open(
                    _.jsx(o("WAWebToast.react").Toast, { msg: y }),
                  ));
              });
              return;
            }
            var b = o("WAWebActionToast.react").genId(),
              v = new (o("WAWebActionToast.react").ActionType)(
                m
                  ? h(g.IN_PROGRESS, p, l)
                  : s._(
                      /*BTDS*/ '_j{"*":"Changing {count} labels","_1":"Changing {count} label"}',
                      [s._plural(n.length), s._param("count", n.length)],
                    ),
              ),
              S = C.then(function () {
                return new (o("WAWebActionToast.react").ActionType)(
                  m
                    ? h(g.SUCCESS, p, l)
                    : s._(
                        /*BTDS*/ '_j{"*":"{count} labels changed","_1":"1 label changed"}',
                        [s._plural(n.length, "count")],
                      ),
                );
              }).catch(function (e) {
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "addingNewLabel dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(y)
                );
              });
            o("WAWebToastManager").ToastManager.open(
              _.jsx(o("WAWebActionToast.react").ActionToast, {
                id: b,
                initialAction: v,
                pendingAction: S,
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
          if (o("WAWebListsGatingUtils").isListsChatListRowPillEnabled()) {
            var e = new Set();
            this.forEach(function (t) {
              t.colorIndex != null && e.add(t.colorIndex);
            });
            var t = o("WAWebLabelPillColors").CUSTOM_LABEL_COLOR_INDICES.find(
              function (t) {
                return !e.has(t);
              },
            );
            return t != null
              ? t
              : o("WAWebLabelPillColors").CUSTOM_LABEL_COLOR_INDICES[
                  Math.floor(
                    Math.random() *
                      o("WAWebLabelPillColors").CUSTOM_LABEL_COLOR_INDICES
                        .length,
                  )
                ];
          }
          var n = o("WAWebListUtils").getAllLabelColors(),
            r = new Set();
          this.forEach(function (e) {
            e.colorIndex != null && r.add(e.colorIndex);
          });
          var a = Array.from(r).sort(function (e, t) {
            return Number(e) - Number(t);
          });
          if (a.length === 0) return 0;
          var i = a.findIndex(function (e, t) {
            return e !== t;
          });
          return i >= 0
            ? i
            : a.length < n.length
              ? a.length
              : Math.floor(Math.random() * n.length);
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "label sync: malformed mutation, unexpected null predefinedId",
                  ])),
              );
        }),
        n
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    y.model = o("WAWebLabelModel").Label;
    function C(e) {
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
    var b = new y();
    ((l.ListUpdateMode = f), (l.LabelCollection = b));
  },
  226,
);
