__d(
  "WAWebStatsUploadJob",
  [
    "Promise",
    "WALogger",
    "WASmaxStatsSendBufferRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "fieldStatsUpload:sendSendBufferRPC start",
              ])),
          );
          var a = yield o("WASmaxStatsSendBufferRPC").sendSendBufferRPC({
            addT: r,
            addElementValue: t,
          });
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "fieldStatsUpload:sendSendBufferRPC end",
              ])),
          );
          var i;
          if (a.name === "SendBufferResponseSuccess")
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fieldStatsUpload:sendSendBufferRPC SendBufferResponseSuccess",
                  ])),
              ),
              (c || (c = n("Promise"))).resolve()
            );
          a.name === "SendBufferResponseErrorNoRetry"
            ? (i = a.value.errorSendBufferNoRetryError.value)
            : (a.name, (i = a.value.errorIQErrorServiceUnavailableMixin));
          var l = i,
            d = l.code,
            m = l.text;
          return { errorCode: parseInt(d, 10), errorText: m };
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
