__d(
  "WAWebInitChatThreadLogging",
  [
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebUserPrefsMultiDevice",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebChatThreadLoggingEventUploader").__setRef(
        "WAWebInitChatThreadLogging",
      );
    async function u(t) {
      t === void 0 && (t = !0);
      var n = t;
      (await o(
        "WAWebUserPrefsMultiDevice",
      ).getChatThreadLoggingLastUploadedStartTs()) == null &&
        (await o(
          "WAWebUserPrefsMultiDevice",
        ).setChatThreadLoggingLastUploadedStartTs(0));
      var r = new (o(
          "WAWebChatThreadLoggingLocalstorageMetadataHandler",
        ).ChatThreadLoggingMetadataLocalStorage)(),
        a = n
          ? new (o(
              "WAWebChatThreadLoggingEventStore",
            ).ChatThreadLoggingEventStoreImpl)(r)
          : {
              handleMessages: function () {
                return Promise.resolve();
              },
              getEvent: function () {
                return Promise.resolve();
              },
              getBeforeInclusive: function () {
                return Promise.resolve([]);
              },
              deleteBeforeInclusive: function () {
                return Promise.resolve(0);
              },
            },
        i = n
          ? c(r, a)
          : {
              uploadEvents: function () {
                return Promise.resolve(0);
              },
            },
        l = await r.getOffset();
      (l != null && o("WAWebChatThreadLogging").initUploadTimer(l),
        o("WAWebChatThreadLogging").setChatThreadLoggingState({
          metadataStore: r,
          eventStore: a,
          eventUploader: i,
        }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "chat thread logging initialized",
            ])),
        ));
    }
    function c(e, t) {
      var n = null;
      return {
        uploadEvents: function (o) {
          var r = o == null ? void 0 : babelHelpers.extends({}, o);
          return (
            n != null ||
              (n = s
                .load()
                .then(function (n) {
                  var r = n.ChatThreadLoggingEventUploaderImpl;
                  return new r(e, t);
                })
                .catch(function (e) {
                  throw ((n = null), e);
                })),
            n.then(function (e) {
              return e.uploadEvents(r);
            })
          );
        },
      };
    }
    l.initChatThreadLogging = u;
  },
  98,
);
