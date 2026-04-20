__d(
  "WAWebAuraRingtonePlayback",
  ["WALogger", "WAWebAuraRingtoneDownloader", "WAWebAuraRingtonePrefs", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("bx").getURL(r("bx")("78755"));
    function p(t) {
      if (t != null) {
        var n = o("WAWebAuraRingtonePrefs").getChatRingtoneId(t);
        if (n != null)
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[aura_ringtones] Resolved ringtone ID: ",
                  " (per-chat)",
                ])),
              n,
            ),
            n
          );
      }
      var r = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
      return r === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID
        ? null
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Resolved ringtone ID: ",
                " (global)",
              ])),
            r,
          ),
          r);
    }
    function _(e) {
      var t = p(e);
      if (t == null) return m;
      if (t === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID)
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Using silent ringtone",
              ])),
          ),
          null
        );
      var n = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(t);
      if (n != null)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Using premium ringtone URL: ",
                "",
              ])),
            t,
          ),
          n
        );
      if (
        e != null &&
        o("WAWebAuraRingtonePrefs").getChatRingtoneId(e) != null
      ) {
        var r = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
        if (
          r !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID &&
          r !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID
        ) {
          var a = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(r);
          if (a != null)
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aura_ringtones] chat tone uncached, fallback: ",
                    "",
                  ])),
                r,
              ),
              a
            );
        }
      }
      return m;
    }
    ((l.getRingtoneId = p), (l.getRingtoneURL = _));
  },
  98,
);
