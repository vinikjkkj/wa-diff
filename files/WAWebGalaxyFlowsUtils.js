__d(
  "WAWebGalaxyFlowsUtils",
  [
    "WABase64",
    "WAFlowsExpiredCacheCleaner",
    "WAWebABProps",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebStateUtils",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "navigate";
    async function s() {
      if (o("WAWebABProps").getABPropConfigValue("flows_wa_web"))
        try {
          await o("WAFlowsExpiredCacheCleaner").clearExpiredCachedStates();
        } catch (e) {}
    }
    function u(t) {
      return t === e;
    }
    async function c(e, t) {
      if (t != null && t.aborted) {
        var n = new Error("Request aborted");
        throw (n.stack, n);
      }
      o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
        o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
          .FETCHING_FLOW_JSON_START,
      );
      var r = await window.fetch("/flows/json/" + e, { signal: t }),
        a = await r.json();
      return (
        (t != null && t.aborted) ||
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_JSON_END,
          ),
        a
      );
    }
    function d(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        (t.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
        (t.subtype = o(
          "WAWebCommonMsgSubtypeTypes",
        ).MsgSubtype.PhoneOnlyFeature),
        t
      );
    }
    function m(e) {
      var t;
      return (
        ((t = e.nativeFlowResponseMessage) == null ? void 0 : t.name) ===
          String(r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) &&
        o("WAWebABProps").getABPropConfigValue("flows_wa_web")
      );
    }
    function p(e) {
      if (
        e.nativeFlowResponseMessage != null &&
        e.nativeFlowResponseMessage.paramsJson != null
      ) {
        var t = r("tryParseJSONMixed")(e.nativeFlowResponseMessage.paramsJson);
        if (
          t != null &&
          typeof t == "object" &&
          t.wa_flow_response_params != null &&
          t.wa_flow_response_params.flow_creation_source != null
        ) {
          var n =
            t.wa_flow_response_params.flow_creation_source ===
            "FLEXIBLE_CHECKOUT";
          return n;
        }
      }
      return !1;
    }
    async function _(e) {
      var t = g();
      return f(e.id, t).then(function (e) {
        var t = e.flowQPLMessageId,
          n = e.flowWAMMessageId;
        return { flowQPLMessageId: t, flowWAMMessageId: n };
      });
    }
    async function f(e, t) {
      var n = new TextEncoder(),
        r = n.encode(e + t + "_qpl"),
        a = n.encode(e + t + "_wam"),
        i = await Promise.all([
          crypto.subtle.digest({ name: "SHA-256" }, r),
          crypto.subtle.digest({ name: "SHA-256" }, a),
        ]),
        l = i[0],
        s = i[1],
        u = o("WABase64").encodeB64(l),
        c = o("WABase64").encodeB64(s);
      return { flowQPLMessageId: u, flowWAMMessageId: c };
    }
    function g() {
      var e = new Uint8Array(16);
      return (
        crypto.getRandomValues(e),
        Array.from(e, function (e) {
          return String.fromCharCode(e);
        }).join("")
      );
    }
    async function h(e) {
      if (!o("WAWebABProps").getABPropConfigValue("flows_wa_web")) return e;
      var t = e.filter(function (e) {
        return (
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
        );
      });
      if (t.length === 0) return e;
      var n = new Map();
      return (
        await Promise.all(
          t.map(async function (e) {
            try {
              var t = await _(e.id),
                r = t.flowQPLMessageId,
                o = t.flowWAMMessageId;
              n.set(e.id.id, { flowWAMMessageId: o, flowQPLMessageId: r });
            } catch (e) {}
          }),
        ),
        e.map(function (e) {
          var t = n.get(e.id.id);
          return t != null
            ? babelHelpers.extends({}, e, {
                galaxyFlowWAMMessageId: t.flowWAMMessageId,
                galaxyFlowQPLMessageId: t.flowQPLMessageId,
              })
            : e;
        })
      );
    }
    function y(e, t) {
      var n,
        r,
        o,
        a =
          t == null || (n = t.xwa_extensions_get_flow_data) == null
            ? void 0
            : n.extensions_flow_data;
      if (a == null || a.length === 0) return null;
      var i = a.find(function (t) {
        return t.flow_id === e;
      });
      return (r =
        i == null || (o = i.extensions) == null ? void 0 : o.metadata) != null
        ? r
        : null;
    }
    ((l.clearGalaxyFlowsCache = s),
      (l.isFlowInitWithoutDataChannel = u),
      (l.fetchFlowJSON = c),
      (l.getInvalidatedFlowMessageFromHistorySync = d),
      (l.isResponseFlowSupported = m),
      (l.isFlexibleCheckoutForm = p),
      (l.computeMessageIds = _),
      (l.maybeAddGalaxyFlowMessageIds = h),
      (l.getFlowDataFromFetchedData = y));
  },
  98,
);
