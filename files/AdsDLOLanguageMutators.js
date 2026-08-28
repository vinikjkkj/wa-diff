__d(
  "AdsDLOLanguageMutators",
  [
    "invariant",
    "AdsAPIAdgroupPaths",
    "AdsAPITargetFields",
    "AdsAdgroupRecordAccessors",
    "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedLanguageMappingsStatic",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLODefaultAssetConfig",
    "AdsDLOFieldConstantUtils",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOLanguageUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsInterfacesLogger",
    "AdsLocalizedPlacementsMutators",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "FBLogger",
    "first",
    "firstx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        u,
        c = r("immutable").Map().set("name", t),
        d = (l = e.creative) == null ? void 0 : l.asset_feed_spec;
      if (d == null) return e;
      var m = r("AdsAssetFeedLanguageMappingsStatic").language_codes_to_locales[
        t
      ];
      if (m === void 0) return e;
      var p =
          (u = d.asset_customization_rules) != null ? u : r("immutable").List(),
        _ = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        f =
          p.size > 0
            ? p.reduce(function (e, t) {
                var n = o("AdsDLOLanguageUtils").getLanguageCodeForRule(t);
                if (n !== _) return e;
                var a = t.get("customization_spec"),
                  i = o("AdsDLOLanguageUtils").getMediaLabelsForRule(t);
                return i.length === 0
                  ? e.concat({
                      customizationSpec: a,
                      mediaLabelKeys: null,
                      mediaLabelValues: null,
                    })
                  : e.concat({
                      customizationSpec: a,
                      mediaLabelKeys: i,
                      mediaLabelValues: r("immutable").Map(
                        i.map(function (e) {
                          return [e, t.get(e)];
                        }),
                      ),
                    });
              }, [])
            : [
                {
                  customizationSpec: r("immutable").Map(),
                  mediaLabelValues: null,
                  mediaLabelKeys: null,
                },
              ],
        g = f.map(function (e) {
          e.customizationSpec instanceof r("immutable").Map || s(0, 14108);
          var t = e.customizationSpec.set(
              r("AdsAPITargetFields").LOCALES,
              r("immutable").List(m),
            ),
            n = r("immutable").Map().set("customization_spec", t);
          if (e.mediaLabelKeys !== null && e.mediaLabelValues != null) {
            var o = e.mediaLabelValues;
            e.mediaLabelKeys.forEach(function (e) {
              var t = o.get(e);
              t != null && (n = n.set(e, o.get(e)));
            });
          }
          return (
            i.forEach(function (e) {
              var t = e.ruleLabel;
              n = n.set(t, c);
            }),
            n
          );
        }),
        h = e,
        y = p,
        C = o("AdsDLOFieldConstantUtils").ALL_FIELDS.filter(function (e) {
          var t = e.assetFeedField;
          return !i.some(function (e) {
            var n = e.assetFeedField;
            return n === t;
          });
        });
      if (y != null && y.size > 0) {
        var b = o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(e);
        C.forEach(function (e) {
          var t = e.assetFeedField,
            i = e.ruleLabel,
            l = o("AdsDLOFieldConstantUtils").getAccessorPath(t);
          l != null &&
            ((y = y.map(function (e) {
              return e.remove(i);
            })),
            l.get(h) !== null &&
              r("AdsInterfacesLogger").log({
                eventName:
                  "dlo_cleaned_excessive_asset_customization_rules_for_objective",
                data: {
                  assetFeedField: t,
                  objective: n,
                  hasLinks: b,
                  isAppPromotion: a,
                },
              }),
            (h = l.delete(h)));
        });
      }
      var v = y.concat(g),
        S = o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
          e,
        );
      return (
        o("AdsDLOLanguageUtils")
          .getDLODevDefaultAssetPlugin(i, S)
          .forEach(function (t) {
            var n = t.assetFeedField,
              a = t.assetFeedSubField,
              i = t.getDefaultValue,
              l = o("AdsDLOFieldConstantUtils").getAccessorPath(n),
              s = r("AdsDLOFieldToAdlabelsMapping").get(n);
            if (!(l == null || s == null)) {
              var u = l.get(h) || r("immutable").List(),
                d = u.reduce(
                  function (t, n) {
                    var o = t[0],
                      l = t[1],
                      u = n.get(s);
                    return u instanceof r("immutable").List &&
                      r("immutable").is(u.first(), c)
                      ? [o.push(n.set(a, i(e))), !0]
                      : [o.push(n), l];
                  },
                  [r("immutable").List(), !1],
                ),
                m = d[0],
                p = d[1];
              p
                ? (h = l.set(m, h))
                : (h = l.set(
                    m.push(
                      r("immutable").Map([
                        [a, i(e)],
                        [s, r("immutable").List.of(c)],
                      ]),
                    ),
                    h,
                  ));
            }
          }),
        (h = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(v, h)),
        o("AdsAssetFeedUtils").isAAAFromRecord(h) &&
          (h = o(
            "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
          ).replaceMediaAssets(h, t, _)),
        h
      );
    }
    function u(e, t, n, a) {
      var i, l;
      a === void 0 && (a = !1);
      var s = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      if (s == null) return e;
      var u = s.asset_customization_rules;
      if (u == null) return e;
      var c = o("AdsDLOLanguageUtils")._getAdLabelForLanguage(e, t);
      if (c == null) return e;
      var d = u.map(function (e) {
          var o = e.getIn([
            "customization_spec",
            r("AdsAPITargetFields").LOCALES,
          ]);
          if (o == null) return !1;
          var a = r("firstx")(o),
            i = r("immutable").List(
              r("AdsAssetFeedLanguageMappingsStatic").language_codes_to_locales[
                n
              ],
            ),
            l = e.map(function (e) {
              if (e instanceof r("immutable").Map) {
                var t = e.get("name");
                if (t !== void 0 && t == c)
                  return e.set("name", n).delete("id");
              }
              return e;
            });
          return (
            r("AdsAssetFeedLanguageMappingsStatic").locales_to_language_codes[
              a
            ] === t &&
              (l = l.setIn(
                ["customization_spec", r("AdsAPITargetFields").LOCALES],
                i,
              )),
            l
          );
        }),
        m = ((l = {}), (l.asset_customization_rules = d), l);
      return (
        r("AdsDLOFieldToAdlabelsMapping").forEach(function (e, t) {
          var o = s.get(t);
          o &&
            (m[t] = o.map(function (o) {
              var i = o,
                l = o.get(e);
              if (!l) return i;
              var s = l.find(function (e) {
                return e.get("name") === c;
              });
              if (s && a && t != "link_urls") {
                var u,
                  d,
                  m =
                    (u = r("AdsDLODefaultAssetConfig").get(t)) == null
                      ? void 0
                      : u.pathToUpdate,
                  p =
                    (d = r("AdsDLODefaultAssetConfig").get(t)) == null
                      ? void 0
                      : d.getDefaultValue(),
                  _ = i.get(m);
                _ != null && (i = i.set(m, p));
              }
              return (
                (l = l.map(function (e) {
                  return e.get("name") === c
                    ? e.set("name", n).delete("id")
                    : e;
                })),
                i.set(e, l)
              );
            }));
        }),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
          s.merge(m),
          e,
        )
      );
    }
    function c(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (!a) return e;
      var i = a,
        l = i.asset_customization_rules;
      if (l == null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "assetCustomizationRules should not be null at this point",
        );
      r("AdsDLOFieldToAdlabelsMapping").forEach(function (n, a) {
        i != null || s(0, 13336);
        var l = i.get(a);
        if (l) {
          var u = r("AdsAssetFeedFieldToRuleLabelMapping").get(a),
            c = o("AdsDLOLanguageUtils")._getAdLabelForLanguage(e, t, u);
          if (c != null) {
            var d =
              o("AdsDLOLanguageUtils")._getLanguagesByAssetLabel(e, u, c)
                .size <= 1;
            d &&
              (l = l.filter(function (e) {
                return !o("AdsDLOLanguageUtils")._doesLabelExistInAssetValue(
                  e.get(n),
                  c,
                );
              }));
          }
          i = i.set(a, l.isEmpty() ? void 0 : l);
        }
      });
      var u = l.filter(function (e) {
        return o("AdsDLOLanguageUtils").getLanguageCodeForRule(e) !== t;
      });
      return (
        (i = i.set("asset_customization_rules", u.isEmpty() ? void 0 : u)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(i, e)
      );
    }
    function d(e, t) {
      if (t == null) return e;
      var n = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e);
      if (n != null) return u(e, n, t);
      if (o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e))
        return p(e, t);
      var a = [];
      if (o("AdsAssetFeedUtils").isAAAFromRecord(e)) {
        var i, l, s, c;
        (((i =
          (l = e.creative) == null ||
          (l = l.asset_feed_spec) == null ||
          (l = l.bodies) == null
            ? void 0
            : l.size) != null
          ? i
          : 0) === 0 &&
          a.push(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
              r("immutable").List([r("immutable").Map().set("text", "")]),
            ),
          ),
          ((s =
            (c = e.creative) == null ||
            (c = c.asset_feed_spec) == null ||
            (c = c.titles) == null
              ? void 0
              : c.size) != null
            ? s
            : 0) === 0 &&
            a.push(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.titles.set(
                r("immutable").List([r("immutable").Map().set("text", "")]),
              ),
            ));
      }
      return m(o("AdsMutators").chain.apply(o("AdsMutators"), a)(e), t);
    }
    function m(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (a == null) return e;
      var i = a,
        l = r("AdsAssetFeedLanguageMappingsStatic").language_codes_to_locales[
          t
        ],
        u = r("immutable")
          .Map()
          .set(r("AdsAPITargetFields").LOCALES, r("immutable").List(l)),
        c = r("immutable")
          .Map()
          .set("customization_spec", u)
          .set("is_default", !0);
      r("AdsDLOFieldToAdlabelsMapping").forEach(function (n, a) {
        var l = [
          o("AdsDLOAdgroupFieldUtils").getUnlabeledAssetIndexForField(e, a),
        ];
        (o("AdsAssetFeedUtils").isAAAFromRecord(e) &&
          (l = o("AdsDLOAdgroupFieldUtils").getUnlabeledAssetsIndicesForField(
            e,
            a,
          )),
          !(l.length === 0 || l[0] === -1) &&
            l.forEach(function (e) {
              i != null || s(0, 14004);
              var o = i.getIn([a, String(e)]);
              if (o && o instanceof r("immutable").Map) {
                i = i.setIn(
                  [a, String(e)],
                  o.set(
                    n,
                    r("immutable").List.of(r("immutable").Map().set("name", t)),
                  ),
                );
                var l = r("AdsAssetFeedFieldToRuleLabelMapping").get(a);
                l != null &&
                  (c = c.set(l, r("immutable").Map().set("name", t)));
              }
            }));
      });
      var d = i.asset_customization_rules || r("immutable").List(),
        m = g(e);
      return (
        m.forEach(function (e) {
          c.get(e) != null &&
            (d = d.map(function (n) {
              return n.set(e, r("immutable").Map().set("name", t));
            }));
        }),
        (d = d.push(c)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
          i.set("asset_customization_rules", d),
          e,
        )
      );
    }
    function p(e, t) {
      var n,
        a,
        i = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (i == null) return e;
      var l = i,
        u = r("AdsAssetFeedLanguageMappingsStatic").language_codes_to_locales[
          t
        ],
        c =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules,
        d = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(c),
        m =
          c == null
            ? void 0
            : c.map(function (n) {
                var a = n.get("customization_spec");
                if (
                  ((a != null && a instanceof r("immutable").Map) ||
                    s(0, 13896),
                  a.get(r("AdsAPITargetFields").LOCALES) != null)
                )
                  return n;
                var i = n;
                return (
                  r("immutable").is(i, d) && (i = i.set("is_default", !0)),
                  r("AdsDLOFieldToAdlabelsMapping").forEach(function (n, a) {
                    var u = o(
                      "AdsDLOAdgroupFieldUtils",
                    ).getUnlabeledAssetIndexForField(e, a);
                    if (u !== -1) {
                      l != null || s(0, 13362);
                      var c = l.getIn([a, String(u)]);
                      if (c && c instanceof r("immutable").Map) {
                        l = l.setIn(
                          [a, String(u)],
                          c.set(
                            n,
                            r("immutable").List.of(
                              r("immutable").Map().set("name", t),
                            ),
                          ),
                        );
                        var d = r("AdsAssetFeedFieldToRuleLabelMapping").get(a);
                        d != null &&
                          (i = i.set(d, r("immutable").Map().set("name", t)));
                      }
                    }
                  }),
                  i.setIn(
                    ["customization_spec"],
                    a.set(
                      r("AdsAPITargetFields").LOCALES,
                      r("immutable").List(u),
                    ),
                  )
                );
              });
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
        l.set("asset_customization_rules", m),
        e,
      );
    }
    function _(e, t, n, o) {
      var a,
        i =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules;
      if (i == null) return e;
      r("immutable").List.isList(i) || s(0, 13619);
      var l = i.findEntry(function (e) {
        var t = e.getIn([
          "customization_spec",
          r("AdsAPITargetFields").LOCALES,
        ]);
        if (t == null) return !1;
        var o = r("firstx")(t);
        return (
          r("AdsAssetFeedLanguageMappingsStatic").locales_to_language_codes[
            o
          ] === n
        );
      });
      if (l == null) return e;
      var u = l[0],
        c = l[1];
      return e.setIn(
        r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path.concat([
          "asset_customization_rules",
          String(u),
        ]),
        c.set(t, r("immutable").Map().set("name", o)),
      );
    }
    function f(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      n != null || s(0, 13761);
      var a = n,
        i = a.groups;
      i != null || s(0, 13762);
      var l = r("immutable").List(),
        u = [];
      i.forEach(function (e) {
        var t = r("immutable").Map();
        for (var n of e) {
          var o = n[0],
            a = n[1];
          t = t.set(o, a);
        }
        var i = r("first")(e.valueSeq());
        if (i != null) {
          i instanceof r("immutable").Map || s(0, 13757);
          var c = i.get("name");
          (c != null || s(0, 13758), u.push(c));
          var d = r("immutable")
            .Map()
            .set(
              r("AdsAPITargetFields").LOCALES,
              r("immutable").List(
                r("AdsAssetFeedLanguageMappingsStatic")
                  .language_codes_to_locales[c],
              ),
            );
          ((t = t.set("customization_spec", d)), (l = l.push(t)));
        }
      });
      var c = a.get("bodies");
      c instanceof r("immutable").List || s(0, 13759);
      var d = "";
      (c.forEach(function (e) {
        var t = e.get("adlabels"),
          n = r("firstx")(t),
          o = n.get("name");
        u.includes(o) || (d = o);
      }),
        d !== "" || s(0, 17302));
      var m = r("AdsAssetFeedLanguageMappingsStatic").language_codes_to_locales[
          d
        ],
        p = r("immutable")
          .Map()
          .set(r("AdsAPITargetFields").LOCALES, r("immutable").List(m)),
        _ = r("immutable")
          .Map()
          .set("customization_spec", p)
          .set("is_default", !0);
      r("AdsDLOFieldToAdlabelsMapping").forEach(function (t, n) {
        var i = o("AdsDLOAdgroupFieldUtils").getUnlabeledAssetIndexForField(
          e,
          n,
        );
        a != null || s(0, 13362);
        var l = a.get(n);
        if (
          !(l == null || (l instanceof r("immutable").List && l.size === 0))
        ) {
          if (i !== -1) {
            var u = a.getIn([n, String(i)]);
            u instanceof r("immutable").Map &&
              (a = a.setIn(
                [n, String(i)],
                u.set(
                  t,
                  r("immutable").List.of(r("immutable").Map().set("name", d)),
                ),
              ));
          }
          var c = r("AdsAssetFeedFieldToRuleLabelMapping").get(n);
          c != null && (_ = _.set(c, r("immutable").Map().set("name", d)));
        }
      });
      var f = g(e);
      return (
        f.forEach(function (e) {
          _.get(e) != null &&
            (l = l.map(function (t) {
              return t.get(e)
                ? t
                : t.set(e, r("immutable").Map().set("name", d));
            }));
        }),
        (l = l.push(_)),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
            a.set("asset_customization_rules", l),
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.groups.delete,
        )(e)
      );
    }
    function g(e) {
      return o("AdsAssetFeedUtils").isAAAFromRecord(e)
        ? ["image_label", "video_label"]
        : o("AdsAssetFeedUtils").hasSingleImageFormat(e)
          ? ["image_label"]
          : o("AdsAssetFeedUtils").hasSingleVideoFormat(e)
            ? ["video_label"]
            : [];
    }
    function h(e, t) {
      return o("AdsAssetFeedUtils").isAAAFromRecord(e)
        ? o("AdsMutators").chain(
            o("AdsUEditorAdgroupAssetFeedMutators")
              .removeAdlabelsFromAssetFeedSpec,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .asset_customization_rules.delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .autotranslate.delete,
          )(e)
        : o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)
          ? o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
              o("AdsAssetFeedUtils").getTargetObjectType(e),
              e,
              r("nullthrows")(t.pivots.objective),
            )
          : o("AdsLocalizedPlacementsMutators").convertLocalizedPlacementsToPAC(
              e,
            );
    }
    ((l.addLanguage = e),
      (l.renameLanguage = u),
      (l.removeLanguage = c),
      (l.setPrimaryLanguage = d),
      (l.setPrimaryLanguageForDLO = m),
      (l.setPrimaryLanguageForLocalizedPlacements = p),
      (l.addRuleLabelForLanguage = _),
      (l.getACRAdgroupFromGroupRuleAdgroup = f),
      (l.removeAdgroupTranslations = h));
  },
  98,
);
