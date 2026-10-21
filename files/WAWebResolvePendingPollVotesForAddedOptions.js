__d(
  "WAWebResolvePendingPollVotesForAddedOptions",
  [
    "Promise",
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebCastToPollCreationMsg",
    "WAWebMsgType",
    "WAWebPendingPollVoteResolution",
    "WAWebPollOptionHashUtils",
    "WAWebPollPendingOptionHashes",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.addedOptions,
            a = t.droppedOptions,
            i = t.parentMsg;
          if (!(n.length === 0 && a.length === 0))
            try {
              yield b(i, n, a);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to resolve votes parked on added options",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("poll-add-option-resolve-votes-failed");
            }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a,
              i = yield _(e);
            if (i == null) return;
            var l = yield g((a = i.pollOptions) != null ? a : [], t);
            yield c({
              parentMsg: i,
              addedOptions: yield (u || (u = n("Promise"))).all(l.map(y)),
              droppedOptions: [],
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls] failed to recheck parked votes against the poll",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("poll-add-option-recheck-parked-votes-failed");
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
          var t = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
            n = t.get(e.toString());
          return n != null &&
            n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION
            ? r("WAWebCastToPollCreationMsg")(n)
            : null;
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
          var r = yield (u || (u = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return o(
                      "WAWebPollPendingOptionHashes",
                    ).optionHashDependencyId(
                      yield o(
                        "WAWebPollOptionHashUtils",
                      ).getHashBufferForString(e.name),
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          return e.filter(function (e, n) {
            return t.has(r[n]);
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            e.addOptionMsgKey != null
              ? yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .get(e.addOptionMsgKey)
              : null;
          return { name: e.name, t: t == null ? void 0 : t.t };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = yield (u || (u = n("Promise"))).all([
              u.all(t.map(S)),
              u.all(r.map(S)),
            ]),
            l = i[0],
            s = i[1],
            c = new Set(
              s.map(function (e) {
                return e.dependencyId;
              }),
            ),
            d = (yield u.all(
              [].concat(
                l.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        return (yield o(
                          "WAWebPendingPollVoteResolution",
                        ).drainAcrossAddressingModes(
                          e.id,
                          "add-option",
                          t.dependencyId,
                        )).filter(function (e) {
                          return L(e, t);
                        });
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
                s.map(function (t) {
                  return o(
                    "WAWebPendingPollVoteResolution",
                  ).drainAcrossAddressingModes(
                    e.id,
                    "add-option",
                    t.dependencyId,
                  );
                }),
              ),
            )).flat();
          yield o("WAWebPendingPollVoteResolution").attachResolvedVotes(
            yield o("WAWebPendingPollVoteResolution").settleParkedVotes(
              d,
              e.id,
              (a = e.pollOptions) != null ? a : [],
              c,
            ),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return babelHelpers.extends({}, e, {
            dependencyId: o(
              "WAWebPollPendingOptionHashes",
            ).optionHashDependencyId(
              yield o("WAWebPollOptionHashUtils").getHashBufferForString(
                e.name,
              ),
            ),
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return e.t == null || t.t == null || e.t >= t.t;
    }
    ((l.resolvePendingVotesForAddedOptions = c),
      (l.resolveParkedVotesForPresentOptions = m));
  },
  98,
);
