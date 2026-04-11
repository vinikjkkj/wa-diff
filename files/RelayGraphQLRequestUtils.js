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
      u = {
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
        createErrorFromXHR: function (r, o) {
          var t;
          return (
            r.errorCode === n("XHRHttpError").HTTP_TRANSPORT_ERROR
              ? (t = s.createWarning("NetworkTransportError", o))
              : r.errorCode === n("XHRHttpError").HTTP_CLIENT_ERROR &&
                  r.errorMsg != null &&
                  r.errorMsg.match(/OAuthException/)
                ? (t = s.create("NetworkOAuthError", o))
                : (t = s.create("NetworkRequestError", o)),
            e() && (t.opes_mids = u.extractOpesMidsFromRelayError(r)),
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
            var e = c(n("CSRFGuard").clean(t));
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
          return c(t);
        },
      };
    function c(e) {
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
    a.exports = u;
  },
  null,
);
