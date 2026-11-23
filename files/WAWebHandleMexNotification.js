__d(
  "WAWebHandleMexNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebMexLidChangeNotificationHandler",
    "WAWebMexNotificationPluginHandlers",
    "WAWebMexRelayEnvironment",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates",
      ]),
      d = "mexNotificationParser",
      m = new (r("WADeprecatedWapParser"))(d, function (e) {
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
            d,
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
    async function p(t) {
      var n = m.parseOrThrow(t);
      try {
        var a = await _(n);
        return a;
      } catch (t) {
        if (t instanceof o("WAParsableWapNode").XmppParsingFailure) throw t;
        if (t instanceof f)
          if (c.has(t.operationName))
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
            .sendLogs("mex-notification-handling-failed-" + n.OperationName, {
              sampling: 0.1,
            });
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          d,
          "unexpected error: " + String(t),
        );
      }
    }
    function _(e) {
      var t = o(
        "WAWebMexNotificationPluginHandlers",
      ).getMexNotificationPluginHandler(e.OperationName);
      return t != null
        ? g(e, t)
        : e.OperationName === "MexNotificationEvent"
          ? g(e, C)
          : e.OperationName === "NotificationGroupEncryptionKeysPropertyUpdate"
            ? g(e, y)
            : e.OperationName === "LidChangeNotification"
              ? g(
                  e,
                  o("WAWebMexLidChangeNotificationHandler")
                    .mexHandleLidChangeNotification,
                )
              : Promise.reject(new f(e.OperationName));
    }
    var f = (function (e) {
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
    async function g(e, t) {
      var n = e.mexResponse,
        r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(n.errors);
      if (r != null)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          d,
          "errors list in parsed json has fatal error",
        );
      if (n.data != null) return (await t(e, n.data), h(e.stanzaId, e.from));
      throw new (o("WAParsableWapNode").XmppParsingFailure)(
        d,
        "null data in parsed json",
      );
    }
    function h(e, t) {
      return o("WAWap").wap("ack", {
        id: o("WAWap").CUSTOM_STRING(e),
        to: t,
        class: "notification",
        type: "mex",
      });
    }
    async function y(e, t) {}
    async function C(e, t) {}
    ((l.handleMexNotification = p), (l.MissingMEXNotificationHandler = f));
  },
  98,
);
