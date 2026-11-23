__d(
  "AdsBulkEditSelectors",
  [
    "invariant",
    "AdsAccountCreationUtils",
    "AdsAccountStore",
    "AdsAdObjectsSelectors",
    "AdsAdgroupBulkEditStore",
    "AdsAdgroupBulkEditValidationStore",
    "AdsAdgroupCombinedIDNameStore",
    "AdsBulkEditCampaignStructureProvider",
    "AdsBulkEditDialogContentUtils",
    "AdsBulkEditGKQEUtil",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItems",
    "AdsBulkEditMenuPluginResolver",
    "AdsBulkEditUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditStore",
    "AdsCampaignGroupBulkEditStore",
    "AdsErrorUtils",
    "AdsLoadObjectUtils",
    "AdsMgmtCampaignGroupTodaySpentStore",
    "AdsObjectLevelToFragmentStore",
    "AdsSelectorNameUtils",
    "adsBulkAdoptOpportunityShouldShowBulkAdoptNux",
    "adsBulkEditGetCampaignContext",
    "adsBulkEditGetCampaignGroupContext",
    "adsCampaignBulkEditValidationErrorSpecSelector",
    "adsCampaignGroupBulkEditValidationErrorSpecSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsCreateStructuredSelector",
    "adsStoreToSelector",
    "adsUEditorCampaignGroupPublishStatusSelector",
    "adsUEditorCampaignPublishStatusSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "getByPath",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = r("adsCreateSelectorsByLevel"))(function (e) {
        switch (e) {
          case "campaign":
            return r("adsStoreToSelector")(r("AdsCampaignGroupBulkEditStore"));
          case "ad_set":
            return r("adsStoreToSelector")(r("AdsCampaignBulkEditStore"));
          case "ad":
            return r("adsStoreToSelector")(r("AdsAdgroupBulkEditStore"));
        }
        s(0, 20828, e);
      }),
      c = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            var e = t.changedColumnsByRowMap;
            return e;
          },
          { name: i.id },
        );
      }),
      d = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            var e = t.dialogType;
            return r("nullthrows")(e);
          },
          { name: i.id },
        );
      }),
      m = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            return t.rows;
          },
          { name: i.id },
        );
      }),
      p = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            var e = t.hiddenRows,
              n = t.rows;
            return n.concat(e);
          },
          { name: i.id },
        );
      }),
      _ = e(function (e) {
        return r("adsCreateSelector")(
          [d[e]],
          function (t) {
            return r("AdsBulkEditMenuPluginResolver")
              .resolve({ dialogType: t })
              .getBulkControlConfig();
          },
          { name: i.id },
        );
      }),
      f = e(function (e) {
        return r("adsCreateSelector")(
          [d[e]],
          function (t) {
            var e = r("AdsBulkEditMenuPluginResolver").resolve({
              dialogType: t,
            });
            return (
              e.columnConfigs.length !== 0 || s(0, 56493, e),
              e.columnConfigs
            );
          },
          { name: i.id },
        );
      }),
      g = e(function (e) {
        return r("adsCreateSelector")(
          [f[e]],
          function (t) {
            var e = t[t.length - 1];
            return e.columnKey;
          },
          { name: i.id },
        );
      }),
      h = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            var e = t.selection;
            return e;
          },
          { name: i.id },
        );
      }),
      y = e(function (e) {
        return r("adsCreateSelector")(
          [h[e], r("AdsBulkEditCampaignStructureProvider").toFluxSelector()],
          function (n, a) {
            var t = a.selectedIDs;
            if (
              !o(
                "AdsBulkEditGKQEUtil",
              ).isPassingBulkEditModalInlineNavigationGK(!0)
            )
              return n;
            var i = t.get(e);
            return i != null ? r("immutable").OrderedSet(i) : n;
          },
          { name: i.id },
        );
      }),
      C = e(function (e) {
        return r("adsCreateSelector")(
          [d[e], y[e], m[e]],
          function (t, n, a) {
            var e = r("AdsBulkEditMenuPluginResolver")
              .resolve({ dialogType: t })
              .getSchema();
            if (!e) return null;
            var i = n
              .toArray()
              .map(function (e) {
                var t;
                return (t = a.get(e)) == null ? void 0 : t.current;
              })
              .filter(Boolean);
            return o("AdsBulkValueUtils").aggregateDeep(e, i);
          },
          { name: i.id },
        );
      }),
      b = e(function (e) {
        return r("adsCreateStructuredSelector")(
          {
            bulkControlConfigProps: _[e],
            bulkControlSpec: C[e],
            dialogType: d[e],
            selection: y[e],
          },
          i.id,
        );
      }),
      v = e(function (e) {
        var t = r("nullthrows")(r("AdsObjectLevelToFragmentStore").get(e));
        return r("adsCreateStoreSelector")(
          [t],
          function (n) {
            return t.getChangedFields(n.id);
          },
          { name: i.id },
        );
      }),
      S = e(function (e) {
        var t = v[e];
        return r("adsCreateSelector")(
          [m[e]],
          function (n) {
            var e = n.map(function (e) {
                return e.current;
              }),
              r = Array.from(e.keys()),
              o = r.map(function (e) {
                return t({ id: e });
              });
            return o.some(function (e) {
              return e.size > 0;
            });
          },
          { name: i.id },
        );
      }),
      R = function (t) {
        var e = o(
          "adsUEditorCampaignGroupPublishStatusSelector",
        ).adsUEditorCampaignGroupPublishStatusSelector(
          r("adsBulkEditGetCampaignGroupContext")([t]),
        );
        return !r("nullthrows")(e.get(t)).isNew;
      },
      L = function (t) {
        var e = r("adsUEditorCampaignPublishStatusSelector")(
          r("adsBulkEditGetCampaignContext")([t]),
        );
        return !r("nullthrows")(e.get(t)).isNew;
      },
      E = function (t) {
        var e = o("AdsAdObjectsSelectors")
          .getParentAdObjectIDsLoadObjectSelector({
            adgroupIDs: [t],
            adObjectLevel: "ad_set",
          })
          .getValue();
        return e == null || e.length === 0 ? null : e[0];
      },
      k = function (t) {
        var e = o("AdsAdObjectsSelectors")
          .getParentAdObjectIDsLoadObjectSelector({
            campaignIDs: [t],
            adObjectLevel: "campaign",
          })
          .getValue();
        return e == null || e.length === 0 ? null : e[0];
      },
      I = function (t, n) {
        if (n === "ad_set") {
          var e = k(t);
          return e == null ? !1 : R(e);
        } else if (n === "ad") {
          var r = E(t),
            o = r == null ? !1 : L(r);
          if (r == null || o === !1) return !1;
          var a = k(r);
          return a == null ? !1 : R(a);
        }
        return R(t);
      },
      T = e(function (e) {
        var t = r("AdsAccountStore").getSelectedAccount();
        return r("adsCreateSelector")(
          [m[e]],
          function (r) {
            var n = r.map(function (e) {
                return e.current;
              }),
              a = Array.from(n.keys()),
              i = !a.every(function (t) {
                return I(t, e);
              }),
              l =
                o(
                  "AdsAccountCreationUtils",
                ).getAccountHasNoPublishPermissionDisabledReason(
                  t.getValue(),
                ) != null;
            return l || i;
          },
          { name: i.id },
        );
      }),
      D = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          return (
            o(
              "AdsAccountCreationUtils",
            ).getAccountHasNoPublishPermissionDisabledReason(t.getValue()) ||
            o("AdsBulkEditMenuContent").DISABLE_PUBLISH_BUTTON_TOOLTIP
          );
        },
        { name: i.id + ".publishedDisabledReasonSelector" },
      ),
      x = e(function (e) {
        return r("adsCreateSelector")(
          [
            m[e],
            e === "campaign"
              ? r("AdsMgmtCampaignGroupTodaySpentStore").fluxGetSelector()
              : r("adsCreateSelector")([], function () {}, { name: i.id }),
          ],
          function (n, o) {
            switch (e) {
              case "ad":
                return n.map(function (e, t) {
                  return r("AdsAdgroupBulkEditValidationStore").getErrors(t);
                });
              case "ad_set":
                return n.map(function (e, t) {
                  return r("adsCampaignBulkEditValidationErrorSpecSelector")(t);
                });
              case "campaign":
                return n.map(function (e, t) {
                  return r(
                    "adsCampaignGroupBulkEditValidationErrorSpecSelector",
                  )(t);
                });
              default:
                return r("immutable").OrderedMap();
            }
          },
          { name: i.id },
        );
      }),
      $ = e(function (e) {
        return r("adsCreateSelector")(
          [d[e], x[e]],
          function (t, n) {
            var e = r("AdsBulkEditMenuPluginResolver").resolve({
                dialogType: t,
              }).columnConfigs,
              a = e.reduce(function (e, t) {
                return t.fieldsPaths == null ? e : [].concat(e, t.fieldsPaths);
              }, []);
            return n.filter(function (e) {
              return a.some(function (t) {
                return (
                  r("getByPath")(o("AdsErrorUtils").getErrorSpec(e), t) !==
                  void 0
                );
              });
            });
          },
          { name: i.id },
        );
      }),
      P = e(function (e) {
        return r("adsCreateSelector")(
          [u[e], c[e], m[e], $[e], g[e], d[e]],
          function (t, n, r, a, i, l) {
            var e = t.filterType;
            return o("AdsBulkEditUtils").getDisplayedRows(r, n, e, a, i, l);
          },
          { name: i.id },
        );
      }),
      N = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("AdsAdgroupCombinedIDNameStore").getForCampaignsSelector,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (t, n, a) {
          if (a == null) return r("immutable").Map(new Map());
          var e = t.map(function (e) {
              return e.id;
            }),
            i = o("AdsLoadObjectUtils")
              .getLoadedValuesByKey(r("immutable").Map(n([a, e])))
              .map(function (e) {
                return e.map(function (e) {
                  var t = e.id;
                  return t;
                });
              });
          return i;
        },
        { name: i.id + ".bulkEditCampaignIDToAdgroupIDMap" },
      ),
      M = e(function (e) {
        return r("adsCreateStructuredSelector")(
          {
            changedColumnsByRowMap: c[e],
            columnsConfig: f[e],
            displayedRows: P[e],
            errorsByObjectID: $[e],
            selection: h[e],
          },
          i.id,
        );
      }),
      w = e(function (e) {
        return r("adsCreateSelector")(
          [c[e]],
          function (t) {
            return { changedColumnsByRowMap: t };
          },
          { name: i.id },
        );
      }),
      A = e(function (e) {
        return r("adsCreateSelector")(
          [
            P[e],
            u[e],
            c.ad,
            c.ad_set,
            c.campaign,
            d[e],
            p.ad,
            p.ad_set,
            p.campaign,
            T[e],
            D,
            S[e],
            m[e],
            r("AdsBulkEditCampaignStructureProvider").toFluxSelector(),
          ],
          function (n, a, i, l, s, u, c, d, m, p, _, f, g, h) {
            var t,
              y,
              C,
              b,
              v = a.bulkAdoptTipType,
              S = a.isApplyDisabled,
              R = a.source,
              L = h.selectedIDs,
              E = g.map(function (e) {
                return e.current;
              }),
              k = Array.from(E.keys()),
              I = r("immutable").Map(
                ((t = {}),
                (t.ad = c.map(function (e) {
                  return e.current;
                })),
                (t.ad_set = d.map(function (e) {
                  return e.current;
                })),
                (t.campaign = m.map(function (e) {
                  return e.current;
                })),
                t),
              ),
              T = r("AdsBulkEditMenuPluginResolver").resolve({ dialogType: u }),
              D =
                o(
                  "AdsBulkEditGKQEUtil",
                ).isPassingBulkEditModalCascadingSelectionGK(!0) &&
                (y = (C = L.get(e)) == null ? void 0 : C.size) != null
                  ? y
                  : g.size,
              x = o("AdsBulkEditDialogContentUtils").getBulkEditDialogTitle(
                D,
                T.getLabel(),
                e,
              ),
              $ = n.size > 0 ? T.getSummarySection() : null,
              P = r("AdsBulkEditMenuItems")[e][u] != null,
              N = r("adsBulkAdoptOpportunityShouldShowBulkAdoptNux")(
                r("nullthrows")(I.get(e)),
                v,
                e,
              ),
              M = r("immutable").Map(
                ((b = {}), (b.campaign = s), (b.ad_set = l), (b.ad = i), b),
              );
            return {
              adObjectsMap: I,
              bulkAdoptTipType: v,
              changedColumnsByRowMap: M,
              isApplyDisabled: S,
              isPublishDisabled: p,
              publishDisabledReason: _,
              shouldDisplayMenu: P,
              shouldDisplayPublishConfirmation: f,
              shouldShowBulkAdoptFollowUpNux: N,
              source: R,
              summarySection: $,
              title: x,
              showEmptyState:
                g.size === 0 &&
                !o(
                  "AdsBulkEditGKQEUtil",
                ).isPassingBulkEditModalInlineNavigationGK(!0),
              selectedAdObjectIds: k,
              selectedCountForLevel: D,
            };
          },
          { name: i.id },
        );
      }),
      F = e(function (e) {
        return r("adsCreateSelector")(
          [m[e]],
          function (t) {
            var e = t.map(function (e) {
              return e.current;
            });
            return { adObjects: e };
          },
          { name: i.id },
        );
      }),
      O = e(function (e) {
        return r("adsCreateSelector")(
          [u[e]],
          function (t) {
            var e = t.filterType;
            return e;
          },
          { name: i.id },
        );
      }),
      B = e(function (e) {
        return r("adsCreateStructuredSelector")(
          {
            changedColumnsByRowMap: c[e],
            errorsByObjectID: $[e],
            filterType: O[e],
            selection: h[e],
            lastDisplayedColumnKey: g[e],
          },
          i.id,
        );
      }),
      W = {
        bulkControlSelector: b,
        bulkEditAdObjectsSelector: F,
        bulkEditDialogTypeSelector: d,
        bulkEditTableSelector: M,
        bulkEditFieldsSelector: w,
        bulkEditNavigationFieldsSelector: A,
        bulkEditNavigationHiddenRowsSelector: p,
        bulkEditFilterSelector: B,
        bulkEditCampaignIDToAdgroupIDMap: N,
      },
      q = W;
    (o("AdsSelectorNameUtils").nameSelectorsInObject(W, i.id), (l.default = q));
  },
  98,
);
