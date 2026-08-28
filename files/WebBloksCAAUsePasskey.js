__d(
  "WebBloksCAAUsePasskey",
  ["CAAWebBloksPasskeyUtils", "nullthrows", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t, n) {
      var a,
        i,
        l = o("CAAWebBloksPasskeyUtils").getValidatedPasskeyAssertionParams(
          t,
          n,
        );
      if (l != null) {
        var s = l.callbacks,
          u = s.onSuccess,
          c = s.onError;
        if (((a = window.navigator) == null ? void 0 : a.credentials) == null) {
          o("CAAWebBloksPasskeyUtils").onError(
            t,
            c,
            o("CAAWebBloksPasskeyUtils").PasskeyErrorCodes.NOT_SUPPORTED_ERROR,
            "Browser does not support passkeys, window.navigator.credentials is null.",
          );
          return;
        }
        var d = l.json;
        (i = e) == null || i.abort();
        var m = new AbortController();
        ((e = m), (d.signal = m.signal));
        var p = function () {
          var n = r("nullthrows")(navigator.credentials);
          n.get(d)
            .then(function (e) {
              var n = o("CAAWebBloksPasskeyUtils").buildBloksAssertionArguments(
                e,
              );
              t.executeCatch(u.getValue(), [
                n.passkey_id,
                n.payload,
                n.payload_version,
                n.extension_results,
              ]);
            })
            .catch(function (e) {
              o("CAAWebBloksPasskeyUtils").onError(
                t,
                c,
                e.code,
                "Passkey assertion exception: " + e.message,
              );
            })
            .finally(function () {
              e === m && (e = null);
            });
        };
        if (d.mediation !== "conditional") {
          p();
          return;
        }
        var _ = window.PublicKeyCredential,
          f =
            _ == null || _.isConditionalMediationAvailable == null
              ? void 0
              : _.isConditionalMediationAvailable();
        f != null &&
          r("promiseDone")(
            f.then(function (e) {
              e && p();
            }),
          );
      }
    }
    l.default = s;
  },
  98,
);
