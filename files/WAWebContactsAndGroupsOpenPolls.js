__d(
  "WAWebContactsAndGroupsOpenPolls",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebContactsAndGroupsDBGroupPolls",
    "WAWebContactsAndGroupsLastSeen",
    "WAWebContactsAndGroupsSession",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebEventEmitter",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = 4,
      d = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      m = null,
      p = new (r("WAWebEventEmitter"))();
    function _() {
      var e, t;
      return (e = (t = d.get()) == null ? void 0 : t.groupPolls) != null
        ? e
        : null;
    }
    function f(t, n) {
      var a,
        i = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      ((a = d.get()) == null ? void 0 : a.lastSeen) === i ||
        m === i ||
        ((m = i),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          v(t, n - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS)
            .then(function (e) {
              m === i &&
                ((m = null),
                d.set({ groupPolls: e, lastSeen: i }),
                p.trigger("change"));
            })
            .catch(function (t) {
              (m === i && (m = null),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestGroupPolls: loading the open polls failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)));
            });
        }));
    }
    function g(e) {
      var t = d.get();
      if (t != null) {
        var n = e.toString();
        (d.set(
          babelHelpers.extends({}, t, {
            groupPolls: t.groupPolls.map(function (e) {
              var t = e.chat,
                r = e.polls;
              return {
                chat: t,
                polls: r.map(function (e) {
                  return e.msgKey.toString() === n
                    ? babelHelpers.extends({}, e, { iVoted: !0 })
                    : e;
                }),
              };
            }),
          }),
        ),
          p.trigger("change"));
      }
    }
    function h(e, t, n) {
      return e
        .flatMap(function (e) {
          var r = e.chat,
            o = e.polls;
          return o
            .map(function (e) {
              return y(r, e, n);
            })
            .filter(function (e, n) {
              return C(e, t) && (e.isMine || !o[n].iVoted);
            });
        })
        .sort(b);
    }
    function y(e, t, n) {
      return {
        chat: e,
        endTime: n && t.endTimeMs != null ? t.endTimeMs / u : null,
        isMine: t.msgKey.fromMe,
        msgKey: t.msgKey,
        question: t.question,
        t: t.t,
      };
    }
    function C(e, t) {
      return (
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
        (e.endTime == null || e.endTime > t)
      );
    }
    function b(e, t) {
      return e.isMine !== t.isMine
        ? e.isMine
          ? -1
          : 1
        : e.endTime != null && t.endTime != null && e.endTime !== t.endTime
          ? e.endTime - t.endTime
          : (e.endTime == null) != (t.endTime == null)
            ? e.endTime != null
              ? -1
              : 1
            : t.t - e.t;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield o("WAConcurrentIterate").concurrentIterate(
            e.length,
            (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  return {
                    chat: e[n],
                    polls: yield o("WAWebContactsAndGroupsDBGroupPolls")
                      .getGroupPollsSince(e[n].id, t)
                      .catch(function (e) {
                        return (
                          o("WALogger")
                            .WARN(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "loadGroupPolls: reading the polls of a group failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e)),
                          []
                        );
                      }),
                  };
                },
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })(),
            c,
          );
          return a.filter(function (e) {
            var t = e.polls;
            return t.length > 0;
          });
        })),
        S.apply(this, arguments)
      );
    }
    ((l.groupPollsChanges = p),
      (l.getCachedGroupPolls = _),
      (l.requestGroupPolls = f),
      (l.markOpenPollVoted = g),
      (l.getOpenPolls = h));
  },
  98,
);
