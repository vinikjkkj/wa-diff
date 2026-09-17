__d(
  "WAWebRequestMediaReuploadManager",
  [
    "Promise",
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendServerErrorReceiptJob",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t() {
          var t = this;
          ((this.$1 = new Map()),
            (this.$2 = new Set()),
            (this.requestMediaReupload = (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (a) {
                  var i = a.id.id;
                  if (o("WAWebMsgGetters").getIsNewsletterMsg(a))
                    throw new (o(
                      "WAWebGetUserMediaErrors",
                    ).RMRNotSupportedOnNewsletterMessagesError)(
                      o("WAWebMmsMediaTypes").getMsgMediaType(a),
                    );
                  if (a.mediaKey == null)
                    throw (
                      t.$2.has(i) ||
                        (t.$2.add(i),
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[media][rmr] Called RMR with null mediaKey, type ",
                                "",
                              ])),
                            a.type,
                          )
                          .tags("media", "non-sad")
                          .sendLogs("rmr-called-with-null-media-key", {
                            sampling: 0.01,
                          })),
                      new (o(
                        "WAWebGetUserMediaErrors",
                      ).RMRWithoutMediaKeyError)(a.type)
                    );
                  var l = t.$1.get(i);
                  if (l) return r("nullthrows")(l.request);
                  var s = new (u || (u = n("Promise")))(function (e, n) {
                    t.$1.set(i, { resolve: e, reject: n, msg: a });
                  });
                  return (
                    (r("nullthrows")(t.$1.get(i)).request = s),
                    yield r("WAWebSendServerErrorReceiptJob")(a),
                    s
                  );
                },
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })()),
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
        var a = t.prototype;
        return (
          (a.rmrRequests_TESTONLY = function () {
            return this.$1;
          }),
          t
        );
      })(),
      d = new c();
    ((l.RequestMediaReuploadManagerImpl = c),
      (l.RequestMediaReuploadManager = d));
  },
  98,
);
