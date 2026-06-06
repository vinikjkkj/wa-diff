__d(
  "WAWebCreateBugnubTaskUrl",
  [
    "WAWebBuildConstants",
    "WAWebBuildType",
    "WAWebConnModel",
    "WAWebEnvironment",
    "WAWebLid1X1MigrationGating",
    "WAWebMobilePlatforms",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "cr:9565",
    "toSentenceCase",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:9565")) != null ? e : {},
      u = s.getWindowsBuildType;
    async function c(e) {
      var t,
        n =
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : t.user,
        a = "Web";
      r("WAWebEnvironment").isWindows && (a = "Windows Hybrid");
      var i;
      u &&
        (i = r("toSentenceCase")(o("WAWebBuildType").BuildType.getName(u())));
      var l = await o(
          "WAWebUserPrefsGeneral",
        ).getWhatsAppWebExternalBetaJoinedIdb(),
        s = {
          first_question: "New Devices (CEP)",
          newdevices: a,
          version:
            "" +
            o("WAWebBuildConstants").VERSION_STR +
            (l ? " (joined beta)" : ""),
          wabuildtype: i,
          bug: d("", e),
          logs: "I understand and give consent",
          number: n != null ? n : "",
        },
        c = encodeURIComponent(JSON.stringify(s));
      return (
        "https://www.internalfb.com/butterfly/form/777724432837431?default_responses=" +
        c
      );
    }
    function d(e, t) {
      var n,
        a =
          (n = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : n.user,
        i = null;
      switch (o("WAWebConnModel").Conn.platform) {
        case o("WAWebMobilePlatforms").PLATFORMS.ANDROID:
          i = "Android";
          break;
        case o("WAWebMobilePlatforms").PLATFORMS.IPHONE:
          i = "iPhone";
          break;
        case o("WAWebMobilePlatforms").PLATFORMS.SMBA:
          i = "SMB - Android";
          break;
        case o("WAWebMobilePlatforms").PLATFORMS.SMBI:
          i = "SMB - iPhone";
          break;
        default:
          i = "Choose an option";
      }
      var l = "";
      if (r("WAWebEnvironment").isWeb)
        switch (o("WAWebUA").UA.browser) {
          case o("WAWebUA").BROWSER_TYPE.CHROME:
            l = "Chrome";
            break;
          case o("WAWebUA").BROWSER_TYPE.SAFARI:
            l = "Safari";
            break;
          case o("WAWebUA").BROWSER_TYPE.FIREFOX:
            l = "Firefox";
            break;
          case o("WAWebUA").BROWSER_TYPE.EDGE:
            l = "Microsoft Edge";
            break;
          case o("WAWebUA").BROWSER_TYPE.OPERA:
            l = "Opera";
        }
      var s = o(
          "WAWebLid1X1MigrationGating",
        ).Lid1X1MigrationUtils.isLidMigrated(),
        c = [
          "Description: " +
            e +
            `
`,
          "Link to crash logs",
          a != null
            ? "https://www.internalfb.com/intern/bunny/?q=waflb+" + a
            : "https://www.internalfb.com/whatsapp/reliability/lookup_logs?search_query",
          "time of log: " +
            new Date().toString() +
            `
`,
          "Primary Platform: " + i,
        ];
      return (
        l !== "" && c.push("Browser: " + l),
        t != null && c.push("Error string:", "" + t),
        u &&
          (c.push(
            "Windows Hybrid native version: " +
              o("WAWebBuildConstants").VERSION_STR,
          ),
          c.push(
            "Windows Hybrid native build type: " +
              o("WAWebBuildType").BuildType.getName(u()),
          )),
        c.push(
          `
Is LID Migrated: ` + (s ? "Yes" : "No"),
        ),
        c.join(`
`)
      );
    }
    ((l.createBugnubTaskUrl = c), (l.enrichBugReportDescription = d));
  },
  98,
);
