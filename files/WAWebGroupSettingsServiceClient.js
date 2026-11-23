__d(
  "WAWebGroupSettingsServiceClient",
  ["WAWebGroupSettingsService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        setGroupSubject: function (n, r) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.setGroupSubject(n, r);
            },
          );
        },
        setGroupDescription: function (n) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.setGroupDescription(n);
            },
          );
        },
        setGroupProperty: function (n, r, a) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.setGroupProperty(n, r, a);
            },
          );
        },
        setEphemeralGroupProperty: function (n) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.setEphemeralGroupProperty(n);
            },
          );
        },
        mexUpdateGroupPropertyJob: function (n, r) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.mexUpdateGroupPropertyJob(n, r);
            },
          );
        },
        saveGroupMembershipForm: function (n, r) {
          return e(
            o("WAWebGroupSettingsService").GroupSettingsService,
            function (e) {
              return e.saveGroupMembershipForm(n, r);
            },
          );
        },
      };
    }
    l.groupSettingsServiceClient = e;
  },
  98,
);
