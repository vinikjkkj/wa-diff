__d(
  "WARotateSignedPreKey",
  [
    "WAGenerateAndUploadPreKeys",
    "WALoggerTag",
    "WARotateSignedPreKeyProtocol",
    "WATagsLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS([
        r("WALoggerTag").SignedPrekeyRotation,
        r("WALoggerTag").SignedPrekey,
      ]);
    async function d(t) {
      var n = await o(
        "WARotateSignedPreKeyProtocol",
      ).rotateSignedPreKeyProtocol(t);
      if (!(n.success || n.error.type === "no-prekey-reregistered")) {
        if (n.error.type === "validation-error")
          return (
            c.ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Signed prekey failed server validation. need to upload all keys.",
                ])),
            ),
            o("WAGenerateAndUploadPreKeys")
              .generateAndUploadPreKeys({
                reason: "signed prekey failed server validation",
              })
              .catch(function (e) {
                c.ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while generating and uploading prekeys: ",
                      "",
                    ])),
                  String(e),
                );
              }),
            Promise.resolve()
          );
        throw (
          c.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "rotateSignedPreKey failed.",
              ])),
          ),
          r("err")("rotateSignedPreKey RPC failed: " + n.error.type)
        );
      }
    }
    l.rotateSignedPreKey = d;
  },
  98,
);
