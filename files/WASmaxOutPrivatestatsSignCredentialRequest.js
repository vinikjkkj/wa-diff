__d(
  "WASmaxOutPrivatestatsSignCredentialRequest",
  ["WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.blindedCredentialElementValue,
        r = e.projectNameElementValue,
        a = (t = o("WASmaxJsx")).smax(
          "iq",
          {
            xmlns: "privatestats",
            id: o("WAWap").generateId(),
            type: "get",
            to: o("WAWap").S_WHATSAPP_NET,
          },
          t.smax(
            "sign_credential",
            { version: "2" },
            t.smax("blinded_credential", null, n),
            t.smax("project_name", null, r),
          ),
        );
      return a;
    }
    l.makeSignCredentialRequest = e;
  },
  98,
);
