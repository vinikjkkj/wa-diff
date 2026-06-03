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
    "WAWebHandleNewsletterStatus",
    "WAWebHandleVoipCallReceipt",
    "WAWebNewsletterGatingUtils",
    "WAWebPostUnknownStanzaMetric",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) return e;
          var t = yield e;
          return (
            o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.updateProcessedNotificationCount(),
            t
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(t) {
      var n = o("WAWebCommsHandleMessagingStanza").handleMessagingStanza(t);
      if (n != null) return n;
      var a = t.attrs;
      switch (t.tag) {
        case "notification": {
          switch (a.type) {
            case "w:gp2":
              return e(
                o("WAWebHandleGroupNotification").handleGroupNotification(t),
              ).catch(function (e) {
                return c(t, r("getErrorSafe")(e));
              });
            case "encrypt": {
              var i = t.content;
              if (!Array.isArray(i) || !i.length) break;
              var l = i[0].tag;
              switch (l) {
                case "identity":
                  return e(
                    o("WAWebHandleIdentityChange").handleE2eIdentityChange(t),
                  ).catch(function (e) {
                    return c(t, r("getErrorSafe")(e));
                  });
              }
              break;
            }
          }
          break;
        }
        case "message": {
          var s = t.attrs.from;
          if (r("WAWebWid").isNewsletter(s == null ? void 0 : s.toString()))
            return r("WAWebHandleNewsletterMsg")(t).catch(function (e) {
              return o(
                "WAWebCommsHandleStanzaUtils",
              ).handleMessageParsingFailure(t, r("getErrorSafe")(e));
            });
          break;
        }
        case "status": {
          var u = t.attrs.from;
          if (
            r("WAWebWid").isNewsletter(u == null ? void 0 : u.toString()) &&
            o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
          )
            return r("WAWebHandleNewsletterStatus")(t).catch(function (e) {
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
    function c(e, t) {
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
    l.handleWorkerCompatibleStanza = u;
  },
  98,
);
