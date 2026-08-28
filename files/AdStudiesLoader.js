__d(
  "AdStudiesLoader",
  [
    "AdsGraphAPI",
    "AdsTALAdAccountImpactingCanceledStudiesFields",
    "AdsTALAdAccountImpactingStudiesFields.experimental",
    "AdsTALAdStudyFields.experimental",
    "AdsTALStudyType",
    "AsyncTypedRequest",
    "GraphAPIPaging",
    "XAdStudyCancelAsyncControllerRouteBuilder",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["derived_study_name", "name"],
      s = 100,
      u = function (t) {
        var e = t.creationSources,
          n = t.cursor,
          o = t.maxCooldownStartTime,
          a = t.maxCreationTime,
          i = t.minCooldownStartTime,
          l = t.minObservationEndTime,
          s = t.nameQueryString,
          u = t.ssclQuestionType,
          c = t.status,
          d = t.studyType,
          m = babelHelpers.extends({}, n, {
            creation_sources: e,
            max_creation_time: a,
            study_status: c,
            study_name_query_string: s,
            study_type: d,
            study_sscl_question_type: u,
          }),
          p =
            c === "Canceled"
              ? babelHelpers.extends(
                  {},
                  r("AdsTALAdAccountImpactingCanceledStudiesFields").fields,
                  m,
                )
              : babelHelpers.extends(
                  {},
                  r("AdsTALAdAccountImpactingStudiesFields.experimental")
                    .fields,
                  m,
                );
        return (
          i != null && (p.min_cooldown_start_time = i),
          o != null && (p.max_cooldown_start_time = o),
          l != null && (p.min_observation_end_time = l),
          r("gkx")("12723") && (p.limit = 5),
          p
        );
      },
      c = function (t, n) {
        var e = n.creationSources,
          r = n.cursor,
          a = n.maxCooldownStartTime,
          l = n.maxCreationTime,
          s = n.minCooldownStartTime,
          c = n.minObservationEndTime,
          d = n.nameQueryString,
          m = n.preloader,
          p = n.ssclQuestionType,
          _ = n.status,
          f = n.studyType,
          g = o("AdsGraphAPI")
            .get(i.id)
            .adaccount(t)
            .edge("impacting_ad_studies")
            .batched();
        if (m) {
          var h = m.asyncData,
            y = m.instance;
          g = g.preloadedBy(h, y.defaultConfig);
        }
        return g
          .get(
            u({
              creationSources: e,
              status: _,
              cursor: r,
              maxCooldownStartTime: a,
              maxCreationTime: l,
              minCooldownStartTime: s,
              minObservationEndTime: c,
              nameQueryString: d,
              studyType: f,
              ssclQuestionType: p,
            }),
          )
          .finally(function () {
            n.preloader && n.preloader.instance.stop();
          });
      };
    function d(t) {
      var n,
        r = t.derived_study_name,
        o = t.name,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, a, {
        name: (n = r != null ? r : o) != null ? n : "",
      });
    }
    var m = function (t) {
        return t.data
          .filter(function (e) {
            return e.type !== o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST;
          })
          .map(d);
      },
      p = function (t, n) {
        n === void 0 && (n = Object.freeze({}));
        var e = n,
          o = e.cursor;
        return c(t, n).then(function (e) {
          var n,
            a,
            i,
            l,
            s = m(e),
            u = r("isStringNullOrEmpty")(
              (n = e.paging) == null ? void 0 : n.next,
            )
              ? null
              : (a = e.paging) == null || (a = a.cursors) == null
                ? void 0
                : a.after,
            c = r("isStringNullOrEmpty")(
              (i = e.paging) == null ? void 0 : i.previous,
            )
              ? null
              : (l = e.paging) == null || (l = l.cursors) == null
                ? void 0
                : l.before;
          return {
            adAccountID: t,
            studies: s,
            cursors: { before: c, current: o, after: u },
          };
        });
      },
      _ = function (t, n) {
        var e = o("AdsGraphAPI").get(i.id).object("ad_study", t),
          a = n == null ? void 0 : n.preloader;
        if (a) {
          var l = a.asyncData,
            s = a.instance;
          e = e.preloadedBy(l, s.defaultConfig);
        }
        return e
          .get(r("AdsTALAdStudyFields.experimental").fields)
          .then(d)
          .finally(function () {
            a && a.instance.stop();
          });
      },
      f = function (t) {
        var e = {
          study_status: "All",
          include_all_studies: !1,
          min_cooldown_start_time: r(
            "AdsTALAdAccountImpactingStudiesFields.experimental",
          ).fields.min_cooldown_start_time,
          limit: 1,
          fields: ["id"],
        };
        return o("AdsGraphAPI")
          .get(i.id)
          .adaccount(t)
          .edge("impacting_ad_studies")
          .batched()
          .get(e)
          .then(function (e) {
            return e.data.length > 0;
          });
      },
      g = function (t, n) {
        var e = n || {},
          r = e.creationSources,
          a = e.maxCooldownStartTime,
          i = e.maxCreationTime,
          l = e.minCooldownStartTime,
          u = e.minObservationEndTime,
          d = e.nameQueryString,
          p = e.preloader,
          _ = e.ssclQuestionType,
          f = e.status,
          g = e.studyType;
        return c(t, {
          creationSources: r,
          status: f,
          maxCooldownStartTime: a,
          maxCreationTime: i,
          minCooldownStartTime: l,
          minObservationEndTime: u,
          nameQueryString: d,
          studyType: g,
          ssclQuestionType: _,
          preloader: p,
        })
          .then(o("GraphAPIPaging").allPages(s))
          .then(function (e) {
            return m(e);
          });
      },
      h = function (t) {
        return new (r("AsyncTypedRequest"))()
          .setURI(
            r("XAdStudyCancelAsyncControllerRouteBuilder").buildUri({
              study_id: t,
            }),
          )
          .promisePayload();
      },
      y = function (t) {
        return new (r("AsyncTypedRequest"))()
          .setURI(
            r("XAdStudyCancelAsyncControllerRouteBuilder").buildUri({
              study_id: t,
              end_study_instead_of_cancelling: !0,
            }),
          )
          .promisePayload();
      };
    ((l.loadAdStudies = p),
      (l.loadAdStudy = _),
      (l.hasActiveTALStudies = f),
      (l.loadAllAdStudies = g),
      (l.cancelAdStudy = h),
      (l.endAdStudy = y));
  },
  98,
);
