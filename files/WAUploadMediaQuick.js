__d(
  "WAUploadMediaQuick",
  [
    "WACreateRetrier",
    "WAEncryptAndUploadPlaintext",
    "WAMediaUtils",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.logger,
        r = t.mediaUploadFlow,
        a = t.onCiphertext,
        i = t.plaintext,
        l = t.plaintextHash,
        s = t.serverMediaType;
      (n.DEV(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "start uploadMediaQuick",
          ])),
      ),
        r.addPoint("create_upload_retrier_start"));
      var u = await o("WACreateRetrier").createUploadRetrier(s, r);
      if (!u.success) return (r.addPoint("create_upload_retrier_fail"), u);
      (r.addPoint("create_upload_retrier_end"),
        r.addPoint("create_media_key_start"));
      var c = o("WAMediaUtils").createMediaKey(),
        d = o("WAMediaUtils").createUploadToken(),
        m = o("WATimeUtils").unixTime();
      r.addPoint("create_media_key_end");
      var p = await o("WAEncryptAndUploadPlaintext").encryptAndUploadPlaintext({
        mediaKey: c,
        mediaKeyTimestamp: m,
        serverMediaType: s,
        mediaUploadFlow: r,
        onCiphertext: a,
        plaintext: i,
        plaintextHash: l,
        uploadRetrier: u.value,
        uploadToken: d,
      });
      return p;
    }
    l.uploadMediaQuick = s;
  },
  98,
);
