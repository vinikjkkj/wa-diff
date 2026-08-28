__d(
  "WebBloksCAACreatePasskey",
  ["CAAWebBloksPasskeyUtils", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = o("CAAWebBloksPasskeyUtils").getValidatedPasskeyRegistrationParams(
          e,
          t,
        );
      if (r != null) {
        var a = r.callbacks,
          i = a.onError;
        if (((n = window.navigator) == null ? void 0 : n.credentials) == null) {
          o("CAAWebBloksPasskeyUtils").onError(
            e,
            i,
            o("CAAWebBloksPasskeyUtils").PasskeyErrorCodes.NOT_SUPPORTED_ERROR,
            "Browser does not support passkeys, window.navigator.credentials is null.",
          );
          return;
        }
        var l = window.PublicKeyCredential;
        if (!l) {
          o("CAAWebBloksPasskeyUtils").onError(
            e,
            i,
            o("CAAWebBloksPasskeyUtils").PasskeyErrorCodes.NOT_SUPPORTED_ERROR,
            "Window object does not contain PublicKeyCredential.",
          );
          return;
        }
        s(e, r);
      }
    }
    function s(e, t) {
      var n = t.callbacks,
        a = n.onSuccess,
        i = n.onError,
        l = t.json,
        s = r("nullthrows")(navigator.credentials);
      s.create(l)
        .then(function (t) {
          var n = o("CAAWebBloksPasskeyUtils").buildBloksRegistrationArguments(
            t,
          );
          e.executeCatch(a.getValue(), [
            n.passkey_id,
            n.payload,
            n.payload_version,
            n.extension_results,
          ]);
        })
        .catch(function (t) {
          o("CAAWebBloksPasskeyUtils").onError(
            e,
            i,
            t.code,
            "Passkey creation exception: " + t.message,
          );
        });
    }
    l.default = e;
  },
  98,
);
