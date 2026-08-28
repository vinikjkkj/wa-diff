__d(
  "MessengerServerPayloadTransformer.bs",
  [
    "fbt",
    "CurrentUser",
    "FBIDForMercury",
    "GenderConst",
    "MercuryIDs",
    "MessageThreadUnsendabilityStatus.bs",
    "MessagingThreadType",
    "MessengerAttachmentTransformer.bs",
    "MessengerGroupAdminModelStatus.bs",
    "MessengerGroupThreadSubType",
    "MessengerGroupsSyncStatus.bs",
    "MessengerMessageTransformer.bs",
    "MessengerObjectAssociationType",
    "MessengerThreadCannotReplyReason.bs",
    "URI",
    "bs_array",
    "bs_belt_Option",
    "bs_caml_array",
    "bs_caml_format",
    "bs_caml_option",
    "bs_js_json",
    "bs_js_null_undefined",
    "bs_string",
    "getByPath",
    "isMessengerDotComURI",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e) {
      var t = e.location_coordinates,
        n = t == null ? [null, null] : [t.latitude, t.longitude],
        o = e.location_page,
        a;
      if (o == null) a = null;
      else {
        var i = o.address;
        a = i == null ? null : i.full_address;
      }
      var l = e.allows_rsvp ? 1 : 0,
        s = r("bs_array").fold_left(
          function (e, t) {
            return ((e[t.node.id] = t.guest_list_state), e);
          },
          {},
          e.event_reminder_members.edges,
        ),
        u = e.lightweight_event_creator;
      return {
        creator_id: u == null ? null : u.id,
        event_members: s,
        event_time: e.time,
        event_type: e.lightweight_event_type,
        latitude: n[0],
        location_address: a,
        location_name: e.location_name,
        longitude: n[1],
        note: e.note,
        oid: e.id,
        related_event: e.related_event,
        repeat_mode: e.repeat_mode,
        seconds_to_notify_before: e.seconds_to_notify_before,
        status: e.lightweight_event_status,
        title: e.event_title,
        track_rsvp: l,
      };
    }
    function c(t) {
      var n = t.associated_object;
      if (n == null) return null;
      var o = n.action_link,
        a = n.group_general_chat,
        i = n.group_saves,
        l = n.profile_picture,
        s = n.verse_group_link;
      return {
        action_link:
          o == null
            ? null
            : r("CurrentUser").isWorkUser()
              ? o
              : new (e || (e = r("URI")))(o).setDomain("www.facebook.com"),
        approval_mode_toggleable: n.approval_mode_toggleable,
        event_place: n.event_place,
        group_general_chat: a == null ? null : { id: a.id },
        group_saves: i == null ? { count: 0 } : { count: i.count },
        id: n.id,
        mentorship_program: n.mentorship_program,
        name: n.name,
        privacy_mode: n.privacy_mode,
        profile_picture: l == null ? null : { uri: l.uri },
        room_type: n.room_type,
        start_timestamp: n.start_timestamp,
        verse_group_link:
          s == null
            ? null
            : new (e || (e = r("URI")))(s).setDomain("www.facebook.com"),
      };
    }
    function d(e) {
      var t = e.related_page_thread;
      if (t == null) return null;
      var n = t.custom_thread_tags.nodes.map(function (e) {
          return { color: e.color, id: e.id, name: e.name };
        }),
        r = t.custom_thread_labels.nodes.map(function (e) {
          return {
            color: e.label_color,
            data_silo: e.data_silo,
            id: e.id,
            label_source: e.label_source,
            name: e.name,
            is_ad_response_label: e.is_ad_response_label,
          };
        }),
        o = t.corp_thread_labels.nodes.map(function (e) {
          return {
            color: e.label_color,
            data_silo: e.data_silo,
            id: e.id,
            name: e.name,
            is_ai_label: e.is_ai_label,
            is_ai_handoff_label: e.is_ai_handoff_label,
            is_ad_response_label: e.is_ad_response_label,
          };
        }),
        a = t.page,
        i = a == null ? null : a.id;
      return {
        corpLabels: o,
        customLabels: r,
        customTags: n,
        flagged: t.is_flagged,
        pageID: i,
      };
    }
    function m(e) {
      var t = e.thread_key.other_user_id;
      if (t == null) return !1;
      var n = e.all_participants.edges;
      return r("bs_array").fold_left(
        function (e, n) {
          var r = n.node.messaging_actor;
          return r.id === t ? r.__typename === "User" : e;
        },
        !1,
        n,
      );
    }
    function p(e) {
      if (e.length === 0) return null;
      var t = {};
      return (
        e.forEach(function (e) {
          var n = e.nickname;
          if (n != null) {
            t[e.participant_id] = n;
            return;
          }
        }),
        t
      );
    }
    function _(e) {
      return "#" + r("bs_string").sub(e, 2, (e.length - 2) | 0);
    }
    function f(e) {
      return e == null || e === "" ? null : _(e);
    }
    function g(e) {
      return e.thread_key.thread_fbid;
    }
    function h(e) {
      return e.thread_key.other_user_id;
    }
    function y(e) {
      return r("bs_caml_option").nullable_to_opt(
        r("getByPath")(e, ["messages", "page_info"]),
      );
    }
    function C(e) {
      var t = r("CurrentUser").isWorkUser()
        ? s._(/*BTDS*/ "Workplace user")
        : s._(/*BTDS*/ "Facebook user");
      return {
        accepts_messenger_user_feedback: !1,
        big_image_src: null,
        company_name: null,
        employee: !1,
        fbid: o("FBIDForMercury").ofStringExn(e),
        gender: r("GenderConst").UNKNOWN_SINGULAR,
        href: null,
        id: "fbid:" + e,
        image_src: null,
        instant_game_channel: null,
        is_aloha_proxy_confirmed: !1,
        is_business_enabled: !1,
        is_facebook_blocked: !0,
        is_friend: !1,
        is_messenger_blocked: !1,
        is_messenger_ignored: null,
        is_messenger_platform_bot: !1,
        is_messenger_user: !1,
        is_subscribed_to_page_updates: !1,
        is_viewer_managing_parent: !1,
        message_capabilities2: null,
        messenger_account_status_category: null,
        name: t,
        short_name: t,
        square_image_src: null,
        timezone: null,
        title: null,
        user_type: null,
        vanity: null,
        verification_status: null,
        wec_group_admins: [],
        wec_group_creation_time: null,
        wec_group_invite_link: null,
        wec_group_participant_count: null,
        wec_group_participants: [],
        work_foreign_entity_info: null,
      };
    }
    function b(t) {
      var n = t.profile_picture_url,
        a;
      if (n == null) {
        var i = t.big_image_src;
        a = i == null ? null : i.uri;
      } else a = n;
      var l = t.accepts_messenger_user_feedback,
        s = t.work_info,
        u;
      if (s == null) u = null;
      else {
        var c = s.work_community,
          d = c == null ? null : c.name,
          m = t.work_foreign_entity_info;
        u = d == null || m == null || m.type !== "FOREIGN" ? null : d;
      }
      var p = t.is_employee,
        _ = t.gender,
        f = t.url,
        g;
      if (f == null) g = null;
      else {
        var h = r("isMessengerDotComURI")(new (e || (e = r("URI")))(f));
        g = h
          ? new (e || (e = r("URI")))(f)
              .getUnqualifiedURI()
              .setDomain("www.facebook.com")
              .setProtocol("https")
              .toString()
          : f;
      }
      var y = t.is_aloha_proxy_confirmed,
        C = t.is_blocked_by_viewer,
        b = t.is_viewer_friend,
        v = t.is_message_blocked_by_viewer,
        S = t.is_messenger_platform_bot,
        R = t.is_messenger_user,
        L = t.is_viewer_subscribed_to_message_updates,
        E = t.is_viewer_managing_parent,
        k = t.message_capabilities2_str,
        I = t.messenger_account_status_category,
        T = t.work_info,
        D;
      if (T == null) D = null;
      else {
        var x = T.work_community,
          $ = x == null ? null : x.name,
          P = T.job_title;
        D =
          $ == null
            ? P == null
              ? null
              : P
            : P == null || P.length === 0
              ? $
              : "" + P + " \u2022 " + $;
      }
      var N = t.__typename,
        M;
      switch (N) {
        case "NeoApprovedUser":
          M = "parent_approved_user";
          break;
        case "Page":
          M = "page";
          break;
        case "ReducedMessagingActor":
          M = "guest";
          break;
        case "User":
          M = "user";
          break;
        case "WECCustomer":
          M = "wec";
          break;
        default:
          M = null;
      }
      var w = t.wec_group_admins,
        A = t.wec_group_creation_time,
        F = t.wec_group_invite_link,
        O = t.wec_group_participants,
        B = t.wec_group_participants,
        W = t.work_foreign_entity_info;
      return {
        accepts_messenger_user_feedback: l == null ? !1 : l,
        big_image_src: a,
        company_name: u,
        employee: p == null ? !1 : p,
        fbid: t.id,
        gender:
          _ == null
            ? r("GenderConst").NOT_A_PERSON
            : _ === "MALE"
              ? r("GenderConst").MALE_SINGULAR
              : _ === "FEMALE"
                ? r("GenderConst").FEMALE_SINGULAR
                : r("GenderConst").NOT_A_PERSON,
        href: g,
        id: "fbid:" + t.id,
        image_src: a,
        instant_game_channel:
          t.__typename === "Page" ? t.instant_game_channel : null,
        is_aloha_proxy_confirmed: y == null ? !1 : y,
        is_business_enabled: t.__typename === "Page",
        is_facebook_blocked: C == null ? !1 : C,
        is_friend: b == null ? !1 : b,
        is_messenger_blocked: v == null ? !1 : v,
        is_messenger_ignored: null,
        is_messenger_platform_bot: S == null ? !1 : S,
        is_messenger_user: R == null ? !1 : R,
        message_capabilities2: k == null ? null : k,
        messenger_account_status_category: I == null ? null : I,
        is_subscribed_to_page_updates: L == null ? !0 : L,
        is_viewer_managing_parent: E == null ? !1 : E,
        name: t.name,
        short_name: r("bs_belt_Option").getWithDefault(
          r("bs_caml_option").nullable_to_opt(t.short_name),
          t.name,
        ),
        square_image_src: null,
        timezone: null,
        title: D,
        user_type: M,
        vanity: t.username,
        verification_status: t.verification_status,
        wec_group_admins:
          w == null
            ? []
            : w.nodes.map(function (e) {
                return {
                  id: o("MercuryIDs").getParticipantIDFromUserID(
                    e.messaging_actor.id,
                  ),
                  name: e.messaging_actor.name,
                };
              }),
        wec_group_creation_time: A == null ? null : A,
        wec_group_invite_link: F == null ? null : F,
        wec_group_participant_count: O == null ? null : O.count,
        wec_group_participants:
          B == null
            ? []
            : B.nodes.map(function (e) {
                return {
                  id: o("MercuryIDs").getParticipantIDFromUserID(
                    e.messaging_actor.id,
                  ),
                  name: e.messaging_actor.name,
                };
              }),
        work_foreign_entity_info: W == null ? null : W,
      };
    }
    function v(e) {
      return e.all_participants.edges.map(function (e) {
        return b(e.node.messaging_actor);
      });
    }
    function S(e, t) {
      var n = t.read_receipts;
      if (n != null) {
        var o = {};
        return (
          n.nodes.forEach(function (t) {
            var n = t.actor;
            if (n != null && e !== n.id) {
              o[n.id] = {
                action: r("bs_caml_format").caml_float_of_string(t.action),
                watermark: r("bs_caml_format").caml_float_of_string(
                  t.watermark,
                ),
              };
              return;
            }
          }),
          r("bs_caml_option").some(o)
        );
      }
    }
    function R(e) {
      var t = e.delivery_receipts;
      return t == null
        ? []
        : t.nodes.sort(function (e, t) {
            var n = r("bs_caml_format").caml_float_of_string(
                e.timestamp_precise,
              ),
              o = r("bs_caml_format").caml_float_of_string(t.timestamp_precise);
            return n > o ? -1 : n === o ? 0 : 1;
          });
    }
    function L(e, t, n) {
      var r = t.messages;
      if (r != null)
        return r.nodes.map(function (r) {
          return o("MessengerMessageTransformer.bs").transformMessage(
            e,
            r,
            {
              folder: t.folder.toLowerCase(),
              other_user_fbid: t.thread_key.other_user_id,
              thread_fbid: t.thread_key.thread_fbid,
              thread_id: null,
            },
            n,
          );
        });
    }
    function E(e, t, n) {
      var a = t.last_message.nodes.map(function (e) {
          var t = o("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(
              e,
            ),
            n = e.extensible_attachment,
            r;
          if (n == null) r = null;
          else {
            var a = n.genie_attachment,
              i;
            if (a == null) i = null;
            else {
              var l = a.genie_message,
                s;
              if (l == null) s = null;
              else {
                var u = l.story_attachment;
                s = {
                  story_attachment:
                    u == null
                      ? null
                      : o(
                          "MessengerMessageTransformer.bs",
                        ).unsafeCastExtensibleAttachment(u),
                };
              }
              i = { genie_message: s };
            }
            var c = n.story_attachment;
            r = {
              genie_attachment: i,
              legacy_attachment_id: n.legacy_attachment_id,
              story_attachment:
                c == null
                  ? null
                  : o(
                      "MessengerMessageTransformer.bs",
                    ).unsafeCastExtensibleAttachment(c),
            };
          }
          return {
            blob_attachments: t,
            extensible_attachment: r,
            extensible_message_admin_text: e.extensible_message_admin_text,
            extensible_message_admin_text_type:
              e.extensible_message_admin_text_type,
            message_id: e.message_id,
            message_sender: e.message_sender,
            message_unsendability_status: e.message_unsendability_status,
            platform_xmd_encoded: e.platform_xmd_encoded,
            snippet: e.snippet,
            sticker: e.sticker,
            timestamp_precise: e.timestamp_precise,
          };
        }),
        i = {
          admin_model_status_string: t.admin_model_status_string,
          all_participants: t.all_participants,
          approval_mode: t.approval_mode,
          associated_object: t.associated_object,
          can_viewer_report: t.can_viewer_report,
          cannot_reply_reason: t.cannot_reply_reason,
          composer_input_disabled: t.composer_input_disabled,
          conversion_detection_data: t.conversion_detection_data,
          customization_enabled: t.customization_enabled,
          customization_info: t.customization_info,
          description: t.description,
          ephemeral_ttl_mode: t.ephemeral_ttl_mode,
          event_reminders: t.event_reminders,
          folder: t.folder,
          group_approval_queue: t.group_approval_queue,
          group_thread_subtype: t.group_thread_subtype,
          groups_sync_status_string: t.groups_sync_status_string,
          has_viewer_archived: t.has_viewer_archived,
          id: t.id,
          image: t.image,
          is_business_page_active: t.is_business_page_active,
          is_canonical_neo_user: t.is_canonical_neo_user,
          is_other_recipient_page: t.is_other_recipient_page,
          is_page_follow_up: t.is_page_follow_up,
          is_page_unresponded_thread: t.is_page_unresponded_thread,
          is_pin_protected: t.is_pin_protected,
          is_pinned: t.is_pinned,
          is_viewer_subscribed: t.is_viewer_subscribed,
          joinable_link: t.joinable_link,
          joinable_mode: t.joinable_mode,
          last_message: { nodes: a },
          last_read_receipt: t.last_read_receipt,
          linked_mentorship_programs: t.linked_mentorship_programs,
          marketplace_thread_data: t.marketplace_thread_data,
          mentions_mute_mode: t.mentions_mute_mode,
          message_count: t.messages_count,
          montage_thread: t.montage_thread,
          mute_until: t.mute_until,
          name: t.name,
          page_comm_item: t.page_comm_item,
          page_unsubscribe_status: t.page_unsubscribe_status,
          participant_add_mode_as_string: t.participant_add_mode_as_string,
          participants_event_status: t.participants_event_status,
          pinned_messages: t.pinned_messages,
          privacy_mode: t.privacy_mode,
          reactions_mute_mode: t.reactions_mute_mode,
          related_page_thread: t.related_page_thread,
          rtc_call_data: t.rtc_call_data,
          square_image: t.square_image,
          suggested_reply_data: t.suggested_reply_data,
          theme: t.thread_theme,
          thread_admins: t.thread_admins,
          thread_associated_job_applications:
            t.thread_associated_job_applications,
          thread_associated_page_admin: t.thread_associated_page_admin,
          thread_connectivity_data: t.thread_connectivity_data,
          thread_key: t.thread_key,
          thread_pin_timestamp: t.thread_pin_timestamp,
          thread_queue_enabled: t.thread_queue_enabled,
          thread_queue_metadata: t.thread_queue_metadata,
          thread_type: t.thread_type,
          thread_unsendability_status: t.thread_unsendability_status,
          unread_count: t.unread_count,
          unread_mentions_count: t.unread_mentions_count,
          updated_time_precise: t.updated_time_precise,
          work_groups_sync_metadata: t.work_groups_sync_metadata,
        },
        l = i.customization_info,
        s;
      if (l == null) s = [null, null, null];
      else {
        var g = l.emoji;
        s = [
          f(l.outgoing_bubble_color),
          g == null ? null : { emoji: g },
          p(l.participant_customizations),
        ];
      }
      var h = s[0],
        y = i.theme,
        C;
      if (y == null) C = [h, h, h, [], null, void 0, null, null];
      else {
        var b = y.reaction_pack,
          S;
        if (b == null) S = void 0;
        else {
          var R = b.reaction_assets;
          S =
            R == null
              ? void 0
              : R.nodes.map(function (e) {
                  return {
                    keyframeAssetUri: e.keyframe_asset_uri,
                    reactionEmoji: e.reaction_emoji,
                    reactionName: e.reaction_name,
                    staticAssetUri: e.static_asset.uri,
                  };
                });
        }
        var L = y.gradient_colors.length,
          E = _(y.fallback_color),
          k = o("FBIDForMercury").ofString(y.id),
          I = k !== void 0 ? r("bs_caml_option").valFromOption(k) : null;
        if (L > 0) {
          var T = y.gradient_colors.map(_);
          C = [
            E,
            r("bs_caml_array").get(T, 0),
            r("bs_caml_array").get(T, (L - 1) | 0),
            T,
            I,
            S,
            y.accessibility_label,
            y.reverse_gradients_for_radial,
          ];
        } else
          C = [
            E,
            E,
            E,
            [],
            I,
            S,
            y.accessibility_label,
            y.reverse_gradients_for_radial,
          ];
      }
      var D = i.page_comm_item,
        x =
          D == null
            ? [null, null, null, null, null, [], !1, [], null, null, !1]
            : [
                D.comm_status,
                D.comm_source_id,
                D.id,
                D.subtitle,
                D.comm_item_owners,
                D.comm_icon_type,
                D.is_priority,
                D.biz_inbox_tags,
                D.priority_score,
                D.biz_inbox_suggested_reply,
                D.is_thread_currently_handled_by_ai_agent,
              ],
        $ = i.last_message.nodes,
        P = $.length !== 0 ? r("bs_caml_option").some($[0]) : void 0,
        N = i.last_read_receipt.nodes,
        M = N.length !== 0 ? r("bs_caml_option").some(N[0]) : void 0,
        w;
      if (P !== void 0) {
        var A = r("bs_caml_option").valFromOption(P);
        w = o("MessengerAttachmentTransformer.bs").transformAttachment(
          e,
          {
            blob_attachments: A.blob_attachments,
            extensible_attachment: A.extensible_attachment,
            sticker: A.sticker,
          },
          A.message_id,
          n,
        );
      } else w = [];
      var F;
      if (P !== void 0) {
        var O =
          r("bs_caml_option").valFromOption(P).extensible_message_admin_text;
        if (O == null) F = null;
        else {
          var B = O.game;
          F = B == null ? null : B.id;
        }
      } else F = null;
      var W = o("MessengerThreadCannotReplyReason.bs").fromName(
          i.cannot_reply_reason,
        ),
        q = i.thread_key.other_user_id,
        U;
      if (q == null) {
        var V = i.thread_key.thread_fbid;
        U = V == null ? null : V;
      } else U = q;
      var H = r("bs_array").fold_left(
          function (e, t) {
            return ((e[t.id] = 0), e);
          },
          {},
          i.thread_admins,
        ),
        G = r("bs_array").fold_left(
          function (e, t) {
            var n = t.node.messaging_actor.id,
              r = t.admin_type,
              o = e[n];
            return (r != null && o !== void 0 && (e[n] = r), e);
          },
          H,
          i.all_participants.edges,
        ),
        z = i.thread_queue_metadata,
        j = i.group_approval_queue,
        K = i.group_thread_subtype,
        Q = i.montage_thread,
        X = i.image,
        Y = i.thread_key.other_user_id,
        J;
      if (P !== void 0) {
        var Z = r("bs_caml_option").valFromOption(P).platform_xmd_encoded;
        if (Z == null) J = !1;
        else {
          var ee;
          try {
            ee = JSON.parse(Z);
          } catch (e) {
            ee = {};
          }
          var te = r("bs_js_json").classify(ee);
          J =
            typeof te == "number" || te.TAG !== 2
              ? !1
              : te._0.landing_exp !== void 0;
        }
      } else J = !1;
      var ne = i.thread_queue_metadata,
        re = i.event_reminders.nodes,
        oe = i.linked_mentorship_programs,
        ae = i.marketplace_thread_data,
        ie;
      if (ae == null) ie = null;
      else {
        var le = ae.buyer,
          se = ae.for_sale_item,
          ue;
        if (se == null) ue = null;
        else {
          var ce = se.primary_photo,
            de;
          if (ce == null) de = null;
          else {
            var me = ce.image;
            de = me == null ? null : me.uri;
          }
          var pe = se.product_item,
            _e = se.location,
            fe;
          if (_e == null) fe = null;
          else {
            var ge = _e.reverse_geocode;
            fe = {
              reverse_geocode:
                ge == null ? null : { city: ge.city, state: ge.state },
            };
          }
          var he = se.formatted_price,
            ye = se.product_item;
          ue = {
            c2c_shipping_eligible: se.c2c_shipping_eligible,
            delivery_types: se.delivery_types,
            id: se.id,
            image_uri: de,
            inventory_count: se.inventory_count,
            is_commerce_post_item: pe == null ? !1 : pe.is_commerce_post_item,
            is_pending: se.is_pending,
            is_shipping_offered: se.is_shipping_offered,
            is_sold: se.is_sold,
            location: fe,
            price: he == null ? null : he.text,
            product_item_id: ye == null ? null : ye.id,
            story_id: se.story_id,
            title: se.group_commerce_item_title,
            url: se.url,
          };
        }
        var Ce = ae.rating_state,
          be = ae.seller,
          ve;
        if (be == null) ve = !1;
        else {
          var Se = be.marketplace_c2c_shipping_seller;
          ve = Se == null ? !1 : Se.is_eligible;
        }
        var Re = ae.seller;
        ie = {
          buyer_fbid: le == null ? null : le.id,
          for_sale_item: ue,
          is_eligible_to_rate: Ce == null ? null : Ce.is_eligible_to_rate,
          is_seller_eligible_for_shipping: ve,
          seller_added_labels: ae.seller_added_labels.map(function (e) {
            return { label_string: e.label_string, label_type: e.label_type };
          }),
          seller_fbid: Re == null ? null : Re.id,
          thread_fbid: U,
        };
      }
      var Le = i.name,
        Ee = i.associated_object,
        ke;
      if (Ee == null) ke = null;
      else {
        var Ie = Ee.group_general_chat;
        ke =
          Ie == null || U == null
            ? null
            : Ie.id === U
              ? r("MessengerObjectAssociationType").GENERAL_CHAT
              : r("MessengerObjectAssociationType").REGULAR_CHAT;
      }
      var Te = i.pinned_messages,
        De = i.rtc_call_data,
        xe;
      if (De == null) xe = null;
      else {
        var $e = De.initiator;
        xe = {
          call_state: De.call_state,
          initiator_fbid:
            $e == null
              ? null
              : r("bs_js_null_undefined").fromOption(
                  o("FBIDForMercury").ofString($e.id),
                ),
          server_info_data: De.server_info_data,
        };
      }
      var Pe = i.square_image,
        Ne = i.thread_associated_job_applications,
        Me = i.thread_type,
        we = i.work_groups_sync_metadata,
        Ae;
      if (we == null) Ae = null;
      else {
        var Fe = we.fb_group;
        Ae = Fe == null ? null : Fe;
      }
      return {
        accessibility_label: C[6],
        admin_model_status: o(
          "MessengerGroupAdminModelStatus.bs",
        ).fromNullableString(i.admin_model_status_string),
        admins: G,
        approval_mode: i.approval_mode,
        approval_queue_ids:
          z == null
            ? []
            : z.approval_requests.nodes.map(function (e) {
                return o("MercuryIDs").getParticipantIDFromUserID(
                  o("FBIDForMercury").ofStringExn(e.id),
                );
              }),
        associated_object: c(i),
        biz_inbox_suggested_reply: x[9],
        is_thread_currently_handled_by_ai_agent: x[10],
        biz_inbox_tags: x[7],
        can_reply: W === void 0,
        can_viewer_report: i.can_viewer_report,
        cannot_reply_reason: W !== void 0 ? W : null,
        comm_icon_type: x[5],
        comm_item_owners: x[4],
        comm_source_id: x[1],
        comm_status: x[0],
        composer_input_disabled: i.composer_input_disabled,
        conversion_detection_data: i.conversion_detection_data,
        custom_like_icon: s[1],
        custom_nickname: s[2],
        customization_enabled: i.customization_enabled,
        description: i.description,
        ephemeral_ttl_mode: i.ephemeral_ttl_mode,
        folder: i.folder.toLowerCase(),
        footer_color: C[2],
        game_id: F,
        gradient_colors: C[3],
        graphql_token: i.id,
        group_approval_queue: j == null ? null : j.nodes,
        group_thread_subtype:
          K == null
            ? null
            : r("bs_js_null_undefined").fromOption(
                r("MessengerGroupThreadSubType")[K],
              ),
        groups_sync_status: o(
          "MessengerGroupsSyncStatus.bs",
        ).fromNullableString(i.groups_sync_status_string),
        has_email_participant:
          W !== void 0 ? W === "has_email_participant" : !1,
        has_montage: Q != null,
        header_color: C[1],
        image_src: X == null ? null : X.uri,
        is_archived: i.has_viewer_archived,
        is_business_page_active: i.is_business_page_active,
        is_canonical: Y != null,
        is_canonical_neo_user: i.is_canonical_neo_user,
        is_canonical_user: m(i),
        is_from_weak_entry_point: J,
        is_other_recipient_page: i.is_other_recipient_page,
        is_page_follow_up: i.is_page_follow_up,
        is_page_unresponded_thread: i.is_page_unresponded_thread,
        is_pin_protected: i.is_pin_protected,
        is_pinned: i.is_pinned,
        is_priority: x[6],
        is_subscribed: i.is_viewer_subscribed,
        is_thread_queue_enabled: ne != null,
        joinable_link: i.joinable_link,
        joinable_mode: {
          link: i.joinable_mode.link,
          mode: r("bs_caml_format").caml_int_of_string(i.joinable_mode.mode),
        },
        last_message_admin_text_type:
          P !== void 0
            ? r("bs_caml_option").valFromOption(P)
                .extensible_message_admin_text_type
            : null,
        last_message_id: null,
        last_message_timestamp:
          P !== void 0
            ? r("bs_caml_format").caml_float_of_string(
                r("bs_caml_option").valFromOption(P).timestamp_precise,
              )
            : 0,
        last_message_unsendability_status:
          P !== void 0
            ? r("bs_caml_option").valFromOption(P).message_unsendability_status
            : null,
        last_read_timestamp:
          M !== void 0
            ? r("bs_caml_format").caml_float_of_string(
                r("bs_caml_option").valFromOption(M).timestamp_precise,
              )
            : 0,
        lightweight_event: re.length !== 0 ? u(re[0]) : null,
        lightweight_events: r("bs_array").fold_left(
          function (e, t) {
            return ((e[t.id] = u(t)), e);
          },
          {},
          i.event_reminders.nodes,
        ),
        linked_mentorship_programs: oe == null ? null : oe,
        marketplace_thread_data: ie,
        mentions_mute_mode:
          i.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
        message_count: i.message_count,
        mute_until: i.mute_until,
        name: Le == null ? "" : Le,
        object_association_type: ke,
        other_user_fbid: i.thread_key.other_user_id,
        page_comm_item_id: x[2],
        page_thread_info: d(i),
        page_unsubscribe_status: i.page_unsubscribe_status,
        participant_add_mode: i.participant_add_mode_as_string,
        participants: i.all_participants.edges.map(function (e) {
          return o("MercuryIDs").getParticipantIDFromUserID(
            e.node.messaging_actor.id,
          );
        }),
        participants_event_status: i.participants_event_status,
        pinned_messages:
          Te == null
            ? null
            : Te.map(function (t) {
                var n = t.message;
                return {
                  message:
                    n == null
                      ? null
                      : o("MessengerMessageTransformer.bs").transformMessage(
                          e,
                          n,
                          {
                            folder: i.folder.toLowerCase(),
                            other_user_fbid: i.thread_key.other_user_id,
                            thread_fbid: i.thread_key.thread_fbid,
                            thread_id: null,
                          },
                          !1,
                        ),
                  message_id: t.message_id,
                  pinning_time: t.pinning_time,
                };
              }),
        preloaded_participants: v(t),
        priority_score: x[8],
        reactions: C[5],
        reactions_mute_mode:
          i.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
        read_only: W !== void 0 ? W === "read_only" : !1,
        recipients_loadable:
          W !== void 0 ? W !== "recipients_not_loadable" : !0,
        reverse_gradients_for_radial: C[7],
        rtc_call_data: xe,
        server_timestamp: r("bs_caml_format").caml_float_of_string(
          i.updated_time_precise,
        ),
        snippet:
          P !== void 0 ? r("bs_caml_option").valFromOption(P).snippet : null,
        snippet_attachments: w,
        snippet_sender:
          P !== void 0
            ? o("MercuryIDs").getParticipantIDFromUserID(
                r("bs_caml_option").valFromOption(P).message_sender
                  .messaging_actor.id,
              )
            : null,
        solid_color: C[0],
        square_image_src: Pe == null ? null : Pe.uri,
        subtitle: x[3],
        suggested_reply_data: i.suggested_reply_data,
        theme_id: C[4],
        thread_associated_job_applications: Ne == null ? null : Ne,
        thread_associated_page_admin: i.thread_associated_page_admin,
        thread_connectivity_data: i.thread_connectivity_data,
        thread_fbid: U,
        thread_id: "",
        thread_pin_timestamp: i.thread_pin_timestamp,
        thread_type:
          Me == null
            ? null
            : r("bs_js_null_undefined").fromOption(
                r("MessagingThreadType")[Me],
              ),
        thread_unsendability_status: o(
          "MessageThreadUnsendabilityStatus.bs",
        ).fromNullableString(i.thread_unsendability_status),
        timestamp: r("bs_caml_format").caml_float_of_string(
          i.updated_time_precise,
        ),
        unread_count: i.unread_count,
        unread_mentions_count: i.unread_mentions_count,
        work_associated_group: Ae,
      };
    }
    var k = g,
      I = h,
      T = y,
      D = C,
      x = b,
      $ = v,
      P = S,
      N = R,
      M = L,
      w = E;
    ((l.getThreadFBID = k),
      (l.getOtherUserID = I),
      (l.getMessagePageInfo = T),
      (l.getBlockedParticipant = D),
      (l.transformParticipant = x),
      (l.transformParticipants = $),
      (l.transformReadReceipts = P),
      (l.transformDeliveryReceipts = N),
      (l.transformMessages = M),
      (l.transformThread = w));
  },
  226,
);
