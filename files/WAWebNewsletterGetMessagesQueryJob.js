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
      return m(r, t, n);
    }
    function d(e) {
      var t = e.cursor,
        n = e.inviteCode,
        r = e.messagesCount,
        a = e.qpl,
        i = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(n);
      return m(i, r, t, a);
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = u(a);
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
              i == null || i.markFetchStart());
            var c = yield o(
              "WASmaxNewslettersGetNewsletterMessagesRPC",
            ).sendGetNewsletterMessagesRPC({
              queryNewsletterParamsMixinArgs: { queryNewsletterParamsArgs: t },
              newsletterMessageRequestPayloadMixinArgs: {
                messagesCount: Math.min(
                  r,
                  o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer(),
                ),
                messageDirectionsArgs: l,
              },
            });
            switch ((i == null || i.markFetchEnd(), c.name)) {
              case "GetNewsletterMessagesResponseSuccess": {
                var d = c.value.messagesNewsletterMessageResponsePayloadMixin,
                  m = d.message,
                  p = d.t;
                return {
                  messages: m,
                  end: m.length < r,
                  timestamp: p != null ? p : o("WATimeUtils").unixTime(),
                };
              }
              case "GetNewsletterMessagesResponseClientError": {
                var _ = c.value.getNewsletterMessagesClientErrors;
                switch (_.name) {
                  case "ItemNotFoundIQErrorResponse": {
                    var f = _.value.errorIQErrorItemNotFoundMixin,
                      g = f.code,
                      h = f.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      g,
                      h,
                    );
                  }
                  case "RateLimitedIQErrorResponse": {
                    var y = _.value.errorIQErrorRateOverlimitMixin,
                      C = y.code,
                      b = y.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      C,
                      b,
                    );
                  }
                  case "BadRequestIQErrorResponse": {
                    var v = _.value.errorIQErrorBadRequestMixin,
                      S = v.code,
                      R = v.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      S,
                      R,
                    );
                  }
                  case "SuspendedIQErrorResponse": {
                    var L = _.value.errorIQErrorLockedMixin,
                      E = L.code,
                      k = L.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      E,
                      k,
                    );
                  }
                  case "UnavailableForLegalReasonsResponse": {
                    var I =
                        _.value
                          .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                      T = I.code,
                      D = I.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      T,
                      D,
                    );
                  }
                  case "NotAllowedIQErrorResponse": {
                    var x = _.value.errorIQErrorNotAllowedMixin,
                      $ = x.code,
                      P = x.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      $,
                      P,
                    );
                  }
                }
                break;
              }
              case "GetNewsletterMessagesResponseServerError": {
                var N = c.value.errorIQErrorInternalServerErrorMixin,
                  M = N.code,
                  w = N.text;
                return (s || (s = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(M),
                    w,
                  ),
                );
              }
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.queryNewsletterMessagesByJid = c),
      (l.queryNewsletterMessagesByInviteCode = d));
  },
  98,
);
