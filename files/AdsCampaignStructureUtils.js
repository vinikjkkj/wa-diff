__d(
  "AdsCampaignStructureUtils",
  [
    "AdsObjectTypes",
    "MarketingMessagesGKUtils",
    "adsMgmtLogger",
    "concatArrays",
    "debounce",
    "immutable",
    "sortBy",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("immutable").Map();
      return (
        e
          .sortBy(function (e) {
            return e.name;
          })
          .forEach(function (e) {
            var n = e.adset_id,
              o = t.get(n);
            o
              ? (t = t.set(n, o.push(e)))
              : (t = t.set(n, r("immutable").List([e])));
          }),
        t
      );
    }
    function s(e) {
      var t = r("immutable").Map();
      return (
        e
          .sortBy(function (e) {
            return e.name;
          })
          .forEach(function (e) {
            var n = e.campaign_id,
              o = t.get(n);
            o
              ? (t = t.set(n, o.push(e)))
              : (t = t.set(n, r("immutable").List([e])));
          }),
        t
      );
    }
    function u(t, n, r) {
      var o = e(r),
        a = s(n);
      return { campaignIDToAdgroupsMap: o, campaignGroupIDToCampaignsMap: a };
    }
    function c(e, t) {
      var n = E(e),
        o = t
          .filter(function (e) {
            return E(e.name).includes(n) || e.id === n;
          })
          .map(function (e) {
            return {
              name: e.name,
              objectID: e.id,
              objectType: r("AdsObjectTypes").CAMPAIGN_GROUP,
            };
          });
      return r("sortBy")(o, function (e) {
        return e.name;
      });
    }
    function d(e, t) {
      var n = E(e),
        o = t
          .filter(function (e) {
            return E(e.name).includes(n) || e.id === n;
          })
          .map(function (e) {
            return {
              name: e.name,
              objectID: e.id,
              objectType: r("AdsObjectTypes").CAMPAIGN,
            };
          });
      return r("sortBy")(o, function (e) {
        return e.name;
      });
    }
    function m(e, t) {
      var n = E(e),
        o = t
          .filter(function (e) {
            return E(e.name).includes(n) || e.id === n;
          })
          .map(function (e) {
            return {
              name: e.name,
              objectID: e.id,
              objectType: r("AdsObjectTypes").ADGROUP,
            };
          });
      return r("sortBy")(o, function (e) {
        return e.name;
      });
    }
    function p(e, t, n, o) {
      return r("immutable").OrderedMap([
        [r("AdsObjectTypes").CAMPAIGN_GROUP, c(e, t)],
        [r("AdsObjectTypes").CAMPAIGN, d(e, n)],
        [r("AdsObjectTypes").ADGROUP, m(e, o)],
      ]);
    }
    function _(e, t) {
      var n = e.slice(-1)[0];
      return t.findIndex(function (e) {
        return e === n;
      });
    }
    function f(e, t) {
      return t.findIndex(function (t) {
        return t === e;
      });
    }
    function g(e, t, n) {
      for (var r = n; r >= 1 && e.includes(t[r - 1]); ) r -= 1;
      return r;
    }
    function h(e, t, n) {
      for (var r = n; r <= t.length - 2 && e.includes(t[r + 1]); ) r += 1;
      return r;
    }
    function y(e, t, n, r) {
      var o;
      return (e === r ? (o = Math.min(t, n)) : (o = Math.min(t, r)), o);
    }
    function C(e, t, n, r) {
      var o;
      return (e === n ? (o = Math.max(t, r)) : (o = Math.max(t, n)), o);
    }
    function b(e, t, n, r) {
      var a = _(e, n),
        i = f(t, n),
        l = g(e, n, a),
        s = h(e, n, a),
        u = n.slice(l, s + 1),
        c = y(a, i, s, l),
        d = C(a, i, s, l),
        m = n.slice(c, d + 1),
        p = e
          .filter(function (e) {
            return !u.includes(e);
          })
          .concat(m)
          .filter(function (e) {
            return e !== t;
          })
          .filter(function (e) {
            return o(
              "MarketingMessagesGKUtils",
            ).isMarketingMessagesBulkEditingEnabled()
              ? !0
              : !r(e);
          });
      return (p.push(t), p);
    }
    function v(e, t) {
      function n(o, a, i, l) {
        var s = [];
        e: {
          if (o === r("AdsObjectTypes").CAMPAIGN_GROUP) {
            s = e.get(a.id, []).map(function (e) {
              return n(r("AdsObjectTypes").CAMPAIGN, e, a);
            });
            break e;
          }
          if (o === r("AdsObjectTypes").CAMPAIGN) {
            s = t.get(a.id, []).map(function (e) {
              return n(r("AdsObjectTypes").ADGROUP, e, a);
            });
            break e;
          }
          break e;
        }
        return babelHelpers.extends({}, a, {
          objectType: o,
          children: s,
          fragmentID: l,
          hasChildren: s.length > 0,
          parentID: i == null ? void 0 : i.id,
          isCollapsed: !1,
          isDraft: !1,
        });
      }
      return n;
    }
    function S(e, t, n) {
      function o(e) {
        var a = babelHelpers.extends({}, e, { isCollapsed: t.includes(e.id) });
        return n && a.isCollapsed
          ? [a]
          : [a].concat(r("concatArrays")(e.children.map(o)));
      }
      var a = e.map(function (e) {
        return o(e);
      });
      return r("immutable").List(r("concatArrays")(a.toArray()));
    }
    function R(e, t, n) {
      function o(e) {
        var a = babelHelpers.extends({}, e, { isCollapsed: t.includes(e.id) });
        return n && a.isCollapsed
          ? [a]
          : [a].concat(r("concatArrays")(e.children.map(o)));
      }
      var a = e.map(function (e) {
        return o(e);
      });
      return r("concatArrays")(a);
    }
    function L(e) {
      var t = /^[1-9]\d*$/;
      return e != null && t.test(e);
    }
    function E(e) {
      return e == null ? "" : e.toString().toLowerCase();
    }
    var k = r("debounce")(function (e) {
      r("adsMgmtLogger")("left_nav_activate_edit_name", { ad_account_id: e });
    }, 1e3);
    function I(e) {
      k(e);
    }
    var T = r("debounce")(function (e) {
      r("adsMgmtLogger")("left_nav_finish_edit_name", { ad_account_id: e });
    }, 2e3);
    function D(e) {
      T(e);
    }
    function x(e) {
      var t,
        n = (t = e.at(0)) == null ? void 0 : t.objectType,
        o = 0;
      e: {
        if (n === r("AdsObjectTypes").CAMPAIGN_GROUP) {
          return (
            e.forEach(function (e) {
              e.children.forEach(function (e) {
                o += e.children.length;
              });
            }),
            o
          );
          break e;
        }
        if (n === r("AdsObjectTypes").CAMPAIGN) {
          return (
            e.forEach(function (e) {
              o += e.children.length;
            }),
            o
          );
          break e;
        }
        if (n === r("AdsObjectTypes").ADGROUP) return e.length;
        break e;
      }
      return 0;
    }
    function $(e) {
      var t,
        n = (t = e.at(0)) == null ? void 0 : t.objectType,
        o = { adgroup: 0, campaign: 0, campaignGroup: 0 };
      e: {
        if (n === r("AdsObjectTypes").CAMPAIGN_GROUP) {
          ((o.campaignGroup = e.length),
            e.forEach(function (e) {
              (r("vulture")("JhzilVk-B1bzv_ijFDu6Hg4Mpxw="),
                e.children.forEach(function (e) {
                  ((o.campaign += 1), (o.adgroup += e.children.length));
                }));
            }));
          break e;
        }
        if (n === r("AdsObjectTypes").CAMPAIGN) {
          ((o.campaign = e.length),
            e.forEach(function (e) {
              o.adgroup += e.children.length;
            }));
          break e;
        }
        if (n === r("AdsObjectTypes").ADGROUP) {
          o.adgroup = e.length;
          break e;
        }
        break e;
      }
      return o;
    }
    ((l.formatAdObjectsForDisplayInSearchAndFilterMutableResult = p),
      (l.getUpdatedSelectIDsForShiftKeyMultiSelect = b),
      (l.getFlatNodeProcessor = v),
      (l.flattenNodeTree = S),
      (l.flattenNodeTreeMutable = R),
      (l.isFBID = L),
      (l.logActivatedEditName = I),
      (l.logFinishEditName = D),
      (l.getNumOfAdsUnderSelection = x),
      (l.getCountsPerObjectType = $));
  },
  98,
);
