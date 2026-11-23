__d(
  "WAWebAddonMarkAsReadUtils",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonSelectUtils",
    "WAWebAddonUpdateDataUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.map(function (e) {
        return e.read != null ? babelHelpers.extends({}, e, { read: !0 }) : e;
      });
      try {
        var r = o("WAWebAddonSelectUtils").getAddonTableMode(t[0]);
        await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
          {
            processMode: o("WAWebAddonConstants").AddonProcessMode.MarkAsRead,
            tableMode: r,
          },
          { add: n },
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "processMarkAsRead update failed ",
                "",
              ])),
            t,
          )
          .tags("addons", "messaging")
          .sendLogs("processMarkAsRead");
      }
    }
    l.processMarkAsRead = s;
  },
  98,
);
