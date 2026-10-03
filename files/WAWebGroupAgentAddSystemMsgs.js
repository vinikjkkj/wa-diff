__d(
  "WAWebGroupAgentAddSystemMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebGroupAgentAddAttribution",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebSchemaBotProfile",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "agentadded";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            r = e.dbIsStale,
            a = e.meta,
            i = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: a,
                    action: babelHelpers.extends({}, t, { participants: e }),
                    dbIsStale: r,
                  });
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            l = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return [yield i(t.participants)];
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          if (
            t.reason != null ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            !t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
            })
          )
            return l();
          if (
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          )
            return [
              yield i(
                t.participants.filter(function (e) {
                  var t = e.id;
                  return !o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
                }),
              ),
            ];
          var s = yield C(t.participants),
            u = s.agents,
            c = s.humans;
          if (u.length === 0) return l();
          if (u.length === 1 && c.length === 0)
            return [yield v(yield i(u), u[0], a.author)];
          var d = yield h(u, function (e) {
            return f({ action: t, agent: e, dbIsStale: r, meta: a });
          });
          return d.length === 0 ||
            d.some(function (e) {
              return e == null;
            })
            ? l()
            : c.length === 0
              ? d
              : [].concat(d, [yield i(c)]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.meta,
            n = e.participants,
            r = e.prevParticipantIds,
            a = e.reason;
          if (
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            t.author == null ||
            a != null
          )
            return [];
          var i = new Set(r),
            l = E(
              n.filter(function (e) {
                var t = e.id;
                return (
                  o("WAWebBotUtils").isWidGroupAgentFbidWid(t) &&
                  !i.has(t.toString())
                );
              }),
            ),
            s = yield h(l, function (e) {
              return f({
                action: {
                  actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  participants: [e],
                  reason: null,
                },
                agent: e,
                dbIsStale: !0,
                meta: t,
              });
            });
          return s.filter(Boolean);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.agent,
            r = e.dbIsStale,
            a = e.meta,
            i = yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
              meta: o("WAWebGroupAgentRemovalSystemMsgs").withSystemMsgIdSuffix(
                a,
                "" + c + n.id.user,
              ),
              action: babelHelpers.extends({}, t, { participants: [n] }),
              dbIsStale: r,
            });
          return v(i, n, a.author);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = yield (u || (u = n("Promise"))).allSettled(t.map(a));
          return i.flatMap(function (t) {
            return t.status === "fulfilled"
              ? [t.value]
              : (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[genGroupAgentAddMsgs] agent-added row failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t.reason))
                  .sendLogs("group-agent-added-row-failed"),
                []);
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.id;
                    if (!o("WAWebBotUtils").isWidGroupAgentFbidWid(t))
                      return !1;
                    if (
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isMuseGroupAgentRenderingEnabled() ||
                      !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t)
                    )
                      return !0;
                    var n = yield R(t);
                    return (
                      !(n instanceof Error) &&
                      o("WAWebBotProduct").botProductFromServerValue(
                        n == null ? void 0 : n.product,
                      ) === o("WAWebBotProduct").BotProduct.THIRD_PARTY
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          return {
            agents: E(
              e.filter(function (e, n) {
                return t[n];
              }),
            ),
            humans: e.filter(function (e, n) {
              return !t[n];
            }),
          };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            e == null ||
            !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t.id)
          )
            return e;
          var a = yield R(t.id);
          if (a instanceof Error) return e;
          var i =
            o("WAWebBotProduct").botProductFromServerValue(
              a == null ? void 0 : a.product,
            ) === o("WAWebBotProduct").BotProduct.MUSE &&
            (a == null ? void 0 : a.creatorLid) != null &&
            n != null &&
            ((r = o("WAWebLidMigrationUtils").toUserLid(n)) == null
              ? void 0
              : r.user) === a.creatorLid;
          return babelHelpers.extends({}, e, {
            body: (i
              ? o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution
                  .OWNER
              : o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution
                  .MEMBER
            ).valueOf(),
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .get(e.toString());
          } catch (e) {
            var t = r("getErrorSafe")(e);
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[genGroupAgentAddMsgs] bot profile read failed",
                    ])),
                )
                .catching(t)
                .sendLogs("group-agent-added-profile-read-failed"),
              t
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = function (t) {
        var e = t.id;
        return (
          o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) ||
          o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
        );
      };
      return [].concat(
        e.filter(t),
        e.filter(function (e) {
          return !t(e);
        }),
      );
    }
    ((l.genGroupAddNotificationMsgs = d), (l.genGroupCreateAgentAddMsgs = p));
  },
  98,
);
