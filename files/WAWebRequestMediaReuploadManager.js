__d(
  "WAWebRequestMediaReuploadManager",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendServerErrorReceiptJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        function t() {
          var t = this;
          ((this.$1 = new Map()),
            (this.requestMediaReupload = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var a = e.id.id;
                  if (o("WAWebMsgGetters").getIsNewsletterMsg(e))
                    throw new (o(
                      "WAWebMiscErrors",
                    ).RMRNotSupportedOnNewsletterMessagesError)(
                      o("WAWebMmsMediaTypes").getMsgMediaType(e),
                    );
                  var i = t.$1.get(a);
                  if (i) return r("WANullthrows")(i.request);
                  var l = new (s || (s = n("Promise")))(function (n, r) {
                    t.$1.set(a, { resolve: n, reject: r, msg: e });
                  });
                  return (
                    (r("WANullthrows")(t.$1.get(a)).request = l),
                    yield r("WAWebSendServerErrorReceiptJob")(e),
                    l
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
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
        var a = t.prototype;
        return (
          (a.rmrRequests_TESTONLY = function () {
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
