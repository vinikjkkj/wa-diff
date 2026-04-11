__d(
  "getCometAsyncFetchResponse",
  [
    "CSRFGuard",
    "CometAsyncFetchError",
    "CometAsyncFetchResponse",
    "ConstUriUtils",
    "DTSG",
    "DTSG_ASYNC",
    "FBLogger",
    "NetworkStatus",
    "PHPQuerySerializer",
    "Promise",
    "XHRRequest",
    "cometAsyncRequestHeaders",
    "getAsyncParams",
    "getErrorSafe",
    "handleCometErrorCodeSideEffects",
    "isAIDemosDotMetaDotComURI",
    "isArDotMetaDotComURI",
    "isBugBountyDotMetaDotComURI",
    "isDevelopersDotMetaDotComURI",
    "isDeviceManagerDotMetaDotComURI",
    "isFacebookURI",
    "isHorizonDotMetaDotComURI",
    "isInstagramURI",
    "isInternalFBURI",
    "isMessengerDotComURI",
    "isMetaAIURI",
    "isWearablesDotDeveloperDotMetaDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
    "isWorkroomsDotComURI",
    "isWwwMetaDotComURI",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 250;
    function c(t, a) {
      var i = 0,
        l;
      return new (s || (s = n("Promise")))(function (n, s) {
        var c,
          p = function (i, l) {
            if (a.ignoreResponse === !0) return n();
            var e,
              u = i.trim();
            try {
              (o("CSRFGuard").exists(u) && (u = o("CSRFGuard").clean(u)),
                (e = JSON.parse(u)));
            } catch (e) {
              var c = r("getErrorSafe")(e);
              (r("FBLogger")("comet_infra").mustfix(
                "Unable to parse uri %s response. Error: %s, response: %s",
                t.toString(),
                c.message,
                u.substring(0, 1e3),
              ),
                s(c));
              return;
            }
            if (m(t)) {
              var d,
                p,
                _ = (d = e) == null ? void 0 : d.dtsgToken,
                f = (p = e) == null ? void 0 : p.dtsgAsyncGetToken;
              (_ && o("DTSG").setToken(_), f && o("DTSG_ASYNC").setToken(f));
            }
            if (e.error) {
              (r("handleCometErrorCodeSideEffects")(
                e.error,
                e.errorSummary,
                e.errorDescription,
                e.redirectTo,
                a.shouldShowErrorDialog,
              ),
                s({
                  error: e.error,
                  errorMsg: e.errorDescription,
                  errorType: e.errorSummary,
                  redirectTo: e.redirectTo,
                }));
              return;
            }
            return n(new (r("CometAsyncFetchResponse"))(e, l));
          };
        p.includeHeaders = !0;
        function _(e) {
          var t = a.retryCount != null && a.retryCount > 0 && i <= a.retryCount;
          if (t) r("setTimeout")(g, u);
          else {
            var n = new (r("CometAsyncFetchError"))(
              e.errorMsg,
              e.errorCode,
              e.errorRawResponseHeaders,
              e.errorRawTransport,
              e.errorType,
            );
            return s(n);
          }
        }
        function f() {
          var e = new (r("CometAsyncFetchError"))(
            "Request to " + t + " was aborted",
            null,
            null,
            null,
            "Abort",
          );
          return s(e);
        }
        function g() {
          var e;
          if (((e = a.abortSignal) == null ? void 0 : e.aborted) === !0)
            return f();
          (h(), y());
        }
        function h() {
          c != null && (c.abort(), (c = null));
        }
        function y() {
          var n,
            l,
            s = (n = a.requestHeaders) != null ? n : {},
            u =
              a.skipCustomHeaders !== !0
                ? babelHelpers.extends(
                    {},
                    s,
                    o("cometAsyncRequestHeaders").getHeaders(),
                  )
                : s,
            m = Object.keys(u)
              .reduce(function (e, t) {
                return e.setRequestHeader(t, u[t]);
              }, new (r("XHRRequest"))(t))
              .setMethod(a.method)
              .setData(
                babelHelpers.extends(
                  {},
                  a.data,
                  a.skipAsyncParams === !0
                    ? {}
                    : r("getAsyncParams")(
                        a.method,
                        (l = a.skipSRState) != null ? l : !1,
                      ),
                ),
              )
              .setRawData(a.formData)
              .setResponseHandler(p)
              .setErrorHandler(_)
              .setAbortHandler(f)
              .setUploadProgressHandler(a.onUploadProgress)
              .setDataSerializer(
                (e || (e = r("PHPQuerySerializer"))).serialize,
              );
          ((c = m),
            a.withCredentials === !0 && d(t) && m.setWithCredentials(!0),
            m.send(),
            i++);
        }
        (a.abortSignal &&
          (a.abortSignal.onabort = function () {
            h();
          }),
          r("NetworkStatus").isOnline()
            ? g()
            : (l = r("NetworkStatus").onChange(function (e) {
                var t = e.online;
                t && (g(), l.remove());
              })));
      });
    }
    function d(e) {
      var t = o("ConstUriUtils").getUri(e);
      return t == null
        ? !1
        : r("isMetaAIURI")(t) ||
            r("isFacebookURI")(t) ||
            r("isInstagramURI")(t) ||
            r("isInternalFBURI")(t) ||
            r("isMessengerDotComURI")(t) ||
            r("isWearablesDotDeveloperDotMetaDotComURI")(t) ||
            r("isWorkplaceDotComURI")(t) ||
            r("isWorkroomsDotComURI")(t) ||
            r("isWorkDotMetaDotComURI")(t) ||
            r("isHorizonDotMetaDotComURI")(t) ||
            r("isDevelopersDotMetaDotComURI")(t) ||
            r("isArDotMetaDotComURI")(t) ||
            r("isWwwMetaDotComURI")(t) ||
            r("isAIDemosDotMetaDotComURI")(t) ||
            r("isBugBountyDotMetaDotComURI")(t) ||
            r("isDeviceManagerDotMetaDotComURI")(t);
    }
    function m(e) {
      var t = o("ConstUriUtils").getUri(e);
      return t == null
        ? !1
        : !t.getProtocol() && !t.getDomain()
          ? !0
          : document.location.origin === t.getOrigin();
    }
    l.default = c;
  },
  98,
);
