__d(
  "AdsExperimentsLightweightVersionsUpdatedReducerPlugins",
  [
    "AdsDataAtom",
    "AdsExperimentsFunnelLogger",
    "AdsExperimentsLightweightCreationStepType",
    "JSResource",
    "filterMap",
    "firstx",
    "flattenArray",
    "immutable",
    "isEmpty",
    "someMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["fragmentsToPublish"],
      s = ["fragmentsToPublish"],
      u,
      c;
    function d(e) {
      return (
        e ===
          r("AdsExperimentsLightweightCreationStepType").MODIFYING_AD_OBJECTS ||
        e === r("AdsExperimentsLightweightCreationStepType").MODIFYING_VERSION_B
      );
    }
    var m = {
        reduce: function (n, r) {
          var t = r.fragments,
            o = n.map(function (n) {
              if (!d(n.step) || n.fragmentsToPublish == null) return n;
              var r = n.fragmentsToPublish,
                o = r.adgroupFragmentIDs,
                a = r.campaignFragmentIDs,
                i = r.campaignGroupFragmentIDs,
                l = r.draftID,
                s = r.readyForPublish,
                u = babelHelpers.objectWithoutPropertiesLoose(n, e);
              return babelHelpers.extends({}, u, {
                fragmentsToPublish: {
                  adgroupFragmentIDs: o.filter(function (e) {
                    return !t.has(e);
                  }),
                  campaignFragmentIDs: a.filter(function (e) {
                    return !t.has(e);
                  }),
                  campaignGroupFragmentIDs: i.filter(function (e) {
                    return !t.has(e);
                  }),
                  draftID: l,
                  readyForPublish: (s != null ? s : [])
                    .concat(
                      o.filter(function (e) {
                        return t.has(e);
                      }),
                    )
                    .concat(
                      a.filter(function (e) {
                        return t.has(e);
                      }),
                    )
                    .concat(
                      i.filter(function (e) {
                        return t.has(e);
                      }),
                    ),
                },
              });
            });
          return f(o);
        },
      },
      p = {
        reduce: function (t, n) {
          var e = n.fragments,
            o = r("filterMap")(e, function (e) {
              return t.some(function (t) {
                var n = t.lightweightType,
                  r = t.step,
                  o = t.studyLevel,
                  a = t.studyLevelAdObjectID;
                return n != null && d(r) && _(e, a, o);
              });
            }),
            a = t.filter(function (e) {
              return r("someMap")(o, function (t) {
                return _(t, e.studyLevelAdObjectID, e.studyLevel);
              });
            });
          if (o.size === 0 || a.size === 0) return t;
          var i = t.map(function (e) {
            var t,
              n = r("filterMap")(o, function (t) {
                return _(t, e.studyLevelAdObjectID, e.studyLevel);
              });
            if (n.size === 0 || e.fragmentsToPublish == null) return e;
            var a = e.fragmentsToPublish,
              i = babelHelpers.objectWithoutPropertiesLoose(e, s);
            return (
              r("AdsExperimentsFunnelLogger")
                .withoutAccountID()
                .setAction("LIGHTWEIGHT_CREATION_STEP_CHANGE")
                .addActionPayload("lightweightType", e.lightweightType)
                .addActionPayload(
                  "studyLevelAdObjectID",
                  e.studyLevelAdObjectID,
                )
                .addActionPayload(
                  "step",
                  r("AdsExperimentsLightweightCreationStepType")
                    .MODIFYING_VERSION_B,
                )
                .log(),
              babelHelpers.extends({}, i, {
                step: r("AdsExperimentsLightweightCreationStepType")
                  .MODIFYING_VERSION_B,
                fragmentsToPublish: babelHelpers.extends({}, a, {
                  readyForPublish: ((t =
                    a == null ? void 0 : a.readyForPublish) != null
                    ? t
                    : []
                  ).concat(Array.from(n.keys())),
                }),
              })
            );
          });
          return f(i);
        },
      };
    function _(e, t, n) {
      return n !== "campaign"
        ? e.ad_object_id === t
        : e.parent_ad_object_id === t || e.ad_object_id === t;
    }
    function f(e) {
      var t = e
        .filter(function (e) {
          var t,
            n = e.fragmentsToPublish,
            o = e.step;
          return (
            n != null &&
            (n == null || (t = n.readyForPublish) == null
              ? void 0
              : t.length) !== 0 &&
            o ===
              r("AdsExperimentsLightweightCreationStepType")
                .MODIFYING_VERSION_B &&
            (u || (u = r("isEmpty")))(n.adgroupFragmentIDs) &&
            (u || (u = r("isEmpty")))(n.campaignFragmentIDs) &&
            (u || (u = r("isEmpty")))(n.campaignGroupFragmentIDs)
          );
        })
        .map(function (e) {
          return e.fragmentsToPublish;
        })
        .filter(Boolean);
      if (
        (e.forEach(function (e) {
          var t = e.dependentIDs,
            n = e.fragmentsToPublish,
            o = e.lightweightType,
            a = e.step,
            i = e.studyLevelAdObjectID;
          n != null &&
            r("AdsExperimentsFunnelLogger")
              .withoutAccountID()
              .setAction("LIGHTWEIGHT_MAYBE_PUBLISH")
              .addActionPayload("studyLevelAdObjectID", i)
              .addActionPayload("lightweightType", o)
              .addActionPayload("fragmentsToPublish", n)
              .addActionPayload("dependentIDs", t)
              .addActionPayload("step", a)
              .log();
        }),
        t.size === 0)
      )
        return e;
      var n = r("firstx")(t.values()).draftID;
      return (
        (c || (c = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          r("JSResource").loadAll(
            [
              r("JSResource")("adsDraftPublishingPublishAction").__setRef(
                "AdsExperimentsLightweightVersionsUpdatedReducerPlugins",
              ),
            ],
            function (e) {
              e({
                draftID: n,
                ignoreErrors: !1,
                fragmentIDs: r("immutable").Set(
                  r("flattenArray")(
                    Array.from(
                      t
                        .map(function (e) {
                          var t = e.readyForPublish;
                          return t != null ? t : [];
                        })
                        .values(),
                    ),
                  ),
                ),
              });
            },
          );
        }),
        e.filter(function (e, n) {
          return !t.has(n);
        })
      );
    }
    ((l.AdsExperimentsLightweightVersionBUpdatedReducerPlugin = m),
      (l.AdsExperimentsLightweightVersionAUpdatedReducerPlugin = p));
  },
  98,
);
