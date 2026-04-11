__d(
  "WAWebAppRatingDialogTrigger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAppRatingActiveUsageDays",
    "WAWebAppRatingModalLoadable",
    "WAWebAppRatingWamLogger",
    "WAWebClock",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebUserPrefsNuxPreferences",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = f || (f = o("react"));
    function h(e) {
      var t = function () {
          o("WAWebAppRatingWamLogger").logAppRatingDialogAction("closed", e);
        },
        n = function () {
          o("WAWebAppRatingWamLogger").logAppRatingDialogAction("submitted", e);
        };
      o("WAWebModalManager").ModalManager.open(
        g.jsx(o("WAWebAppRatingModalLoadable").WAWebAppRatingModalLoadable, {
          onCancel: t,
          onSubmit: n,
        }),
      );
    }
    function y() {
      var t = o(
          "WAWebAppRatingActiveUsageDays",
        ).getActiveUsageDaysSinceDialogOpened(),
        n = o("WAWebABProps").getABPropConfigValue("rnr_min_days_user_active"),
        r = o("WAWebABProps").getABPropConfigValue("rnr_days_cooldown");
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[AppRating] usage: days=",
              " min=",
              " cooldown=",
              "",
            ])),
          t,
          n,
          r,
        ),
        t < n)
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[AppRating] min active days not met (",
                " < ",
                ")",
              ])),
            t,
            n,
          ),
          !1
        );
      var a = o("WAWebUserPrefsNuxPreferences").getNuxAcknowledgedTimestamp(
        o("WAWebNux").NuxSyncKey.LAST_DATE_DIALOG_OPENED,
      );
      if (a != null) {
        var i = o("WAWebClock").Clock.getServerTimeMs(),
          l = Math.floor((i - a) / (1e3 * 60 * 60 * 24));
        if (l < r)
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[AppRating] in cooldown (",
                  " < ",
                  " days)",
                ])),
              l,
              r,
            ),
            !1
          );
      }
      return !0;
    }
    function C() {
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "web_rating_and_review_contextual_prompt_enabled",
        )
      ) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[AppRating] disabled via ABprop",
            ])),
        );
        return;
      }
      if (r("gkx")("4112")) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[AppRating] disabled on Windows",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[AppRating] checking trigger conditions",
          ])),
      ),
        y()
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[AppRating] conditions met, showing contextual dialog",
                ])),
            ),
            h("contextual"))
          : o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[AppRating] conditions not met, skipping",
                ])),
            ));
    }
    ((l.showAppRatingDialog = h), (l.checkAndTriggerAppRatingDialog = C));
  },
  98,
);
