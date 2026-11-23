__d(
  "WAWebGroupAgentAddSystemMsgs",
  [
    "$InternalEnum",
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
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "agentadded",
      d = new Set([
        (u = o("WAWebBotProduct")).BotProduct.META_AI,
        u.BotProduct.META_AI_THREAD,
        u.BotProduct.SIDE_CHAT,
        u.BotProduct.MANUS,
        u.BotProduct.SUPPORT,
      ]),
      m = n("$InternalEnum").Mirrored(["Combined", "Muse", "Separate"]);
    async function p(e) {
      var t = e.action,
        n = e.dbIsStale,
        r = e.meta,
        a = async function (a) {
          return o("WAWebGroupSystemMsg").genGroupNotificationMsg({
            meta: r,
            action: babelHelpers.extends({}, t, { participants: a }),
            dbIsStale: n,
          });
        },
        i = async function () {
          return [await a(t.participants)];
        };
      if (
        t.reason != null ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        !t.participants.some(function (e) {
          var t = e.id;
          return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
        })
      )
        return i();
      if (
        t.participants.some(function (e) {
          var t = e.id;
          return o("WAWebUserUtils").isMeAccount(t);
        })
      )
        return [
          await a(
            t.participants.filter(function (e) {
              var t = e.id;
              return !o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
            }),
          ),
        ];
      var l = await h(t.participants),
        s = l.agents,
        u = l.humans;
      if (s.length === 0) return i();
      if (s.length === 1 && u.length === 0)
        return [await b(await a(s), s[0], r.author)];
      var c = await g(s, function (e) {
        return f({ action: t, agent: e, dbIsStale: n, meta: r });
      });
      return c.length === 0 ||
        c.some(function (e) {
          return e == null;
        })
        ? i()
        : u.length === 0
          ? c
          : [].concat(c, [await a(u)]);
    }
    async function _(e) {
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
        l = n.filter(function (e) {
          var t = e.id;
          return (
            o("WAWebBotUtils").isWidGroupAgentFbidWid(t) && !i.has(t.toString())
          );
        }),
        s = await Promise.all(
          l.map(function (e) {
            var t = e.id;
            return y(t);
          }),
        ),
        u = l.filter(function (e, t) {
          return s[t];
        }),
        c = await g(u, function (e) {
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
      return c.filter(Boolean);
    }
    async function f(e) {
      var t = e.action,
        n = e.agent,
        r = e.dbIsStale,
        a = e.meta,
        i = await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
          meta: o("WAWebGroupAgentRemovalSystemMsgs").withSystemMsgIdSuffix(
            a,
            "" + c + n.id.user,
          ),
          action: babelHelpers.extends({}, t, { participants: [n] }),
          dbIsStale: r,
        });
      return b(i, n, a.author);
    }
    async function g(t, n) {
      var a = await Promise.allSettled(t.map(n));
      return a.flatMap(function (t) {
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
    }
    async function h(e) {
      var t = await Promise.all(
        e.map(async function (e) {
          var t = e.id;
          return o("WAWebBotUtils").isWidGroupAgentFbidWid(t) && (await y(t));
        }),
      );
      return {
        agents: e.filter(function (e, n) {
          return t[n];
        }),
        humans: e.filter(function (e, n) {
          return !t[n];
        }),
      };
    }
    async function y(e) {
      return (function (e) {
        if (e === m.Combined) return !1;
        if (e === m.Muse)
          return o(
            "WAWebBotGroupGatingUtils",
          ).isMuseGroupAgentRenderingEnabled();
        if (e === m.Separate) return !0;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(await C(e));
    }
    async function C(e) {
      if (!o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e))
        return m.Combined;
      var t = await v(e),
        n =
          t instanceof Error
            ? null
            : o("WAWebBotProduct").botProductFromServerValue(
                t == null ? void 0 : t.product,
              );
      return d.has(n)
        ? m.Combined
        : o("WAWebBotProduct").isMuseAgentProduct(e, n)
          ? m.Muse
          : m.Separate;
    }
    async function b(e, t, n) {
      var r;
      if (e == null || !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(t.id))
        return e;
      var a = await v(t.id);
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
          ? o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.OWNER
          : o("WAWebGroupAgentAddAttribution").GroupAgentAddAttribution.MEMBER
        ).valueOf(),
      });
    }
    async function v(e) {
      try {
        return await o("WAWebSchemaBotProfile")
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
    }
    ((l.genGroupAddNotificationMsgs = p), (l.genGroupCreateAgentAddMsgs = _));
  },
  98,
);
