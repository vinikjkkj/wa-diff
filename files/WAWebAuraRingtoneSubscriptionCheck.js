__d(
  "WAWebAuraRingtoneSubscriptionCheck",
  [
    "WALogger",
    "WAWebAuraGating",
    "WAWebAuraRingtoneDownloader",
    "WAWebAuraRingtonePrefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      if (!r("WAWebAuraGating").isRingtonesBenefitActive()) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aura_ringtones] Checking for premium ringtones to revert",
            ])),
        ),
          o("WAWebAuraRingtoneDownloader").clearRingtoneCache());
        var t = o("WAWebAuraRingtonePrefs").getSelectedRingtoneId();
        t !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID &&
          t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Reverting premium ringtone to default",
              ])),
          ),
          o("WAWebAuraRingtonePrefs").resetToDefaultRingtone());
      }
    }
    async function c() {
      r("WAWebAuraGating").isRingtonesBenefitActive()
        ? await o("WAWebAuraRingtoneDownloader").downloadPremiumRingtones()
        : u();
    }
    ((l.checkAndRevertPremiumRingtones = u), (l.initSubscriptionCheck = c));
  },
  98,
);
