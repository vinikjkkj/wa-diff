__d(
  "WAWebInitChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingEventUploader",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = !0);
          var r = t;
          (yield o(
            "WAWebUserPrefsMultiDevice",
          ).getChatThreadLoggingLastUploadedStartTs()) == null &&
            (yield o(
              "WAWebUserPrefsMultiDevice",
            ).setChatThreadLoggingLastUploadedStartTs(0));
          var a = new (o(
              "WAWebChatThreadLoggingLocalstorageMetadataHandler",
            ).ChatThreadLoggingMetadataLocalStorage)(),
            i = r
              ? new (o(
                  "WAWebChatThreadLoggingEventStore",
                ).ChatThreadLoggingEventStoreImpl)(a)
              : {
                  handleMessages: function () {
                    return (s || (s = n("Promise"))).resolve();
                  },
                  getEvent: function () {
                    return (s || (s = n("Promise"))).resolve();
                  },
                  getBeforeInclusive: function () {
                    return (s || (s = n("Promise"))).resolve([]);
                  },
                  deleteBeforeInclusive: function () {
                    return (s || (s = n("Promise"))).resolve(0);
                  },
                },
            l = r
              ? new (o(
                  "WAWebChatThreadLoggingEventUploader",
                ).ChatThreadLoggingEventUploaderImpl)(a, i)
              : {
                  uploadEvents: function () {
                    return (s || (s = n("Promise"))).resolve(0);
                  },
                },
            u = yield a.getOffset();
          (u != null && o("WAWebChatThreadLogging").initUploadTimer(u),
            o("WAWebChatThreadLogging").setChatThreadLoggingState({
              metadataStore: a,
              eventStore: i,
              eventUploader: l,
            }),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat thread logging initialized",
                ])),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    l.initChatThreadLogging = u;
  },
  98,
);
