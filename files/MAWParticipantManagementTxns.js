__d(
  "MAWParticipantManagementTxns",
  [
    "MAWDbParticipantTxns",
    "MAWDbThreadTxns",
    "MAWUserJidWrapper",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(e, t),
            r = n.mustArchiveThread,
            a = n.result;
          return (
            r &&
              (yield o("MAWDbThreadTxns").archiveThreadsNonTransaction(
                [e],
                !0,
              )),
            a
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("MAWDbParticipantTxns").getParticipantsInThread(e);
      if (t.length === 0 && n.length === 0)
        return {
          mustArchiveThread: !1,
          result: {
            addedJids: [],
            participants: n,
            removedJids: [],
            typeUpdateJids: [],
          },
        };
      var r = new Map();
      n.forEach(function (e) {
        r.set(e.userJid, e);
      });
      var a = new Set(
          t.map(function (e) {
            return e.userJid;
          }),
        ),
        i = [],
        l = [],
        s = [],
        u = [];
      (r.forEach(function (e, t) {
        a.has(t) ||
          (e.type !== "invitedParticipant"
            ? i.push(t)
            : (u.push({ type: e.type, userJid: e.userJid }),
              s.push(babelHelpers.extends({}, e))));
      }),
        t.forEach(function (e) {
          var t = r.get(e.userJid);
          t == null
            ? (l.push(e),
              e.type === "admin" &&
                u.push({ type: e.type, userJid: e.userJid }))
            : (t.type !== e.type &&
                u.push({ type: e.type, userJid: e.userJid }),
              s.push(babelHelpers.extends({}, t, e)));
        }));
      var c = i.indexOf(o("MAWUserJidWrapper").getMyUserJid()) >= 0,
        d = o("MAWDbParticipantTxns").bulkAddParticipants(e, l),
        m = o("MAWDbParticipantTxns").bulkUpdateParticipants(s);
      return (
        o("MAWDbParticipantTxns").bulkDeleteParticipantsInThread(e, i),
        {
          mustArchiveThread: c,
          result: {
            addedJids: l.map(function (e) {
              return e.userJid;
            }),
            participants: [].concat(d, m),
            removedJids: i,
            typeUpdateJids: u,
          },
        }
      );
    }
    l.syncParticipantListNonTransaction = e;
  },
  98,
);
