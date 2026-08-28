__d(
  "AdsCreationAndEditingScenarioLoggerUtils",
  [
    "AdsDataAtom",
    "AdsInterfacesUserConfig",
    "AdsManagerQPLUserFlowLogger",
    "AdsMgmtEditorUtils",
    "AdsPerfInteractionsController",
    "AdsScenariosSpinnerTrackerManager",
    "QPLSharing",
    "QPLUserFlow",
    "adsGetInferredProductTypeSelectorAnnotationUtils",
    "adsGetOnUnloadSubscriber",
    "justknobx",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        "am_editor_validation",
        "am_editor_campaign_sidebar_reach_estimate",
        "am_editor_draft_sync",
        "ads_mini_previews",
      ],
      c = [
        (s = r("qpl"))._(270217878, "7385"),
        s._(270211726, "6025"),
        s._(270213183, "85"),
        s._(270206671, "2052"),
      ],
      d = r("adsGetOnUnloadSubscriber")(function () {});
    function m(e, t, n) {
      if (r("AdsInterfacesUserConfig").is_loading_marker_enabled) {
        var o = n();
        return (
          r("AdsScenariosSpinnerTrackerManager").init({
            trackingSurface: e,
            blocklistSurface: t,
          }),
          o
        );
      }
    }
    function p(e) {
      var t = r("AdsScenariosSpinnerTrackerManager").getTracker(),
        n = r("AdsScenariosSpinnerTrackerManager").getUnsubscribe();
      t &&
        n &&
        r("promiseDone")(t.allLoaded(), function () {
          (e(), n());
        });
    }
    var _ = "am_editor",
      f = function (t, n, o) {
        if ((n === void 0 && (n = "UNKNOWN"), d.unsubscribe(), t)) {
          var e;
          for (var a of c)
            r("QPLUserFlow").endCancel(a, {
              annotations: { string: { source: n, destination: o } },
            });
          r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
            "am.editor",
            ((e = { cancel_source: n, cancel_destination: o }),
            (e.cancel_reason = "close_editor_edit_view"),
            e),
          );
        }
      };
    function g(e, t) {
      e === void 0 && (e = !1);
      var n = t.initial_route,
        a = t.selected_ad_ids,
        i = t.selected_adset_ids,
        l = t.selected_campaign_ids;
      return function () {
        f(!1);
        var t = n == null ? void 0 : n.givenName,
          s,
          u = {
            string_array: {
              campaign_group_ids: (l != null ? l : "").split(","),
              campaign_ids: (i != null ? i : "").split(","),
              adgroup_ids: (a != null ? a : "").split(","),
            },
          };
        switch (t) {
          case "creation_package":
            s = r("qpl")._(270210471, "97");
            break;
        }
        (s != null &&
          o("AdsManagerQPLUserFlowLogger").start(s, { annotations: u }),
          e && d.subscribe());
      };
    }
    function h() {
      return function () {
        d.unsubscribe();
      };
    }
    function y(e, t, n) {
      var a,
        i =
          (a = e == null ? void 0 : e.message) != null
            ? a
            : "Missing Error Message";
      r("AdsPerfInteractionsController").annotateFailure("am.editor", t, {
        error: e,
      });
      var l = null;
      switch (n) {
        case "campaign":
          l = r("qpl")._(270211726, "6025");
          break;
        case "ad_set":
          l = r("qpl")._(270213183, "85");
          break;
        case "ad":
          l = r("qpl")._(270206671, "2052");
          break;
      }
      (n != null &&
        l != null &&
        r("QPLUserFlow").endFailure(l, "EDITOR_LOAD_FAILED", {
          annotations: o(
            "AdsManagerQPLUserFlowLogger",
          ).appendErrorAnnotationsToExistingAnnotations(
            { string: { ad_object_level: n, message: i, source: t } },
            [e],
          ),
        }),
        n === "ad" &&
          r("QPLUserFlow").endFailure(
            r("qpl")._(270217878, "7385"),
            "editor_load_failed",
            {
              annotations: o(
                "AdsManagerQPLUserFlowLogger",
              ).appendErrorAnnotationsToExistingAnnotations(
                { string: { message: i, source: t } },
                [e],
              ),
            },
          ));
    }
    function C(e) {
      var t;
      return (t = m([_], u, e)) != null ? t : null;
    }
    (r("QPLSharing").onSharedPoint(
      "DRAFT_SYNC",
      "FRAGMENT_VALUES_CHANGED",
      function (e) {
        var t,
          n,
          a,
          i = e.options,
          l = null;
        switch (
          i == null || (t = i.data) == null || (t = t.string) == null
            ? void 0
            : t.adObjectLevel
        ) {
          case "campaign":
            l = r("qpl")._(270211726, "6025");
            break;
          case "ad_set":
            l = r("qpl")._(270213183, "85");
            break;
          case "ad":
            l = r("qpl")._(270206671, "2052");
            break;
        }
        if (!(l == null || !o("AdsMgmtEditorUtils").getIsEditorOpen())) {
          var s = {
            string_array: {
              ad_object_ids:
                i == null ||
                (n = i.data) == null ||
                (n = n.string_array) == null
                  ? void 0
                  : n.adObjectIDs,
              fragment_ids:
                i == null ||
                (a = i.data) == null ||
                (a = a.string_array) == null
                  ? void 0
                  : a.fragmentIDs,
            },
          };
          o("AdsManagerQPLUserFlowLogger").isActiveFlow(l)
            ? o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(l, {
                string_array: s.string_array,
              })
            : o("AdsManagerQPLUserFlowLogger").start(l, { annotations: s });
        }
      },
    ),
      r("QPLSharing").onSharedPoint(
        "VALIDATE_CHANGES",
        "FRAGMENT_SPEC_DIFFED",
        function (t) {
          var n = t.options;
          []
            .concat(c, [
              r("qpl")._(270211786, "2230"),
              r("qpl")._(270208708, "4878"),
              r("qpl")._(270216430, "1908"),
            ])
            .forEach(function (t) {
              var a,
                i,
                l,
                s =
                  n == null ||
                  (a = n.data) == null ||
                  (a = a.string_array) == null
                    ? void 0
                    : a.adObjectIDs;
              (s != null &&
                o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(t, {
                  string_array: { ad_object_ids: s },
                }),
                r("justknobx")._("26") &&
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      var e,
                        a =
                          n == null ||
                          (e = n.data) == null ||
                          (e = e.string) == null
                            ? void 0
                            : e.level,
                        i;
                      switch (a) {
                        case "campaign":
                          i = "campaign";
                          break;
                        case "ad_set":
                          i = "ad_set";
                          break;
                        case "ad":
                          i = "ad";
                          break;
                      }
                      if (s != null && i != null) {
                        var l = r(
                          "adsGetInferredProductTypeSelectorAnnotationUtils",
                        )(
                          s.map(function (e) {
                            return { id: e, type: i };
                          }),
                        );
                        o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(
                          t,
                          { string_array: babelHelpers.extends({}, l) },
                        );
                      }
                    },
                  ));
              var u =
                n == null || (i = n.data) == null || (i = i.string) == null
                  ? void 0
                  : i.action;
              u != null &&
                o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(t, {
                  string_array: { action_types: [u] },
                });
              var c =
                n == null || (l = n.data) == null || (l = l.string) == null
                  ? void 0
                  : l.actionCallsite;
              c != null &&
                o("AdsManagerQPLUserFlowLogger").appendArrayAnnotations(t, {
                  string_array: { action_callsites: [c] },
                });
            });
        },
      ),
      r("QPLSharing").onSharedPoint(
        "VALIDATE_CHANGES",
        "SYNC_SUCCEEDED",
        function (e) {
          var t = e.options;
          o("AdsMgmtEditorUtils").getIsEditorOpen() &&
            [
              r("qpl")._(270211786, "2230"),
              r("qpl")._(270208708, "4878"),
              r("qpl")._(270216430, "1908"),
            ].forEach(function (e) {
              var n;
              r("QPLUserFlow").endSuccess(e, {
                annotations: {
                  string: {
                    ad_object_level:
                      t == null ||
                      (n = t.data) == null ||
                      (n = n.string) == null
                        ? void 0
                        : n.adObjectLevel,
                    source: "SYNC_SUCCEEDED",
                  },
                },
              });
            });
        },
      ),
      (l.EDIT_USER_FLOWS = c),
      (l.logScenariosEnd = p),
      (l.ABANDON_EDITOR_LOADED = f),
      (l.getLogLoadEditorFromUrlStart = g),
      (l.getLogLoadEditorEnd = h),
      (l.logLoadEditorFail = y),
      (l.logEditorScenariosStart = C));
  },
  98,
);
