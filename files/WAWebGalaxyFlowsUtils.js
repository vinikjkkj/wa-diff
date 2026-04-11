__d(
  "WAWebGalaxyFlowsUtils",
  [
    "Promise",
    "WABase64",
    "WAFlowsExpiredCacheCleaner",
    "WAWebABProps",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebStateUtils",
    "asyncToGeneratorRuntime",
    "tryParseJSONMixed",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "navigate";
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebABProps").getABPropConfigValue("flows_wa_web"))
            try {
              yield o("WAFlowsExpiredCacheCleaner").clearExpiredCachedStates();
            } catch (e) {}
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e === s;
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t != null && t.aborted) throw new Error("Request aborted");
          o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
            o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
              .FETCHING_FLOW_JSON_START,
          );
          var n = yield window.fetch("/flows/json/" + e, { signal: t }),
            r = yield n.json();
          return (
            (t != null && t.aborted) ||
              o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(
                o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints
                  .FETCHING_FLOW_JSON_END,
              ),
            r
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = o("WAWebStateUtils").unproxy(e);
      return (
        (t.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
        (t.subtype = o(
          "WAWebCommonMsgSubtypeTypes",
        ).MsgSubtype.PhoneOnlyFeature),
        t
      );
    }
    function f(e) {
      var t;
      return (
        ((t = e.nativeFlowResponseMessage) == null ? void 0 : t.name) ===
          String(r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) &&
        o("WAWebABProps").getABPropConfigValue("flows_wa_web")
      );
    }
    function g(e) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = v();
          return C(e.id, t).then(function (e) {
            var t = e.flowQPLMessageId,
              n = e.flowWAMMessageId;
            return { flowQPLMessageId: t, flowWAMMessageId: n };
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = new TextEncoder(),
            i = a.encode(t + r + "_qpl"),
            l = a.encode(t + r + "_wam"),
            s = yield (e || (e = n("Promise"))).all([
              crypto.subtle.digest({ name: "SHA-256" }, i),
              crypto.subtle.digest({ name: "SHA-256" }, l),
            ]),
            u = s[0],
            c = s[1],
            d = o("WABase64").encodeB64(u),
            m = o("WABase64").encodeB64(c);
          return { flowQPLMessageId: d, flowWAMMessageId: m };
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      var e = new Uint8Array(16);
      return (
        crypto.getRandomValues(e),
        Array.from(e, function (e) {
          return String.fromCharCode(e);
        }).join("")
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebABProps").getABPropConfigValue("flows_wa_web")) return t;
          var a = t.filter(function (e) {
            return (
              e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              e.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW &&
              e.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
            );
          });
          if (a.length === 0) return t;
          var i = new Map();
          return (
            yield (e || (e = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = yield h(e.id),
                          n = t.flowQPLMessageId,
                          r = t.flowWAMMessageId;
                        i.set(e.id.id, {
                          flowWAMMessageId: r,
                          flowQPLMessageId: n,
                        });
                      } catch (e) {}
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            t.map(function (e) {
              var t = i.get(e.id.id);
              return t != null
                ? babelHelpers.extends({}, e, {
                    galaxyFlowWAMMessageId: t.flowWAMMessageId,
                    galaxyFlowQPLMessageId: t.flowQPLMessageId,
                  })
                : e;
            })
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
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
    ((l.clearGalaxyFlowsCache = u),
      (l.isFlowInitWithoutDataChannel = d),
      (l.fetchFlowJSON = m),
      (l.getInvalidatedFlowMessageFromHistorySync = _),
      (l.isResponseFlowSupported = f),
      (l.isFlexibleCheckoutForm = g),
      (l.computeMessageIds = h),
      (l.maybeAddGalaxyFlowMessageIds = S),
      (l.getFlowDataFromFetchedData = L));
  },
  98,
);
