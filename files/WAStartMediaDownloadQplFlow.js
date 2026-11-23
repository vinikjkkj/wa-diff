__d(
  "WAStartMediaDownloadQplFlow",
  [
    "QPLFlow",
    "WAGetPlatformFromStanzaId",
    "WAGetStorageQplAnnotations",
    "WAJids",
    "WAMediaUtils",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e5;
    function s(t) {
      var n = t.downloadEntry,
        a = t.e2eePlatform,
        i = t.isPreview,
        l = t.msgType,
        s = t.protocolMsgId,
        u = t.triggerUIView,
        c = t.xmaMediaType,
        d = o("QPLFlow").startQPLFlow(r("qpl")._(25312150, "83"), {
          annotations: {
            bool: {
              isTransformStreamSupported:
                o("WAMediaUtils").isTransformStreamSupported(),
            },
            string: {
              chat_type:
                s == null
                  ? null
                  : o("WAJids").switchOnMsgrChatJidType(s.chat, {
                      group: function () {
                        return "group";
                      },
                      user: function () {
                        return "user";
                      },
                    }),
              downloadEntry: i === !0 ? n + "-preview" : n,
              e2eePlatform:
                a != null
                  ? a
                  : s == null
                    ? null
                    : o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                        s.externalId,
                      ),
              msgType: l,
              trigger_ui_view: u,
              xmaMediaType: c != null ? c : void 0,
            },
          },
          timeoutInMs: e,
        });
      return (
        o("WAGetStorageQplAnnotations")
          .getStorageQplAnnotations()
          .then(function (e) {
            d.addAnnotations(e);
          }),
        babelHelpers.extends({}, d, { downloadEntry: n, triggerUIView: u })
      );
    }
    ((l.QPL_MEDIA_DOWNLOAD_TIMEOUT_IN_MS = e),
      (l.startMediaDownloadQplFlow = s));
  },
  98,
);
