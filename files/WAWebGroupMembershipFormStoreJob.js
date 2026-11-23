__d(
  "WAWebGroupMembershipFormStoreJob",
  ["WAWebBackendApi", "WAWebDBGroupsGroupMetadata", "WAWebGroupType"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
        e,
        n !== void 0
          ? { membershipForm: t, membershipFormKeyId: n }
          : { membershipForm: t },
      );
      var r = { chatId: e, author: null };
      o("WAWebBackendApi").frontendFireAndForget("updateModelForGroupAction", {
        groupAction: {
          actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM,
          membershipForm: t,
          membershipFormKeyId: n,
        },
        groupMeta: r,
      });
    }
    l.storeGroupMembershipForm = e;
  },
  98,
);
