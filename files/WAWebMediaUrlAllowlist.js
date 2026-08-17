__d(
  "WAWebMediaUrlAllowlist",
  ["WALogger", "WAWebMediaUrlAllowlistGating", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (!r("WAWebURLUtils").isHttps(e)) return !1;
      var t = r("WAWebURLUtils").hostname(e);
      return t === "whatsapp.net" || t.endsWith(".whatsapp.net");
    }
    function u(t) {
      return t == null || t === ""
        ? null
        : o(
              "WAWebMediaUrlAllowlistGating",
            ).isMediaUrlAllowlistValidationEnabled()
          ? s(t)
            ? t
            : (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "media url dropped: host not on the media CDN allow-list",
                    ])),
                )
                .sendLogs("media-url-not-allowlisted", { sampling: 0.01 }),
              null)
          : t;
    }
    ((l.isAllowedMediaUrl = s), (l.allowlistedMediaUrl = u));
  },
  98,
);
