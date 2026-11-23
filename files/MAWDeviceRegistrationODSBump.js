__d(
  "MAWDeviceRegistrationODSBump",
  ["MAWCurrentUser", "MAWODSProxy", "WAOdsEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.DEVICE_REGISTRATION,
        key: e,
      }),
        o("MAWCurrentUser").isEmployee() ||
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.DEVICE_REGISTRATION_NON_EMPLOYEE,
            key: e,
          }));
    }
    l.default = e;
  },
  98,
);
