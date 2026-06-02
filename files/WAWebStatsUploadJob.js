__d(
  "WAWebStatsUploadJob",
  ["WALogger", "WASmaxStatsSendBufferRPC"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "fieldStatsUpload:sendSendBufferRPC start",
          ])),
      );
      var r = await o("WASmaxStatsSendBufferRPC").sendSendBufferRPC({
        addT: n,
        addElementValue: t,
      });
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "fieldStatsUpload:sendSendBufferRPC end",
          ])),
      );
      var a;
      if (r.name === "SendBufferResponseSuccess")
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "fieldStatsUpload:sendSendBufferRPC SendBufferResponseSuccess",
              ])),
          ),
          Promise.resolve()
        );
      r.name === "SendBufferResponseErrorNoRetry"
        ? (a = r.value.errorSendBufferNoRetryError.value)
        : (r.name, (a = r.value.errorIQErrorServiceUnavailableMixin));
      var i = a,
        l = i.code,
        c = i.text;
      return { errorCode: parseInt(l, 10), errorText: c };
    }
    l.default = c;
  },
  98,
);
