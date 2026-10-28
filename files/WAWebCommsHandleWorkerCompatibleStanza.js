__d(
  "WAWebCommsHandleWorkerCompatibleStanza",
  [
    "WAParsableWapNode",
    "WAWebCommsHandleMessagingStanza",
    "WAWebCommsHandleStanzaUtils",
    "WAWebCreateNackFromStanza",
    "WAWebHandleGroupNotification",
    "WAWebHandleIdentityChange",
    "WAWebHandleNewsletterMsg",
    "WAWebHandleVoipCallReceipt",
    "WAWebNewsletterGatingUtils",
    "WAWebPostUnknownStanzaMetric",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("WAWebHandleNewsletterStatus").__setRef(
      "WAWebCommsHandleWorkerCompatibleStanza",
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) return e;
          var t = yield e;
          return (
            o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.updateProcessedNotificationCount(),
            t
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      var n = o("WAWebCommsHandleMessagingStanza").handleMessagingStanza(t);
      if (n != null) return n;
      var a = t.attrs;
      switch (t.tag) {
        case "notification": {
          switch (a.type) {
            case "w:gp2":
              return s(
                o("WAWebHandleGroupNotification").handleGroupNotification(t),
              ).catch(function (e) {
                return d(t, r("getErrorSafe")(e));
              });
            case "encrypt": {
              var i = t.content;
              if (!Array.isArray(i) || !i.length) break;
              var l = i[0].tag;
              switch (l) {
                case "identity":
                  return s(
                    o("WAWebHandleIdentityChange").handleE2eIdentityChange(t),
                  ).catch(function (e) {
                    return d(t, r("getErrorSafe")(e));
                  });
              }
              break;
            }
          }
          break;
        }
        case "message": {
          var u = t.attrs.from;
          if (r("WAWebWid").isNewsletter(u == null ? void 0 : u.toString()))
            return r("WAWebHandleNewsletterMsg")(t).catch(function (e) {
              return o(
                "WAWebCommsHandleStanzaUtils",
              ).handleMessageParsingFailure(t, r("getErrorSafe")(e));
            });
          break;
        }
        case "status": {
          var c = t.attrs.from;
          if (
            r("WAWebWid").isNewsletter(c == null ? void 0 : c.toString()) &&
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          )
            return e
              .load()
              .then(function (e) {
                return e(t);
              })
              .catch(function (e) {
                return o(
                  "WAWebCommsHandleStanzaUtils",
                ).handleMessageParsingFailure(t, r("getErrorSafe")(e));
              });
          break;
        }
        case "receipt":
          try {
            if (o("WAWebCommsHandleStanzaUtils").isCallReceipt(t))
              return o("WAWebHandleVoipCallReceipt").handleCallReceipt(t);
          } catch (e) {
            return e instanceof o("WAParsableWapNode").XmppParsingFailure
              ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
                o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                ))
              : o("WAWebCreateNackFromStanza").createNackFromStanza(
                  t,
                  o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
                );
          }
      }
    }
    function d(e, t) {
      return t instanceof o("WAParsableWapNode").XmppParsingFailure
        ? (o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e),
          o("WAWebCreateNackFromStanza").createNackFromStanza(
            e,
            o("WAWebCreateNackFromStanza").NackReason.ParsingError,
          ))
        : o("WAWebCreateNackFromStanza").createNackFromStanza(
            e,
            o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
          );
    }
    l.handleWorkerCompatibleStanza = c;
  },
  98,
);
