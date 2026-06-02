__d(
  "WAWebNewsletterGetMessagesQueryJob",
  [
    "WALogger",
    "WASmaxNewslettersGetNewsletterMessagesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterQueryUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if ((e == null ? void 0 : e.before) != null)
        return { beforeMixin: { messagesBefore: e.before } };
      if ((e == null ? void 0 : e.after) != null)
        return { afterMixin: { messagesAfter: e.after } };
    }
    function u(e, t, n) {
      var r = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(
        e,
      );
      return d(r, t, n);
    }
    function c(e) {
      var t = e.cursor,
        n = e.inviteCode,
        r = e.messagesCount,
        a = e.qpl,
        i = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(n);
      return d(i, r, t, a);
    }
    async function d(t, n, r, a) {
      var i = s(r);
      (n > o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer() &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[queryNewsletterMessages] ",
                " messages requested",
              ])),
            n,
          )
          .tags("newsletter")
          .sendLogs("newsletter-server-msg-count-exceeded"),
        a == null || a.markFetchStart());
      var l = await o(
        "WASmaxNewslettersGetNewsletterMessagesRPC",
      ).sendGetNewsletterMessagesRPC({
        queryNewsletterParamsMixinArgs: { queryNewsletterParamsArgs: t },
        newsletterMessageRequestPayloadMixinArgs: {
          messagesCount: Math.min(
            n,
            o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
          ),
          messageDirectionsArgs: i,
        },
      });
      switch ((a == null || a.markFetchEnd(), l.name)) {
        case "GetNewsletterMessagesResponseSuccess": {
          var u = l.value.messagesNewsletterMessageResponsePayloadMixin,
            c = u.message,
            d = u.t;
          return {
            messages: c,
            end: c.length < n,
            timestamp: d != null ? d : o("WATimeUtils").unixTime(),
          };
        }
        case "GetNewsletterMessagesResponseClientError": {
          var m = l.value.getNewsletterMessagesClientErrors;
          switch (m.name) {
            case "ItemNotFoundIQErrorResponse": {
              var p = m.value.errorIQErrorItemNotFoundMixin,
                _ = p.code,
                f = p.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(_, f);
            }
            case "RateLimitedIQErrorResponse": {
              var g = m.value.errorIQErrorRateOverlimitMixin,
                h = g.code,
                y = g.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(h, y);
            }
            case "BadRequestIQErrorResponse": {
              var C = m.value.errorIQErrorBadRequestMixin,
                b = C.code,
                v = C.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(b, v);
            }
            case "SuspendedIQErrorResponse": {
              var S = m.value.errorIQErrorLockedMixin,
                R = S.code,
                L = S.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(R, L);
            }
            case "UnavailableForLegalReasonsResponse": {
              var E =
                  m.value.errorIQErrorUnavailableForLegalReasonsGenericMixin,
                k = E.code,
                I = E.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(k, I);
            }
            case "NotAllowedIQErrorResponse": {
              var T = m.value.errorIQErrorNotAllowedMixin,
                D = T.code,
                x = T.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(D, x);
            }
          }
          break;
        }
        case "GetNewsletterMessagesResponseServerError": {
          var $ = l.value.errorIQErrorInternalServerErrorMixin,
            P = $.code,
            N = $.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(P), N),
          );
        }
      }
    }
    ((l.queryNewsletterMessagesByJid = u),
      (l.queryNewsletterMessagesByInviteCode = c));
  },
  98,
);
