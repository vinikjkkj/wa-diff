__d(
  "WAWebHandleBizThreadDataNotification",
  [
    "WALogger",
    "WASmaxBizThreadDataNotifyRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWebApplyServerLeadStage",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 0.01,
      p = new Set(["detected_outcome", "lead_stage"]);
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleBizThreadDataNotification: notification received",
              ])),
          );
          var n = t.content,
            a = Array.isArray(n)
              ? n.find(function (e) {
                  return String(e.tag) === "thread_data";
                })
              : null;
          if (a != null) {
            var i = o("WASmaxParseUtils").attrString(a, "notif_sub_type");
            if (i.success && !p.has(i.value))
              return o(
                "WASmaxNotificationFallbackGenericNotificationRPC",
              ).makeGenericNotificationResponseAck(t);
          }
          try {
            var l = o("WASmaxBizThreadDataNotifyRPC").receiveNotifyRPC(t),
              u = l.parsedRequest;
            (u.threadDataSubtypeMixin.notifSubType === "detected_outcome" &&
              u.threadDataOrigin === "generated" &&
              o("WAWebBackendApi").frontendFireAndForget(
                "emitDetectedOutcomeNotificationSignal",
                {
                  payloadJson: new TextDecoder("utf-8").decode(
                    u.threadDataPayloadElementValue,
                  ),
                  threadLid: u.threadDataThreadLid.toString(),
                },
              ),
              u.threadDataSubtypeMixin.notifSubType === "lead_stage" &&
                (yield g(
                  u.threadDataThreadLid.toString(),
                  new TextDecoder("utf-8").decode(
                    u.threadDataPayloadElementValue,
                  ),
                )));
          } catch (e) {
            if (e instanceof o("WASmaxParsingFailure").SmaxParsingFailure)
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleBizThreadDataNotification: parse failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("biz-thread-data-parse-failed", { sampling: m }),
                o(
                  "WASmaxNotificationFallbackGenericNotificationRPC",
                ).makeGenericNotificationResponseBadStanza(
                  {
                    ackError: o("WAWebCreateNackFromStanza").NackReason
                      .ParsingError,
                  },
                  t,
                )
              );
            throw e;
          }
          return o(
            "WASmaxNotificationFallbackGenericNotificationRPC",
          ).makeGenericNotificationResponseAck(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = y(t);
          if (n == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleBizThreadDataNotification: lead_stage payload has no lead_stage_id",
                ])),
            );
            return;
          }
          try {
            var a = yield o("WAWebApplyServerLeadStage").applyServerLeadStage(
              e,
              n,
            );
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "handleBizThreadDataNotification: lead_stage ",
                  "",
                ])),
              a,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleBizThreadDataNotification: applying lead_stage failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("biz-thread-data-lead-stage-apply-failed", {
                sampling: m,
              });
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      try {
        var t = JSON.parse(e);
        if (t != null && typeof t == "object") {
          var n = t.lead_stage_id;
          return typeof n == "string" ? n : null;
        }
      } catch (e) {
        return null;
      }
      return null;
    }
    l.handleBizThreadDataNotification = _;
  },
  98,
);
