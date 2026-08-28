__d(
  "BizInboxUnfiedThreadsQueryService",
  [
    "Base64",
    "BizInboxCommerceInvoiceDataUtils",
    "BizInboxGating",
    "BizInboxUnifiedThreadsQuery.graphql",
    "BizKitContextCardActivitySectionFrag",
    "BizKitContextCardContainerDetailsFrag",
    "BizKitRelayEnvironmentFactory",
    "Deferred",
    "FBLogger",
    "InteractionTracingMetrics",
    "MarketingMessagesButtonState.facebook",
    "RelayHooks",
    "getBizInboxUnifiedThreadsQuery",
    "nullthrows",
    "react-relay",
    "stableStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["nodes"],
      s = ["thread_items"],
      u = {
        messenger_threads: null,
        instagram_threads: null,
        whatsapp_threads: null,
        messenger_thread_items: null,
        instagram_thread_items: null,
        whatsapp_thread_items: null,
        context_card_details: null,
        messenger_actor_id: null,
        whatsapp_actor_id: null,
        instagram_actor_id: null,
        selected_thread_item_id: null,
        active_folder: null,
        is_selected_thread_item_id_set: !1,
        is_thread_clicked: !1,
        is_active_folder_set: !1,
        executed_queries: null,
        checked_context_card_vars: !1,
        page_id: null,
        getShouldUnifyConfigQueries: o(
          "getBizInboxUnifiedThreadsQuery",
        ).getShouldUnifyConfigQueries(),
        interaction_trace_id: null,
        shouldSkipPageQuery: !1,
        shouldSkipMessage: !1,
        shouldUnifyContextCardQueries: o(
          "getBizInboxUnifiedThreadsQuery",
        ).getShouldUnifyContextCardQueries(),
        isDependencyOfRemovePageDependencyEnabledTool: !1,
        businessAssets: null,
      },
      c = {
        commerce_invoice_data: o(
          "BizInboxCommerceInvoiceDataUtils",
        ).getDefaultBizInboxCommerceInvoiceData(),
        composer_toolbar_config: {
          isCommerceInvoiceEnabled: !1,
          isCreateAppointmentEnabled: !1,
          isProductPickerEnabled: !1,
          isSendAvailabilityEnabled: !1,
          isSendInThreadFormsEnabled: !1,
          isSendMarketingMessagesEnabled: "INELIGIBLE",
          isGcashIdShareAndCopyButtonEnabled: !1,
          isCallButtonEnabled: !1,
          isCallButtonLiveEnabled: !1,
          isBizAIButtonEnabled: !1,
        },
      };
    function d() {
      return c;
    }
    function m() {
      return u.msg_predicted_selected_thread === ""
        ? u.ig_predicted_selected_thread === ""
          ? null
          : u.ig_predicted_selected_thread
        : u.msg_predicted_selected_thread;
    }
    function p(e, t, n, r) {
      var a,
        i,
        l =
          (a =
            (i = u.executed_queries) == null
              ? void 0
              : i.has("context_card_details")) != null
            ? a
            : !1;
      l ||
        ((u.shouldSkipPageQuery = e),
        (u.shouldSkipMessage = !1),
        (u.shouldUnifyContextCardQueries = o(
          "getBizInboxUnifiedThreadsQuery",
        ).getShouldUnifyContextCardQueries()),
        (u.isDependencyOfRemovePageDependencyEnabledTool =
          o(
            "BizInboxGating",
          ).getIsEligibleForRemovePageDependencyInboxPhase1()),
        (u.context_card_details = {
          selected_thread_item_id: t,
          business_id: n,
        }),
        (u.businessAssets = r));
    }
    function _(e) {
      u.page_id = e;
    }
    function f(e) {
      u.is_thread_clicked = e;
    }
    function g(e) {
      u.is_selected_thread_item_id_set ||
        ((u.selected_thread_item_id = e),
        (u.is_selected_thread_item_id_set = !0));
    }
    function h(e) {
      u.is_active_folder_set ||
        ((u.active_folder = e), (u.is_active_folder_set = !0));
    }
    function y(e) {
      u.interaction_trace_id = e;
    }
    function C(e, t) {
      var o,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        x,
        P,
        N,
        M,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me = n("react-relay"),
        pe = me.fetchQuery,
        _e =
          r("BizKitRelayEnvironmentFactory") == null
            ? void 0
            : r("BizKitRelayEnvironmentFactory").getForActorID(
                r("nullthrows")(
                  (o =
                    (a = u.messenger_actor_id) != null
                      ? a
                      : u.instagram_actor_id) != null
                    ? o
                    : u.whatsapp_actor_id,
                ),
              ),
        fe = new (r("Deferred"))(),
        ge = fe.getPromise(),
        he =
          u.instagram_actor_id !== null
            ? {
                first: (i = u.instagram_threads) == null ? void 0 : i.limit,
                after: (l = u.instagram_threads) == null ? void 0 : l.after,
                mode: "MIXED",
                folder:
                  (s = (c = u.instagram_threads) == null ? void 0 : c.folder) !=
                  null
                    ? s
                    : "TODO",
                is_follow_up:
                  (d = u.instagram_threads) == null ? void 0 : d.is_follow_up,
                is_unread:
                  (m = u.instagram_threads) == null ? void 0 : m.is_unread,
                is_page_unresponded_thread:
                  (p = u.instagram_threads) == null
                    ? void 0
                    : p.is_page_unresponded_thread,
                assigned_admin_id:
                  (_ = u.instagram_threads) == null
                    ? void 0
                    : _.assigned_admin_id,
                is_priority_thread:
                  (f = u.instagram_threads) == null
                    ? void 0
                    : f.is_priority_thread,
                ig_asset_id:
                  (g = u.instagram_threads) == null ? void 0 : g.ig_asset_id,
              }
            : null,
        ye =
          u.messenger_actor_id !== null
            ? {
                pinned_threads_only:
                  (h = u.messenger_threads) == null
                    ? void 0
                    : h.onlyPinnedThreads,
                with_tags: (y = u.messenger_threads) == null ? void 0 : y.tags,
                before_time_precise:
                  (C = u.messenger_threads) == null ? void 0 : C.before,
                last: (v = u.messenger_threads) == null ? void 0 : v.limit,
              }
            : null,
        Ce =
          u.whatsapp_actor_id !== null
            ? {
                pinned_threads_only:
                  (S = u.whatsapp_threads) == null
                    ? void 0
                    : S.onlyPinnedThreads,
                with_tags: (R = u.whatsapp_threads) == null ? void 0 : R.tags,
                before_time_precise:
                  (L = u.whatsapp_threads) == null ? void 0 : L.before,
                last: (E = u.whatsapp_threads) == null ? void 0 : E.limit,
              }
            : null,
        be = u.messenger_actor_id !== null ? { with_tags: ["PENDING"] } : null,
        ve = u.whatsapp_actor_id !== null ? { with_tags: ["PENDING"] } : null;
      return (
        pe(
          r("nullthrows")(_e),
          r("BizInboxUnifiedThreadsQuery.graphql"),
          {
            height: (k = u.instagram_threads) == null ? void 0 : k.height,
            loadThreadItems:
              (I = u.instagram_threads) == null ? void 0 : I.loadThreadItems,
            loadThreads:
              (T = u.instagram_threads) == null ? void 0 : T.loadThreads,
            is_work_teamwork_not_putting_muted_in_unreads:
              (x = u.messenger_threads) == null
                ? void 0
                : x.is_work_teamwork_not_putting_muted_in_unreads,
            includeDeliveryReceipts:
              (P =
                (N = u.messenger_threads) == null
                  ? void 0
                  : N.includeDeliveryReceipts) != null
                ? P
                : (M = u.whatsapp_threads) == null
                  ? void 0
                  : M.includeDeliveryReceipts,
            includeSeqID:
              (A =
                (F = u.messenger_threads) == null ? void 0 : F.includeSeqID) !=
              null
                ? A
                : (O = u.whatsapp_threads) == null
                  ? void 0
                  : O.includeSeqID,
            isWorkUser:
              (B = (W = u.messenger_threads) == null ? void 0 : W.isWorkUser) !=
              null
                ? B
                : (q = u.whatsapp_threads) == null
                  ? void 0
                  : q.isWorkUser,
            source:
              (U = (V = u.whatsapp_threads) == null ? void 0 : V.source) != null
                ? U
                : (H = u.messenger_threads) == null
                  ? void 0
                  : H.source,
            threadlistViewFieldsOnly:
              (G =
                (z = u.messenger_threads) == null
                  ? void 0
                  : z.threadlistViewFieldsOnly) != null
                ? G
                : (j = u.whatsapp_threads) == null
                  ? void 0
                  : j.threadlistViewFieldsOnly,
            width: (K = u.instagram_threads) == null ? void 0 : K.width,
            ig_params: he,
            msgr_params: ye,
            wa_params: Ce,
            msgr_pending_params: be,
            wa_pending_params: ve,
            message_limit:
              (Q =
                (X = u.messenger_thread_items) == null
                  ? void 0
                  : X.message_limit) != null
                ? Q
                : (Y = u.whatsapp_thread_items) == null
                  ? void 0
                  : Y.message_limit,
            before:
              (J =
                (Z = u.messenger_thread_items) == null ? void 0 : Z.before) !=
              null
                ? J
                : (ee = u.whatsapp_thread_items) == null
                  ? void 0
                  : ee.before,
            load_messages:
              (te =
                (ne = u.messenger_thread_items) == null
                  ? void 0
                  : ne.load_messages) != null
                ? te
                : (re = u.whatsapp_thread_items) == null
                  ? void 0
                  : re.load_messages,
            load_read_receipts:
              (oe =
                (ae = u.messenger_thread_items) == null
                  ? void 0
                  : ae.load_read_receipts) != null
                ? oe
                : (ie = u.whatsapp_thread_items) == null
                  ? void 0
                  : ie.load_read_receipts,
            load_delivery_receipts:
              (le = u.messenger_thread_items) == null
                ? void 0
                : le.load_delivery_receipts,
            item_limit:
              (se = u.instagram_thread_items) == null ? void 0 : se.item_limit,
            item_after:
              (ue = u.instagram_thread_items) == null ? void 0 : ue.item_after,
            load_items:
              (ce = u.instagram_thread_items) == null ? void 0 : ce.load_items,
            selected_item_id: u.selected_thread_item_id,
            page_id: u.page_id,
            getShouldUnifyConfigQueries: u.getShouldUnifyConfigQueries,
            shouldSkipPageQuery: u.shouldSkipPageQuery,
            shouldSkipMessage: u.shouldSkipMessage,
            shouldUnifyContextCardQueries: u.shouldUnifyContextCardQueries,
            isDependencyOfRemovePageDependencyEnabledTool:
              u.isDependencyOfRemovePageDependencyEnabledTool,
            businessAssets: (de = u.businessAssets) != null ? de : [],
          },
          { fetchPolicy: "store-or-network" },
        ).subscribe({
          start: function () {},
          complete: function () {},
          error: function (t) {
            fe.reject({
              data: {},
              errors: [{ message: t.message, severity: "CRITICAL", error: t }],
            });
          },
          next: function (o) {
            if (o) {
              ($(o), w(e));
              var n = b(o, e);
              (D(o),
                n
                  ? (e === "context_card_details" && t && t(n), fe.resolve(n))
                  : (r("FBLogger")(
                      "biz_inbox_unified_threads_query",
                      "error_with_query_response",
                    ).warn("Error with %s response", e),
                    fe.reject({
                      data: {},
                      errors: [
                        {
                          message: "Unexpected response received from server.",
                          severity: "CRITICAL",
                          response: n,
                        },
                      ],
                    })));
            } else
              fe.reject({
                data: {},
                errors: [
                  {
                    message: "Unexpected response received from server.",
                    severity: "CRITICAL",
                    response: o,
                  },
                ],
              });
          },
        }),
        ge
      );
    }
    function b(e, t) {
      switch (t) {
        case "messenger_threads":
          return S(e);
        case "whatsapp_threads":
          return R(e);
        case "instagram_threads":
          return L(e);
        case "messenger_thread_items":
          return E(e);
        case "whatsapp_thread_items":
          return E(e);
        case "instagram_thread_items":
          return k(e);
        case "context_card_details":
          return I(e);
        default:
          return null;
      }
    }
    function v(e) {
      return (
        e === "messenger_thread_items" ||
        e === "whatsapp_thread_items" ||
        e === "instagram_thread_items"
      );
    }
    function S(e) {
      var t;
      if ((t = e.xfb_biz_inbox_unified_thread_list) != null && t.msgr_threads) {
        var n, r;
        return {
          viewer: {
            message_threads:
              (n = e.xfb_biz_inbox_unified_thread_list) == null
                ? void 0
                : n.msgr_threads,
            pending_threads:
              (r = e.xfb_unified_thread_list_pending) == null
                ? void 0
                : r.msg_pending_threads,
          },
        };
      }
      return null;
    }
    function R(e) {
      var t;
      if ((t = e.xfb_biz_inbox_unified_thread_list) != null && t.wa_threads) {
        var n, r;
        return {
          viewer: {
            message_threads:
              (n = e.xfb_biz_inbox_unified_thread_list) == null
                ? void 0
                : n.wa_threads,
            pending_threads:
              (r = e.xfb_unified_thread_list_pending) == null
                ? void 0
                : r.wa_pending_threads,
          },
        };
      }
      return null;
    }
    function L(t) {
      var n,
        r,
        o,
        a =
          (n = t.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : n.ig_threads,
        i =
          (r =
            (o = t.xfb_biz_inbox_unified_thread_list) == null ||
            (o = o.selected_thread) == null ||
            (o = o.selected_ig_thread) == null
              ? void 0
              : o.token) != null
            ? r
            : "";
      if (a) {
        var l = a.nodes,
          u = babelHelpers.objectWithoutPropertiesLoose(a, e),
          c =
            l == null
              ? void 0
              : l.findIndex(function (e) {
                  return e.token === i;
                });
        if (l != null && c != null && c !== -1) {
          var d,
            m = l[c],
            p = m.thread_items,
            _ = babelHelpers.objectWithoutPropertiesLoose(m, s),
            f =
              (d = t.xfb_biz_inbox_unified_thread_list) == null ||
              (d = d.selected_thread) == null ||
              (d = d.selected_ig_thread) == null
                ? void 0
                : d.thread_items,
            g = babelHelpers.extends({ thread_items: f }, _),
            h = l.map(function (e, t) {
              return t === c ? g : e;
            });
          return {
            viewer: {
              instagram_message_threads: babelHelpers.extends({ nodes: h }, u),
            },
          };
        }
        return { viewer: { instagram_message_threads: a } };
      }
      return null;
    }
    function E(e) {
      var t;
      if (
        (t = e.xfb_biz_inbox_unified_thread_list) != null &&
        (t = t.selected_thread) != null &&
        t.selected_message_thread
      ) {
        var n;
        return {
          message_thread:
            (n = e.xfb_biz_inbox_unified_thread_list) == null ||
            (n = n.selected_thread) == null
              ? void 0
              : n.selected_message_thread,
        };
      }
      return null;
    }
    function k(e) {
      var t;
      if (
        (t = e.xfb_biz_inbox_unified_thread_list) != null &&
        (t = t.selected_thread) != null &&
        t.selected_ig_thread
      ) {
        var n;
        return {
          instagram_message_thread:
            (n = e.xfb_biz_inbox_unified_thread_list) == null ||
            (n = n.selected_thread) == null
              ? void 0
              : n.selected_ig_thread,
        };
      }
      return null;
    }
    function I(e) {
      var t, n, a, i, l, s, u, c, d, m, p;
      if (
        !o("getBizInboxUnifiedThreadsQuery").getShouldUnifyContextCardQueries()
      )
        return (
          r("FBLogger")(
            "biz_inbox_unified_threads_query",
            "context_card",
          ).mustfix(
            "Trying to fetch Context Card Details data from Unified Threads query although data was not fetched",
          ),
          null
        );
      var _ =
          e == null || (t = e.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : t.selected_thread,
        f = o("RelayHooks").readInlineData(
          o("BizKitContextCardContainerDetailsFrag").contactDetailsQueryFrag,
          _,
        ),
        g = {
          selected_biz_crm_contact:
            f == null ? void 0 : f.selected_biz_crm_contact,
          selected_biz_crm_contact_card_config:
            f == null ? void 0 : f.selected_biz_crm_contact_card_config,
        },
        h =
          e == null ||
          (n = e.xfb_biz_inbox_unified_thread_list) == null ||
          (n = n.selected_thread) == null
            ? void 0
            : n.selected_thread_type,
        y = null;
      h !== "WHATSAPP_THREAD" &&
        (y = o("RelayHooks").readInlineData(
          o("BizKitContextCardActivitySectionFrag")
            .BizKitContextCardActivitySectionFrag,
          e,
        ));
      var C = {
        can_add_activities:
          (a =
            (i = y) == null ||
            (i = i.xfb_biz_inbox_unified_thread_list) == null ||
            (i = i.selected_thread) == null ||
            (i = i.selected_biz_crm_contact_card_config) == null
              ? void 0
              : i.can_add_activities) != null
            ? a
            : !1,
        selected_biz_crm_contact: {
          activityRef:
            (l = y) == null ||
            (l = l.xfb_biz_inbox_unified_thread_list) == null ||
            (l = l.selected_thread) == null
              ? void 0
              : l.selected_biz_crm_contact,
          activityDropDownRef:
            (s = y) == null ||
            (s = s.xfb_biz_inbox_unified_thread_list) == null ||
            (s = s.selected_thread) == null
              ? void 0
              : s.selected_biz_crm_contact,
          adsDataSharingNUXRef:
            (u = y) == null ||
            (u = u.xfb_biz_inbox_unified_thread_list) == null ||
            (u = u.selected_thread) == null
              ? void 0
              : u.selected_biz_crm_contact,
        },
        page: {
          dropdownRef:
            (c = y) == null || (c = c.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : c.selected_page,
          listItemRef:
            (d = y) == null || (d = d.xfb_biz_inbox_unified_thread_list) == null
              ? void 0
              : d.selected_page,
        },
        xfb_mbs_business_assets: {
          dropdownRef: (m = y) == null ? void 0 : m.xfb_mbs_business_assets,
          listItemRef: (p = y) == null ? void 0 : p.xfb_mbs_business_assets,
        },
      };
      return { detailsRef: g, activitiesRef: C };
    }
    function T(e) {
      var t, n;
      if (
        !o("getBizInboxUnifiedThreadsQuery").getShouldUnifyContextCardQueries()
      )
        return null;
      var r =
          e == null || (t = e.xfb_biz_inbox_unified_thread_list) == null
            ? void 0
            : t.selected_thread,
        a = o("RelayHooks").readInlineData(
          o("BizKitContextCardContainerDetailsFrag").contactDetailsQueryFrag,
          r,
        );
      return a == null ||
        (n = a.selected_biz_crm_contact) == null ||
        (n = n.identity) == null
        ? void 0
        : n.business_id;
    }
    function D(e) {
      ((c.commerce_invoice_data = o(
        "BizInboxCommerceInvoiceDataUtils",
      ).parseBizInboxCommerceInvoiceData(e)),
        (c.composer_toolbar_config = x(e)));
    }
    function x(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = !!(
          !(
            (t = e.xfb_biz_inbox_unified_thread_list) == null ||
            (t = t.selected_thread) == null ||
            (t = t.selected_thread_biz_inbox_feature_config) == null ||
            (t = t.gating_config) == null
          ) && t.show_commerce_invoice_button_in_composer
        ),
        _ = !!(
          !(
            (n = e.xfb_biz_inbox_unified_thread_list) == null ||
            (n = n.selected_thread) == null ||
            (n = n.selected_thread_biz_inbox_feature_config) == null ||
            (n = n.gating_config) == null
          ) && n.show_create_appointment_button_in_composer
        ),
        f = !!(
          !(
            (o = e.xfb_biz_inbox_unified_thread_list) == null ||
            (o = o.selected_thread) == null ||
            (o = o.selected_thread_biz_inbox_feature_config) == null ||
            (o = o.gating_config) == null
          ) && o.show_product_picker_button_in_composer
        ),
        g = !!(
          !(
            (a = e.xfb_biz_inbox_unified_thread_list) == null ||
            (a = a.selected_thread) == null ||
            (a = a.selected_thread_biz_inbox_feature_config) == null ||
            (a = a.gating_config) == null
          ) && a.show_send_availability_button_in_composer
        ),
        h = !!(
          !(
            (i = e.xfb_biz_inbox_unified_thread_list) == null ||
            (i = i.selected_thread) == null ||
            (i = i.selected_thread_biz_inbox_feature_config) == null ||
            (i = i.gating_config) == null
          ) && i.show_send_inthread_forms_in_composer
        ),
        y =
          (l = r("MarketingMessagesButtonState.facebook").cast(
            String(
              (s = e.xfb_biz_inbox_unified_thread_list) == null ||
                (s = s.selected_thread) == null ||
                (s = s.selected_thread_biz_inbox_feature_config) == null ||
                (s = s.gating_config) == null
                ? void 0
                : s.marketing_messages_in_composer_state,
            ),
          )) != null
            ? l
            : "INELIGIBLE",
        C = !!(
          !(
            (u = e.xfb_biz_inbox_unified_thread_list) == null ||
            (u = u.selected_thread) == null ||
            (u = u.selected_thread_biz_inbox_feature_config) == null ||
            (u = u.gating_config) == null
          ) && u.show_gcash_id_share_and_copy_button
        ),
        b = !!(
          !(
            (c = e.xfb_biz_inbox_unified_thread_list) == null ||
            (c = c.selected_thread) == null ||
            (c = c.selected_thread_biz_inbox_feature_config) == null ||
            (c = c.gating_config) == null
          ) && c.show_calling_in_composer
        ),
        v = !!(
          !(
            (d = e.xfb_biz_inbox_unified_thread_list) == null ||
            (d = d.selected_thread) == null ||
            (d = d.selected_thread_biz_inbox_feature_config) == null ||
            (d = d.gating_config) == null
          ) && d.show_calling_live_in_composer
        ),
        S = !!(
          !(
            (m = e.xfb_biz_inbox_unified_thread_list) == null ||
            (m = m.selected_thread) == null ||
            (m = m.selected_thread_biz_inbox_feature_config) == null ||
            (m = m.gating_config) == null
          ) && m.show_biz_ai_in_composer
        );
      return {
        isCommerceInvoiceEnabled: p,
        isCreateAppointmentEnabled: _,
        isProductPickerEnabled: f,
        isSendAvailabilityEnabled: g,
        isSendInThreadFormsEnabled: h,
        isSendMarketingMessagesEnabled: y,
        isGcashIdShareAndCopyButtonEnabled: C,
        isCallButtonEnabled: b,
        isBizAIButtonEnabled: S,
        isCallButtonLiveEnabled: v,
      };
    }
    function $(e) {
      var t, n, r, o;
      ((u.ig_predicted_selected_thread =
        (t =
          (n = k(e)) == null || (n = n.instagram_message_thread) == null
            ? void 0
            : n.token) != null
          ? t
          : ""),
        (u.msg_predicted_selected_thread = P(
          (r =
            (o = E(e)) == null || (o = o.message_thread) == null
              ? void 0
              : o.id) != null
            ? r
            : "",
        )),
        u.context_card_details == null
          ? (u.context_card_details = {
              selected_thread_item_id:
                u.ig_predicted_selected_thread === ""
                  ? u.msg_predicted_selected_thread
                  : u.ig_predicted_selected_thread,
              business_id: T(e),
            })
          : (u.context_card_details.business_id = T(e)));
    }
    function P(e) {
      if (e === "") return e;
      var t = r("Base64").decode(e).split(":");
      return t.length === 2 ? t[1] : e;
    }
    function N(e, t, n, o) {
      if (
        (o === void 0 && (o = !1),
        e === "instagram_thread_items" && u.instagram_thread_items)
      ) {
        var a;
        u.instagram_thread_items.token =
          (a = u.ig_predicted_selected_thread) != null ? a : "";
      }
      if (e === "messenger_thread_items" && u.messenger_thread_items) {
        var i;
        u.messenger_thread_items.id =
          (i = u.msg_predicted_selected_thread) != null ? i : "";
      }
      if (e === "whatsapp_thread_items" && u.whatsapp_thread_items) {
        var l;
        u.whatsapp_thread_items.id =
          (l = u.msg_predicted_selected_thread) != null ? l : "";
      }
      if (e === "context_card_details" && u.context_card_details) {
        if (u.msg_predicted_selected_thread !== "") {
          var s;
          u.context_card_details.selected_thread_item_id =
            (s = u.msg_predicted_selected_thread) != null ? s : "";
        } else if (u.ig_predicted_selected_thread !== "") {
          var c;
          u.context_card_details.selected_thread_item_id =
            (c = u.ig_predicted_selected_thread) != null ? c : "";
        }
      }
      var d = u[e],
        m = babelHelpers.extends({}, t);
      if (n) {
        var p = d != null ? babelHelpers.extends({}, d) : {};
        n.forEach(function (e) {
          d && e in m && (m[e] = p[e]);
        });
      }
      var _ = r("stableStringify")(d) === r("stableStringify")(m),
        f = B(d != null ? d : {}, m),
        g = new Map();
      return (
        !_ &&
          !o &&
          (r("FBLogger")(
            "biz_inbox_unified_threads_query",
            "query_variables_mismatch",
          ).warn(
            "Unified Query Mismatching Variables for %s : \nMismatching Fields [%s] : with thread item selected %s",
            e,
            f.toString(),
            u.selected_thread_item_id != null,
          ),
          g.set(
            "unified_variables",
            q(
              Object.keys(d != null ? d : {}),
              Object.values(d != null ? d : {}),
            ),
          ),
          g.set("query_variables", q(Object.keys(t), Object.values(t)))),
        v(e) &&
          (f.includes("id") || f.includes("token")
            ? g.set("is_selected_thread_matched", !1)
            : g.set("is_selected_thread_matched", !0),
          g.set("is_thread_item_selected", u.selected_thread_item_id != null)),
        W(u.interaction_trace_id, g),
        _
      );
    }
    function M(e, t) {
      var n, r;
      switch (e) {
        case "MessengerGraphQLThreadlistFetcher":
          return t != null &&
            t === ((n = u.whatsapp_threads) == null ? void 0 : n.source)
            ? "whatsapp_threads"
            : "messenger_threads";
        case "InstagramMessageGraphQLThreadsFetcher":
          return "instagram_threads";
        case "MessengerGraphQLThreadFetcher":
          return t != null &&
            t === ((r = u.whatsapp_threads) == null ? void 0 : r.source)
            ? "whatsapp_thread_items"
            : "messenger_thread_items";
        case "InstagramMessageGraphQLThreadItemsFetcher":
          return "instagram_thread_items";
        default:
          return null;
      }
    }
    function w(e) {
      u.executed_queries == null
        ? (u.executed_queries = new Set([e]))
        : u.executed_queries.add(e);
    }
    function A(e) {
      var t, n;
      if (u.is_thread_clicked) return !1;
      var r =
        (t = (n = u.executed_queries) == null ? void 0 : n.has(e)) != null
          ? t
          : !1;
      return !r;
    }
    function F(e, t, n) {
      if (u[e] == null) return !1;
      if (e === "context_card_details") {
        var r = u.checked_context_card_vars;
        return ((u.checked_context_card_vars = !0), N(e, t, n, r));
      }
      return A(e) && N(e, t, n);
    }
    function O(e, t) {
      var n = "instagram_thread_items";
      u[n] == null || !A(n) || N(n, e, t);
    }
    function B(e, t) {
      for (var n = [], r = Object.keys(e), o = 0; o < r.length; o++) {
        var a = r[o],
          i = e[a] != null ? JSON.stringify(e[a]) : "",
          l = t[a] != null ? JSON.stringify(t[a]) : "";
        i != l && n.push(a);
      }
      for (var s = Object.keys(t), u = 0; u < s.length; u++) {
        var c = s[u],
          d = e[c];
        d == null && t[c] != null && n.push(c);
      }
      return Array.from(new Set(n)).sort();
    }
    function W(e, t) {
      e != null &&
        t.forEach(function (t, n) {
          r("InteractionTracingMetrics").addMetadata(e, n, t);
        });
    }
    function q(e, t) {
      for (var n = new Map(), r = 0; r < t.length; r++)
        if (t[r] === null) n.set(e[r], "null");
        else if (t[r] === void 0) n.set(e[r], "undefied");
        else if (typeof t[r] == "string") n.set(e[r], "string");
        else if (typeof t[r] == "number") n.set(e[r], "number");
        else if (typeof t[r] == "boolean") n.set(e[r], t[r] ? "true" : "false");
        else {
          var o = babelHelpers.extends({}, t[r]);
          n.set(e[r], q(Object.keys(o), Object.values(o)));
        }
      return JSON.stringify(Object.fromEntries(n));
    }
    ((l.getConfigQueriesData = d),
      (l.getSelectedThreadID = m),
      (l.setContextDetailsQueryVariables = p),
      (l.setConfigQueryVariables = _),
      (l.setIsThreadClicked = f),
      (l.setSelectedThreadID = g),
      (l.setActiveFolder = h),
      (l.setInteractionTraceID = y),
      (l.execUnifiedQuery = C),
      (l.getChannelRespons = b),
      (l.isThreadItemChannel = v),
      (l.getMessengerThreadsResponse = S),
      (l.getWhatsAppThreadsResponse = R),
      (l.getInstagramThreadsResponse = L),
      (l.getMessengerThreadItemsResponse = E),
      (l.getInstagramThreadItemsResponse = k),
      (l.getContextCardDetailsResponse = I),
      (l.getBusinessIDFromContextCardDetailsResponse = T),
      (l.setConfigQueriesResponse = D),
      (l.decodeMessengerThreadId = P),
      (l.getUnifiedChannelFromMercuryOperations = M),
      (l.shouldUseUnifiedQuery = F),
      (l.logInstagramThreadItemsQueryPrediction = O),
      (l.logInteractionTracing = W));
  },
  98,
);
