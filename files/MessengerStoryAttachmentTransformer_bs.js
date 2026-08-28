__d(
  "MessengerStoryAttachmentTransformer.bs",
  [
    "fbt",
    "CurrentUser",
    "FundsAvailability",
    "LeadGenInfoFieldTypes",
    "MNCommerceCallToActionType",
    "P2PPaymentRequestStatus",
    "P2PTransferStatus",
    "PaymentModulesClient",
    "ServicesCalendarSyncType",
    "URI",
    "bs_belt_Option",
    "bs_caml_option",
    "bs_js_null_undefined",
    "bs_string",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      return e.map(function (e) {
        var t = e.user_confirmation,
          n =
            t == null
              ? [null, null, null, null, !1]
              : [
                  t.cancel_button_label,
                  t.continue_button_label,
                  t.confirmation_message,
                  t.confirmation_title,
                  !0,
                ];
        return {
          action_link: e.action_link,
          action_objects: e.action_objects,
          action_type: r("bs_js_null_undefined").fromOption(
            r("MNCommerceCallToActionType")[e.action_open_type],
          ),
          confirmation_cancel_label: n[0],
          confirmation_continue_label: n[1],
          confirmation_message: n[2],
          confirmation_title: n[3],
          cta_data: e.cta_data,
          id: e.id,
          is_disabled: e.is_disabled,
          is_mutable_by_server: e.is_mutable_by_server,
          logging_token: e.logging_token,
          page_id: e.page_id,
          render_style: e.render_style,
          should_show_user_confirmation: n[4],
          title: e.title,
          webview_metadata: {
            fallback_url: e.webview_metadata.fallback_url,
            messenger_extensions: e.webview_metadata.messenger_extensions,
            webview_height_ratio: e.webview_metadata.webview_height_ratio,
            webview_share_button: e.webview_metadata.webview_share_button,
          },
        };
      });
    }
    function c(t) {
      return t.map(function (t) {
        var n = t.url,
          o =
            n == null
              ? null
              : new (e || (e = r("URI")))(n).getUnqualifiedURI().toString();
        return { title: t.title, uri: o };
      });
    }
    function d(e) {
      return e != null && e !== ""
        ? "#" + r("bs_string").sub(e, 2, (e.length - 2) | 0)
        : null;
    }
    function m(e) {
      return e == null
        ? null
        : { height: e.height, src: e.uri, url: e.uri, width: e.width };
    }
    function p(e, t) {
      var n = t.cover_photo,
        r;
      if (n == null) r = [null, null, null];
      else {
        var o = n.photo.image,
          a =
            o == null
              ? [null, null]
              : [o.uri, { height: o.height, width: o.width }];
        r = [n.photo.id, a[0], a[1]];
      }
      var i = t.location,
        l = i == null ? [null, null] : [i.latitude, i.longitude],
        s = t.overall_star_rating;
      return {
        address: t.address.single_line_full_address,
        category: t.top_category_name,
        coverPhotoDimensions: r[2],
        coverPhotoID: r[0],
        coverPhotoURL: r[1],
        latitude: l[0],
        longitude: l[1],
        name: t.name,
        pageID: t.id,
        priceRange: t.price_range_description,
        rating: s == null ? null : s.value,
        viewerID: e,
      };
    }
    function _(e) {
      var t = e.group_commerce_item_seller,
        n = e.primary_photo,
        r;
      if (n == null) r = null;
      else {
        var o = n.image;
        r = o == null ? null : o.uri;
      }
      return {
        caption: e.group_commerce_item_description.text,
        desc: e.group_commerce_item_description.text,
        owner_id: t == null ? null : t.id,
        price: e.formatted_price.text,
        text: e.group_commerce_item_description.text,
        thumb_url: r,
        title: e.group_commerce_item_title,
        url: e.url,
      };
    }
    function f(e) {
      return {
        app_name: e.application_name,
        artists: e.artist_names,
        audio_url: e.audio_url,
        duration_ms: e.duration_ms,
        title: e.music_title,
      };
    }
    function g(e) {
      return {
        canDonate: e.canDonate,
        focusedCoverPhoto: e.focusedCoverPhoto,
        fundraiserDetailedProgressText: e.fundraiserDetailedProgressText,
        fundraiserID: e.fundraiserID,
        fundraiserSubtitleText: e.fundraiserSubtitleText,
        hasViewerDonated: e.hasViewerDonated,
      };
    }
    function h(e) {
      return {
        attach_type: "file",
        extension: e.extension,
        filesize: e.filesize,
        id: e.id,
        is_malicious: e.is_malicious,
        name: e.name,
        url: e.uri,
      };
    }
    function y(e) {
      return {
        aspect_ratio: e.aspect_ratio,
        attach_type: "video",
        extension: e.extension,
        filesize: e.filesize,
        height: e.height,
        id: e.id,
        name: e.filename,
        url: e.playable_url,
        url_shimhash: e.url_shimhash,
        width: e.width,
        preview_url: e.preview_url,
      };
    }
    function C(e) {
      return {
        call_to_actions: u(e.call_to_actions),
        default_action: e.default_action,
        desc: e.desc,
        id: e.id,
        image_aspect_ratio: e.image_aspect_ratio,
        item_url: e.item_url,
        metalines: {
          metaline_1: e.first_metaline,
          metaline_2: e.second_metaline,
          metaline_3: e.third_metaline,
        },
        name: e.name,
        source: e.source,
        text: e.desc,
        thumb_url: e.thumb_url,
        title: e.name,
      };
    }
    function b(e) {
      var t = function (t) {
          var e = t.services_vertical_info;
          if (e != null)
            return {
              isEligibleForAppointmentCalendar:
                e.is_eligible_for_appointment_calendar,
              isEligibleForMBSCalendar: e.is_eligible_for_mbs_calendar,
              isPageSPEnabled: e.is_page_sp_enabled,
              timezoneName: e.time_zone_name,
            };
        },
        n = e.page,
        o =
          n == null
            ? [void 0, void 0, void 0]
            : [
                n.id,
                r("bs_js_null_undefined").fromOption(
                  r("ServicesCalendarSyncType")[n.calendar_sync_type],
                ),
                t(n),
              ],
        a = e.native_component_flow_request,
        i;
      if (a == null) i = null;
      else {
        var l = a.page,
          u = a.page,
          c = a.page,
          d;
        if (c == null) d = void 0;
        else {
          var m = c.profile_picture;
          d = m == null ? void 0 : m.uri;
        }
        var p = a.suggested_time_range,
          _ = a.user,
          f = a.user,
          g = a.job_application,
          h = a.user,
          y;
        if (h == null) y = void 0;
        else {
          var C = h.profile_picture;
          y = C == null ? void 0 : C.uri;
        }
        i = {
          additionalInfo: a.additional_info,
          appointmentAddress: a.appointment_address,
          archivedStatus: a.archived_status,
          availability: a.availability,
          consumer_phone_number: a.consumer_phone_number,
          generalInfo: a.service_general_info,
          hasSavedToCalendar: a.has_saved_to_calendar,
          id: a.id,
          jobApplicationID: g != null ? g.id : void 0,
          pageID: l != null ? l.id : void 0,
          pageName: u != null ? u.name : void 0,
          pageProfilePic: d,
          preferredTimeRange: p == null ? null : { end: p.end, start: p.start },
          productItems: a.services_product_items,
          recurMessage: a.recur_message,
          reminderBubbleText: a.reminder_bubble_text,
          requestAdminApprovalType: a.request_admin_approval_type,
          requestedTime: a.requested_time,
          requestFlowType: a.request_flow_type,
          specialRequest: a.special_request,
          status: a.booking_status_value,
          statusLabel: a.status,
          userID: _ != null ? _.id : void 0,
          username: f != null ? f.short_name : void 0,
          userProfilePic: y,
        };
      }
      var b = e.message_bubble_type,
        v;
      switch (b) {
        case "ATTENDANCE_UPDATE":
          v = ["Attendance Update", s._(/*BTDS*/ "Attendance-update")];
          break;
        case "CANCELLED":
          v = ["Cancelled", s._(/*BTDS*/ "Canceled")];
          break;
        case "DECLINED":
          v = ["Declined", s._(/*BTDS*/ "Declined")];
          break;
        case "NO_SHOW":
          v = ["No Show", s._(/*BTDS*/ "No-show")];
          break;
        case "REQUESTED":
          v = ["Requested", s._(/*BTDS*/ "Appointment request")];
          break;
        case "SCHEDULEED":
          v = ["Scheduled", s._(/*BTDS*/ "Scheduled")];
          break;
        default:
          throw {
            _1: "Erroneous target status",
            Error: r("err")("Erroneous target status"),
            RE_EXN_ID: "Invalid_argument",
          };
      }
      var S = e.user;
      return {
        calendarSyncType: o[1],
        id: e.id,
        ls_xma_subtitle: e.ls_xma_subtitle,
        ls_xma_title: e.ls_xma_title,
        pageID: o[0],
        requestMetadata: i,
        servicesVerticalInfo: o[2],
        status: v[0],
        statusLabel: v[1],
        userID: S == null ? "0" : S.id,
        viewerID: r("CurrentUser").getAccountID(),
      };
    }
    function v(e) {
      return {
        has_booking_request_created: e.has_booking_request_created,
        id: e.id,
        page_id: e.page.id,
        time_ranges: e.formatted_available_time_ranges.map(function (e) {
          return { end: e.end, start: e.start };
        }),
        user_id: e.consumer.id,
      };
    }
    function S(e) {
      return { id: e.id };
    }
    function R(e) {
      return {
        coordinate: e.coordinate,
        expiration_time: e.expiration_time,
        is_expired: e.is_expired,
        live_location_id: e.live_location_id,
        location_title: e.location_title,
        sender: e.sender,
        sender_destination: e.sender_destination,
        stop_reason: e.stop_reason,
      };
    }
    function L(e) {
      return {
        sender_wec_name: e.sender_wec_name,
        sender_wec_number: e.sender_wec_number,
        sender_wec_number_fbid: e.sender_wec_number_fbid,
        sender_wec_number_formated: e.sender_wec_number_formated,
        templated_message_body: e.templated_message_body,
        templated_message_btn1_text: e.templated_message_btn1_text,
        templated_message_btn1_type: e.templated_message_btn1_type,
        templated_message_btn2_text: e.templated_message_btn2_text,
        templated_message_btn2_type: e.templated_message_btn2_type,
        templated_message_btn3_text: e.templated_message_btn3_text,
        templated_message_btn3_type: e.templated_message_btn3_type,
        templated_message_buttons: e.templated_message_buttons.map(E),
        templated_message_footer: e.templated_message_footer,
        templated_message_header_media: e.templated_message_header_media,
        templated_message_header_text: e.templated_message_header_text,
        templated_message_header_type: e.templated_message_header_type,
        templated_message_offer_text: e.templated_message_offer_text,
        templated_message_offer_has_expiration:
          e.templated_message_offer_has_expiration,
        templated_message_offer_expiration_time:
          e.templated_message_offer_expiration_time,
        templated_message_offer_is_offer_code_personalized:
          e.templated_message_offer_is_offer_code_personalized,
        templated_message_cards: e.templated_message_cards.map(k),
        templated_message_id: e.templated_message_id,
        templated_message_name: e.templated_message_name,
        wec_referral_body: e.wec_referral_body,
        wec_referral_headline: e.wec_referral_headline,
        wec_referral_media: e.wec_referral_media,
        wec_referral_media_type: e.wec_referral_media_type,
        wec_referral_url: e.wec_referral_url,
        wec_referral_has_admin_text: e.wec_referral_has_admin_text,
        wec_sticker_id: e.wec_sticker_id,
      };
    }
    function E(e) {
      return { text: e.text, type: e.type };
    }
    function k(e) {
      return {
        title_type: e.title_type,
        sample_handle: e.sample_handle,
        body: e.body,
        button: E(e.button),
      };
    }
    function I(e) {
      var t = e.preview,
        n = t == null ? null : t.uri,
        r = e.large_preview,
        o = r == null ? null : r.uri;
      return {
        attach_type: "photo",
        extension: e.extension,
        id: e.id,
        large_preview: e.large_preview,
        large_preview_url: o,
        preview: e.preview,
        preview_url: n,
      };
    }
    function T(e) {
      return {
        attach_type: "audio",
        duration: e.duration,
        extension: e.extension,
        filesize: e.filesize,
        id: e.id,
        name: e.filename,
        url: e.playable_url,
        url_shimhash: e.url_shimhash,
      };
    }
    function D(e) {
      var t = e.first_metaline;
      return {
        call_to_actions: u(e.call_to_actions),
        default_action: e.default_action,
        desc: e.description,
        id: e.id,
        image_aspect_ratio: e.image_aspect_ratio,
        item_url: e.target_url,
        media_blob_attachments: e.media_blob_attachments,
        metalines: t == null ? {} : { metaline_1: t },
        name: e.name,
        source: e.source_name,
        text: e.description,
        thumb_url: e.image_url,
        title: e.name,
      };
    }
    function x(e) {
      var t = e.business_items.nodes.map(D),
        n = u(e.call_to_actions);
      return { call_to_actions: n, items: t, message: e.message };
    }
    function $(e) {
      return {
        call_to_actions: u(e.call_to_actions),
        items: e.promotion_items.nodes.map(D),
        message: e.message,
      };
    }
    function P(e, t) {
      return {
        actor_id: e,
        buyer_name: t.buyer_name,
        click_action: t.click_action,
        components: t.components,
        invoicer_id: t.invoicer_id,
        is_last_attachment: t.is_last_attachment,
        is_viewer_seller: t.is_viewer_seller,
        item_list: t.item_list.map(function (e) {
          return {
            description: e.description,
            image_urls: e.images.map(function (e) {
              return e.uri;
            }),
            item_id: e.item_id,
            name: e.name,
            quantity: e.quantity,
            subtitle: e.subtitle,
            unit_price: e.unit_price,
          };
        }),
        payment_call_to_actions: t.payment_call_to_actions,
        payment_modules_client: r("bs_js_null_undefined").fromOption(
          r("PaymentModulesClient")[t.payment_modules_client],
        ),
        payment_snippet: t.payment_snippet,
        payment_status_icon: t.payment_status_icon,
        payment_sub_statuses: t.payment_sub_statuses,
        payment_total: t.payment_total,
        product_detail: t.product_detail,
        should_show_new_xma: t.should_show_new_xma,
        summary_action: t.summary_action,
        user_facing_payment_status: t.user_facing_payment_status,
      };
    }
    var N = function (t) {
      var e = n("LeadGenInfoFieldTypes"),
        r = {},
        o = [];
      for (var a of t.field_data_list) {
        var i = a.field_type,
          l = a.label,
          s = a.values;
        i === e.CUSTOM || i === e.ZIP
          ? o.push({ label: l, values: s })
          : (r[i] = { label: l, values: s });
      }
      return ((r.questions = o), r);
    };
    function M(e, t) {
      var n = t.invite_recipient,
        r = n == null ? null : n.id,
        o = t.invite_sender,
        a = o == null ? null : o.id;
      return {
        is_viewer_recipient: e === r,
        quick_invite_id: t.id,
        recipient_id: r,
        sender_id: a,
      };
    }
    function w(e) {
      var t = function (t) {
          return t == null ? null : t.uri;
        },
        n = e.listing_category,
        r = n == null ? [null, null] : [n.offer_image, n.request_image];
      return {
        listingType: e.listing_type,
        mapURI: t(e.map_image),
        offerURI: t(r[0]),
        requestURI: t(r[1]),
      };
    }
    function A(e) {
      return {
        bubbleView: e.bubble_view,
        receiver: e.receiver,
        sender: e.sender,
        transfer_id: e.transfer_id,
      };
    }
    function F(e) {
      var t = e.receiver_profile,
        n;
      if (t == null) n = null;
      else {
        var o = t.profile_picture;
        n = {
          full_name: t.name,
          id: t.id,
          name: t.short_name,
          picture: o == null ? null : o.uri,
          profile_url: t.url,
        };
      }
      var a = e.sender,
        i;
      if (a == null) i = {};
      else {
        var l = a.profile_picture;
        i = {
          full_name: a.full_name,
          id: a.id,
          name: a.name,
          picture: l == null ? null : l.uri,
          profile_uri: a.url,
        };
      }
      var s = e.transfer_context,
        u;
      if (s == null) u = [null, null];
      else {
        var c = s.transfer_theme;
        u = [
          s.memo_images.map(function (e) {
            var t = e.image;
            return t == null ? null : t.uri;
          }),
          c == null ? null : c.id,
        ];
      }
      var d = e.platform_item,
        m =
          d == null
            ? null
            : {
                description: d.description,
                image: d.photos.map(function (e) {
                  var t = e.image;
                  return t == null ? null : t.uri;
                }),
                name: d.name,
                refURL: d.url,
              },
        p = e.amount_fb_discount;
      return {
        amount: e.transaction_amount.amount,
        amountWithSymbol: e.transaction_amount.formatted_amount,
        bubbleView: e.bubble_view,
        completedTime: e.completedTime,
        creationTime: e.creationTime,
        currencyCode: e.currency_amount.currency,
        discountAmount: p == null ? null : p.formatted,
        fundsAvailability: r("bs_js_null_undefined").fromOption(
          r("FundsAvailability")[e.funds_availability],
        ),
        groupThreadFBID: e.group_thread_fbid,
        memoPhotoURLs: u[0],
        memoText: e.memo_text,
        platform_item: m,
        receiver: n,
        sender: i,
        status: r("bs_js_null_undefined").fromOption(
          r("P2PTransferStatus")[e.transfer_status],
        ),
        statusDescription: { markup: e.status_description },
        themeID: u[1],
        transfer_id: e.transfer_id,
        updatedTime: e.updatedTime,
      };
    }
    function O(e) {
      var t = e.requester,
        n;
      if (t == null) n = void 0;
      else {
        var o = t.profile_picture;
        n = {
          full_name: t.name,
          id: t.id,
          name: t.short_name,
          picture: o == null ? null : o.uri,
          profile_url: t.url,
        };
      }
      var a = e.requestee,
        i;
      if (a == null) i = void 0;
      else {
        var l = a.profile_picture;
        i = {
          full_name: a.name,
          id: a.id,
          name: a.short_name,
          picture: l == null ? null : l.uri,
          profile_url: a.url,
        };
      }
      var s = r("P2PPaymentRequestStatus")[e.request_status],
        u = e.transfer,
        c = u == null ? [null, ""] : [F(u), u.id],
        d = e.request_theme;
      return {
        amount: e.transaction_amount.amount,
        amountWithSymbol: e.amount.formatted,
        bubbleView: e.bubble_view,
        creationTime: e.creation_time,
        currency: e.amount.currency,
        currentStatus: s,
        groupThreadFBID: e.group_thread_fbid,
        id: e.id,
        memoText: e.memo_text,
        requestee: i,
        requester: n,
        statusDescription: { markup: e.status_description },
        themeID: d == null ? null : d.id,
        transfer: c[0],
        transferID: c[1],
        updatedTime: e.updated_time,
      };
    }
    function B(e) {
      var t = O({
          amount: e.amount,
          bubble_view: e.bubble_view,
          creation_time: e.creation_time,
          group_thread_fbid: e.group_thread_fbid,
          id: e.id,
          memo_text: e.memo_text,
          request_status: e.request_status,
          request_theme: e.request_theme,
          requestee: e.requestee,
          requester: e.requester,
          status_description: e.status_description,
          transaction_amount: e.transaction_amount,
          transfer: e.transfer,
          updated_time: e.updated_time,
        }),
        n = { individualRequests: e.individual_requests.map(O) };
      return Object.assign(t, n);
    }
    function W(e, t, n) {
      var o = t.media,
        a = o == null ? null : o.animated_image,
        i = o == null ? null : o.image,
        l = {};
      t.properties.forEach(function (e) {
        var t = e.value;
        l[e.key] = t == null ? null : t.text;
      });
      var s = t.target,
        u;
      if (s == null) u = null;
      else
        switch (s.TAG) {
          case 0:
            u = w(s._0);
            break;
          case 1:
            u = A(s._0);
            break;
          case 2:
            u = F(s._0);
            break;
          case 3:
            u = B(s._0);
            break;
          case 4:
            u = P(e, s._0);
            break;
          case 5:
            u = $(s._0);
            break;
          case 6:
            u = x(s._0);
            break;
          case 8:
            u = N(s._0);
            break;
          case 9:
            u = R(s._0);
            break;
          case 10:
            u = M(e, s._0);
            break;
          case 11:
            u = b(s._0);
            break;
          case 12:
            u = v(s._0);
            break;
          case 13:
            u = S(s._0);
            break;
          case 14:
            var d = s._0,
              m = d.genie_sender,
              D =
                m == null
                  ? [null, null]
                  : [m.messaging_actor.id, m.messaging_actor.name],
              O = D[0],
              W = {
                action_links: [],
                deduplication_key: null,
                description: null,
                media: null,
                messaging_attribution: null,
                messenger_call_to_actions: [],
                messenger_generic_xma_template_extra_info: null,
                properties: [],
                source: null,
                style_list: [],
                subattachments: [],
                target: null,
                title_with_entities: null,
                url: null,
                xma_layout_info: null,
              },
              U = t.media,
              V;
            if (U == null) V = null;
            else {
              var H = U.pack;
              if (H == null) {
                var G = d.story_attachment;
                V =
                  G == null || n == null
                    ? null
                    : q(e, {
                        genie_attachment: {
                          genie_message: { story_attachment: W },
                        },
                        legacy_attachment_id: O,
                        story_attachment: {
                          action_links: n.action_links,
                          deduplication_key: n.deduplication_key,
                          description: n.description,
                          media: n.media,
                          messaging_attribution: n.messaging_attribution,
                          messenger_call_to_actions:
                            n.messenger_call_to_actions,
                          messenger_generic_xma_template_extra_info:
                            n.messenger_generic_xma_template_extra_info,
                          properties: n.properties,
                          source: n.source,
                          style_list: n.style_list,
                          subattachments: n.subattachments,
                          target: n.target,
                          title_with_entities: n.title_with_entities,
                          url: n.url,
                          xma_layout_info: n.xma_layout_info,
                        },
                      });
              } else
                V =
                  n == null
                    ? null
                    : q(e, {
                        genie_attachment: {
                          genie_message: { story_attachment: W },
                        },
                        legacy_attachment_id: O,
                        story_attachment: W,
                      });
            }
            u = { attachment: V, genie_id: O, genie_name: D[1] };
            break;
          case 16:
            u = f(s._0);
            break;
          case 18:
            u = C(s._0);
            break;
          case 20:
            u = g(s._0);
            break;
          case 23:
            u = _(s._0);
            break;
          case 24:
            u = p(e, s._0);
            break;
          case 36:
            u = L(s._0);
            break;
          case 37:
            u = I(s._0);
            break;
          case 38:
            u = T(s._0);
            break;
          case 39:
            u = h(s._0);
            break;
          case 40:
            u = y(s._0);
            break;
          case 60:
            u = k(s._0);
            break;
          case 61:
            u = E(s._0);
            break;
          default:
            u = s._0;
        }
      var z = t.target,
        j = z == null || z.TAG !== 5 ? null : 0,
        K = t.description,
        Q = t.source,
        X = t.title_with_entities;
      return {
        action_links: c(t.action_links),
        deduplication_key: t.deduplication_key,
        description: K == null ? null : K.text,
        label: j,
        media: {
          animated_image: a == null ? null : a.uri,
          animated_image_size:
            a == null
              ? { height: null, width: null }
              : { height: a.height, width: a.width },
          duration: o == null ? null : o.playable_duration,
          image: i == null ? null : i.uri,
          image_size:
            i == null
              ? { height: null, width: null }
              : { height: i.height, width: i.width },
          playable: o == null ? null : o.is_playable,
          source: o == null ? null : o.playable_url,
        },
        messaging_attribution: t.messaging_attribution,
        messenger_ctas: t.messenger_call_to_actions.map(function (e) {
          return {
            action_open_type: r("bs_js_null_undefined").fromOption(
              r("MNCommerceCallToActionType")[e.action_open_type],
            ),
            action_title: e.title,
            action_url: e.action_link,
            id: e.id,
            is_disabled: e.is_disabled,
            is_high_confidence: r("bs_belt_Option").getWithDefault(
              r("bs_caml_option").nullable_to_opt(e.is_high_confidence),
              !1,
            ),
            is_mutable_by_server: e.is_mutable_by_server,
            native_url: e.native_url,
            page_id: r("bs_belt_Option").getWithDefault(
              r("bs_caml_option").nullable_to_opt(e.page_id),
              "",
            ),
            webview_metadata: {
              fallback_url: e.webview_metadata.fallback_url,
              messenger_extensions: e.webview_metadata.messenger_extensions,
              webview_height_ratio: e.webview_metadata.webview_height_ratio,
              webview_share_button: e.webview_metadata.webview_share_button,
            },
          };
        }),
        messenger_generic_xma_template_extra_info:
          t.messenger_generic_xma_template_extra_info,
        properties: l,
        source: Q == null ? null : Q.text,
        style_list: t.style_list,
        target: u,
        title: X == null ? null : X.text,
        uri: t.url,
        xma_layout_info: t.xma_layout_info,
      };
    }
    function q(e, t) {
      var n = t.genie_attachment,
        r;
      if (n == null) r = null;
      else {
        var o = n.genie_message;
        if (o == null) r = null;
        else {
          var a = o.story_attachment;
          r =
            a == null
              ? null
              : {
                  action_links: a.action_links,
                  deduplication_key: a.deduplication_key,
                  description: a.description,
                  media: a.media,
                  messaging_attribution: a.messaging_attribution,
                  messenger_call_to_actions: a.messenger_call_to_actions,
                  messenger_generic_xma_template_extra_info:
                    a.messenger_generic_xma_template_extra_info,
                  properties: a.properties,
                  source: a.source,
                  style_list: a.style_list,
                  subattachments: a.subattachments,
                  target: a.target,
                  title_with_entities: a.title_with_entities,
                  url: a.url,
                  xma_layout_info: a.xma_layout_info,
                };
        }
      }
      var i = t.story_attachment,
        l;
      if (i == null) l = null;
      else {
        var s = {
            action_links: [],
            deduplication_key: null,
            description: null,
            media: null,
            messaging_attribution: null,
            messenger_call_to_actions: [],
            messenger_generic_xma_template_extra_info: null,
            properties: [],
            source: null,
            style_list: [],
            subattachments: [],
            target: null,
            title_with_entities: null,
            url: null,
            xma_layout_info: null,
          },
          u = {
            share_id: t.legacy_attachment_id,
            subattachments: i.subattachments.map(function (t) {
              return W(e, t, s);
            }),
          },
          c = {
            action_links: i.action_links,
            deduplication_key: i.deduplication_key,
            description: i.description,
            media: i.media,
            messaging_attribution: i.messaging_attribution,
            messenger_call_to_actions: i.messenger_call_to_actions,
            messenger_generic_xma_template_extra_info:
              i.messenger_generic_xma_template_extra_info,
            properties: i.properties,
            source: i.source,
            style_list: i.style_list,
            target: i.target,
            title_with_entities: i.title_with_entities,
            url: i.url,
            xma_layout_info: i.xma_layout_info,
          },
          d =
            r == null
              ? {
                  action_links: i.action_links,
                  deduplication_key: i.deduplication_key,
                  description: i.description,
                  media: i.media,
                  messaging_attribution: i.messaging_attribution,
                  messenger_call_to_actions: i.messenger_call_to_actions,
                  messenger_generic_xma_template_extra_info:
                    i.messenger_generic_xma_template_extra_info,
                  properties: i.properties,
                  source: i.source,
                  style_list: i.style_list,
                  subattachments: i.subattachments,
                  target: i.target,
                  title_with_entities: i.title_with_entities,
                  url: i.url,
                  xma_layout_info: i.xma_layout_info,
                }
              : {
                  action_links: r.action_links,
                  deduplication_key: r.deduplication_key,
                  description: r.description,
                  media: r.media,
                  messaging_attribution: r.messaging_attribution,
                  messenger_call_to_actions: r.messenger_call_to_actions,
                  messenger_generic_xma_template_extra_info:
                    r.messenger_generic_xma_template_extra_info,
                  properties: r.properties,
                  source: r.source,
                  style_list: r.style_list,
                  subattachments: r.subattachments,
                  target: r.target,
                  title_with_entities: r.title_with_entities,
                  url: r.url,
                  xma_layout_info: r.xma_layout_info,
                };
        l = Object.assign(u, W(e, c, d));
      }
      return {
        app_attribution: null,
        attach_type: "share",
        icon_type: null,
        large_preview_height: null,
        large_preview_url: null,
        large_preview_width: null,
        metadata: null,
        name: null,
        preview_height: null,
        preview_url: null,
        preview_width: null,
        rel: null,
        share: l,
        thumbnail_url: null,
        url: null,
      };
    }
    l.getExtensibleAttachmentPayload = q;
  },
  226,
);
