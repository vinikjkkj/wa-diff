__d(
  "WAWebCheckMediaExistence",
  [
    "WALogger",
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
          if ((yield t.waitForPhoneUpload(), !t.mediaObject)) {
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
    l.checkMediaExistence = s;
  },
  98,
);
