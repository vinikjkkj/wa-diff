__d(
  "WAWebMutePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebModalManager",
    "WAWebMuteExpirations",
    "WAWebRadio.react",
    "WAWebText.react",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p() {
      o("WAWebModalManager").ModalManager.close();
    }
    function _(e) {
      var t = e.children,
        n = e.onMute,
        r = o("useWAWebModelValues").useModelValues(e.mute, [
          "id",
          "expiration",
          "callExpiration",
        ]),
        a = m(null),
        i = a[0],
        l = a[1],
        c = function (t) {
          l(t);
        },
        _ = function () {
          return i != null && i !== 0
            ? i
            : o("WAWebUserPrefsGeneral").getLastChatMuteDuration() ||
                o("WAWebMuteExpirations").getDefaultMuteDuration();
        },
        f = function () {
          o("WAWebModalManager").ModalManager.close();
          var t = _();
          (o("WAWebUserPrefsGeneral").setLastChatMuteDuration(t),
            n(
              o("WAWebMuteExpirations").calculateMuteExpiration(t),
              t,
              e.entryPoint == null ? 0 : e.entryPoint,
            ));
        };
      d(
        function () {
          r.expiration != null &&
            r.expiration !== 0 &&
            r.callExpiration != null &&
            r.callExpiration !== 0 &&
            p();
        },
        [r.callExpiration, r.expiration, e],
      );
      var g = e.onCancel || p,
        h = _(),
        y = u.jsx(o("WAWebRadio.react").RadioGroup, {
          name: "ractionMuteDuration",
          theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
          checkedValue: h,
          options: o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(
            function (e) {
              var t = e.duration,
                n = e.getLabel,
                r = e.radioId;
              return {
                value: t,
                label: n(),
                testid: r,
                onChange: function () {
                  return c(t);
                },
              };
            },
          ),
        });
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "mute-chat" },
        title: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e.title }),
        okText: s._(/*BTDS*/ "Mute"),
        onOK: f,
        onCancel: g,
        testid: void 0,
        children: [
          t != null &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              paddingBottom: 12,
              children: t,
            }),
          y,
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
