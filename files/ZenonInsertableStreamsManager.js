__d(
  "ZenonInsertableStreamsManager",
  [
    "FrameEncryptionWasmTypes",
    "ODS",
    "ZenonE2ee",
    "ZenonE2eeWasmWorkerClient",
    "ZenonInsertableStreamsMessage",
    "ZenonMediaTypes",
    "ZenonRTWebBrowserFeatureSupport",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "Insertable Streams not supported in E2ee mandated call",
      u = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.setupSenderTransform = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.senderReceiverTransformGuards(e);
                if (n != null) {
                  r("ZenonE2ee").terminateCallIfE2eeViolation(
                    o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                      .INSERTABLE_STREAMS,
                    "Sender " + n,
                  );
                  return;
                }
                if (
                  typeof e.createEncodedStreams == "function" &&
                  e.track !== null
                ) {
                  var a = e.track.id,
                    i =
                      e.senderStreams == null
                        ? e.createEncodedStreams()
                        : e.senderStreams;
                  ((e.senderStreams = i),
                    r("ZenonE2ee").shouldUseE2eeWorker()
                      ? yield r("ZenonE2eeWasmWorkerClient").transformStream(
                          new (r("ZenonInsertableStreamsMessage"))(
                            null,
                            t,
                            "encode",
                            i.readable,
                            a,
                            i.writable,
                          ),
                        )
                      : this.$2(a, t, i.readable, i.writable));
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setupReceiverTransform = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.senderReceiverTransformGuards(t);
                if (n != null) {
                  r("ZenonE2ee").terminateCallIfE2eeViolation(
                    o("FrameEncryptionWasmTypes").ZenonE2eeComponent
                      .INSERTABLE_STREAMS,
                    "Receiver " + n,
                  );
                  return;
                }
                if (
                  typeof t.createEncodedStreams == "function" &&
                  t.track !== null
                ) {
                  var a = t.track.id,
                    i = o("ZenonMediaTypes").STRING_TO_MEDIA_TYPE[t.track.kind],
                    l =
                      t.receiverStreams == null
                        ? t.createEncodedStreams()
                        : t.receiverStreams;
                  ((t.receiverStreams = l),
                    r("ZenonE2ee").shouldUseE2eeWorker()
                      ? yield r("ZenonE2eeWasmWorkerClient").transformStream(
                          new (r("ZenonInsertableStreamsMessage"))(
                            e,
                            i,
                            "decode",
                            l.readable,
                            a,
                            l.writable,
                          ),
                        )
                      : this.$3(e, a, i, l.readable, l.writable));
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.senderReceiverTransformGuards = function (t) {
            if (
              !o(
                "ZenonRTWebBrowserFeatureSupport",
              ).isInsertableStreamsSupported()
            )
              return s;
            if (typeof t.createEncodedStreams != "function")
              return "createEncodedStreams is not a function";
            if (t.track === null) return "has no track";
          }),
          (a.$2 = function (n, a, i, l) {
            var t = this,
              s = i,
              u = l,
              c = r("ZenonE2ee").getSecureFrameManager();
            c == null || c.createEncryptorWithId(n, a);
            var d = new TransformStream({
              transform: function (i, l) {
                (t.$1 == null &&
                  (t.$1 = r("ZenonE2ee").canSkipFrameEncryption()),
                  t.$1
                    ? l.enqueue(i)
                    : c
                      ? ((i.data = c.encrypt(n, i)), l.enqueue(i))
                      : (e || (e = o("ODS"))).bumpEntityKey(
                          4083,
                          "zenon_e2ee",
                          "secure_frame_manager_null_at_encrypt_transform",
                        ));
              },
            });
            r("promiseDone")(s.pipeThrough(d).pipeTo(u));
          }),
          (a.$3 = function (n, a, i, l, s) {
            var t = this,
              u = l,
              c = s,
              d = r("ZenonE2ee").getSecureFrameManager();
            d == null || d.createDecryptorWithId(a, n, i);
            var m = new TransformStream({
              transform: function (i, l) {
                if (
                  (t.$1 == null &&
                    (t.$1 = r("ZenonE2ee").canSkipFrameEncryption()),
                  t.$1)
                )
                  l.enqueue(i);
                else if (d) {
                  var n = d.decrypt(a, i);
                  ((i.data = n.data), n.hasError || l.enqueue(i));
                } else
                  (e || (e = o("ODS"))).bumpEntityKey(
                    4083,
                    "zenon_e2ee",
                    "secure_frame_manager_null_at_decrypt_transform",
                  );
              },
            });
            r("promiseDone")(u.pipeThrough(m).pipeTo(c));
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
