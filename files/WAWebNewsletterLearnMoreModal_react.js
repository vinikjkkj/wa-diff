__d(
  "WAWebNewsletterLearnMoreModal.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebEnforcementActionLogging",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNewsletterModalsUtils.react",
    "WAWebText.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          backgroundColor: "x1i3zgry",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          color: "xijeqtt",
          $$css: !0,
        },
        textCenter: { textAlign: "x2b8uid", $$css: !0 },
        paddingAll24: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
      };
    function c(e) {
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          r("WAWebEnforcementActionLogging").logDismissModalClick();
        },
      );
      var t = e.Icon,
        n = e.paragraphs,
        a = e.sections,
        i = e.title;
      return s.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        okText: r("WAWebFbtCommon")("Close"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: [
          t != null &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: s.jsx(t, {
                width: 48,
                height: 48,
                xstyle: [u.paddingAll24, u.icon],
              }),
            }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            padding: 24,
            testid: void 0,
            children: s.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "medium",
              color: "primary",
              children: i,
            }),
          }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children:
              n == null
                ? void 0
                : n.map(function (e) {
                    return s.jsx(
                      o("WAWebText.react").WAWebTextTitle,
                      {
                        color: "primary",
                        paddingBottom: 16,
                        xstyle: u.textCenter,
                        children: e.content(),
                      },
                      e.key,
                    );
                  }),
          }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "start",
            children:
              a == null
                ? void 0
                : a.map(function (e) {
                    return s.jsxs(
                      o("WAWebFlex.react").FlexColumn,
                      {
                        children: [
                          e.title != null &&
                            s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                              color: "primary",
                              paddingBottom: 16,
                              children: e.title(),
                            }),
                          s.jsx(
                            o("WAWebNewsletterModalsUtils.react")
                              .BulletPointList,
                            { bullets: e.bullets },
                          ),
                        ],
                      },
                      e.key,
                    );
                  }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
