__d(
  "WAWebExternalCtxConfig",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = "partnertoken",
      s = "token";
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "external_ctx_authorise_wa_chat",
      );
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue("external_ctx_foa_logging") === 1
      );
    }
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "external_ctx_authorise_existing_chats",
      );
      return e === 1
        ? "NEW_CHATS_OR_EXISTING_CHATS_WITH_PARTNER_LINKS"
        : e === 2
          ? "ALL_CHATS"
          : "NEW_CHATS_ONLY";
    }
    function m() {
      var t =
          o("WAWebABProps").getABPropConfigValue(
            "external_ctx_url_param_names",
          ) || "",
        n = t
          .split(",")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          });
      return ((n = n.length > 0 ? n : [e]), c() && n.push(s), n);
    }
    ((l.isCtxLoggingEnabled = u),
      (l.getFirstMessageLoggingOption = d),
      (l.getExternalCtxUrlParamNames = m));
  },
  98,
);
