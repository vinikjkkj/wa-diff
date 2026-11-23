__d(
  "WAFlowsStateErrorHandling",
  [
    "invariant",
    "WAFlowsActionHandlerTypes",
    "WAFlowsDataChannelRequest",
    "WAFlowsDomainUtils",
    "WAFlowsError",
    "WAFlowsLocalization",
    "WAFlowsMeta",
    "WAFlowsNativeQPLLogger",
    "WAFlowsNativeWAMLogger",
    "WAFlowsPublicKey",
    "WAFlowsSnackbarUtils",
    "WAFlowsWELJActionCreators",
    "WAFlowsWebNativeBridgeClientABPropsContext.react",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var r = e.getErrorMessage(!0).toString();
      switch (e.getType()) {
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsComponentHardValidationError:
          return {
            flowErrorType:
              o("WAFlowsError").WAFlowsLoggerErrorTypes
                .COMPONENT_HARD_VALIDATOR_ERROR,
            flowErrorMessage: "",
            mediaMimeType: t,
            mediaSizeBytes: n,
          };
        case o("WAFlowsError").WAFlowsErrorTypes.WAFlowsInvalidScreenError:
          return {
            flowErrorType:
              o("WAFlowsError").WAFlowsLoggerErrorTypes
                .INVALID_SCREEN_TRANSITION_ERROR,
            flowErrorMessage: r,
            mediaMimeType: t,
            mediaSizeBytes: n,
          };
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsRoutingModelValidationError:
          return {
            flowErrorType:
              o("WAFlowsError").WAFlowsLoggerErrorTypes
                .INVALID_SCREEN_TRANSITION_ERROR,
            flowErrorMessage: r,
            mediaMimeType: t,
            mediaSizeBytes: n,
          };
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsDataModelValidationError:
          return {
            flowErrorType:
              o("WAFlowsError").WAFlowsLoggerErrorTypes
                .THIRD_PARTY_SCREEN_DATA_INVALID,
            flowErrorMessage: r,
            mediaMimeType: t,
            mediaSizeBytes: n,
          };
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsInvalidDecryptedDataFormatError:
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsInvalidDataChannelResponseError:
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsDataChannelResponseDecryptionError:
          return {
            flowErrorType:
              o("WAFlowsError").WAFlowsLoggerErrorTypes
                .BUSINESS_ENDPOINT_RESPONSE_INVALID_FORMAT,
            flowErrorMessage: "",
            mediaMimeType: t,
            mediaSizeBytes: n,
          };
        default:
          return null;
      }
    }
    function u(e) {
      if (e instanceof o("WAFlowsError").WAFlowsDataChannelError)
        switch (e.getWAFlowErrorCode()) {
          case o("WAFlowsError").WAFlowsErrorCodes
            .BUSINESS_ENPOINT_TIMEOUT_ERROR:
          case o("WAFlowsError").WAFlowsErrorCodes
            .BUSINESS_ENDPOINT_RESPONSE_ERROR:
            return !0;
        }
      return !1;
    }
    function c(e, t, n, r, a, i) {
      var l = null;
      if (
        (n instanceof o("WAFlowsError").WAFlowsError
          ? (l = n.getErrorMessage(r.isDraft()))
          : (l = o("WAFlowsDomainUtils").isOndemandFlowsUrl()
              ? n.message
              : o("WAFlowsLocalization").getFallbackErrorMessage()),
        (r.isDraft() || i.platform === "web_tooling") &&
          t.internal.screenHistory.length > 0)
      ) {
        (e({
          name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
          payload: { isLoading: !1 },
        }),
          e({
            name: o("WAFlowsActionHandlerTypes").WELJActionType
              .SHOW_ERROR_OVERLAY,
            payload: { error: n },
          }));
        return;
      }
      if (a) {
        (e({
          name: o("WAFlowsActionHandlerTypes").WELJActionType.WELJ_FLOW_LOADING,
          payload: { isLoading: !1 },
        }),
          o("WAFlowsSnackbarUtils").showSnackbar({ text: l }, i.invoke));
        return;
      }
      if (
        (e(
          o("WAFlowsWELJActionCreators").createConfigNavbarAction({
            backButtonAction: o("WAFlowsActionHandlerTypes")
              .NavBarBackButtonAction.CLOSE_FLOW,
          }),
        ),
        n instanceof o("WAFlowsError").WAFlowsDataChannelError)
      ) {
        var s;
        e(
          o("WAFlowsWELJActionCreators").createShowScreenErrorAction(
            l,
            (s = n.retryDataExchangeAction) != null ? s : void 0,
            n,
          ),
        );
      } else
        e(
          o("WAFlowsWELJActionCreators").createShowScreenErrorAction(
            l,
            void 0,
            n,
          ),
        );
    }
    function d(t, n, a, i) {
      var l = r("WAFlowsNativeWAMLogger")(n),
        s = l.logWAMFlowError,
        u = r("WAFlowsNativeQPLLogger")(n),
        c = u.qplInitPhoenixScreenNavigationEnd,
        d = u.qplScreenNavigationEnd,
        m = "",
        p = "";
      if (t instanceof o("WAFlowsError").WAFlows3pPropagatableError) {
        var _, f, g, h;
        ((m =
          (_ =
            (f = i.nativeComponentInDataExchMeta.get(t.screen)) == null
              ? void 0
              : f.get(r("WAFlowsMeta").MEDIA_MIME_TYPE_PROP)) != null
            ? _
            : ""),
          (p =
            (g =
              (h = i.nativeComponentInDataExchMeta.get(t.screen)) == null
                ? void 0
                : h.get(r("WAFlowsMeta").MEDIA_SIZE_BYTES_PROP)) != null
              ? g
              : ""));
      }
      var y = {
        flowErrorType: o("WAFlowsError").WAFlowsLoggerErrorTypes.UNKNOWN_ERROR,
        flowErrorMessage: t.message,
        mediaMimeType: m,
        mediaSizeBytes: p,
      };
      if (t instanceof o("WAFlowsError").WAFlowsDataChannelError) {
        var C = null,
          b = t.getWAFlowErrorCode();
        if (b != null) {
          var v;
          ((C =
            (v = o("WAFlowsError").getErrorFromCodedDataChannelResponse(b)) !=
            null
              ? v
              : o("WAFlowsError").WAFlowsLoggerErrorTypes.UNKNOWN_ERROR),
            (y = {
              flowErrorType: C,
              flowErrorMessage: "",
              mediaMimeType: m,
              mediaSizeBytes: p,
            }));
        }
      }
      if (t instanceof o("WAFlowsError").WAFlowsError) {
        var S = e(t, m, p);
        S != null && (y = S);
      }
      (r("justknobx")._("1547") || (y.flowErrorMessage = ""),
        d(y),
        s(y.flowErrorType),
        a === !0 &&
          c({
            flowErrorMessage: y.flowErrorMessage,
            flowErrorType: y.flowErrorType,
          }));
    }
    async function m(e, t, n, a) {
      if (!e.isDataChannelLess()) {
        var i = o(
            "WAFlowsWebNativeBridgeClientABPropsContext.react",
          ).clientABPropsHandler(n.invoke),
          l = i.getABProps,
          u = await l(),
          c =
            (u == null
              ? void 0
              : u.extensions_propagate_errors_via_datachannel_enabled
                  .boolValue) === !0;
        if (c && t instanceof o("WAFlowsError").WAFlowsError) {
          var d,
            m,
            _,
            f = !1;
          if (t instanceof o("WAFlowsError").WAFlowsDataChannelError)
            switch (t.getWAFlowErrorCode()) {
              case o("WAFlowsError").WAFlowsErrorCodes.DECRYPTION_FAILED_ERROR:
                f = !0;
                break;
            }
          else
            switch (t.getType()) {
              case o("WAFlowsError").WAFlowsErrorTypes
                .WAFlowsDataModelValidationError:
              case o("WAFlowsError").WAFlowsErrorTypes
                .WAFlowsRoutingModelValidationError:
              case o("WAFlowsError").WAFlowsErrorTypes
                .WAFlowsComponentHardValidationError:
                f = !0;
                break;
              default:
                break;
            }
          if (!f) return;
          var g =
            (a == null ? void 0 : a.environment.public_key) ||
            ((d = await r("WAFlowsPublicKey")(
              { force_refresh: !0 },
              n.invoke,
            )) == null
              ? void 0
              : d.public_key) ||
            "";
          g != null || s(0, 73970);
          var h =
            a == null || (m = a.environment) == null
              ? void 0
              : m.www_proxy_secret;
          r("WAFlowsDataChannelRequest")(
            {
              data: p(t, e, a),
              extensionId:
                (_ = a == null ? void 0 : a.environment.flow_id) != null
                  ? _
                  : "",
              publicKey: g,
              maxRetries: 0,
            },
            n,
            h,
          );
        }
      }
    }
    function p(e, t, n) {
      var r,
        a = "data_exchange",
        i = "";
      e instanceof o("WAFlowsError").WAFlows3pPropagatableError &&
        ((a = e.action), (i = e.screen));
      var l = t.getDataAPIVersion();
      return (
        l != null || s(0, 73003),
        n != null || s(0, 73753),
        {
          action: a,
          screen: i,
          version: l,
          flow_token:
            (r = n == null ? void 0 : n.environment.flow_token) != null
              ? r
              : "",
          data: { error: _(e), error_message: e.message },
        }
      );
    }
    function _(e) {
      switch (e.getType()) {
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsDataModelValidationError:
          return o("WAFlowsError").WAFlows3pPropagableErrorKeys
            .THIRD_PARTY_SCREEN_DATA_INVALID;
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsRoutingModelValidationError:
          return o("WAFlowsError").WAFlows3pPropagableErrorKeys
            .INVALID_SCREEN_TRANSITION_ERROR;
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsDataChannelResponseDecryptionError:
          return o("WAFlowsError").WAFlows3pPropagableErrorKeys
            .DECRYPTION_FAILED_ERROR;
        case o("WAFlowsError").WAFlowsErrorTypes
          .WAFlowsComponentHardValidationError:
          return o("WAFlowsError").WAFlows3pPropagableErrorKeys
            .COMPONENT_HARD_VALIDATOR_ERROR;
        default:
          return "";
      }
    }
    ((l.getPayloadForError = e),
      (l.showSnackBarError = u),
      (l.showErrorOnUI = c),
      (l.logErrorToServer = d),
      (l.propagateErrorTo3pDataChannel = m));
  },
  98,
);
