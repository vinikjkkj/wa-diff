__d(
  "WAWebSaveImagineImage",
  [
    "WALogger",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFilenameManager",
    "WAWebMsgType",
    "WAWebPonyfillsFetch",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        "image/jpeg": o("WAWebFileSaverTypes").AllowedFileExtensions.JPG,
        "image/png": o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
        "image/webp": o("WAWebFileSaverTypes").AllowedFileExtensions.WEBP,
      };
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = yield r("WAWebPonyfillsFetch")(t);
            if (!i.ok)
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[imagine-save] media fetch responded ",
                        "",
                      ])),
                    i.status,
                  )
                  .sendLogs("imagine-save-fetch-not-ok"),
                !1
              );
            var l = yield i.blob();
            return (
              yield o("WAWebFileSaver").FileSaver.downloadData(
                l,
                m(n),
                (a = u[l.type]) != null
                  ? a
                  : o("WAWebFileSaverTypes").AllowedFileExtensions.JPG,
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[imagine-save] could not save the generated image",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("imagine-save-failed"),
              !1
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("WAWebFilenameManager").getDefaultName({
        filename: null,
        isVcardOverMmsDocument: !1,
        mimetype: null,
        t: e,
        type: o("WAWebMsgType").MSG_TYPE.IMAGE,
        vcardList: null,
      });
    }
    l.saveImagineImage = c;
  },
  98,
);
