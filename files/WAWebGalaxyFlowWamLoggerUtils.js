__d(
  "WAWebGalaxyFlowWamLoggerUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebExtensionScreenProgressWamEvent",
    "WAWebExtensionsStructuredMessageInteractionWamEvent",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebHandleMsgTypes",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
      );
    }
    function u(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? "group"
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? "broadcast"
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? "newsletter"
            : "individual";
    }
    function c(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    async function d(e) {
      var t = new (o(
        "WAWebStructuredMessageReceiveWamEvent",
      ).StructuredMessageReceiveWamEvent)({
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
        messageClassAttributes: p(e),
        businessOwnerJid: c(e),
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
              chat_type: u(e),
            }),
          }).commit());
    }
    function m(e) {
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
    function p(e) {
      var t,
        n,
        a,
        i,
        l = m(e);
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
        hsm_tag: e.hsmTag,
        extension_status: l == null || (i = l.data) == null ? void 0 : i.mode,
      });
    }
    function _(e) {
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
    function f(e) {
      var t;
      if (e.contact.id == null)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      var n = e.contact;
      return n == null || !n.isBusiness
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
        : ((t = e.contact) == null || (t = t.privacyMode) == null
              ? void 0
              : t.hostStorage) ===
            o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook
          ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI
          : n.isEnterprise
            ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
            : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB;
    }
    async function g(t) {
      await Promise.all(
        t.map(async function (t) {
          s(t) &&
            (await d(t).catch(function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:GALAXY_FLOW] structured msg receive log err: ",
                    "",
                  ])),
                String(t),
              );
            }));
        }),
      );
    }
    function h(e, t, n, a, i) {
      var l;
      new (o(
        "WAWebExtensionsStructuredMessageInteractionWamEvent",
      ).ExtensionsStructuredMessageInteractionWamEvent)({
        bizPlatform: f(t),
        businessOwnerJid: _(n),
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
    function y(e) {
      var t,
        n = e.chat,
        r = e.flowData,
        a = e.msg;
      new (o(
        "WAWebExtensionScreenProgressWamEvent",
      ).ExtensionScreenProgressWamEvent)({
        bizPlatform: f(n),
        businessOwnerJid: (t = _(a)) != null ? t : "",
        extensionCategory: JSON.stringify(r == null ? void 0 : r.categories),
        extensionRestoredFromCache: r == null ? void 0 : r.isRestoredFromCache,
        extensionScreenLength: r == null ? void 0 : r.screenLength,
        extensionStatus: r == null ? void 0 : r.mode,
        extensionsFlowId: r == null ? void 0 : r.flowId,
        extensionsMessageId:
          a.galaxyFlowWAMMessageId != null ? a.galaxyFlowWAMMessageId : "",
        extensionsSessionId: r == null ? void 0 : r.flowWAMSessionId,
        flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT
          .MESSAGE_CTA,
        flowStatusExit: "user_interrupted",
        hsmTag: a.hsmTag != null ? a.hsmTag : "",
        isTemplate: a.templateId != null,
        screenProgress: r.screenProgress,
        sequenceNumber: r.sequenceNumber,
        layoutType: r.layoutType,
        isSuccessScreen: r.isSuccess === !0,
      }).commit();
    }
    function C(e) {
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
    ((l.getFlowBusinessPhoneNumber = _),
      (l.getFlowsMaybeBizPlatform = f),
      (l.logStructuredMessageReceivedWAMEvent = g),
      (l.logStructuredMessageInteractionWAMEvent = h),
      (l.logExtensionScreenProgressWAMEvent = y),
      (l.logFlowsScreenActionWAMEvent = C));
  },
  98,
);
