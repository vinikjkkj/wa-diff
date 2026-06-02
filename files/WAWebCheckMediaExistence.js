__d(
  "WAWebCheckMediaExistence",
  ["WALogger", "WAWebMediaMmsV4Download", "WAWebMmsMediaTypes"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if ((await t.waitForPhoneUpload(), !t.mediaObject)) {
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
      await o("WAWebMediaMmsV4Download").checkExistence({
        mimetype: t.mimetype,
        mediaObject: t.mediaObject,
        mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t),
      });
    }
    l.checkMediaExistence = s;
  },
  98,
);
