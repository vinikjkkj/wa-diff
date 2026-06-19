__d(
  "WAWebAddonMarkAsReadUtils",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonSelectUtils",
    "WAWebAddonUpdateDataUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.map(function (e) {
            return e.read != null
              ? babelHelpers.extends({}, e, { read: !0 })
              : e;
          });
          try {
            var r = o("WAWebAddonSelectUtils").getAddonTableMode(t[0]);
            yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
              {
                processMode: o("WAWebAddonConstants").AddonProcessMode
                  .MarkAsRead,
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
        })),
        u.apply(this, arguments)
      );
    }
    l.processMarkAsRead = s;
  },
  98,
);
