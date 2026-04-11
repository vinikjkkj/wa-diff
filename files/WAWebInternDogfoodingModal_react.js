__d(
  "WAWebInternDogfoodingModal.react",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        chatIcon: { display: "x78zum5", justifyContent: "xl56j7k", $$css: !0 },
      };
    function d() {
      var e = u(!0),
        t = e[0],
        a = e[1];
      if (
        !t ||
        !r("gkx")("26258") ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_intern_dogfooding_upsell_enabled",
        ) ||
        r("WAWebEnvironment").isWindows
      )
        return;
      var i = g();
      if (i != null && i > o("WATimeUtils").unixTime()) return;
      var l = o("WAWebABProps").getABPropConfigValue(
          "web_intern_dogfooding_upsell_content",
        ),
        d = JSON.parse(l);
      if (
        d.title == null ||
        d.web_link == null ||
        d.ok_text == null ||
        d.cancel_text == null
      )
        return;
      var m = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            window.location.replace(d.web_link);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        p = function () {
          var e = o("WAWebABProps").getABPropConfigValue(
            "web_intern_dogfooding_upsell_snooze_duration",
          );
          (f(o("WATimeUtils").unixTime() + e), a(!1));
        },
        _ = s.jsx("div", {
          className:
            "xh8yej3 xpyat2d x1f6kntn x1fc57z9 x1yc453h xlese2p xviac27",
          children: s.jsxs("div", {
            children: [
              "Help us with dogfooding by moving to the ",
              s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: d.web_link,
                className: "x117nqv4",
                children: "internal version",
              }),
              " ",
              "of the web client. Share your feedback/bugs on the ",
              s.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: d.group_link,
                className: "x117nqv4",
                children: "WhatsApp Web Feedback",
              }),
              " on Workplace.",
            ],
          }),
        });
      return s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: m,
        onOverlayClick: p,
        okText: d.ok_text,
        onCancel: p,
        cancelText: d.cancel_text,
        children: [
          s.jsx(
            o("WAWebAnnouncementSpeakerIcon.react").AnnouncementSpeakerIcon,
            { width: 120, height: 120, xstyle: c.chatIcon },
          ),
          s.jsxs("div", {
            className: "xh8yej3",
            children: [
              s.jsx("div", {
                className:
                  "x1603h9y xjs9k72 x1fc57z9 x2b8uid x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
                children: s.jsx("b", { children: d.title }),
              }),
              _,
            ],
          }),
        ],
      });
      function f(e) {
        r("WANullthrows")(r("WAWebLocalStorage")).setItem(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL,
          String(e),
        );
      }
      function g() {
        var e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_ID_UPSELL_SNOOZE_UNTIL,
        );
        return e == null ? null : Number.parseInt(e, 10);
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
