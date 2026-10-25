__d(
  "WAWebVoipVoiceChatUtils",
  [
    "Promise",
    "WAWebAdvSyncDeviceListApi",
    "WAWebDBParticipantTypes",
    "WAWebGroupDatabaseJob",
    "WAWebGroupQueryBridge",
    "WAWebLidMigrationUtils",
    "WAWebPhashUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6,
      u = 7,
      c = 8,
      d = new Set([s, u, c]);
    function m(e) {
      return e != null && d.has(e);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h(e);
          if (t != null) return t;
          yield o("WAWebGroupQueryBridge").sendQueryGroup(e);
          var n = yield h(e);
          if (n == null)
            throw r("err")(
              "voip: loadVoiceChatMemberWids: group members are incomplete",
            );
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return null;
          yield (e || (e = n("Promise"))).all(
            t
              .filter(function (e) {
                return o("WAWebLidMigrationUtils").toUserLid(e) == null;
              })
              .map(function (e) {
                return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                  wids: [e],
                  context: "voip",
                  phash: null,
                });
              }),
          );
          var r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            a = new Map([[r.toString(), r]]);
          for (var i of t) {
            var l = o("WAWebLidMigrationUtils").toUserLid(i);
            if (l == null) return null;
            a.set(l.toString(), l);
          }
          return o("WAWebPhashUtils").phashV1(Array.from(a.values()));
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
          var r = yield (e || (e = n("Promise"))).all([
              o("WAWebGroupDatabaseJob").getGroupMetadataJob(t),
              o("WAWebGroupDatabaseJob").getGroupParticipantJob(t),
            ]),
            a = r[0],
            i = r[1];
          return (a == null
            ? void 0
            : a.hasIncompleteParticipantInformation) === !0 ||
            i == null ||
            i.staleType ===
              o("WAWebDBParticipantTypes").STALE_TYPES.PARTICIPANT ||
            i.participants.length === 0
            ? null
            : i.participants.map(function (e) {
                var t = e.id;
                return t;
              });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.isVoiceChatOfferSilenceReason = m),
      (l.loadVoiceChatMemberWids = p),
      (l.getVoiceChatGroupPhash = f));
  },
  98,
);
