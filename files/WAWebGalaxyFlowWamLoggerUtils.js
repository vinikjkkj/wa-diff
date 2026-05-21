__d(
  "WAWebGalaxyFlowWamLoggerUtils",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebExtensionScreenProgressWamEvent",
    "WAWebExtensionsStructuredMessageInteractionWamEvent",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebHandleMsgTypes.flow",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumFlowEntryPoint",
    "WAWebWamEnumStructuredMessageClass",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return (
        o("WAWebABProps").getABPropConfigValue("flows_wa_web") &&
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
      );
    }
    function c(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? "group"
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? "broadcast"
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? "newsletter"
            : "individual";
    }
    function d(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o(
            "WAWebStructuredMessageReceiveWamEvent",
          ).StructuredMessageReceiveWamEvent)({
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            messageClassAttributes: f(e),
            businessOwnerJid: d(e),
          });
          (t.commit(),
            o("WAWebABProps").getABPropConfigValue(
              "payments_br_p2m_buyer_logging_phase_2",
            ) &&
              new (o(
                "WAWebStructuredMessageBuyerReceiveWamEvent",
              ).StructuredMessageBuyerReceiveWamEvent)({
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                messageClassAttributes: JSON.stringify({
                  cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
                  is_template: e.templateId != null ? 1 : 0,
                  chat_type: c(e),
                }),
              }).commit());
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t,
        n = [];
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
          ((t = e.interactivePayload) == null ? void 0 : t.buttons) != null &&
          e.interactivePayload.buttons.forEach(function (t, r) {
            var a,
              i = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowCtaButton(
                (a = t.buttonParamsJson) != null ? a : "",
                r,
                e.t,
              );
            i != null && n.push(i);
          }),
        n.length === 0 ? null : n[0]
      );
    }
    function f(e) {
      var t,
        n,
        a,
        i,
        l = _(e);
      return JSON.stringify({
        cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
        flow_id: l == null || (t = l.data) == null ? void 0 : t.flowId,
        extensions_message_id: e.galaxyFlowWAMMessageId,
        is_flow_message_with_payload: o(
          "WAWebGalaxyFlowsUtils",
        ).isFlowInitWithoutDataChannel(
          (n = l == null || (a = l.data) == null ? void 0 : a.flowAction) !=
            null
            ? n
            : "",
        ),
        is_template: e.templateId != null ? 1 : 0,
        extension_status: l == null || (i = l.data) == null ? void 0 : i.mode,
      });
    }
    function g(e) {
      try {
        var t, n, r;
        if ((t = e.from) != null && t.isLid()) {
          var a, i;
          return (a =
            (i = o("WAWebApiContact").getPhoneNumber(
              o("WAWebWidFactory").asUserLidOrThrow(e.from),
            )) == null
              ? void 0
              : i.user) != null
            ? a
            : "";
        }
        return (n = (r = e.from) == null ? void 0 : r.user) != null ? n : "";
      } catch (t) {
        var l, s;
        return (l = (s = e.from) == null ? void 0 : s.user) != null ? l : "";
      }
    }
    function h(e) {
      var t;
      if (e.contact.id == null)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      var n = e.contact;
      return n == null || !n.isBusiness
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
        : ((t = e.contact) == null || (t = t.privacyMode) == null
              ? void 0
              : t.hostStorage) ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook
          ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI
          : n.isEnterprise
            ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
            : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield (s || (s = n("Promise"))).all(
            t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    u(t) &&
                      (yield m(t).catch(function (t) {
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAM:GALAXY_FLOW] structured msg receive log err: ",
                              "",
                            ])),
                          String(t),
                        );
                      }));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, a, i) {
      var l;
      new (o(
        "WAWebExtensionsStructuredMessageInteractionWamEvent",
      ).ExtensionsStructuredMessageInteractionWamEvent)({
        bizPlatform: h(t),
        businessOwnerJid: g(n),
        flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
          .MESSAGE_CTA,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageInteraction: a,
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(n),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends(
            {
              cta: r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW,
              flow_id: e == null ? void 0 : e.flowId,
              extensions_message_id: n.galaxyFlowWAMMessageId,
              session_id: e == null ? void 0 : e.flowWAMSessionId,
              is_template: n.templateId != null ? 1 : 0,
              extension_status: e == null ? void 0 : e.mode,
              categories: JSON.stringify(e == null ? void 0 : e.categories),
              data_channel_navigation: !o(
                "WAWebGalaxyFlowsUtils",
              ).isFlowInitWithoutDataChannel(
                (l = e == null ? void 0 : e.flowAction) != null ? l : "",
              ),
            },
            i != null ? { error_type: i } : {},
          ),
        ),
      }).commit();
    }
    function v(e, t, n) {
      var r;
      new (o(
        "WAWebExtensionScreenProgressWamEvent",
      ).ExtensionScreenProgressWamEvent)({
        bizPlatform: h(t),
        businessOwnerJid: (r = g(n)) != null ? r : "",
        extensionCategory: JSON.stringify(e == null ? void 0 : e.categories),
        extensionRestoredFromCache: e == null ? void 0 : e.isRestoredFromCache,
        extensionScreenLength: e == null ? void 0 : e.screenLength,
        extensionStatus: e == null ? void 0 : e.mode,
        extensionsFlowId: e == null ? void 0 : e.flowId,
        extensionsMessageId:
          n.galaxyFlowWAMMessageId != null ? n.galaxyFlowWAMMessageId : "",
        extensionsSessionId: e == null ? void 0 : e.flowWAMSessionId,
        flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
          .MESSAGE_CTA,
        flowStatusExit: "user_interrupted",
        hsmTag: n.hsmTag != null ? n.hsmTag : "",
        isTemplate: n.templateId != null,
        screenProgress: e.screenProgress,
        sequenceNumber: e.sequenceNumber,
        layoutType: e.layoutType,
        isSuccessScreen: e.isSuccess === !0,
      }).commit();
    }
    function S(e) {
      var t = e.bizPlatform,
        n = e.businessOwnerJid,
        r = e.clickType,
        a = e.currentFlowId,
        i = e.flowsMessageId,
        l = e.flowsSessionId;
      new (o("WAWebWamCodegenWamEvent").RawWamEvent)({
        id: 5980,
        weight: 0,
        wamChannel: "private",
        privateStatsIdInt: 0,
        1: t,
        2: n,
        4: r,
        5: a,
        8: "RESPONSE",
        10: i,
        13: l,
        14: 1,
      }).commit();
    }
    ((l.getFlowBusinessPhoneNumber = g),
      (l.getFlowsMaybeBizPlatform = h),
      (l.logStructuredMessageReceivedWAMEvent = y),
      (l.logStructuredMessageInteractionWAMEvent = b),
      (l.logExtensionScreenProgressWAMEvent = v),
      (l.logFlowsScreenActionWAMEvent = S));
  },
  98,
);
