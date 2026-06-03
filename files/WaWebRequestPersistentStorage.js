__d(
  "WaWebRequestPersistentStorage",
  ["WALogger", "WATagsLogger", "asyncToGeneratorRuntime", "once"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("once")(d);
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t;
            if (
              (t = navigator) != null &&
              (t = t.storage) != null &&
              t.persist
            ) {
              var n = yield navigator.storage.persist();
              (yield o("WATagsLogger").whenReady(),
                n
                  ? o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[storage] storage bucket is persistent",
                        ])),
                    )
                  : o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[storage] storage bucket persistence denied",
                          ])),
                      )
                      .sendLogs("aquire-persistent-storage-denied", {
                        sampling: 0.001,
                      }));
            }
          } catch (e) {
            (yield o("WATagsLogger").whenReady(),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[storage] storage bucket persistence error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("failed-to-aquire-persistent-storage"));
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.requestPersistentStore = c;
  },
  98,
);
