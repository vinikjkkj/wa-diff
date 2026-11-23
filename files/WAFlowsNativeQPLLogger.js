__d(
  "WAFlowsNativeQPLLogger",
  [
    "invariant",
    "WAFlowsBridgeEvents",
    "WAFlowsLoggingUtils",
    "WAFlowsWebNativeBridgeClientABPropsContext.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, r) {
        var e = {},
          o = {};
        return (
          t != null && (e.error_type = t),
          n != null && (e.error_message = n),
          r === !0 && (o.is_resumed = r),
          { stringAnnotations: e, boolAnnotations: o }
        );
      },
      u = function (t) {
        var e = t > 0 ? t + "_" : "";
        return {
          EncryptionStart: "encryption_" + e + "start",
          EncryptionEnd: "encryption_" + e + "end",
          DecryptionStart: "decryption_" + e + "start",
          DecryptionEnd: "decryption_" + e + "end",
          ForwardNetworkStart: "forward_network_" + e + "start",
          ForwardNetworkEnd: "forward_network_" + e + "end",
        };
      },
      c = async function (n, r, a, i, l) {
        var t = l.destinationScreen,
          u = l.flowErrorMessage,
          c = l.flowErrorType,
          m = l.is_restored,
          p = m === void 0 ? !1 : m,
          _ = l.isDataChannelNavigation,
          f = _ === void 0 ? !0 : _,
          g = l.mediaMimeType,
          h = g === void 0 ? "" : g,
          y = l.mediaSizeBytes,
          C = y === void 0 ? "" : y;
        if (await d(n)) {
          var b = await r;
          b != null || s(0, 72522);
          var v = e(c, u, p),
            S = v.boolAnnotations,
            R = v.stringAnnotations;
          (t != null && t !== "" && (R.destination_screen_id = t),
            await a({
              event: 200750681,
              intAnnotations: {},
              stringAnnotations: babelHelpers.extends({}, R, {
                extension_status: b.environment.flow_status,
                media_mime_type: h,
                media_size_bytes: C,
                controller_type: o(
                  "WAFlowsLoggingUtils",
                ).getFlowsControllerType(),
              }),
              boolAnnotations: babelHelpers.extends({}, S, {
                data_channel_navigation: f,
              }),
            }),
            await i(200750681, c == null ? 2 : 3));
        }
      },
      d = async function (t) {
        var e,
          n,
          r,
          a = o(
            "WAFlowsWebNativeBridgeClientABPropsContext.react",
          ).clientABPropsHandler(t),
          i = a.getABProps,
          l = await i();
        return (
          (l == null || (e = l.ios_wae_qpl_enabled) == null
            ? void 0
            : e.boolValue) === !0 ||
          (l == null || (n = l.android_wae_qpl_enabled) == null
            ? void 0
            : n.boolValue) === !0 ||
          (l == null || (r = l.wa_web_wae_qpl_enabled) == null
            ? void 0
            : r.boolValue) === !0
        );
      },
      m = async function (t, n) {
        (await d(t)) && (await n());
      },
      p = function (n) {
        var t = n.getFlowInitData(),
          r = function (t) {
            var e = { event: t };
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerStart,
              payload: e,
              hasCallback: !1,
              fallBackDataForWeb: null,
            });
          },
          a = function (t) {
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerAnnotate,
              hasCallback: !1,
              fallBackDataForWeb: null,
              payload: t,
            });
          },
          i = function (t) {
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerPoint,
              hasCallback: !1,
              fallBackDataForWeb: null,
              payload: t,
            });
          },
          l = function (t, r) {
            var e = { event: t, action: r };
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerEnd,
              payload: e,
              hasCallback: !1,
              fallBackDataForWeb: null,
            });
          },
          p = function (t) {
            var e = { event: t };
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerDrop,
              payload: e,
              hasCallback: !1,
              fallBackDataForWeb: null,
            });
          },
          _ = function (t, r, a) {
            var e = { event: t, name: r, instanceKey: a };
            return n.invoke({
              eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
                .WAQPLLoggerSubspanStart,
              payload: e,
              hasCallback: !1,
              fallBackDataForWeb: null,
            });
          };
        return {
          getWAFlowsQPLNavigationPoints: u,
          qplScreenNavigationStart: async function (o) {
            if ((o === void 0 && (o = ""), !!(await d(n.invoke)))) {
              var e = await t;
              (e != null || s(0, 72522), await r(200750681));
              var i = e.logging.qplLogging;
              i != null || s(0, 76750);
              var l = babelHelpers.extends(
                {
                  biz_jid: e.environment.biz_jid,
                  extension_id: e.environment.flow_id,
                  extension_message_id: i.qpl_message_id,
                  session_id: i.qpl_session_id,
                },
                o === "" ? {} : { source_screen_id: o },
                { perf_origin: "bloks_screen_cta" },
              );
              await a({
                event: 200750681,
                stringAnnotations: l,
                intAnnotations: {},
                boolAnnotations: {},
              });
            }
          },
          qplScreenNavigationPoint: function (t) {
            return m(n.invoke, async function () {
              await i({ event: 200750681, name: t });
            });
          },
          qplScreenNavigationDrop: function () {
            return m(n.invoke, async function () {
              await p(200750681);
            });
          },
          qplInitPhoenixFlowDrop: function () {
            return m(n.invoke, async function () {
              await p(200739086);
            });
          },
          qplScreenNavigationAnnotate: function (t) {
            var e = t.stringAnnotations,
              r = e === void 0 ? {} : e,
              o = t.boolAnnotations,
              i = o === void 0 ? {} : o,
              l = t.intAnnotations,
              s = l === void 0 ? {} : l;
            return m(n.invoke, async function () {
              await a({
                event: 200750681,
                stringAnnotations: r,
                boolAnnotations: i,
                intAnnotations: s,
              });
            });
          },
          qplScreenNavigationEnd: async function (r) {
            await c(n.invoke, t, a, l, r);
          },
          qplInitPhoenixScreenNavigationEnd: async function (r) {
            var t = r.flowErrorMessage,
              o = r.flowErrorType,
              i = r.is_restored;
            if (await d(n.invoke)) {
              var s = e(o, t, i),
                u = s.boolAnnotations,
                c = s.stringAnnotations;
              ((u.is_resumed = i != null ? i : !1),
                await a({
                  event: 200739086,
                  intAnnotations: {},
                  stringAnnotations: c,
                  boolAnnotations: u,
                }),
                await l(200739086, 3));
            }
          },
          qplScreenNavigationSubspanStart: async function (t, r) {
            var e = o(
                "WAFlowsWebNativeBridgeClientABPropsContext.react",
              ).clientABPropsHandler(n.invoke),
              a = e.getABProps,
              i = await a();
            i != null &&
              i.flows_response_message_sli_qpl_enabled &&
              (await d(n.invoke)) &&
              (await _(200750681, t, r));
          },
        };
      },
      _ = p;
    l.default = _;
  },
  98,
);
