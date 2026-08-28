__d(
  "ReelComposerReelPublishMutation",
  [
    "AdsValidationConsts",
    "BusinessComposerIGAudienceTypes",
    "DateConsts",
    "ISOCountryCode",
    "ReelComposerReelPublishMutation.graphql",
    "ReelComposerReframeAspectRatio",
    "ReelComposerVoiceTranslationsPublishUtils",
    "ReelCreationFlowUtils",
    "RelayModern",
    "getEnumFromString",
    "gkx",
    "justknobx",
    "requireDeferred",
    "shouldUsePostCollabsField",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("ODS").__setRef(
        "ReelComposerReelPublishMutation",
      ),
      u = 1,
      c = e !== void 0 ? e : (e = n("ReelComposerReelPublishMutation.graphql"));
    function d(e, t, n, r) {
      var a = m(r);
      o("RelayModern").commitMutation(e, {
        mutation: c,
        variables: { input: a },
        onCompleted: t,
        onError: function (t) {
          return n();
        },
      });
    }
    function m(e) {
      var t,
        n,
        a,
        i,
        l,
        c,
        d,
        m = e.addedHashtags,
        p = e.allowTrimBeyondMaxLength,
        h = e.alternateAudioTracks,
        y = e.audioCustomStartTimeMs,
        C = e.audioEnhancementProcessingAmount,
        b = e.autoDubbingSettings,
        v = e.closedCaptions,
        S = e.collaborators,
        R = e.fbMonetizationData,
        L = e.geoTargetingData,
        E = e.igBusinessID,
        k = e.igCollaborators,
        I = e.igTargetingPrivacyData,
        T = e.inStreamAdsSettings,
        D = e.isABTest,
        x = e.isBoostToggleOn,
        $ = e.isFormatMergeEnabled,
        P = e.isReceivingStarsEnabled,
        N = e.isTrimTimestampsEqualToEntireVideo,
        M = e.linkedVideoID,
        w = e.locationTag,
        A = e.loggingClientInfo,
        F = e.mainTrack,
        O = e.manualCrop,
        B = e.mixingParams,
        W = e.music,
        q = e.original_resolution,
        U = e.overlay,
        V = e.pageCaptionSettings,
        H = e.photoTrack,
        G = e.placements,
        z = e.reelCaptionSettings,
        j = e.reelDescription,
        K = e.reelEmbeddingEnabled,
        Q = e.reelPublishType,
        X = e.reelReframeAspectRatio,
        Y = e.reelRemixingEnabled,
        J = e.reelScheduledUnixTimestamp,
        Z = e.reelsCreatorPlaylistID,
        ee = e.reelsCreatorPlaylistItemBatchSize,
        te = e.reelsCreatorPlaylistItemOrder,
        ne = e.reelsPoll,
        re = e.reelsReshareDestination,
        oe = e.shouldDisplayManualDescriptionsSectioninBYOA,
        ae = e.shouldEnforceVideoEditorPath,
        ie = e.shouldShareToStory,
        le = e.shouldSkipEncoding,
        se = e.shouldUseConsolidatedReelEditPublishPath,
        ue = e.thumbnailType,
        ce = e.totalVideoDuration,
        de = e.trimEndTimeMs,
        me = e.trimStartTimeMs,
        pe = e.videoContainerType,
        _e = e.videoID,
        fe = e.videoThumbnailFileID,
        ge = e.vodTitle,
        he = pe === "POST" || $ === !0,
        ye = Q === o("ReelCreationFlowUtils").ReelPublishType.DRAFT || D === !0,
        Ce =
          Q === o("ReelCreationFlowUtils").ReelPublishType.SCHEDULE && D !== !0,
        be = {
          caption: j,
          enable_remix: Y,
          is_draft: ye,
          is_scheduled: Ce,
          scheduled_publish_time: J,
        },
        ve =
          (W == null ? void 0 : W.id) != null
            ? {
                id: W.id,
                offset:
                  (y != null ? y : W.audio.highlightStartTimeMs) /
                  o("DateConsts").MS_PER_SEC,
                duration: (de - me) / o("DateConsts").MS_PER_SEC,
              }
            : null,
        Se =
          N &&
          X ===
            o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
              .NONE &&
          ve === null &&
          C === 0,
        Re = Se
          ? null
          : {
              start_time_in_sec: me / o("DateConsts").MS_PER_SEC,
              end_time_in_sec: de / o("DateConsts").MS_PER_SEC,
            },
        Le =
          (t =
            L == null || (n = L.countries) == null
              ? void 0
              : n
                  .map(function (e) {
                    return r("getEnumFromString")(r("ISOCountryCode"), e);
                  })
                  .filter(Boolean)) != null
            ? t
            : [],
        Ee = ((a = L == null ? void 0 : L.regions) != null ? a : []).map(
          function (e) {
            var t, n;
            return {
              key: e.key,
              country: (t = e.country) != null ? t : "",
              name: (n = e.name) != null ? n : "",
            };
          },
        );
      Le.length > 0 &&
        s.onReady(function (e) {
          e.bumpEntityKey(5907, "fb_stories_web", "geo_gating.reel.create", 1);
        });
      var ke =
          (i =
            I == null || (l = I.targetingData) == null
              ? void 0
              : l.geoLocations.countries) != null
            ? i
            : null,
        Ie = (c = I == null ? void 0 : I.isIncluded) != null ? c : !1,
        Te = null;
      if (ke != null && ke.length > 0)
        if (Ie) {
          var De;
          Te = {
            age_min: r("AdsValidationConsts").minAge,
            geo_locations: {
              countries: (De = Array.from(new Set(ke))) != null ? De : [],
            },
          };
        } else {
          var xe,
            $e = Object.keys(r("ISOCountryCode")).filter(function (e) {
              return (
                !o(
                  "BusinessComposerIGAudienceTypes",
                ).UnsupportedIGAudienceCountryList.includes(e) &&
                !ke.includes(e)
              );
            });
          Te = {
            age_min: r("AdsValidationConsts").minAge,
            geo_locations: {
              countries: (xe = Array.from(new Set($e))) != null ? xe : [],
            },
          };
        }
      var Pe = {
          reshare_destination:
            re == null
              ? void 0
              : re.map(function (e) {
                  return {
                    message: { text: e.postText },
                    reshare_audience: { to_id: e.groupID },
                  };
                }),
        },
        Ne = null;
      Z != null && (Ne = { videolist_ids: [Z], order: te, batch_size: ee });
      var Me = he ? ["FACEBOOK_NEWS_FEED"] : G,
        we = null;
      if (he && T != null) {
        var Ae,
          Fe,
          Oe,
          Be,
          We,
          qe,
          Ue =
            (Ae =
              T == null ||
              (Fe = T.ad_breaks_block_lists) == null ||
              (Fe = Fe.filter(Boolean)) == null
                ? void 0
                : Fe.map(function (e) {
                    return e;
                  })) != null
              ? Ae
              : [],
          Ve =
            (Oe =
              Ue == null
                ? void 0
                : Ue.map(function (e) {
                    return e.toString();
                  })) != null
              ? Oe
              : [];
        we = {
          has_ad_breaks_block_lists:
            (Be = T == null ? void 0 : T.has_ad_breaks_block_lists) != null
              ? Be
              : !1,
          should_auto_insert_ad_breaks:
            (We = T == null ? void 0 : T.should_auto_insert_ad_breaks) != null
              ? We
              : !1,
          should_use_image_ads:
            (qe = T == null ? void 0 : T.should_use_image_ads) != null
              ? qe
              : !1,
          ad_breaks_block_lists: Ve != null ? Ve : [],
        };
      }
      var He = f(X),
        Ge = o("shouldUsePostCollabsField").shouldUsePostCollabsField(
          S.length,
          ye || Ce,
        ),
        ze =
          v != null && v.length > 0
            ? {
                caption_ids: v.map(function (e) {
                  return e.id;
                }),
              }
            : null,
        je = {
          video_id: _e != null ? _e : "",
          should_skip_encoding: le != null ? le : !1,
          should_enforce_video_editor_path: ae != null ? ae : !1,
          metadata: be,
          trim_timestamps: Re,
          reframe_aspect_ratio: _(X),
          client_info: A,
          client_mutation_id:
            (d = A == null ? void 0 : A.client_session_id) != null
              ? d
              : r("uuidv4")(),
          reframe_aggressiveness: u,
          reframe_settings: He ? { version: He } : void 0,
          video_collaboration: Ge ? null : { collaborators: S },
          post_collaborators: Ge ? { post_collaborators: S } : null,
          ig_collaborators:
            k != null && k.length > 0 ? { collaborator_ids: k } : null,
          video_thumbnail_file_id: fe,
          thumbnail_type: ue.toString(),
          audio_enhancement: { processing: C },
          is_boost_toggle_on: x,
          music_overlay: ve,
          placements: Me,
          ig_business_id: E,
          manual_reframe: O ? g(O) : null,
          audio_mixing: babelHelpers.extends({}, B),
          targeted_privacy_data:
            Le.length > 0 || Ee.length > 0
              ? { age_min: 0, geo_locations: { countries: Le, regions: Ee } }
              : null,
          overlay: U,
          main_track: F,
          photo_track: H,
          original_resolution: q,
          is_receiving_stars_enabled: P,
          linked_vod_data: M != null ? { target_video_id: M } : null,
          videolist: Ne,
          hashtags_logging_data: {
            added_hashtags: (m != null ? m : []).map(function (e) {
              return { hashtag: e.hashtag, tool_type: e.toolType };
            }),
          },
          fb_monetization_data: R,
          embeddable: K,
          should_share_to_story: ie,
          total_video_duration: ce,
          should_use_consolidated_reel_edit_publish_path: se,
          ig_targeted_privacy_data: Te,
          vod_in_stream_ads_settings: we,
          location_tag: w != null ? { place_id: w.id } : null,
          groups_schedule_resharing: Pe,
          reels_poll: ne,
          auto_gen_captions_settings:
            z != null
              ? {
                  autogenerate_captions_enabled:
                    z.autogenerate_captions_enabled,
                  should_review_all_captions: z.should_review_all_captions,
                }
              : r("justknobx")._("1058") && V != null
                ? {
                    autogenerate_captions_enabled:
                      V.autogenerate_captions_enabled,
                    should_review_all_captions: V.should_review_all_captions,
                  }
                : null,
          translated_audio_metadata: o(
            "ReelComposerVoiceTranslationsPublishUtils",
          ).getTranslatedAudioMetadata({
            alternateAudioTracks: h,
            autoDubbingSettings: b,
            shouldDisplayManualDescriptionsSectioninBYOA: oe,
            shouldUnify: r("gkx")("15403"),
            videoDescription: j,
          }),
          vod_title: he ? ge : void 0,
          allow_trim_beyond_max_length: p,
          closed_captions: ze,
          has_overridden_video_format: $ === !0,
        };
      return je;
    }
    var p = { aspect_ratio_denominator: 16, aspect_ratio_numerator: 9 };
    function _(e) {
      switch (e) {
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .NONE:
          return null;
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .MANUAL_9X16:
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .SPLIT_1X3:
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .VERTICAL:
          return { aspect_ratio_denominator: 16, aspect_ratio_numerator: 9 };
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .SQUARE:
          return { aspect_ratio_denominator: 1, aspect_ratio_numerator: 1 };
        case o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .FOUR_BY_FIVE:
          return { aspect_ratio_denominator: 5, aspect_ratio_numerator: 4 };
      }
    }
    function f(e) {
      if (
        e ===
        o("ReelComposerReframeAspectRatio").ReelComposerReframeAspectRatio
          .VERTICAL
      )
        return "VERSION_3";
    }
    function g(e) {
      return {
        left: e == null ? void 0 : e.crop_section_relative_top_x,
        right: e
          ? e.crop_section_relative_top_x + e.crop_section_relative_width
          : void 0,
        top: e == null ? void 0 : e.crop_section_relative_top_y,
        bottom: e
          ? e.crop_section_relative_top_y + e.crop_section_relative_height
          : void 0,
      };
    }
    ((l.reelPublishMutation = d),
      (l.getReelPublishInputObject = m),
      (l.DEFAULT_ASPECT_RATIO_PARAMS = p),
      (l.getAspectRatioParams = _),
      (l.getReframeVersion = f),
      (l.manualCropToReframeParameters = g));
  },
  98,
);
