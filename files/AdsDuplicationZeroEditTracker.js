__d(
  "AdsDuplicationZeroEditTracker",
  [
    "AdsALChannel",
    "AdsDuplicationFragmentSources",
    "AdsInterfacesLogger",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["ad", "ad_set", "campaign"],
      u =
        ((e = {}),
        (e.ad = "publish_ad"),
        (e.ad_set = "publish_campaign"),
        (e.campaign = "publish_campaign_group"),
        e),
      c = new Map(),
      d = null;
    function m(e) {
      Object.keys(e.specDiff).forEach(function (t) {
        var n,
          r,
          o = (n = e.changedIDs) == null ? void 0 : n[t];
        if (o != null) {
          var a = c.get(o.draft_id),
            i =
              a == null ? void 0 : a.fragmentIDToObjectType.get(o.fragment_id);
          if (!(a == null || i == null)) {
            a.editedFragmentIDs.add(o.fragment_id);
            var l =
                (r = a.fragmentIDToChangedSpecKeys.get(o.fragment_id)) != null
                  ? r
                  : new Set(),
              s = e.specDiff[t];
            (s != null &&
              typeof s == "object" &&
              !Array.isArray(s) &&
              Object.keys(s).forEach(function (e) {
                return l.add(e);
              }),
              a.fragmentIDToChangedSpecKeys.set(o.fragment_id, l),
              a.fragmentIDToLastChange.set(o.fragment_id, {
                actionType: e.actionType,
                browserEventType: e.browserEventType,
                source: o.source,
                timestamp: Date.now(),
              }));
          }
        }
      });
    }
    function p() {
      d == null &&
        (d = o("AdsALChannel").AdsALChannel.addListener(
          "al_ad_object_spec_change_event",
          m,
        ));
    }
    function _() {
      c.size > 0 ||
        d == null ||
        (o("AdsALChannel").AdsALChannel.removeListener(
          "al_ad_object_spec_change_event",
          d,
        ),
        (d = null));
    }
    function f(e, t, n) {
      if (o("AdsDuplicationFragmentSources").isDuplicationFragmentSource(n)) {
        p();
        var r = c.get(e),
          a =
            r != null
              ? r
              : {
                  editedFragmentIDs: new Set(),
                  fragmentIDToChangedSpecKeys: new Map(),
                  fragmentIDToLastChange: new Map(),
                  fragmentIDToObjectType: new Map(),
                };
        (r == null && c.set(e, a),
          t.forEach(function (e) {
            a.fragmentIDToObjectType.set(e.id, e.ad_object_type);
          }));
      }
    }
    function g() {
      return {
        tracked: 0,
        edited: 0,
        fragmentIDs: new Set(),
        specKeys: new Set(),
        lastSpecChange: null,
      };
    }
    function h(e, t) {
      return t.length === 0
        ? Array.from(e.fragmentIDToObjectType.keys())
        : t.filter(function (t) {
            return e.fragmentIDToObjectType.has(t);
          });
    }
    function y(e, t, n) {
      ((n.tracked += 1), n.fragmentIDs.add(t));
      var r = e.editedFragmentIDs.has(t);
      if (!r) return !1;
      n.edited += 1;
      var o = e.fragmentIDToChangedSpecKeys.get(t);
      o != null &&
        o.forEach(function (e) {
          return n.specKeys.add(e);
        });
      var a = e.fragmentIDToLastChange.get(t);
      return (
        a != null &&
          (n.lastSpecChange == null ||
            a.timestamp > n.lastSpecChange.timestamp) &&
          (n.lastSpecChange = a),
        !0
      );
    }
    function C(e) {
      var t = null;
      return (
        s.forEach(function (n) {
          var r = e[n].lastSpecChange;
          r != null && (t == null || r.timestamp > t.timestamp) && (t = r);
        }),
        t
      );
    }
    function b(e, t) {
      var n,
        r = h(e, t);
      if (r.length === 0) return null;
      var o = ((n = {}), (n.ad = g()), (n.ad_set = g()), (n.campaign = g()), n),
        a = !1;
      return (
        r.forEach(function (t) {
          var n = e.fragmentIDToObjectType.get(t);
          n != null && y(e, t, o[n]) && (a = !0);
        }),
        { levelStats: o, lastSpecChange: C(o), hasUserSpecEdits: a }
      );
    }
    function v(e) {
      return e.size === 0
        ? null
        : Array.from(e, function (e) {
            return String(e);
          });
    }
    function S(e, t, n, o, a, i) {
      var l, s, u;
      r("AdsInterfacesLogger").logOnce({
        eventName: "duplication_zero_edit",
        data: babelHelpers.extends(
          {},
          i,
          ((u = {}),
          (u.sub_event = e),
          (u.current_report_id = t),
          (u.draft_id = n),
          (u.is_edit = o),
          (u.source = (l = a == null ? void 0 : a.source) != null ? l : null),
          (u.action_type =
            (s = a == null ? void 0 : a.actionType) != null ? s : null),
          u),
        ),
      });
    }
    function R(e, t) {
      var n;
      return (
        (n = {}),
        (n.object_level = e),
        (n.item_count = t.tracked),
        (n.duplicate_count = t.edited),
        (n.field_names = v(t.specKeys)),
        (n.fragment_ids = v(t.fragmentIDs)),
        n
      );
    }
    function L(e, t) {
      var n,
        o = c.get(e);
      if (o != null) {
        var a = b(o, t);
        if (a != null) {
          var i = a.hasUserSpecEdits,
            l = a.lastSpecChange,
            d = a.levelStats,
            m = r("uuidv4")(),
            p = 0,
            _ = 0,
            f = new Set();
          (s.forEach(function (t) {
            var n = d[t];
            ((p += n.tracked),
              (_ += n.edited),
              n.fragmentIDs.forEach(function (e) {
                return f.add(e);
              }),
              n.tracked > 0 && S(u[t], m, e, i, n.lastSpecChange, R(t, n)));
          }),
            S(
              "publish",
              m,
              e,
              i,
              l,
              ((n = {}),
              (n.item_count = p),
              (n.duplicate_count = _),
              (n.fragment_ids = v(f)),
              n),
            ));
        }
      }
    }
    function E(e, t) {
      var n = c.get(e);
      n != null &&
        (t.forEach(function (e) {
          (n.editedFragmentIDs.delete(e),
            n.fragmentIDToChangedSpecKeys.delete(e),
            n.fragmentIDToLastChange.delete(e),
            n.fragmentIDToObjectType.delete(e));
        }),
        n.fragmentIDToObjectType.size === 0 && (c.delete(e), _()));
    }
    function k(e) {
      var t = c.get(e);
      t != null && E(e, Array.from(t.fragmentIDToObjectType.keys()));
    }
    function I() {
      (c.clear(),
        d != null &&
          (o("AdsALChannel").AdsALChannel.removeListener(
            "al_ad_object_spec_change_event",
            d,
          ),
          (d = null)));
    }
    ((l.registerCopiedFragments = f),
      (l.logPublishSignal = L),
      (l.clearTrackedFragments = E),
      (l.clearAllTrackedFragments = k),
      (l.__resetForTest = I));
  },
  98,
);
