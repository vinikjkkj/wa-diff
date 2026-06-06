__d(
  "WAWebRichOrderStatusLogger",
  [
    "$InternalEnum",
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
    var e = n("$InternalEnum")({
      ORDER_TRACKING_URL_CLICK: "order_tracking_url_click",
      VIEW_ORDER_PRIMARY_CLICK: "view_order_primary_click",
      VIEW_ORDER_SECONDARY_CLICK: "view_order_secondary_click",
      VIEW_ORDER_ITEM_PLACEHOLDER_CLICK: "view_order_item_placeholder_click",
      ORDER_ITEM_ROW_CLICK: "order_item_row_click",
      ORDER_NUMBER_COPY: "order_number_copy",
      TRACKING_NUMBER_COPY: "tracking_number_copy",
      MESSAGE_HEADER_CLICK: "message_header_click",
      MESSAGE_CTA_CLICK: "message_cta_click",
    });
    async function s(e, t) {
      var n;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "utility_order_status_logging_enabled",
        )
      ) {
        var r = o("WAWebFrontendMsgGetters").getChat(e),
          a = o("WAWebContactCollection").ContactCollection.get(r.id),
          i = a ? o("WAWebContactGetters").getIsBusiness(a) : !1,
          l = i
            ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
            : o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE,
          s = r.archive
            ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
            : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
          u = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId(),
          c = o("WAWebChatGetters").getMuteExpiration(r),
          d = c > Date.now(),
          m = a ? o("WAWebFrontendContactGetters").getIsMyContact(a) : !1,
          p = Date.now(),
          _ = o("WAWebMsgGetters").getT(e),
          f = Math.round((p - _ * 1e3) / 1e3),
          g = o("WAWebChatGetters").getId(r).toString(),
          h = o("WAWebMsgGetters").getId(e),
          y = await Promise.all([
            o("WAWebChatThreadLogging").getMessageIDHMAC(h.toString()),
            o("WAWebChatThreadLogging").getChatThreadIDHMAC(g),
          ]),
          C = y[0],
          b = y[1],
          v = o("WAWebMsgGetters").getClientReceivedTsMillis(e),
          S = v != null ? Math.round((p - v) / 1e3) : void 0,
          R = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
          L = R.readReceipts !== "none";
        (new (o(
          "WAWebQbmRichOrderStatusInteractionWamEvent",
        ).QbmRichOrderStatusInteractionWamEvent)({
          actionTypeRichOrderStatus: t,
          chatsFolderType: s,
          contactType: l,
          deltaTime: f,
          deltaTimeReceived: S,
          isInsubContact: m,
          isMuted: d,
          messageIdHmac: C != null ? C : void 0,
          readReceiptsEnabled: L,
          threadIdHmac: b != null ? b : void 0,
          unifiedSessionId: u != null ? u : void 0,
        }).commit(),
          new (o(
            "WAWebBusinessTemplateRichOrderStatusWamEvent",
          ).BusinessTemplateRichOrderStatusWamEvent)({
            actionTypeRichOrderStatus: t,
            businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
              o("WAWebChatGetters").getId(r),
            ),
            chatsFolderType: s,
            contactType: l,
            isBizIntent: i,
            isInsubContact: m,
            isMuted: d,
            readReceiptsEnabled: L,
            templateId: (n = e.templateId) != null ? n : void 0,
          }).commit());
      }
    }
    async function u(e) {
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
                  S = s[h],
                  R = u[h];
                (m || (m = S.name !== R.name),
                  p || (p = S.quantity !== R.quantity),
                  _ || (_ = S.variant !== R.variant),
                  f || (f = S.image.file_sha256 !== R.image.file_sha256),
                  g ||
                    (g =
                      ((y = S.amount) == null ? void 0 : y.value) !==
                        ((C = R.amount) == null ? void 0 : C.value) ||
                      ((b = S.amount) == null ? void 0 : b.offset) !==
                        ((v = R.amount) == null ? void 0 : v.offset)));
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
    ((l.RichOrderStatusActionType = e),
      (l.logRichOrderStatusInteraction = s),
      (l.logRichOrderStatusInconsistencies = u));
  },
  98,
);
