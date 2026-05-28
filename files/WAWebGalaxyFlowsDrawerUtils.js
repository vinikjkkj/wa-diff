__d(
  "WAWebGalaxyFlowsDrawerUtils",
  [
    "fbt",
    "WABase64",
    "WAFlowsActionHandlerTypes",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebProfilePicThumbCollection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { screen: "RESPONSE" };
    function u() {
      var e = location.hostname.match(/(?:dev-web|web)\.(.+?)\.whatsapp\.com$/);
      return e
        ? "https://flows." + e[1] + ".whatsapp.net/flows-v2/wa-web/"
        : "https://flows.whatsapp.net/flows-v2/wa-web/";
    }
    var c = "flows-iframe",
      d = "flows-iframe-loaded",
      m = ["whatsapp.net"],
      p = u();
    function _(e, t) {
      var n, r;
      if (e.isResponseFlow) return "PUBLISHED";
      var a =
        (n = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
          e.flowId,
          t != null ? t : e.flowFetchedMetadata,
        )) == null
          ? void 0
          : n.state;
      return ((r = a != null ? a : e.mode) == null
        ? void 0
        : r.toUpperCase()) === "DRAFT"
        ? "DRAFT"
        : "PUBLISHED";
    }
    function f(e) {
      return e.flowAction ===
        o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE
        ? o("WAFlowsActionHandlerTypes").WELJActionType.DATA_EXCHANGE
        : o("WAFlowsActionHandlerTypes").WELJActionType.NAVIGATE;
    }
    function g(t) {
      var n,
        r = t.chat,
        a = t.flowInitData,
        i = t.messageData,
        l = t.responseViewer,
        s = i.isResponseFlow,
        u = function () {
          var e;
          o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.resyncPicturesByWid([r.contact.id]);
          var t = r.contact.getProfilePicThumb();
          return (e = t == null ? void 0 : t.img) != null ? e : "";
        },
        c = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
          i.flowId,
          i.flowFetchedMetadata,
        );
      return {
        public_key: h(i.flowFetchedMetadata),
        biz_jid: r.contact.id.toString(),
        flow_token: i.flowToken,
        extension_status: String(_(i)),
        qpl_message_id: i.flowQPLMessageId,
        wam_message_id: i.flowWAMMessageId,
        wam_session_id: "2C95C13B-5731-4508-8F88-863DAAC34A95",
        extension_id: i.flowId,
        qpl_session_id: "7342BB21-9B5E-4408-895C-D5171427E19F",
        business_name:
          (n = a == null ? void 0 : a.business_name) != null ? n : "",
        biz_logo: u(),
        is_template: i.isTemplate === !0,
        hsm_tag: i.hsmTag,
        categories: i.categories,
        biz_platform: o(
          "WAWebGalaxyFlowWamLoggerUtils",
        ).getFlowsMaybeBizPlatform(r),
        entry_point_conversion_source: i.entryPointConversionSource,
        entry_point_conversion_app: i.entryPointConversionApp,
        entry_point_conversation_initiated: -1,
        flow_action: f(i),
        flow_action_payload: o("WABase64").encodeB64(
          new TextEncoder().encode(JSON.stringify(s ? e : i.flowActionPayload)),
        ),
        flow_json: JSON.stringify(i.flowJSON),
        flow_entry_point: i.flowEntryPoint,
        click_sequence_number: null,
        is_flow_interactive: !0,
        response_viewer: l,
        response_message: i.flowResponseMessage,
        creation_source: i.creationSource,
        www_proxy_secret: c == null ? void 0 : c.www_proxy_secret,
        flow_token_signature: c == null ? void 0 : c.flow_token_signature,
      };
    }
    function h(e) {
      var t, n;
      if (!e) return "";
      var r = (t = e.xwa_extensions_get_flow_data) != null ? t : {},
        o = r.endpoint_public_key;
      return (n = o == null ? void 0 : o.key) != null ? n : "";
    }
    function y() {
      return navigator.onLine
        ? s._(/*BTDS*/ "Something went wrong.")
        : s._(/*BTDS*/ "Check your internet connection and try again.");
    }
    ((l.getFlowsUrl = u),
      (l.FLOWS_IFRAME_ID = c),
      (l.FLOWS_IFRAME_LOADED_EVENT = d),
      (l.SUPPORTED_ORIGINS = m),
      (l.FLOWS_URL = p),
      (l.getFlowStatus = _),
      (l.getFlowInitDataPayload = g),
      (l.getPublicKeyFromFetchedData = h),
      (l.getGalaxyFlowsFullScreenErrorString = y));
  },
  226,
);
