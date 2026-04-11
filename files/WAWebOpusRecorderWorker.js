__d(
  "WAWebOpusRecorderWorker",
  ["CurrentWebWorker", "WAOpusRecorderDecoder", "WAOpusRecorderEncoder"],
  function (t, n, r, o, a, i, l) {
    r("CurrentWebWorker").setMessageHandler(function (e) {
      switch (e.command) {
        case "encode-init":
          r("WAOpusRecorderEncoder").init(e.config);
          break;
        case "encode":
          r("WAOpusRecorderEncoder").encode(e.buffers);
          break;
        case "encode-done":
          r("WAOpusRecorderEncoder").done();
          break;
        case "flush":
          r("WAOpusRecorderEncoder").flush(e.requestId);
          break;
        case "decode-init":
          r("WAOpusRecorderDecoder").init(e.config);
          break;
        case "decode":
          r("WAOpusRecorderDecoder").decode(e.pages);
          break;
        case "decode-done":
          r("WAOpusRecorderDecoder").done();
          break;
      }
    });
    function e() {}
    l.default = e;
  },
  98,
);
