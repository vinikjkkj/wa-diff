__d(
  "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins",
  [
    "AdStudyGraphAPIUtils",
    "AdsAccountStore",
    "AdsAddToastCardAction",
    "AdsAdgroupLiveListDataManager",
    "AdsApplicationUtils",
    "AdsCampaignLiveListDataManager",
    "AdsDataAtom",
    "AdsDismissToastCardAction",
    "AdsExperimentsFunnelLogger",
    "AdsTALRoutingReportICERoute",
    "AdsTALStudyType",
    "JSResource",
    "Laminar",
    "URI",
    "adsExperimentsGetStudyPublishFailedToastCard",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        reduce: function (t, n) {
          var e,
            o,
            a = t.studyIDToFragmentsData,
            i = (e = a.get(n.studyID)) == null ? void 0 : e.fragmentIDs,
            l = (o = a.get(n.studyID)) == null ? void 0 : o.campaignGroupIDs,
            s = r("immutable").Set(i).concat(n.fragmentIDs),
            u = r("immutable").Set(l).concat(n.campaignGroupIDs);
          return babelHelpers.extends({}, t, {
            studyIDToFragmentsData: a.set(n.studyID, {
              fragmentIDs: s,
              campaignGroupIDs: u,
            }),
          });
        },
      },
      c = {
        reduce: function (n, a) {
          var t = a.fragmentIDs,
            l = n.studyIDToFragmentsData;
          if (l.size > 0 && t != null && t.length > 0) {
            var s = new Set();
            (l.forEach(function (e, n) {
              for (var r = 0; r < t.length; r++) {
                var o = t[r],
                  a = e.fragmentIDs.get(o);
                a != null && s.add(n);
              }
            }),
              s.forEach(function (t) {
                (r("AdsExperimentsFunnelLogger").logCreationAction({
                  name: "DEBUG",
                  debugActionName: "study_cancel_by_fragment_fail_to_publish",
                  actionPayloadValues: new Map([["study_id", t]]),
                }),
                  r("promiseDone")(o("AdStudyGraphAPIUtils").deleteAdStudy(t)),
                  (l = l.remove(t)),
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      r("AdsAddToastCardAction").dispatch(
                        {
                          toastCard: r(
                            "adsExperimentsGetStudyPublishFailedToastCard",
                          )({
                            id: t,
                            onDismiss: function (t) {
                              r("AdsDismissToastCardAction").dispatch(
                                { id: t },
                                {
                                  line: "112",
                                  module:
                                    "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          }),
                        },
                        {
                          line: "108",
                          module:
                            "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  ));
              }));
          }
          return babelHelpers.extends({}, n, { studyIDToFragmentsData: l });
        },
      },
      d = {
        reduce: o("Laminar").withFluxSelectors(
          { accountLoader: r("AdsAccountStore").getSelectedAccount },
          function (t, n, a) {
            var l,
              u = a.accountLoader,
              c = t.studyIDToFragmentsData;
            if (c.size === 0) return t;
            var d = new Set(
              (l = n.response.fragment_statuses) == null
                ? void 0
                : l.data
                    .filter(function (e) {
                      var t = e.status;
                      return t === "SUCCESS";
                    })
                    .map(function (e) {
                      var t = e.fragment_id;
                      return t;
                    }),
            );
            if (d.size > 0) {
              var m = Array.from(c.keys());
              m.forEach(function (t) {
                var n = c.get(t);
                if (n != null) {
                  var a = n.campaignGroupIDs,
                    l = n.fragmentIDs;
                  if (l != null && l.size > 0) {
                    var m = r("immutable").Set(l.subtract(d));
                    if (m.size === 0) {
                      c = c.remove(t);
                      var p = u.getValue(),
                        _ = p == null ? void 0 : p.account_id;
                      ((e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                        function () {
                          r("promiseDone")(
                            r("JSResource")(
                              "adsExperimentsGetStudyPublishSuccessToastCard",
                            )
                              .__setRef(
                                "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins",
                              )
                              .load(),
                            function (e) {
                              r("AdsAddToastCardAction").dispatch(
                                {
                                  toastCard: e({
                                    id: t,
                                    studyStatus: "ON",
                                    studyType:
                                      o("AdsTALStudyType").AdStudyTypeName
                                        .SPLIT_TEST,
                                    onClick: function () {
                                      (s || (s = r("URI"))).goURIOnNewWindow(
                                        new s(
                                          r("AdsTALRoutingReportICERoute").path,
                                        ).setQueryData({
                                          act: _,
                                          test_id: t,
                                          ref: "am_publish_success_toast",
                                        }),
                                      );
                                    },
                                    onDismiss: function (t) {
                                      r("AdsDismissToastCardAction").dispatch(
                                        { id: t },
                                        {
                                          line: "187",
                                          module:
                                            "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins.js",
                                          moduleID: i.id,
                                        },
                                      );
                                    },
                                  }),
                                },
                                {
                                  line: "170",
                                  module:
                                    "AdsExperimentsScenarioTestFragmentsToPublishReducerPlugins.js",
                                  moduleID: i.id,
                                },
                              );
                            },
                          );
                        },
                      ),
                        _ != null &&
                          o("AdsApplicationUtils").isPowerEditor() &&
                          (r(
                            "AdsCampaignLiveListDataManager",
                          ).loadForCampaignGroups(_, Array.from(a)),
                          o(
                            "AdsAdgroupLiveListDataManager",
                          ).AdsAdgroupLiveListDataManager.loadForCampaignGroups(
                            _,
                            Array.from(a),
                          )));
                    } else
                      c = c.set(t, { fragmentIDs: m, campaignGroupIDs: a });
                  }
                }
              });
            }
            return babelHelpers.extends({}, t, { studyIDToFragmentsData: c });
          },
        ),
      };
    ((l.AdsExperimentsScenarioTestAddFragmentsToPublishReducerPlugin = u),
      (l.AdsExperimentsScenarioTestFragmentsPublishFailedReducerPlugin = c),
      (l.AdsExperimentsScenarioTestFragmentsPublishCompletedReducerPlugin = d));
  },
  98,
);
