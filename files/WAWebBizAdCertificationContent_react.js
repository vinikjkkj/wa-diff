__d(
  "WAWebBizAdCertificationContent.react",
  [
    "fbt",
    "WAWebChevronCustomIcons",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WDSIconIcCheck.react",
    "WDSIconIcDescriptionFilled.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        content: { rowGap: "x1f0uite", $$css: !0 },
        iconContainer: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        iconCircleBackground: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x1dmp6jm",
          height: "xwzfr38",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1abdmlv",
          $$css: !0,
        },
        headerText: { textAlign: "x2b8uid", $$css: !0 },
        section: { rowGap: "x129bwdz", $$css: !0 },
        bulletList: { rowGap: "x1qvou4u", $$css: !0 },
        bulletItem: {
          alignItems: "x1cy8zhl",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
        checkmarkIcon: { color: "x1du590y", flexShrink: "x2lah0s", $$css: !0 },
        dropdownHeader: { cursor: "x1ypdohk", $$css: !0 },
        dropdownHeaderText: { flexGrow: "x1iyjqo2", $$css: !0 },
        dropdownContent: {
          paddingTop: "x1tiyuxx",
          rowGap: "x1qvou4u",
          $$css: !0,
        },
        linkList: { rowGap: "x129bwdz", $$css: !0 },
        subsection: { rowGap: "x129bwdz", paddingTop: "x16ovd2e", $$css: !0 },
      };
    function m(e) {
      var t = e.children,
        n = e.title,
        a = c(!1),
        i = a[0],
        l = a[1],
        s = function () {
          l(!i);
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: d.section,
        children: [
          u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: s,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: d.dropdownHeader,
              children: [
                u.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body1Emphasized",
                  xstyle: d.dropdownHeaderText,
                  children: n,
                }),
                i
                  ? u.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                      height: 20,
                    })
                  : u.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                      height: 20,
                    }),
              ],
            }),
          }),
          i
            ? u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: d.dropdownContent,
                children: t,
              })
            : null,
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var e, t, n;
      return u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
        align: "stretch",
        xstyle: d.content,
        children: [
          u.jsx(n.FlexColumn, {
            xstyle: d.iconContainer,
            children: u.jsx(n.FlexRow, {
              xstyle: d.iconCircleBackground,
              children: u.jsx(r("WDSIconIcDescriptionFilled.react"), {
                height: 48,
                width: 48,
                colorName: "contentRead",
              }),
            }),
          }),
          u.jsx(n.FlexColumn, {
            xstyle: d.iconContainer,
            children: u.jsx((e = r("WDSText.react")), {
              colorName: "contentDefault",
              type: "Headline2",
              xstyle: d.headerText,
              children: s._(/*BTDS*/ "About our Non-discrimination Policy"),
            }),
          }),
          u.jsx(e, {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "When you started advertising on Facebook and Instagram, you agreed to our non-discrimination policy. The policy hasn't changed, but we're sharing some examples to make it more clear.",
            ),
          }),
          u.jsx(e, {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "Ads are discriminatory when they deny opportunities to people or groups based on certain attributes such as race, ethnicity, national origin, religion, age, sex, sexual orientation, gender identity, family\/marital status, disability or medical or genetic condition.",
            ),
          }),
          u.jsxs(n.FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              u.jsx(e, {
                colorName: "contentDefault",
                type: "Body1Emphasized",
                children: s._(/*BTDS*/ "Acceptable ad targeting"),
              }),
              u.jsx(e, {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job at a grocery store to all individuals of eligible working age.",
                ),
              }),
            ],
          }),
          u.jsxs(n.FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              u.jsx(e, {
                colorName: "contentDefault",
                type: "Body1Emphasized",
                children: s._(/*BTDS*/ "Ad discrimination"),
              }),
              u.jsx(e, {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job at a clothing store in a way to exclude women and discourage them from applying.",
                ),
              }),
            ],
          }),
          u.jsxs(m, {
            title: s._(
              /*BTDS*/ "Housing, employment and financial products and services advertiser considerations",
            ),
            children: [
              u.jsx(e, {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "While we are asking all advertisers to review and accept our non-discrimination policy, it's especially important for advertisers running housing, employment or financial products and services ads because of the history of discrimination in these categories. Opportunities presented in these types of ads must be inclusive and extended to all groups of people, regardless of certain personal attributes like those listed above. Many locations have laws that specifically prohibit discrimination in these categories.",
                ),
              }),
              u.jsxs(n.FlexColumn, {
                align: "stretch",
                xstyle: d.subsection,
                children: [
                  u.jsx(e, {
                    colorName: "contentDefault",
                    type: "Body1Emphasized",
                    children: s._(/*BTDS*/ "Acceptable ad targeting"),
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(/*BTDS*/ "Housing targeting"),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for a flat to rent to people who live in or around the general location of the listing.",
                        ),
                      }),
                    ],
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(/*BTDS*/ "Employment targeting"),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for a job as a salesperson to people who are interested in sales and marketing.",
                        ),
                      }),
                    ],
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(
                          /*BTDS*/ "Financial products and services targeting",
                        ),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for checking and savings accounts to all individuals of eligible age.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs(n.FlexColumn, {
                align: "stretch",
                xstyle: d.subsection,
                children: [
                  u.jsx(e, {
                    colorName: "contentDefault",
                    type: "Body1Emphasized",
                    children: s._(/*BTDS*/ "Ad discrimination"),
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(/*BTDS*/ "Housing discrimination"),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for a flat to rent that excludes certain postcodes with the intent to deny it to people of a certain race.",
                        ),
                      }),
                    ],
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(/*BTDS*/ "Employment discrimination"),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for a job as a salesperson in a way intended to exclude women.",
                        ),
                      }),
                    ],
                  }),
                  u.jsxs(n.FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      u.jsx(e, {
                        colorName: "contentDefault",
                        type: "Body1",
                        children: s._(
                          /*BTDS*/ "Financial products and services discrimination",
                        ),
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "Targeting an ad for checking and savings accounts that attempts to exclude individuals of a specific national origin.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs(m, {
            title: s._(/*BTDS*/ "Full Non-discrimination Policy"),
            children: [
              u.jsx(e, {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Ads must not discriminate or encourage discrimination against people based on personal attributes such as race, ethnicity, color, national origin, religion, age, sex, sexual orientation, gender identity, family status, disability, medical or genetic condition. Meta prohibits advertisers from using our ads products to discriminate against people. This means that advertisers may not (1) use our audience selection tools to (a) wrongfully target specific groups of people for advertising (see Advertising Policy 7.1 on Targeting), or (b) wrongfully exclude specific groups of people from seeing their ads; or (2) include discriminatory content in their ads. Advertisers are also required to comply with applicable laws that prohibit discrimination (see Advertising Policy 4.2 on Illegal Products or Services). These include laws that prohibit discriminating against groups of people in connection with, for example, offers of housing, employment, and financial products and services.",
                ),
              }),
              u.jsxs(n.FlexColumn, {
                align: "stretch",
                xstyle: d.linkList,
                children: [
                  u.jsx((t = r("WDSTextualLink.react")), {
                    href: "https://www.hud.gov/",
                    children: s._(
                      /*BTDS*/ "US Department of Housing and Urban Development",
                    ),
                  }),
                  u.jsx(t, {
                    href: "https://www.eeoc.gov/",
                    children: s._(
                      /*BTDS*/ "US Equal Employment Opportunity Commission",
                    ),
                  }),
                  u.jsx(t, {
                    href: "https://www.consumerfinance.gov/",
                    children: s._(
                      /*BTDS*/ "Consumer Financial Protection Bureau",
                    ),
                  }),
                  u.jsx(t, {
                    href: "https://www.aclu.org/",
                    children: s._(/*BTDS*/ "American Civil Liberties Union"),
                  }),
                  u.jsx(t, {
                    href: "https://civilrights.org/",
                    children: s._(
                      /*BTDS*/ "Leadership Conference on Civil and Human Rights",
                    ),
                  }),
                  u.jsx(t, {
                    href: "https://www.justice.gov/",
                    children: s._(
                      /*BTDS*/ "Department of Justice - Civil Rights Division",
                    ),
                  }),
                  u.jsx(t, {
                    href: "https://nationalfairhousing.org/",
                    children: s._(/*BTDS*/ "National Fair Housing Alliance"),
                  }),
                ],
              }),
            ],
          }),
          u.jsx(e, {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "Facebook's Non-discrimination Policy is global, but different regions may have additional regulations. Make sure that you follow any applicable laws or policies in both your location and the location that you're targeting.",
            ),
          }),
          u.jsxs(n.FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              u.jsx(e, {
                colorName: "contentDefault",
                type: "Body1Emphasized",
                children: s._(
                  /*BTDS*/ "When you click I Accept, this means that you:",
                ),
              }),
              u.jsxs(n.FlexColumn, {
                align: "stretch",
                xstyle: d.bulletList,
                children: [
                  u.jsxs(n.FlexRow, {
                    xstyle: d.bulletItem,
                    children: [
                      u.jsx(r("WDSIconIcCheck.react"), {
                        height: 20,
                        width: 20,
                        iconXstyle: d.checkmarkIcon,
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "will follow our advertising policies and any other applicable laws",
                        ),
                      }),
                    ],
                  }),
                  u.jsxs(n.FlexRow, {
                    xstyle: d.bulletItem,
                    children: [
                      u.jsx(r("WDSIconIcCheck.react"), {
                        height: 20,
                        width: 20,
                        iconXstyle: d.checkmarkIcon,
                      }),
                      u.jsx(e, {
                        colorName: "contentDeemphasized",
                        type: "Body2",
                        children: s._(
                          /*BTDS*/ "won't make any discriminatory ads",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
