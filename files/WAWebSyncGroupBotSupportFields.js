__d(
  "WAWebSyncGroupBotSupportFields",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupDatabaseJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebMaybeSyncBotSupportFields",
      ).__setRef("WAWebSyncGroupBotSupportFields");
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = []),
            !!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
          ) {
            var n = e.filter(function (e) {
                return e.isFbidBot();
              }),
              r = yield m(t);
            if (!(n.length === 0 && r.length === 0)) {
              var a = yield u.load(),
                i = a.maybeQueryGroupAgentRosters,
                l = a.maybeSyncGroupBotSupportFields;
              (n.length > 0 && l(n), r.length > 0 && i(r));
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all(_(e).map(f));
          return t.filter(Boolean);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupWid,
            n = e.participantWids,
            r = n.filter(o("WAWebBotUtils").isWidStandardGroupAgentFbidWid);
          if (r.length === 0) return null;
          var a = yield h(t);
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebGroupDatabaseJob").getGroupParticipantJob(t);
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
        })),
        y.apply(this, arguments)
      );
    }
    l.maybeLazySyncGroupBotSupportFields = c;
  },
  98,
);
