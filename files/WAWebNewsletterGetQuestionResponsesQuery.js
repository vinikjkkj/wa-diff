__d(
  "WAWebNewsletterGetQuestionResponsesQuery",
  [
    "WASmaxNewslettersGetNewsletterResponsesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "WAWebQuestions.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (!e) return null;
      switch (e) {
        case o("WAWebQuestions.flow").ResponsesFilterType.CONTACTS:
          return {
            contactsOrRepliedFilterMixinMixinGroupArgs: {
              isContactsFilterMixin: !0,
            },
          };
        case o("WAWebQuestions.flow").ResponsesFilterType.REPLIED:
          return {
            contactsOrRepliedFilterMixinMixinGroupArgs: {
              isRepliedFilterMixin: !0,
            },
          };
        default:
          return null;
      }
    }
    function s(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return u(e);
      });
    }
    async function u(t) {
      var n = t.cursor,
        r = t.filter,
        a = t.newsletterJid,
        i = t.questionResponsesCount,
        l = t.questionResponsesServerId,
        s = t.searchQuery,
        u = e(r),
        c = await o(
          "WASmaxNewslettersGetNewsletterResponsesRPC",
        ).sendGetNewsletterResponsesRPC({
          iqTo: a,
          questionResponsesServerId: l,
          questionResponsesCount: i,
          beforeQuestionResponseMixinMixinArgs:
            n != null ? { questionResponsesBefore: n } : void 0,
          filterQuestionResponseMixinMixinArgs: u,
          searchQuestionResponseMixinMixinArgs:
            s != null && s.length >= 3 ? { searchText: s } : void 0,
        });
      switch (c.name) {
        case "GetNewsletterResponsesResponseSuccess":
          return c.value;
        case "GetNewsletterResponsesResponseServerError": {
          var d = c.value.errorIQErrorInternalServerErrorMixin,
            m = d.code,
            p = d.text;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(m),
            p,
          );
        }
        case "GetNewsletterResponsesResponseClientError": {
          var _ = c.value.getNewsletterResponsesClientErrors;
          switch (_.name) {
            case "ItemNotFoundIQErrorResponse": {
              var f = _.value.errorIQErrorItemNotFoundMixin,
                g = f.code,
                h = f.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(g),
                  h,
                ),
              );
            }
            case "RateLimitedIQErrorResponse": {
              var y = _.value.errorIQErrorRateOverlimitMixin,
                C = y.code,
                b = y.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(C),
                  b,
                ),
              );
            }
            case "BadRequestIQErrorResponse": {
              var v = _.value.errorIQErrorBadRequestMixin,
                S = v.code,
                R = v.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(S),
                  R,
                ),
              );
            }
            case "SuspendedIQErrorResponse": {
              var L = _.value.errorIQErrorLockedMixin,
                E = L.code,
                k = L.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(E),
                  k,
                ),
              );
            }
            case "NotAllowedIQErrorResponse": {
              var I = _.value.errorIQErrorNotAllowedMixin,
                T = I.code,
                D = I.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(T),
                  D,
                ),
              );
            }
            case "UnauthorizedIQErrorResponse": {
              var x = _.value.errorIQErrorNotAuthorizedMixin,
                $ = x.code,
                P = x.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number($),
                  P,
                ),
              );
            }
          }
        }
      }
    }
    l.getQuestionResponsesQuery = s;
  },
  98,
);
