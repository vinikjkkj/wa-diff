__d(
  "WAFlowsNativeWAMLogger",
  [
    "invariant",
    "WAFlowsBridgeEvents",
    "WAFlowsWAMExtensionsScreenProgressObjectBuilder",
    "WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder",
    "WAFlowsWAMFlowsScreenActionObjectbuilder",
    "WAFlowsWAMLoggerTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1,
      u = 1,
      c = 1,
      d = function (t) {
        return o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventBusinessPlatformType[
          (t != null ? t : c).toString()
        ];
      },
      m = function (t) {
        return t != null
          ? o("WAFlowsWAMLoggerTypes")
              .WAFlowsWAMEventEntryPointConversationInitiatedType[t.toString()]
          : null;
      },
      p = function (t) {
        return t != null
          ? o("WAFlowsWAMLoggerTypes").WAFlowsWAMEventFlowEntryPointType[
              t.toString()
            ]
          : null;
      },
      _ = async function (t, n, r) {
        var e = await r;
        e != null || s(0, 72522);
        var a = e.logging.wamLogging;
        (a != null || s(0, 76722), (t.sequence_number = u++));
        var i = o(
          "WAFlowsWAMFlowsScreenActionObjectbuilder",
        ).buildWAMFlowsScreenActionObject({
          bizPlatform: d(a.biz_platform),
          businessOwnerJid: e.environment.biz_jid,
          currentFlowId: e.environment.flow_id,
          flowsMessageId: a.wam_message_id,
          flowsSessionId: a.wam_session_id,
          flowsCurrentScreen: t.flows_current_screen,
          flowsCurrentScreenLayoutType:
            t == null ? void 0 : t.flows_current_screen_layout_type,
          flowsNextScreen: t == null ? void 0 : t.flows_next_screen,
          flowsNextScreenLayoutType:
            t == null ? void 0 : t.flows_next_screen_layout_type,
          currentSessionSequenceNumber: t.sequence_number,
          isTerminalScreen: t.is_terminal_screen
            ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE
            : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
          clickType: t == null ? void 0 : t.click_type,
          clickName: t == null ? void 0 : t.click_name,
          flowScreenData: t == null ? void 0 : t.flow_screen_data,
        });
        n.invoke({
          eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
            .WAMLogger,
          payload: i,
          hasCallback: !0,
          fallBackDataForWeb: null,
        });
      },
      f = async function (t, n) {
        (t.sequence_number !== void 0 && (t.sequence_number += 1),
          await n({
            eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
              .WAFlowsNavigate,
            hasCallback: !1,
            fallBackDataForWeb: null,
            payload: t,
          }));
      },
      g = function (n) {
        var t = n.getFlowInitData();
        return {
          logWAMNavigateEvent: async function (a, i) {
            var r;
            i === void 0 && (i = !1);
            var l = await t;
            l != null || s(0, 72522);
            var u = l.logging.wamLogging;
            (u != null || s(0, 76722), (a.sequence_number = e++));
            var c = o(
              "WAFlowsWAMExtensionsScreenProgressObjectBuilder",
            ).buildWAMExtensionsScreenProgressObject({
              bizPlatform: d(u.biz_platform),
              businessOwnerJid: l.environment.biz_jid,
              extensionScreenLength:
                (r = a.extension_screen_length) != null ? r : 0,
              extensionsFlowId: l.environment.flow_id,
              extensionsMessageId: u.wam_message_id,
              extensionSessionId: u.wam_session_id,
              screenProgress: a.screen_progress,
              sequenceNumber: a.sequence_number,
              extensionRestoredFromCache:
                a.is_restored === !0
                  ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE
                  : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
              extensionStatus: l.environment.flow_status,
              hsmTag: u.hsm_tag,
              isTemplate: u.is_template
                ? o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.TRUE
                : o("WAFlowsWAMLoggerTypes").WAFlowsBooleanType.FALSE,
              flowStatusExit: i
                ? o("WAFlowsWAMLoggerTypes")
                    .WAFlowsWAMExtensionsScreenProgressFlowStatusTypes
                    .FLOW_ERROR
                : null,
              entryPointConversionSource: u.entry_point_conversion_source,
              entryPointConversionApp: u.entry_point_conversion_app,
              entryPointConversationInitiated: m(
                u.entry_point_conversation_initiated,
              ),
              flowEntryPoint: p(u.flow_entry_point),
              clickSequenceNumber: u.click_sequence_number,
              layoutType: a.layout_type,
              shoppingCartItemsCount: a.shopping_cart_items_count,
            });
            return (
              n.invoke({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAMLogger,
                payload: c,
                hasCallback: !0,
                fallBackDataForWeb: null,
              }),
              f(a, n.invoke)
            );
          },
          logWAMFlowError: async function (r) {
            var e = await t;
            e != null || s(0, 72522);
            var a = e.logging.wamLogging;
            a != null || s(0, 76722);
            var i = {
                cta: "galaxy_message",
                flow_id: e.environment.flow_id,
                extension_status: e.environment.flow_status,
                extensions_message_id: a.wam_message_id,
                session_id: a.wam_session_id,
                error_type: r,
                click_sequence_number: a.click_sequence_number,
              },
              l = o(
                "WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder",
              ).buildWAMExtensionsStructuredMessageInteractionObject({
                bizPlatform: d(a.biz_platform),
                businessOwnerJid: e.environment.biz_jid,
                messageClass: "4|button_nfm",
                messageClassAttributes: JSON.stringify(i),
                messageInteraction: "3|flow_error",
                messageMediaType: "1|none",
                entryPointConversionSource: a.entry_point_conversion_source,
                entryPointConversionApp: a.entry_point_conversion_app,
                entryPointConversationInitiated: m(
                  a.entry_point_conversation_initiated,
                ),
                flowEntryPoint: p(a.flow_entry_point),
              });
            return (
              n.invoke({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAMLogger,
                payload: l,
                hasCallback: !0,
                fallBackDataForWeb: null,
              }),
              f({ is_terminal_error: !0 }, n.invoke)
            );
          },
          logWAMScreenActionEvent: function (r) {
            return _(r, n, t);
          },
          logWAMFlowSuccess: async function () {
            var e = await t;
            e != null || s(0, 72522);
            var r = e.logging.wamLogging;
            r != null || s(0, 76722);
            var a = {
                cta: "galaxy_message",
                flow_id: e.environment.flow_id,
                extension_status: e.environment.flow_status,
                extensions_message_id: r.wam_message_id,
                session_id: r.wam_session_id,
                click_sequence_number: r.click_sequence_number,
              },
              i = o(
                "WAFlowsWAMExtensionsStructuredMessageInteractionObjectBuilder",
              ).buildWAMExtensionsStructuredMessageInteractionObject({
                bizPlatform: d(r.biz_platform),
                businessOwnerJid: e.environment.biz_jid,
                messageClass: "4|button_nfm",
                messageClassAttributes: JSON.stringify(a),
                messageInteraction: "2|flow_success",
                messageMediaType: "1|none",
                entryPointConversionSource: r.entry_point_conversion_source,
                entryPointConversionApp: r.entry_point_conversion_app,
                entryPointConversationInitiated: m(
                  r.entry_point_conversation_initiated,
                ),
                flowEntryPoint: p(r.flow_entry_point),
              });
            return (
              n.invoke({
                eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                  .WAMLogger,
                payload: i,
                hasCallback: !0,
                fallBackDataForWeb: null,
              }),
              f({ is_terminal_success: !0 }, n.invoke)
            );
          },
        };
      },
      h = g;
    l.default = h;
  },
  98,
);
