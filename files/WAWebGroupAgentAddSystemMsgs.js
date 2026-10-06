__d(
  "WAWebGroupAgentAddSystemMsgs",
  [
    "$InternalEnum",
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
      c,
      d = "agentadded",
      m = new Set([
        (c = o("WAWebBotProduct")).BotProduct.META_AI,
        c.BotProduct.META_AI_THREAD,
        c.BotProduct.SIDE_CHAT,
        c.BotProduct.MANUS,
        c.BotProduct.SUPPORT,
      ]),
      p = n("$InternalEnum").Mirrored(["Combined", "Muse", "Separate"]);
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = yield S(t.participants),
            u = s.agents,
            c = s.humans;
          if (u.length === 0) return l();
          if (u.length === 1 && c.length === 0)
            return [yield T(yield i(u), u[0], a.author)];
          var d = yield b(u, function (e) {
            return y({ action: t, agent: e, dbIsStale: r, meta: a });
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.meta,
            r = e.participants,
            a = e.prevParticipantIds,
            i = e.reason;
          if (
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            t.author == null ||
            i != null
          )
            return [];
          var l = new Set(a),
            s = r.filter(function (e) {
              var t = e.id;
              return (
                o("WAWebBotUtils").isWidGroupAgentFbidWid(t) &&
                !l.has(t.toString())
              );
            }),
            c = yield (u || (u = n("Promise"))).all(
              s.map(function (e) {
                var t = e.id;
                return L(t);
              }),
            ),
            d = s.filter(function (e, t) {
              return c[t];
            }),
            m = yield b(d, function (e) {
              return y({
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
          return m.filter(Boolean);
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
          var t = e.action,
            n = e.agent,
            r = e.dbIsStale,
            a = e.meta,
            i = yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
              meta: o("WAWebGroupAgentRemovalSystemMsgs").withSystemMsgIdSuffix(
                a,
                "" + d + n.id.user,
              ),
              action: babelHelpers.extends({}, t, { participants: [n] }),
              dbIsStale: r,
            });
          return T(i, n, a.author);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.id;
                    return (
                      o("WAWebBotUtils").isWidGroupAgentFbidWid(t) &&
                      (yield L(t))
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
            agents: e.filter(function (e, n) {
              return t[n];
            }),
            humans: e.filter(function (e, n) {
              return !t[n];
            }),
          };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (function (e) {
            if (e === p.Combined) return !1;
            if (e === p.Muse)
              return o(
                "WAWebBotGroupGatingUtils",
              ).isMuseGroupAgentRenderingEnabled();
            if (e === p.Separate) return !0;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(yield k(e));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e))
            return p.Combined;
          var t = yield x(e),
            n =
              t instanceof Error
                ? null
                : o("WAWebBotProduct").botProductFromServerValue(
                    t == null ? void 0 : t.product,
                  );
          return m.has(n)
            ? p.Combined
            : o("WAWebBotProduct").isMuseAgentProduct(e, n)
              ? p.Muse
              : p.Separate;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            e == null ||
            !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t.id)
          )
            return e;
          var a = yield x(t.id);
          if (a instanceof Error) return e;
          var i =
            o("WAWebBotProduct").isMuseAgentProduct(
              t.id,
              o("WAWebBotProduct").botProductFromServerValue(
                a == null ? void 0 : a.product,
              ),
            ) &&
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        $.apply(this, arguments)
      );
    }
    ((l.genGroupAddNotificationMsgs = _), (l.genGroupCreateAgentAddMsgs = g));
  },
  98,
);
