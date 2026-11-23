__d(
  "AdsAppExperiencesLoggerUtils",
  ["AdsInterfacesLogger", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "app_experiences",
      s = "scj_adu_to_l1ae",
      u = "adu_to_l1ae_phase_2";
    function c() {
      var e,
        t = r("qex")._("3086");
      if (t == null) return {};
      var n = r("qex")._("1752") === !0,
        o =
          t !== !0
            ? "control"
            : n
              ? "test_separate_cards"
              : "test_ad_extensions";
      return (
        (e = {}),
        (e.qe_universe_name = s),
        (e.qe_experiment_name = u),
        (e.experiment_variant = o),
        e
      );
    }
    function d(e) {
      var t = {};
      for (var n of Object.keys(e)) {
        var r = e[n],
          o = {},
          a = !1;
        for (var i of Object.keys(r)) {
          var l = r[i] === !0;
          ((o[i] = l), (a = a || l));
        }
        t[n] = { sources: o, status: a };
      }
      return t;
    }
    function m(t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName: "app_experiences_entry_point_impression",
        data: babelHelpers.extends(
          {},
          c(),
          ((o = {}),
          (o.adgroup_id = t.toString()),
          (o.event_source = e),
          (o.status = n),
          o),
        ),
      });
    }
    var p = new Set();
    function _(t, n, o, a) {
      var i,
        l = t.toString(),
        s = l + ":" + a;
      p.has(s) ||
        (p.add(s),
        r("AdsInterfacesLogger").log({
          eventName: "app_experiences_modal_eligible",
          data: babelHelpers.extends(
            {},
            c(),
            ((i = {}),
            (i.adgroup_id = l),
            (i.event_source = e),
            (i.component_name = a),
            (i.status = n.toString()),
            (i.subsequent_data = JSON.stringify(o)),
            i),
          ),
        }));
    }
    function f(t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_open",
        data: babelHelpers.extends(
          {},
          c(),
          ((n = {}), (n.adgroup_id = t.toString()), (n.event_source = e), n),
        ),
      });
    }
    function g(t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_initial_status",
        data: babelHelpers.extends(
          {},
          c(),
          ((i = {}),
          (i.adgroup_id = t.toString()),
          (i.event_source = e),
          (i.status = n.toString()),
          (i.subsequent_data = JSON.stringify(
            babelHelpers.extends({}, d(o), {
              metadata_type: a != null ? a : {},
            }),
          )),
          i),
        ),
      });
    }
    function h(t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_modal_save",
        data: babelHelpers.extends(
          {},
          c(),
          ((a = {}),
          (a.adgroup_id = t.toString()),
          (a.event_source = e),
          (a.status = n.toString()),
          (a.subsequent_data = JSON.stringify(d(o))),
          a),
        ),
      });
    }
    function y(t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_toggle_changed",
        data: babelHelpers.extends(
          {},
          c(),
          ((i = {}),
          (i.adgroup_id = t.toString()),
          (i.event_source = e),
          (i.component_name = n),
          (i.source = o),
          (i.status = a.toString()),
          i),
        ),
      });
    }
    var C = new Set();
    function b(e, t, n) {
      var o,
        a,
        i = (o = t.previewAwarenessKey) != null ? o : t.key,
        l = e.toString() + ":" + i;
      C.has(l) ||
        (C.add(l),
        r("AdsInterfacesLogger").log({
          eventName: "ads_ces_preview_aware",
          data:
            ((a = {}),
            (a.adgroup_id = e.toString()),
            (a.event_source = i),
            (a.status = !0),
            (a.is_enabled = n),
            (a.creative_event_source = "app_experiences_modal"),
            a),
        }));
    }
    function v() {
      var e,
        t,
        n = r("qex")._("5796");
      if (n === !0) {
        var o;
        return (
          (o = {}),
          (o.qe_universe_name = "app_experience_m4"),
          (o.qe_experiment_name = "app_experience_m4_v1_test"),
          (o.experiment_variant = "separate_fdo_ie_tabs"),
          o
        );
      }
      var a = r("qex")._("5568");
      if (a == null) return {};
      var i = (e = r("qex")._("5569")) != null ? e : !0,
        l =
          a !== !0
            ? "control"
            : i
              ? "enable_container_granular_control"
              : "disable_container_granular_control";
      return (
        (t = {}),
        (t.qe_universe_name = "app_experience_m4"),
        (t.qe_experiment_name = "app_experience_m4_test_0"),
        (t.experiment_variant = l),
        t
      );
    }
    function S(t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "app_experiences_m4_tab_switch",
        data: babelHelpers.extends(
          {},
          v(),
          ((a = {}),
          (a.adgroup_id = t == null ? void 0 : t.toString()),
          (a.event_source = e),
          (a.old_value = n),
          (a.to_tab = o),
          a),
        ),
      });
    }
    ((l.logAppExperiencesEntryPointImpression = m),
      (l.logAppExperiencesModalEligible = _),
      (l.logAppExperiencesModalOpen = f),
      (l.logAppExperiencesModalInitialStatus = g),
      (l.logAppExperiencesModalSave = h),
      (l.logAppExperiencesToggleChanged = y),
      (l.logAppExperiencesPreviewAwareness = b),
      (l.logAppExperiencesM4TabSwitch = S));
  },
  98,
);
