__d(
  "WaWebRequestPersistentStorage",
  ["WALogger", "WATagsLogger", "once"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("once")(d);
    async function d() {
      try {
        var t;
        if ((t = navigator) != null && (t = t.storage) != null && t.persist) {
          var n = await navigator.storage.persist();
          (await o("WATagsLogger").whenReady(),
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
        (await o("WATagsLogger").whenReady(),
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
    }
    l.requestPersistentStore = c;
  },
  98,
);
