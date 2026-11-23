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
      return d({ cursor: n, messagesCount: t, queryArgs: r });
    }
    function c(e) {
      var t = e.cursor,
        n = e.inviteCode,
        r = e.messagesCount,
        a = e.qpl,
        i = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(n);
      return d({ cursor: t, messagesCount: r, qpl: a, queryArgs: i });
    }
    async function d(t) {
      var n = t.cursor,
        r = t.messagesCount,
        a = t.qpl,
        i = t.queryArgs,
        l = s(n);
      (r > o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer() &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[queryNewsletterMessages] ",
                " messages requested",
              ])),
            r,
          )
          .tags("newsletter")
          .sendLogs("newsletter-server-msg-count-exceeded"),
        a == null || a.markFetchStart());
      var u = await o(
        "WASmaxNewslettersGetNewsletterMessagesRPC",
      ).sendGetNewsletterMessagesRPC({
        queryNewsletterParamsMixinArgs: { queryNewsletterParamsArgs: i },
        newsletterMessageRequestPayloadMixinArgs: {
          messagesCount: Math.min(
            r,
            o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
          ),
          messageDirectionsArgs: l,
        },
      });
      switch ((a == null || a.markFetchEnd(), u.name)) {
        case "GetNewsletterMessagesResponseSuccess": {
          var c = u.value.messagesNewsletterMessageResponsePayloadMixin,
            d = c.message,
            m = c.t;
          return {
            messages: d,
            end: d.length < r,
            timestamp: m != null ? m : o("WATimeUtils").unixTime(),
          };
        }
        case "GetNewsletterMessagesResponseClientError": {
          var p = u.value.getNewsletterMessagesClientErrors;
          switch (p.name) {
            case "ItemNotFoundIQErrorResponse": {
              var _ = p.value.errorIQErrorItemNotFoundMixin,
                f = _.code,
                g = _.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(f, g);
            }
            case "RateLimitedIQErrorResponse": {
              var h = p.value.errorIQErrorRateOverlimitMixin,
                y = h.code,
                C = h.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(y, C);
            }
            case "BadRequestIQErrorResponse": {
              var b = p.value.errorIQErrorBadRequestMixin,
                v = b.code,
                S = b.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(v, S);
            }
            case "SuspendedIQErrorResponse": {
              var R = p.value.errorIQErrorLockedMixin,
                L = R.code,
                E = R.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(L, E);
            }
            case "UnavailableForLegalReasonsResponse": {
              var k =
                  p.value.errorIQErrorUnavailableForLegalReasonsGenericMixin,
                I = k.code,
                T = k.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(I, T);
            }
            case "NotAllowedIQErrorResponse": {
              var D = p.value.errorIQErrorNotAllowedMixin,
                x = D.code,
                $ = D.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(x, $);
            }
          }
          break;
        }
        case "GetNewsletterMessagesResponseServerError": {
          var P = u.value.errorIQErrorInternalServerErrorMixin,
            N = P.code,
            M = P.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(N), M),
          );
        }
      }
    }
    ((l.queryNewsletterMessagesByJid = u),
      (l.queryNewsletterMessagesByInviteCode = c));
  },
  98,
);
