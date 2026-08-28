__d(
  "VideoComposerVideoPublisher",
  [
    "ReelComposerReelPublishMutation",
    "ReelComposerReframeAspectRatio",
    "ReelCreationFlowUtils",
    "RelayFBEnvironmentFactory",
    "VideoComposerVideoPublishingMutation",
    "err",
    "getIsEligibleFor180SecondReelLimit",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e.mapPostDataToGraphQLInputObject()),
          (this.$3 = e.hasAPISupport()),
          (this.$2 = e.uploadables()));
      }
      var t = e.prototype;
      return (
        (t.publish = function (t, n) {
          if (this.$1.publish_as_reel === !0) {
            var e,
              a,
              i,
              l,
              s,
              u,
              c = r("RelayFBEnvironmentFactory").getForActorID(
                this.$1.basic_data.target_id,
              ),
              d =
                ((e = this.$1.post_status_data) == null ? void 0 : e.draft) ===
                !0
                  ? o("ReelCreationFlowUtils").ReelPublishType.DRAFT
                  : ((a = this.$1.post_status_data) == null
                        ? void 0
                        : a.scheduled) === !0
                    ? o("ReelCreationFlowUtils").ReelPublishType.SCHEDULE
                    : o("ReelCreationFlowUtils").ReelPublishType.PUBLISH_NOW,
              m = null,
              p =
                (i = this.$1.post_status_data) == null ? void 0 : i.future_date,
              _ =
                (l = this.$1.post_status_data) == null ? void 0 : l.future_time;
            (p != null && _ != null && (m = +new Date(p).getTime() + +_ * 1e3),
              o("ReelComposerReelPublishMutation").reelPublishMutation(
                c,
                function () {},
                function () {},
                {
                  videoID: (s = this.$1.basic_data.video_id) != null ? s : "",
                  shouldSkipEncoding: !1,
                  shouldEnforceVideoEditorPath: null,
                  loggingClientInfo: {
                    entry_point: "CS_IG_CROSSPOST_REEL",
                    composer_entry_point: "CS_IG_CROSSPOST_REEL",
                    product: "CREATOR_STUDIO",
                    feature: "IG_REELS_SHARED_TO_FB",
                  },
                  reelRemixingEnabled: !1,
                  reelPublishType: d,
                  reelScheduledUnixTimestamp: m != null ? m / 1e3 : 0,
                  reelDescription:
                    (u = this.$1.basic_data.xhpc_message) != null ? u : "",
                  trimStartTimeMs: 0,
                  trimEndTimeMs: 0,
                  isTrimTimestampsEqualToEntireVideo: !0,
                  reelReframeAspectRatio: o("ReelComposerReframeAspectRatio")
                    .ReelComposerReframeAspectRatio.NONE,
                  collaborators: [],
                  videoThumbnailFileID: null,
                  thumbnailType: "generated_default",
                  audioEnhancementProcessingAmount: 0,
                  music: null,
                  audioCustomStartTimeMs: null,
                  placements: ["FACEBOOK_REEL"],
                  igBusinessID: null,
                  manualCrop: null,
                  mixingParams: null,
                  geoTargetingData: null,
                  allowTrimBeyondMaxLength: r(
                    "getIsEligibleFor180SecondReelLimit",
                  )(),
                },
              ));
          } else {
            if (!this.$3)
              throw r("err")(
                "This api does not support your publishing use case",
              );
            o("VideoComposerVideoPublishingMutation").commit(
              this.$1,
              r("RelayFBEnvironmentFactory").getForActorID(
                this.$1.basic_data.target_id,
              ),
              this.$2,
              t,
              n,
            );
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
