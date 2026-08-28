__d(
  "AdsInterfacesLoggerUtils",
  [
    "AdsBrowserExtensionErrorUtils",
    "AdsFluxContextInstrumentation",
    "AdsInterfacesLogger",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "FBLogger",
    "PreloadingEvent.flow",
    "getErrorSafe",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { defaultJSErrorHandler: function () {} };
    r("requireWeak")("ErrorLogging", function (e) {
      s = e;
    });
    function u(e, t) {
      var n,
        a =
          (n = r("ErrorNormalizeUtils").ifNormalizedError(e)) != null
            ? n
            : r("ErrorNormalizeUtils").normalizeError(r("getErrorSafe")(e));
      try {
        JSON.stringify(t);
      } catch (e) {
        t = null;
      }
      var i = a.messageWithParams,
        l = babelHelpers.extends(
          {
            stack_trace: a.stack,
            action_type_on_error: o(
              "AdsFluxContextInstrumentation",
            ).getLastAction(),
          },
          t,
          {
            normalized_error: a,
            error_name: a.name,
            message: a.message,
            meta_message: i ? i[0] : "-",
            error_line: a.line,
            error_script: a.script,
          },
        );
      if (a.message.includes("Minified React error") && a.cause != null)
        try {
          var s,
            u =
              (s = r("ErrorNormalizeUtils").ifNormalizedError(a.cause)) != null
                ? s
                : r("ErrorNormalizeUtils").normalizeError(
                    r("getErrorSafe")(a.cause),
                  );
        } catch (e) {
          var c = r("getErrorSafe")(e);
          r("FBLogger")("ads_speed", "react_minification_cause_logging")
            .catching(c)
            .mustfix("Failed to log react minification cause");
        }
      return l;
    }
    function c(e, t, n) {
      var a = u(e, n),
        i = r("getErrorSafe")(e);
      o("AdsBrowserExtensionErrorUtils").isBrowserExtensionError(i.stack) ||
        o("AdsBrowserExtensionErrorUtils").isBrowserExtensionError(
          a.error_script,
        ) ||
        (i.message != null &&
          i.message.includes("ResizeObserver loop limit exceeded")) ||
        r("AdsInterfacesLogger").log(
          { eventName: t, eventCategory: "errors", data: a },
          r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        );
    }
    function d(e, t) {
      r("AdsInterfacesLogger").log(
        {
          eventName: o("PreloadingEvent.flow").PreloadingEventName.getName(t),
          eventCategory: "preloading",
          data: e,
        },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function m(e, t) {
      c(e, "ADS_INTERFACES_ERROR_EXCEPTION", t);
    }
    function p(e, t) {
      c(e, "ADS_INTERFACES_CRITICAL_EXCEPTION", t);
    }
    function _(e, t) {
      c(e, "ADS_INTERFACES_ERROR_FATAL", t);
    }
    function f(e, t) {
      c(e, "ADS_INTERFACES_USER_ERROR", t);
    }
    ((e || (e = r("ErrorPubSub"))).addListener(function (e, t) {
      t === "ONERROR" &&
        !e.message.toLowerCase().startsWith("script error") &&
        _(e);
    }),
      (l.constructLogDataForError = u),
      (l.logPreloading = d),
      (l.logException = m),
      (l.logCriticalException = p),
      (l.logFatal = _),
      (l.logUserError = f));
  },
  98,
);
