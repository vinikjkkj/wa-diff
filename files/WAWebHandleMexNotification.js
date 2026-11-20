__d(
  "WAWebHandleMexNotification",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebMexLidChangeNotificationHandler",
    "WAWebMexNotificationPluginHandlers",
    "WAWebMexRelayEnvironment",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates",
      ]),
      m = "mexNotificationParser",
      p = new (r("WADeprecatedWapParser"))(m, function (e) {
        (e.assertTag("notification"), e.assertAttr("type", "mex"));
        var t = e.child("update"),
          n = e.attrString("id"),
          r = e.attrWapJid("from"),
          a = e.maybeAttrString("offline"),
          i = t.attrString("op_name"),
          l = t.contentString(),
          s;
        try {
          s = JSON.parse(l);
        } catch (e) {
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            m,
            "JSON parsing error: " + String(e),
          );
        }
        return {
          stanzaId: n,
          from: r,
          offline: a,
          OperationName: i,
          mexResponse: s,
        };
      });
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = p.parseOrThrow(t);
          try {
            var a = yield g(n);
            return a;
          } catch (t) {
            if (t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
            if (t instanceof h)
              if (d.has(t.operationName))
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex] handleMexNotification: ",
                        " unsupported, nack",
                      ])),
                    t.operationName,
                  )
                  .tags("mex", "notification");
              else
                throw (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[mex] handleMexNotification: ",
                          " unknown op, nack",
                        ])),
                      t.operationName,
                    )
                    .tags("mex", "notification")
                    .sendLogs("mex-notification-error-" + t.operationName, {
                      sampling: 0.01,
                    }),
                  t
                );
            else
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex] handleMexNotification: ",
                      " handling failed, nack",
                    ])),
                  n.OperationName,
                )
                .catching(r("getErrorSafe")(t))
                .tags("mex", "notification")
                .sendLogs(
                  "mex-notification-handling-failed-" + n.OperationName,
                  { sampling: 0.1 },
                );
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              m,
              "unexpected error: " + String(t),
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = o(
        "WAWebMexNotificationPluginHandlers",
      ).getMexNotificationPluginHandler(e.OperationName);
      return t != null
        ? y(e, t)
        : e.OperationName === "MexNotificationEvent"
          ? y(e, R)
          : e.OperationName === "NotificationGroupEncryptionKeysPropertyUpdate"
            ? y(e, v)
            : e.OperationName === "LidChangeNotification"
              ? y(
                  e,
                  o("WAWebMexLidChangeNotificationHandler")
                    .mexHandleLidChangeNotification,
                )
              : (c || (c = n("Promise"))).reject(new h(e.OperationName));
    }
    var h = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, t.name + ": " + n) || this),
          (r.name = "MissingMEXNotificationHandler"),
          (r.operationName = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toString = function () {
          return t.name + ": " + this.operationName;
        }),
        t
      );
    })(babelHelpers.wrapNativeSuper(Error));
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.mexResponse,
            r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(
              n.errors,
            );
          if (r != null)
            throw new (o("WAParsableWapNode").XmppParsingFailure)(
              m,
              "errors list in parsed json has fatal error",
            );
          if (n.data != null)
            return (yield t(e, n.data), b(e.stanzaId, e.from));
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            m,
            "null data in parsed json",
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t) {},
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t) {},
        )),
        L.apply(this, arguments)
      );
    }
    ((l.handleMexNotification = _), (l.MissingMEXNotificationHandler = h));
  },
  98,
);
