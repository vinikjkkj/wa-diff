__d(
  "WAFetchAndSaveDevices",
  ["WAGlobals", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      if (t.length !== 0) {
        var n = [];
        await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (r) {
              var a = r.cryptoManager;
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Update user devices signal and DB",
                    ])),
                ),
                Promise.all(
                  t.map(function (e) {
                    return (
                      n.push({
                        contactJid: e.jid,
                        dhash: e.dhash,
                        lastSyncTs: e.lastSyncTs,
                      }),
                      a.storage.updateUserDevicesInfo([e])
                    );
                  }),
                )
              );
            },
            { operationType: "get_devices", flush: !0, afterInit: !0 },
          );
      }
    }
    l.updateUsersDevicesSignalAndDB = s;
  },
  98,
);
