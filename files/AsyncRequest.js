__d(
  "AsyncRequest",
  [
    "errorCode",
    "fbt",
    "invariant",
    "AdsManagerConstURIUtils",
    "Arbiter",
    "AsyncDOM",
    "AsyncRequestConfig",
    "AsyncResponse",
    "Bootloader",
    "CSS",
    "DTSG",
    "DTSG_ASYNC",
    "Deferred",
    "Env",
    "ErrorGuard",
    "Event",
    "FBLogger",
    "FetchStreamTransport",
    "HTTPErrors",
    "HasteResponse",
    "PHPQuerySerializer",
    "Parent",
    "Promise",
    "ResourceTimingsStore",
    "ResourceTypes",
    "Run",
    "ScriptPath",
    "ServerJS",
    "SessionName",
    "TimeSlice",
    "URI",
    "UserAgent_DEPRECATED",
    "ZeroRewrites",
    "bind",
    "canSendCredentialsForAsyncRequest",
    "clearTimeout",
    "emptyFunction",
    "err",
    "executeAfter",
    "fb-error",
    "ge",
    "getAsyncHeaders",
    "getAsyncParams",
    "getErrorSafe",
    "gkx",
    "goURI",
    "isEmpty",
    "isFacebookURI",
    "performanceAbsoluteNow",
    "promiseDone",
    "replaceTransportMarkers",
    "setTimeout",
    "setTimeoutAcrossTransitions",
    "uriIsRelativePath",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d,
      m,
      p,
      _,
      f,
      g,
      h = 19e3,
      y = 500,
      C = 1006,
      b = 1004,
      v = 1010,
      S = new Set([y, v, b, C]),
      R = !1,
      L = o("Run").onAfterUnload(function () {
        R = !0;
      });
    function E() {
      return R;
    }
    function k(e) {
      return "onprogress" in e;
    }
    function I(e) {
      return "upload" in e && "onprogress" in e.upload;
    }
    function T(e) {
      return "withCredentials" in e;
    }
    function D(e) {
      return e.status in { 0: 1, 12029: 1, 12030: 1, 12031: 1, 12152: 1 };
    }
    function x(e) {
      var t = !e || typeof e == "function";
      return (
        t ||
          r("FBLogger")("asyncresponse").mustfix(
            "AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.",
          ),
        t
      );
    }
    var $ = 2,
      P = $,
      N = !1;
    r("Arbiter").subscribe("page_transition", function (e, t) {
      N ? (N = !1) : (P = t.id);
    });
    var M = "for (;;);",
      w = M.length,
      A = (function () {
        function t(e) {
          var n = this,
            a;
          ((this._allowIrrelevantRequests = !1),
            (this._delayPreDisplayJS = !1),
            (this._shouldReplaceTransportMarkers = !1),
            (this._dispatchErrorResponse = function (e, t) {
              var o = e.getError();
              if ((n.clearStatusIndicator(), !n._isRelevant() || o === v)) {
                (r("FBLogger")("asyncrequest").info(
                  "Aborting AsyncRequest #%d, irrelevant due to page transition.",
                  n.id,
                ),
                  n.abort());
                return;
              }
              if (n._isServerDialogErrorCode(o)) {
                var a = o == 1357008 || o == 1357007;
                (n.interceptHandler(e),
                  o == 1357007
                    ? n._displayServerDialog(e, a, !0)
                    : n._displayServerDialog(e, a));
              } else if (n.initialHandler(e) !== !1) {
                r("clearTimeout")(n.timer);
                try {
                  t(e);
                } catch (t) {
                  throw (n.finallyHandler(e), t);
                }
                n.finallyHandler(e);
              }
            }),
            (this._onStateChange = function () {
              var e = n.transport;
              if (e)
                try {
                  (t._inflightCount--,
                    o("ResourceTimingsStore").measureResponseReceived(
                      r("ResourceTypes").XHR,
                      n.resourceTimingStoreUID,
                    ));
                  try {
                    e.getResponseHeader("X-FB-Debug") &&
                      ((n._xFbServer = e.getResponseHeader("X-FB-Debug")),
                      r("fb-error").ErrorXFBDebug.add(n._xFbServer));
                  } catch (e) {}
                  if (e.status >= 200 && e.status < 300)
                    ((t.lastSuccessTime = Date.now()), n._handleXHRResponse(e));
                  else if (
                    o("UserAgent_DEPRECATED").webkit() &&
                    typeof e.status == "undefined"
                  )
                    n._invokeErrorHandler(1002);
                  else if (
                    r("AsyncRequestConfig").retryOnNetworkError &&
                    D(e) &&
                    n.remainingRetries > 0 &&
                    !n._requestTimeout
                  ) {
                    (n.remainingRetries--, delete n.transport, n.send(!0));
                    return;
                  } else n._invokeErrorHandler();
                  n.getOption("asynchronous_DEPRECATED") !== !1 &&
                    delete n.transport;
                } catch (e) {
                  if (E()) return;
                  if ((delete n.transport, n.remainingRetries > 0))
                    (n.remainingRetries--, n.send(!0));
                  else {
                    if (!n.getOption("suppressErrorAlerts")) {
                      var a = r("getErrorSafe")(e);
                      r("FBLogger")("AsyncRequest")
                        .catching(a)
                        .mustfix(
                          "AsyncRequest exception when attempting to handle a state change",
                        );
                    }
                    n._invokeErrorHandler(1007);
                  }
                }
            }),
            (this._handleTimeout = function () {
              n.continuation.last(function () {
                n._requestTimeout = !0;
                var e = n.timeoutHandler;
                (n.abandon(),
                  e && e(n),
                  r("setTimeout")(function () {
                    r("Arbiter").inform("AsyncRequest/timeout", { request: n });
                  }, 0));
              });
            }),
            (this.continuation =
              r("TimeSlice").getPlaceholderReusableContinuation()),
            (this.transport = null),
            (this.method = "POST"),
            (this.uri = ""),
            (this.timeout = null),
            (this.timer = null),
            (this.initialHandler = a = r("emptyFunction")),
            (this.handler = null),
            (this.uploadProgressHandler = null),
            (this.errorHandler = r("AsyncResponse").defaultErrorHandler),
            (this.transportErrorHandler = null),
            (this.timeoutHandler = null),
            (this.interceptHandler = a),
            (this.finallyHandler = a),
            (this.abortHandler = a),
            (this.serverDialogCancelHandler = null),
            (this.relativeTo = null),
            (this.statusElement = null),
            (this.statusClass = ""),
            (this.data = {}),
            (this.headers = {}),
            (this.file = null),
            (this.context = {}),
            (this.readOnly = !1),
            (this.writeRequiredParams = []),
            (this.remainingRetries = 0),
            (this.userActionID = "-"),
            (this.resourceTimingStoreUID = o("ResourceTimingsStore").getUID(
              r("ResourceTypes").XHR,
              e != null ? e.toString() : "",
            )),
            (this.flushedResponseTextParseIndex = 0),
            (this.option = {
              asynchronous_DEPRECATED: !0,
              suppressErrorHandlerWarning: !1,
              suppressEvaluation: !1,
              suppressErrorAlerts: !1,
              retries: 0,
              bundle: !1,
              handleErrorAfterUnload: !1,
              useFetchTransport: !1,
            }),
            (this.transportErrorHandler = r("bind")(this, "errorHandler")),
            e !== void 0 && this.setURI(e),
            this.setAllowCrossPageTransition(
              r("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault ||
                !1,
            ));
        }
        var a = t.prototype;
        return (
          (a._dispatchResponse = function (t) {
            if ((this.clearStatusIndicator(), !this._isRelevant())) {
              this._invokeErrorHandler(v);
              return;
            }
            if (this.initialHandler(t) !== !1) {
              r("clearTimeout")(this.timer);
              var e,
                n = this.getHandler();
              try {
                e = this._shouldSuppressJS(n(t));
              } catch (e) {
                throw (t.is_last && this.finallyHandler(t), e);
              }
              (e || this._handleJSResponse(t),
                t.is_last && this.finallyHandler(t));
            }
          }),
          (a._shouldSuppressJS = function (n) {
            return n === t.suppressOnloadToken;
          }),
          (a._handlePreDisplayServerJS = function (t, n) {
            var e = !1,
              o = [],
              a = function () {
                if (e)
                  return (
                    r("FBLogger")("AsyncResponse").warn(
                      "registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.",
                    ),
                    function () {}
                  );
                var t,
                  n = new (r("Deferred"))();
                return (
                  o.push(n.getPromise()),
                  r("TimeSlice").guard(
                    function () {
                      (t && r("clearTimeout")(t), n.resolve());
                    },
                    "AsyncRequestDisplayBlockingEvent",
                    {
                      propagationType: r("TimeSlice").PropagationType.EXECUTION,
                    },
                  )
                );
              };
            return (
              t.handle(n, {
                bigPipeContext: { registerToBlockDisplayUntilDone_DONOTUSE: a },
              }),
              (e = !0),
              o
            );
          }),
          (a._hasEvalDomOp = function (t) {
            return t && t.length
              ? t.some(function (e) {
                  return e[0] === "eval";
                })
              : !1;
          }),
          (a._handleJSResponse = function (t) {
            var e = this.getRelativeTo(),
              n = t.domops,
              a = t.dtsgToken,
              i = t.dtsgAsyncGetToken,
              l = t.jsmods,
              s,
              u = t.savedServerJSInstance;
            if (
              (u && u instanceof r("ServerJS")
                ? (s = u)
                : (s = new (r("ServerJS"))()),
              s.setRelativeTo(e),
              l)
            ) {
              var c = {
                define: l.define,
                instances: l.instances,
                markup: l.markup,
              };
              (delete l.define,
                delete l.instances,
                delete l.markup,
                this._hasEvalDomOp(n) &&
                  ((c.elements = l.elements), delete l.elements),
                s.handle(c));
            }
            var d = new (m || (m = r("URI")))(this.uri);
            (((!d.getDomain() && !d.getProtocol()) ||
              document.location.origin === d.getOrigin()) &&
              (a && o("DTSG").setToken(a), i && o("DTSG_ASYNC").setToken(i)),
              n &&
                (g || (g = r("ErrorGuard"))).applyWithGuard(
                  function () {
                    return o("AsyncDOM").invoke(n, e);
                  },
                  null,
                  [],
                  { errorType: "warn" },
                ),
              l && s.handle(l),
              this._handleJSRegisters(t, "onload"),
              this._handleJSRegisters(t, "onafterload"));
          }),
          (a._handleJSRegisters = function (t, n) {
            var e = t[n];
            if (e)
              for (var o = 0; o < e.length; o++) {
                var a = null,
                  i = e[o],
                  l = i.match(/^\"caller:([^\"]+?)\";(.*)/);
                (l != null && ((a = l[1]), (i = l[2])),
                  (g || (g = r("ErrorGuard"))).applyWithGuard(
                    new Function(i),
                    this,
                    [],
                  ),
                  r("FBLogger")("comet_infra").info(
                    "Detected dynamic new Function(...) call in AsyncRequest._handleJSRegisters(...).",
                    new (m || (m = r("URI")))(this.uri).getPath(),
                    a,
                  ));
              }
          }),
          (a.invokeResponseHandler = function (t) {
            var e = this;
            if (typeof t.redirect != "undefined") {
              r("setTimeout")(function () {
                e.setURI(t.redirect, !0).send();
              }, 0);
              return;
            }
            if (t.bootloadOnly !== void 0) {
              var a =
                  typeof t.bootloadOnly == "string"
                    ? JSON.parse(t.bootloadOnly)
                    : t.bootloadOnly,
                i = function (t) {
                  r("TimeSlice").guard(
                    function () {
                      r("Bootloader").loadPredictedResourceMap(t);
                    },
                    "Bootloader.loadPredictedResourceMap",
                    { root: !0 },
                  )();
                };
              for (var l of a) i(l);
              return;
            }
            if (
              !(
                !this.handler &&
                !this.errorHandler &&
                !this.transportErrorHandler &&
                !this.preBootloadHandler &&
                this.initialHandler === r("emptyFunction") &&
                this.finallyHandler === r("emptyFunction")
              )
            ) {
              var s = t.asyncResponse;
              if (typeof s != "undefined") {
                var u, c;
                if (!this._isRelevant()) {
                  this._invokeErrorHandler(v);
                  return;
                }
                (s.updateScriptPath &&
                  r("ScriptPath").set(
                    s.updateScriptPath.path,
                    s.updateScriptPath.token,
                    s.updateScriptPath.extra_info,
                  ),
                  s.lid &&
                    ((this._responseTime = Date.now()), (this.lid = s.lid)),
                  o("HasteResponse").handleSRPayload(
                    (u = s.hsrp) != null ? u : {},
                  ));
                var m, _;
                if (s.getError() && !s.getErrorIsWarning()) {
                  var f = this.getErrorHandler().bind(this);
                  ((m = (g || (g = r("ErrorGuard"))).guard(
                    this._dispatchErrorResponse,
                    {
                      name:
                        "AsyncRequest#_dispatchErrorResponse for " +
                        this.getURI(),
                    },
                  )),
                    (m = m.bind(this, s, f)),
                    (_ = "error"));
                } else {
                  ((m = (g || (g = r("ErrorGuard"))).guard(
                    this._dispatchResponse.bind(this),
                    {
                      name:
                        "AsyncRequest#_dispatchResponse for " + this.getURI(),
                    },
                  )),
                    (m = m.bind(this, s)),
                    (_ = "response"));
                  var h = s.domops;
                  if (
                    !this._delayPreDisplayJS &&
                    s.jsmods &&
                    s.jsmods.pre_display_requires &&
                    !this._hasEvalDomOp(h)
                  ) {
                    var y = s.jsmods,
                      C = {
                        define: y.define,
                        instances: y.instances,
                        markup: y.markup,
                      };
                    (delete y.define,
                      delete y.instances,
                      delete y.markup,
                      (C.pre_display_requires = y.pre_display_requires),
                      delete y.pre_display_requires);
                    var b = new (r("ServerJS"))();
                    (b.setRelativeTo(this.getRelativeTo()),
                      (s.savedServerJSInstance = b));
                    var S = this._handlePreDisplayServerJS(b, C);
                    if (S && S.length) {
                      var R = m;
                      m = function () {
                        r("promiseDone")(
                          (d || (d = n("Promise"))).all(S).then(R),
                        );
                      };
                    }
                  }
                }
                var L = (p || (p = r("performanceAbsoluteNow")))();
                ((m = r("executeAfter")(m, function () {
                  r("Arbiter").inform("AsyncRequest/" + _, {
                    request: e,
                    response: s,
                    ts: L,
                  });
                })),
                  this.preBootloadHandler && this.preBootloadHandler(s),
                  r("Bootloader").loadResources(
                    (c = s.allResources) != null ? c : [],
                    {
                      onAll: r("AsyncRequestConfig").immediateDispatch
                        ? m
                        : function () {
                            r("setTimeout")(m, 0);
                          },
                    },
                  ));
              } else
                typeof t.transportError != "undefined"
                  ? this._xFbServer
                    ? this._invokeErrorHandler(1008)
                    : this._invokeErrorHandler(1012)
                  : this._invokeErrorHandler(1007);
            }
          }),
          (a._invokeErrorHandler = function (t) {
            var e = this,
              n = this.transport;
            if (n) {
              var o;
              if (this.responseText === "") o = 1002;
              else if (this._requestAborted) o = 1011;
              else {
                try {
                  o = t || n.status || b;
                } catch (e) {
                  o = 1005;
                }
                navigator.onLine === !1 && (o = C);
              }
              var a,
                i,
                l = !0;
              if (o === C)
                ((i = u._(/*BTDS*/ "No Network Connection")),
                  (a = u._(
                    /*BTDS*/ "Your browser appears to be offline. Please check your internet connection and try again.",
                  )));
              else if (o >= 300 && o <= 399) {
                ((i = u._(/*BTDS*/ "Redirection")),
                  (a = u._(
                    /*BTDS*/ "Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.",
                  )));
                var s = n.getResponseHeader("Location");
                (s && r("goURI")(s, !0), (l = !0));
              } else
                ((i = u._(/*BTDS*/ "Oops")),
                  (a = u._(
                    /*BTDS*/ "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.",
                  )));
              var c = new (r("AsyncResponse"))(this, n),
                d = n.getResponseHeader("Error-Mid");
              if (
                (Object.assign(c, {
                  error: o,
                  errorSummary: i,
                  errorDescription: a,
                  silentError: l,
                  errorMid: d,
                }),
                r("setTimeout")(function () {
                  r("Arbiter").inform("AsyncRequest/error", {
                    request: e,
                    response: c,
                  });
                }, 0),
                !(E() && !this.getOption("handleErrorAfterUnload")))
              ) {
                var m = r("FBLogger")("asyncresponse");
                if (
                  (d != null && (m = m.addMetadata("OPES", "MID", d)),
                  !this.transportErrorHandler)
                ) {
                  m.mustfix(
                    "Async request to %s failed with a %d error, but there was no error handler available to deal with it.",
                    this.getURI(),
                    o,
                  );
                  return;
                }
                var p = this.getTransportErrorHandler().bind(this);
                (this.getOption("suppressErrorAlerts") || S.has(o)
                  ? S.has(o) &&
                    m
                      .addToCategoryKey(String(o))
                      .warn(
                        "Async request failed with error %s: %s when requesting %s",
                        o,
                        a.toString(),
                        this.getURI(),
                      )
                  : m
                      .addToCategoryKey(String(o))
                      .mustfix(
                        "Async request failed with error %s: %s when requesting %s",
                        o,
                        a.toString(),
                        this.getURI(),
                      ),
                  (g || (g = r("ErrorGuard"))).applyWithGuard(
                    this._dispatchErrorResponse,
                    this,
                    [c, p],
                  ));
              }
            }
          }),
          (a._isServerDialogErrorCode = function (t) {
            return (
              t == 1357008 ||
              t == 1357007 ||
              t == 1357041 ||
              t == 1442002 ||
              t == 1357001
            );
          }),
          (a._displayServerDialog = function (t, n, o) {
            var e = this;
            o === void 0 && (o = !1);
            var a = t.getPayload();
            if (a.__dialog !== void 0) {
              this._displayServerLegacyDialog(t, n);
              return;
            }
            var i = a.__dialogx;
            if (
              (new (r("ServerJS"))().handle(i),
              a.__should_use_mwa_reauth === !0)
            ) {
              r("Bootloader").loadModules(
                ["MWADeveloperReauthBarrier"],
                function (n) {
                  n.registerRequest(a.__dialogID, e, t);
                },
                "AsyncRequest",
              );
              return;
            }
            r("Bootloader").loadModules(
              ["ConfirmationDialog"],
              function (n) {
                n.setupConfirmation(t, e, o);
              },
              "AsyncRequest",
            );
          }),
          (a._displayServerLegacyDialog = function (t, n) {
            var e = this,
              o = t.getPayload().__dialog;
            if (r("gkx")("20935")) {
              var a, i;
              r("FBLogger")("comet_infra")
                .addMetadata(
                  "COMET_INFRA",
                  "ERROR_CODE",
                  t.getError().toString(),
                )
                .addMetadata(
                  "COMET_INFRA",
                  "ERROR_URL",
                  (a = (i = t.request) == null ? void 0 : i.getURI()) != null
                    ? a
                    : "unknown",
                )
                .mustfix(
                  "AsyncRequest._displayServerLegacyDialog called in Comet",
                );
            }
            r("Bootloader").loadModules(
              ["Dialog"],
              function (r) {
                var a = new r(o);
                (n && a.setHandler(e._displayConfirmationHandler.bind(e, a)),
                  a
                    .setCancelHandler(function () {
                      var n = e.getServerDialogCancelHandler();
                      try {
                        n && n(t);
                      } catch (e) {
                        throw e;
                      } finally {
                        e.finallyHandler(t);
                      }
                    })
                    .setCausalElement(e.relativeTo)
                    .show());
              },
              "AsyncRequest",
            );
          }),
          (a._displayConfirmationHandler = function (t) {
            ((this.data.confirmed = 1),
              Object.assign(this.data, t.getFormData()),
              this.send());
          }),
          (a.$1 = function (t) {
            (t.subscribe("response", this._handleJSONPResponse.bind(this)),
              t.subscribe("abort", this._handleJSONPAbort.bind(this)),
              (this.transport = t));
          }),
          (a._handleJSONPResponse = function (t, n) {
            var e = this.transport;
            if (e) {
              n.bootloadOnly || (this.is_first = this.is_first === void 0);
              var r = this._interpretResponse(n);
              (r.asyncResponse &&
                ((r.asyncResponse.is_first = this.is_first),
                (r.asyncResponse.is_last = e.hasFinished())),
                this.invokeResponseHandler(r),
                e.hasFinished() && delete this.transport);
            }
          }),
          (a._handleJSONPAbort = function () {
            (this._invokeErrorHandler(), delete this.transport);
          }),
          (a._handleXHRResponse = function (t) {
            var e;
            if (this.getOption("suppressEvaluation"))
              e = { asyncResponse: new (r("AsyncResponse"))(this, t) };
            else
              try {
                this._handleFlushedResponse();
                var n = t.responseText;
                n = this._filterOutFlushedText(n);
                var o = this._unshieldResponseText(n),
                  a = JSON.parse(o);
                e = this._interpretResponse(a);
              } catch (t) {
                var i = r("getErrorSafe")(t);
                ((e = i.message),
                  r("FBLogger")("async_request")
                    .catching(i)
                    .warn("Failed to handle response"));
              }
            this.invokeResponseHandler(e);
          }),
          (a._handleFlushedResponse = function () {
            var e = this.flushedResponseHandler,
              t = this.transport;
            if (e && t) {
              var n = t.responseText.indexOf(M),
                r = n === -1 ? t.responseText.length : n;
              (e(
                t.responseText.substring(this.flushedResponseTextParseIndex, r),
              ),
                (this.flushedResponseTextParseIndex = r));
            }
          }),
          (a._unshieldResponseText = function (t) {
            if (t.length <= w) {
              var e = new Error("Response too short on async");
              throw (e.stack, e);
            }
            for (var n = 0; t.charAt(n) === " " || t.charAt(n) === "\n"; ) n++;
            return (
              n &&
                t.substring(n, n + w) == M &&
                r("FBLogger")("asyncrequest").mustfix(
                  "Response for request to endpoint %s seems to be valid, but was preceded by whitespace. (This probably means that someone committed whitespace in a header file.)",
                  this.getURI(),
                ),
              t.substring(n + w)
            );
          }),
          (a._filterOutFlushedText = function (t) {
            if (!this.flushedResponseHandler) return t;
            var e = t.indexOf(M);
            return e < 0 ? t : t.substr(e);
          }),
          (a._interpretResponse = function (t) {
            if (t.redirect) return { redirect: t.redirect };
            if (t.bootloadOnly) return { bootloadOnly: t.bootloadOnly };
            var e = t.error && this._isServerDialogErrorCode(t.error);
            this._shouldReplaceTransportMarkers &&
              t.payload &&
              !e &&
              r("replaceTransportMarkers")(
                { relativeTo: this.getRelativeTo(), bigPipeContext: null },
                t.payload,
              );
            var n = new (r("AsyncResponse"))(this);
            if (t.__ar != 1)
              (r("FBLogger")("AsyncRequest").warn(
                "AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.",
                this.getURI(),
              ),
                (n.payload = t));
            else {
              Object.assign(n, t);
              var o = this.transport;
              o &&
                o.getAllResponseHeaders !== void 0 &&
                (n.responseHeaders = o.getAllResponseHeaders());
            }
            return { asyncResponse: n };
          }),
          (a._isMultiplexable = function () {
            return this.getOption("useFetchTransport")
              ? (r("FBLogger")("AsyncRequest").mustfix(
                  "You cannot bundle AsyncRequest that uses iframe transport.",
                ),
                !1)
              : r("isFacebookURI")(new (m || (m = r("URI")))(this.uri))
                ? this.getOption("asynchronous_DEPRECATED")
                  ? !0
                  : (r("FBLogger")("AsyncRequest").mustfix(
                      "We cannot bundle synchronous AsyncRequests",
                    ),
                    !1)
                : (r("FBLogger")("AsyncRequest").mustfix(
                    "You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s",
                    this.getURI(),
                  ),
                  !1);
          }),
          (a.handleResponse = function (t) {
            var e = this._interpretResponse(t);
            this.invokeResponseHandler(e);
          }),
          (a.setMethod = function (t) {
            return ((this.method = t.toString().toUpperCase()), this);
          }),
          (a.getMethod = function () {
            return this.method;
          }),
          (a.setData = function (t) {
            return ((this.data = t), this);
          }),
          (a.setRequestHeader = function (t, n) {
            return ((this.headers[t] = n), this);
          }),
          (a.setRawData = function (t) {
            return ((this.rawData = t), this);
          }),
          (a.getData = function () {
            return this.data;
          }),
          (a.setContextData = function (t, n, r) {
            return (
              (r = r === void 0 ? !0 : r),
              r && (this.context["_log_" + t] = n),
              this
            );
          }),
          (a._setUserActionID = function () {
            this.userActionID = (o("SessionName").getName() || "-") + "/-";
          }),
          (a.setURI = function (t, n) {
            (n === void 0 && (n = !1),
              typeof t == "string" &&
                t.match(/^\/?u_\d+_\d+/) &&
                r("FBLogger")("asyncrequest").warn("Invalid URI %s", t));
            var e = new (m || (m = r("URI")))(t);
            return this.getOption("useFetchTransport") && !r("isFacebookURI")(e)
              ? (r("FBLogger")("asyncrequest").mustfix(
                  "IframeTransport requests should only be used when going between different Facebook subdomains.  This probably won't do what you want if you're going to a non-Facebook URI.",
                ),
                !n || c(0, 45284),
                this)
              : !this._allowCrossOrigin &&
                  !this.getOption("useFetchTransport") &&
                  !e.isSameOrigin() &&
                  !r("uriIsRelativePath")(e)
                ? (r("FBLogger")("asyncrequest").mustfix(
                    "Asynchronous requests must specify relative URIs (like %s); this ensures they conform to the Same Origin Policy (see %s). The provided absolute URI (%s) is invalid, use a relative URI instead.",
                    "/path/to/endpoint.php",
                    "http://www.mozilla.org/projects/security/components/same-origin.html",
                    e.toString(),
                  ),
                  !n || c(0, 45285),
                  this)
                : (this._setUserActionID(),
                  !t || e.isEmpty()
                    ? (r("FBLogger")("async_request").mustfix(
                        "URI cannot be empty",
                      ),
                      this)
                    : ((this.uri = o("ZeroRewrites").rewriteURI(e)), this));
          }),
          (a.getURI = function () {
            return this.uri.toString();
          }),
          (a.delayPreDisplayJS = function (t) {
            return (
              t === void 0 && (t = !0),
              (this._delayPreDisplayJS = t),
              this
            );
          }),
          (a.setInitialHandler = function (t) {
            return ((this.initialHandler = t), this);
          }),
          (a.setPayloadHandler = function (t) {
            return (
              this.setHandler(function (e) {
                t(e.payload);
              }),
              this
            );
          }),
          (a.setHandler = function (t) {
            return (x(t) && (this.handler = t), this);
          }),
          (a.setFlushedResponseHandler = function (t) {
            return (x(t) && (this.flushedResponseHandler = t), this);
          }),
          (a.getHandler = function () {
            return this.handler || r("emptyFunction");
          }),
          (a.setProgressHandler = function (t) {
            return (x(t) && (this.progressHandler = t), this);
          }),
          (a.setUploadProgressHandler = function (t) {
            return (x(t) && (this.uploadProgressHandler = t), this);
          }),
          (a.setErrorHandler = function (t) {
            return (x(t) && (this.errorHandler = t), this);
          }),
          (a.setTransportErrorHandler = function (t) {
            return ((this.transportErrorHandler = t), this);
          }),
          (a.getErrorHandler = function () {
            return this.errorHandler || r("emptyFunction");
          }),
          (a.getTransportErrorHandler = function () {
            return this.transportErrorHandler || r("emptyFunction");
          }),
          (a.setTimeoutHandler = function (t, n) {
            return (
              x(n) && ((this.timeout = t), (this.timeoutHandler = n)),
              this
            );
          }),
          (a.resetTimeout = function (t) {
            if (this.timeoutHandler === null)
              r("FBLogger")("asyncrequest").mustfix(
                "The timeout handler hasn't been set yet",
              );
            else if (t === null)
              ((this.timeout = null),
                r("clearTimeout")(this.timer),
                (this.timer = null));
            else {
              var e = !this._allowCrossPageTransition;
              ((this.timeout = t),
                r("clearTimeout")(this.timer),
                e
                  ? (this.timer = r("setTimeout")(
                      this._handleTimeout.bind(this),
                      this.timeout,
                    ))
                  : (this.timer = r("setTimeoutAcrossTransitions")(
                      this._handleTimeout.bind(this),
                      this.timeout,
                    )));
            }
            return this;
          }),
          (a.setNewSerial = function () {
            return ((this.id = ++$), this);
          }),
          (a.setInterceptHandler = function (t) {
            return ((this.interceptHandler = t), this);
          }),
          (a.setFinallyHandler = function (t) {
            return ((this.finallyHandler = t), this);
          }),
          (a.setAbortHandler = function (t) {
            return ((this.abortHandler = t), this);
          }),
          (a.getServerDialogCancelHandler = function () {
            return this.serverDialogCancelHandler;
          }),
          (a.setServerDialogCancelHandler = function (t) {
            return ((this.serverDialogCancelHandler = t), this);
          }),
          (a.setPreBootloadHandler = function (t) {
            return ((this.preBootloadHandler = t), this);
          }),
          (a.setReadOnly = function (t) {
            return (
              typeof t != "boolean"
                ? r("FBLogger")("asyncrequest").mustfix(
                    "AsyncRequest readOnly value must be a boolean.",
                  )
                : (this.readOnly = t),
              this
            );
          }),
          (a.getReadOnly = function () {
            return this.readOnly;
          }),
          (a.setRelativeTo = function (t) {
            return ((this.relativeTo = t), this);
          }),
          (a.getRelativeTo = function () {
            return this.relativeTo;
          }),
          (a.setStatusClass = function (t) {
            return ((this.statusClass = t), this);
          }),
          (a.setStatusElement = function (t) {
            return ((this.statusElement = t), this);
          }),
          (a.getStatusElement = function () {
            return r("ge")(this.statusElement);
          }),
          (a._isRelevant = function () {
            return this._allowCrossPageTransition || !this.id
              ? !0
              : this.id > P;
          }),
          (a.clearStatusIndicator = function () {
            var e = this.getStatusElement();
            e &&
              (o("CSS").removeClass(e, "async_saving"),
              o("CSS").removeClass(e, this.statusClass));
          }),
          (a._addStatusIndicator = function () {
            var e = this.getStatusElement();
            e &&
              (o("CSS").addClass(e, "async_saving"),
              o("CSS").addClass(e, this.statusClass));
          }),
          (a.specifiesWriteRequiredParams = function () {
            var e = this;
            return this.writeRequiredParams.every(function (t) {
              return (
                (e.data[t] =
                  e.data[t] ||
                  (_ || (_ = r("Env")))[t] ||
                  (r("ge")(t) || {}).value),
                e.data[t] !== void 0
              );
            });
          }),
          (a.setOption = function (t, n) {
            return (
              typeof this.option[t] != "undefined"
                ? (this.option[t] = n)
                : r("FBLogger")("asyncrequest").warn(
                    "AsyncRequest option %s does not exist; request to set it was ignored.",
                    t,
                  ),
              this
            );
          }),
          (a.getOption = function (t) {
            return (
              typeof this.option[t] == "undefined" &&
                r("FBLogger")("asyncrequest").warn(
                  "AsyncRequest option %s does not exist, get request failed.",
                  t,
                ),
              this.option[t]
            );
          }),
          (a.abort = function () {
            var e = this;
            this.continuation.last(function () {
              var t = e.transport;
              if (t) {
                var n = e.getTransportErrorHandler();
                (e.setOption("suppressErrorAlerts", !0),
                  e.setTransportErrorHandler(r("emptyFunction")),
                  (e._requestAborted = !0),
                  t.abort(),
                  e.setTransportErrorHandler(n));
              }
              (e.abortHandler(), B.unschedule(e));
            });
          }),
          (a.abandon = function () {
            var e = this;
            this.continuation.last(function () {
              var t;
              (r("clearTimeout")(e.timer),
                e
                  .setOption("suppressErrorAlerts", !0)
                  .setHandler((t = r("emptyFunction")))
                  .setErrorHandler(t)
                  .setTransportErrorHandler(t)
                  .setProgressHandler(t)
                  .setUploadProgressHandler(t));
              var n = e.transport;
              (n &&
                ((e._requestAborted = !0),
                k(n) && delete n.onprogress,
                I(n) && delete n.upload.onprogress,
                n.abort()),
                e.abortHandler(),
                B.unschedule(e));
            });
          }),
          (a.setNectarModuleDataSafe = function (t) {
            var e = this.setNectarModuleData;
            return (e != null && e.call(this, t), this);
          }),
          (a.setAllowCrossPageTransition = function (t) {
            return (
              (this._allowCrossPageTransition = !!t),
              this.timer && this.resetTimeout(this.timeout),
              this
            );
          }),
          (a.getAllowIrrelevantRequests = function () {
            return this._allowIrrelevantRequests;
          }),
          (a.setAllowIrrelevantRequests = function (t) {
            return ((this._allowIrrelevantRequests = t), this);
          }),
          (a.setAllowCrossOrigin = function (t) {
            return ((this._allowCrossOrigin = t), this);
          }),
          (a.setAllowCredentials = function (t) {
            return ((this._allowCredentials = t), this);
          }),
          (a.setIsBackgroundRequest = function (t) {
            return ((this._isBackgroundRequest = t), this);
          }),
          (a.setReplaceTransportMarkers = function (t) {
            return (
              t === void 0 && (t = !0),
              (this._shouldReplaceTransportMarkers = t),
              this
            );
          }),
          (a.sendAndReturnAbortHandler = function () {
            var e = this;
            return (
              this.send(),
              function () {
                return e.abort();
              }
            );
          }),
          (a.send = function (a) {
            var n = this;
            if (((a = a || !1), !this.uri))
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "Attempt to dispatch an AsyncRequest without an endpoint URI! This is all sorts of silly and impossible, so the request failed.",
                ),
                !1
              );
            if (
              (!this.errorHandler &&
                !this.getOption("suppressErrorHandlerWarning") &&
                r("FBLogger")("asyncrequest").warn(
                  "Dispatching an AsyncRequest that does not have an error handler. You SHOULD supply one, or use AsyncSignal). If this omission is intentional and well-considered, set the %s option to suppress this warning.",
                  "suppressErrorHandlerWarning",
                ),
              this.getOption("useFetchTransport") &&
                this.method != "GET" &&
                (r("FBLogger")("asyncrequest").warn(
                  "Iframe transport currently works only with GET.",
                ),
                this.setMethod("GET")),
              this.timeoutHandler !== null &&
                this.getOption("useFetchTransport") &&
                r("FBLogger")("asyncrequest").warn(
                  "Timeouts aren't currently supported with iframe transport requests.",
                ),
              !this.getReadOnly() &&
                (this.specifiesWriteRequiredParams(), this.method != "POST"))
            )
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "You are making a GET request which modifies data; this violates the HTTP spec and is generally a bad idea. Either change this request to use POST or use setReadOnly() to mark the request as idempotent and appropriate for HTTP GET. Consult the setReadOnly() documentation for more information.",
                ),
                !1
              );
            if (
              document.location.search.toString().includes(this.uri.toString())
            )
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "You are trying to send an AsyncRequest where the destination URI is contained within the current URI's query string. That suggests you are taking the destination URL as input from the request. If you allow arbitrary URLs to be sent in that way you bypass CSRF protection and cause a SEV. Please post in https://fb.workplace.com/groups/secinfra/ if you feel this is a false positive.",
                ),
                !1
              );
            if (
              this.uri.toString().includes("/../") ||
              this.uri.toString().includes("\\../") ||
              this.uri.toString().includes("/..\\") ||
              this.uri.toString().includes("\\..\\")
            )
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "The URI cannot contain any character sequences that would allow path traversal.",
                ),
                !1
              );
            if (
              (Object.assign(this.data, r("getAsyncParams")(this.method)),
              (f || (f = r("isEmpty")))(this.context) ||
                (Object.assign(this.data, this.context),
                (this.data.ajax_log = 1)),
              (_ || (_ = r("Env"))).force_param &&
                Object.assign(this.data, (_ || (_ = r("Env"))).force_param),
              this._setUserActionID(),
              this.getOption("bundle") && this._isMultiplexable())
            )
              return (B.schedule(this), !0);
            (this.setNewSerial(),
              this.getOption("asynchronous_DEPRECATED") ||
                this.uri.addQueryData({ __sjax: 1 }),
              r("Arbiter").inform("AsyncRequest/send", {
                request: this,
                ts: (p || (p = r("performanceAbsoluteNow")))(),
              }));
            var i, l;
            if (
              (this.method == "GET" &&
                this.uri.addQueryData({
                  fb_dtsg_ag: o("DTSG_ASYNC").getToken(),
                }),
              o("AdsManagerConstURIUtils").shouldRouteToAMReadRegions(
                this.uri.toString(),
              ) &&
              this.getReadOnly() &&
              this.method.toLowerCase() === "get"
                ? this.uri.addQueryData({ ads_manager_read_regions: !0 })
                : o("AdsManagerConstURIUtils").shouldRouteToAMWriteRegions(
                    this.uri.toString(),
                    this.getReadOnly(),
                  ) && this.uri.addQueryData({ ads_manager_write_regions: !0 }),
              this.method == "GET" || this.rawData
                ? ((i = this.uri.addQueryData(this.data).toString()),
                  (l = this.rawData || ""))
                : (this._allowCrossOrigin && this.uri.addQueryData({ __a: 1 }),
                  (i = this.uri.toString()),
                  (l = (e || (e = o("PHPQuerySerializer"))).serialize(
                    this.data,
                  ))),
              this.transport)
            )
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "You must wait for an AsyncRequest to complete before sending another request with the same object. To send two simultaneous requests, create a second AsyncRequest object.",
                ),
                !1
              );
            if (this.getOption("useFetchTransport"))
              try {
                var s = new (r("FetchStreamTransport"))(this.uri);
                return (this.$1(s), this._markRequestSent(), s.send(), !0);
              } catch (e) {
                this.setOption("useFetchTransport", !1);
              }
            this.flushedResponseHandler &&
              (this.flushedResponseTextParseIndex = 0);
            var u;
            try {
              u = o("ZeroRewrites").getTransportBuilderForURI(this.uri)();
            } catch (e) {
              var c = r("FBLogger")("comet_infra").blameToPreviousFrame();
              throw e instanceof Error
                ? c.catching(e).mustfixThrow(e.message)
                : c.mustfixThrow("Error getting transport builder for URI");
            }
            if (!u)
              return (
                r("FBLogger")("asyncrequest").mustfix(
                  "Unable to build XMLHTTPRequest transport.",
                ),
                !1
              );
            (this.schedule("AsyncRequest.send"),
              (u.onreadystatechange = function () {
                var e = n.transport;
                (e &&
                  e.readyState >= 2 &&
                  e.readyState <= 3 &&
                  n._handleFlushedResponse(),
                  u.readyState === 4 && n.continuation.last(n._onStateChange));
              }),
              this.progressHandler &&
                k(u) &&
                (u.onprogress = function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  n.continuation(function () {
                    n.progressHandler && n.progressHandler.apply(n, t);
                  });
                }),
              this.uploadProgressHandler &&
                I(u) &&
                (u.upload.onprogress = function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  n.continuation(function () {
                    n.uploadProgressHandler &&
                      n.uploadProgressHandler.apply(n, t);
                  });
                }),
              a || (this.remainingRetries = this.getOption("retries")),
              (this.transport = u));
            try {
              u.open(this.method, i, this.getOption("asynchronous_DEPRECATED"));
            } catch (e) {
              return (
                r("FBLogger")("asyncrequest")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Exception when opening Async transport to %s.", i),
                !1
              );
            }
            if (
              !this.uri.isSameOrigin() &&
              !r("uriIsRelativePath")(this.uri) &&
              !this.getOption("useFetchTransport")
            ) {
              if (!T(u))
                return (
                  r("FBLogger")("asyncrequest").mustfix(
                    "Unable to send cross-origin request (to %s) because the client does not support the protocol.",
                    this.uri.toString(),
                  ),
                  !1
                );
              this._canSendCredentials() && (u.withCredentials = !0);
            }
            (this.method == "POST" &&
              !this.rawData &&
              u.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded",
              ),
              this._isBackgroundRequest &&
                u.setRequestHeader("X-FB-BACKGROUND-STATE", "1"));
            var d = r("getAsyncHeaders")(this.uri);
            if (
              (Object.keys(d).forEach(function (e) {
                u && u.setRequestHeader(e, d[e]);
              }),
              r("Arbiter").inform("AsyncRequest/will_send", { request: this }),
              u)
            )
              for (var m in this.headers)
                Object.prototype.hasOwnProperty.call(this.headers, m) &&
                  u.setRequestHeader(m, this.headers[m]);
            return (
              this._addStatusIndicator(),
              this._markRequestSent(),
              u.send(l),
              this.timeout !== null && this.resetTimeout(this.timeout),
              t._inflightCount++,
              !0
            );
          }),
          (a.schedule = function (t) {
            this.continuation = r("TimeSlice").getReusableContinuation(t);
          }),
          (a._canSendCredentials = function () {
            return this._allowCredentials === !1
              ? !1
              : r("canSendCredentialsForAsyncRequest")(
                  new (m || (m = r("URI")))(this.uri),
                );
          }),
          (a._markRequestSent = function () {
            var e = new (m || (m = r("URI")))(this.getURI())
              .getQualifiedURI()
              .toString();
            (o("ResourceTimingsStore").updateURI(
              r("ResourceTypes").XHR,
              this.resourceTimingStoreUID,
              e,
            ),
              o("ResourceTimingsStore")
                .annotate(r("ResourceTypes").XHR, this.resourceTimingStoreUID)
                .addStringAnnotation("uri", e),
              o("ResourceTimingsStore").measureRequestSent(
                r("ResourceTypes").XHR,
                this.resourceTimingStoreUID,
              ));
          }),
          (a.promisePayload = function (t) {
            return this.exec().then(
              function (e) {
                return e.payload;
              },
              function (e) {
                throw e.toError();
              },
            );
          }),
          (a.exec = function (t) {
            var e = this;
            if (
              this.getHandler() !== r("emptyFunction") ||
              this.getErrorHandler() !== r("AsyncResponse").defaultErrorHandler
            ) {
              var o = new Error(
                "exec is an async function and does not allow previously set handlers",
              );
              throw (o.stack, o);
            }
            return new (d || (d = n("Promise")))(function (n, r) {
              e.setHandler(n).setErrorHandler(r).send(t);
            });
          }),
          (t.bootstrap = function (n, a, i) {
            var e = "GET",
              l = !0,
              s = {};
            (i || (a && a.rel == "async-post")) &&
              ((e = "POST"),
              (l = !1),
              n &&
                ((n = new (m || (m = r("URI")))(n)),
                (s = n.getQueryData()),
                n.setQueryData({})));
            var u = o("Parent").byClass(a, "stat_elem") || a;
            if (u && o("CSS").hasClass(u, "async_saving")) return !1;
            var c = new t(n)
              .setReadOnly(l)
              .setMethod(e)
              .setData(s)
              .setNectarModuleDataSafe(a)
              .setRelativeTo(a);
            if (
              (a &&
                (c.setHandler(function (e) {
                  r("Event").fire(a, "success", { response: e });
                }),
                c.setErrorHandler(function (e) {
                  r("Event").fire(a, "error", { response: e }) !== !1 &&
                    r("AsyncResponse").defaultErrorHandler(e);
                })),
              u instanceof HTMLElement)
            ) {
              c.setStatusElement(u);
              var d = u.getAttribute("data-status-class");
              d && c.setStatusClass(d);
            }
            return (c.send(), !1);
          }),
          (t.bootstrap_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES =
            function (n, r, o) {
              t.bootstrap(n, r, o);
            }),
          (t.post = function (n, r) {
            return (
              new t(n).setReadOnly(!1).setMethod("POST").setData(r).send(),
              !1
            );
          }),
          (t.post_UNSAFE_LET_ANYONE_IMPERSONATE_THE_USER_FOR_THESE_WRITES =
            function (n, r) {
              t.post(n, r);
            }),
          (t.getLastID = function () {
            return $;
          }),
          (t.ignoreUpdate = function () {
            N = !0;
          }),
          (t.getInflightCount = function () {
            return this._inflightCount;
          }),
          t
        );
      })();
    A._inflightCount = 0;
    var F,
      O = [],
      B = (function () {
        function t() {
          this._requests = [];
        }
        var n = t.prototype;
        return (
          (n.add = function (t) {
            this._requests.push(t);
          }),
          (n.remove = function (t) {
            for (
              var e = this._requests,
                n = this._requestsSent,
                r = 0,
                o = e.length;
              r < o;
              r++
            )
              e[r] === t && (n ? (e[r] = null) : e.splice(r, 1));
          }),
          (n.send = function () {
            (!this._requestsSent || c(0, 4390),
              (this._requestsSent = !0),
              (this._wrapperRequest = null));
            var t = this._requests;
            if (t.length) {
              var n;
              if (t.length === 1) n = t[0];
              else {
                var r = t.filter(Boolean).map(function (t) {
                  return [
                    t.uri.getPath(),
                    (e || (e = o("PHPQuerySerializer"))).serialize(t.data),
                  ];
                });
                n = this._wrapperRequest = new A("/ajax/proxy.php")
                  .setAllowCrossPageTransition(!0)
                  .setData({ data: r })
                  .setHandler(this._handler.bind(this))
                  .setTransportErrorHandler(
                    this._transportErrorHandler.bind(this),
                  );
              }
              n && n.setOption("bundle", !1).send();
            }
          }),
          (n._handler = function (t) {
            var e = this,
              n = t.getPayload().responses;
            if (n.length !== this._requests.length) {
              r("FBLogger")("asyncrequest").mustfix(
                "Response number from proxy.php mismatches request number.",
              );
              return;
            }
            for (
              var o = function (r) {
                  var t = e._requests[r];
                  if (!t) return 0;
                  var o = t.uri.getPath();
                  if (
                    (e._wrapperRequest && (t.id = e._wrapperRequest.id),
                    n[r][0] !== o)
                  )
                    return (
                      t.continuation.last(function () {
                        t.invokeResponseHandler({
                          transportError:
                            "Wrong response order in bundled request to " + o,
                        });
                      }),
                      0
                    );
                  t.continuation.last(function () {
                    t.handleResponse(n[r][1]);
                  });
                },
                a,
                i = 0;
              i < this._requests.length;
              i++
            )
              a = o(i);
            O.splice(O.indexOf(this, 1));
          }),
          (n._transportErrorHandler = function (t) {
            var e = this,
              n = { transportError: t.errorDescription },
              o = this._requests.filter(Boolean).map(function (t) {
                return (
                  e._wrapperRequest && (t.id = e._wrapperRequest.id),
                  t.invokeResponseHandler(n),
                  t.uri.getPath()
                );
              });
            r("FBLogger")("asyncrequest").mustfix(
              "Transport error occurred for bundled requests to " +
                o.join(", "),
            );
          }),
          (t.schedule = function (n) {
            return (
              n.schedule("AsyncMultiplex.schedule"),
              F ||
                ((F = new t()),
                O.push(F),
                r("TimeSlice").guard(
                  function () {
                    r("setTimeoutAcrossTransitions")(function () {
                      F && (F.send(), (F = null));
                    }, 0);
                  },
                  "AsyncMultiplex.schedule",
                  { propagationType: r("TimeSlice").PropagationType.ORPHAN },
                )()),
              F.add(n),
              F
            );
          }),
          (t.unschedule = function (t) {
            O.forEach(function (e) {
              e.remove(t);
            });
          }),
          t
        );
      })();
    ((A.suppressOnloadToken = {}), (t.AsyncRequest = A), (l.default = A));
  },
  226,
);
