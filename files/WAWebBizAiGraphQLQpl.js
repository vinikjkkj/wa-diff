__d(
  "WAWebBizAiGraphQLQpl",
  [
    "WALogger",
    "WAWebFetchWithAdAccountToken",
    "WAWebGraphQLFetchFailure",
    "WAWebGraphQLServerError",
    "WAWebQplFlow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = new Map();
    function c(t) {
      try {
        e: {
          var n = t;
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.name === "network.start" &&
            "networkRequestId" in n &&
            "params" in n
          ) {
            var r = n.networkRequestId,
              a = n.params;
            d(r, a.name);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.name === "network.next" &&
            "networkRequestId" in n &&
            "response" in n
          ) {
            var i = n.networkRequestId,
              l = n.response;
            _(i, l);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.name === "network.error" &&
            "networkRequestId" in n &&
            "error" in n
          ) {
            var s = n.networkRequestId,
              u = n.error;
            h(s, "error", u);
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.name === "network.complete" &&
            "networkRequestId" in n
          ) {
            var c = n.networkRequestId;
            h(c, "complete");
            break e;
          }
          if (
            ((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.name === "network.unsubscribe" &&
            "networkRequestId" in n
          ) {
            var m = n.networkRequestId;
            h(m, "unsubscribe");
            break e;
          }
          return;
        }
      } catch (n) {
        var p = (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            "networkRequestId" in e
          ) {
            var t = e.networkRequestId;
            return t;
          }
          return null;
        })(t);
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bizai] Failed to log GraphQL request metrics (event=",
                ", networkRequestId=",
                ")",
              ])),
            t.name,
            p,
          )
          .sendLogs("bizai-client-graphql-qpl-failed");
      }
    }
    function d(e, t) {
      var n = o("WAWebQplFlow").startQplFlow(r("qpl")._(217257737, "1655"), {
        annotations: { string: { operation_name: t } },
      });
      (u.set(e, {
        errorCodes: new Set(),
        flow: n,
        hasGraphQLErrors: !1,
        hasMalformedResponse: !1,
        hasResponse: !1,
      }),
        n.addPoint("request_start"));
    }
    function m(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "code" in e
        ) {
          var t = e.code;
          if (typeof t == "number" && Number.isSafeInteger(t)) return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "extensions" in e
        ) {
          var n = e.extensions;
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              "code" in e
            ) {
              var t = e.code;
              if (typeof t == "number" && Number.isSafeInteger(t)) return t;
            }
            return null;
          })(n);
        }
        return null;
      })(e);
    }
    function p(e, t) {
      if (t.length !== 0) {
        e.hasGraphQLErrors = !0;
        for (var n = 0; n < t.length && e.errorCodes.size < s; n++) {
          var r = m(t[n]);
          r != null && e.errorCodes.add(r);
        }
      }
    }
    function _(e, t) {
      var n = u.get(e);
      if (n != null) {
        n.hasResponse = !0;
        var r = Array.isArray(t) ? t : [t];
        for (var o of r) {
          if (o == null || typeof o != "object") {
            n.hasMalformedResponse = !0;
            continue;
          }
          (f(o) && (n.hasMalformedResponse = !0),
            o.errors != null && p(n, o.errors));
        }
      }
    }
    function f(e) {
      return e.data != null
        ? typeof e.data != "object"
        : !(
            Object.is(e.data, null) &&
            e.extensions != null &&
            Object.getOwnPropertyDescriptor(e, "errors") == null
          );
    }
    function g(e, t) {
      return t instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
        t.source.httpStatus != null
        ? "TRANSPORT"
        : e.hasGraphQLErrors
          ? "EXTENSION"
          : e.hasMalformedResponse || t instanceof SyntaxError
            ? "CLIENT"
            : "UNKNOWN";
    }
    function h(e, t, n) {
      var r = u.get(e);
      if (r != null) {
        if (
          (u.delete(e),
          n instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
            p(r, n.source.errors),
          r.flow.addPoint("request_end"),
          t === "error" || r.hasGraphQLErrors || r.hasMalformedResponse)
        ) {
          y(r, n);
          return;
        }
        if (t === "unsubscribe" && !r.hasResponse) {
          r.flow.endCancel(void 0, {
            string: { disposal_reason: "relay_unsubscribe" },
          });
          return;
        }
        r.flow.endSuccess({ bool: { server_answered: !0 } });
      }
    }
    function y(e, t) {
      var n =
        e.hasResponse ||
        t instanceof o("WAWebGraphQLServerError").GraphQLServerError ||
        t instanceof SyntaxError;
      (e.flow.addAnnotations({
        bool: { server_answered: n },
        string: C(e, n, t),
      }),
        e.flow.endFail("request_failed"));
    }
    function C(e, t, n) {
      var r = o("WAWebGraphQLFetchFailure").getGraphQLFetchFailureStage(n),
        a = {
          error_category: g(e, n),
          error_code: Array.from(e.errorCodes).join(",") || "UNKNOWN",
        };
      return (
        t || (a.failure_scenario = b(n, r)),
        r != null && (a.fetch_failure_stage = r),
        a
      );
    }
    function b(e, t) {
      return navigator.onLine
        ? t != null
          ? "NETWORK_ERROR"
          : e instanceof
              o("WAWebFetchWithAdAccountToken").FetchAdAccountTokenError
            ? "TOKEN_FAILURE"
            : "UNKNOWN"
        : "OFFLINE";
    }
    l.logBizAiGraphQLRequest = c;
  },
  98,
);
