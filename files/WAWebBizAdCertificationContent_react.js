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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.children,
        a = e.title,
        i = c(!1),
        l = i[0],
        s = i[1],
        m;
      t[0] !== l
        ? ((m = function () {
            s(!l);
          }),
          (t[0] = l),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== a
        ? ((_ = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            xstyle: d.dropdownHeaderText,
            children: a,
          })),
          (t[2] = a),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== l
        ? ((f = l
            ? u.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                height: 20,
              })
            : u.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                height: 20,
              })),
          (t[4] = l),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== _ || t[7] !== f
        ? ((g = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.dropdownHeader,
            children: [_, f],
          })),
          (t[6] = _),
          (t[7] = f),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== p || t[10] !== g
        ? ((h = u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: p,
            children: g,
          })),
          (t[9] = p),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== n || t[13] !== l
        ? ((y = l
            ? u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: d.dropdownContent,
                children: n,
              })
            : null),
          (t[12] = n),
          (t[13] = l),
          (t[14] = y))
        : (y = t[14]);
      var C;
      return (
        t[15] !== h || t[16] !== y
          ? ((C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: d.section,
              children: [h, y],
            })),
            (t[15] = h),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(39),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.iconContainer,
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.iconCircleBackground,
              children: u.jsx(r("WDSIconIcDescriptionFilled.react"), {
                height: 48,
                width: 48,
                colorName: "contentRead",
              }),
            }),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.iconContainer,
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDefault",
              type: "Headline2",
              xstyle: d.headerText,
              children: s._(/*BTDS*/ "About our Non-discrimination Policy"),
            }),
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "When you started advertising on Facebook and Instagram, you agreed to our non-discrimination policy. The policy hasn't changed, but we're sharing some examples to make it more clear.",
            ),
          })),
          (e[2] = a))
        : (a = e[2]);
      var i;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "Ads are discriminatory when they deny opportunities to people or groups based on certain attributes such as race, ethnicity, national origin, religion, age, sex, sexual orientation, gender identity, family\/marital status, disability or medical or genetic condition.",
            ),
          })),
          (e[3] = i))
        : (i = e[3]);
      var l;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(/*BTDS*/ "Acceptable ad targeting"),
          })),
          (e[4] = l))
        : (l = e[4]);
      var c;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              l,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job at a grocery store to all individuals of eligible working age.",
                ),
              }),
            ],
          })),
          (e[5] = c))
        : (c = e[5]);
      var p;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(/*BTDS*/ "Ad discrimination"),
          })),
          (e[6] = p))
        : (p = e[6]);
      var _;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              p,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job at a clothing store in a way to exclude women and discourage them from applying.",
                ),
              }),
            ],
          })),
          (e[7] = _))
        : (_ = e[7]);
      var f;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(
            /*BTDS*/ "Housing, employment and financial products and services advertiser considerations",
          )),
          (e[8] = f))
        : (f = e[8]);
      var g;
      e[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "While we are asking all advertisers to review and accept our non-discrimination policy, it's especially important for advertisers running housing, employment or financial products and services ads because of the history of discrimination in these categories. Opportunities presented in these types of ads must be inclusive and extended to all groups of people, regardless of certain personal attributes like those listed above. Many locations have laws that specifically prohibit discrimination in these categories.",
            ),
          })),
          (e[9] = g))
        : (g = e[9]);
      var h;
      e[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(/*BTDS*/ "Acceptable ad targeting"),
          })),
          (e[10] = h))
        : (h = e[10]);
      var y;
      e[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(/*BTDS*/ "Housing targeting"),
          })),
          (e[11] = y))
        : (y = e[11]);
      var C;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              y,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a flat to rent to people who live in or around the general location of the listing.",
                ),
              }),
            ],
          })),
          (e[12] = C))
        : (C = e[12]);
      var b;
      e[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(/*BTDS*/ "Employment targeting"),
          })),
          (e[13] = b))
        : (b = e[13]);
      var v;
      e[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              b,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job as a salesperson to people who are interested in sales and marketing.",
                ),
              }),
            ],
          })),
          (e[14] = v))
        : (v = e[14]);
      var S;
      e[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(/*BTDS*/ "Financial products and services targeting"),
          })),
          (e[15] = S))
        : (S = e[15]);
      var R;
      e[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.subsection,
            children: [
              h,
              C,
              v,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: d.section,
                children: [
                  S,
                  u.jsx(r("WDSText.react"), {
                    colorName: "contentDeemphasized",
                    type: "Body2",
                    children: s._(
                      /*BTDS*/ "Targeting an ad for checking and savings accounts to all individuals of eligible age.",
                    ),
                  }),
                ],
              }),
            ],
          })),
          (e[16] = R))
        : (R = e[16]);
      var L;
      e[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(/*BTDS*/ "Ad discrimination"),
          })),
          (e[17] = L))
        : (L = e[17]);
      var E;
      e[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(/*BTDS*/ "Housing discrimination"),
          })),
          (e[18] = E))
        : (E = e[18]);
      var k;
      e[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              E,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a flat to rent that excludes certain postcodes with the intent to deny it to people of a certain race.",
                ),
              }),
            ],
          })),
          (e[19] = k))
        : (k = e[19]);
      var I;
      e[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(/*BTDS*/ "Employment discrimination"),
          })),
          (e[20] = I))
        : (I = e[20]);
      var T;
      e[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: d.section,
            children: [
              I,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "Targeting an ad for a job as a salesperson in a way intended to exclude women.",
                ),
              }),
            ],
          })),
          (e[21] = T))
        : (T = e[21]);
      var D;
      e[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: s._(
              /*BTDS*/ "Financial products and services discrimination",
            ),
          })),
          (e[22] = D))
        : (D = e[22]);
      var x;
      e[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsxs(m, {
            title: f,
            children: [
              g,
              R,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: d.subsection,
                children: [
                  L,
                  k,
                  T,
                  u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "stretch",
                    xstyle: d.section,
                    children: [
                      D,
                      u.jsx(r("WDSText.react"), {
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
          })),
          (e[23] = x))
        : (x = e[23]);
      var $;
      e[24] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Full Non-discrimination Policy")), (e[24] = $))
        : ($ = e[24]);
      var P;
      e[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "Ads must not discriminate or encourage discrimination against people based on personal attributes such as race, ethnicity, color, national origin, religion, age, sex, sexual orientation, gender identity, family status, disability, medical or genetic condition. Meta prohibits advertisers from using our ads products to discriminate against people. This means that advertisers may not (1) use our audience selection tools to (a) wrongfully target specific groups of people for advertising (see Advertising Policy 7.1 on Targeting), or (b) wrongfully exclude specific groups of people from seeing their ads; or (2) include discriminatory content in their ads. Advertisers are also required to comply with applicable laws that prohibit discrimination (see Advertising Policy 4.2 on Illegal Products or Services). These include laws that prohibit discriminating against groups of people in connection with, for example, offers of housing, employment, and financial products and services.",
            ),
          })),
          (e[25] = P))
        : (P = e[25]);
      var N;
      e[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.hud.gov/",
            children: s._(
              /*BTDS*/ "US Department of Housing and Urban Development",
            ),
          })),
          (e[26] = N))
        : (N = e[26]);
      var M;
      e[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.eeoc.gov/",
            children: s._(
              /*BTDS*/ "US Equal Employment Opportunity Commission",
            ),
          })),
          (e[27] = M))
        : (M = e[27]);
      var w;
      e[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.consumerfinance.gov/",
            children: s._(/*BTDS*/ "Consumer Financial Protection Bureau"),
          })),
          (e[28] = w))
        : (w = e[28]);
      var A;
      e[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.aclu.org/",
            children: s._(/*BTDS*/ "American Civil Liberties Union"),
          })),
          (e[29] = A))
        : (A = e[29]);
      var F;
      e[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx(r("WDSTextualLink.react"), {
            href: "https://civilrights.org/",
            children: s._(
              /*BTDS*/ "Leadership Conference on Civil and Human Rights",
            ),
          })),
          (e[30] = F))
        : (F = e[30]);
      var O;
      e[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx(r("WDSTextualLink.react"), {
            href: "https://www.justice.gov/",
            children: s._(
              /*BTDS*/ "Department of Justice - Civil Rights Division",
            ),
          })),
          (e[31] = O))
        : (O = e[31]);
      var B;
      e[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsxs(m, {
            title: $,
            children: [
              P,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: d.linkList,
                children: [
                  N,
                  M,
                  w,
                  A,
                  F,
                  O,
                  u.jsx(r("WDSTextualLink.react"), {
                    href: "https://nationalfairhousing.org/",
                    children: s._(/*BTDS*/ "National Fair Housing Alliance"),
                  }),
                ],
              }),
            ],
          })),
          (e[32] = B))
        : (B = e[32]);
      var W;
      e[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            type: "Body2",
            children: s._(
              /*BTDS*/ "Facebook's Non-discrimination Policy is global, but different regions may have additional regulations. Make sure that you follow any applicable laws or policies in both your location and the location that you're targeting.",
            ),
          })),
          (e[33] = W))
        : (W = e[33]);
      var q;
      e[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1Emphasized",
            children: s._(
              /*BTDS*/ "When you click I Accept, this means that you:",
            ),
          })),
          (e[34] = q))
        : (q = e[34]);
      var U;
      e[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(r("WDSIconIcCheck.react"), {
            height: 20,
            width: 20,
            iconXstyle: d.checkmarkIcon,
          })),
          (e[35] = U))
        : (U = e[35]);
      var V;
      e[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.bulletItem,
            children: [
              U,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: s._(
                  /*BTDS*/ "will follow our advertising policies and any other applicable laws",
                ),
              }),
            ],
          })),
          (e[36] = V))
        : (V = e[36]);
      var H;
      e[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(r("WDSIconIcCheck.react"), {
            height: 20,
            width: 20,
            iconXstyle: d.checkmarkIcon,
          })),
          (e[37] = H))
        : (H = e[37]);
      var G;
      if (e[38] === Symbol.for("react.memo_cache_sentinel")) {
        var z;
        ((G = u.jsxs((z = o("WAWebFlex.react")).FlexColumn, {
          align: "stretch",
          xstyle: d.content,
          children: [
            t,
            n,
            a,
            i,
            c,
            _,
            x,
            B,
            W,
            u.jsxs(z.FlexColumn, {
              align: "stretch",
              xstyle: d.section,
              children: [
                q,
                u.jsxs(z.FlexColumn, {
                  align: "stretch",
                  xstyle: d.bulletList,
                  children: [
                    V,
                    u.jsxs(z.FlexRow, {
                      xstyle: d.bulletItem,
                      children: [
                        H,
                        u.jsx(r("WDSText.react"), {
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
        })),
          (e[38] = G));
      } else G = e[38];
      return G;
    }
    l.default = p;
  },
  226,
);
