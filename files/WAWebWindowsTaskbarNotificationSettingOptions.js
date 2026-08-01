__d(
  "WAWebWindowsTaskbarNotificationSettingOptions",
  ["fbt", "WAWebWindowsTaskbarNotificationOption"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
      {
        value: o("WAWebWindowsTaskbarNotificationOption")
          .TaskbarNotificationOption.Always,
        label: function () {
          return s._(/*BTDS*/ "Always");
        },
      },
      {
        value: o("WAWebWindowsTaskbarNotificationOption")
          .TaskbarNotificationOption.Never,
        label: function () {
          return s._(/*BTDS*/ "Never");
        },
      },
      {
        value: o("WAWebWindowsTaskbarNotificationOption")
          .TaskbarNotificationOption.OnlyWhenAppIsOpen,
        label: function () {
          return s._(/*BTDS*/ "Only when app is open");
        },
      },
    ];
    l.TaskbarNotificationSettingOptions = e;
  },
  226,
);
