__d(
  "WAFlowsWebNativeBridgeClientABPropsContext.react",
  [
    "invariant",
    "Promise",
    "WAFlowsDomainUtils",
    "WAFlowsEntryPointControllerContext.react",
    "WAFlowsNoop",
    "objectEntries",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = c.createContext,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = c.useMemo,
      g = c.useState,
      h = null,
      y = function (r) {
        return (function (t) {
          return {
            getABPropsFromCache: function () {
              return h;
            },
            getABProps: function () {
              return h != null
                ? (e || (e = n("Promise"))).resolve(h)
                : t({
                    eventName: "WAExtensionsGetClientAbProps",
                    hasCallback: !0,
                    fallBackDataForWeb: I,
                    payload: S,
                  }).then(function (e) {
                    return (e != null || s(0, 72526), (h = R(e)), h);
                  });
            },
          };
        })(r);
      };
    function C() {
      var e = o(
        "WAFlowsEntryPointControllerContext.react",
      ).useWAFlowsEntryPointController();
      return b(e);
    }
    function b(e) {
      var t = y(e.invoke),
        n = t.getABProps,
        o = t.getABPropsFromCache,
        a = g(o()),
        i = a[0],
        l = a[1];
      return (
        _(
          function () {
            i || n().then(l).catch(r("WAFlowsNoop"));
          },
          [i, n],
        ),
        i
      );
    }
    var v = {
        extensions_propagate_errors_via_datachannel_enabled: {
          type: "bool",
          code: "4317",
          default: !1,
        },
        ios_wae_qpl_enabled: { type: "bool", code: "4265", default: !1 },
        extensions_graphql_cta_disable: {
          type: "string",
          code: "3192",
          default: "",
        },
        extensions_webview_full_screen_drag_dismiss_enabled: {
          type: "bool",
          code: "5685",
          default: !1,
        },
        android_wae_qpl_enabled: { type: "bool", code: "4360", default: !1 },
        flows_shared_html: { type: "bool", code: "8552", default: !1 },
        is_meta_employee_or_internal_tester: {
          type: "bool",
          code: "1777",
          default: !1,
        },
        flows_termination_message_v2_sending_enabled: {
          type: "bool",
          code: "9157",
          default: !0,
        },
        flows_response_download_button_enabled: {
          type: "bool",
          code: "9509",
          default: !1,
        },
        flows_response_close_button_enabled: {
          type: "bool",
          code: "9858",
          default: !1,
        },
        flows_response_flat_list_enabled: {
          type: "bool",
          code: "9545",
          default: !1,
        },
        flows_ios_native_grabber_height: {
          type: "double",
          code: "13022",
          default: 15,
        },
        flows_response_message_sli_qpl_enabled: {
          type: "bool",
          code: "17245",
          default: !1,
        },
        wa_web_wae_qpl_enabled: { type: "bool", code: "21742", default: !1 },
      },
      S = r("objectEntries")(v).reduce(function (e, t) {
        var n = t[0],
          r = t[1];
        return (
          (e[r.code] = { type: r.type, defaultValue: String(r.default) }),
          e
        );
      }, {}),
      R = function (t) {
        return Object.entries(t).reduce(function (e, t) {
          var n = t[0],
            a = t[1],
            i = r("objectEntries")(v).find(function (e) {
              var t = e[1];
              return n === t.code;
            }),
            l = i ? i[0] : "",
            s = { type: a.type },
            u = a.value;
          if (o("WAFlowsDomainUtils").isOndemandFlowsInDesktopBrowser()) {
            var c = new URLSearchParams(window.location.search),
              d = c.get(l);
            u = d != null ? d : a.value;
          }
          return (
            a.type === "bool"
              ? (s.boolValue = u === "true")
              : a.type === "string"
                ? (s.stringValue = u)
                : (a.type === "int" || a.type === "double") &&
                  (s.numValue = parseInt(u, 10)),
            (e[l] = s),
            e
          );
        }, {});
      };
    function L(e) {
      return d(e);
    }
    var E = L();
    function k() {
      var e = p(E),
        t = m(
          function (t) {
            return (e || s(0, 74211), e[t] || s(0, 74216), e[t]);
          },
          [e],
        );
      return f(
        function () {
          return {
            getBooleanValue: function (n) {
              var e = t(n);
              return (
                (e.type === "bool" && typeof e.boolValue == "boolean") ||
                  s(0, 74215),
                e.boolValue
              );
            },
            getStringValue: function (n) {
              var e = t(n);
              return (
                (e.type === "string" && typeof e.stringValue == "string") ||
                  s(0, 74213),
                e.stringValue
              );
            },
            getIntValue: function (n) {
              var e = t(n);
              return (
                (e.type === "int" && typeof e.numValue == "number") ||
                  s(0, 74214),
                e.numValue
              );
            },
          };
        },
        [t],
      );
    }
    var I = r("objectEntries")(v).reduce(function (e, t) {
      var n = t[0],
        r = t[1],
        o = { type: r.type, value: String(r.default) };
      return ((e[r.code] = o), e);
    }, {});
    ((l.clientABPropsHandler = y),
      (l.useFetchClientABProps = C),
      (l.useFetchClientABPropsFromController = b),
      (l.convertJSBridgeABPropsToNative = R),
      (l.NativeABPropsContext = E),
      (l.useWhatsappClientABProps = k),
      (l.abPropsFallBackDataForWeb = I));
  },
  98,
);
