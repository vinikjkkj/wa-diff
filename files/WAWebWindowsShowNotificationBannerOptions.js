__d(
  "WAWebWindowsShowNotificationBannerOptions",
  ["fbt", "WAWebWindowsShowNotificationBannerOption"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
      {
        value: o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.Always,
        label: function () {
          return s._(/*BTDS*/ "Always");
        },
      },
      {
        value: o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.Never,
        label: function () {
          return s._(/*BTDS*/ "Never");
        },
      },
      {
        value: o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.OnlyWhenAppIsOpen,
        label: function () {
          return s._(/*BTDS*/ "Only when app is open");
        },
      },
    ];
    l.ShowNotificationBannerOptions = e;
  },
  226,
);
