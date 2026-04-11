__d(
  "WAWebGalaxyFlowQPLLoggerUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsUtils",
    "WAWebQplFlowWrapper",
    "gkx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(200750681, "3410"),
      u = r("qpl")._(200743350, "3411"),
      c = (e = n("$InternalEnum"))({
        SCREEN_NAVIGATION_START: "screen_navigation_start",
        SCREEN_NAVIGATION_END: "screen_navigation_end",
        METADATA_NETWORK_START: "metadata_network_start",
        METADATA_NETWORK_END: "metadata_network_end",
        FETCHING_FLOW_DATA_START: "fetching_flow_data_start",
        FETCHING_FLOW_DATA_END: "fetching_flow_data_end",
        FETCHING_FLOW_JSON_START: "fetching_flow_json_start",
        FETCHING_FLOW_JSON_END: "fetching_flow_json_end",
        HTML_START: "html_start",
        HTML_END: "html_end",
      }),
      d = e({
        EXTENSION_METADATA_RESPONSE_ERROR: "extensions-metadata-response-error",
        NO_NETWORK_ERROR: "no-network-error",
        EXTENSION_WEBVIEW_LOADING_ERROR: "extensions-webview-loading-error",
        EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR:
          "extensions-metadata-graphql-response-error",
      }),
      m = e({ MESSAGE_CTA: "message_cta" });
    function p() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_wae_qpl_enabled");
    }
    function _() {
      p() && (h(4), o("WAWebQplFlowWrapper").QPL.markerStart(s));
    }
    function f(e) {
      p() && o("WAWebQplFlowWrapper").QPL.markerPoint(s, e);
    }
    function g(e) {
      p() && o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, e);
    }
    function h(e, t) {
      p() && o("WAWebQplFlowWrapper").QPL.markerEnd(s, e, t);
    }
    function y() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(s);
    }
    function C(e, t) {
      var n;
      return p()
        ? {
            string: {
              extension_id: t.flowId,
              flow_entry_point: m.MESSAGE_CTA,
              perf_origin: m.MESSAGE_CTA,
              session_id: t.flowQPLSessionId,
              biz_jid: o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).getFlowBusinessPhoneNumber(e),
              extension_message_id: e.galaxyFlowQPLMessageId,
            },
            bool: {
              is_debug_build: !r("gkx")("26258"),
              is_response_flow: !!t.isResponseFlow,
              data_channel_navigation: !o(
                "WAWebGalaxyFlowsUtils",
              ).isFlowInitWithoutDataChannel(
                (n = t == null ? void 0 : t.flowAction) != null ? n : "",
              ),
            },
          }
        : {};
    }
    var b = e({
        FETCH_START: "fetch_start",
        METADATA_NETWORK_START: "metadata_network_start",
        METADATA_NETWORK_END: "metadata_network_end",
        FETCH_END: "fetch_end",
      }),
      v = e({
        EXTENSIONS_METADATA_EMPTY_RESPONSE:
          "extensions-metadata-empty-response",
        EXTENSIONS_METADATA_RESPONSE_ERROR:
          "extensions-metadata-response-error",
        EXTENSIONS_INVALID_EXTENSIONS_ID: "extensions-invalid-extensions-id",
        EXTENSIONS_INVALID_PUBLIC_KEY: "extensions-invalid-public-key",
        EXTENSIONS_PUBLIC_KEY_SINGATURE_VERIFICATION_EXCEPTION:
          "extensions-public-key-signature-verification-exception",
        EXTENSIONS_PUBLIC_KEY_MISSING_IDENTITY_KEY_ERROR:
          "extensions-public-key-missing-identity-key-error",
        EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR:
          "extensions-metadata-graphql-response-error",
      }),
      S = e({
        EXTENSION_METADATA_PERF_TRACKER: "extensionMetadataPerfTracker",
      }),
      R = e({
        USER_INTERACTION: "user_interaction",
        SCREEN_TRANSITION_INTEGRITY_CHECK: "screen_transition_integrity_check",
      }),
      L = e({ OPTIONAL: "optional", REQUIRED: "required" });
    function E() {
      p() && (T(4), o("WAWebQplFlowWrapper").QPL.markerStart(u));
    }
    function k(e) {
      p() && o("WAWebQplFlowWrapper").QPL.markerPoint(u, e);
    }
    function I(e) {
      p() && o("WAWebQplFlowWrapper").QPL.markerAnnotate(u, e);
    }
    function T(e) {
      p() && o("WAWebQplFlowWrapper").QPL.markerEnd(u, e);
    }
    function D() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(u);
    }
    function x(e) {
      var t = JSON.stringify(e),
        n = new TextEncoder().encode(t != null ? t : "").length;
      I({ int: { metadata_response_size: n } });
    }
    function $(e) {
      var t = {};
      for (var n in e) {
        var r = e[n];
        if (typeof r == "string") {
          var o;
          t.string = babelHelpers.extends(
            {},
            t.string,
            ((o = {}), (o[n] = r), o),
          );
        } else if (typeof r == "number") {
          var a;
          t.int = babelHelpers.extends({}, t.int, ((a = {}), (a[n] = r), a));
        } else if (typeof r == "boolean") {
          var i;
          t.bool = babelHelpers.extends({}, t.bool, ((i = {}), (i[n] = r), i));
        }
      }
      return t;
    }
    function P(e, t, n) {
      return (
        n === void 0 && (n = L.OPTIONAL),
        p()
          ? {
              string: {
                biz_jid: o(
                  "WAWebGalaxyFlowWamLoggerUtils",
                ).getFlowBusinessPhoneNumber(e),
                fetch_context: R.USER_INTERACTION,
                extension_id: t.flowId,
                perf_origin: S.EXTENSION_METADATA_PERF_TRACKER,
                endpoint_public_key_fetch_mode: n,
              },
              bool: {
                is_debug_build: !r("gkx")("26258"),
                is_graphql_prod: r("gkx")("26258"),
              },
            }
          : {}
      );
    }
    function N() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "extensions_geoblocking_enabled",
        ) && o("WAWebABProps").getABPropConfigValue("commerce_sanctioned")
      );
    }
    function M() {
      p() && (h(4), T(4));
    }
    ((l.WaeScreenNavigationQPLPoints = c),
      (l.WaeScreenNavigationQPLErrorTypes = d),
      (l.qplWaeScreenNavigationStart = _),
      (l.qplWaeScreenNavigationPoint = f),
      (l.qplWaeScreenNavigationAnnotate = g),
      (l.qplWaeScreenNavigationEnd = h),
      (l.qplWaeScreenNavigationDrop = y),
      (l.getWaeScreenNavigationAnnotations = C),
      (l.WaeMetadataQPLPoints = b),
      (l.WaeMetadataQPLErrorTypes = v),
      (l.qplWaeMetadataStart = E),
      (l.qplWaeMetadataPoint = k),
      (l.qplWaeMetadataAnnotate = I),
      (l.qplWaeMetadataEnd = T),
      (l.qplWaeMetadataDrop = D),
      (l.qplAnnotateMetadataSize = x),
      (l.qplBuildAnnotations = $),
      (l.getWaeMetadataAnnotations = P),
      (l.isGalaxyFlowSanctioned = N),
      (l.clearAllActiveWaeQPLMarkerInstances = M));
  },
  98,
);
