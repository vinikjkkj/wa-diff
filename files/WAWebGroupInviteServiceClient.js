__d(
  "WAWebGroupInviteServiceClient",
  ["WAWebGroupInviteService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        joinGroupViaInvite: function (n, r, a) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.joinGroupViaInvite(n, r, a);
            },
          );
        },
        resetGroupInviteCode: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.resetGroupInviteCode(n);
            },
          );
        },
        queryGroupInviteV4: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.queryGroupInviteV4(n);
            },
          );
        },
        fetchMexGroupInviteCode: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.fetchMexGroupInviteCode(n);
            },
          );
        },
        fetchGroupMembershipFormForJoin: function (n, r) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.fetchGroupMembershipFormForJoin(n, r);
            },
          );
        },
        getGroupMembershipFormStoredRequest: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.getGroupMembershipFormStoredRequest(n);
            },
          );
        },
        deleteGroupMembershipFormStoredRequest: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.deleteGroupMembershipFormStoredRequest(n);
            },
          );
        },
        submitGroupMembershipFormJoin: function (n) {
          return e(
            o("WAWebGroupInviteService").GroupInviteService,
            function (e) {
              return e.submitGroupMembershipFormJoin(n);
            },
          );
        },
      };
    }
    l.groupInviteServiceClient = e;
  },
  98,
);
