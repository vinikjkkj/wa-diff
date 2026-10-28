__d(
  "RelayGraphQLRequestUtils",
  [
    "AMLoggingUtils",
    "CSRFGuard",
    "RelayFBFeatureFlags",
    "RelayFBJsonParser",
    "RelayRuntime",
    "XHRHttpError",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("AMLoggingUtils").isInAdsManager,
      l = n("AMLoggingUtils").parseHeaders,
      s = n("RelayRuntime").RelayError,
      u =
        "The request could not be understood by the server due to malformed syntax.",
      c = JSON.stringify({ error: { code: 1, message: u } }),
      d = /^graph\.(.+)\.facebook\.com$/,
      m = /^[a-z][a-z0-9+.-]*:\/\/([^/?#:]+)/i,
      p = {
        createErrorFromPayload: function (t, r) {
          var e;
          if (typeof t == "object")
            if (t.code || t.description) {
              var o,
                a,
                i,
                l = (o = t.debug_info) != null ? o : "",
                u = (a = t.exception) == null ? void 0 : a.message;
              (u != null && (l = u + "\n\n" + l),
                n("RelayFBFeatureFlags").ENABLE_SERVER_MID_LOGGING &&
                  Array.isArray(t.mids) &&
                  t.mids.length > 0 &&
                  (l += "\n\nServer MIDs: " + t.mids.join(", ")));
              var c = r != null ? r : t.mutation_name,
                d = c ? " (Operation: " + c + ")" : "";
              e = s.create(
                "GraphQLError",
                "GraphQL operation responded with error %s: %s%s\n%s",
                t.code,
                (i = t.description) != null ? i : t.message,
                d,
                l,
              );
            } else {
              var m = r != null ? r : t.mutation_name,
                p = m ? " (Operation: " + m + ")" : "";
              e = s.create(
                "GraphQLError",
                "GraphQL operation responded with error%s: %s",
                p,
                JSON.stringify(t),
              );
            }
          else {
            var _ = r != null ? " (Operation: " + r + ")" : "";
            e = s.create(
              "GraphQLError",
              "GraphQL operation responded with an error%s: %s",
              _,
              t,
            );
          }
          var f = e;
          if (
            ((f.source = t),
            (f.operation = r != null ? r : null),
            typeof t == "object")
          ) {
            var g, h;
            ((f.code = t.code),
              (f.description = t.description),
              (f.summary = t.summary),
              (f.debug_info = t.debug_info),
              (f.operation =
                (g = (h = f.operation) != null ? h : t.mutation_name) != null
                  ? g
                  : null));
            var y = t.mids;
            y != null &&
              Array.isArray(y) &&
              y.every(function (e) {
                return typeof e == "string";
              }) &&
              (f.mids = y);
          }
          return f;
        },
        createErrorFromXHR: function (r, o, a) {
          var t;
          if (r.errorCode === n("XHRHttpError").HTTP_TRANSPORT_ERROR)
            t = s.createWarning("NetworkTransportError", o);
          else if (
            r.errorCode === n("XHRHttpError").HTTP_CLIENT_ERROR &&
            r.errorMsg != null &&
            r.errorMsg.match(/OAuthException/)
          )
            t = s.create("NetworkOAuthError", o);
          else {
            var i = f(r, a);
            t = i != null ? g(i) : s.create("NetworkRequestError", o);
          }
          return (
            e() && (t.opes_mids = p.extractOpesMidsFromRelayError(r)),
            (t.source = r),
            t
          );
        },
        extractOpesMidsFromRelayError: function (t) {
          var e = [],
            r = t.errorRawResponseHeaders;
          if (r != null && typeof r == "string") {
            var o = l(r),
              a = o["error-mid"];
            ((t.errorRawResponseHeaders = null), a != null && (e = [a]));
          }
          if (t.errorCode === n("XHRHttpError").HTTP_TRANSPORT_ERROR) {
            var i;
            e =
              (i = t.opes_mids) != null ? i : ["fake_mid_gql_transport_error"];
          }
          return e;
        },
        getRelayAPIConfigHeaders: function (t, n, r) {
          var e = babelHelpers.extends({}, t);
          return (
            n != null && n !== "" && (e["Content-Encoding"] = n),
            r != null && r !== "" && (e["User-Agent"] = r),
            e
          );
        },
        parsePayload: function (t) {
          if (n("CSRFGuard").exists(t)) {
            var e = _(n("CSRFGuard").clean(t));
            if (
              Object.prototype.hasOwnProperty.call(e, "data") ||
              !Object.prototype.hasOwnProperty.call(e, "error")
            )
              return e;
            var r = [];
            (Object.prototype.hasOwnProperty.call(e, "mid") && r.push(e.mid),
              Object.prototype.hasOwnProperty.call(e, "mids") &&
                Array.isArray(e.mids) &&
                r.push.apply(r, e.mids),
              r.length === 0 && r.push("fake_mid_missing_csrf_token"));
            var o = s.createWarning(
                "GraphQLXControllerError",
                "GraphQL operation responded with error %s: %s\n%s",
                e.error,
                e.errorSummary,
                e.errorDescription,
              ),
              a = o;
            throw (
              (a.source = e),
              (a.code = e.error),
              (a.description = e.errorDescription),
              (a.summary = e.errorSummary),
              (a.mids = r),
              a
            );
          }
          return _(t);
        },
      };
    function _(e) {
      try {
        return n("RelayFBJsonParser").parse(e);
      } catch (e) {
        var t;
        throw (
          (t = "<redacted in prod, use dev to see the text>"),
          s.create(
            "JSONParseError",
            "Response contained invalid JSON.\nReason: %s\n%s",
            e.message,
            t,
          )
        );
      }
    }
    function f(e, t) {
      var r,
        o,
        a = e,
        i =
          typeof a == "object" && a != null ? a.errorRawTransportStatus : null,
        l =
          e.errorCode === n("XHRHttpError").HTTP_CLIENT_ERROR &&
          i === 400 &&
          e.errorMsg === c;
      if (t == null || !l) return null;
      var s = (r = String(t).match(m)) == null ? void 0 : r[1],
        u = s == null || (o = s.match(d)) == null ? void 0 : o[1];
      return s == null || u == null || u === "prod"
        ? null
        : { sandbox: u, sandboxHost: s };
    }
    function g(e) {
      var t = e.sandbox,
        n = e.sandboxHost,
        r = s.create(
          "NetworkSandboxAccessError",
          'Request rejected by the "%s" sandbox tier: %s returned HTTP 400 with ' +
            ('server error code 1 ("' + u + '"). ') +
            "WWW returns this generic response for several request checks, including intern-tier checks that block requests from outside the corporate network. If you're not on VPN or Lighthouse, connect and try again. Otherwise, clear Internal Settings > Sandbox and restart the app.",
          t,
          n,
        );
      return ((r.sandbox = t), (r.sandboxHost = n), (r.httpStatus = 400), r);
    }
    a.exports = p;
  },
  null,
);
