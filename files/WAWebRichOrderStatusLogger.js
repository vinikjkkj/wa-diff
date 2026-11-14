__d(
  "WAWebRichOrderStatusLogger",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = -1,
      u = n("$InternalEnum")({
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "utility_order_status_logging_enabled",
            )
          ) {
            var i = o("WAWebFrontendMsgGetters").getChat(t),
              l = o("WAWebContactCollection").ContactCollection.get(i.id),
              u = l ? o("WAWebContactGetters").getIsBusiness(l) : !1,
              c = u
                ? o("WAWebWamEnumContactType").CONTACT_TYPE.SMB
                : o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE,
              d = i.archive
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
              m = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId(),
              p = o("WAWebChatGetters").getMuteExpiration(i),
              _ =
                p === s ||
                p > o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
              f = l ? o("WAWebFrontendContactGetters").getIsMyContact(l) : !1,
              g = Date.now(),
              h = o("WAWebMsgGetters").getT(t),
              y = Math.round((g - h * 1e3) / 1e3),
              C = o("WAWebChatGetters").getId(i).toString(),
              b = o("WAWebMsgGetters").getId(t),
              v = yield (e || (e = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(b.toString()),
                o("WAWebChatThreadLogging").getChatThreadIDHMAC(C),
              ]),
              S = v[0],
              R = v[1],
              L = o("WAWebMsgGetters").getClientReceivedTsMillis(t),
              E = L != null ? Math.round((g - L) / 1e3) : void 0,
              k = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              I = k.readReceipts !== "none";
            (new (o(
              "WAWebQbmRichOrderStatusInteractionWamEvent",
            ).QbmRichOrderStatusInteractionWamEvent)({
              actionTypeRichOrderStatus: r,
              chatsFolderType: d,
              contactType: c,
              deltaTime: y,
              deltaTimeReceived: E,
              isInsubContact: f,
              isMuted: _,
              messageIdHmac: S != null ? S : void 0,
              readReceiptsEnabled: I,
              threadIdHmac: R != null ? R : void 0,
              unifiedSessionId: m != null ? m : void 0,
            }).commit(),
              new (o(
                "WAWebBusinessTemplateRichOrderStatusWamEvent",
              ).BusinessTemplateRichOrderStatusWamEvent)({
                actionTypeRichOrderStatus: r,
                businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
                  o("WAWebChatGetters").getId(i),
                ),
                chatsFolderType: d,
                contactType: c,
                isBizIntent: u,
                isInsubContact: f,
                isMuted: _,
                readReceiptsEnabled: I,
                templateId: (a = t.templateId) != null ? a : void 0,
              }).commit());
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    ((l.RichOrderStatusActionType = u),
      (l.logRichOrderStatusInteraction = c),
      (l.logRichOrderStatusInconsistencies = m));
  },
  98,
);
