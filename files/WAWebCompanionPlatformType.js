__d(
  "WAWebCompanionPlatformType",
  ["WAWebBrowserInfo", "WAWebEnvironment", "WAWebProtobufsCompanionReg.pb"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebEnvironment").isWindows
        ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.UWP
        : s(r("WAWebBrowserInfo")().name);
    }
    function s(e) {
      return e === "Chrome"
        ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.CHROME
        : e === "Firefox"
          ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.FIREFOX
          : e === "IE"
            ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType.IE
            : e === "Opera"
              ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                  .OPERA
              : e === "Safari"
                ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                    .SAFARI
                : e === "Edge"
                  ? o("WAWebProtobufsCompanionReg.pb").DeviceProps$PlatformType
                      .EDGE
                  : e === "electron" || e === "Desktop"
                    ? o("WAWebProtobufsCompanionReg.pb")
                        .DeviceProps$PlatformType.DESKTOP
                    : e === "ipad" || e === "iPad"
                      ? o("WAWebProtobufsCompanionReg.pb")
                          .DeviceProps$PlatformType.IPAD
                      : e === "tablet" || e === "Android tablet"
                        ? o("WAWebProtobufsCompanionReg.pb")
                            .DeviceProps$PlatformType.ANDROID_TABLET
                        : e === "Ohana"
                          ? o("WAWebProtobufsCompanionReg.pb")
                              .DeviceProps$PlatformType.OHANA
                          : e === "Aloha"
                            ? o("WAWebProtobufsCompanionReg.pb")
                                .DeviceProps$PlatformType.ALOHA
                            : e === "Catalina"
                              ? o("WAWebProtobufsCompanionReg.pb")
                                  .DeviceProps$PlatformType.CATALINA
                              : o("WAWebProtobufsCompanionReg.pb")
                                  .DeviceProps$PlatformType.UNKNOWN;
    }
    l.default = e;
  },
  98,
);
