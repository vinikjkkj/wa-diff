__d(
  "WAWebVersionInfo.react",
  [
    "fbt",
    "WAWebBuildConstants",
    "WAWebCopyPasteSelectable.react",
    "WAWebHistorySyncLidChatGating",
    "WAWebLid1X1MigrationGating",
    "WAWebPrimaryVersion",
    "WAWebUserPrefsMeUser",
    "cr:21012",
    "gkx",
    "react",
    "useWAWebExternalBetaOptIn",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p() {
      var e = m([]),
        t = e[0],
        n = e[1],
        a = void 0,
        i = void 0,
        l = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        c = l[0];
      if (
        (!r("gkx")("26258") &&
          t != null &&
          (a = u.jsxs("span", {
            dir: "LTR",
            children: ["Primary app version: ", t],
          })),
        !r("gkx")("26258"))
      ) {
        var p = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(),
          _ = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
        i = u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "Phone Number: ",
                  p == null ? void 0 : p.user,
                  " - LID:",
                  _ == null ? void 0 : _.user,
                ],
              }),
            }),
            u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "Companion device ID: ",
                  p == null ? void 0 : p.getDeviceId(),
                ],
              }),
            }),
            u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "Chat DB Lid migrated:",
                  " ",
                  o("WAWebLid1X1MigrationGating")
                    .Lid1X1MigrationUtils.isLidMigrated()
                    .toString(),
                ],
              }),
            }),
            u.jsx("div", {
              children: u.jsxs("span", {
                dir: "LTR",
                children: [
                  "History LID session: ",
                  o("WAWebHistorySyncLidChatGating")
                    .isForcedHistoryLidChat()
                    .toString(),
                ],
              }),
            }),
          ],
        });
      }
      d(function () {
        r("gkx")("26258") ||
          o("WAWebPrimaryVersion")
            .getPrimaryCurrentVersion()
            .then(function (e) {
              n(e);
            });
      }, []);
      var f = u.jsxs(u.Fragment, {
          children: [
            s._(/*BTDS*/ "Version {version}", [s._param("version", "")]),
            u.jsx("span", {
              dir: "LTR",
              children: o("WAWebBuildConstants").VERSION_STR,
            }),
          ],
        }),
        g,
        h;
      return (
        r("gkx")("26258") ||
          ((f = u.jsxs("span", {
            children: ["Version: ", o("WAWebBuildConstants").VERSION_STR],
          })),
          (g = "React Compiler: " + (r("gkx")("7685") ? "forget" : "classic"))),
        u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
          "data-testid": void 0,
          className: "xamitd3 x1f6kntn x1fc57z9 xhslqc4 x2b8uid",
          selectable: !0,
          children: [
            f,
            u.jsx("div", { children: i }),
            c
              ? u.jsx("div", { children: s._(/*BTDS*/ "(joined beta)") })
              : null,
            u.jsx("div", { children: a }),
            u.jsx("div", { children: g }),
            u.jsx("div", { children: h }),
          ],
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
