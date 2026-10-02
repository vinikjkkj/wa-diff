__d(
  "MAWCreateGroupApi",
  [
    "MAWBulkMaybeUpsertThreadAndParticipants",
    "MAWDbGroupInfoTxns",
    "MAWDbParticipantTxns",
    "MAWDbThreadTxns",
    "MAWFolderTypes",
    "MAWParticipantManagementTxns",
    "Promise",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "isGroupInvitesEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        (s = o("MAWFolderTypes")).FOLDER_ID.ARCHIVED,
        s.FOLDER_ID.INBOX,
        s.FOLDER_ID.OTHER,
        s.FOLDER_ID.PENDING,
        s.FOLDER_ID.RESTRICTED,
        s.FOLDER_ID.SPAM,
      ];
    function c(e) {
      var t;
      return (t = u.find(function (t) {
        return t === e;
      })) != null
        ? t
        : o("MAWFolderTypes").FOLDER_ID.INBOX;
    }
    function d(e) {
      return {
        creationTs: e.creationTs,
        creator: e.creator,
        inviter: e.inviter,
        jid: e.jid,
        memberAddMode: e.memberAddMode,
        participantVersion: e.participantVersion,
        subject: e.subject,
      };
    }
    function m(e) {
      return e.participants
        .map(function (e) {
          return e.error
            ? r("isGroupInvitesEnabled")() && e.error.errorCode === 403
              ? {
                  addressable: !0,
                  type: "invitedParticipant",
                  userJid: e.error.user,
                }
              : null
            : {
                addressable: e.value.addressable,
                type: e.value.type,
                userJid: e.value.user,
              };
        })
        .filter(Boolean);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.extras,
            n = e.folder,
            r = e.groupStatus,
            a = e.groupToCreate,
            i = e.key,
            l = r === "added" ? o("WATimeUtils").unixTime() : a.creationTs,
            s = yield o(
              "MAWBulkMaybeUpsertThreadAndParticipants",
            ).getOrCreateThreadNonTransaction({
              clientThreadKey: t == null ? void 0 : t.clientThreadKey,
              createTs: o("WATimeUtils").castUnixTimeToMillisTime(l),
              deduplicationKey: i != null ? i : void 0,
              folder: c(n),
              jid: a.jid,
            }),
            u = s.created,
            p = s.thread,
            _ = m(a);
          return (
            u
              ? o("MAWDbParticipantTxns").bulkAddParticipants(p.jid, _)
              : yield o(
                  "MAWParticipantManagementTxns",
                ).syncParticipantListNonTransaction(p.jid, _),
            o("MAWDbGroupInfoTxns").putGroupInfo(d(a)),
            p.archived === !0
              ? yield o("MAWDbThreadTxns").unarchiveThreadsNonTransaction([
                  p.jid,
                ])
              : yield o("MAWDbThreadTxns").subscribeToThreadsNonTransaction([
                  p.jid,
                ]),
            p.jid
          );
        })),
        _.apply(this, arguments)
      );
    }
    var f = (function () {
      var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
        yield (e || (e = n("Promise"))).all(
          t.map(function (e) {
            return p(e);
          }),
        );
      });
      return function (n) {
        return t.apply(this, arguments);
      };
    })();
    l.createGroups = f;
  },
  98,
);
