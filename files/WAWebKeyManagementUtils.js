__d(
  "WAWebKeyManagementUtils",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = [],
            n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
          try {
            var r = yield o("WAWebApiDeviceList").getMyDeviceList();
            r.devices.forEach(function (e) {
              e.id !== n.getDeviceId() &&
                t.push(
                  o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                    n.user,
                    n.server,
                    e.id,
                  ),
                );
            });
          } catch (t) {
            var a = String(t);
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] getPeerDevices: ",
                      ". Key reqs->primary only",
                    ])),
                  a,
                )
                .sendLogs(a),
              [
                o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                  n.user,
                  n.server,
                  0,
                ),
              ]
            );
          }
          return t;
        })),
        u.apply(this, arguments)
      );
    }
    l.getPeerDevices = s;
  },
  98,
);
