__d(
  "WAWebRequestMediaReuploadManager",
  [
    "WALogger",
    "WANullthrows",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendServerErrorReceiptJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          var t = this;
          ((this.$1 = new Map()),
            (this.requestMediaReupload = async function (e) {
              var n = e.id.id;
              if (o("WAWebMsgGetters").getIsNewsletterMsg(e))
                throw new (o(
                  "WAWebMiscErrors",
                ).RMRNotSupportedOnNewsletterMessagesError)(
                  o("WAWebMmsMediaTypes").getMsgMediaType(e),
                );
              var a = t.$1.get(n);
              if (a) return r("WANullthrows")(a.request);
              var i = new Promise(function (r, o) {
                t.$1.set(n, { resolve: r, reject: o, msg: e });
              });
              return (
                (r("WANullthrows")(t.$1.get(n)).request = i),
                await r("WAWebSendServerErrorReceiptJob")(e),
                i
              );
            }),
            (this.resolveMediaReupload = function (n) {
              var r = n.directPath,
                a = n.msgId,
                i = n.result,
                l = t.$1.get(a);
              l != null
                ? (l.resolve({ result: i, directPath: r }), t.$1.delete(a))
                : o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "resolveMediaReupload: msgId (",
                        ") is not found in _rmrRequests",
                      ])),
                    a,
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
      u = new s();
    ((l.RequestMediaReuploadManagerImpl = s),
      (l.RequestMediaReuploadManager = u));
  },
  98,
);
