__d(
  "WAWebInitChatThreadLogging",
  [
    "Promise",
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingEventStore",
    "WAWebChatThreadLoggingLocalstorageMetadataHandler",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebChatThreadLoggingEventUploader").__setRef(
        "WAWebInitChatThreadLogging",
      );
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              ? m(a, i)
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
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = null;
      return {
        uploadEvents: function (o) {
          var r = o == null ? void 0 : babelHelpers.extends({}, o);
          return (
            n != null ||
              (n = u
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
    l.initChatThreadLogging = c;
  },
  98,
);
