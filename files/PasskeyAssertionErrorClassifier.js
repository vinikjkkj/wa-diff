__d(
  "PasskeyAssertionErrorClassifier",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "The operation either timed out or was not allowed.",
        "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",
        "CredentialContainer request is not allowed.",
        "This request has been cancelled by the user.",
      ],
      l = ["no credentials", "No credentials", "empty allow list"];
    function s(t) {
      var n = t.name,
        r = t.message,
        o = "unknown";
      return (
        n === "SecurityError"
          ? (o = "unsupported")
          : n === "NotAllowedError"
            ? l.some(function (e) {
                return r.includes(e);
              })
              ? (o = "no_credentials")
              : (o = "cancelled")
            : e.some(function (e) {
                return r.includes(e);
              }) && (o = "cancelled"),
        { message: r, originalError: t, type: o }
      );
    }
    i.classifyPasskeyAssertionError = s;
  },
  66,
);
