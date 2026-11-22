__d(
  "WAWebHatchCredentialSelection",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebHatchJsonReaders").readObject(e, "connector_payload");
      return o("WAWebHatchJsonReaders").readBool(
        e,
        "credential_selection_required",
      ) === !0 ||
        o("WAWebHatchJsonReaders").readBool(
          t,
          "credential_selection_required",
        ) === !0
        ? "required"
        : o("WAWebHatchJsonReaders").readBool(
              t,
              "credential_selection_optional",
            ) === !0
          ? "optional"
          : null;
    }
    l.readHatchCredentialSelectionMarker = e;
  },
  98,
);
