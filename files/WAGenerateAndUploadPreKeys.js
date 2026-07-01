__d(
  "WAGenerateAndUploadPreKeys",
  [
    "WABridge",
    "WAGenerateAndUploadPreKeysProtocol",
    "WALoggerTag",
    "WAOdsEnums",
    "WATagsLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS([
        r("WALoggerTag").PrekeyGenerateAndUpload,
        r("WALoggerTag").SignedPrekey,
      ]);
    function c(t) {
      var n = t.reason;
      return (
        u.LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "About to generate and upload pre keys with reason: ",
              "",
            ])),
          n,
        ),
        o("WAGenerateAndUploadPreKeysProtocol")
          .generateAndUploadPreKeysProtocol()
          .then(function (e) {
            var t;
            if (e.success) {
              o("WABridge")
                .getBridge()
                .fireAndForget(
                  "event",
                  "odsBumpEntityKey",
                  {
                    entity: o("WAOdsEnums").Entity.PREKEY_UPLOAD,
                    key: "success",
                    amount: e.value.preKeys.length,
                  },
                  !0,
                );
              return;
            }
            var n = e.error;
            if (n === "request-error")
              throw (
                o("WABridge")
                  .getBridge()
                  .fireAndForget(
                    "event",
                    "odsBumpEntityKey",
                    {
                      entity: o("WAOdsEnums").Entity.PREKEY_UPLOAD,
                      key: "malformed",
                    },
                    !0,
                  ),
                r("err")("Malformed upload keys IQ")
              );
            u.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to generate and upload prekeys with error ",
                  ": ",
                  "}",
                ])),
              n,
              (t = e.payload) == null ? void 0 : t.message,
            );
          })
      );
    }
    l.generateAndUploadPreKeys = c;
  },
  98,
);
