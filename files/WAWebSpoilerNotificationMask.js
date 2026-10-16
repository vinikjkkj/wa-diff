__d(
  "WAWebSpoilerNotificationMask",
  [
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebPreviewFormatGating",
    "WAWebSpoilerFormatRegex",
    "WAWebUnformatSerializer",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.onDelimiter = function (t) {
            return t === o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER
              ? ""
              : t;
          }),
          t
        );
      })(r("WAWebUnformatSerializer")),
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.onDelimiter = function (t) {
            return t === o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER
              ? " ".repeat(
                  o("WAWebSpoilerFormatRegex").SPOILER_DELIMITER.length,
                )
              : t;
          }),
          (t.onMutator = function (t, n, r) {
            var e = n.join("");
            return t.maskOnUnformat !== !0 ? e : " ".repeat(u(r, e.length));
          }),
          t
        );
      })(r("WAWebUnformatSerializer"));
    function u(e, t) {
      var n = Array.isArray(e) ? e[1] : null;
      return typeof n == "string" ? n.length : t;
    }
    var c = "\u2801\u2802\u2803\u2804\u2805\u2806\u2807";
    function d(t, n, a) {
      return (
        n === void 0 && (n = c),
        r("WAWebFormat")(
          t,
          o("WAWebFormatConfiguration").NotificationSpoilerMask(a),
          e,
          { serializerOptions: { spoilerReplacement: n } },
        )
      );
    }
    function m(e, t) {
      t === void 0 && (t = c);
      var n = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled();
      return d(e, t, { parseBlockCode: n, parseInlineCode: n });
    }
    function p(e, t) {
      var n = r("WAWebFormat")(
        e,
        o("WAWebFormatConfiguration").NotificationSpoilerMask(t),
        s,
      );
      return n.length === e.length ? n : " ".repeat(e.length);
    }
    ((l.BRAILLE_MASK = c),
      (l.maskSpoilersForNotification = d),
      (l.maskSpoilersForPreview = m),
      (l.maskSpoilersPreservingLength = p));
  },
  98,
);
