__d(
  "KeyTransparencyLocalKeyRetrieval",
  [
    "MWFBLogger",
    "WAGetThreadDevicesInfoApi",
    "WAHex",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAGetThreadDevicesInfoApi").getThreadDevicesInfo({
            fbid: t,
          });
          if (n.length === 0)
            throw o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .mustfixThrow(
                "No devices found for user " + t + " in Signal store",
              );
          var r = new Map();
          for (var a of n) {
            var i = a.identityKey.replace(/\s+/g, ""),
              l = new Uint8Array(o("WAHex").parseHex(i)),
              s = l;
            if (
              (l.length === 33 && l[0] === 5 && (s = l.slice(1)),
              s.length !== 32)
            )
              throw o("MWFBLogger")
                .MWLogger()
                .tags(["KeyTransparency"])
                .mustfixThrow(
                  "Invalid identity key length for device " +
                    a.deviceId +
                    ": expected 32 bytes, got " +
                    s.length,
                );
            r.set(a.deviceId, s);
          }
          return (
            o("MWFBLogger")
              .MWLogger()
              .tags(["KeyTransparency"])
              .DEBUG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Retrieved ",
                    " device keys for user ",
                    "",
                  ])),
                r.size,
                t,
              ),
            r
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.getLocalSignalKeysForUser = s;
  },
  98,
);
