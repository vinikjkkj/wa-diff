__d(
  "WAWebNewsletterGetQuestionResponsesQuery",
  [
    "Promise",
    "WASmaxNewslettersGetNewsletterResponsesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "WAWebQuestions.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
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
    function u(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return c(e);
      });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.cursor,
            a = t.filter,
            i = t.newsletterJid,
            l = t.questionResponsesCount,
            u = t.questionResponsesServerId,
            c = t.searchQuery,
            d = s(a),
            m = yield o(
              "WASmaxNewslettersGetNewsletterResponsesRPC",
            ).sendGetNewsletterResponsesRPC({
              iqTo: i,
              questionResponsesServerId: u,
              questionResponsesCount: l,
              beforeQuestionResponseMixinMixinArgs:
                r != null ? { questionResponsesBefore: r } : void 0,
              filterQuestionResponseMixinMixinArgs: d,
              searchQuestionResponseMixinMixinArgs:
                c != null && c.length >= 3 ? { searchText: c } : void 0,
            });
          switch (m.name) {
            case "GetNewsletterResponsesResponseSuccess":
              return m.value;
            case "GetNewsletterResponsesResponseServerError": {
              var p = m.value.errorIQErrorInternalServerErrorMixin,
                _ = p.code,
                f = p.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(_),
                f,
              );
            }
            case "GetNewsletterResponsesResponseClientError": {
              var g = m.value.getNewsletterResponsesClientErrors;
              switch (g.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var h = g.value.errorIQErrorItemNotFoundMixin,
                    y = h.code,
                    C = h.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(y),
                      C,
                    ),
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var b = g.value.errorIQErrorRateOverlimitMixin,
                    v = b.code,
                    S = b.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(v),
                      S,
                    ),
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var R = g.value.errorIQErrorBadRequestMixin,
                    L = R.code,
                    E = R.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(L),
                      E,
                    ),
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var k = g.value.errorIQErrorLockedMixin,
                    I = k.code,
                    T = k.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(I),
                      T,
                    ),
                  );
                }
                case "NotAllowedIQErrorResponse": {
                  var D = g.value.errorIQErrorNotAllowedMixin,
                    x = D.code,
                    $ = D.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(x),
                      $,
                    ),
                  );
                }
                case "UnauthorizedIQErrorResponse": {
                  var P = g.value.errorIQErrorNotAuthorizedMixin,
                    N = P.code,
                    M = P.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(N),
                      M,
                    ),
                  );
                }
              }
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.getQuestionResponsesQuery = u;
  },
  98,
);
