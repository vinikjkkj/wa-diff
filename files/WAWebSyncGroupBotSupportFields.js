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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          t === void 0 && (t = []);
          var r = n === void 0 ? {} : n,
            a = r.endFetchPause,
            i = a === void 0 ? !1 : a,
            l = r.sourceGroupWid;
          if (
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ) {
            var s = e.filter(function (e) {
                return e.isFbidBot();
              }),
              c = yield m(t);
            if (!(s.length === 0 && c.length === 0)) {
              var d = yield u.load(),
                p = d.maybeQueryGroupAgentRosters,
                _ = d.maybeSyncGroupBotSupportFields;
              (s.length > 0 &&
                _(
                  s,
                  l == null
                    ? { endFetchPause: i }
                    : { endFetchPause: i, sourceGroupWid: l },
                ),
                c.length > 0 && p(c));
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
