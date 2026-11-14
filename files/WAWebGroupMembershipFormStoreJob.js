__d(
  "WAWebGroupMembershipFormStoreJob",
  [
    "WAWebBackendApi",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            e,
            n !== void 0
              ? { membershipForm: t, membershipFormKeyId: n }
              : { membershipForm: t },
          );
          var r = { chatId: e, author: null };
          o("WAWebBackendApi").frontendFireAndForget(
            "updateModelForGroupAction",
            {
              groupAction: {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM,
                membershipForm: t,
                membershipFormKeyId: n,
              },
              groupMeta: r,
            },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.storeGroupMembershipForm = e;
  },
  98,
);
