__d(
  "AdsCampaignStructureSelectors",
  [
    "AdsAccountStore",
    "AdsAdObjectLevelToPESelectors",
    "AdsAdgroupCombinedIDNameStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignCombinedIDNameStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignStructureCollapseNodeProvider",
    "AdsCampaignStructureSearchAndFilterDataProvider",
    "AdsCampaignStructureUtils",
    "AdsDynamicAdObjectsSelectors",
    "AdsEditorCampaignStructureStore",
    "AdsFluxHooks",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "Laminar",
    "LoadObject",
    "adsCampaignStructureCurrentLevelSelector",
    "adsCampaignStructureSelectedIDsSelector",
    "adsCreateBranchSelector",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
    "adsPECrepeIsPackageSelector",
    "adsPEManageAdsSectionSelector",
    "adsUEditorCrepeCurrentLevelIDsSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
    "createMapBy",
    "err",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = [],
      m = (e = r("adsCreateSelector"))(
        [
          r("AdsAdgroupDraftFragmentStore").getFragmentsInDraftForSelector,
          r("AdsCampaignDraftFragmentStore").getFragmentsInDraftForSelector,
          (s = r("AdsCampaignGroupDraftFragmentStore"))
            .getFragmentsInDraftForSelector,
        ],
        function (t, n, o) {
          var e = r("AdsAccountStore").getSelectedAccountIDX();
          return [
            { objectType: r("AdsObjectTypes").ADGROUP, fragments: t(e) },
            { objectType: r("AdsObjectTypes").CAMPAIGN, fragments: n(e) },
            { objectType: r("AdsObjectTypes").CAMPAIGN_GROUP, fragments: o(e) },
          ];
        },
        { name: i.id + ".adsDraftFragmentGroupsSelector" },
      ),
      p = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [
            o("AdsAdObjectLevelToPESelectors").getAllByFieldsSelectorMap.get(e),
            r("adsCreateBranchSelector")(
              r("adsPECrepeIsPackageSelector"),
              r("adsUEditorInjectEditingCampaignGroupContext")(
                r("adsUEditorCrepeCurrentLevelIDsSelector"),
              ),
              r("adsCampaignStructureSelectedIDsSelector"),
            ),
          ],
          function (n, a) {
            switch (e) {
              case "ad_set":
                return r("LoadObject").withValue(a, { creatorModuleID: i.id });
              case "ad":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { adset_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.adset_id);
                      }, new Set()),
                    );
                  });
              default:
                return r("LoadObject").withValue([], { creatorModuleID: i.id });
            }
          },
          { name: i.id },
        );
      }),
      _ = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateSelector")(
          [
            o("AdsAdObjectLevelToPESelectors").getAllByFieldsSelectorMap.get(e),
            r("adsCreateBranchSelector")(
              r("adsPECrepeIsPackageSelector"),
              r("adsUEditorInjectEditingCampaignGroupContext")(
                r("adsUEditorCrepeCurrentLevelIDsSelector"),
              ),
              r("adsCampaignStructureSelectedIDsSelector"),
            ),
          ],
          function (n, a) {
            switch (e) {
              case "campaign":
                return r("LoadObject").withValue(a, { creatorModuleID: i.id });
              case "ad_set":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { campaign_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.campaign_id);
                      }, new Set()),
                    );
                  });
              case "ad":
                return o("AdsLoadObjectUtils")
                  .allByKey(n(a, { campaign_id: null }))
                  .map(function (e) {
                    return Array.from(
                      e.reduce(function (e, t) {
                        return e.add(t.campaign_id);
                      }, new Set()),
                    );
                  });
              default:
                return r("LoadObject").withValue([], { creatorModuleID: i.id });
            }
          },
          { name: i.id },
        );
      }),
      f = r("adsCreateSelectorsByLevel")(function (e) {
        return r("adsCreateBranchSelector")(
          r("adsPECrepeIsPackageSelector"),
          _[e],
          r("adsCreateStoreSelector")(
            [r("AdsEditorCampaignStructureStore")].concat(
              _.campaign.getStores("campaign"),
              _.ad_set.getStores("ad_set"),
              _.ad.getStores("ad"),
            ),
            function () {
              var e = r("AdsEditorCampaignStructureStore").getState()
                  .currentLevel,
                t = _[e];
              if (t == null)
                return r("LoadObject").withValue(d, { creatorModuleID: i.id });
              var n = t("campaign");
              return n;
            },
            { name: i.id },
          ),
        );
      }),
      g = (u = r("adsCreateStoreSelector"))(
        [r("AdsEditorCampaignStructureStore")].concat(
          _.campaign.getStores("campaign"),
          _.ad_set.getStores("ad_set"),
          _.ad.getStores("ad_set"),
        ),
        function () {
          return h();
        },
        { name: i.id + ".campaignStructureSelectedCampaignGroupIDsSelector" },
      ),
      h = function () {
        var e = r("AdsEditorCampaignStructureStore")
            .getState()
            .campaignGroupIDs.toArray(),
          t = r("AdsEditorCampaignStructureStore").getState().selectedIDs,
          n = r("gkx")("11126");
        if (t.length !== 0 && (n || e.length === 0)) {
          var o = r("AdsEditorCampaignStructureStore").getState().currentLevel,
            a = _[o];
          if (a == null) return d;
          var i = a("campaign");
          return i.hasValue() ? i.getValueEnforcing() : d;
        }
        return e;
      },
      y = function (t, n, r) {
        var e;
        return t != null
          ? { isNew: n(t), selectionIndex: (e = r.get(t)) != null ? e : 0 }
          : null;
      };
    function C(e, t, n, r) {
      var o = y(e, r, n),
        a = y(t, r, n);
      return o == null || a == null
        ? 0
        : (o.isNew && a.isNew) || (!o.isNew && !a.isNew)
          ? o.selectionIndex - a.selectionIndex
          : o.isNew && !a.isNew
            ? -1
            : 1;
    }
    var b = e(
        [g, s.getIsNewSelector],
        function (t, n) {
          var e = Array.from(new Set(t)),
            r = e.reduce(function (e, t, n) {
              return e.set(t, n);
            }, new Map());
          return e.toSorted(function (e, t) {
            return C(e, t, r, n);
          });
        },
        { name: i.id + ".getCampaignGroupsIDsSelector" },
      ),
      v = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignGroupSelector(
        "campaign_structure_tree",
      ),
      S = e(
        [b, r("adsCreateDynamicSelector")(v)],
        function (t, n) {
          return t.map(n);
        },
        { name: i.id + ".getCampaignStructureTreeSelector" },
      ),
      R = function (t) {
        return r("adsCreateSelector")(
          [r("adsCreateDynamicSelector")(v)],
          function (n) {
            return t
              ? n(t)
              : r("LoadObject").withError(
                  r("err")("No campaign group ID provided"),
                  { creatorModuleID: i.id },
                );
          },
          { name: i.id },
        );
      },
      L = u(
        [r("AdsCampaignCombinedListStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
          g.getStores(),
        ),
        function () {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return r("isFalsey")(e)
            ? new Map()
            : r("AdsCampaignCombinedListStore").getForCampaignGroups(
                e.account_id,
                g(),
              );
        },
        { name: i.id + ".campaignListStoreSelector" },
      ),
      E = u(
        [r("AdsCampaignCombinedIDNameStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
        ),
        function (t) {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return !t || !t.length || r("isFalsey")(e)
            ? new Map()
            : r("AdsCampaignCombinedIDNameStore").getForCampaignGroups(
                e.account_id,
                t,
              );
        },
        { name: i.id + ".campaignIDNameListStoreSelector" },
      ),
      k = e(
        [g, E],
        function (t) {
          return I(t);
        },
        { name: i.id + ".campaignIDNameListLoadedSelector" },
      ),
      I = function (t) {
        return r("immutable").Map(E(t));
      },
      T = e(
        [k],
        function (t) {
          return D(t);
        },
        { name: i.id + ".flattenedCampaignListSelector" },
      ),
      D = function (t) {
        var e = [];
        return (
          t.forEach(function (t) {
            var n = t.getValue();
            if (n && n.length) {
              var r = n.map(function (e) {
                return e.id;
              });
              e = e.concat(r);
            }
          }),
          e
        );
      },
      x = u(
        [r("AdsAdgroupCombinedIDNameStore")].concat(
          r("AdsAccountStore").getSelectedAccount.getStores(),
        ),
        function (t) {
          var e = r("AdsAccountStore").getSelectedAccount().getValue();
          return !t || !t.length || r("isFalsey")(e)
            ? new Map()
            : r("AdsAdgroupCombinedIDNameStore").getForCampaigns(
                e.account_id,
                t,
              );
        },
        { name: i.id + ".adgroupIDNameListStoreSelector" },
      ),
      $ = e(
        [T, x],
        function (t) {
          var e = x(t);
          return r("immutable").Map(e);
        },
        { name: i.id },
      ),
      P = e(
        [
          o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
          g,
          s.getIsNewSelector,
        ],
        function (t, n, r) {
          return M(t, n, r);
        },
        { name: i.id + ".campaignGroupIDAndNamesSelector" },
      ),
      N = e(
        [
          o("AdsPECampaignGroupSelectors").getAllByFieldsSelector,
          g,
          s.getIsNewSelector,
        ],
        function (t, n, r) {
          return o("AdsLoadObjectUtils").getLoadedValues(M(t, n, r));
        },
        { name: i.id + ".campaignGroupIDAndNamesLoadedSelector" },
      ),
      M = function (t, n, r) {
        var e = n.reduce(function (e, t, n) {
            return e.set(t, n);
          }, new Map()),
          a = t(n, { id: null, name: null }),
          i = a.sort(function (t, n) {
            var o, a;
            return C(
              (o = t.getValue()) == null ? void 0 : o.id,
              (a = n.getValue()) == null ? void 0 : a.id,
              e,
              r,
            );
          });
        return o("AdsLoadObjectUtils").getValuesFromMap(i);
      },
      w = e(
        [L, o("AdsPECampaignSelectors").getAllByFieldsSelector],
        function (t, n) {
          var e = o("AdsLoadStateUtils_LEGACY")
              .getLoadedValues(t)
              .reduce(function (e, t) {
                return e.concat(t.list);
              }, []),
            r = n(e, { id: null, name: null });
          return o("AdsLoadObjectUtils").getLoadedValuesFromMap(r);
        },
        { name: i.id },
      ),
      A = e(
        [$],
        function (t) {
          return o("AdsLoadObjectUtils")
            .getLoadedValuesFromMap(t)
            .reduce(function (e, t) {
              return e.concat(t);
            }, []);
        },
        { name: i.id },
      ),
      F = e(
        [N, k, $],
        function (t, n, r) {
          var e = 0;
          n.map(function (t) {
            t.hasValue() && (e += t.getValueEnforcing().length);
          });
          var o = 0;
          return (
            r.map(function (e) {
              e.hasValue() && (o += e.getValueEnforcing().length);
            }),
            {
              campaignGroupsCount: t.length,
              campaignsCount: e,
              adgroupsCount: o,
            }
          );
        },
        { name: i.id },
      ),
      O = e(
        [N, k, $],
        function (t, n, r) {
          return B(t, n, r);
        },
        { name: i.id },
      ),
      B = function (t, n, a) {
        var e = o("AdsLoadObjectUtils").getLoadedValuesByKey(n),
          i = o("AdsLoadObjectUtils").getLoadedValuesByKey(a),
          l = o("AdsCampaignStructureUtils").getFlatNodeProcessor(e, i);
        return t.map(function (e) {
          return l(r("AdsObjectTypes").CAMPAIGN_GROUP, {
            id: e.id,
            name: e.name,
          });
        });
      };
    function W(e) {
      return e === r("AdsObjectTypes").CAMPAIGN_GROUP
        ? r("AdsObjectTypes").CAMPAIGN
        : r("AdsObjectTypes").ADGROUP;
    }
    function q(e, t, n, o) {
      var a,
        i = e.children
          ? e.children.map(function (r) {
              return q(r, W(t), n, e.id);
            })
          : [];
      if (n.has(e.id)) {
        var l = n.get(e.id);
        l && (i = U(i, l));
      }
      var s = e.name,
        u = !1,
        c = e.status,
        d =
          (a = n.get(r("AdsAccountStore").getSelectedAccountIDX())) == null
            ? void 0
            : a.find(function (t) {
                return t.id === e.id;
              });
      return (
        d != null &&
          ((s = d.hasFragmentName ? d.name : e.name), (u = !0), (c = d.status)),
        {
          id: e.id,
          isCollapsed: !1,
          fragmentID: e.fragmentID,
          packageConfigID: e.packageConfigID,
          isDraft: u,
          name: s,
          objectType: t,
          parentID: o != null ? o : void 0,
          hasChildren: i.length > 0,
          status: c,
          children: i,
        }
      );
    }
    function U(e, t) {
      var n = r("createMapBy")(t, function (e) {
          return e.id;
        }),
        o = r("createMapBy")(e, function (e) {
          return e.id;
        });
      return (
        o.forEach(function (e, t) {
          var r = n.get(t);
          r != null
            ? ((r.children = U(e.children, r.children)),
              (r.hasChildren = r.children.length > 0),
              r.hasFragmentName || (r.name = e.name))
            : n.set(t, e);
        }),
        Array.from(n.values())
      );
    }
    var V = e(
        [o("AdsPECampaignGroupSelectors").getByFieldsSelector, g],
        function (t, n) {
          var e;
          return (
            new Set(n).size === 0 ||
            !r("isTruthy")(
              (e = t(n[0], { ad_creation_package_config: null }).getValue()) ==
                null || (e = e.ad_creation_package_config) == null
                ? void 0
                : e.id,
            )
          );
        },
        { name: i.id + ".canUseFastTreeSelector" },
      ),
      H = function (t) {
        return r("adsCreateSelector")(
          [m, R(t)],
          function (n, r) {
            return ee(n, [t], [r]);
          },
          { name: i.id },
        );
      },
      G = function (t) {
        return r("adsCreateSelector")(
          [H(t)],
          function (t) {
            return t.hasValue() ? t.getValueEnforcing() : [];
          },
          { name: i.id },
        );
      },
      z = e(
        [m, b, S],
        function (t, n, r) {
          return ee(t, n, r);
        },
        { name: i.id },
      ),
      j = e(
        [z],
        function (t) {
          return t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id },
      ),
      K = (c = r("adsCreateBranchSelector"))(
        V,
        j,
        O,
        !0,
        i.id + ".getFlatTreeItemsSelector",
      ),
      Q = e(
        [K, r("AdsCampaignStructureCollapseNodeProvider").toFluxSelector()],
        function (t, n) {
          return o("AdsCampaignStructureUtils").flattenNodeTreeMutable(
            t,
            n,
            !1,
          );
        },
        { name: i.id + ".getFlatTreeItemsRawSelector" },
      ),
      X = function (t, n) {
        return o("AdsCampaignStructureUtils").flattenNodeTreeMutable(t, n, !0);
      },
      Y = e(
        [K, r("AdsCampaignStructureCollapseNodeProvider").toFluxSelector()],
        function (t, n) {
          return X(t, n);
        },
        { name: i.id },
      ),
      J = e(
        [K],
        function (t) {
          var e = t.length,
            n = 0,
            r = 0;
          return (
            t.forEach(function (e) {
              ((n += e.children.length),
                e.children.forEach(function (e) {
                  r += e.children.length;
                }));
            }),
            { campaignGroupsCount: e, campaignsCount: n, adgroupsCount: r }
          );
        },
        { name: i.id },
      ),
      Z = c(V, J, F, !0, i.id + ".getTreeItemsV3CountSelector"),
      ee = function (t, n, a) {
        var e,
          l,
          s = o("AdsLoadObjectUtils").allForceWithValues(a),
          u = new Map(),
          c = [];
        for (var d of t) {
          var m = d.fragments,
            p = d.objectType;
          for (var _ of m.entries()) {
            var f = _[0],
              g = _[1];
            if (g.hasValueWithoutError()) {
              var h,
                y = g.getValueEnforcing(),
                C = (h = y.values.get("name")) == null ? void 0 : h.newValue,
                b = y.fragmentID;
              p === "CAMPAIGN_GROUP" && c.push(y);
              var v = y.parentAdObjectID;
              if (v == null && p === "CAMPAIGN_GROUP")
                v = r("AdsAccountStore").getSelectedAccountIDX();
              else if (v == null && p === "CAMPAIGN") {
                var S,
                  R =
                    (S = y.values.get("campaign_id")) == null
                      ? void 0
                      : S.newValue;
                R != null && (v = R);
              }
              if (o("AdsCampaignStructureUtils").isFBID(b)) {
                var L,
                  E,
                  k,
                  I = (L = u.get(v)) != null ? L : [],
                  T = (E = u.get(f)) != null ? E : [];
                (I.push({
                  children: T,
                  hasChildren: T.length > 0,
                  hasFragmentName: C != null,
                  fragmentID: b,
                  id: f,
                  isCollapsed: !1,
                  isDraft: !0,
                  name: C != null ? C : "",
                  objectType: p,
                  parentID: v,
                  status:
                    (k = y.values.get("status")) == null ? void 0 : k.newValue,
                }),
                  u.set(v, I));
              }
            }
          }
        }
        if (s.hasError())
          return r("LoadObject").withError(s.getErrorEnforcing(), {
            creatorModuleID: i.id,
          });
        if (s.hasValue() && s.getValueEnforcing() == null) {
          var D,
            x =
              (D = u.get(r("AdsAccountStore").getSelectedAccountIDX())) == null
                ? void 0
                : D.find(function (e) {
                    return e.id === n[0];
                  });
          if (x == null)
            return r("LoadObject").withError(
              r("err")(
                "Campaign structure tree missing draft, non-draft top-level campaign group",
              ),
              { creatorModuleID: i.id },
            );
        }
        var $ = c.find(function (e) {
          return e.objectID === n[0];
        });
        return r("LoadObject").withValue(
          (e =
            (l = s.getValue()) == null
              ? void 0
              : l.map(function (e, t) {
                  var o, a;
                  return q(
                    e != null
                      ? e
                      : {
                          id: n[t],
                          fragmentID: $ == null ? void 0 : $.fragmentID,
                          packageConfigID:
                            $ == null || (o = $.adCreationPackageConfig) == null
                              ? void 0
                              : o.id,
                          children: [],
                          name: "",
                          status:
                            $ == null || (a = $.values.get("status")) == null
                              ? void 0
                              : a.newValue,
                        },
                    r("AdsObjectTypes").CAMPAIGN_GROUP,
                    u,
                    null,
                  );
                })) != null
            ? e
            : [],
          { creatorModuleID: i.id },
        );
      };
    function te() {
      var e = o("react-compiler-runtime").c(3),
        t = o("AdsFluxHooks").useAdsSelector(K),
        n = o("Laminar").useProvider(
          r("AdsCampaignStructureCollapseNodeProvider"),
        ),
        a;
      return (
        e[0] !== n || e[1] !== t
          ? ((a = X(t, n)), (e[0] = n), (e[1] = t), (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    var ne = e(
        [Q, r("adsCampaignStructureSelectedIDsSelector")],
        function (t, n) {
          return n
            .map(function (e) {
              return t.find(function (t) {
                return t.id === e;
              });
            })
            .filter(Boolean)
            .sort(function (e, n) {
              return t.indexOf(e) - t.indexOf(n);
            });
        },
        { name: i.id },
      ),
      re = function (t, n) {
        return t.filter(function (e) {
          return o("AdsObjectTypeUtils").toObjectLevel(e.objectType) === n;
        });
      },
      oe = e(
        [Q, r("adsCampaignStructureCurrentLevelSelector")],
        function (t, n) {
          return re(t, n);
        },
        { name: i.id + ".getFlattenedCurrentLevel" },
      ),
      ae = e(
        [K],
        function (t) {
          return re(t, "campaign");
        },
        { name: i.id + ".getFlattenedCampaignGroups" },
      ),
      ie = e(
        [K],
        function (t) {
          return re(t, "campaign").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      le = e(
        [Q],
        function (t) {
          return re(t, "ad_set").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      se = e(
        [Q],
        function (t) {
          return re(t, "ad").map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      ue = e(
        [oe],
        function (t) {
          return t.map(function (e) {
            var t = e.id;
            return t;
          });
        },
        { name: i.id },
      ),
      ce = e(
        [P, k, $],
        function (t, n, r) {
          var e = o("AdsLoadObjectUtils").anyLoadingOrEmpty(t.values()),
            a = n.toArray().some(function (e) {
              return e.isLoading() || !e.hasValue();
            }),
            i = r.toArray().some(function (e) {
              return e.isLoading() || !e.hasValue();
            });
          return t.length === 0 || e || a || i;
        },
        { name: i.id },
      ),
      de = e(
        [S],
        function (t) {
          return o("AdsLoadObjectUtils").anyLoadingOrEmpty(t);
        },
        { name: i.id },
      ),
      me = c(V, de, ce, !0, i.id + ".getTreeItemsIsLoadingSelector"),
      pe = u(
        [r("AdsCampaignStructureSearchAndFilterDataProvider").toFluxStore()],
        function () {
          return r("AdsCampaignStructureSearchAndFilterDataProvider")
            .toFluxStore()
            .getState().queryString;
        },
        { name: i.id + ".queryStringStoreSelector" },
      ),
      _e = e(
        [pe, N, w, A],
        function (t, n, r, a) {
          return o(
            "AdsCampaignStructureUtils",
          ).formatAdObjectsForDisplayInSearchAndFilterMutableResult(t, n, r, a);
        },
        { name: i.id },
      );
    function fe(e) {
      return e.map(function (e) {
        return { id: e.id, name: e.name };
      });
    }
    var ge = e(
        [pe, Y],
        function (t, n) {
          return o(
            "AdsCampaignStructureUtils",
          ).formatAdObjectsForDisplayInSearchAndFilterMutableResult(
            t,
            fe(re(n, "campaign")),
            fe(re(n, "ad_set")),
            fe(re(n, "ad")),
          );
        },
        { name: i.id },
      ),
      he = c(V, ge, _e, !0, i.id + ".getSearchAndFilterResultSelector"),
      ye = e(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return t ? r("AdsObjectUtils").getObjectTypeFromNavSection(t) : null;
        },
        { name: i.id + ".getSelectedObjectTypeSelector" },
      );
    ((l.adsDraftFragmentGroupsSelector = m),
      (l.parentCampaignIDsSelector = p),
      (l.parentCampaignGroupIDsSelector = _),
      (l.parentCampaignGroupIDsSelectorNew = f),
      (l.getCampaignGroupsIDsSelector = b),
      (l.getDynamicCampaignStructureTreeSelector = v),
      (l.campaignIDNameListStoreSelector = E),
      (l.getFlatTreeItemsFastPreloadSelector = G),
      (l.getFlatTreeItemsSelector = K),
      (l.getFlatTreeItemsWithCollapsedSelector = Y),
      (l.getTreeItemsV3CountSelector = Z),
      (l.getFlatTreeItemsFastLoadSelectorLogic = ee),
      (l.useGetFlatTreeItemsWithCollapsedSelector = te),
      (l.getSelectedFlatTreeItemsSelector = ne),
      (l.getFlattenedCampaignGroups = ae),
      (l.getFlattenedCampaignGroupIDs = ie),
      (l.getFlattenedCampaignIDs = le),
      (l.getFlattenedAdgroupIDs = se),
      (l.getFlattenedCurrentLevelIDs = ue),
      (l.getTreeItemsIsLoadingSelector = me),
      (l.getSearchAndFilterResultSelector = he),
      (l.getSelectedObjectTypeSelector = ye));
  },
  98,
);
