__d(
  "WAFlowsError",
  [
    "codedError",
    "errorCode",
    "fbt",
    "$InternalEnum",
    "WAFlowsLocalization",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e = function (t) {
        return (
          Object.prototype.hasOwnProperty.call(t, "code") &&
          Object.prototype.hasOwnProperty.call(t, "description") &&
          Object.prototype.hasOwnProperty.call(t, "summary")
        );
      },
      d = function (n) {
        return n instanceof N ? n.codedError : e(n) ? n : null;
      },
      m = function (t) {
        if (t instanceof N) {
          var e;
          return (e = t.codedError) == null ? void 0 : e.code;
        }
        var n = d(t);
        return n ? n.code : null;
      },
      p = {
        UNKNOWN_ERROR: "flows-unknown-error",
        BUSINESS_ENDPOINT_RESPONSE_421: "extensions-business-decryption-error",
        BUSINESS_ENDPOINT_RESPONSE_ERROR:
          "extensions-business-endpoint-response-error",
        BUSINESS_ENDPOINT_RESPONSE_INVALID_FORMAT:
          "flows-business-endpoint-response-invalid-format",
        DATA_EXCHANGE_GRAPHQL_INTERNAL_SERVER_ERROR:
          "extensions-data-exchange-graphql-response-error",
        DECRYPTION_FAILED_ERROR: "extensions-decryption-failed-exception",
        ENCRYPTION_FAILED_ERROR: "extensions-encryption-failed-exception",
        BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN:
          "extensions-invalid-flow-token-error",
        NO_INTERNET_CONNECTION: "extensions-data-exchange-no-network-error",
        BUSINESS_ENPOINT_TIMEOUT_ERROR: "extensions-timeout-error",
        INVALID_SCREEN_TRANSITION_ERROR:
          "extensions-invalid-screen-transition-error",
        THIRD_PARTY_SCREEN_DATA_INVALID:
          "extensions-layout-third-party-screen-data-invalid",
        COMPONENT_HARD_VALIDATOR_ERROR:
          "extensions-layout-components-validator-error",
        FORM_LAYOUT_ERROR: "extensions-error-from-layout",
        FLOW_NOT_SERVABLE_ERROR: "flows-invalid-state-error",
      },
      _ = {
        DECRYPTION_FAILED_ERROR: "response-decryption-error",
        INVALID_SCREEN_TRANSITION_ERROR: "invalid-screen-transition",
        THIRD_PARTY_SCREEN_DATA_INVALID: "payload-schema-error",
        COMPONENT_HARD_VALIDATOR_ERROR: "components-validation-error",
      },
      f = Object.freeze({
        COMPONENT_HARD_VALIDATOR_ERROR: s._(
          4233003,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        NO_INTERNET_CONNECTION: s._(
          4233007,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN: s._(
          2498062,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        DATA_EXCHANGE_GRAPHQL_ENDPOINT_INTERNAL_SERVER_ERROR: s._(
          2498060,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        BUSINESS_ENDPOINT_RESPONSE_ERROR: s._(
          2498085,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        DECRYPTION_FAILED_ERROR: s._(
          4016016,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        ENCRYPTION_FAILED_ERROR: s._(
          4016015,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        INVALID_ENCRYPTION_ERROR_421: s._(
          2498061,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        BUSINESS_ENPOINT_TIMEOUT_ERROR: s._(
          2498058,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        GRAPHQPL_CTA_DISABLED_CODED_ERROR: s._(
          4233016,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        FLOW_NOT_SERVABLE_ERROR: s._(
          2498088,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        BUSINESS_ENDPOINT_INVALID_RESPONSE_ERROR: s._(
          2498065,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
      }),
      g = Object.freeze({
        COMPONENT_HARD_VALIDATOR_ERROR: 4233003,
        NO_INTERNET_CONNECTION: 4233007,
        DATA_EXCHANGE_GRAPHQL_ENDPOINT_INTERNAL_SERVER_ERROR: 2498060,
        BUSINESS_ENDPOINT_RESPONSE_ERROR: 2498085,
        DECRYPTION_FAILED_ERROR: 4016016,
        ENCRYPTION_FAILED_ERROR: 4016015,
        INVALID_ENCRYPTION_ERROR_421: 2498061,
        BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN: 2498062,
        BUSINESS_ENPOINT_TIMEOUT_ERROR: 2498058,
        EXTENSIONS_FEATURES_DISABLED_ERROR: 2498098,
        GRAPHQPL_CTA_DISABLED_CODED_ERROR: 4233016,
        FLOW_NOT_SERVABLE_ERROR: 2498088,
        BUSINESS_ENDPOINT_INVALID_RESPONSE_ERROR: 2498065,
      }),
      h = Object.freeze({
        CATALOG_BAD_REQUEST_ERROR_400: 2498049,
        CATALOG_UNAUTHORISED_ERROR_401: 2498050,
        CATALOG_FORBIDDEN_ERROR_403: 2498051,
        CATALOG_ITEM_NOT_FOUND_ERROR_404: 2498052,
        CATALOG_NOT_ACCEPTABLE_ERROR_406: 2498053,
        CATALOG_GET_PRODUCT_UNPROCESSABLE_DATA_422: 2498097,
        CATALOG_COMMERCE_FEATURES_DISABLED_ERROR_451: 2498048,
        CATALOG_INTERNAL_SERVER_ERROR_500: 2498055,
      }),
      y = Object.freeze({
        CATALOG_BAD_REQUEST_ERROR_400: s._(
          2498049,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_UNAUTHORISED_ERROR_401: s._(
          2498050,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_FORBIDDEN_ERROR_403: s._(
          2498051,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_ITEM_NOT_FOUND_ERROR_404: s._(
          2498052,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_NOT_ACCEPTABLE_ERROR_406: s._(
          2498053,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_GET_PRODUCT_UNPROCESSABLE_DATA_422: s._(
          2498097,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_COMMERCE_FEATURES_DISABLED_ERROR_451: s._(
          2498048,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
        CATALOG_INTERNAL_SERVER_ERROR_500: s._(
          2498055,
          function (e) {
            return e._(/*BTDS*/ "");
          },
          function (e, t) {
            return e._(/*BTDS*/ "");
          },
          {},
        ),
      }),
      C = n("$InternalEnum").Mirrored([
        "WAFlowsError",
        "WAFlowsInvalidScreenError",
        "WAFlowsInvalidDataChannelResponseError",
        "WAFlowsRoutingModelValidationError",
        "WAFlowsDataModelValidationError",
        "WAFlowsDataChannelError",
        "WAFlowsComponentHardValidationError",
        "WAFlowsInvalidFlowActionMessageDataError",
        "WAFlowsInvalidBase64ValueToDecodeError",
        "WAFlowsInvalidDecryptedDataFormatError",
        "WAFlowsDataChannelResponseError",
        "WAFlowsDataChannelResponseDecryptionError",
        "WAFlowsInitScreenValidationError",
      ]);
    function b(e) {
      return new URL("https://developers.facebook.com/docs/whatsapp/flows" + e);
    }
    var v = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsError),
            (n.title = null),
            (n.resolutionUrl = null),
            (n.message = String(t)),
            (n.name = "Internal Error"),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getErrorMessage = function (t) {
            return t
              ? "[" + this.name + "] " + this.message
              : o("WAFlowsLocalization").getFallbackErrorMessage();
          }),
          (n.getType = function () {
            return this.type;
          }),
          t
        );
      })(babelHelpers.wrapNativeSuper(Error)),
      S = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t) || this),
            (o.type = C.WAFlowsRoutingModelValidationError),
            (o.name = "3P Propagable Error"),
            (o.action = n),
            (o.screen = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      R = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInvalidScreenError),
            (n.name = "Invalid Screen Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      L = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInvalidDataChannelResponseError),
            (n.name = "Invalid Data Channel Response Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      E = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInvalidFlowActionMessageDataError),
            (n.name = "Invalid Flow Action Message Data"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      k = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t.join("."), n, r) || this),
            (o.type = C.WAFlowsRoutingModelValidationError),
            (o.name = "Routing Model Error"),
            (o.title = c._(/*BTDS*/ "")),
            (o.resolutionUrl = b("/reference/flowjson#routing-model")),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(S),
      I = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t.join("."), n, r) || this),
            (o.type = C.WAFlowsDataModelValidationError),
            (o.name = "Data Validation Error"),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(S),
      T = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInitScreenValidationError),
            (n.name = "Init Screen Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      D = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t.toString(), "data_exchange", r) || this),
            (a.type = C.WAFlowsDataChannelError),
            (a.name = "Data Channel Error"),
            (a.origin = n),
            (a.retryDataExchangeAction = o),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getWAFlowErrorCode = function () {
            return m(this.origin);
          }),
          (n.getCodedError = function () {
            return d(this.origin);
          }),
          (n.getErrorMessage = function (t) {
            var e,
              n = t
                ? "[" + this.name + "] " + this.origin.message
                : o("WAFlowsLocalization").getFallbackErrorMessage();
            switch (this.getWAFlowErrorCode()) {
              case g.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN:
                n =
                  this.origin instanceof M
                    ? (e = this.origin.customMessage) != null
                      ? e
                      : o("WAFlowsLocalization").getFallbackErrorMessage()
                    : this.origin.message;
                break;
              case g.NO_INTERNET_CONNECTION:
                n = o("WAFlowsLocalization").getNoInternetErrorMessage();
                break;
              case g.BUSINESS_ENPOINT_TIMEOUT_ERROR:
                n = o("WAFlowsLocalization").getTimeoutErrorMessage();
                break;
              case g.INVALID_ENCRYPTION_ERROR_421:
              case g.BUSINESS_ENDPOINT_RESPONSE_ERROR:
                n = o("WAFlowsLocalization").getFallbackErrorMessage();
                break;
              case g.GRAPHQPL_CTA_DISABLED_CODED_ERROR:
                ((n = o("WAFlowsLocalization").getFallbackErrorMessage()),
                  (this.retryDataExchangeAction = void 0));
                break;
            }
            return n;
          }),
          t
        );
      })(S),
      x = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsComponentHardValidationError),
            (n.name = "Component Validation Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      $ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInvalidBase64ValueToDecodeError),
            (n.name = "Base64 Decoding Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      P = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.type = C.WAFlowsInvalidDecryptedDataFormatError),
            (n.name = "Invalid Decrypted Data Format Error"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      N = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t) || this),
            (a.type = C.WAFlowsDataChannelResponseError),
            (a.name = "Data Channel Response Error"),
            (a.title = c._(/*BTDS*/ "")),
            (a.codedError = n),
            (a.response = r),
            (a.decryptedResponseBody = o),
            (a.resolutionUrl = b("/guides/implementingyourflowendpoint#setup")),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(v),
      M = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o =
              e.call(
                this,
                c._(/*BTDS*/ ""),
                f.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN,
                t,
                r,
              ) || this),
            (o.title = c._(/*BTDS*/ "")),
            (o.resolutionUrl = b(
              "/reference/error-codes#endpoint_error_codes",
            )),
            (o.isNonRetryable = !0),
            (o.customMessage = n),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(N),
      w = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                r("justknobx")._("8178") ? c._(/*BTDS*/ "") : c._(/*BTDS*/ ""),
                f.INVALID_ENCRYPTION_ERROR_421,
                t,
              ) || this),
            (n.title = r("justknobx")._("8178")
              ? c._(/*BTDS*/ "")
              : c._(/*BTDS*/ "")),
            (n.resolutionUrl = b(
              "/reference/error-codes#endpoint_error_codes",
            )),
            (n.isNonRetryable = !0),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(N),
      A = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o =
              e.call(
                this,
                r != null
                  ? c._(/*BTDS*/ "", [c._param("Error details", r)])
                  : c._(/*BTDS*/ ""),
                null,
                t,
              ) || this),
            (o.type = C.WAFlowsInvalidDecryptedDataFormatError),
            (o.title = c._(/*BTDS*/ "")),
            (o.response = t),
            (o.decryptedResponseBody = n),
            (o.resolutionUrl = b(
              "/guides/implementingyourflowendpoint#data_exchange_request",
            )),
            (o.isNonRetryable = !0),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(N),
      F = (function (e) {
        function t(t, n) {
          var o;
          return (
            (o = e.call(this, c._(/*BTDS*/ ""), t, n) || this),
            (o.type = C.WAFlowsDataChannelResponseDecryptionError),
            (o.name = "Data Channel Response Decryption Error"),
            (o.title = r("justknobx")._("8178")
              ? c._(/*BTDS*/ "")
              : c._(/*BTDS*/ "")),
            (o.response = n),
            (o.resolutionUrl = b(
              "/guides/implementingyourflowendpoint#encrypt",
            )),
            (o.isNonRetryable = !0),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(N),
      O = function (t, n) {
        var e,
          r,
          o = (e = t.errors) == null ? void 0 : e[0],
          a = t.data.xwa_flows_make_flow_endpoint_request,
          i = (r = o == null ? void 0 : o.code) != null ? r : n;
        if (i != null) return B(i);
        if ((a == null ? void 0 : a.status_code) === 427)
          return p.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN;
      },
      B = function (t) {
        switch (t) {
          case g.BUSINESS_ENPOINT_TIMEOUT_ERROR:
            return p.BUSINESS_ENPOINT_TIMEOUT_ERROR;
          case g.NO_INTERNET_CONNECTION:
            return p.NO_INTERNET_CONNECTION;
          case g.DATA_EXCHANGE_GRAPHQL_ENDPOINT_INTERNAL_SERVER_ERROR:
          case g.GRAPHQPL_CTA_DISABLED_CODED_ERROR:
          case g.BUSINESS_ENDPOINT_INVALID_RESPONSE_ERROR:
          case g.BUSINESS_ENDPOINT_RESPONSE_ERROR:
            return p.BUSINESS_ENDPOINT_RESPONSE_ERROR;
          case g.INVALID_ENCRYPTION_ERROR_421:
            return p.BUSINESS_ENDPOINT_RESPONSE_421;
          case g.ENCRYPTION_FAILED_ERROR:
            return p.ENCRYPTION_FAILED_ERROR;
          case g.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN:
            return p.BUSINESS_ENDPOINT_RESPONSE_427_INVALID_FLOW_TOKEN;
          case g.FLOW_NOT_SERVABLE_ERROR:
            return p.FLOW_NOT_SERVABLE_ERROR;
          case g.DECRYPTION_FAILED_ERROR:
            return p.DECRYPTION_FAILED_ERROR;
        }
      };
    ((l.isCodedError = e),
      (l.getWAFlowCodedError = m),
      (l.WAFlowsLoggerErrorTypes = p),
      (l.WAFlows3pPropagableErrorKeys = _),
      (l.WAFlowsCodedError = f),
      (l.WAFlowsErrorCodes = g),
      (l.WAFlowsShoppingErrorCodes = h),
      (l.WAFlowsShoppingCodedError = y),
      (l.WAFlowsErrorTypes = C),
      (l.WAFlowsError = v),
      (l.WAFlows3pPropagatableError = S),
      (l.WAFlowsInvalidScreenError = R),
      (l.WAFlowsInvalidDataChannelResponseError = L),
      (l.WAFlowsInvalidFlowActionMessageDataError = E),
      (l.WAFlowsRoutingModelValidationError = k),
      (l.WAFlowsDataModelValidationError = I),
      (l.WAFlowsInitScreenValidationError = T),
      (l.WAFlowsDataChannelError = D),
      (l.WAFlowsComponentHardValidationError = x),
      (l.WAFlowsInvalidBase64ValueToDecodeError = $),
      (l.WAFlowsInvalidDecryptedDataFormatError = P),
      (l.WAFlowsDataChannelResponseError = N),
      (l.WAFlowsDataChannelResponseInvalidTokenError = M),
      (l.WAFlowsDataChannelResponseBusinessDecryptionError = w),
      (l.WAFlowsDataChannelResponseInvalidResponseFormatError = A),
      (l.WAFlowsDataChannelResponseDecryptionError = F),
      (l.getErrorFromDataChannelResponse = O),
      (l.getErrorFromCodedDataChannelResponse = B));
  },
  226,
);
