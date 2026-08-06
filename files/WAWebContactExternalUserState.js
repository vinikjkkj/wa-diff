__d(
  "WAWebContactExternalUserState",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
      Unset: 0,
      GuestUser: 1,
      DeactivatedGuestUserInactive: 2,
      DeactivatedGuestUserRegistered: 3,
      PendingInviteUser: 4,
    });
    function l(t) {
      return t === e.GuestUser;
    }
    ((i.ExternalUserState = e), (i.isGuestUser = l));
  },
  66,
);
