__d(
  "WAWebOptOutBizAction",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGetNumbersForBrandIdsJob",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebOptOutBizToast",
    "WAWebOptOutListCollection",
    "WAWebOptOutUserJob",
    "WAWebStateUtils",
    "WAWebUpdateOptOutListDbJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r) {
      return d(o("WAWebStateUtils").unproxy(e), !0, t, n, r);
    }
    function c(e, t, n, r) {
      return d(o("WAWebStateUtils").unproxy(e), !1, t, n, r);
    }
    function d(t, r, a, i, l) {
      var u = t.isContactOptedOut,
        c = r && u,
        d = !r && !u;
      if (c || d) return (s || (s = n("Promise"))).resolve();
      var p = t.id,
        _,
        f = p;
      if (
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMOptOutAlwaysUseLidInGraphQLEnabled()
      ) {
        var h = o("WAWebWidToJid").widToUserJid(f);
        _ = h;
        try {
          var y = o("WAWebJidToWid").userJidToUserWid(h),
            C = o("WAWebLidMigrationUtils").toUserLidOrThrow(y);
          _ = o("WAWebWidToJid").widToUserJid(C);
        } catch (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[OptOutBizAction] Failed to convert JID to LID",
              ])),
          );
        }
      } else {
        var b = r && p.isLid(),
          v = t.phoneNumber;
        ((f = b && v != null ? v : p),
          (_ = o("WAWebWidToJid").widToUserJid(f)));
      }
      var S = r
          ? o("WAWebOptOutUserJob").optOutUser(_, a, i)
          : o("WAWebOptOutUserJob").optInUser(_, a, i),
        R = S.then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e && e.errorCode != null)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    e.errorCode,
                    e.errorText,
                  );
                if (
                  (yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(
                    e.listDhash,
                  ),
                  e.listMatched === "true")
                ) {
                  if (
                    e.listItemBizOptOutResponseMixin.bizOptOutIds.name ===
                    "BizOptOutJid"
                  ) {
                    var t =
                        e.listItemBizOptOutResponseMixin.bizOptOutIds.value
                          .bizOptOutJid,
                      r = e.listItemBizOptOutResponseMixin.action;
                    yield g(
                      o("WAWebJidToWid").userJidToUserWid(t),
                      r === "block",
                    );
                  } else if (
                    e.listItemBizOptOutResponseMixin.bizOptOutIds.name ===
                    "BizOptOutBrandID"
                  ) {
                    var a =
                        e.listItemBizOptOutResponseMixin.bizOptOutIds.value
                          .bizOptOutBrandId,
                      i = e.listItemBizOptOutResponseMixin.action;
                    yield m([a], i === "block");
                  }
                } else {
                  (yield o("WAWebUpdateOptOutListDbJob").clearOptOutListDbJob(),
                    o("WAWebOptOutListCollection").OptOutListCollection.forEach(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            o(
                              "WAWebOptOutListCollection",
                            ).OptOutListCollection.remove(e);
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ));
                  var l = [];
                  (e.listItem &&
                    Array.isArray(e.listItem) &&
                    e.listItem.forEach(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (e.bizOptOutIds.name === "BizOptOutJid") {
                              var t = e.bizOptOutIds.value.bizOptOutJid,
                                n = e.action;
                              n === "block" &&
                                (yield g(
                                  o("WAWebJidToWid").userJidToUserWid(t),
                                  !0,
                                ));
                            } else if (
                              e.bizOptOutIds.name === "BizOptOutBrandID"
                            ) {
                              var r = e.action;
                              r === "block" &&
                                l.push(e.bizOptOutIds.value.bizOptOutBrandId);
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                    yield m(l, !0));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
      return (o("WAWebOptOutBizToast").optOutBizToast(t, R, r, a, i, l), R);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            var r = yield _(e);
            yield (s || (s = n("Promise"))).allSettled(
              r.map(function (e) {
                return g(e, t);
              }),
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebGetNumbersForBrandIdsJob",
          ).getNumbersForBrandIdsJob(e);
          return t.type !== "success"
            ? []
            : o(
                  "WAWebMarketingMessagesUserFeedbackGatingUtils",
                ).isMMOptOutAlwaysUseLidInGraphQLEnabled()
              ? r("filterNulls")(
                  t.value.flatMap(function (e) {
                    return e.lids;
                  }),
                )
              : t.value
                  .flatMap(function (e) {
                    return e.phoneNumbers;
                  })
                  .map(function (e) {
                    return o("WAWebWidFactory").createUserWidOrThrow(e);
                  });
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
          yield o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "updateOptOutListModelInCollection",
            { targetWid: e, isBlocked: t },
          );
        })),
        h.apply(this, arguments)
      );
    }
    ((l.optOutContact = u), (l.optInContact = c));
  },
  98,
);
