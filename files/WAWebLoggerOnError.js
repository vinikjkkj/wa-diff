__d(
  "WAWebLoggerOnError",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebCrashlog",
    "WAWebLoggerImpl",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebUim",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
        { partialMsg: "webpackJsonp is not defined" },
        { partialMsg: "WUPE is not defined" },
        { partialMsg: "spectrum is not a function" },
        { partialMsg: "evaluating 'document.getElementsByClassName('_3B9bf')" },
        { partialMsg: "onWebLoad is not defined" },
        {
          partialMsg:
            "SyntaxError: Identifier 'ZapSuiteSvgIcons' has already been declared",
        },
        {
          partialMsg:
            "SyntaxError: Identifier 'SuiteFunil' has already been declared",
        },
        {
          partialMsg:
            "SyntaxError: Identifier 'DBZapSuite' has already been declared",
        },
        { partialMsg: "Identifier 'newMakeStore' has already been declared" },
      ],
      c = [
        {
          partialUserAgent: "Chrome",
          partialMsg: "ResizeObserver loop limit exceeded",
        },
        {
          partialUserAgent: "",
          partialMsg: "Failed to execute 'put' on 'Cache'",
        },
      ],
      d = [
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
          partialMsg: "Cannot read property 'style' of null",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
          partialMsg: "Unexpected token :",
        },
        {
          partialUserAgent:
            "Firefox/52.0,,Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/52.0",
          partialMsg: "Cannot read property 'style' of undefined",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15",
          partialMsg: "is not an object",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
          partialMsg:
            "Cannot read property 'getElementsByTagName' of undefined",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
          partialMsg: "Can't find variable: dismissKeyboard",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
          partialMsg: "ReferenceError: None is not defined",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
          partialMsg: "Cannot read properties of null (reading 'style')",
        },
        {
          partialUserAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
          partialMsg:
            "Cannot read properties of undefined (reading 'getElementsByTagName')",
        },
        {
          partialUserAgent: "Chrome/60.0.3112.113",
          partialMsg: "Cannot read properties of null (reading 'removeChild')",
        },
        {
          partialUserAgent: "Chrome/60.0.3112.113",
          partialMsg:
            "Cannot read properties of undefined (reading 'isSettingDark')",
        },
        {
          partialUserAgent: "Chrome/60.0.3112.113",
          partialMsg:
            "TypeError: Cannot read properties of null (reading 'children')",
        },
      ],
      m = window.navigator.userAgent;
    function p(e) {
      var t = [
        o("WAWebMiscErrors").DbOnLogoutAbort,
        o("WAWebMiscErrors").DbClosedOnTakeover,
        o("WAWebMiscErrors").DbNotFoundOnTakeover,
      ];
      return !t.some(function (t) {
        return e instanceof t;
      });
    }
    function _(e) {
      var t = [].concat(c);
      return (
        r("gkx")("26258") && t.push.apply(t, d),
        t.some(function (t) {
          var n = t.partialMsg,
            r = t.partialUserAgent;
          return m.includes(r) && String(e).includes(n);
        })
      );
    }
    function f(e, t) {
      var n = u.some(function (t) {
        var n = t.partialMsg;
        return String(e).includes(n);
      });
      return (
        n ||
        (t instanceof Error &&
          t.stack != null &&
          t.stack.includes("evalmachine.<anonymous>"))
      );
    }
    function g(e) {
      return (
        e instanceof Error &&
        e.stack != null &&
        e.stack.includes("chrome-extension://")
      );
    }
    function h(t, n, a, i, l) {
      if (_(t))
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Ignored Error: ",
                "",
              ])),
            t || (l || "").toString(),
          ),
          !0
        );
      try {
        o("WAWebUim").UIM.pprint(!0);
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "UIM Print Failed!",
            ])),
        );
      }
      var u = n.split("?")[0],
        c;
      if (
        (u && typeof a == "number"
          ? (c = " (" + u + ":" + a + ":" + i + ")")
          : u
            ? (c = " (" + u + ")")
            : (c = ""),
        t === "Script error." && !l)
      )
        return (
          o("WAWebLoggerImpl").Logger.logUncaughtError(c + " " + t),
          o("WAWebCoreActionsODS").isPageLoadComplete() ||
            o("WAWebCoreActionsODS").logPageLoadErrorJsException(),
          u &&
            o("WAWebCrashlog").upload({
              reason: "script-error",
              hasTaggedMessage: !0,
              sendLogsType: o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION,
            }),
          !1
        );
      var d =
          l instanceof Error && l.stack ? l : "" + (t || "Given: " + String(l)),
        m = o("WAWebLoggerImpl").Logger.logUncaughtError(d);
      return (
        !p(l) ||
          f(t, l) ||
          g(l) ||
          (o("WAWebCoreActionsODS").isPageLoadComplete() ||
            o("WAWebCoreActionsODS").logPageLoadErrorJsException(),
          o("WAWebCrashlog")
            .upload({
              reason: m,
              hasTaggedMessage: !0,
              sendLogsType: o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION,
            })
            .catch(r("WAWebNoop"))),
        r("gkx")("26258")
      );
    }
    function y(e) {
      var t = e.promise,
        n = e.reason,
        r = o("WAWebLoggerImpl").Logger.logUncaughtError(n, t);
      p(n) &&
        (o("WAWebCoreActionsODS").isPageLoadComplete() ||
          o("WAWebCoreActionsODS").logPageLoadErrorUnhandledRejection(),
        o("WAWebCrashlog").upload({
          reason: r,
          hasTaggedMessage: !0,
          sendLogsType: o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE,
        }));
    }
    ((l.onErrorHandler = h), (l.onUnhandledPromiseRejection = y));
  },
  98,
);
