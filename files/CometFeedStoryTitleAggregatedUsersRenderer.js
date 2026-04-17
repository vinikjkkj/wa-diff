__d(
  "CometFeedStoryTitleAggregatedUsersRenderer",
  [
    "CometEntryPointDialogTrigger.react",
    "CometFeedStoryTitleAggregatedUsersRenderer_entities.graphql",
    "CometStoryAggregatedCollaboratorsDialog.entrypoint",
    "CometStoryAggregatedUsersTitleDialog.entrypoint",
    "FBLogger",
    "FDSLink.react",
    "getSurfaceFromRenderLocationForIGToFBCrossPost",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 ||
      (e = n("CometFeedStoryTitleAggregatedUsersRenderer_entities.graphql"));
    var c = function (t, n, o, a) {
      return function (e, i) {
        var l;
        if (t == null)
          return (
            r("FBLogger")("comet_ui").mustfix(
              "story ID was null when rendering aggregated users link in story title",
            ),
            e
          );
        if (o == null)
          return (
            r("FBLogger")("comet_ui").mustfix(
              "render location was null when rendering aggregated users link in story title",
            ),
            e
          );
        var s = !1;
        if (((l = a != null ? a : []) == null ? void 0 : l.length) > 0) {
          var c = i.sample_entities.filter(function (e) {
            return !(
              a != null &&
              a.find(function (t) {
                return t === e.id;
              })
            );
          });
          s = c.length === 0;
        }
        return s
          ? u.jsx(r("CometEntryPointDialogTrigger.react"), {
              dialogEntryPoint: r(
                "CometStoryAggregatedCollaboratorsDialog.entrypoint",
              ),
              otherProps: {},
              preloadParams: { storyID: t },
              children: function (n) {
                return u.jsx(r("FDSLink.react"), { onClick: n, children: e });
              },
            })
          : u.jsx(r("CometEntryPointDialogTrigger.react"), {
              dialogEntryPoint: r(
                "CometStoryAggregatedUsersTitleDialog.entrypoint",
              ),
              otherProps: {
                postId: n,
                surface: r("getSurfaceFromRenderLocationForIGToFBCrossPost")(o),
              },
              preloadParams: { storyID: t, storyRenderLocation: o },
              children: function (n) {
                return u.jsx(r("FDSLink.react"), { onClick: n, children: e });
              },
            });
      };
    };
    l.default = c;
  },
  98,
);
