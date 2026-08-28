__d(
  "fxGetPasswordlessDialogConfig",
  ["CometRelay", "FBLogger", "fxGetPasswordlessDialogConfig.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("fxGetPasswordlessDialogConfig.graphql"));
    function u(e) {
      var t,
        n,
        a = o("CometRelay").readInlineData(s, e),
        i = a == null || (t = a.web_auth) == null ? void 0 : t.url,
        l =
          (n = a == null ? void 0 : a.web_auth_bottom_sheet_content) != null
            ? n
            : {},
        u = l.cancel_button_text,
        c = l.confirm_button_text,
        d = l.description,
        m = l.title;
      if (u == null || c == null || d == null || m == null || i == null)
        throw r("FBLogger")("fx_linking").mustfixThrow(
          "PasswordlessDialog content is null.",
        );
      return {
        body: d,
        confirmUrl: i,
        primaryButtonLabel: c,
        secondaryButtonLabel: u,
        title: m,
      };
    }
    l.default = u;
  },
  98,
);
