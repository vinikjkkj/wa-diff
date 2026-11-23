__d(
  "WAWebRichOrderStatusLogger",
  [
    "$InternalEnum",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBusinessTemplateRichOrderStatusWamEvent",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent",
    "WAWebQbmRichOrderStatusInteractionWamEvent",
    "WAWebUnifiedSession",
    "WAWebUserPrefsGeneral",
    "WAWebUtilsPnhSmbLoggingHelper",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = n("$InternalEnum")({
        ORDER_TRACKING_URL_CLICK: "order_tracking_url_click",
        VIEW_ORDER_PRIMARY_CLICK: "view_order_primary_click",
        VIEW_ORDER_SECONDARY_CLICK: "view_order_secondary_click",
        VIEW_ORDER_ITEM_PLACEHOLDER_CLICK: "view_order_item_placeholder_click",
        ORDER_ITEM_ROW_CLICK: "order_item_row_click",
        ORDER_NUMBER_COPY: "order_number_copy",
        TRACKING_NUMBER_COPY: "tracking_number_copy",
        MESSAGE_HEADER_CLICK: "message_header_click",
        MESSAGE_CTA_VIEW_ORDER_CLICK: "message_cta_view_order_click",
        MESSAGE_CTA_TRACK_ORDER_CLICK: "message_cta_track_order_click",
      });
    async function u(t, n) {
      var r;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "utility_order_status_logging_enabled",
        )
      ) {
        var a = o("WAWebFrontendMsgGetters").getChat(t),
          i = o("WAWebContactCollection").ContactCollection.get(a.id),
          l = i ? o("WAWebContactGetters").getIsBusiness(i) : !1,
          s = l
            ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
            : o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE,
          u = a.archive
            ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
            : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
          c = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId(),
          d = o("WAWebChatGetters").getMuteExpiration(a),
          m =
            d === e ||
            d > o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
          p = i ? o("WAWebFrontendContactGetters").getIsMyContact(i) : !1,
          _ = Date.now(),
          f = o("WAWebMsgGetters").getT(t),
          g = Math.round((_ - f * 1e3) / 1e3),
          h = o("WAWebChatGetters").getId(a).toString(),
          y = o("WAWebMsgGetters").getId(t),
          C = await Promise.all([
            o("WAWebChatThreadLogging").getMessageIDHMAC(y.toString()),
            o("WAWebChatThreadLogging").getChatThreadIDHMAC(h),
          ]),
          b = C[0],
          v = C[1],
          S = o("WAWebMsgGetters").getClientReceivedTsMillis(t),
          R = S != null ? Math.round((_ - S) / 1e3) : void 0,
          L = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
          E = L.readReceipts !== "none";
        (new (o(
          "WAWebQbmRichOrderStatusInteractionWamEvent",
        ).QbmRichOrderStatusInteractionWamEvent)({
          actionTypeRichOrderStatus: n,
          chatsFolderType: u,
          contactType: s,
          deltaTime: g,
          deltaTimeReceived: R,
          isInsubContact: p,
          isMuted: m,
          messageIdHmac: b != null ? b : void 0,
          readReceiptsEnabled: E,
          threadIdHmac: v != null ? v : void 0,
          unifiedSessionId: c != null ? c : void 0,
        }).commit(),
          new (o(
            "WAWebBusinessTemplateRichOrderStatusWamEvent",
          ).BusinessTemplateRichOrderStatusWamEvent)({
            actionTypeRichOrderStatus: n,
            businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
              o("WAWebChatGetters").getId(a),
            ),
            chatsFolderType: u,
            contactType: s,
            isBizIntent: l,
            isInsubContact: p,
            isMuted: m,
            readReceiptsEnabled: E,
            templateId: (r = t.templateId) != null ? r : void 0,
          }).commit());
      }
    }
    async function c(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "utility_order_status_logging_enabled",
        )
      ) {
        var t = o("WAWebOrderStatusButton").getOrderStatusButton(e);
        if (t) {
          var n = o("WAWebFrontendMsgGetters").getChat(e),
            r = o("WAWebOrderStatus").getMergedOrderStatus(n, t),
            a = r.firstMessage;
          if (a) {
            var i = o("WAWebOrderStatusButton").getOrderStatusButton(a);
            if (i) {
              for (
                var l = e.mediaData.filehash !== a.mediaData.filehash,
                  s = t.order.items || [],
                  u = i.order.items || [],
                  c = t.order.currency !== i.order.currency,
                  d = s.length !== u.length,
                  m = !1,
                  p = !1,
                  _ = !1,
                  f = !1,
                  g = !1,
                  h = 0;
                h < Math.min(s.length, u.length);
                h++
              ) {
                var y,
                  C,
                  b,
                  v,
                  S,
                  R,
                  L = s[h],
                  E = u[h];
                (m || (m = L.name !== E.name),
                  p || (p = L.quantity !== E.quantity),
                  _ || (_ = L.variant !== E.variant),
                  f ||
                    (f =
                      ((y = L.image) == null ? void 0 : y.file_sha256) !==
                      ((C = E.image) == null ? void 0 : C.file_sha256)),
                  g ||
                    (g =
                      ((b = L.amount) == null ? void 0 : b.value) !==
                        ((v = E.amount) == null ? void 0 : v.value) ||
                      ((S = L.amount) == null ? void 0 : S.offset) !==
                        ((R = E.amount) == null ? void 0 : R.offset)));
              }
              new (o(
                "WAWebPsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent",
              ).PsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent)({
                businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
                  o("WAWebChatGetters").getId(n),
                ),
                hasCurrencyChanged: c,
                hasHeaderImageChanged: l,
                hasItemImageChanged: f,
                hasItemNameChanged: m,
                hasItemNumberChanged: d,
                hasItemPriceChanged: g,
                hasItemQuantityChanged: p,
                hasItemVariantChanged: _,
              }).commit();
            }
          }
        }
      }
    }
    ((l.RichOrderStatusActionType = s),
      (l.logRichOrderStatusInteraction = u),
      (l.logRichOrderStatusInconsistencies = c));
  },
  98,
);
