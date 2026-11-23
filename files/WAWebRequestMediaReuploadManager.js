__d(
  "WAWebRequestMediaReuploadManager",
  [
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendServerErrorReceiptJob",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {
          var t = this;
          ((this.$1 = new Map()),
            (this.$2 = new Set()),
            (this.requestMediaReupload = async function (n) {
              var a = n.id.id;
              if (o("WAWebMsgGetters").getIsNewsletterMsg(n))
                throw new (o(
                  "WAWebGetUserMediaErrors",
                ).RMRNotSupportedOnNewsletterMessagesError)(
                  o("WAWebMmsMediaTypes").getMsgMediaType(n),
                );
              if (n.mediaKey == null)
                throw (
                  t.$2.has(a) ||
                    (t.$2.add(a),
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[media][rmr] Called RMR with null mediaKey, type ",
                            "",
                          ])),
                        n.type,
                      )
                      .tags("media", "non-sad")
                      .sendLogs("rmr-called-with-null-media-key", {
                        sampling: 0.01,
                      })),
                  new (o("WAWebGetUserMediaErrors").RMRWithoutMediaKeyError)(
                    n.type,
                  )
                );
              var i = t.$1.get(a);
              if (i) return r("nullthrows")(i.request);
              var l = new Promise(function (e, r) {
                t.$1.set(a, { resolve: e, reject: r, msg: n });
              });
              return (
                (r("nullthrows")(t.$1.get(a)).request = l),
                await r("WAWebSendServerErrorReceiptJob")(n),
                l
              );
            }),
            (this.resolveMediaReupload = function (e) {
              var n = e.directPath,
                r = e.msgId,
                a = e.result,
                i = t.$1.get(r);
              i != null
                ? (i.resolve({ result: a, directPath: n }), t.$1.delete(r))
                : o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "resolveMediaReupload: msgId (",
                        ") is not found in _rmrRequests",
                      ])),
                    r,
                  );
            }),
            (this.getMediaKey = function (e) {
              var n;
              return (n = t.$1.get(e)) == null ? void 0 : n.msg.mediaKey;
            }));
        }
        var n = t.prototype;
        return (
          (n.rmrRequests_TESTONLY = function () {
            return this.$1;
          }),
          t
        );
      })(),
      c = new u();
    ((l.RequestMediaReuploadManagerImpl = u),
      (l.RequestMediaReuploadManager = c));
  },
  98,
);
