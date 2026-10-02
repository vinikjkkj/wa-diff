__d(
  "WAHandleEncryptNotification",
  ["Promise", "WALogger", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAGenerateAndUploadPreKeys").__setRef(
        "WAHandleEncryptNotification",
      ),
      p = r("requireDeferred")("WARequestPreKeyDigest").__setRef(
        "WAHandleEncryptNotification",
      );
    function _(t) {
      var r = t.notification.encryptType;
      switch (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleEncryptNotification type=",
              "",
            ])),
          r,
        ),
        r)
      ) {
        case "count":
          m.load()
            .then(function (e) {
              var t = e.generateAndUploadPreKeys;
              return t({ reason: "handle encrypt notification" });
            })
            .catch(function (e) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleEncryptNotification failed with ",
                    "",
                  ])),
                e,
              );
            });
          break;
        case "digest":
          p.load()
            .then(function (e) {
              var t = e.requestPreKeyDigest;
              return t();
            })
            .catch(function (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePrekeyContactIDChangedNotification failed with ",
                    "",
                  ])),
                e,
              );
            });
          break;
        case "identity":
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "handlePrekeyContactIDChangedNotification is not implemented",
              ])),
          );
          break;
      }
      return (d || (d = n("Promise"))).resolve();
    }
    l.handleEncryptNotification = _;
  },
  98,
);
