__d(
  "AdsCallToActionTypesUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCallToActionTypes",
    "AdsLeadGenImInterestedCtaUtils",
    "AdsLegacyObjectivesUtils",
    "gkx",
    "immutable",
    "isFalsey",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = {},
        t = function () {
          if (
            !Object.prototype.hasOwnProperty.call(
              r("AdsCallToActionTypes").TYPES,
              n,
            )
          )
            return 1;
          var t = r("AdsCallToActionTypes").TYPES[n],
            o = t.objectives;
          o.forEach(function (n) {
            (e[n] || (e[n] = []), e[n].push(t));
          });
        };
      for (var n in r("AdsCallToActionTypes").TYPES) t();
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          e[o].sort(function (e, t) {
            return e.name.localeCompare(t.name);
          });
      if (r("gkx")("14839")) {
        var a,
          i,
          l =
            (a = r("AdsCallToActionTypes").TYPES.LEARN_MORE) == null
              ? void 0
              : a.name,
          s =
            (i = r("AdsCallToActionTypes").TYPES.SEE_DETAILS) == null
              ? void 0
              : i.name;
        if (l && s) {
          for (var u in e)
            if (Object.prototype.hasOwnProperty.call(e, u)) {
              var c = e[u],
                d = c.findIndex(function (e) {
                  return e.name === l;
                }),
                m = c.findIndex(function (e) {
                  return e.name === s;
                });
              if (d !== -1 && m !== -1) {
                var p = c.splice(m, 1),
                  _ = p[0],
                  f = c.findIndex(function (e) {
                    return e.name === l;
                  });
                c.splice(f, 0, _);
              }
            }
        }
      }
      if (r("gkx")("9826")) {
        var g = r("AdsCallToActionTypes").TYPES.PLAY_GAME;
        (g.objectives.concat([
          r("AdsAPIObjectives").LINK_CLICKS,
          r("AdsAPIObjectives").OUTCOME_TRAFFIC,
        ]),
          e[r("AdsAPIObjectives").LINK_CLICKS] != null &&
            e[r("AdsAPIObjectives").LINK_CLICKS].push(g),
          e[r("AdsAPIObjectives").OUTCOME_TRAFFIC] != null &&
            e[r("AdsAPIObjectives").OUTCOME_TRAFFIC].push(g));
      }
      return e;
    }
    var s = null;
    r("gkx")("9706")
      ? r("requestIdleCallback")(function () {
          s == null && (s = e());
        })
      : (s = e());
    function u(t, n, a) {
      if (r("isFalsey")(t)) return [];
      var i = o("AdsLegacyObjectivesUtils").convertToLegacyAppObjectives_HACK(
        t,
        n,
        a,
      );
      s == null && (s = e());
      var l = s[i] ? s[i].slice(0) : [];
      return o(
        "AdsLeadGenImInterestedCtaUtils",
      ).isImInterestedCtaEnabledForObjective(i)
        ? l.map(function (e) {
            var t = o(
              "AdsLeadGenImInterestedCtaUtils",
            ).getImInterestedCtaLabelIfApplicable(e.name, i);
            return t != null ? babelHelpers.extends({}, e, { text: t }) : e;
          })
        : l;
    }
    function c(e) {
      var t,
        n,
        r,
        a,
        i =
          ((t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.call_to_action) == null
            ? void 0
            : t.type) ||
          ((n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.video_data) == null ||
          (n = n.call_to_action) == null
            ? void 0
            : n.type) ||
          ((r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.call_to_action_types);
      if (!i) {
        var l,
          s =
            (l = e.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.call_to_actions;
        s != null &&
          (i = s.map(function (e) {
            return e.get("type");
          }));
      }
      return typeof i == "string"
        ? i
        : i != null &&
            o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e) &&
            ((a = i) == null ? void 0 : a.size) == 1
          ? String(i.first())
          : null;
    }
    function d(e, t, n) {
      var a = null;
      if (
        o("AdsBrandAwarenessUtils").isBrandObjective(t) &&
        n != null &&
        t === r("AdsAPIObjectives").OUTCOME_AWARENESS
      )
        return n === "WHATSAPP";
      if (e != null) {
        var i, l;
        if (
          ((a =
            ((i = e.creative) == null ||
            (i = i.object_story_spec) == null ||
            (i = i.link_data) == null ||
            (i = i.call_to_action) == null ||
            (i = i.value) == null
              ? void 0
              : i.app_destination) ||
            ((l = e.creative) == null ||
            (l = l.object_story_spec) == null ||
            (l = l.video_data) == null ||
            (l = l.call_to_action) == null ||
            (l = l.value) == null
              ? void 0
              : l.app_destination)),
          a == null)
        ) {
          var s,
            u =
              (s = e.creative) == null || (s = s.asset_feed_spec) == null
                ? void 0
                : s.call_to_actions;
          if (u != null && u.size === 1)
            if (u instanceof r("immutable").List) {
              var c,
                d = (c = u.first()) == null ? void 0 : c.get("value");
              d instanceof r("immutable").Map &&
                (a = d == null ? void 0 : d.get("app_destination"));
            } else {
              var m;
              a =
                (m = u[0]) == null || (m = m.value) == null
                  ? void 0
                  : m.app_destination;
            }
        }
        return (
          a === r("AdCampaignDestination").WHATSAPP &&
          t === r("AdsAPIObjectives").OUTCOME_AWARENESS
        );
      }
      return !1;
    }
    function m(e, t) {
      var n,
        o,
        a =
          (n = r("AdsCallToActionTypes").TYPES.BOOK_TRAVEL) == null
            ? void 0
            : n.name,
        i =
          (o = r("AdsCallToActionTypes").TYPES.GET_IN_TOUCH) == null
            ? void 0
            : o.name;
      if (!a || !i) return t;
      var l = r("gkx")("2158");
      if (l) {
        var s = t.findIndex(function (e) {
          return e.name === a;
        });
        s !== -1 &&
          (t.splice(s, 1), t.push(r("AdsCallToActionTypes").TYPES.BOOK_TRAVEL));
      } else if (e !== i)
        return t.filter(function (e) {
          return e.name !== i;
        });
      return t;
    }
    ((l.typesForObjective = u),
      (l.getCTATypeFromAdgroup = c),
      (l.isWhatsAppDestinationTypeForAwareness = d),
      (l.handleLeadgenCtaReplacementTypes = m));
  },
  98,
);
