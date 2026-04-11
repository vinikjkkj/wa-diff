__d(
  "WAWebQuestionsPrivacyBanner.react",
  [
    "fbt",
    "WAWebCloseRefreshedIcon.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebIcLightbulbIcon.react",
    "WAWebNewsletterFaqUrl",
    "WAWebNux",
    "WAWebQuestions.flow",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        cell: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          marginInlineStart: "x6pxu1d",
          marginInlineEnd: "xd6izgl",
          marginLeft: null,
          marginRight: null,
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        icon: {
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          color: "xhslqc4",
          $$css: !0,
        },
        closeIcon: {
          marginInlineStart: "xlese2p",
          marginInlineEnd: "xviac27",
          marginLeft: null,
          marginRight: null,
          marginBottom: "x1ua1l7f",
          color: "xhslqc4",
          $$css: !0,
        },
        body: { width: "xh8yej3", $$css: !0 },
        learnMore: { marginInlineStart: "x1sbwfh8", $$css: !0 },
      };
    function m(e) {
      var t = e.questionType,
        n = c(!0),
        a = n[0],
        i = n[1],
        l =
          t === o("WAWebQuestions.flow").QuestionType.Question
            ? o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_PRIVACY_BANNER
            : o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER,
        m = r("useWAWebNux")(l),
        p = m[1];
      if (t !== o("WAWebQuestions.flow").QuestionType.Reply && a) {
        var _ = function () {
            (i(!1), p());
          },
          f =
            t === o("WAWebQuestions.flow").QuestionType.Question
              ? s._(
                  /*BTDS*/ "Anyone viewing your channel can respond. Followers can\u2019t see who responded but admins can.",
                )
              : u.jsxs(u.Fragment, {
                  children: [
                    s._(
                      /*BTDS*/ "Admins can share your response in the channel.",
                    ),
                    u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o(
                        "WAWebNewsletterFaqUrl",
                      ).getNewsletterQuestionResponsePrivacyFaqUrl(),
                      xstyle: d.learnMore,
                      children: r("WAWebFbtCommon")("Learn more"),
                    }),
                  ],
                });
        return u.jsxs(o("WAWebFlex.react").FlexRow, {
          xstyle: d.cell,
          align: "center",
          marginBottom:
            t === o("WAWebQuestions.flow").QuestionType.Question ? 16 : 0,
          children: [
            u.jsx(o("WAWebIcLightbulbIcon.react").IcLightbulbIcon, {
              xstyle: d.icon,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              xstyle: d.body,
              children: f,
            }),
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
              xstyle: d.closeIcon,
              onPress: _,
              variant: "borderless",
            }),
          ],
        });
      }
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t =
          e === o("WAWebQuestions.flow").QuestionType.Question
            ? o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_PRIVACY_BANNER
            : o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER,
        n = r("useWAWebNux")(t),
        a = n[0];
      return a;
    }
    ((l.WAWebQuestionsPrivacyBanner = m),
      (l.useNewsletterQuestionsPrivacyBanner = p));
  },
  226,
);
