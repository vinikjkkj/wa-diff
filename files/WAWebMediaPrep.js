__d(
  "WAWebMediaPrep",
  [
    "WALogger",
    "WAPromiseCallSync",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaData",
    "WAWebMediaPrepSendToChat",
    "WAWebMediaTypes",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t, n) {
          var a = this;
          ((this.baseType = t),
            (this.mediaData = new (r("WAWebMediaData"))({
              mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING,
            })),
            (this.$1 = n.then(
              function (t) {
                if ((a.mediaData.set(t), !t.filehash)) {
                  var n = t.mediaBlob;
                  return (
                    n ||
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Assertion failed!",
                            ])),
                        )
                        .sendLogs("media-fault: no hash or blob"),
                    o("WAWebCryptoCalculateFilehash")
                      .calculateFilehashFromBlob(r("nullthrows")(n))
                      .then(function (e) {
                        a.mediaData.filehash = e;
                      })
                  );
                }
              },
              function (e) {
                throw (
                  (a.mediaData.mediaStage =
                    o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED),
                  e
                );
              },
            )));
        }
        var a = t.prototype;
        return (
          (a.sendToChat = function (t) {
            var e = t.chat,
              n = t.earlyUpload,
              a = t.options;
            return o("WAPromiseCallSync").promiseCallSync(
              r("WAWebMediaPrepSendToChat"),
              null,
              { chat: e, earlyUpload: n, options: a, prep: this },
            );
          }),
          (a.waitForPrep = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield this.$1, this.mediaData);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
