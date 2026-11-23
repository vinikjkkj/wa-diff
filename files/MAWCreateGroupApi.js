__d(
  "MAWCreateGroupApi",
  [
    "MAWBulkMaybeUpsertThreadAndParticipants",
    "MAWDbGroupInfoTxns",
    "MAWDbParticipantTxns",
    "MAWDbThreadTxns",
    "MAWFolderTypes",
    "MAWParticipantManagementTxns",
    "WATimeUtils",
    "isGroupInvitesEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("MAWFolderTypes")).FOLDER_ID.ARCHIVED,
        e.FOLDER_ID.INBOX,
        e.FOLDER_ID.OTHER,
        e.FOLDER_ID.PENDING,
        e.FOLDER_ID.RESTRICTED,
        e.FOLDER_ID.SPAM,
      ];
    function u(e) {
      var t;
      return (t = s.find(function (t) {
        return t === e;
      })) != null
        ? t
        : o("MAWFolderTypes").FOLDER_ID.INBOX;
    }
    function c(e) {
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
    function d(e) {
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
    async function m(e) {
      var t = e.extras,
        n = e.folder,
        r = e.groupStatus,
        a = e.groupToCreate,
        i = e.key,
        l = r === "added" ? o("WATimeUtils").unixTime() : a.creationTs,
        s = await o(
          "MAWBulkMaybeUpsertThreadAndParticipants",
        ).getOrCreateThreadNonTransaction({
          clientThreadKey: t == null ? void 0 : t.clientThreadKey,
          createTs: o("WATimeUtils").castUnixTimeToMillisTime(l),
          deduplicationKey: i != null ? i : void 0,
          folder: u(n),
          jid: a.jid,
        }),
        m = s.created,
        p = s.thread,
        _ = d(a);
      return (
        m
          ? o("MAWDbParticipantTxns").bulkAddParticipants(p.jid, _)
          : await o(
              "MAWParticipantManagementTxns",
            ).syncParticipantListNonTransaction(p.jid, _),
        o("MAWDbGroupInfoTxns").putGroupInfo(c(a)),
        p.archived === !0
          ? await o("MAWDbThreadTxns").unarchiveThreadsNonTransaction([p.jid])
          : await o("MAWDbThreadTxns").subscribeToThreadsNonTransaction([
              p.jid,
            ]),
        p.jid
      );
    }
    var p = async function (t) {
      await Promise.all(
        t.map(function (e) {
          return m(e);
        }),
      );
    };
    l.createGroups = p;
  },
  98,
);
