__d(
  "WAWebCheckMediaExistence",
  [
    "WALogger",
    "WAWebEventsWaitForBbEvent",
    "WAWebMediaMmsV4Download",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if ((yield c(t), !t.mediaObject)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "checkExistence msg without mediaObject, id: ",
                    " type: ",
                    "",
                  ])),
                t.id.toString(),
                t.type,
              )
              .sendLogs("media-fault: checkExistence msg without mediaObject");
            return;
          }
          yield o("WAWebMediaMmsV4Download").checkExistence({
            mimetype: t.mimetype,
            mediaObject: t.mediaObject,
            mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t),
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e.mediaData != null &&
            e.mediaData.filehash &&
            !e.isUnsentPhoneMsg()) ||
            (e.waitForPhoneUploadPromise ||
              (e.waitForPhoneUploadPromise = r("WAWebEventsWaitForBbEvent")(
                e.mediaData,
                "change:mediaStage change:filehash",
                function () {
                  return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
                },
              )),
            yield e.waitForPhoneUploadPromise,
            (e.waitForPhoneUploadPromise = null));
        })),
        d.apply(this, arguments)
      );
    }
    l.checkMediaExistence = s;
  },
  98,
);
