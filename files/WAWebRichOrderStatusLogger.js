__d(
  "WAWebRichOrderStatusLogger",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "utility_order_status_logging_enabled",
            )
          ) {
            var i = o("WAWebFrontendMsgGetters").getChat(t),
              l = o("WAWebContactCollection").ContactCollection.get(i.id),
              s = l ? o("WAWebContactGetters").getIsBusiness(l) : !1,
              u = s
                ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
                : o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE,
              c = i.archive
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
              d = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId(),
              m = o("WAWebChatGetters").getMuteExpiration(i),
              p = m > Date.now(),
              _ = l ? o("WAWebFrontendContactGetters").getIsMyContact(l) : !1,
              f = Date.now(),
              g = o("WAWebMsgGetters").getT(t),
              h = Math.round((f - g * 1e3) / 1e3),
              y = o("WAWebChatGetters").getId(i).toString(),
              C = o("WAWebMsgGetters").getId(t),
              b = yield (e || (e = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(C.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(y),
              ]),
              v = b[0],
              S = b[1],
              R = o("WAWebMsgGetters").getClientReceivedTsMillis(t),
              L = R != null ? Math.round((f - R) / 1e3) : void 0,
              E = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              k = E.readReceipts !== "none";
            (new (o(
              "WAWebQbmRichOrderStatusInteractionWamEvent",
            ).QbmRichOrderStatusInteractionWamEvent)({
              actionTypeRichOrderStatus: r,
              chatsFolderType: c,
              contactType: u,
              deltaTime: h,
              deltaTimeReceived: L,
              isInsubContact: _,
              isMuted: p,
              messageIdHmac: v != null ? v : void 0,
              readReceiptsEnabled: k,
              threadIdHmac: S != null ? S : void 0,
              unifiedSessionId: d != null ? d : void 0,
            }).commit(),
              new (o(
                "WAWebBusinessTemplateRichOrderStatusWamEvent",
              ).BusinessTemplateRichOrderStatusWamEvent)({
                actionTypeRichOrderStatus: r,
                businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
                  o("WAWebChatGetters").getId(i),
                ),
                chatsFolderType: c,
                contactType: u,
                isBizIntent: s,
                isInsubContact: _,
                isMuted: p,
                readReceiptsEnabled: k,
                templateId: (a = t.templateId) != null ? a : void 0,
              }).commit());
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  ).PsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent)(
                    {
                      businessJid: o(
                        "WAWebUtilsPnhSmbLoggingHelper",
                      ).jidToPnString(o("WAWebChatGetters").getId(n)),
                      hasCurrencyChanged: c,
                      hasHeaderImageChanged: l,
                      hasItemImageChanged: f,
                      hasItemNameChanged: m,
                      hasItemNumberChanged: d,
                      hasItemPriceChanged: g,
                      hasItemQuantityChanged: p,
                      hasItemVariantChanged: _,
                    },
                  ).commit();
                }
              }
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.RichOrderStatusActionType = s),
      (l.logRichOrderStatusInteraction = u),
      (l.logRichOrderStatusInconsistencies = d));
  },
  98,
);
