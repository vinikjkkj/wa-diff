__d(
  "WAGetDevices",
  ["WADevicesState", "WALogger", "WAPushSafeTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = o("WAPushSafeTypes").unsafeNotNullable(t),
        r = n.ignoreDhash,
        a = r === void 0 ? !1 : r,
        i = n.reason,
        l = n.users;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "fetchAndSaveDevices: ",
            "",
          ])),
        i,
      ),
        a && o("WADevicesState").getDevicesState().reset(Array.from(l)),
        await o("WADevicesState")
          .getDevicesState()
          .waitForUserDevices(Array.from(l), "getDevices job: " + i, a));
    }
    l.getDevices = s;
  },
  98,
);
