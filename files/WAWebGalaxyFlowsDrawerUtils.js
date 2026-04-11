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
    var e = { screen: "RESPONSE" },
      u = function () {
        var e = location.hostname.match(
          /(?:dev-web|web)\.(.+?)\.whatsapp\.com$/,
        );
        return e
          ? "https://flows." + e[1] + ".whatsapp.net/flows-v2/wa-web/"
          : "https://flows.whatsapp.net/flows-v2/wa-web/";
      },
      c = "flows-iframe",
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
    function g(t, n, r, a) {
      var i,
        l = n.isResponseFlow,
        s = function () {
          var e;
          o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.resyncPicturesByWid([t.contact.id]);
          var n = t.contact.getProfilePicThumb();
          return (e = n == null ? void 0 : n.img) != null ? e : "";
        },
        u = o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(
          n.flowId,
          n.flowFetchedMetadata,
        );
      return {
        public_key: h(n.flowFetchedMetadata),
        biz_jid: t.contact.id.toString(),
        flow_token: n.flowToken,
        extension_status: String(_(n)),
        qpl_message_id: n.flowQPLMessageId,
        wam_message_id: n.flowWAMMessageId,
        wam_session_id: "2C95C13B-5731-4508-8F88-863DAAC34A95",
        extension_id: n.flowId,
        qpl_session_id: "7342BB21-9B5E-4408-895C-D5171427E19F",
        business_name:
          (i = r == null ? void 0 : r.business_name) != null ? i : "",
        biz_logo: s(),
        is_template: n.isTemplate === !0,
        hsm_tag: n.hsmTag,
        categories: n.categories,
        biz_platform: o(
          "WAWebGalaxyFlowWamLoggerUtils",
        ).getFlowsMaybeBizPlatform(t),
        entry_point_conversion_source: n.entryPointConversionSource,
        entry_point_conversion_app: n.entryPointConversionApp,
        entry_point_conversation_initiated: -1,
        flow_action: f(n),
        flow_action_payload: o("WABase64").encodeB64(
          new TextEncoder().encode(JSON.stringify(l ? e : n.flowActionPayload)),
        ),
        flow_json: JSON.stringify(n.flowJSON),
        flow_entry_point: n.flowEntryPoint,
        click_sequence_number: null,
        is_flow_interactive: !0,
        response_viewer: a,
        response_message: n.flowResponseMessage,
        creation_source: n.creationSource,
        www_proxy_secret: u == null ? void 0 : u.www_proxy_secret,
        flow_token_signature: u == null ? void 0 : u.flow_token_signature,
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
