__d(
  "WAWebMsgAGMProcessing",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebDBMessageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50;
    function u(e) {
      var t = e.ctwaContext,
        n = e.from,
        r = e.msgKey,
        a = e.msgTimestamp,
        i = e.to;
      if (
        t.greetingMessageBody == null ||
        t.automatedGreetingMessageShown !== !0 ||
        t.sourceId == null
      )
        return null;
      var l =
          a != null
            ? o("WATimeUtils").castToUnixTime(parseInt(a, 10))
            : o("WATimeUtils").unixTimeMs(),
        s = {
          id: r,
          t: l,
          type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
          kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          from: n,
          to: i,
          ctwaContext: t,
          body: t.greetingMessageBody,
        };
      return s;
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.ctwaContext;
          try {
            if (a == null) return [t];
            var i = o("WAWebCtwaAGMUtils").extractAGMPayload(a),
              l = o("WAWebMsgGetters").getIsSentByMe(t);
            if (a.automatedGreetingMessageShown !== !0 || a.sourceId == null)
              return [t];
            if (r("isStringNullOrEmpty")(a.greetingMessageBody))
              return (
                o("WAWebCtwaLogger").logAGMOperation({
                  operationType:
                    o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                      .null_greeting_message,
                  fromBusiness: !l,
                  agmPayload: i,
                  businessWid: t.to,
                  adId: a.sourceId,
                }),
                [t]
              );
            if (
              a.sourceApp != null &&
              !Object.values(o("WAWebCtwaAGMUtils").AGM_SOURCE_APP).includes(
                a.sourceApp,
              )
            )
              return (
                o("WAWebCtwaLogger").logAGMOperation({
                  operationType:
                    o("WAWebCtwaLogger").AGM_OPERATION_TYPE.invalid_source_app,
                  fromBusiness: !l,
                  agmPayload: i,
                  businessWid: t.to,
                  adId: a.sourceId,
                }),
                [t]
              );
            (i == null ? void 0 : i.ctaType) != null &&
              !Object.values(o("WAWebCtwaAGMUtils").AGM_CTA_TYPE).includes(
                i == null ? void 0 : i.ctaType,
              ) &&
              o("WAWebCtwaLogger").logAGMOperation({
                operationType:
                  o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                    .agm_invalid_cta_payload,
                fromBusiness: !l,
                agmPayload: i,
                businessWid: t.to,
                adId: a.sourceId,
              });
            var s = t.from,
              u = t.id,
              c = t.t,
              d = t.to,
              p = t.viewMode,
              f = s,
              g = d,
              h = yield m(n.chat),
              y = _(a == null ? void 0 : a.sourceId, h);
            if (y)
              return (
                o("WAWebCtwaLogger").logAGMOperation({
                  operationType:
                    o("WAWebCtwaLogger").AGM_OPERATION_TYPE.duplicated,
                  fromBusiness: !l,
                  agmPayload: i,
                  businessWid: g,
                  adId: a.sourceId,
                }),
                [t]
              );
            var C = {
              id: new (r("WAWebMsgKey"))({
                remote: n.chat,
                fromMe: !u.fromMe,
                id: yield r("WAWebMsgKey").newId(),
              }),
              ctwaContext: a,
              body: a.greetingMessageBody,
              from: g,
              to: f,
              type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
              kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
              viewMode: p,
              t: c != null ? c : o("WATimeUtils").unixTimeMs(),
            };
            return (
              o("WAWebCtwaLogger").logAGMOperation({
                operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.injected,
                fromBusiness: !l,
                agmPayload: i,
                businessWid: g,
                adId: a.sourceId,
              }),
              r("isStringNullOrEmpty")(a.description) &&
                o("WAWebCtwaLogger").logAGMOperation({
                  operationType:
                    o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                      .bottomsheet_text_error,
                  fromBusiness: !l,
                  agmPayload: i,
                  businessWid: g,
                  adId: a.sourceId,
                }),
              r("isStringNullOrEmpty")(a.originalImageUrl) &&
                o("WAWebCtwaLogger").logAGMOperation({
                  operationType:
                    o("WAWebCtwaLogger").AGM_OPERATION_TYPE
                      .agm_bottom_sheet_image_error,
                  fromBusiness: !l,
                  agmPayload: i,
                  businessWid: g,
                  adId: a.sourceId,
                }),
              [C, t]
            );
          } catch (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "generateAGMMsgs: cannot create MsgKey: ",
                    "",
                  ])),
                n,
              ),
              [t]
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDBMessageUtils").beginningOfChat(e),
            n = o("WAWebDBMessageUtils").endOfChat(e),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(["internalId"], t, n, {
                lowerInclusive: !0,
                upperInclusive: !1,
                limit: s,
                reverse: !0,
              });
          return r.filter(function (e) {
            return (
              e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
            );
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return e == null
        ? !1
        : t.some(function (t) {
            var n = t.ctwaContext;
            return n != null && n.sourceId === e;
          });
    }
    ((l.genHistoryAutomatedGreetingMsg = u),
      (l.generateAutomatedGreetingMsgs = c));
  },
  98,
);
