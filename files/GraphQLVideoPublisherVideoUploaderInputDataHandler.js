__d(
  "GraphQLVideoPublisherVideoUploaderInputDataHandler",
  [
    "BrandedContentSharedToSponsorStatus",
    "BrandedContentSponsorRelationship",
    "CallToActionTypes",
    "ClientIDs",
    "ExpirationType",
    "GraphQLVideoPublisherInputDataHandlerBase",
    "VideoAssetMatureContentRating",
    "VideoCommentatingPermission",
    "VideoFundedContentFlagProgram",
    "VideoProjection",
    "VideoStereoFormat",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.mapPostDataToGraphQLInputObject = function () {
          var e,
            t = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_1(),
            n = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_2(),
            r = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_3(),
            a = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_4(),
            i = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_5(),
            l = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_6(),
            s = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_7(),
            u = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_8(),
            c = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_9(),
            d = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_10(),
            m = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_11(),
            p = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_12(),
            _ = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_13(),
            f = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_14(),
            g = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_15(),
            h = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_16(),
            y = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_17(),
            C = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_18(),
            b = this.postData.publish_as_reel,
            v = this.postData.translated_audio_metadata,
            S =
              (e = this.postData.non_uuc_reel_data) != null
                ? e
                : this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_19(),
            R = this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_20();
          return {
            actor_id: this.extraData.target_id,
            basic_data: t,
            client_mutation_id: o("ClientIDs").getNewClientID(),
            thumbnail_data: n,
            ad_break_data: a,
            vu_editor_data: u,
            post_status_data: r,
            main_composer_tab_data: i,
            distribution_data: l,
            stars_data: s,
            questions_data: c,
            polls_data: d,
            tracking_data: m,
            captions_data: p,
            spherical_data: _,
            live_premiere_data: f,
            video_editor_config_json: this.postData.video_editor_config_json,
            location_preset_data: g,
            video_abtesting_data: h,
            auto_dub_data: y,
            reel_publish_data: C,
            publish_as_reel: b,
            non_uuc_reel_data: S,
            translated_audio_data: { translated_audio_metadata: v },
            share_story_settings: R,
          };
        }),
        (n.uploadables = function () {
          return babelHelpers.extends(
            {},
            this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_21(),
            this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_22(),
            this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_23(),
          );
        }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_1 =
          function () {
            var e;
            return {
              source: this.extraData.source,
              target_id: this.extraData.target_id,
              video_id: this.extraData.video_id,
              video_title: this.postData.video_title,
              waterfall_id: this.extraData.waterfall_id,
              xhpc_message: this.postData.xhpc_message,
              creator_product:
                (e = this.extraData.creator_product) == null
                  ? void 0
                  : e.toString(),
              composer_entry_point_ref: this.extraData.composer_entry_point_ref,
              composer_dialog_version: this.extraData.composer_dialog_version,
              has_file_been_replaced: this.extraData.has_file_been_replaced,
              supports_chunking: this.extraData.supports_chunking,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_2 =
          function () {
            return { thumbnail_type: this.postData.thumbnail_type };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_22 =
          function () {
            return this.postData.thumbnail_uploadable;
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_23 =
          function () {
            var e = {},
              t = this.postData.schedule_custom_background_image,
              n = this.postData.schedule_custom_profile_image,
              r = this.postData.schedule_feed_background_image;
            return (
              t != null && (e.schedule_custom_background_image = t),
              n != null && (e.schedule_custom_profile_image = n),
              r != null && (e.schedule_feed_background_image = r),
              e
            );
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_4 =
          function () {
            var e,
              t =
                (e = this.postData.ad_breaks) == null
                  ? void 0
                  : e.map(function (e) {
                      return {
                        time_offset: parseInt(e.time_offset, 10),
                        status: e.status,
                      };
                    });
            return {
              ad_breaks: t,
              ad_break_prereview: this.postData.ad_break_prereview,
              ad_breaks_experiment_revenue_loss_threshold:
                this.postData.ad_breaks_experiment_revenue_loss_threshold,
              ad_breaks_creator_chosen_contextual_category:
                this.postData.ad_breaks_creator_chosen_contextual_category,
              enable_ad_breaks_experiment:
                this.postData.enable_ad_breaks_experiment,
              ad_breaks_block_lists: this.postData.ad_breaks_block_lists,
              has_ad_breaks_block_lists:
                this.postData.has_ad_breaks_block_lists,
              is_in_stream_enabled: this.postData.is_in_stream_enabled,
              self_cert_answers: this.postData.self_cert_answers,
              self_cert_educational_form:
                this.postData.self_cert_educational_form,
              self_cert_selected_no_sensitive:
                this.postData.self_cert_selected_no_sensitive,
              self_cert_predicted_status:
                this.postData.self_cert_predicted_status,
              should_auto_adjust_manual_ad_breaks:
                this.postData.should_auto_adjust_manual_ad_breaks,
              should_auto_insert_ad_breaks:
                this.postData.should_auto_insert_ad_breaks,
              should_use_image_ads: this.postData.should_use_image_ads,
              monetization_pre_check_options:
                this.postData.monetization_pre_check_options,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_3 =
          function () {
            return {
              dogfooding: this.postData.dogfooding,
              draft: this.postData.draft,
              is_reviewable_branded_content:
                this.postData.is_reviewable_branded_content,
              scheduled: this.postData.scheduled,
              future_date: this.postData.future_date,
              future_time: this.postData.future_time,
              expiring: this.postData.expiring,
              expire_type:
                this.postData.expire_type != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.expire_type,
                      r("ExpirationType"),
                    )
                  : null,
              expire_time: this.postData.expire_time,
              backdated_date: this.postData.backdated_date,
              hide_from_newsfeed: this.postData.hide_from_newsfeed,
              schedule_timestamp: this.postData.schedule_timestamp,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_24 =
          function () {
            var e = this.postData.branded_content_data;
            if (e == null) return null;
            var t = e.tagging_data;
            return (
              t != null &&
                (t = babelHelpers.extends({}, t, {
                  shared_to_sponsor_status:
                    t.shared_to_sponsor_status != null
                      ? o("enumUtils").enumValueToKeyEnforcing(
                          t.shared_to_sponsor_status,
                          r("BrandedContentSharedToSponsorStatus"),
                        )
                      : null,
                  sponsor_relationship:
                    t.sponsor_relationship != null
                      ? o("enumUtils").enumValueToKeyEnforcing(
                          t.sponsor_relationship,
                          r("BrandedContentSponsorRelationship"),
                        )
                      : null,
                })),
              babelHelpers.extends({}, e, { tagging_data: t })
            );
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_5 =
          function () {
            return {
              action_type_id: this.postData.action_type_id,
              branded_content_data:
                this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_24(),
              collaborator_id: this.postData.collaborator_id,
              composertags_place_name: this.postData.composertags_place_name,
              composertags_place: this.postData.composertags_place,
              composertags_product_items:
                this.postData.composertags_product_items,
              composertags_sponsor: this.postData.composertags_sponsor,
              composertags_with: this.postData.composertags_with,
              content_tags: this.postData.content_tags,
              cta_type:
                this.postData.cta_type != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.cta_type,
                      r("CallToActionTypes"),
                    )
                  : null,
              deal_id: this.postData.deal_id,
              direct_share_status:
                this.postData.direct_share_status != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.direct_share_status,
                      r("BrandedContentSharedToSponsorStatus"),
                    )
                  : null,
              episode_data_json: this.postData.episode_data_json,
              external_movie_data: this.postData.external_movie_data,
              feed_targeted_data:
                this.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_25(),
              fan_funding_promotion_metadata:
                this.postData.fan_funding_promotion_metadata,
              free_form_tags: this.postData.free_form_tags,
              funded_content_program: this.postData.funded_content_program
                ? o("enumUtils").enumValueToKeyEnforcing(
                    this.postData.funded_content_program,
                    r("VideoFundedContentFlagProgram"),
                  )
                : null,
              fundraiser_for_story_charity_id:
                this.postData.fundraiser_for_story_charity_id,
              fundraiser_for_story_charity_type:
                this.postData.fundraiser_for_story_charity_type,
              game_id: this.postData.game_id,
              icon_id: this.postData.icon_id,
              is_explicitly_tagged_as_gaming_video:
                this.postData.is_explicitly_tagged_as_gaming_video,
              is_rewards_enabled: this.postData.is_rewards_enabled,
              is_stars_enabled_for_post:
                this.postData.is_stars_enabled_for_post,
              multilingual_specified_lang:
                this.postData.multilingual_specified_lang,
              multilingual_status_langs:
                this.postData.multilingual_status_langs,
              multilingual_statuses: this.postData.multilingual_statuses,
              object_id: this.postData.object_id,
              object_str: this.postData.object_str,
              playlistIDs: this.postData.playlistIDs,
              share_to_parent_page_option_selected:
                this.postData.share_to_parent_page_option_selected,
              send_dm_invite: this.postData.send_dm_invite,
              sponsor_relationship: this.postData.sponsor_relationship
                ? o("enumUtils").enumValueToKeyEnforcing(
                    this.postData.sponsor_relationship,
                    r("BrandedContentSponsorRelationship"),
                  )
                : null,
              targeted_privacy_data: JSON.stringify(
                this.postData.targeted_privacy_data,
              ),
              background_ab_opted_in: this.postData.background_ab_opted_in,
              video_duration: this.postData.video_duration,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_25 =
          function () {
            var e = babelHelpers.extends({}, this.postData.feed_targeted_data);
            return (
              this.postData.relevant_until_date != null &&
                (e["relevant-until-date"] = this.postData.relevant_until_date),
              this.postData.relevant_until_time != null &&
                (e["relevant-until-time"] = this.postData.relevant_until_time),
              Object.keys(e).length === 0 && (e = void 0),
              JSON.stringify(e)
            );
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_6 =
          function () {
            return {
              commentating_permission:
                this.postData.commentating_permission != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.commentating_permission,
                      r("VideoCommentatingPermission"),
                    )
                  : null,
              crossposting_config: this.postData.crossposting_config,
              disturbing: this.postData.disturbing,
              embeddable: this.postData.embeddable,
              enable_drm: this.postData.enable_drm,
              exclude_from_watch: this.postData.exclude_from_watch,
              mature_content_rating:
                this.postData.mature_content_rating != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.mature_content_rating,
                      r("VideoAssetMatureContentRating"),
                    )
                  : null,
              no_story: this.postData.no_story,
              secret: this.postData.secret,
              shows_v2_episode_data: this.postData.shows_v2_episode_data,
              social_actions: this.postData.social_actions,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_7 =
          function () {
            return {
              is_receiving_stars_enabled:
                this.postData.is_receiving_stars_enabled,
              stars_goal_id: this.postData.stars_goal_id,
              stars_cue_trigger_timestamp:
                this.postData.stars_cue_trigger_timestamp,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_11 =
          function () {
            return {
              custom_labels: this.postData.custom_labels,
              external_video_id: this.postData.external_video_id,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_9 =
          function () {
            return { questions: this.postData.questions };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_10 =
          function () {
            return { polls: this.postData.polls };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_26 = function (
          t,
        ) {
          return t.getIsDefault() ? "captions_default" : "captions_file";
        }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_12 =
          function () {
            var e,
              t = this,
              n =
                (e = this.postData.captions) == null
                  ? void 0
                  : e.map(function (e, n) {
                      return (
                        t.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_26(
                          e,
                        ) + n
                      );
                    });
            return {
              autopublish_captions: this.postData.autopublish_captions,
              captions: n,
              should_review_all_captions:
                this.postData.should_review_all_captions,
              spoken_locale: this.postData.spoken_locale,
              autopublish_subtitles: this.postData.autopublish_subtitles,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_21 =
          function () {
            var e,
              t = this,
              n = {};
            return (
              (e = this.postData.captions) == null ||
                e.forEach(function (e, r) {
                  n[
                    t.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_26(
                      e,
                    ) + r
                  ] = e.getFile();
                }),
              n
            );
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_8 =
          function () {
            return {
              auto_reframe_aspect_ratios:
                this.postData.auto_reframe_aspect_ratios,
              auto_reframe_publish_mode:
                this.postData.auto_reframe_publish_mode,
              trailer_review_required: this.postData.trailer_review_required,
              trailer_generate_on: this.postData.trailer_generate_on,
              auto_reframe_mobile_only:
                this.postData.auto_reframe_mobile_only || !1,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_13 =
          function () {
            return {
              initialHeading: this.postData.initialHeading,
              initialPitch: this.postData.initialPitch,
              fov: this.postData.fov,
              guide_enabled: this.postData.guide_enabled,
              guide_keyframes: this.postData.guide_keyframes,
              enable_omnistab: this.postData.enable_omnistab,
              spherical: this.postData.spherical,
              projection:
                this.postData.projection != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.projection,
                      r("VideoProjection"),
                    )
                  : null,
              stereoMode:
                this.postData.stereoMode != null
                  ? o("enumUtils").enumValueToKeyEnforcing(
                      this.postData.stereoMode,
                      r("VideoStereoFormat"),
                    )
                  : null,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_14 =
          function () {
            return {
              premiere_time_ms: this.postData.premiere_time_ms,
              should_premiere: this.postData.should_premiere,
              premiere_in_living_room_video_ids:
                this.postData.premiere_in_living_room_video_ids,
              premiere_custom_profile_image_focus:
                this.postData.premiere_custom_profile_image_focus,
              feed_background_focus: this.postData.feed_background_focus,
              premiere_audience: this.postData.premiere_audience,
              premiere_is_loe: this.postData.premiere_is_loe,
              premiere_event_category_id:
                this.postData.premiere_event_category_id,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_15 =
          function () {
            return { location_preset_id: this.postData.location_preset_id };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_16 =
          function () {
            return {
              is_abtesting: this.postData.is_abtesting,
              should_publish_uuc: this.postData.should_publish_uuc,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_17 =
          function () {
            return {
              dubbing_enabled: this.postData.dubbing_enabled,
              dub_voice_speed: this.postData.dub_voice_speed,
              target_locale: this.postData.target_locale,
              voice_code: this.postData.voice_code,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_19 =
          function () {
            return {
              publish_as_non_uuc_reel: this.postData.publish_as_non_uuc_reel,
            };
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_18 =
          function () {
            return this.postData.reel_publish_data;
          }),
        (n.$GraphQLVideoPublisherVideoUploaderInputDataHandler$p_20 =
          function () {
            return this.postData.reshare_post_as_sticker == null
              ? null
              : {
                  reshare_post_as_sticker:
                    this.postData.reshare_post_as_sticker,
                  resharing_frequency: this.postData.resharing_frequency,
                };
          }),
        t
      );
    })(
      o("GraphQLVideoPublisherInputDataHandlerBase")
        .GraphQLVideoPublisherInputDataHandlerBase,
    );
    l.default = e;
  },
  98,
);
