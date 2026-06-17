__d(
  "WAWebNewsletterGetMessagesQueryJob",
  [
    "Promise",
    "WALogger",
    "WASmaxNewslettersGetNewsletterMessagesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterQueryUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      if ((e == null ? void 0 : e.before) != null)
        return { beforeMixin: { messagesBefore: e.before } };
      if ((e == null ? void 0 : e.after) != null)
        return { afterMixin: { messagesAfter: e.after } };
    }
    function c(e, t, n) {
      var r = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(
        e,
      );
      return m({ cursor: n, messagesCount: t, queryArgs: r });
    }
    function d(e) {
      var t = e.cursor,
        n = e.inviteCode,
        r = e.messagesCount,
        a = e.qpl,
        i = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(n);
      return m({ cursor: t, messagesCount: r, qpl: a, queryArgs: i });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.cursor,
            a = t.messagesCount,
            i = t.qpl,
            l = t.queryArgs,
            c = u(r);
          (a > o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer() &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryNewsletterMessages] ",
                    " messages requested",
                  ])),
                a,
              )
              .tags("newsletter")
              .sendLogs("newsletter-server-msg-count-exceeded"),
            i == null || i.markFetchStart());
          var d = yield o(
            "WASmaxNewslettersGetNewsletterMessagesRPC",
          ).sendGetNewsletterMessagesRPC({
            queryNewsletterParamsMixinArgs: { queryNewsletterParamsArgs: l },
            newsletterMessageRequestPayloadMixinArgs: {
              messagesCount: Math.min(
                a,
                o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
              ),
              messageDirectionsArgs: c,
            },
          });
          switch ((i == null || i.markFetchEnd(), d.name)) {
            case "GetNewsletterMessagesResponseSuccess": {
              var m = d.value.messagesNewsletterMessageResponsePayloadMixin,
                p = m.message,
                _ = m.t;
              return {
                messages: p,
                end: p.length < a,
                timestamp: _ != null ? _ : o("WATimeUtils").unixTime(),
              };
            }
            case "GetNewsletterMessagesResponseClientError": {
              var f = d.value.getNewsletterMessagesClientErrors;
              switch (f.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var g = f.value.errorIQErrorItemNotFoundMixin,
                    h = g.code,
                    y = g.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    h,
                    y,
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var C = f.value.errorIQErrorRateOverlimitMixin,
                    b = C.code,
                    v = C.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    b,
                    v,
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var S = f.value.errorIQErrorBadRequestMixin,
                    R = S.code,
                    L = S.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    R,
                    L,
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var E = f.value.errorIQErrorLockedMixin,
                    k = E.code,
                    I = E.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    k,
                    I,
                  );
                }
                case "UnavailableForLegalReasonsResponse": {
                  var T =
                      f.value
                        .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                    D = T.code,
                    x = T.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    D,
                    x,
                  );
                }
                case "NotAllowedIQErrorResponse": {
                  var $ = f.value.errorIQErrorNotAllowedMixin,
                    P = $.code,
                    N = $.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    P,
                    N,
                  );
                }
              }
              break;
            }
            case "GetNewsletterMessagesResponseServerError": {
              var M = d.value.errorIQErrorInternalServerErrorMixin,
                w = M.code,
                A = M.text;
              return (s || (s = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(w),
                  A,
                ),
              );
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.queryNewsletterMessagesByJid = c),
      (l.queryNewsletterMessagesByInviteCode = d));
  },
  98,
);
