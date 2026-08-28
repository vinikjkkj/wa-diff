__d(
  "AdsAssetFeedFieldUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdvancedPreviewConstants",
    "AdsAssetFeedConstant",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementCustomizationConstants",
    "AdsPlacementEditorBackgroundColorUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "FBLogger",
    "getByPath",
    "immutable",
    "isFalsey",
    "isTruthy",
    "vulture",
    "zipWith",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e != null && e instanceof r("immutable").List) {
        if (!e.first()) return;
        var n = e.first().get(t);
        if (n != null && typeof n != "string")
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "Cannot fetch adlabel using this method",
          );
        return n;
      }
      return e;
    }
    function s(e, t) {
      return o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(e)
        ? O(e, t)
        : 0;
    }
    function u(e, t, n) {
      if (typeof e == "string") {
        var o = { specValue: e, field: t, assetIndex: n },
          a = JSON.stringify(o, null, 2);
        r("FBLogger")("ads_dynamic_creative_optimization").warn(
          "cannot get asset at index for a non-assetfeed value: " + a,
        );
        return;
      }
      if (e) {
        if (e instanceof r("immutable").List || r("immutable").List.isList(e)) {
          var i;
          if (typeof e == "string" || Array.isArray(e))
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow(
              "specValue should be a List. This is needed because flow does not understand List.isList",
            );
          if (n === e.size) return;
          if (n < 0 || n >= e.size)
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow("assetIndex must be within range");
          var l = (i = e.get(n)) == null ? void 0 : i.get(t);
          if (l == null || typeof l == "string") return l;
          throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
            "Cannot fetch non-string field type using this method",
          );
        }
        if (!(e instanceof Array))
          throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
            "specValue should be an Array. This is needed because flow does not understand List.isList",
          );
        if (n !== e.length) {
          if (n < 0 || n >= e.length)
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow("assetIndex must be within range");
          var s = (e[n] || {})[t];
          if (s != null && typeof s != "string")
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow(
              "Cannot fetch non-string field type using this method",
            );
          return s;
        }
      }
    }
    function c(e, t, n) {
      if (typeof e == "boolean") {
        var o = { specValue: e, field: t, assetIndex: n },
          a = JSON.stringify(o, null, 2);
        r("FBLogger")("ads_dynamic_creative_optimization").warn(
          "cannot get boolean asset at index for a non-assetfeed value: " + a,
        );
        return;
      }
      if (e) {
        if (e instanceof r("immutable").List || r("immutable").List.isList(e)) {
          var i;
          if (n === e.size) return;
          if (typeof e == "boolean" || Array.isArray(e))
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow(
              "specValue should be a List. This is needed because flow does not understand List.isList",
            );
          if (n < 0 || n >= e.size)
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow("assetIndex must be within range");
          var l = (i = e.get(n)) == null ? void 0 : i.get(t);
          if (l && typeof l != "boolean")
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow(
              "Cannot fetch non-boolean field type using this method",
            );
          return l;
        }
        if (!(e instanceof Array))
          throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
            "specValue should be an Array. This is needed because flow does not understand List.isList",
          );
        if (n !== e.length) {
          if (n < 0 || n >= e.length)
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow("assetIndex must be within range");
          var s = (e[n] || {})[t];
          if (s != null && typeof s != "boolean")
            throw r("FBLogger")(
              "ads_dynamic_creative_optimization",
            ).mustfixThrow(
              "Cannot fetch non-boolean field type using this method",
            );
          return s;
        }
      }
    }
    function d(e, t) {
      if (!(e instanceof r("immutable").List) && e != null)
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "specValue has to be list or undefined",
        );
      if (!(!e || t === e.size)) {
        if (t < 0 || t >= e.size)
          throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
            "assetIndex must be within range",
          );
        return r("immutable").List.of(e.get(t));
      }
    }
    function m(e) {
      if (!(e instanceof r("immutable").List) && e != null)
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "specValue has to be list or undefined",
        );
      if (e) return e;
    }
    function p(e, t) {
      var n = e;
      if (n != null && typeof n != "string" && n.size !== 0) {
        if (t < 0 || t >= n.size)
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "assetIndex must be within range",
          );
        var a = n.get(t);
        if (!(a instanceof r("immutable").Map)) return;
        var i = a.get(o("AdsAssetFeedConstant").ADLABELS);
        if (!(i instanceof r("immutable").List))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "adlabels must be a List",
          );
        return i.map(function (e) {
          if (!r("immutable").Map.isMap(e))
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "adlabel should be an Immutable.Map",
            );
          return e.get("name");
        });
      }
    }
    function _(e, t) {
      var n = e.get(t);
      return typeof n != "string" ? null : n;
    }
    function f(e) {
      var t = e.get("image_crops");
      return t instanceof r("immutable").Map
        ? t
        : Object.prototype.toString.call(t) === "[object Object]" &&
            typeof t != "string"
          ? r("immutable").Map(t)
          : null;
    }
    function g(e) {
      var t = e.getIn([
        "portrait_customizations",
        "specifications",
        0,
        "background_color",
      ]);
      return t
        ? o("AdsPlacementEditorBackgroundColorUtils").toHexBackgroundColor(t)
        : null;
    }
    function h(e) {
      return e.getIn([
        "portrait_customizations",
        "specifications",
        0,
        "background_color",
      ]);
    }
    function y(e) {
      return e.getIn(["interactive_components_spec", "components"]);
    }
    function C(e) {
      return e.getIn([
        "interactive_components_spec",
        "components",
        0,
        "poll_spec",
      ]);
    }
    function b(e) {
      return e.getIn([
        "interactive_components_spec",
        "components",
        0,
        "position_spec",
      ]);
    }
    function v(e, t) {
      if (!e) return null;
      if (!r("immutable").List.isList(e))
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "videos must be list",
        );
      if (Array.isArray(e))
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "videos should be a List. This is needed because flow does not understand List.isList",
        );
      if (e.isEmpty()) return null;
      if (t < 0 || t >= e.size)
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "assetIndex must be within range",
        );
      var n = e.get(t);
      if (!r("immutable").Map.isMap(n))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "video asset must be map",
        );
      if (typeof n == "string")
        throw r("FBLogger")("ads_dynamic_creative_optimization").mustfixThrow(
          "video should be a Map. This is needed because flow does not understand Map.isMap",
        );
      var o = n.get("caption_ids");
      return o instanceof r("immutable").List
        ? o
            .map(function (e) {
              return String(e);
            })
            .toArray()
        : null;
    }
    function S(e) {
      return (
        r("vulture")("qZTkJGt6vzzKWIPysi30zi6fsoc="),
        e
          ? Array.isArray(e)
            ? e
            : e
                .map(function (e) {
                  if (typeof e != "string")
                    throw r("FBLogger")(
                      "ads_dynamic_creative_optimization",
                    ).mustfixThrow("caption ID must be string");
                  return e;
                })
                .toArray()
          : null
      );
    }
    function R(e) {
      if (e != null && typeof e != "string")
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "cannot get non assetfeed value for an asset feed creative",
        );
      return e;
    }
    function L(e) {
      return e instanceof r("immutable").List
        ? e.first()
        : Array.isArray(e)
          ? e[0]
          : e;
    }
    function E(e, t) {
      if (e && e instanceof r("immutable").List) {
        if (!e.first()) return;
        var n = e.first().get(t);
        if (n == null) return null;
        if (typeof n != "object")
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "Can only fetch image crops using this method",
          );
        return n;
      }
      return e;
    }
    function k(e, t) {
      return e === "deeplink_url" ? r("getByPath")(t, ["app_link"]) : t;
    }
    function I(e, t, n) {
      if (!e || !r("immutable").List.isList(e))
        return { index: null, fieldValue: null };
      var a = e.findEntry(function (e) {
        var n =
          e.get(o("AdsAssetFeedConstant").ADLABELS) || r("immutable").List();
        if (!(n instanceof r("immutable").List))
          throw r("FBLogger")("am_feature_pac").mustfixThrow(
            "adlabels should be an Immutable.List",
          );
        return n.some(function (e) {
          if (!r("immutable").Map.isMap(e)) {
            if (e != null && typeof e == "object" && e.name !== null)
              return e.name === t;
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "adlabel should be an Immutable.map",
            );
          }
          return e.get("name") === t;
        });
      });
      if (a) {
        var i = a[0],
          l = a[1];
        if (n == null) return { index: i, fieldValue: null };
        var s = l && l.get(n),
          u = typeof s == "string" || s != null ? s : null;
        if (u == null || typeof u == "string")
          return i > -1
            ? { index: i, fieldValue: u }
            : { index: null, fieldValue: null };
        r("FBLogger")("am_feature_pac").mustfix(
          "The value field should be a string or null",
        );
      }
      return { index: null, fieldValue: null };
    }
    function T(e, t, n, o) {
      if (!e || !r("immutable").List.isList(e)) return null;
      var a = e.map(function (e, t, n) {
          return { value: e, index: t };
        }),
        i = a.filter(function (e) {
          var o = e.value.get(t) || r("immutable").List();
          if (!(o instanceof r("immutable").List))
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "adlabels should be an Immutable.List",
            );
          return o.some(function (e) {
            if (!r("immutable").Map.isMap(e)) {
              if (e != null && typeof e == "object" && e.name !== null)
                return e.name;
              throw r("FBLogger")("am_feature_pac").mustfixThrow(
                "adlabel should be an Immutable.map",
              );
            }
            return e.get("name") === n;
          });
        });
      return i
        ? i.map(function (e) {
            var t = e.index,
              n = e.value;
            if (o == null) return { index: t, fieldValue: null };
            var a = n && n.get(o),
              i = typeof a == "string" || a != null ? a : null;
            return i == null || typeof i == "string"
              ? { index: t, fieldValue: i }
              : (r("FBLogger")("am_feature_pac").mustfix(
                  "The value field should be a string or null",
                ),
                { index: t, fieldValue: null });
          })
        : null;
    }
    function D(e, t, n, o) {
      var a = r("immutable").List();
      if (!(!e || !r("immutable").List.isList(e)))
        return (
          e.forEach(function (e) {
            if (e instanceof r("immutable").Map) {
              var o = e.get(t) || r("immutable").List();
              if (!(o instanceof r("immutable").List))
                throw r("FBLogger")(
                  "ads_dynamic_creative_optimization",
                ).mustfixThrow("adlabels should be an Immutable.List");
              var i = o.some(function (e) {
                if (!r("immutable").Map.isMap(e))
                  throw r("FBLogger")(
                    "ads_dynamic_creative_optimization",
                  ).mustfixThrow("adlabel should be an Immutable.map");
                return e.get("name") === n;
              });
              i && (a = a.set(a.size, e));
            }
          }),
          a
        );
    }
    function x(e, t, n, a, i) {
      var l = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromLabelFieldAndPlacement(e, a, i),
        s = D(r("immutable").List(n), t, l);
      return s != null ? s.toArray() : n;
    }
    function $(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.images;
      if (a == null) return [];
      var i = x(e, "adlabels", Array.from(a), n, "image_label");
      if (i == null || i.length === 0) return [];
      var l = null,
        s = null,
        u = i[0];
      return (
        u instanceof r("immutable").Map &&
          ((l = u.get("hash")),
          (s = u.get("image_crops")),
          (s =
            s instanceof r("immutable").Map && s.size > 0
              ? s.keySeq().toArray()[0]
              : null)),
        t.filter(function (e) {
          var t =
            e.crops != null
              ? Object.keys(e.crops).find(function (e) {
                  return !!e;
                })
              : null;
          return e.hash === l && t === s;
        })
      );
    }
    function P(e, t) {
      var n = e.length > 0 && e[0].crops != null;
      if (
        o(
          "AdsAdvancedPreviewConstants",
        ).SUPPORTED_PLACEMENT_FOR_DOF_IMAGE_CROP.has(t) &&
        n
      ) {
        var r = JSON.parse(JSON.stringify(e))[0];
        return ((r.crops = null), [r, e[0]]);
      }
      return e;
    }
    function N(e, t, n) {
      var a = new Set(n);
      if (a.size === 0 && e.size === 1) {
        var i;
        return r("immutable").OrderedMap(
          ((i = {}),
          (i[o("AdsPlacementCustomizationConstants").NO_ADLABEL] = e.get(0)),
          i),
        );
      }
      var l = r("immutable")
          .OrderedMap(
            r("immutable")
              .List(n)
              .map(function (e) {
                return [e, r("immutable").Map()];
              }),
          )
          .asMutable(),
        s = function (t) {
          return a.has(t);
        },
        u = function (n) {
          var e = n.get(t) || r("immutable").List();
          if (!(e instanceof r("immutable").List))
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "adlabels should be an Immutable.List",
            );
          var o = e
            .toSeq()
            .map(function (e) {
              if (!r("immutable").Map.isMap(e))
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "adlabel should be an Immutable.map",
                );
              return e.get("name");
            })
            .filter(s);
          o.forEach(function (e) {
            l.set(e, n);
          });
        };
      for (var c of e) u(c);
      return l.asImmutable().filter(function (e) {
        return !e.isEmpty();
      });
    }
    function M(e, t, n, o) {
      return r("zipWith")(
        function (e, t) {
          return w(t, e, n, o);
        },
        t.getValues(),
        e,
      );
    }
    function w(e, t, n, r) {
      if (e && o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
        var a = A(e, n);
        if (a != null) return a;
      }
      return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(e)
        ? u(t, r, s(e, n))
        : R(t);
    }
    function A(e, t) {
      var n, r;
      switch (t) {
        case "bodies":
          return (n = o(
            "AdsUEditorAdgroupBodyMutators",
          ).getDefaultPlacementBodyAssetAndIndex(e)) == null
            ? void 0
            : n.bodyText;
        case "titles":
          return (r = o(
            "AdsUEditorAdgroupHeadlineMutators",
          ).getDefaultPlacementHeadlineAssetAndIndex(e)) == null
            ? void 0
            : r.text;
        default:
          return null;
      }
    }
    function F(e, t, n, o) {
      var a = r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path.concat(
        n,
        String(t),
      );
      o != null && (a = a.concat(o));
      var i = r("getByPath")(e, a);
      return i ? { error: i } : null;
    }
    function O(e, t) {
      if (!(e instanceof r("immutable").Iterable) && typeof e != "object")
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "adgroup must be of type object or Immutable.Iterable",
        );
      return e instanceof r("immutable").Iterable ? W(e, t) : B(e, t);
    }
    function B(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (o == null) return 0;
      var a = t,
        i = o[a],
        l = o.asset_customization_rules,
        s = r("AdsAssetFeedFieldToRuleLabelMapping").get(t),
        u = r("AdsDLOFieldToAdlabelsMapping").get(t);
      if (i === void 0 || l == null || s == null || u == null) return 0;
      if (!(i instanceof Array))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "assets must be of type Array",
        );
      var c = l.find(function (e) {
        return e.is_default;
      });
      if (c === void 0) return i.length;
      var d = c[s],
        m = d != null ? d.name : null,
        p = i.findIndex(function (e) {
          var t = e[u];
          return V(t, m);
        });
      return p !== -1 ? p : i.length;
    }
    function W(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (o == null) return 0;
      var a = o.get(t),
        i = o.asset_customization_rules,
        l = r("AdsAssetFeedFieldToRuleLabelMapping").get(t),
        s = r("AdsDLOFieldToAdlabelsMapping").get(t);
      if (a === void 0 || i == null || l == null || s == null) return 0;
      var u =
          i.find(function (e) {
            return e.get("is_default");
          }) || r("immutable").Map(),
        c = u.get(l) || r("immutable").Map();
      if (!(c instanceof r("immutable").Map))
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "defaultLabel must be of type Immutable.Map",
        );
      var d = c.get("name"),
        m = a.findIndex(function (e) {
          var t = e.get(s);
          return V(t, d);
        }),
        p = a.size !== void 0 ? a.size : a.length;
      return m !== -1 ? m : p;
    }
    function q(e, t, n, a) {
      var i = o(
          "AdsAssetFeedMutationUtils",
        ).UnifiedCreativeAPIToAssetFeedField.get(n.name),
        l = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[i].get(e);
      if (
        (l == null && (l = r("immutable").List()),
        !(l instanceof r("immutable").List))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "this function must be invoked on an asset feed field",
        );
      return l.findIndex(function (e) {
        return e.isSuperset(a);
      });
    }
    function U(e, t) {
      for (var n = t, o = [], a = 0; a < e.size && !n.isEmpty(); a++)
        e.get(a).isSuperset(n.first()) && (o.push(a), (n = n.rest()));
      return r("immutable").List(o);
    }
    function V(e, t) {
      return t == null
        ? e == null
        : (e || []).some(function (e) {
            return (
              (e instanceof r("immutable").Map ? e.get("name") : e.name) === t
            );
          });
    }
    function H(e, t) {
      if (!e || !r("immutable").List.isList(e)) return null;
      var n = e.findEntry(function (e) {
          var n =
            e.get(o("AdsAssetFeedConstant").ADLABELS) || r("immutable").List();
          if (!(n instanceof r("immutable").List))
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "adlabels should be an Immutable.List",
            );
          return n.some(function (e) {
            if (!r("immutable").Map.isMap(e))
              throw r("FBLogger")("am_feature_pac").mustfixThrow(
                "adlabel should be an Immutable.map",
              );
            return e.get("name") === t;
          });
        }),
        a = n[0],
        i = n[1];
      return i;
    }
    function G(e, t, n) {
      if (!e || !r("immutable").List.isList(e))
        return { index: null, fieldValue: null };
      var a = e.findEntry(function (e) {
        var n =
          e.get(o("AdsAssetFeedConstant").ADLABELS) || r("immutable").List();
        if (!(n instanceof r("immutable").List))
          throw r("FBLogger")("ads_market_dynamics_solutions").mustfixThrow(
            "adlabels should be an Immutable.List",
          );
        return n.some(function (e) {
          if (!r("immutable").Map.isMap(e)) {
            if (e != null && typeof e == "object" && e.name !== null)
              return e.name === t;
            throw r("FBLogger")("ads_market_dynamics_solutions").mustfixThrow(
              "adlabel should be an Immutable.map",
            );
          }
          return e.get("name") === t;
        });
      });
      if (a) {
        var i,
          l,
          s = a[0],
          u = a[1],
          c = u && u.get("omnichannel_link_spec");
        if (c == null) return { index: null, fieldValue: null };
        var d =
            c == null || (i = c.get("app")) == null
              ? void 0
              : i.get("application_id"),
          m =
            c == null || (l = c.get("app")) == null
              ? void 0
              : l.get("platform_specs");
        if (m == null) return { index: s, fieldValue: null, applicationId: d };
        var p = "",
          _ = m == null ? void 0 : m.get(n);
        if (_ != null && (_ == null ? void 0 : _.get("url")) != null) {
          var f;
          p = (f = _ == null ? void 0 : _.get("url")) != null ? f : "";
        }
        return { index: s, fieldValue: p, applicationId: d };
      }
      return { index: null, fieldValue: null };
    }
    function z(e, t, n, o) {
      var a;
      switch (n) {
        case "bodies":
          a = r("AdsAdgroupSemanticFields").message.get(t, e);
          break;
        case "titles":
          a = r("AdsAdgroupSemanticFields").headline.get(t, e);
          break;
        case "descriptions":
          a = r("AdsAdgroupSemanticFields").linkDescription.get(t, e);
          break;
      }
      if (a == null) return null;
      if (typeof a == "string") return a === "" ? null : [a];
      if (r("immutable").List.isList(a)) {
        var i = Array.from(
          a
            .map(function (e, t) {
              var n = u(a, "text", t),
                i = u(a, "text_gen_input_text", t);
              switch (o) {
                case !0:
                  if (r("isFalsey")(i)) return null;
                  break;
                case !1:
                  if (r("isTruthy")(i)) return null;
                  break;
                default:
                  break;
              }
              return n;
            })
            .filter(Boolean),
        );
        return i.length === 0 ? null : i;
      }
      return null;
    }
    ((l.firstAsset_TALK_WITH_ACE_BEFORE_USE = e),
      (l.getDefaultAssetIndex = s),
      (l.getAssetAtIndex = u),
      (l.getBooleanAssetAtIndex = c),
      (l.getSingleValueAssetForType = d),
      (l.getAssetsForType = m),
      (l.getAssetLabelListAtIndex = p),
      (l.getAssetFieldStringValue = _),
      (l.getImageAssetCrops = f),
      (l.getAssetBackgroundColor = g),
      (l.getAPIAssetBackgroundColor = h),
      (l.getAssetInteractiveComponents = y),
      (l.getAssetInteractivePollSpec = C),
      (l.getAssetInteractivePositionSpec = b),
      (l.getVideoAssetCaptionIDs = v),
      (l.getNonVideoAssetCaptionIDs = S),
      (l.getNonAssetFeedValue = R),
      (l.firstCTAAsset_TALK_WITH_ACE_BEFORE_USE = L),
      (l.firstImageCropsAsset_TALK_WITH_ACE_BEFORE_USE = E),
      (l.getLinkURLValue = k),
      (l.getAssetEntryForLabel = I),
      (l.getAssetEntriesForLabel = T),
      (l.getDoFAssetEntriesForLabel = D),
      (l.getAssetEntriesFromLabelFieldAndPlacement = x),
      (l.getImageAssetsFromLabelFieldAndPlacement = $),
      (l.getImageCroppingAssets = P),
      (l.getAssetMapForLabels = N),
      (l.getDefaultFieldValuesForAdgroups = M),
      (l.getDefaultFieldValueForAdgroup = w),
      (l.getValidationErrorsForIndex = F),
      (l.getDefaultIndexForAsset = O),
      (l.findAssetIndex = q),
      (l.findTargetAssetsIndex = U),
      (l.getAssetEntryObjectForLabel = H),
      (l.getAssetPACOmnichannelAppEntryForLabel = G),
      (l.getTexts = z));
  },
  98,
);
