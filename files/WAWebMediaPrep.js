__d(
  "WAWebMediaPrep",
  [
    "WALogger",
    "WAPromiseCallSync",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaData",
    "WAWebMediaPrepSendToChat",
    "WAWebMediaTypes",
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
        var n = t.prototype;
        return (
          (n.sendToChat = function (t) {
            var e = t.chat,
              n = t.earlyUpload,
              a = t.options;
            return o("WAPromiseCallSync").promiseCallSync(
              r("WAWebMediaPrepSendToChat"),
              null,
              { chat: e, earlyUpload: n, options: a, prep: this },
            );
          }),
          (n.waitForPrep = async function () {
            return (await this.$1, this.mediaData);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
