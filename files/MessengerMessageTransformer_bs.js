__d(
  "MessengerMessageTransformer.bs",
  [
    "CurrentUser",
    "FBIDCheck",
    "InstantGameUpdateXMATUpdateType",
    "MercuryIDs",
    "MessageUnsendabilityStatus.bs",
    "MessagingGenericAdminTextType",
    "MessagingTagUtils",
    "MessengerAttachmentTransformer.bs",
    "P2PPaymentLogMessageSubtype",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_null_undefined",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.blob_attachments,
        n = [];
      return (
        t != null &&
          t.forEach(function (e) {
            if (e.__typename === "MessageImage") {
              n.push({
                _0: {
                  attribution_app: e.attribution_app,
                  attribution_metadata: e.attribution_metadata,
                  blurred_image_uri: e.blurred_image_uri,
                  filename: e.filename,
                  id: e.id,
                  large_preview: e.large_preview,
                  legacy_attachment_id: e.legacy_attachment_id,
                  original_dimensions: e.original_dimensions,
                  original_extension: e.original_extension,
                  photo_encodings: e.photo_encodings,
                  preview: e.preview,
                  render_as_sticker: e.render_as_sticker,
                  thumbnail: e.thumbnail,
                },
                TAG: 0,
              });
              return;
            } else if (e.__typename === "MessageAnimatedImage") {
              n.push({
                _0: {
                  animated_image: e.animated_image,
                  attribution_app: e.attribution_app,
                  attribution_metadata: e.attribution_metadata,
                  filename: e.filename,
                  legacy_attachment_id: e.legacy_attachment_id,
                  original_dimensions: e.original_dimensions,
                  preview_image: e.preview_image,
                  title: e.animated_image_caption,
                },
                TAG: 1,
              });
              return;
            } else if (e.__typename === "MessageAudio") {
              n.push({
                _0: {
                  attribution_app: e.attribution_app,
                  attribution_metadata: e.attribution_metadata,
                  audio_type: e.audio_type,
                  filename: e.filename,
                  is_voicemail: e.is_voicemail,
                  playable_duration_in_ms: e.playable_duration_in_ms,
                  playable_url: e.playable_url,
                  url_shimhash: e.url_shimhash,
                  url_skipshim: e.url_skipshim,
                },
                TAG: 2,
              });
              return;
            } else if (e.__typename === "MessageVideo") {
              n.push({
                _0: {
                  attribution_app: e.attribution_app,
                  attribution_metadata: e.attribution_metadata,
                  chat_image: e.chat_image,
                  filename: e.filename,
                  inbox_image: e.inbox_image,
                  large_image: e.large_image,
                  legacy_attachment_id: e.legacy_attachment_id,
                  original_dimensions: e.original_dimensions,
                  playable_duration_in_ms: e.playable_duration_in_ms,
                  playable_url: e.playable_url,
                  video_type: e.video_type,
                },
                TAG: 3,
              });
              return;
            } else if (e.__typename === "MessageFile") {
              n.push({
                _0: {
                  attribution_app: e.attribution_app,
                  attribution_metadata: e.attribution_metadata,
                  content_type: e.content_type,
                  filename: e.filename,
                  is_malicious: e.is_malicious,
                  message_file_fbid: e.message_file_fbid,
                  mimetype: e.mimetype,
                  preview: e.preview,
                  preview_url: e.preview_url,
                  url: e.url,
                  url_shimhash: e.url_shimhash,
                  url_skipshim: e.url_skipshim,
                },
                TAG: 4,
              });
              return;
            } else return;
          }),
        n
      );
    }
    function s(t, n, r) {
      var a = n.call_capture_attachments;
      return a == null
        ? []
        : o("MessengerAttachmentTransformer.bs").transformAttachment(
            t,
            {
              blob_attachments: e({
                blob_attachments: a.edges.map(function (e) {
                  return e.node;
                }),
              }),
              extensible_attachment: null,
              sticker: null,
            },
            n.message_id,
            r,
          );
    }
    function u(e, t, n, o, a) {
      var i;
      if (t.__typename === "GroupPollExtensibleMessageAdminText") {
        var l = t.question,
          u;
        if (l == null) u = [{}, null];
        else {
          var c = babelHelpers.extends({}, l);
          (Object.assign(c, {
            options: l.options.nodes.map(function (e) {
              var t = babelHelpers.extends({}, e);
              return Object.assign(t, {
                total_count: e.voters.nodes.length,
                voters: e.voters.nodes.map(function (e) {
                  return e.id;
                }),
              });
            }),
            total_count: t.total_count,
          }),
            (u = [c, l.id]));
        }
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: {
            event_type: t.event_type.toLowerCase(),
            question_id: u[1],
            question_json: r("bs_js_null_undefined").fromOption(
              JSON.stringify(u[0]),
            ),
          },
        };
      } else if (
        t.__typename === "InstantGameUpdateExtensibleMessageAdminText"
      ) {
        var d;
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: {
            collapsed_text: t.collapsed_text,
            cta_title: (d = r("getByPath"))(t, [
              "instant_game_update_data",
              "cta_title",
            ]),
            cta_url: d(t, ["instant_game_update_data", "cta_url"]),
            custom_image_url: d(t, [
              "instant_game_update_data",
              "photo",
              "image",
              "uri",
            ]),
            expanded_text: t.expanded_text,
            game_id: d(t, ["game", "id"]),
            leaderboard_json: t.leaderboard_json,
            template: d(t, ["instant_game_update_data", "template"]),
            update_type: r("InstantGameUpdateXMATUpdateType")[t.update_type],
          },
        };
      } else if (t.__typename === "MessengerAdContextAdminText")
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: { ad_url: t.ad_url },
        };
      else if (t.__typename === "MessengerCallLogExtensibleMessageAdminText")
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: babelHelpers.extends({}, t, {
            call_capture_attachments: s(e, t, a),
          }),
        };
      else if (
        t.__typename === "ThemeColorExtensibleMessageAdminText" ||
        t.__typename === "ThreadIconExtensibleMessageAdminText" ||
        t.__typename === "ThreadNicknameExtensibleMessageAdminText" ||
        t.__typename === "AcceptPendingThreadExtensibleMessageAdminText" ||
        t.__typename === "AddContactExtensibleMessageAdminText" ||
        t.__typename === "RtcCallLogExtensibleMessageAdminText" ||
        t.__typename === "GameScoreExtensibleMessageAdminText" ||
        t.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" ||
        t.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" ||
        t.__typename === "PartiesInviteExtensibleMessageAdminText" ||
        t.__typename === "AppointmentReminderExtensibleMessageAdminText" ||
        t.__typename === "LinkCTAExtensibleMessageAdminText" ||
        t.__typename === "MessengerLiveChatPluginURLUpdateAdminText" ||
        t.__typename === "MessengerLiveChatPluginFBUserStartChatAdminText" ||
        t.__typename === "MessengerLiveChatPluginGuestUserStartChatAdminText" ||
        t.__typename ===
          "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" ||
        t.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" ||
        t.__typename ===
          "ServicesLeadGenSurveyEditExtensibleMessageAdminText" ||
        t.__typename ===
          "MessengerIcebreakerVoteCastExtensibleMessageAdminText" ||
        t.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" ||
        t.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" ||
        t.__typename === "WorkBotInstalledExtensibleMessageAdminText" ||
        t.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" ||
        t.__typename === "PageThreadActionSystemAddDetailsXMAT" ||
        t.__typename === "MagicWordsExtensibleMessageAdminText" ||
        t.__typename === "NotificationMessagesAdminText" ||
        t.__typename === "PostSharedFromGroupExtensibleMessageAdminText" ||
        t.__typename === "BizInboxFormBuilderSubmitNotifyAdminText" ||
        t.__typename ===
          "BizInboxDetectedOutcomesActivityAdminTextExtensibleMessageAdminText" ||
        t.__typename ===
          "InstantGameBotMessageSubscriptionManagementAdminText" ||
        t.__typename === "InstantGameCustomUpdateMuteManagementAdminText"
      )
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: babelHelpers.extends({}, t),
        };
      else if (
        t.__typename === "LightweightEventCreateExtensibleMessageAdminText" ||
        t.__typename === "LightweightEventDeleteExtensibleMessageAdminText" ||
        t.__typename ===
          "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" ||
        t.__typename === "LightweightEventNotifyExtensibleMessageAdminText" ||
        t.__typename === "LightweightEventUpdateExtensibleMessageAdminText" ||
        t.__typename ===
          "LightweightEventUpdateLocationExtensibleMessageAdminText" ||
        t.__typename ===
          "LightweightEventUpdateTimeExtensibleMessageAdminText" ||
        t.__typename ===
          "LightweightEventUpdateTitleExtensibleMessageAdminText" ||
        t.__typename === "LightweightEventRSVPExtensibleMessageAdminText"
      ) {
        var m = t.event_reminder,
          p;
        if (m == null) p = void 0;
        else {
          var _ = m.lightweight_event_creator,
            f = _ != null ? _.id : void 0,
            g = m.location_page,
            h = g != null ? g.id : void 0,
            y = m.timezone_id,
            C = y != null ? y.timezone : void 0,
            b = m.location_coordinates,
            v = b == null ? { latitude: void 0, longitude: void 0 } : b,
            S = m.event_reminder_members,
            R = S != null ? S.edges : void 0;
          p = {
            event_creator_id: f,
            event_end_time: m.end_time,
            event_id: m.id,
            event_location_id: h,
            event_location_name: m.location_name,
            event_seconds_to_notify_before: m.seconds_to_notify_before,
            event_time: m.time,
            event_timezone: C,
            event_title: m.event_title,
            event_track_rsvp: m.allows_rsvp,
            event_type: m.lightweight_event_type,
            guest_id: t.guest_id,
            guest_state_list: R,
            guest_status: t.guest_status,
            latitude: v.latitude,
            longitude: v.longitude,
          };
        }
        i = {
          message_type: r("MessagingGenericAdminTextType")[n],
          untypedData: p,
        };
      } else
        i =
          t.__typename === "AdReplyMessageAdminText"
            ? {
                message_type: r("MessagingGenericAdminTextType")[n],
                untypedData: {
                  ad_url: t.ad_url,
                  results_url: t.results_url,
                  should_show_url: t.should_show_url,
                },
              }
            : {
                message_type: r("MessagingGenericAdminTextType")[n],
                untypedData: void 0,
              };
      return {
        log_message_body: o,
        log_message_data: i,
        log_message_type: "log:generic-admin-text",
      };
    }
    function c(e) {
      return e.map(function (e) {
        return e === "p2p_transfer"
          ? "orion"
          : e === "p2p_payment_request"
            ? "orion_request"
            : e;
      });
    }
    function d(e) {
      var t = e.target,
        n;
      if (t == null) n = null;
      else if (t.__typename === "CrisisListing")
        n = {
          _0: {
            listing_category: t.listing_category,
            listing_type: t.listing_type,
            map_image: t.map_image,
          },
          TAG: 0,
        };
      else if (t.__typename === "MoneyTransfer")
        n = {
          _0: {
            bubble_view: t.bubble_view,
            receiver: t.receiver,
            sender: t.sender,
            transfer_id: t.transfer_id,
          },
          TAG: 1,
        };
      else if (t.__typename === "PeerToPeerTransfer")
        n = {
          _0: {
            amount_fb_discount: t.amount_fb_discount,
            bubble_view: t.bubble_view,
            completedTime: t.completedTime,
            creationTime: t.creationTime,
            currency_amount: t.currency_amount,
            funds_availability: t.funds_availability,
            group_thread_fbid: t.group_thread_fbid,
            id: t.id,
            memo_text: t.memo_text,
            platform_item: t.platform_item,
            receiver_profile: t.receiver_profile,
            sender: t.sender,
            status_description: t.status_description,
            transaction_amount: t.transaction_amount,
            transfer_context: t.transfer_context,
            transfer_id: t.transfer_id,
            transfer_status: t.transfer_status,
            updatedTime: t.updatedTime,
          },
          TAG: 2,
        };
      else if (t.__typename === "PeerToPeerPaymentRequest")
        n = {
          _0: {
            amount: t.amount,
            bubble_view: t.bubble_view,
            creation_time: t.creation_time,
            group_thread_fbid: t.group_thread_fbid,
            id: t.id,
            individual_requests: t.individual_requests,
            memo_text: t.memo_text,
            request_status: t.request_status,
            request_theme: t.request_theme,
            requestee: t.requestee,
            requester: t.requester,
            status_description: t.status_description,
            transaction_amount: t.transaction_amount,
            transfer: t.transfer,
            updated_time: t.updated_time,
          },
          TAG: 3,
        };
      else if (t.__typename === "PaymentPlatformAttachment")
        n = {
          _0: {
            buyer_name: t.buyer_name,
            click_action: t.click_action,
            components: t.components,
            invoicer_id: t.invoicer_id,
            is_last_attachment: t.is_last_attachment,
            is_viewer_seller: t.is_viewer_seller,
            item_list: t.item_list,
            payment_call_to_actions: t.payment_call_to_actions,
            payment_modules_client: t.payment_modules_client,
            payment_snippet: t.payment_snippet,
            payment_status_icon: t.payment_status_icon,
            payment_sub_statuses: t.payment_sub_statuses,
            payment_total: t.payment_total,
            product_detail: t.product_detail,
            should_show_new_xma: t.should_show_new_xma,
            summary_action: t.summary_action,
            user_facing_payment_status: t.user_facing_payment_status,
          },
          TAG: 4,
        };
      else if (t.__typename === "MessengerRetailPromotion")
        n = {
          _0: {
            call_to_actions: t.call_to_actions,
            message: t.message,
            promotion_items: t.promotion_items,
          },
          TAG: 5,
        };
      else if (t.__typename === "MessengerBusinessMessage")
        n = {
          _0: {
            business_items: t.business_items,
            call_to_actions: t.call_to_actions,
            message: t.message,
          },
          TAG: 6,
        };
      else if (t.__typename === "Video")
        n = { _0: { video_id: t.video_id }, TAG: 7 };
      else if (t.__typename === "PagesPlatformLeadGenInfo")
        n = { _0: { field_data_list: t.field_data_list }, TAG: 8 };
      else if (t.__typename === "MessageLiveLocation")
        n = {
          _0: {
            coordinate: t.coordinate,
            expiration_time: t.expiration_time,
            is_expired: t.is_expired,
            live_location_id: t.live_location_id,
            location_title: t.location_title,
            sender: t.sender,
            sender_destination: t.sender_destination,
            stop_reason: t.stop_reason,
          },
          TAG: 9,
        };
      else if (t.__typename === "QuickInvite")
        n = {
          _0: {
            id: t.id,
            invite_recipient: t.invite_recipient,
            invite_sender: t.invite_sender,
          },
          TAG: 10,
        };
      else if (t.__typename === "PagesPlatformBookingMessage")
        n = {
          _0: {
            id: t.id,
            ls_xma_subtitle: t.ls_xma_subtitle,
            ls_xma_title: t.ls_xma_title,
            message_bubble_type: t.message_bubble_type,
            native_component_flow_request: t.native_component_flow_request,
            page: t.page,
            user: t.user,
          },
          TAG: 11,
        };
      else if (t.__typename === "ServicesAppointmentAvailability")
        n = {
          _0: {
            consumer: t.consumer,
            formatted_available_time_ranges: t.formatted_available_time_ranges,
            has_booking_request_created: t.has_booking_request_created,
            id: t.id,
            page: t.page,
          },
          TAG: 12,
        };
      else if (t.__typename === "ServicesGenericAdminText")
        n = { _0: { id: t.id }, TAG: 13 };
      else if (t.__typename === "GenieMessage")
        n = {
          _0: {
            genie_sender: t.genie_sender,
            story_attachment: t.story_attachment,
          },
          TAG: 14,
        };
      else if (t.__typename === "Event")
        n = {
          _0: {
            canViewerJoin: t.canViewerJoin,
            canViewerWatch: t.canViewerWatch,
            connection_style: t.connection_style,
            event_place: t.event_place,
            eventID: t.eventID,
            guestStatus: t.guestStatus,
            name: t.name,
            profile_picture: t.profile_picture,
            social_context: t.social_context,
            start_timestamp: t.start_timestamp,
            timeString: t.timeString,
            watchStatus: t.watchStatus,
          },
          TAG: 15,
        };
      else if (t.__typename === "ExternalSong")
        n = {
          _0: {
            application_name: t.application_name,
            artist_names: t.artist_names,
            audio_url: t.audio_url,
            duration_ms: t.duration_ms,
            music_title: t.music_title,
          },
          TAG: 16,
        };
      else if (t.__typename === "LightweightAction")
        n = { _0: { lwa_state: t.lwa_state, lwa_type: t.lwa_type }, TAG: 17 };
      else if (t.__typename === "MessengerRetailItem")
        n = {
          _0: {
            call_to_actions: t.call_to_actions,
            default_action: t.default_action,
            desc: t.desc,
            first_metaline: t.first_metaline,
            id: t.id,
            image_aspect_ratio: t.image_aspect_ratio,
            item_url: t.item_url,
            name: t.name,
            second_metaline: t.second_metaline,
            source: t.source,
            third_metaline: t.third_metaline,
            thumb_url: t.thumb_url,
          },
          TAG: 18,
        };
      else if (
        t.__typename === "FundraiserPersonToCharity" ||
        t.__typename === "FundraiserPersonForPerson"
      ) {
        var r = t.focused_cover_photo,
          o = t.fundraiser_detailed_progress_text,
          a = t.fundraiser_subtitle_text;
        n = {
          _0: {
            canDonate: t.can_donate,
            focusedCoverPhoto:
              r == null
                ? null
                : {
                    data: {
                      height: r.photo.image.height,
                      width: r.photo.image.width,
                    },
                    src: r.photo.image.uri,
                  },
            fundraiserDetailedProgressText: o == null ? null : o.text,
            fundraiserID: t.id,
            fundraiserSubtitleText: a == null ? null : a.text,
            hasViewerDonated: t.has_viewer_donated,
          },
          TAG: 20,
        };
      } else
        n =
          t.__typename === "JobApplication"
            ? { _0: { id: t.id }, TAG: 22 }
            : t.__typename === "GroupCommerceProductItem"
              ? {
                  _0: {
                    formatted_price: t.formatted_price,
                    group_commerce_item_description:
                      t.group_commerce_item_description,
                    group_commerce_item_seller: t.group_commerce_item_seller,
                    group_commerce_item_title: t.group_commerce_item_title,
                    primary_photo: t.primary_photo,
                    url: t.url,
                  },
                  TAG: 23,
                }
              : t.__typename === "Page"
                ? {
                    _0: {
                      address: t.address,
                      cover_photo: t.cover_photo,
                      id: t.id,
                      location: t.location,
                      name: t.name,
                      overall_star_rating: t.overall_star_rating,
                      price_range_description: t.price_range_description,
                      top_category_name: t.top_category_name,
                    },
                    TAG: 24,
                  }
                : t.__typename === "MessengerEventReminder"
                  ? {
                      _0: {
                        event_title: t.event_title,
                        is_active: t.is_active,
                        time: t.time,
                      },
                      TAG: 25,
                    }
                  : t.__typename ===
                      "AirlineBoardingPassCollectionMessageAttachment"
                    ? {
                        _0: {
                          boarding_pass_error_title_label:
                            t.boarding_pass_error_title_label,
                          boarding_pass_title_label:
                            t.boarding_pass_title_label,
                          boarding_passes: t.boarding_passes,
                          boarding_time_label: t.boarding_time_label,
                          departure_label: t.departure_label,
                          flight_gate_label: t.flight_gate_label,
                          flight_label: t.flight_label,
                          flight_terminal_label: t.flight_terminal_label,
                          logo: t.logo,
                          message_cta_label: t.message_cta_label,
                          passenger_names_label: t.passenger_names_label,
                          passenger_seat_label: t.passenger_seat_label,
                          share_cta_label: t.share_cta_label,
                          tint_color: t.tint_color,
                          view_boarding_pass_cta_label:
                            t.view_boarding_pass_cta_label,
                        },
                        TAG: 26,
                      }
                    : t.__typename === "AirlineCheckInReminderMessageAttachment"
                      ? {
                          _0: {
                            arrival_time_label: t.arrival_time_label,
                            booking_number_label: t.booking_number_label,
                            checkin_cta_label: t.checkin_cta_label,
                            checkin_url: t.checkin_url,
                            departure_time_label: t.departure_time_label,
                            flight_infos: t.flight_infos,
                            flight_label: t.flight_label,
                            logo: t.logo,
                            pnr_number: t.pnr_number,
                            tint_color: t.tint_color,
                          },
                          TAG: 27,
                        }
                      : t.__typename === "AirlineUpdateMessageAttachment"
                        ? {
                            _0: {
                              arrival_time_label: t.arrival_time_label,
                              booking_number_label: t.booking_number_label,
                              departure_time_label: t.departure_time_label,
                              flight_gate_label: t.flight_gate_label,
                              flight_info: t.flight_info,
                              flight_label: t.flight_label,
                              flight_status_label: t.flight_status_label,
                              hightlighted_labels: t.hightlighted_labels,
                              logo: t.logo,
                              passenger_names_label: t.passenger_names_label,
                              passenger_seat_label: t.passenger_seat_label,
                              pnr_number: t.pnr_number,
                              tint_color: t.tint_color,
                              update_type: t.update_type,
                            },
                            TAG: 28,
                          }
                        : t.__typename === "AirlineItineraryMessageAttachment"
                          ? {
                              _0: {
                                aircraft_type_label: t.aircraft_type_label,
                                arrival_time_label: t.arrival_time_label,
                                base_price_label: t.base_price_label,
                                booking_number_label: t.booking_number_label,
                                cabin_type_label: t.cabin_type_label,
                                confirmation_number: t.confirmation_number,
                                departure_time_label: t.departure_time_label,
                                flight_confirmation_label:
                                  t.flight_confirmation_label,
                                flight_date_label: t.flight_date_label,
                                flight_label: t.flight_label,
                                flight_terminal_label: t.flight_terminal_label,
                                formatted_base_price: t.formatted_base_price,
                                formatted_tax: t.formatted_tax,
                                formatted_total: t.formatted_total,
                                itemized_price_infos: t.itemized_price_infos,
                                itinerary_error_title_label:
                                  t.itinerary_error_title_label,
                                itinerary_legs: t.itinerary_legs,
                                itinerary_title_label: t.itinerary_title_label,
                                logo: t.logo,
                                passenger_infos: t.passenger_infos,
                                passenger_name_label: t.passenger_name_label,
                                passenger_names_label: t.passenger_names_label,
                                passenger_seat_label: t.passenger_seat_label,
                                pnr_number: t.pnr_number,
                                purchase_summary_label:
                                  t.purchase_summary_label,
                                taxes_label: t.taxes_label,
                                tint_color: t.tint_color,
                                total_label: t.total_label,
                                view_details_cta_label:
                                  t.view_details_cta_label,
                              },
                              TAG: 29,
                            }
                          : t.__typename === "MessengerRetailShipment"
                            ? {
                                _0: {
                                  bubble_type: t.bubble_type,
                                  commerce_destination: t.commerce_destination,
                                  commerce_origin: t.commerce_origin,
                                  estimated_delivery_time_for_display:
                                    t.estimated_delivery_time_for_display,
                                  id: t.id,
                                  receipt: t.receipt,
                                  recipient: t.recipient,
                                  retail_carrier: t.retail_carrier,
                                  retail_shipment_items:
                                    t.retail_shipment_items,
                                  shipdate_for_display: t.shipdate_for_display,
                                  shipment_tracking_events:
                                    t.shipment_tracking_events,
                                  tracking_number: t.tracking_number,
                                },
                                TAG: 31,
                              }
                            : t.__typename === "EventAttendanceConfirmation"
                              ? {
                                  _0: {
                                    attendee_answers: t.attendee_answers,
                                    event: t.event,
                                    id: t.id,
                                    num_guests: t.num_guests,
                                  },
                                  TAG: 33,
                                }
                              : t.__typename === "LeadGenDeepLinkData"
                                ? {
                                    _0: {
                                      cover_image: t.cover_image,
                                      headline: t.headline,
                                      id: t.id,
                                      name: t.name,
                                      page: t.page,
                                    },
                                    TAG: 32,
                                  }
                                : t.__typename === "UserLeadGenInfo"
                                  ? {
                                      _0: {
                                        field_data: t.field_data,
                                        id: t.id,
                                      },
                                      TAG: 34,
                                    }
                                  : t.__typename === "WECMessageAudio"
                                    ? {
                                        _0: {
                                          duration: t.duration,
                                          extension: t.extension,
                                          filename: t.filename,
                                          filesize: t.filesize,
                                          id: t.id,
                                          playable_url: t.playable_url,
                                          url_shimhash: t.url_shimhash,
                                        },
                                        TAG: 38,
                                      }
                                    : t.__typename ===
                                        "IceBreakerMessageAttachment"
                                      ? {
                                          _0: {
                                            ad_id: t.ad_id,
                                            ice_breaker_messages:
                                              t.ice_breaker_messages,
                                            ice_breaker_title:
                                              t.ice_breaker_title,
                                          },
                                          TAG: 35,
                                        }
                                      : t.__typename === "WECMessage"
                                        ? {
                                            _0: {
                                              sender_wec_name:
                                                t.sender_wec_name,
                                              sender_wec_number:
                                                t.sender_wec_number,
                                              sender_wec_number_fbid:
                                                t.sender_wec_number_fbid,
                                              sender_wec_number_formated:
                                                t.sender_wec_number_formated,
                                              templated_message_body:
                                                t.templated_message_body,
                                              templated_message_btn1_text:
                                                t.templated_message_btn1_text,
                                              templated_message_btn1_type:
                                                t.templated_message_btn1_type,
                                              templated_message_btn2_text:
                                                t.templated_message_btn2_text,
                                              templated_message_btn2_type:
                                                t.templated_message_btn2_type,
                                              templated_message_btn3_text:
                                                t.templated_message_btn3_text,
                                              templated_message_btn3_type:
                                                t.templated_message_btn3_type,
                                              templated_message_buttons:
                                                t.templated_message_buttons,
                                              templated_message_footer:
                                                t.templated_message_footer,
                                              templated_message_header_media:
                                                t.templated_message_header_media,
                                              templated_message_header_text:
                                                t.templated_message_header_text,
                                              templated_message_header_type:
                                                t.templated_message_header_type,
                                              templated_message_offer_text:
                                                t.templated_message_offer_text,
                                              templated_message_cards:
                                                t.templated_message_cards,
                                              templated_message_offer_has_expiration:
                                                t.templated_message_offer_has_expiration,
                                              templated_message_offer_expiration_time:
                                                t.templated_message_offer_expiration_time,
                                              templated_message_offer_is_offer_code_personalized:
                                                t.templated_message_offer_is_offer_code_personalized,
                                              templated_message_id:
                                                t.templated_message_id,
                                              templated_message_name:
                                                t.templated_message_name,
                                              wec_referral_body:
                                                t.wec_referral_body,
                                              wec_referral_headline:
                                                t.wec_referral_headline,
                                              wec_referral_media:
                                                t.wec_referral_media,
                                              wec_referral_media_type:
                                                t.wec_referral_media_type,
                                              wec_referral_url:
                                                t.wec_referral_url,
                                              wec_referral_has_admin_text:
                                                t.wec_referral_has_admin_text,
                                              wec_sticker_id: t.wec_sticker_id,
                                            },
                                            TAG: 36,
                                          }
                                        : t.__typename === "WECMessageCard"
                                          ? {
                                              _0: {
                                                title_type: t.title_type,
                                                sample_handle: t.sample_handle,
                                                body: t.body,
                                                button: t.button,
                                              },
                                              TAG: 60,
                                            }
                                          : t.__typename === "WECMessageButton"
                                            ? {
                                                _0: {
                                                  text: t.text,
                                                  type: t.type,
                                                },
                                                TAG: 61,
                                              }
                                            : t.__typename === "WECMessageImage"
                                              ? {
                                                  _0: {
                                                    extension: t.extension,
                                                    id: t.id,
                                                    large_preview:
                                                      t.large_preview,
                                                    preview: t.preview,
                                                  },
                                                  TAG: 37,
                                                }
                                              : t.__typename ===
                                                  "WECMessageFile"
                                                ? {
                                                    _0: {
                                                      extension: t.extension,
                                                      filesize: t.filesize,
                                                      id: t.id,
                                                      is_malicious:
                                                        t.is_malicious,
                                                      name: t.name,
                                                      uri: t.uri,
                                                    },
                                                    TAG: 39,
                                                  }
                                                : t.__typename ===
                                                    "WECMessageVideo"
                                                  ? {
                                                      _0: {
                                                        extension: t.extension,
                                                        filename: t.filename,
                                                        filesize: t.filesize,
                                                        height: t.height,
                                                        id: t.id,
                                                        playable_url:
                                                          t.playable_url,
                                                        url_shimhash:
                                                          t.url_shimhash,
                                                        width: t.width,
                                                        preview_url:
                                                          t.thumbnail_image.uri,
                                                      },
                                                      TAG: 40,
                                                    }
                                                  : t.__typename ===
                                                      "MontageDirect"
                                                    ? {
                                                        _0: {
                                                          blob_media:
                                                            t.blob_media,
                                                          blob_media_type:
                                                            t.blob_media_type,
                                                          image: t.image,
                                                          is_keep_disabled:
                                                            t.is_keep_disabled,
                                                          message_state:
                                                            t.message_state,
                                                        },
                                                        TAG: 41,
                                                      }
                                                    : t.__typename ===
                                                        "MBirthdayReminderAttachment"
                                                      ? {
                                                          _0: {
                                                            birthday_date:
                                                              t.birthday_date,
                                                            confidence:
                                                              t.confidence,
                                                            friend_id:
                                                              t.friend_id,
                                                          },
                                                          TAG: 42,
                                                        }
                                                      : t.__typename ===
                                                          "MPersonalRemindersList"
                                                        ? {
                                                            _0: {
                                                              has_more_upcoming_reminders:
                                                                t.has_more_upcoming_reminders,
                                                              personal_reminders:
                                                                t.personal_reminders,
                                                            },
                                                            TAG: 43,
                                                          }
                                                        : t.__typename ===
                                                            "MentorshipMessengerCurriculumStep"
                                                          ? {
                                                              _0: {
                                                                curriculum_message:
                                                                  t.curriculum_message,
                                                                id: t.id,
                                                                mentorship_program:
                                                                  t.mentorship_program,
                                                                module_name:
                                                                  t.module_name,
                                                                program_name:
                                                                  t.program_name,
                                                                prompt:
                                                                  t.prompt,
                                                                step_count:
                                                                  t.step_count,
                                                                total_steps:
                                                                  t.total_steps,
                                                              },
                                                              TAG: 44,
                                                            }
                                                          : t.__typename ===
                                                              "MentorshipMessengerDiscussionTopicSet"
                                                            ? {
                                                                _0: {
                                                                  id: t.id,
                                                                  topics:
                                                                    t.topics,
                                                                },
                                                                TAG: 45,
                                                              }
                                                            : t.__typename ===
                                                                "MentorshipMessengerLeavePrompt"
                                                              ? {
                                                                  _0: {
                                                                    id: t.id,
                                                                    mentorship_program:
                                                                      t.mentorship_program,
                                                                    xma_type:
                                                                      t.xma_type,
                                                                  },
                                                                  TAG: 46,
                                                                }
                                                              : t.__typename ===
                                                                  "MentorshipMessengerReminder"
                                                                ? {
                                                                    _0: {
                                                                      id: t.id,
                                                                      xma_type:
                                                                        t.xma_type,
                                                                    },
                                                                    TAG: 47,
                                                                  }
                                                                : t.__typename ===
                                                                    "MentorshipMessengerSurvey"
                                                                  ? {
                                                                      _0: {
                                                                        id: t.id,
                                                                        mentorship_program:
                                                                          t.mentorship_program,
                                                                        xma_disclaimer:
                                                                          t.xma_disclaimer,
                                                                        xma_title:
                                                                          t.xma_title,
                                                                        xma_type:
                                                                          t.xma_type,
                                                                      },
                                                                      TAG: 48,
                                                                    }
                                                                  : t.__typename ===
                                                                      "MentorshipMessengerProgressTracker"
                                                                    ? {
                                                                        _0: {
                                                                          id: t.id,
                                                                          xma_body:
                                                                            t.xma_body,
                                                                          xma_title:
                                                                            t.xma_title,
                                                                          xma_type:
                                                                            t.xma_type,
                                                                        },
                                                                        TAG: 49,
                                                                      }
                                                                    : t.__typename ===
                                                                        "Story"
                                                                      ? {
                                                                          _0: {
                                                                            actors:
                                                                              t.actors,
                                                                            attached_story:
                                                                              t.attached_story,
                                                                            attachments:
                                                                              t.attachments,
                                                                            creation_time:
                                                                              t.creation_time,
                                                                            description:
                                                                              t.description,
                                                                            feedback:
                                                                              t.feedback,
                                                                            message_richtext:
                                                                              t.message_richtext,
                                                                            post_id:
                                                                              t.post_id,
                                                                            reaction_count_reduced:
                                                                              t.reaction_count_reduced,
                                                                            title:
                                                                              t.title,
                                                                            to: t.to,
                                                                            top_reactions:
                                                                              t.top_reactions,
                                                                          },
                                                                          TAG: 50,
                                                                        }
                                                                      : t.__typename ===
                                                                          "User"
                                                                        ? {
                                                                            _0: {
                                                                              cover_photo:
                                                                                t.cover_photo,
                                                                              id: t.id,
                                                                              name: t.name,
                                                                              profile_picture:
                                                                                t.profile_picture,
                                                                              subscribe_status:
                                                                                t.subscribe_status,
                                                                              type: t.__typename,
                                                                              work_info:
                                                                                t.work_info,
                                                                            },
                                                                            TAG: 51,
                                                                          }
                                                                        : t.__typename ===
                                                                            "Group"
                                                                          ? {
                                                                              _0: {
                                                                                cover_photo:
                                                                                  t.cover_photo,
                                                                                group_general_chat:
                                                                                  t.group_general_chat,
                                                                                id: t.id,
                                                                                name: t.name,
                                                                                type: t.__typename,
                                                                                viewer_join_state:
                                                                                  t.viewer_join_state,
                                                                                visibility:
                                                                                  t.visibility,
                                                                                visibility_sentence:
                                                                                  t.visibility_sentence,
                                                                                work_groups_sync_metadata:
                                                                                  t.work_groups_sync_metadata,
                                                                              },
                                                                              TAG: 52,
                                                                            }
                                                                          : t.__typename ===
                                                                              "AppContent"
                                                                            ? {
                                                                                _0: {
                                                                                  app_integration:
                                                                                    t.app_integration,
                                                                                  attachment_icon:
                                                                                    t.app_integration,
                                                                                  attachment_type_name:
                                                                                    t.attachment_type_name,
                                                                                  content_uri:
                                                                                    t.content_uri,
                                                                                  file_type_category:
                                                                                    t.file_type_category,
                                                                                  id: t.id,
                                                                                  link_preview_additional_data:
                                                                                    t.link_preview_additional_data,
                                                                                  privacy_status:
                                                                                    t.privacy_status,
                                                                                  type: t.__typename,
                                                                                },
                                                                                TAG: 53,
                                                                              }
                                                                            : t.__typename ===
                                                                                "OfferItem"
                                                                              ? {
                                                                                  _0: {
                                                                                    id: t.id,
                                                                                    type: t.__typename,
                                                                                  },
                                                                                  TAG: 54,
                                                                                }
                                                                              : t.__typename ===
                                                                                  "CommerceProductItemShare"
                                                                                ? {
                                                                                    _0: {
                                                                                      default_action:
                                                                                        t.default_action,
                                                                                      type: t.__typename,
                                                                                    },
                                                                                    TAG: 55,
                                                                                  }
                                                                                : t.__typename ===
                                                                                    "PostPurchaseOrderUpdateXma"
                                                                                  ? {
                                                                                      _0: {
                                                                                        order_id:
                                                                                          t.order_id,
                                                                                        order_progress:
                                                                                          t.order_progress,
                                                                                        type: t.__typename,
                                                                                      },
                                                                                      TAG: 56,
                                                                                    }
                                                                                  : t.__typename ===
                                                                                      "InThreadMultiphotoItemCTAData"
                                                                                    ? {
                                                                                        _0: {
                                                                                          action_prefill:
                                                                                            t.action_prefill,
                                                                                          ad_id:
                                                                                            t.ad_id,
                                                                                          cta_title:
                                                                                            t.cta_title,
                                                                                          customer_id:
                                                                                            t.customer_id,
                                                                                          index:
                                                                                            t.index,
                                                                                          page_id:
                                                                                            t.page_id,
                                                                                          reply_image_uri:
                                                                                            t.reply_image_uri,
                                                                                          type: t.__typename,
                                                                                        },
                                                                                        TAG: 57,
                                                                                      }
                                                                                    : t.__typename ===
                                                                                        "XFBP2MXMA"
                                                                                      ? {
                                                                                          _0: {
                                                                                            id: t.id,
                                                                                            viewer_id:
                                                                                              t.viewer_id,
                                                                                          },
                                                                                          TAG: 58,
                                                                                        }
                                                                                      : t.__typename ===
                                                                                          "XFBPaymentInvoiceMediaMessageDetection"
                                                                                        ? {
                                                                                            _0: {
                                                                                              payment_confirmation_status:
                                                                                                t.payment_confirmation_status,
                                                                                            },
                                                                                            TAG: 59,
                                                                                          }
                                                                                        : null;
      return {
        action_links: e.action_links,
        deduplication_key: e.deduplication_key,
        description: e.description,
        media: e.media,
        messaging_attribution: e.messaging_attribution,
        messenger_call_to_actions: e.messenger_call_to_actions,
        messenger_generic_xma_template_extra_info:
          e.messenger_generic_xma_template_extra_info,
        properties: e.properties,
        source: e.source,
        style_list: c(e.style_list),
        target: n,
        title_with_entities: e.title_with_entities,
        url: e.url,
        xma_layout_info: e.xma_layout_info,
      };
    }
    function m(e) {
      var t = d({
        action_links: e.action_links,
        deduplication_key: e.deduplication_key,
        description: e.description,
        media: e.media,
        messaging_attribution: e.messaging_attribution,
        messenger_call_to_actions: e.messenger_call_to_actions,
        messenger_generic_xma_template_extra_info:
          e.messenger_generic_xma_template_extra_info,
        properties: e.properties,
        source: e.source,
        style_list: e.style_list,
        target: e.target,
        title_with_entities: e.title_with_entities,
        url: e.url,
        xma_layout_info: e.xma_layout_info,
      });
      if (t == null) return null;
      var n = e.subattachments.map(d);
      return babelHelpers.extends({}, t, { subattachments: n });
    }
    function p(e) {
      var t = e.message;
      if (t == null) return [];
      var n = [];
      return (
        t.ranges.forEach(function (e) {
          var t = e.entity;
          if (t != null) {
            var r = t.id,
              o = t.thread_key;
            if (r == null) {
              if (o == null) return;
              var a = o.thread_fbid;
              if (a == null) return;
              var i = t.__typename,
                l;
              switch (i) {
                case "MessengerViewerGroupThread":
                  l = "t";
                  break;
                case "User":
                  l = "p";
                  break;
                default:
                  l = "n";
              }
              n.push({ id: a, length: e.length, offset: e.offset, type: l });
              return;
            }
            var s = t.__typename,
              u;
            switch (s) {
              case "MessengerViewerGroupThread":
                u = "t";
                break;
              case "User":
                u = "p";
                break;
              default:
                u = "n";
            }
            n.push({ id: r, length: e.length, offset: e.offset, type: u });
          }
        }),
        n
      );
    }
    function _(t, n, a, i) {
      var l = {};
      n.message_reactions.forEach(function (e) {
        l[e.user.id] = e.reaction;
      });
      var c = o("FBIDCheck").isUser_deprecated(n.message_sender.id),
        d = c
          ? o("MessagingTagUtils").getSourceFromTags(n.tags_list)
          : "source:unknown",
        f = c ? o("MessagingTagUtils").getSourceTags(n.tags_list, d) : [],
        g = n.message_id,
        h = a.thread_id,
        y = a.thread_fbid,
        C = a.other_user_fbid,
        b =
          h == null
            ? y == null
              ? C == null
                ? null
                : o("MercuryIDs").getThreadIDFromUserID(C)
              : o("MercuryIDs").getThreadIDFromThreadFBID(y)
            : h,
        v = n.secondary_language_body,
        S = n.tags_list.some(function (e) {
          return e === "action:copy_message" ||
            e === "copy_self_message" ||
            e === "action:copy_attachment"
            ? !0
            : e === "copy_self_attachment";
        }),
        R = n.customizations,
        L = n.error_data,
        E = n.unsent_timestamp_precise,
        k =
          E == null || E === "0"
            ? null
            : r("bs_js_null_undefined").fromOption(
                r("bs_caml_format").caml_float_of_string(E),
              ),
        I = n.replied_to_message,
        T;
      if (I == null) T = null;
      else {
        var D = I.message;
        T =
          D == null
            ? { message: null, status: I.status }
            : {
                message: r("bs_js_null_undefined").fromOption(
                  r("bs_caml_option").some(_(t, D, a, i)),
                ),
                status: I.status,
              };
      }
      var x = n.unsender,
        $ = {
          action_type:
            n.__typename === "UserMessage"
              ? "ma-type:user-generated-message"
              : "ma-type:log-message",
          attachments: null,
          author: o("MercuryIDs").getParticipantIDFromUserID(
            n.message_sender.id,
          ),
          author_email: n.message_sender.email,
          body: null,
          creator_info: null,
          customizations: R == null ? [] : R,
          ephemeral_ttl_mode: n.ttl,
          error_data: L == null ? null : { description: L.description },
          folder: a.folder,
          has_attachment: null,
          is_filtered_content: n.tags_list.indexOf("filtered_content") !== -1,
          is_filtered_content_account:
            n.tags_list.indexOf("filtered_content_account") !== -1,
          is_filtered_content_bh:
            n.tags_list.indexOf("filtered_content_bh") !== -1,
          is_filtered_content_invalid_app:
            n.tags_list.indexOf("filtered_content_invalid_app") !== -1,
          is_filtered_content_quasar:
            n.tags_list.indexOf("filtered_content_quasar") !== -1,
          is_forwarded: S,
          is_one_way_sent: n.tags_list.some(function (e) {
            return e === "one_way_message";
          }),
          is_spoof_warning:
            n.tags_list.indexOf("MTA:dmarc:fail") !== -1 ||
            n.tags_list.indexOf("spam:spoofing") !== -1 ||
            n.tags_list.indexOf("MTA:spoof_warning") !== -1,
          is_unread: n.unread,
          log_message_body: null,
          log_message_data: null,
          log_message_type: null,
          m_suggestions: n.m_suggestions,
          message_id: g,
          message_source: n.message_source_data,
          message_unsendability_status: o(
            "MessageUnsendabilityStatus.bs",
          ).fromNullableString(n.message_unsendability_status),
          meta_ranges: null,
          montage_reply_data: n.montage_reply_data,
          offline_threading_id: n.offline_threading_id,
          other_user_fbid: a.other_user_fbid,
          platform_xmd: n.platform_xmd_encoded,
          preview_attachments: null,
          profile_ranges: p(n),
          ranges: null,
          raw_attachments: null,
          reactions: l,
          removed_timestamp: k,
          replied_to_message: T,
          secondary_language_body: v,
          skip_bump_thread: !1,
          source: d,
          source_tags: f,
          status: null,
          sticker_id: null,
          subject: null,
          tags: n.tags_list,
          thread_fbid: a.thread_fbid,
          thread_id: b,
          threading_id: null,
          timestamp: r("bs_caml_format").caml_float_of_string(
            n.timestamp_precise,
          ),
          unsender:
            x == null
              ? null
              : {
                  id: o("MercuryIDs").getParticipantIDFromUserID(
                    x.messaging_actor.id,
                  ),
                  name: x.messaging_actor.name,
                  short_name: x.messaging_actor.short_name,
                },
          verse_group_role_xmd: n.verse_group_role_xmd,
        };
      if (n.__typename === "UserMessage") {
        var P = e(n),
          N = n.extensible_attachment,
          M;
        if (N == null) M = null;
        else {
          var w = N.genie_attachment,
            A;
          if (w == null) A = null;
          else {
            var F = w.genie_message,
              O;
            if (F == null) O = null;
            else {
              var B = F.story_attachment;
              O = { story_attachment: B == null ? null : m(B) };
            }
            A = { genie_message: O };
          }
          var W = N.story_attachment;
          M = {
            genie_attachment: A,
            legacy_attachment_id: N.legacy_attachment_id,
            story_attachment: W == null ? null : m(W),
          };
        }
        var q = o("MessengerAttachmentTransformer.bs").transformAttachment(
            t,
            {
              blob_attachments: P,
              extensible_attachment: M,
              sticker: n.sticker,
            },
            g,
            i,
          ),
          U = n.message,
          V = n.page_admin_sender;
        Object.assign($, {
          attachments: q,
          body: U == null ? null : U.text,
          creator_info:
            V == null
              ? null
              : {
                  creatorID: V.admin_id,
                  creatorName: V.name,
                  creatorType: V.sender_type,
                  labelType: V.label_type,
                  pageID: V.page_id,
                  profileURI: V.profile_uri,
                },
          has_attachment: q.length > 0,
          meta_ranges: n.meta_ranges.map(function (e) {
            return babelHelpers.extends({}, e, { data: JSON.parse(e.data) });
          }),
          ranges: void 0,
          raw_attachments: null,
          subject: null,
        });
      } else if (
        n.__typename === "VoiceCallMessage" ||
        n.__typename === "VideoCallMessage"
      ) {
        var H = n.__typename,
          G = H === "VoiceCallMessage" ? "log:phone-call" : "log:video-call",
          z = n.message_sender.id,
          j = a.other_user_fbid,
          K =
            j == null
              ? null
              : o("MercuryIDs").getParticipantIDFromUserID(
                  z === j ? r("CurrentUser").getID() : j,
                ),
          Q = n.answered;
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: {
            answered: Q == null ? !1 : Q,
            call_capture_attachments: s(t, n, i),
            callee: K,
            caller: o("MercuryIDs").getParticipantIDFromUserID(z),
          },
          log_message_type: G,
        });
      } else if (n.__typename === "ThreadNameMessage")
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: { name: n.thread_name },
          log_message_type: "log:thread-name",
        });
      else if (n.__typename === "ThreadImageMessage") {
        var X = n.image_with_metadata,
          Y;
        if (X == null) Y = null;
        else {
          var J = X.preview;
          Y = {
            metadata: {
              dimensions:
                String(X.original_dimensions.x) +
                ("," + String(X.original_dimensions.y)),
              fbid: X.legacy_attachment_id,
            },
            preview_url: J == null ? null : J.uri,
          };
        }
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: { image: Y },
          log_message_type: "log:thread-image",
        });
      } else if (n.__typename === "ParticipantsAddedMessage") {
        var Z = n.participants_added;
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: {
            added_participants:
              Z == null
                ? []
                : Z.map(function (e) {
                    return o("MercuryIDs").getParticipantIDFromUserID(e.id);
                  }),
          },
          log_message_type: "log:subscribe",
        });
      } else if (n.__typename === "ParticipantLeftMessage") {
        var ee = n.participants_removed;
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: {
            removed_participants:
              ee == null
                ? []
                : ee.map(function (e) {
                    return o("MercuryIDs").getParticipantIDFromUserID(e.id);
                  }),
          },
          log_message_type: "log:unsubscribe",
        });
      } else if (n.__typename === "GenericAdminTextMessage") {
        var te = n.extensible_message_admin_text,
          ne = n.extensible_message_admin_text_type;
        te == null
          ? ne != null &&
            Object.assign($, {
              log_message_body: n.snippet,
              log_message_data: {
                message_type: r("MessagingGenericAdminTextType")[ne],
                untypedData: void 0,
              },
              log_message_type: "log:generic-admin-text",
            })
          : ne != null && Object.assign($, u(t, te, ne, n.snippet, i));
      } else if (
        n.__typename === "P2PPaymentRequestMessage" ||
        n.__typename === "P2PPaymentMessage"
      ) {
        var re = n.amount,
          oe = n.p2p_receiver,
          ae = n.p2p_sender,
          ie = n.message_type;
        Object.assign($, {
          log_message_body: n.snippet,
          log_message_data: {
            formattedAmount: re == null ? null : re.formatted,
            receiverId:
              oe == null
                ? null
                : o("MercuryIDs").getParticipantIDFromUserID(oe.id),
            senderId:
              ae == null
                ? null
                : o("MercuryIDs").getParticipantIDFromUserID(ae.id),
            subtype: ie == null ? null : r("P2PPaymentLogMessageSubtype")[ie],
            transfer_id: n.transfer_id,
          },
          log_message_type: "log:orion",
        });
      }
      return $;
    }
    ((l.unsafeCastBlobAttachments = e),
      (l.unsafeCastExtensibleAttachment = m),
      (l.transformMessage = _));
  },
  98,
);
