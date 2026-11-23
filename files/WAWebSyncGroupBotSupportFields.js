__d(
  "WAWebSyncGroupBotSupportFields",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupDatabaseJob",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebMaybeSyncBotSupportFields",
      ).__setRef("WAWebSyncGroupBotSupportFields");
    async function u(e, t, n) {
      t === void 0 && (t = []);
      var r = n === void 0 ? {} : n,
        a = r.endFetchPause,
        i = a === void 0 ? !1 : a,
        l = r.sourceGroupWid;
      if (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()) {
        var u = e.filter(function (e) {
            return e.isFbidBot();
          }),
          d = await c(t);
        if (!(u.length === 0 && d.length === 0)) {
          var m = await s.load(),
            p = m.maybeQueryGroupAgentRosters,
            _ = m.maybeSyncGroupBotSupportFields;
          (u.length > 0 &&
            _(
              u,
              l == null
                ? { endFetchPause: i }
                : { endFetchPause: i, sourceGroupWid: l },
            ),
            d.length > 0 && p(d));
        }
      }
    }
    async function c(e) {
      var t = await Promise.all(d(e).map(m));
      return t.filter(Boolean);
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r,
            o = e.groupWid,
            a = e.participantWids,
            i = o.toString(),
            l = t.get(i),
            s =
              (n = l == null ? void 0 : l.participantsById) != null
                ? n
                : new Map();
          (a.forEach(function (e) {
            s.set(e.toString(), e);
          }),
            t.set(i, {
              groupWid: (r = l == null ? void 0 : l.groupWid) != null ? r : o,
              participantsById: s,
            }));
        }),
        Array.from(t.values(), function (e) {
          var t = e.groupWid,
            n = e.participantsById;
          return { groupWid: t, participantWids: Array.from(n.values()) };
        })
      );
    }
    async function m(e) {
      var t = e.groupWid,
        n = e.participantWids,
        r = n.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid);
      if (r.length === 0) return null;
      var a = await p(t);
      return {
        groupWid: t,
        missingAgentWids: r.filter(function (e) {
          return (
            (a == null
              ? void 0
              : a.some(function (t) {
                  return t.equals(e);
                })) !== !0
          );
        }),
      };
    }
    async function p(t) {
      try {
        var n = await o("WAWebGroupDatabaseJob").getGroupParticipantJob(t);
        return n == null
          ? void 0
          : n.participants.map(function (e) {
              var t = e.id;
              return t;
            });
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeLazySyncGroupBotSupportFields] participant read failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("sbp-group-agent-participant-read-error"),
          null
        );
      }
    }
    l.maybeLazySyncGroupBotSupportFields = u;
  },
  98,
);
